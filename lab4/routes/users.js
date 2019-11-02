const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.get('/', async (req, res) => {
  // TODO: return all users
  User.find((err, docs) => {
    if (err) {
      console.log(err)
      res.status(404).send('Not found')
    }
    else {
      res.send(docs)
    }
  });
})

router.post('/', async (req, res) => {
  // TODO: create a user
  let newUser = new User(req.body);
  newUser.save((err, product) => {
    if (err) {
      console.log(err)
      res.status(404).send('Not found')
    }
    else {
      res.send(product)
    }
  });
})

router.get('/:id', async (req, res) => {
  // TODO: return a single user by id
  let id = req.params.id
  User.findById(id, (err, docs) => {
    if (err) {
      console.log(err)
      res.status(404).send('Not found')
    }
    else {
      res.send(docs)
    }
  });
})

router.put('/:id', async (req, res) => {
  // TODO:update a user
  console.log('put')
  let id = req.params['id']
  User.findByIdAndUpdate(id, req.body, (err) => {
    if (err, docs) {
      console.log(err)
      res.status(404).send('Not found')
    }
    else {
      res.send(docs)
    }
  });
})

router.delete('/:id', async (req, res) => {
  // TODO:delete a user
  console.log('delete')
  let id = req.params['id'];
  User.findByIdAndDelete(id, (err, docs) => {
    if (err) {
      console.log(err)
      res.status(404).send('Not found')
    }
    else {
      res.send(docs)
    }
  });
})

module.exports = router 