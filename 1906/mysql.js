var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : '1906'
});

connection.connect();



connection.query('SELECT * from p_users', function (error, results, fields) {
    if (error) throw error;

    //console.log(results);
});


connection.query('SELECT * from p_users where id=9', function (error, results, fields) {
    if (error) throw error;
    console.log(results);
});


connection.end();