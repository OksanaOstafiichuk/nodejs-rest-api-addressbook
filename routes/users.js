const express = require('express');
const db = require('../server');
const {bodySchema} = require('../schemas/user')

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

router.get('/:id', (req, res) => {
    db.query(`SELECT * FROM users WHERE id = ${userId}`, (error, data) => {
        if (!error) {
            return res.json(data)
        } else {
            return res.json(error)
        }
    })
})


router.post('/', (req, res) => {
    const validationResult = bodySchema.validate(req.body)
    if (validationResult.error) return res.status(400).send(validationResult.error.details[0].message)
    
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
    const validationResult = bodySchema.validate(req.body)
    if (validationResult.error) return res.status(400).send(validationResult.error.details[0].message)
    
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