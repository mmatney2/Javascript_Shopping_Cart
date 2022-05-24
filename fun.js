const handleClick=(event)=>{
    console.log('the JS event', event)
    event.stopPropagation();
    event.preventDefault();

    let myID = document.getElementById("my-id");
    console.log(myID);
    console.log(myID.innerHTML);
    myID.innerHTML="I have <strong>changed</strong> the html for the div with my-id";
    myID.style.backgroundColor="red";
    console.log(myID.style.backgroundColor)
    myID.style.color="green";
    myID.style.position="absolute";
    myID.style.left="100px";
    myID.style.top="100px";
    // myID.id="newID";
}

myImg = document.getElementsByTagName("img")
console.log(myImg)
myImg[0].src="./images/download.jpeg";

myClasses = document.getElementsByClassName("my-class")
console.log(myClasses)
for (i=0; i<myClasses.length; i++){
    if (i==0){myClasses[i].style.color="red"}
    if (i==1){myClasses[i].style.color="lawngreen"}
}

let outer=document.getElementById('outer');
let innerNodes=outer.childNodes;
console.log(innerNodes);
innerNodes[1].textContent="hello"
innerNodes[1].style.backgroundColor="magenta";

document.getElementById("my_button").addEventListener('click',(event)=>{handleClick(event)})

let spot = document.getElementById('spot');
spot.style.marginTop="400px";
spot.style.marginLeft="200px";

document.addEventListener('keydown', function(event){
    console.log(event.key)
    switch(event.key){
        case "ArrowRight":
            spot.style.marginLeft=parseInt(spot.style.marginLeft.substring(0,spot.style.marginLeft.length-2))+1+"px"
            break;
        case "ArrowLeft":
            spot.style.marginLeft=parseInt(spot.style.marginLeft.substring(0,spot.style.marginLeft.length-2))-1+"px"
            break;
        case "ArrowUp":
            spot.style.marginTop=parseInt(spot.style.marginTop.substring(0,spot.style.marginTop.length-2))-1+"px"

                break;
        case "ArrowDown":
            spot.style.marginTop=parseInt(spot.style.marginTop.substring(0,spot.style.marginTop.length-2))+1+"px"

            break;
    }
})

createWanderingDiv()
function createWanderingDiv(){
    var img, left, top, counter, interval;
    img = document.createElement('img')
    img.src="./images/download.jpg"
    img.style.width="50px"
    left = 200;
    top = 200;
    img.style.position ="absolute"
    img.style.left=left+"px"
    img.style.top=top+"px"
    img.style.Zindex=100;// Or whatever to keep it on top

    document.body.appendChild(img);

    counter = 50;
    interval = 200; //ms
    window.setTimeout(wanderAround, interval)
    function wanderAround(){
        --counter;
        if (counter <0){
            //done; remove the img
            document.body.removeChild(img);
        }else{
            direction = [-1,1]
            //Animate a little bit
            left += direction[Math.floor(Math.random()*2)]*20;
            if(left < 0){
                left =0;
            }
            top += direction[Math.floor(Math.random()*2)]*20;
            if (top <0){
                top=0
            }
            img.style.left=left+"px"
            img.style.top=top + "px"
            window.setTimeout(wanderAround, interval)
        }

    }

    
}