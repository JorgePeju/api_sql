const express=require('express');

const router = express.Router();


const {createAuthor, getAuthors, updateAuthor, deleteAuthor } =require('../controllers/apiAuthorsControllers');

router.get('/', getAuthors);
router.post('/create', createAuthor);
router.put('/edit/:id', updateAuthor);
router.delete('/delete/:id', deleteAuthor);





module.exports=router