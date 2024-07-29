// Function to play sound based on data attribute
function playSound(soundUrl) {
    var audio = new Audio(soundUrl);
    audio.play();
  }
  
  // Add click event listeners to all drum buttons
  document.querySelectorAll(".drum").forEach(function(button) {
    button.addEventListener("click", function() {
      var soundUrl = this.getAttribute("data-sound");
      playSound(soundUrl);
    });
  });
  
  // Add keypress event listeners to play sounds with keyboard
  document.addEventListener("keypress", function(e) {
    var key = e.key.toLowerCase();
    var soundUrl;
  
    switch(key) {
      case "q":
        soundUrl = "sounds/sound1.mp3";
        break;
      case 'w':
        soundUrl = "sounds/sound2.mp3";
        break;
      case 'e':
        soundUrl = "sounds/sound3.mp3";
        break;
      case 'r':
        soundUrl = "sounds/sound4.mp3";
        break;
      case 't':
        soundUrl = "sounds/snare.mp3";
        break;
      case 'y':
        soundUrl = "sounds/crash.mp3";
        break;
      case 'u':
        soundUrl = "sounds/kick.mp3";
        break;
      default:
        return; // Exit function if no matching key
    }
  
    playSound(soundUrl);
  });
  