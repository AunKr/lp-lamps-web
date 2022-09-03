const uuidv4 = require('uuid').v4;
const jwt = require('jsonwebtoken');

const utils = require('../utilities/utils');
const PRIVATE_DATA = require('../constants/private')

const tokenLifeSpanSmall = (1000 * 60 * 60 * 4) // 4 hours;
exports.tokenLifeSpanSmall = tokenLifeSpanSmall;

const tokenLifeSpanLarge = (1000 * 60 * 60 * 24 * 60); // 60 days
exports.tokenLifeSpanLarge = tokenLifeSpanLarge;

// every 30 minutes send an updated token to keep user logged in
const tokenUpdateLifeSpan = (1000 * 60 * 30); // 30 minutes
exports.tokenUpdateLifeSpan = tokenUpdateLifeSpan;


// With this method we generate a new token based on payload we want to put on it
module.exports.issueToken = function (payload) {
    return jwt.sign(
        payload, // This is the payload we want to put inside the token
        PRIVATE_DATA['AUTHORIZATION_TOKEN_KEY'], // Secret string which will be used to sign the token
        null
    );
};

// Here we verify that the token we received on a request hasn't be tampered with.
module.exports.verifyToken = function (token, verified) {
    if (token && verified) {
        return jwt.verify(
            token, // The token to be verified
            PRIVATE_DATA['AUTHORIZATION_TOKEN_KEY'], // The secret we used to sign it.
            null, // Options, none in this case
            verified // The callback to be call when the verification is done.
        );
    }
};


/**
 * The default user object to issue a token
 * @param userObject
 * @param storeId
 * @param shiftId
 * @param duration
 * @returns {{Role: *|string|string|string|exports.ENTITY.USER.model.Role|{name, type, required, nullable, enumeration}, ID, OwnerUserId: null, StoreId: *, iat: number, exp: *}}
 */
module.exports.getUserLoginPayload = function (userObject, storeId, shiftId, session, duration, brandId) {
    let now = Date.now();

    session = utils.isNullOrUndefined(session) ? uuidv4() : session;
    duration = isNaN(duration) ? tokenLifeSpanSmall : duration;

    return {
        Role: userObject.Role,
        ID: userObject.ID,
        OwnerUserID: userObject.OwnerUserId || userObject.OwnerUserID || null,
        StoreId: storeId,
        ShiftId: shiftId,
        Session: session,
        iat: now,
        exp: now + duration,
        BrandId: brandId
    }
};


/**
 * The default user object to issue a token
 * @param userObject
 * @param duration
 * @returns {{Role: *|string, ID, iat: number, exp: number|*}}
 */
module.exports.getUserLoginAdminPayload = function (userObject, session, duration, brandIds) {
    let now = Date.now();

    session = utils.isNullOrUndefined(session) ? uuidv4() : session;
    duration = isNaN(duration) ? tokenLifeSpanSmall : duration;
    brandIds = Array.isArray(brandIds) ? brandIds : [];

    return {
        Role: userObject.Role,
        ID: userObject.ID,
        OwnerUserID: userObject.OwnerUserId || userObject.OwnerUserID || null,
        Stores: userObject.Stores,
        Session: session,
        iat: now,
        exp: now + duration,
        Brands: brandIds
    }
};


/**
 * The default user object to issue a token when forgotten password
 * @param userObject
 * @param email
 * @returns {{Role: *|string, ID, Email: *, iat: number, exp: *}}
 */
module.exports.getUserPayloadForResetPassword = function (userObject, email) {
    let now = Date.now();
    // seconds 3600 = 1 hour
  //  let duration = 60 * 30 * 1000; // 30 minutes
    let duration = 60 * 5 * 1000;  // 5 minutes
    let exp = Date.now() + duration;
    return {
        Role: userObject.Role,
        ID: userObject.ID,
        Email: email,
        Session: uuidv4(),
        iat: now,
        exp: exp
    }
};





