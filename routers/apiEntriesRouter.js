const express=require('express');

const router = express.Router()

const {getEntries, deleteEntries, createEntries, updateEntries}=require('../controllers/apiEntriesController')


router.get('/', getEntries)
router.post('/create', createEntries)
router.put('/edit/:id', updateEntries);
router.delete('/delete/:id', deleteEntries);


module.exports=router