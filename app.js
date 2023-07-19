document.addEventListener("DOMContentLoaded", function () {
  // Hide splash screen after animation
  var splashScreen = document.getElementById("splashScreen");
  var splashAnimation = document.getElementById("splashAnimation");

  // Load and play the splash animation
  var animation = lottie.loadAnimation({
    container: splashAnimation,
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: "splash_animation.json", // Path to your splash animation JSON file
  });

  // Hide splash screen when animation ends
  animation.addEventListener("complete", function () {
    splashScreen.style.display = "none";
  });

  // Load and play the background Lottie animation
  var lottieBgAnimation = lottie.loadAnimation({
    container: document.getElementById("lottieBgAnimation"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "background_animation.json", // Path to your background animation JSON file
  });
});
