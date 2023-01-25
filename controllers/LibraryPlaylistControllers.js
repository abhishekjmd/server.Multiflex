const libraryPlaylist = require("../models/LibrarySchema");

exports.createLibraryPlaylist = async (req, res) => {
    try {
        const createPlaylist = await new libraryPlaylist({
            name: req.body.name,
            movies: []
        })
        createPlaylist.save()
        res.send(createPlaylist)
        console.log(createPlaylist)
        return;
    } catch (error) {
        res.send(error)
        console.log(error);
    }
}

exports.pushMoviesToLibraryPlaylist = async (req, res) => {
    try {
        const pushMovies = await libraryPlaylist.findOneAndUpdate({ _id: req.params.id }, { $push: req.body }, { new: true }).populate('movies')
        res.send(pushMovies);
        console.log(pushMovies);
        return;
    } catch (error) {
        res.send(error)
        console.log(error)
    }
}

exports.getLibrary = async (req, res) => {
    try {
        const getLibraryPlaylist = await libraryPlaylist.find({});
        res.send(getLibraryPlaylist);
        console.log(getLibraryPlaylist);
        return;
    } catch (error) {
        res.send(error)
        console.log(error)
    }
}