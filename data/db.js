const config = require('../config');

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,{
    dialect: "mysql",
    host: config.db.host,
    define : {
      timestamps: false
    },
    storage: "./session.mysql"
  }
)
async function connect(){
try{
  await sequelize.authenticate();
  console.log("Database connected");
}
catch(err){
  console.log("Database connection error: " + err);
}
}
connect();
module.exports = sequelize;

// let connection = mysql.createConnection(
//   config.db
// );

// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to the database:', err);
//   };

//     console.log('Connected to the database.');
// });

// module.exports = connection.promise();

