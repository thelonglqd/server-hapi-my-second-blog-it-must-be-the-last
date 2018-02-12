export default (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    type: { type: DataTypes.ENUM('Post', 'Comment'), allowNull: false },
  }, {
    underscored: true,
    timestamps: true,
  });

  Like.associate = (models) => {
    models.User.hasMany(Like, { as: 'author' });
    models.Post.hasMany(Like);
    models.Comment.hasMany(Like);
  };

  return Like;
};
