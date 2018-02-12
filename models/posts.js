export default (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    content: { type: DataTypes.STRING(20000), allowNull: false },
  }, {
    underscored: true,
    timestamps: true,
  });
  return Post;
};
