function catchErrors(fn) {
    return function (req, res, next) {
        return fn(req, res, next).catch(next);
    }
}

function notFound(req, res, next) {
    const error = new Error('Not found!')
    error.status = 404;
    next(error)
}


function developmentErrors(error, req, res, next) {
    error.stack = error.stack || '';
    const errorDetails = {
        errorDescription: error.message,
        errorCode: error.status,
        stackHighlighted: error.stack.replace(/[a-z_-\d]+.js:\d+:\d+/gi, '<mark>$&</mark>')
    };

    res.status(error.status || 500).send(errorDetails);
}

function prodErrors(error, req, res, next) {

    const errorDetails = {
        message: error.message,
        status: error.status,
    };
   
    res.status(error.status || 500).send(errorDetails);
}

module.exports = {
    notFound,
    developmentErrors,
    prodErrors,
    catchErrors
}