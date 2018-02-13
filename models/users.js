import bcrypt from 'bcrypt';

const saltRounds = 10;

export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
  }, {
    underscored: true,
    timestamps: true,
  });

  // ASSOCIATION
  User.associate = (models) => {
    User.hasMany(models.Post);
  };

  User.prototype.toJSON = function toJSON() {
    const values = Object.assign({}, this.get());
    delete values.password;
    return values;
  };

  // HOOKS
  /* eslint-disable no-param-reassign */
  User.hook('beforeCreate', user => bcrypt.hash(user.password, saltRounds)
    .then((hashed) => {
      user.password = hashed;
    }));

  // METHOD
  User.createUser = async user => User.create(user);
  User.readUser = async id => User.findById(id);
  User.updateUser = async (instance, changes) => instance.update(changes);
  User.listUsers = async (offset = 0, limit = 20) => ({
    offset,
    limit,
    data: await User.findAll(),
  });

  return User;
};
