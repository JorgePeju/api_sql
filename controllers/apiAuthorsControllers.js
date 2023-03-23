const { getAuthorsByEmail, creatNewAuththor, getAllAuthors } = require('../models/author');

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

module.exports= {

    createAuthor,
    getAuthors,
    getAllAuthors

}

