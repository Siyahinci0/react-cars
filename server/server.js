var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var corsOptions = {
    origin: "http://localhost:3001"
};
app.use(cors(corsOptions));
app.use(express.json());

// parse requests of content-type - application/json


// default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});
// connection configurations
var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'cars',
    port: 3306,
    password: 'Hasanmutlu12?',
    database: 'cars'
});

// connect to database
dbConn.connect();


// Retrieve all users 
app.get('/otomobil', function (req, res) {

    dbConn.query('SELECT * FROM otomobil ', function (error, results, fields) {
        
        if (error) {
            throw error;
        }

        req.header("Access-Control-Allow-Origin", "*");
        req.header("Access-Control-Allow-Headers", "X-Requested-With");
        req.header('Content-Type', 'application/json');
        req.json = true;

        console.log("cagrildi...");
        console.log(results);

        return res.send(results);
    })
});

// Retrieve alislar with id 
app.get('/otomobil/:id', function (req, res) {

    let otomobilId = req.params.id;

    if (!otomobilId) {
        return res.status(400).send({ error: true, message: 'Please provide otomobilId' });
    }

    dbConn.query('SELECT * FROM otomobil WHERE otomobilId=?', otomobilId, function (error, results, fields) {
        if (error) throw error;

        return res.send(results);
    });
});

// Retrieve alislar with id 
app.get('/ulkeler/:id', function (req, res) {

    let ulkeId = req.params.id;

    if (!ulkeId) {
        return res.status(400).send({ error: true, message: 'Please provide ulkeId' });
    }

    dbConn.query('SELECT * FROM sehirler WHERE ulkeId=?', ulkeId, function (error, results, fields) {
        if (error) throw error;

        return res.send(results);
    });
});


    // Retrieve satislar with id 
    app.get('/satislar/:id', function (req, res) {

        let satislarId = req.params.id;
    
        if (!satislarId) {
            return res.status(400).send({ error: true, message: 'Please provide satislarId' });
        }
    
        dbConn.query('SELECT * FROM satislar WHERE id=?', satislarId, function (error, result, fields) {
            if (error) throw error;
    
            return res.send(result[0]);
        });
    });

// Add a new alislar  
app.post('/alislar-ekle', function (req, res) {

    console.log("lot: " + req.body.lot
    );

    dbConn.query("INSERT INTO alislar SET ? ", 
    { 
        sirketAdi: req.body.sirketAdi,
        emirVeren: req.body.emirVeren,
        lot: req.body.lot,
        fiyat: req.body.fiyat


    }, 
    function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'New user has been created successfully.' });
    });


});

app.post('/satislar-ekle', function (req, res) {

    console.log("emir veren: " + req.body.emirVeren);

    dbConn.query("INSERT INTO satislar SET ? ", 
    { 
        sirketAdi: req.body.sirketAdi,
        emirVeren: req.body.emirVeren,
        lot: req.body.lot,
        fiyat: req.body.fiyat


    }, 
    function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'New user has been created successfully.' });
    });
});


// set port
app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});

module.exports = app;
