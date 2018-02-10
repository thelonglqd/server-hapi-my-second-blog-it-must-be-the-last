export default (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    content: DataTypes.STRING(20000),
  }, {
    underscored: true,
    timestamps: true,
  });
  return Post;
};
