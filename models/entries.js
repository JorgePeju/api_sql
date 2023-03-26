const { Pool } = require('pg')

const queries = require('./queries')

const pool = new Pool({

    host: 'localhost',
    user: 'postgres',
    database: 'blog',
    password: "admin"

})

//* ACCEDER A LOS AUTORES POR EMAIL
const getEntriesByEmail = async (email) => {

    let client, result;

    try {

        client = await pool.connect()
        const data = await client.query(queries.getEntriesByEmail, [email]);
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



//* ACCEDER A TODAS LAS ENTRADAS

const getAllEntries = async () => {

    let client, result;

    try {

        client = await pool.connect()
        const data = await client.query(queries.getAllEntries);

        result = data.rows;

    } catch (error) {

        console.log(error)
        throw error

    } finally {

        client.release()

    }

    return result


}

//* CREAR UNA ENTRADA

const createNewEntries = async (dateEntries) => {
    let {title, content, date, id_author, category} = dateEntries;

    let client, result;

    try {

        client = await pool.connect()
        const data = await client.query(queries.createEntries, [title, content, date, id_author,category]);

    } catch (error) {

        console.log(error)
        throw error

    } finally {

        client.release()

    }

    return result




}

//* ELIMINAR UNA ENTRADA

const deleteNewEntrie = async (id) => {

    console.log('id:', id);

    let client, result;

    try {

        client = await pool.connect();
        result = await client.query(queries.deleteEntries, [id]);
        console.log(result.rowCount + ' entrada eliminada');

    } catch (error) {

        console.log('Error al eliminar la entrada:', error);
        throw error;

    } finally {

        client.release();

    }

    return result;
}



//* ACTUALIZAR UNA ENTRADA

const updateNewEntrie = async (id, editEntrie) => {

    let { title, content, date, id_author, category } = editEntrie;

    let client, result;
    try {

        client = await pool.connect();
        result = await client.query(queries.updateEntrie, [id, title, content, date, id_author, category]);
        console.log(result.rowCount + ' entrada actualizada');
    
    } catch (error) {

        console.log('Error al actualizar la entrada:', error);
        throw error;

    } finally {

        client.release();
        
    }
    return result;
}


module.exports = {

    getEntriesByEmail,
    getAllEntries,
    deleteNewEntrie,
    createNewEntries,
    updateNewEntrie

}

