const APIServerPort = 3000;
const APIUrl = 'http://localhost:4200'; 
/*
const database = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'todonotes'
};*/

const database = {
  host: 'sql12.freemysqlhosting.net',
  port: 3306,
  user: 'sql12380448',
  password: 'wiIv6kf8V8',
  database: 'sql12380448' 
};

module.exports = {
  APIServerPort,
  database,
  APIUrl
};