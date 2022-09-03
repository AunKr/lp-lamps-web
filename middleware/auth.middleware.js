const Utils = require("../utilities/utils.js");
const service = require('../shared/service.response.js')
const tokenService = require('../shared/jwt.token.service.js')

exports.ensureAuthenticated = function (req, res, next) {
    let token;
    if (req.headers && req.headers.authorization) {
        let parts = req.headers.authorization.split(' ');
        if (parts.length === 2) {
            let scheme = parts[0], credentials = parts[1];
            if (/^Bearer$/i.test(scheme)) {
                token = credentials;
            }
            else {
                return service.responseError(res, service.createError(service.ERROR.ERROR_AUTHORIZATION_FAIL, 'Format is Authorization: Bearer [token]'));
            }
        } else {
            return service.responseError(res, service.createError(service.ERROR.ERROR_AUTHORIZATION_FAIL, 'Format is Authorization: Bearer [token]'));
        }
    } else if (req.params.token) {
        token = req.params.token;

        // We delete the token from query and body to not mess with blueprints
        delete req.query.token;
        delete req.body.token;
    } else {
        return service.responseError(res, service.createError(service.ERROR.ERROR_AUTHORIZATION_FAIL, 'No Authorization header was found'));
    }

    if (token.length < 10) {
        return service.responseError(res, service.createError(service.ERROR.ERROR_BAD_REQUEST, 'invalid token'));
    }


    tokenService.verifyToken(token, function (error, tokenUser) {
        if (error) {
            return service.responseError(res, service.createError(service.ERROR.ERROR_BAD_REQUEST, error.message));
        } else {
            req.user = tokenUser;
            let now = Date.now();
            if (req.user.exp < now) {
                return service.responseError(res, service.createError(service.ERROR.ERROR_AUTHORIZATION_FAIL, 'token expired'));
            }
            let url = req.url.split('/');
            next();
            // if (url.indexOf('v2') > -1) {
            //     shiftStatusManager.isShiftActive(req)
            //         .then(function (result) {
            //             if (result.success === true) {
            //                 res.updateToken = getRefreshToken(req);
            //                 next();
            //             }
            //             else {
            //                 return service.responseError(res, result.error);
            //             }
            //         })
            //         .catch(function (error) {
            //             return service.responseError(res, error);
            //         });
            // } else {
            //     shiftStatusManager.isShiftActiveCheck(req)
            //         .then(function (result) {
            //             if (result.success === true) {
            //                 res.updateToken = getRefreshToken(req);
            //                 next();
            //             }
            //             else {
            //                 return service.responseError(res, result.error);
            //             }
            //         })
            //         .catch(function (error) {
            //             return service.responseError(res, error);
            //         });
            // }
        }
    });
};