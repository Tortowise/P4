const {Post} = require('../models/models.js');
const ApiError = require('../error/ApiError.js');

class PostController {
    async create(req, res) {
        const {title} =  req.body;
        const post = await Post.create({title});
        return res.json(post);
    }

    async getAll(req, res) {
        const posts = await Post.findAll();
        return res.json(posts);
    }

    async getOne(req, res) {

    }
}

module.exports = new PostController();