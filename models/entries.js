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

const deleteNewEntrie = async () => {

    let client, result;
    try {
        client = await pool.connect();
        result = await client.query(queries.deleteEntries, [id]);
        
    } catch (e) {
        throw e
    } finally {
        client.release();
    }

    if (result.rowCount == 0) return {
        ok: false,
        data: {
            msg: 'Fallo al intentar eliminar  el registro.',
            id,
            result
        }
    }

    return {
        ok: true,
        msg: `Entrie eliminada`
    };
}


//* ACTUALIZAR UNA ENTRADA

const updateNewEntrie= async ({ title, content, category }, id) => {
    let client, result;
    try {
        client = await pool.connect();
        result = await client.query(queries.updateEntrie, [title, content, category, id]);
        
    } catch (e) {
        throw e
    } finally {
        client.release();
    }

    if (result.rowCount == 0) return {
        ok: false,
        data: {
            msg: 'Fallo al intentar modificar el registro.',
            id,
            rslt: result
        }
    }

    return {
        ok: true,
        msg: `Entrie modificado`
    };
}

module.exports = {

    getEntriesByEmail,
    getAllEntries,
    deleteNewEntrie,
    createNewEntries,
    updateNewEntrie

}

