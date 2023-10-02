const express = require('express');
const db = require('../server');
const {bodySchema} = require('../schemas/address')

const router = express.Router();

router.get('/', (req, res) => {
    db.query("SELECT * FROM address", (error, data) => {
        if (!error) {
            return res.json(data)
        } else {
            return res.json(error)
        }
    })
})

router.get('/:id', (req, res) => {
    db.query(`SELECT * FROM address WHERE id = ${req.params.id}`, (error, data) => {
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

    const query = "INSERT INTO address (`userId`, `country`, `state`, `city`, `zipCode`, `address`) VALUES (?)"
    const values = [
        req.body.userId,
        req.body.country,
        req.body.state,
        req.body.city,
        req.body.zipCode,
        req.body.address
    ]
    
    db.query(query, [values], (error, data) => {
        if (error) return res.json(error)
        return res.json('A new user has been created!')
    })
})

router.put('/:id', (req, res) => {
    const validationResult = bodySchema.validate(req.body)
    if (validationResult.error) return res.status(400).send(validationResult.error.details[0].message)

    const userId = req.params.id;
    const query = "UPDATE address SET `userId` = ?, `country` = ?, `state` = ?, `city` = ?, `zipCode` = ?, `address` = ? WHERE id = ? "
    const values = [
        req.body.userId,
        req.body.country,
        req.body.state,
        req.body.city,
        req.body.zipCode,
        req.body.address
    ]

    db.query(query, [...values, userId], (error, data) => {
        if (error) return res.json(error)
        return res.json(values)
    })

})

router.delete('/:id', (req, res) => {
    const userId = req.params.id;
    const query = "DELETE FROM address WHERE id = ?"

    db.query(query, [userId], (error, data) => {
                if (error) return res.json(error)
        return res.json("Address has been delete!")
    })
})

module.exports = router;