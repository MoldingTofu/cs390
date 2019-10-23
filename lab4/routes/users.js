const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.get('/', async (req, res) => {
  // TODO: return all users
})

router.post('/', async (req, res) => {
  // TODO: create a user
})

router.get('/:id', getUser, (req, res) => {
  // TODO: return a single user by id
})

router.put('/:id', getUser, async (req, res) => {
  // TODO:update a user
})

router.delete('/:id', getUser, async (req, res) => {
  // TODO:delete a user
})

async function getUser(req, res, next) {
  // Not required, but could be used to get users with a specific id or all users
}

module.exports = router 