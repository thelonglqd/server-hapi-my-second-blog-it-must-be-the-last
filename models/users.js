export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    underscored: true,
    timestamps: true,
  });

  User.associate = (models) => {
    User.hasMany(models.Post);
  };

  return User;
};
