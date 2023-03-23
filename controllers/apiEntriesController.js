const { getEntriesByEmail, getAllEntries, createNewEntries } = require('../models/entries')


const getEntries = async (req, res) => {

    try {

        let data;
        let email = req.query.email;
        if (email) {
            data = await getEntriesByEmail(email)
        } else {
            data = await getAllEntries()
        }

        res.status(200).json({
            ok: true,
            data
        })

    } catch (error) {

        res.status(500).json({
            ok: false,
            msg: 'error al obtener los correos'
        })

    }

}

const createEntries = async (req, res) => {

    let newEntrie;

    try {

        newEntrie = await createNewEntries(req.body);

        res.status(200).json({
            ok: true,
            msg: 'Entrada creada',

        })

    } catch (error) {

        res.status(500).json({
            ok: false,
            msg: 'error al crear la entrada'
        })

    }

}

const deleteEntries = async (req, res) => {

    try {


        const url = `entries/${email}`;

        const method = 'delete';

        data = await eliminarEntrie(url, method);

    } catch (error) {

        res.status(500).json({
            ok: false,
            msg: 'error al eliminar los correos'
        })

    }



    res.redirect('/api/entries');

}

const updateEntries = async (req, res) => {



}

module.exports = {

    getEntries,
    createEntries,
    //deleteEntries,
    updateEntries

}