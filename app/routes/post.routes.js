const { authJwt } = require("../middleware");
const controller = require("../controllers/post.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post('/api/post/create', [authJwt.verifyToken], controller.newPost);

  app.post('/api/post/like', [authJwt.verifyToken], controller.likePost);

  app.delete('/api/post/delete', [authJwt.verifyToken, authJwt.isModerator], controller.deletePost);

};
