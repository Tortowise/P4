const sequelize = require('../db.js');
const {DataTypes} = require('sequelize');


const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
});

const Personal = sequelize.define('personal', {
    personal_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    nickname: {type: DataTypes.STRING, unique: true},
    first_name: {type: DataTypes.STRING},
    last_name: {type: DataTypes.STRING},
    position: {type: DataTypes.STRING},
    experience: {type: DataTypes.STRING},
    language: {type: DataTypes.STRING},
    technology: {type: DataTypes.STRING},
});

const Post = sequelize.define('post', {
    post_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
    post: {type: DataTypes.STRING},
    author_id: {type: DataTypes.INTEGER},
});

const Answer = sequelize.define('answer', {
    answer_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    post_id: {type: DataTypes.INTEGER},
    user_id: {type: DataTypes.INTEGER},
    answer: {type: DataTypes.STRING},
    rating: {type: DataTypes.DOUBLE},
    status: {type: DataTypes.BOOLEAN},
});

const Rating = sequelize.define('rating', {
    rating_answer_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rating_user_id: {type: DataTypes.INTEGER},
    votes: {type: DataTypes.INTEGER},
    posts: {type: DataTypes.INTEGER},
    answers: {type: DataTypes.INTEGER},
    liked_answers: {type: DataTypes.INTEGER},
    approved_answers: {type: DataTypes.INTEGER},
});

User.hasOne(Personal);
Personal.belongsTo(User);

User.hasMany(Post);
Post.belongsTo(User);

User.hasMany(Answer);
Answer.belongsTo(User);

User.hasOne(Rating);
Rating.belongsTo(User);

Post.hasMany(Answer);
Answer.belongsTo(Post);

module.exports = {
    User, Personal, Rating, Answer, Post
};