const express=require('express');

const router = express.Router();


const {createAuthor, getAuthors } =require('../controllers/apiAuthorsControllers');

router.get('/', getAuthors)
router.post('/create', createAuthor)






module.exports=router