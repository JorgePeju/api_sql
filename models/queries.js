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
    DELETE FROM entries 
    WHERE id_entry = ($1);`,

    deleteAuthor: ` 
    DELETE FROM authors 
    WHERE id_author = ($1);`,

    updateEntrie: ` 
    UPDATE entries 
    SET 
        title = ($1),
        content = ($2), 
        category = ($3)
    WHERE id_entry = ($4);`,

    updateAuthor: ` 
    UPDATE authors 
    SET 
        name = ($1),
        surname = ($2),
        email = ($3),
        image = ($4)
    WHERE id_author = ($5);`,

}

module.exports = queries