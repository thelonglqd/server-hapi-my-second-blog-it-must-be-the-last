export default (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    content: { type: DataTypes.STRING, allowNull: false },
  }, {
    underscored: true,
    timestamps: true,
  });

  Comment.associate = (models) => {
    models.User.hasMany(Comment);
    models.Post.hasMany(Comment);
  };

  return Comment;
};
