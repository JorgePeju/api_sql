const { getAuthorsByEmail, creatNewAuthor, getAllAuthors, deleteNewAuthor, updateNewAuthor } = require('../models/author');

const getAuthors = async (req, res) => {

    try {

        let data;
        let email = req.query.email;
        if (email) {
            data = await getAuthorsByEmail(email)
        } else {
            data = await getAllAuthors()
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

const createAuthor=async(req,res)=>{

   let newAuthor;

   try {

    newAuthor = await creatNewAuthor(req.body);

    res.status(200).json({
        ok: true,
        msg: 'Autor creado',

    })

} catch (error) {

    res.status(500).json({
        ok: false,
        msg: 'error al crear el autor'
    })

}

}

const deleteAuthor = async (req, res) => {

    let deleteAuthor = req.params.id; 

    try {

        await deleteNewAuthor(deleteAuthor);

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

const updateAuthor = async (req, res) => {

    let id = req.params.id; 
    let editAuthor = req.body;

    try {
        await updateNewAuthor(id, editAuthor); 

        res.status(200).json({
            ok: true,
            msg: 'Autor editada',
        });

    } catch (error) {

        res.status(500).json({
            ok: false,
            msg: 'error al editar el/la autor'
        })

    }
}
module.exports= {

    createAuthor,
    getAuthors,
    getAllAuthors,
    deleteAuthor,
    updateAuthor

}

