const STATUS = {
    SUCCESS: 200,
    INTERNAL_ERROR: 500,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    DUPLICATE: 409
};

const ERROR = {
    ERROR_INTERNAL: { id: 500, name: 'ERROR_INTERNAL', code: 500 },
    ERROR_GENERIC: { id: 501, name: 'ERROR_GENERIC', code: 500 },
    ERROR_AUTHORIZATION_FAIL: { id: 401, name: 'ERROR_AUTHORIZATION_FAIL', code: 401 },
    ERROR_FORBIDDEN: { id: 403, name: 'ERROR_FORBIDDEN', code: 403 },
    ERROR_DATABASE_EXEC: { id: 500, name: 'ERROR_DATABASE_EXEC', code: 500 },
    ERROR_NOT_FOUND: { id: 404, name: 'ERROR_NOT_FOUND', code: 404 },
    ERROR_BAD_REQUEST: { id: 400, name: 'ERROR_BAD_REQUEST', code: 400 },
    ERROR_DUPLICATE_VALUE: { id: 409, name: 'ERROR_DUPLICATE_VALUE', code: 409 },
    ERROR_CONNECTION_TIMED_OUT: { id: 522, name: 'ERROR_CONNECTION_TIMED_OUT', code: 522 }
};
exports.ERROR = ERROR;

const ERROR_CODES = {
    COLLECTION_RELATION_DUPLICATE: { id: 4001, name: 'ERROR_COLLECTION_RELATION_DUPLICATE', message: 'cannot create duplicate' },
    TOKEN_EXPIRED: { id: 4002, name: 'ERROR_TOKEN_EXPIRED', message: 'token expired' },
    TOKEN_SHORT_EXPIRED: { id: 4003, name: 'ERROR_TOKEN_SHORT_EXPIRED', message: 'token expired' },
    NOT_AUTHORIZED_FOR_ACTION: { id: 4004, name: 'ERROR_NOT_AUTHORIZED_FOR_ACTION', message: 'not authorized for action' },
    CANNOT_ACCESS_ENTITY: { id: 4005, name: 'ERROR_CANNOT_ACCESS_ENTITY', message: 'Not authorized to access entity' },
    ALREADY_HAS_ASSIGNED_SHIFT: { id: 4006, name: 'ERROR_ALREADY_HAS_ASSIGNED_SHIFT', message: 'User already has assigned shift' },
    DOES_NOT_HAVE_ASSIGNED_SHIFT: { id: 4007, name: 'ERROR_ALREADY_HAS_ASSIGNED_SHIFT', message: 'User already has assigned shift' },
    INVALID_SHIFT: { id: 4008, name: 'ERROR_INVALID_SHIFT', message: 'Invalid shift' }
};
exports.ERROR_CODES = ERROR_CODES;

const createResponse = exports.createResponse = function (success, error = null, data = null, token = null) {
    return {
        success: success,
        error: error,
        data: data,
        token: token
    };
};

const createError = function (error, details, specificError = null) {
    return {
        id: error.id,
        type: error.name,
        message: details ? (typeof details !== 'object' ? details.toString() : JSON.stringify(details)) : null,
        code: specificError || null
    };
};

const createErrorResponse = function (error) {
    return createResponse(false, error, null);
};

const createSuccessResponse = function (data, token = null) {
    return createResponse(true, null, data, token);
};

exports.STATUS = STATUS;

exports.createError = createError;
exports.createSuccessResponse = createSuccessResponse;
exports.createErrorResponse = createErrorResponse;

exports.responseError = function (res, error) {

    if (!error) {
        error = createError(ERROR.ERROR_INTERNAL, 'Unknown error'); // That should not happen. Ever.
    }

    if (error.type === undefined) { // system error
        error = createError(ERROR.ERROR_INTERNAL, error.stack || error.message);
    }

    let status = error.type === ERROR.ERROR_DATABASE_EXEC.name ?  STATUS.BAD_REQUEST : (ERROR[error.type] ? ERROR[error.type].code : STATUS.BAD_REQUEST);
    let response = createErrorResponse(error);

    return res.status(status).send(response);
};

exports.responseSuccess = function (res, data, status) {
    let response = createSuccessResponse(data, res.updateToken);
    applyRequestDuration(res, response);
    return res.status(status || STATUS.SUCCESS).send(response);
};


exports.responseUpdateSuccess = function (res, result, status) {
    let response = null;
    if (Array.isArray(result.errors) && result.errors.length > 0) {
        response = createResponse(true, result.errors, result.dbModel, res.updateToken);
    }
    else {
        response = createResponse(true, null, result.dbModel, res.updateToken);
    }
    applyRequestDuration(res, response);
    return res.status(status || STATUS.SUCCESS).send(response);
}

/**
 * Helper method to return a success response with error included
 * It is used for when updating entity with relations, and some of the relations might result in error
 * Usually this happens when the ids provided are invalid and cannot be found in db to create the relation
 * With this method we can include the error in the response to easily see if an error occurred
 *
 * @param res
 * @param data
 * @param status
 * @param error
 */
exports.responseSuccessWithError = function (res, data, status, error) {
    let response = createResponse(true, error, data, res.updateToken);
    applyRequestDuration(res, response);
    return res.status(status || STATUS.SUCCESS).send(response);
}


