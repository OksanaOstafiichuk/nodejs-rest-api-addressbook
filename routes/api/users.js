const express = require('express');
const users = require('../../models/users');

const router = express.Router();

router.get('/', (req, res) => {
    res.json(users);
});

router.get('/:id', (req, res) => {
    const result = users.find(user => user.id === req.params.id)
    if(!result) return res.status(404).send('User with this id not found!')
    res.json(result)
});

router.post('/', (req, res) => {
    const newUser = {
        id: users.length + 1,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        birthday: req.body.birthday,
        image: req.body.image,
        createdAt: req.body.createdAt
    };

    users.push(newUser);
    res.json(newUser)
});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {
    const user = users.find(user => user.id === req.params.id )
    const index = users.indexOf(user)
    users.slice(index, 1)
    res.json(user)
});

module.exports = router;