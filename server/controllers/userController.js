const apiError = require('../error/ApiError.js');
class UserController {
    async registration(req, res) {

    }

    async login(req, res) {

    }

    async check(req, res, next) {
        const {id} = req.query;
        if (!id){
           return  next(apiError.badRequest('not defined'));
        }
        res.json(id);
     }
}

module.exports = new UserController();