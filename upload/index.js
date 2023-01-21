require('./config/db')
const express = require('express')
const serverless = require('serverless-http')
const app = express()
// const port = 4000
const cors = require('cors');
const bodyParser = require('body-parser');
const movieRoute = require('./routes/moviesRoute')
const topPlaylistRoute = require('./routes/topPlaylistRoute')
const artistRoute = require('./routes/artistRoute')
require('dotenv').config();
// const fileUpload = require('express-fileupload')
// app.use(fileUpload({
// useTempFiles: true
// }))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/.netlify/functions/multiflex', movieRoute);
app.use('/.netlify/functions/api/Top_playlist', topPlaylistRoute);
app.use('/.netlify/functions/api/artist', artistRoute)
// app.use(express.json());
app.use(cors());
app.get('/', (req, res) => res.send('Hello World!'))
// app.listen(port, () => console.log(`Example app listening on port ${port}!`))
module.exports = app
module.exports.handler = serverless(app);