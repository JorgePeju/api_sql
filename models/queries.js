const queries = {

    getEntriesByEmail: `
    SELECT e.title,e.content,e.date,e.category,a.name,a.surname,a.image
    FROM entries AS e
    INNER JOIN authors AS a
    ON e.id_author=a.id_author
    WHERE a.email=$1      
    ORDER BY e.title;`,

    getAuthorByEmail: `
    SELECT e.title,e.content,e.date,e.category,a.name,a.surname,a.image
    FROM entries AS e
    INNER JOIN authors AS a
    ON e.id_author=a.id_author
    WHERE a.email=$1      
    ORDER BY e.title;`,

    getAllEntries: `
    SELECT * 
    FROM entries`,

    getAllAuthors: `
    SELECT * 
    FROM authors`,

    createEntries: `
    INSERT INTO entries(title, content, date, id_author, category)
    VALUES ($1, $2, $3,$4, $5)
    `,

    createAuthors: `
    INSERT INTO authors(name,surname,email,image)
    VALUES ($1,$2,$3,$4);`,

    deleteEntries: `
    DELETE FROM  entries
    WHERE id_entry=$1`

}

module.exports = queries