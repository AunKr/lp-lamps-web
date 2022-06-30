const bcrypt = require('bcrypt')

const User = require("../database/operations/user.js");
const tokenService = require('../shared/jwt.token.service.js')
const service = require('../shared/service.response.js')

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isDuplicateUser = await User.getFirst({ email: email });
    //This will check that user is Registered User or not
    if (isDuplicateUser) {
      return res.json({
        message: "Already registered with this email id!!",
        type: "error",
      });
    } else {
      let hashedpassword = await bcrypt.hash(password, 12);
      if (hashedpassword) {
        req.body.password = hashedpassword;
        const userRegistered = await User.create(req.body);
        if (userRegistered) {
          return res.status(201).json({
            message: "Registration Successful!!",
            type: "success",
          });
        } else {
          return res.json({
            message: error,
            type: "error",
          });
        }
      }
    }
  } catch (error) {
    res.send({ error: error }).status(500);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
	const user = await User.getFirst({ email: email });
	if (user) {
		const passwordMatched = await bcrypt.compare(password, user.password);
		if (passwordMatched) {
			const token = tokenService.issueToken({email: email, password: user.password})
            const result = {
				message: 'LoggIn Successful!!',
				type: 'success',
				token: token,
				expiresIn: 3600,
				userData: user,
			}
            return service.responseSuccess(res, result);
		} else {
            return service.responseError(res, service.createError(service.ERROR.ERROR_AUTHORIZATION_FAIL, 'Invalid Credentials'));
		}
	} else {
        return service.responseError(res, service.createError(service.ERROR.ERROR_AUTHORIZATION_FAIL, 'Invalid Credentials'));
	}
  } catch (error) {
    console.log("error", error);
    return service.responseError(res, service.createError(service.ERROR.ERROR_BAD_REQUEST, "Something went wrong"));
  }
};
