const express = require('express');
const app = express();
const path = require('path');


app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


let comments = [{
        /* id: uuid(), */
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        /* id: uuid(), */
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        /* id: uuid(), */
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        /* id: uuid(), */
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index', {
        comments
    })
})

app.listen(3000);