const { getEntriesByEmail } = require('../models/entries')


const getEntries = async (req, res) => {

    try {
        let data;
        let email = req.query.email;
        if (email) {
            data = await getEntriesByEmail(email)
        } else {
            //* data=await getAllEntries()
        }

        res.status(200).json({
            ok: true,
            data
        })
    } catch (error) {

        res.status(500).json({
            ok:false,
            msg: 'error al obtener los datos'
        })
        
    }



}
const createEntries = async (req, res) => {


}
const deleteEntries = async (req, res) => {


}
const updateEntries = async (req, res) => {


}

module.exports = {

    getEntries,
    createEntries,
    deleteEntries,
    updateEntries

}