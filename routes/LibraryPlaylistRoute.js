const express = require('express')
const { createLibraryPlaylist, pushMoviesToLibraryPlaylist, getLibrary } = require('../controllers/LibraryPlaylistControllers')
const Router = express.Router()

Router.post('/addLibrary', createLibraryPlaylist);
Router.put('/updateLibrary', pushMoviesToLibraryPlaylist);
Router.get('/getLibrary', getLibrary)

module.exports = Router