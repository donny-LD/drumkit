var numberOfButtons = document.querySelectorAll(".drum").length;

for ( var i = 0; i < numberOfButtons; i++) {

  document.querySelectorAll(".sound")[i].addEventListener("click", function(){
    var buttonInnerHTML = this.buttonInnerHTML;

    buttonAnimation(buttonInnerHTML);
  });

}
document.addEventListener("keydown", function (event){
  makeSound(event.key)
  buttonAnimation(event.key);
})

function makeSound(key) {
  switch (key) {
    case "boom":
    var boomSound= new Audio("sounds/boom.wav");
    boomSound.play();
    break;

     
  }
}

// // const boomwav =document.getElementById(`boom.wav`)
// let boom = new Audio("./sounds/boom.wav");

// const boom = document.getElementById('boomSound')
// // let clap = new Audio("./sounds/clap.wav");
// // let hihat = new Audio("./sounds/boom.wav");
// // let kick = new Audio("./sounds/kick.wav");
// // let openhat = new Audio("./sounds/openhat.wav");
// // let ride = new Audio("./sounds/ride.wav");
// // let snare = new Audio("./sounds/boom.wav");
// // let tink = new Audio("./sounds/tink.wav");
// // let toms = new Audio("./sounds/toms.wav");

// // const boom = document.getElementById('boom')
// // boom.addEventlistner("click", () => {
// //   boomSound.play();
// // });

// // document.addEventListener("keydown", => (event) {
// //   makesound(event.key);
// //   buttonanimation(event.key);
// // })

// // const boomDrum = document.getElementById('boom');
// // boom.addEventlistner(`click`,() => {
// //   boomsound.play()
// // });

// //do for each sound

// // const hihat = document.getElementById("hihat");

// // hihat.addEventListener("click", () => {
// //   hihatSound.play();
// // });
