class ErrorHandler extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}

export const errorMiddleware = (err, req, res, next) => {
    err.message = err.message || 'Internal server error';
    err.status = err.status || 500;
    // console.log('=======================================', err)
    if (err.code === 11000) {
        const field = Object.keys(err.keyValue)[0];
        const value = err.keyValue[field];
        err = new ErrorHandler(`${value} already exists for ${field}`, 400);
    }

    if (err.name === 'JsonWebTokenError') {
        err = new ErrorHandler('Token is invalid', 400);
    }

    if (err.name === 'TokenExpiredError') {
        err = new ErrorHandler('Token is expired', 400);
    }

    if (err.name === 'CastError') {
        err = new ErrorHandler(`Invalid path ${err.path}`, 400);
    }

    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(each => `${each.path} is ${each.kind}`);
        err = new ErrorHandler(message, 400);
    }

    return res.status(err.status).json({ message: err.message });
}