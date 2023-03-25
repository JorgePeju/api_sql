const { getAuthorsByEmail, creatNewAuththor, getAllAuthors, deleteNewAuthor, updateNewAuthor } = require('../models/author');

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

        newAuthor= await creatNewAuththor(req.body);

        res.status(200).json({
            ok:true,
            data
        })

    } catch (error) {

        res.status(500).json({
        ok:false,
        msg:'error al crear el author'
    })
    }
}

const deleteAuthor = async (req, res) => {

    try {
        const response = await deleteNewAuthor(params.id)

        if (!response.ok) res.status(500).json(response);
        else res.status(200).json(response);

    } catch (e) {
        res.status(500).json({
            ok: false,
            msg: 'error al borrar el autor'
        })

    }

}

const updateAuthor = async (req, res) => {

    try {
        const response = await updateNewAuthor(body, params.id);

        if (!response.ok) res.status(500).json(response);
        else res.status(200).json(response);

    } catch (e) {
        res.status(500).json({
            ok: false,
            msg: 'error al editar el autor'
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

