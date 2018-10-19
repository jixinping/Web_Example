
var async = require('async');
var oracledb = require('oracledb');
var dbConfig = require('./server/config/oracleConfig.js');

var doconnect = function(cb) {
    oracledb.getConnection(
        {
            user          : dbConfig.myMaster.user,
            password      : dbConfig.myMaster.password,
            connectString : dbConfig.myMaster.connectString
        },
        cb);
};

var dorelease = function(conn) {
    conn.close(function (err) {
        if (err)
            console.error(err.message);
    });
};

// Default Array Output Format
var doquery_array = function (conn, cb) {
    conn.execute(
        "SELECT * FROM user_tables where rownum<10",
        function(err, result) {
            if (err) {
                return cb(err, conn);
            } else {
                console.log("----- Cities beginning with 'S' (default ARRAY output format) --------");
                console.log(result.rows);
                return cb(null, conn);
            }
        });
};

async.waterfall(
    [
        doconnect,
        doquery_array
    ],
    function (err, conn) {
        if (err) { console.error("In waterfall error cb: ==>", err, "<=="); }
        if (conn)
            dorelease(conn);
    });
