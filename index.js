const express = require('express')
const repoContext = require('./repository/repository-wrapper');



const app = express();



app.listen(3000, function() {
    console.log("Server started. Listening on port 3000");
});

app.get('/', (req, res) => {
    const findAllSongs = repoContext.songs.findAllSongs();
    return res.send(findAllSongs )

})

app.get('/songbyId', (req, res) =>{
    const findSongById = repoContext.songs.findSongById(3);
    return res.send(findSongById);
})