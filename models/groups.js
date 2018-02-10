export default (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    name: DataTypes.STRING,
  }, {
    underscored: true,
    timestamps: true,
  });

  Group.associate = (models) => {
    models.User.belongsToMany(Group, { through: 'User_Group' });
    Group.belongsToMany(models.User, { through: 'User_Group' });
  };

  return Group;
};
