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

const creatNewAuthor = async (newAuthor) => {
    let {name, surname, email, image} = newAuthor
    let client, result

    try {

        client = await pool.connect()
        const data = await client.query(queries.createAuthors, [name, surname, email, image])
        result = data

    } catch (error) {

        console.log(error)
        throw error

    } finally {

        client.release()

    }

    return result
}


//*ELIMINAR AUTOR

const deleteNewAuthor = async (id) => {
    console.log('id:', id);
    let client, result;

    try {

        client = await pool.connect();
        result = await client.query(queries.deleteAuthorEntries, [id]);
        console.log(result.rowCount + ' entradas eliminadas');
        result = await client.query(queries.deleteAuthor,[id]);
        console.log(result.rowCount + ' autor eliminado');
        
    } catch (error) {
        console.log('Error al eliminar autor:', error);
        throw error;
    } finally {
        client.release();
    }
    return result;
}


//* ACTUALIZAR UN AUTOR

const updateNewAuthor= async (id, editAuthor) => {
    let { name, surname, email, image } = editAuthor;

    let client, result;
    try {

        client = await pool.connect();
        result = await client.query(queries.updateAuthor, [id, name, surname, email, image ]);
        console.log(result.rowCount + ' autor actualizada');
    
    } catch (error) {

        console.log('Error al actualizar el autor:', error);
        throw error;

    } finally {

        client.release();
        
    }
    return result;
}



module.exports = {

    getAuthorsByEmail,
    creatNewAuthor,
    getAllAuthors,
    deleteNewAuthor,
    updateNewAuthor
}