const express=require('express');

const router = express.Router()

const {getEntries,deleteEntries, createEntries, updateEntries}=require('../controllers/apiEntriesController')


router.get('/', getEntries)
router.post('/create', createEntries)
// router.delete('/:title', deleteEntries)
// router.put('/:title', updateEntries)








module.exports=router