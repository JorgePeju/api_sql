const { Pool } = require('pg')

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
        const data = await client.query(queries.getAuthorByEmail, [email]);
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



//*ACTUALIZAR AUTOR




module.exports = {

    getAuthorsByEmail,
    creatNewAuththor,
    getAllAuthors


}