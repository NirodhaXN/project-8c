input.onGesture(Gesture.Shake, function () {
    music.play(music.stringPlayable("E E G B B G A A ", 120), music.PlaybackMode.UntilDone)
})
