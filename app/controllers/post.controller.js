const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;
const Post = db.post;
const uploadFile = require("../middleware/upload");
const newID = require("nodejs-unique-numeric-id-generator");

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.newPost = (req, res) => {
    Post.create({
        id: newID.generate(new Date().toJSON()),
        description: req.body.description,
        owner: req.body.owner,
        image: req.body.image,
        created_at: Date.now(),
        likes: 0
      })
        .then(user => {
            res.send({ message: "Post saved successfully!" });
        })
};

exports.likePost = (req, res) => {

  try {
    var post = Post.findOne({ where: { id: req.body.id } });

    Post.update(
      { likes: 3 },
      { where: { id: req.body.id } }
    )
      .then(result =>
        res.send({ message: "Error occured when save like!" })
      )
      .catch(err =>
        res.send({ message: "Like saved successfully!" })
      )
  } catch (error) {
    res.send({ message: "Error occured when save like!" })
  }

};

exports.deletePost = (req, res) => {

  Post.destroy(
    { where: { _id: req.body.id } }
  )
    .then(result =>
      res.send({ message: "Error occured when delete post!" })
    )
    .catch(err =>
      res.send({ message: "Post deleted successfully!" })
    )

};

