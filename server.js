import express from 'express';
const app = express();

// app.get('/', (req, res) => {
//     res.send('Server is ready');
// });

// get a list of 5 jokes
app.get('/jokes', (req,res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'This is a Another joke'
        }
    ];
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server at http://localhost:${port}');
});