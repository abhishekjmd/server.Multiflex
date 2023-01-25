const express = require('express')
const Router = express.Router()
const { createLibraryPlaylist, pushMoviesToLibraryPlaylist, getLibrary, deleteLiraryPlaylist } = require('../controllers/LibraryPlaylistControllers')

Router.post('/addLibrary', createLibraryPlaylist);
Router.put('/updateLibrary/:id', pushMoviesToLibraryPlaylist);
Router.put('updateLibrary/:id/movies/:id', pushMoviesToLibraryPlaylist);
Router.delete('deleteLibrary', deleteLiraryPlaylist);
Router.get('/getLibrary', getLibrary);

module.exports = Router