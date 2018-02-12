export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
  }, {
    underscored: true,
    timestamps: true,
  });

  User.associate = (models) => {
    User.hasMany(models.Post);
  };

  return User;
};
