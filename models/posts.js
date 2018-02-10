export default (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    content: DataTypes.STRING(20000),
  }, {
    classMethods: {
      associate(models) {
        // Post.hasMany(models.Listing);
      },
    },
  });
  return Post;
};
