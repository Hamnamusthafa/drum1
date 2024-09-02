//alert("hello");
var drumnumb=document.querySelectorAll(".drum").length
for(i=0;i<drumnumb;i++){


document.querySelectorAll(".drum")[i].addEventListener("click", function (){
   this.style.color="yellow";
    var buttonSelect=this.innerHTML;
  makeSound(buttonSelect);
    buttonAnimation(buttonSelect);
});

}
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case "w":
            var tom3=new Audio(" sounds/tom-3.mp3");
            tom3.play();
           // this.style.color="black";

            break;
            case "a":
            var kick=new Audio(" sounds/kick-bass.mp3");
            kick.play();


            break;
            case "s":
            var tom1=new Audio(" sounds/tom-1.mp3");
            tom1.play();

            break;
            case "d":
            var snare=new Audio(" sounds/snare.mp3");
            snare.play();

            break;
            case "j":
            var tom2=new Audio(" sounds/tom-2.mp3");
            tom2.play();

            break;
            case "k":
            var crash=new Audio(" sounds/crash.mp3");
            crash.play();

            break;
            case "l":
            var tom4=new Audio(" sounds/tom-4.mp3");
            tom4.play();

            break;
            default :
            console.log(buttonSelect);

    }
}
function buttonAnimation(currentKey){
    var activeButton =document.querySelector("."+currentKey);
    if(activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    },1000);
}
}