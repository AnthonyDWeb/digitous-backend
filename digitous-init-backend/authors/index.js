var authors = [
    {
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
]
const express = require('express');
const app = express();
const port = 8000;

// 01 - - - - - - - - - - - - -

app.get('/', (req, res) => {
    res.send('Authors API');
});


// 02 - - - - - - - - - - - - -

app.get('/authors/:id', (req, res) => {
    let id = req.params.id;
    res.send(`${authors[id].name}, ${authors[id].nationality}`)
})

// 03 - - - - - - - - - - - - -

app.get('/authors/:id/book', (req, res) => {
    let id = req.params.id;
    let book = authors[id].books.join(", ");

    res.send(`${authors[id].name}, ${authors[id].nationality},${book}`)
})

// 04 - - - - - - - - - - - -

app.get('/json/authors/:id/', (req, res) => {
    let id = req.params.id;

    res.json({name : `${authors[id].name}`, nationality: `${authors[id].nationality}`})
});
app.get('/json/authors/:id/books', (req, res) => {
    let id = req.params.id;
    let book = authors[id].books;

    res.json({books: `${book}`})
})








app.listen(port, () => {
    console.log('Server started on port: ' + port);
});