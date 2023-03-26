const { getEntriesByEmail, getAllEntries, createNewEntries, deleteNewEntrie, updateNewEntrie } = require('../models/entries')


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

    let deleteEntrie = req.params.id; 

    try {
        await deleteNewEntrie(deleteEntrie);

        res.status(200).json({
            ok: true,
            msg: 'Entrada eliminada',
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'error al borrar la entrada'
        });
    }
}

const updateEntries = async (req, res) => {
    
    let id = req.params.id; 
    let editEntrie = req.body;

    try {
        await updateNewEntrie(id, editEntrie); 

        res.status(200).json({
            ok: true,
            msg: 'Entrada editada',
        });

    } catch (error) {

        res.status(500).json({
            ok: false,
            msg: 'error al editar la entrada'
        })

    }
}


module.exports = {

    getEntries,
    createEntries,
    deleteEntries,
    updateEntries

}