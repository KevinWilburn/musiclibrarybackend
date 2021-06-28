const express = require('express')

const repoContext = require('./repository/repository-wrapper');
const cors = require('cors');

app.use(cors());
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.listen(3000, function() {
    console.log("Server started. Listening on port 3000");
});

app.get('/musiclibrary', (req, res) => {
    const findAllSongs = repoContext.songs.findAllSongs();
    return res.send(findAllSongs )

})

app.get('/songbyId', (req, res) =>{
    const findSongById = repoContext.songs.findSongById(3);
    return res.send(findSongById);
})


app.post('/api/addsong', (req, res) => {
    const newSong = req.body;
    const addedSong = repoContext.songs.createSong(newSong);
    return res.send(addedSong);
})

app.put('/api/updatesong/:id', (req, res) =>{
    const id = req.params.id;
    const songPropertiesToUpdate = req.body;
    const updatedSong = repoContext.songs.updateSong(id, songPropertiesToUpdate);
 return res.send(updatedSong)

})