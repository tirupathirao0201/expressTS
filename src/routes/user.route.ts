import express from 'express'
import {createUser, getUserById, getUsers, loginUser} from '../controllers/user.controller'
const router = express.Router()

router.get('/', getUsers)
router.get('/:id', getUserById)
router.post('/create', createUser)
router.post('/login', loginUser)

export default router
