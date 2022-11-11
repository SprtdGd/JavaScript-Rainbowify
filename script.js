function rainbowify(){
    let divs = document.getElementsByTagName("div");
    for(let i = 0; i < divs.length; i++) {  // loops over the div array
        divs[i].style.backgroundColor = divs[i].id; // changes the value of background-color
        divs[i].style.color = "white"; // changes font color to white onclick
        divs[2].style.color = "purple"; // changes 3rd div color to purple onclick
    }
}