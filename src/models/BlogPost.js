module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define(
      "BlogPost",
      {
        id: {
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        title: {
          type: DataTypes.STRING,
        },
        content: {
          type: DataTypes.STRING,
        },
        userId: {
          type: DataTypes.INTEGER,
          references: {
            model: "users",
            key: "id",
          },
        },
        published: {
          type: DataTypes.DATE,
        },
        updated: {
          type: DataTypes.DATE,
        },
      },
      {
        timestamps: false,
        tableName: "blog_posts",
        underscored: true,
      }
    );
  
    BlogPost.associate = (models) => {
      BlogPost.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
    };
  
    return BlogPost;
  };
  