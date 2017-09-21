const MyInfo = require('./models/my_info/schema');

module.exports = [
  {
      method: 'GET',
      path: '/api/myinfo',
      handler: function (request, reply) {
        MyInfo.find(function(error, info) {
              if (error) {
                  console.error(error);
              }
              reply(info);
          });
      }
  }
];