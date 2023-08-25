module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
      "User",
      {
        id: {
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        displayName: {
          type: DataTypes.STRING,
        },
        email: {
          type: DataTypes.STRING,
        },
        password: {
          type: DataTypes.STRING,
        },
        image: {
          type: DataTypes.STRING,
        },
      },
      {
        timestamps: false,
        tableName: "users",
        underscored: true,
      }
    );
  
    /* User.associate = (models) => {
      User.belongsTo(models.Plan, { foreignKey: "plan_id", as: "plan" });
    }; */
  
    return User;
  };
  