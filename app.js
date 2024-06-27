document.addEventListener("DOMContentLoaded", () => {
  // Define the sound mappings
  const soundMap = {
    b: "sounds/boom.wav",
    h: "sounds/hihat.wav",
    c: "sounds/clap.wav",
    k: "sounds/kick.wav",
    o: "sounds/openhat.wav",
    r: "sounds/ride.wav",
    s: "sounds/snare.wav",
    T: "sounds/tink.wav",
    t: "sounds/tom.wav",
  };

  // Function to play sound
  const playSound = (key) => {
    const soundUrl = soundMap[key];
    if (soundUrl) {
      const audio = new Audio(soundUrl);
      audio.play();
    }
  };

  // Add event listeners to buttons
  const buttons = document.querySelectorAll(".sound");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      playSound(button.textContent.trim());
    });
  });

  // Add event listener for keyboard events
  document.addEventListener("keydown", (event) => {
    playSound(event.key);
  });
});
