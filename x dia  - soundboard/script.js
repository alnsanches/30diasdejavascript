const sounds = [
'ambulance', 'birds-singing', 'birthofahero', 'buzinadenavio', 'cat-meow', 'clapping', 'cow-moo', 'dog-barking', 'rain-and-thunder-storm', 'rooster'
];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;

    btn.addEventListener('click', () => {
        document.getElementById(sound).play();
        stopPlaying();

    })

    document.getElementById('buttons').append(btn);
})


function stopPlaying() {
    sounds.forEach(sound => {
        const audio = document.getElementById(sound);
        audio.pause();
        audio.currentTime = 0;
    })
}

