const express = require('express')
const { dbconnection } = require('./config')
const router = express.Router()



router.get("/", (req, resp) => {
    resp.sendFile(__dirname + "/dict.html")

})


router.get("/search", (req, resp) => {
    const query = `select * from entries where word="${req.query.query}"`
    console.log("jenish", query);
    dbconnection.query(query, function (error, results, fields) {
        if (error) {
            console.log(error)
        }
        resp.json({ data: results })

    });
})
module.exports.router = router