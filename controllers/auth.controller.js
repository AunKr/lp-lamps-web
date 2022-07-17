const bcrypt = require('bcrypt')

const User = require("../database/operations/user.js");
const tokenService = require('../shared/jwt.token.service.js')
const service = require('../shared/service.response.js')

exports.register = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    const isDuplicateUser = await User.getFirst({ email: email });
    //This will check that user is Registered User or not
    if (isDuplicateUser) {
      return service.responseError(res, service.createError(service.ERROR.ERROR_AUTHORIZATION_FAIL, 'Already registered with this email id'));
    } else {
      let hashedpassword = await bcrypt.hash(password, 12);
      if (hashedpassword) {
        req.body.password = hashedpassword;
        const userRegistered = await User.create(req.body);
        if (userRegistered) {
          const result = {
            message: 'Registeration Successful!!',
            type: 'success',
            userData: userRegistered,
          }
          return service.responseSuccess(res, result);
        } else {
          return service.responseError(res, service.createError(service.ERROR.ERROR_INTERNAL, error));
        }
      }
    }
  } catch (error) {
    return service.responseError(res, service.createError(service.ERROR.ERROR_BAD_REQUEST, "Something went wrong"));
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
