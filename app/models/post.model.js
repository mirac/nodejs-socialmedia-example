module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define("posts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT,
      },
      owner: {
        type: Sequelize.INTEGER,
        allowNull: false,
        referenceces: {
          model: 'User',
          key: 'user_id'
        }
      },
      image: {
        type: Sequelize.STRING,
      },
      created_at: {
          type: Sequelize.DATE,
      },
      likes: {
          type: Sequelize.INTEGER,
      }
    });
  
    return Post;
  };
  