const buttons = document.querySelectorAll('.btn')
const sounds = document.querySelectorAll('audio')

buttons.forEach((button) => {
  button.addEventListener('click', stopSongs)

  button.addEventListener('click', () => {
    const sound = document.querySelector(`audio[id=${button.id}]`)
    sound.currentTime = 0
    sound.play()
  })
})

function stopSongs() {
  sounds.forEach((sound) => {
    sound.pause()
    sound.currentTime = 0
  })
}
