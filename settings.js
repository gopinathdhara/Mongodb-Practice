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
  host: 'mysql1.000webhost.com',
  port: 80,
  user: 'id15599353_awesometodoappdb',
  password: '&@uT4br/I%8{AYx-',
  database: 'id15599353_awesometodoapp' 
};

module.exports = {
  APIServerPort,
  database,
  APIUrl
};