const player = require('play-sound')()

const filePath = 'BACKGROUND MUSIC.m4a'

player.play(filePath, (err) => {
    if (err) throw err
    console.log('done')
})