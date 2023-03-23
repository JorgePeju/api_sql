const {Pool}= require('pg')
//const { resourceLimits } = require('worker_threads')

const pool = new Pool({

    host: 'localhost',
    user: 'postgres',
    database: 'blog',
    password: "admin"

})

//* ACCEDER A LOS AUTORES POR EMAIL
const getAuthByEmail= async()=>{

    let client, result;

    try {
        client= await pool.connect()
        const data = await client.query(`
        
        
                                        `)


    } catch (error) {
        


    } finally {



    }
     
    return result

}

//* NECESITAREMOS TRAER A TODOS LOS AUTORES


//* CREAR AUTOR


//* ELIMINAR AUTOR


//* ACTUALIZAR AUTOR







// pool.connect((err, client, release) => {
    
//     if (err) {
//         return console.error('Error acquiring client', err.stack)
//     }
//     client.query('SELECT NOW()', (err, result) => {
//         release()
//         if (err) {
//             return console.error('Error executing query', err.stack)
//         }
//         console.log(result.rows)
//     })
// })