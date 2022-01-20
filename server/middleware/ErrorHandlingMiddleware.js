const apiError = require('../error/ApiError.js');

module.exports = function (err, req, res, next) {
    if (err instanceof apiError) {
        return res.status(err.status).json({message: 'Unexpected warning!'})
    }
}