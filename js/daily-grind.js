/*

Here is the info we'll need to change for each coffee

pic - image src
alt -alt tag
day - day of week
name - name of coffee
color - color
desc - description

ex.
coffee.color
coffee.day
coffee.time

*/

let myDate = new Date();
let myDay = "";
let today = "";
let coffee = "";
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if(urlParams.has('day')){//use query string data
    myDay = urlParams.get('day');
}else{//use date object
    myDay = myDate.getDay();
}

myDay = parseInt(myDay);

function coffeeTemplate(coffee){
    let myReturn = "Hi from the template!";

    myReturn += `
    
    <p>
        <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
       <strong id="coffee-highlight" class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong> ${coffee.desc}
    </p>`;
    
    return myReturn;
}


switch(myDay){


    case 1:
        today = "Monday";
        coffee = {
            color:"pink",
            name:"Bubble Tea",
            pic:"images/bubble-tea.jpg",
            alt:"a picture of a Bubble Tea",
            day:"Monday",
            desc:`I like me some Bubble Tea`     
        };
    break;





    case 3:
        today = "Wednesday";
        coffee = {
            color:"brown",
            name:"Drip",
            pic:"images/drip.jpg",
            alt:"a picture of a drip coffee",
            day:"Wednesyday",
            desc:`Sometimes you just need the Drip`     
        };
    break;

    
}

console.log(coffee);

document.getElementById("coffee-output").innerHTML = coffeeTemplate(coffee);

document.getElementsByTagName("HTML")[0].style.backgroundColor = coffee.color;

document.getElementById("coffee-highlight").style.color = coffee.color;

//alert(today);

