export default (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    name: { type: DataTypes.STRING, allowNull: false },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  }, {
    underscored: true,
  });

  Group.associate = (models) => {
    models.User.belongsToMany(Group, { through: 'User_Group' });
    Group.belongsToMany(models.User, { through: 'User_Group' });
  };

  return Group;
};
