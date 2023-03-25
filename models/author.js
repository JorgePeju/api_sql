const { Pool } = require('pg')

const queries = require('./queries')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    database: 'blog',
    password: 'admin'
})

//* ACCEDER A LOS AUTORES POR EMAIL

const getAuthorsByEmail = async (email) => {

    let client, result;

    try {

        client = await pool.connect()
        const data = await client.query(queries.getAuthorsByEmail, [email]);
        //* si ponemos $2, $3, impedimos las inyecciones de SQL
        result = data.rows;

    } catch (error) {

        console.log(error)
        throw error

    } finally {

        client.release()

    }

    return result



}

//*TRAER TODOS LOS AUTORES

const getAllAuthors = async () => {

    let client, result;

    try {

        client = await pool.connect()
        const data = await client.query(queries.getAllAuthors);

        result = data.rows;

    } catch (error) {

        console.log(error)
        throw error

    } finally {

        client.release()

    }

    return result

}

//*CREAR AUTOR

const creatNewAuththor = async (name, surname, email, image) => {

    let client, result

    try {

        client = await pool.connect()
        const data = await client.query(createAuthors, [name, surname, email, image])
        result = data

    } catch (error) {

        console.log(error);
        throw error

    } finally {

        client.release()

    }
    console.log(result);
    return result
}


//*ELIMINAR AUTOR

const deleteNewAuthor = async () => {

    let client, result;
    try {
        client = await pool.connect();
        result = await client.query(queries.deleteAuthor, [id]);

    } catch (e) {
        throw e
    } finally {
        client.release();
    }

    if (result.rowCount == 0) return {
        ok: false,
        data: {
            msg: 'Error al eliminar autor.',
            id,
            rslt: result
        }
    }

    return {
        ok: true,
        msg: `Autor Eliminado`
    };
}


//* ACTUALIZAR UN AUTOR

const updateNewAuthor= async ({ name, surname, email, image }, id) => {
    let client, result;
    try {
        client = await pool.connect();
        result = await client.query(queries.updateAuthor, [name, surname, email, image, id]);
        
    } catch (e) {
        throw e
    } finally {
        client.release();
    }

    if (result.rowCount == 0) return {
        ok: false,
        data: {
            msg: 'Error al editar el autor.',
            id,
            rslt: result
        }
    }

    return {
        ok: true,
        msg: `Autor Editado`
    };
}



module.exports = {

    getAuthorsByEmail,
    creatNewAuththor,
    getAllAuthors,
    deleteNewAuthor,
    updateNewAuthor
}