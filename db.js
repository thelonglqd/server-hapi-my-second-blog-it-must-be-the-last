const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my-blog');

const db = mongoose.connection;
const My_Info = require('./models/my_info/schema');

db.on('error', (err) => {
  console.log('can not connect to mongodb due to error: ', err);
});

db.on('open', () => {
  console.log('=====init data=====');
  // const My_info = mongoose.model('MyInfo', my_info_schema);
  const my_info_instance = new My_Info({
    name:  'Nguyễn Thế Phụng Long',
    title: 'Javascrip Developer',
    email:   'thelonglqd2911@gmail.com',
    dob: new Date('11/29/1990'),
    employment: [
      { 
        company: 'FPT Software',
        start_date: new Date('08/14/2014'),
        end_date: new Date('10/10/2016'),
        job_title: 'Developer',
        description: 'my first step'
      }
    ],
    education: [
      { 
        school: 'Lê Quý Đôn high school',
        start_date: new Date('09/05/2005'),
        end_date: '07/27/2008',
        description: 'a lot of things here' 
      }
    ],
    skills: [
      { 
        name: 'Node.js',
        experience: '2 years',
        frameworks: ['Express.js', 'Hapi.js'],
        libs: ['lodash', 'mongoose']}]
  });
  my_info_instance.save((err, data) => {
    if (err) {
      console.log('can not save record due to error: ', err);
      throw err;
    }
    console.log('initial data has been saved');
  });
  console.log('we are connected with mongodb');
});

module.exports = db;