const express = require('express');
const db = require('../server');

const router = express.Router();

router.get('/', (req, res) => {
    db.query("SELECT * FROM users", (error, data) => {
        if (!error) {
            return res.json(data)
        } else {
            return res.json(error)
        }
    })
})

router.post('/', (req, res) => {
    const query = "INSERT INTO users (`firstName`, `lastName`, `phoneNumber`, `birthday`, `image`) VALUES (?)"
    const values = [
        req.body.firstName,
        req.body.lastName,
        req.body.phoneNumber,
        req.body.birthday,
        req.body.image
    ]
    
    db.query(query, [values], (error, data) => {
        if (error) return res.json(error)
        return res.json('A new user has been created!')
    })
})

router.delete('/:id', (req, res) => {
    const userId = req.params.id;
    const query = "DELETE FROM users WHERE id = ?"

    db.query(query, [userId], (error, data) => {
                if (error) return res.json(error)
        return res.json("User has been delete!")
    })
})

router.put('/:id', (req, res) => {
    const userId = req.params.id;
    const query = "UPDATE users SET `firstName` = ?, `lastName` = ?, `phoneNumber` = ?, `birthday` = ?, `image` = ? WHERE id = ? "
    const values = [
        req.body.firstName,
        req.body.lastName,
        req.body.phoneNumber,
        req.body.birthday,
        req.body.image
    ]

    db.query(query, [...values, userId], (error, data) => {
            if (error) return res.json(error)
    return res.json(values)
})

})

module.exports = router;