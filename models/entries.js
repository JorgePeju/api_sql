const { Pool } = require('pg')
//const { resourceLimits } = require('worker_threads')
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
//* CREAR UNA ENTRADA
//* ELIMINAR UNA ENTRADA
//* ACTUALIZAR UNA ENTRADA

module.exports = {

    getEntriesByEmail,

}

getEntriesByEmail()