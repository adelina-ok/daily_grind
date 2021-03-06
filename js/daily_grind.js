/*
    what we need to change
    Day of week - day
    Coffee Name - name
    Coffee pic - pic
    Alt tag - alt
    Coffee description - desc
    Color for coffee - color
 */






    let myDate = new Date();
    let myDay = "";
    let today = "";
    let coffee = "";
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    
    
    if(urlParams.has('day')){
        myDay = urlParams.get('day');
        myDay = parseInt(myDay);
    
    }else{
        myDay = myDate.getDay();
    
    }
    
    
    function coffeeTemplate(coffee){
        let myReturn = "";
    
        myReturn = `
        <p>
        <img src="${coffee.pic}" alt="Our ${coffee.alt}" id="coffee">
        <strong id="coffee-higlight" class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily special is <strong>${coffee.name}</strong>, ${coffee.desc}
        </p>
            `;
            
        return myReturn;
    }
    
    switch(myDay){
    
        case 1:
            today = "Monday";
    
            coffee = {
                color: "pink",
                name: "Bubble Tea",
                pic: "images/bubble-tea.jpg",
                alt: "A pic of Bubble Tea",
                day: "Monday",
                desc: 'I love Bubble Tea'
            };
    
        break;    
    
        case 2:
            today = "Tuesday";
    
            coffee = {
                color: "orange",
                name: "caramel-latte",
                pic: "images/caramel-latte.jpg",
                alt: "A pic of caramel-latte",
                day: "Tuesday",
                desc: 'On a hot or cold day, a latte is perfect'
            };
    
        break;   
    
    
        case 3:
            today = "Wednesday";
    
            coffee = {
                color: "brown",
                name: "drip",
                pic: "images/drip.jpg",
                alt: "A pic of drip coffee",
                day: "Wednesday",
                desc: 'Some days you just need the drip!'
            };
    
        break;
    
        case 4:
            today = "Thursday";
    
            coffee = {
                color: "red",
                name: "mocha",
                pic: "images/mocha.jpg",
                alt: "A pic of mocha",
                day: "Thursday",
                desc: 'Mocha is pretty good'
    
            };
    
        break;
    
    
        case 5:
            today = "Friday";
        
            coffee = {
                color: "green",
                name: "frappaccino",
                pic: "images/frappaccino.jpg",
                alt: "A pic of frappaccino",
                day: "Friday",
                desc: `With this cappuccino, i can take on a rhino`
               
             };
    
        break;     
    
    
        case 6:
            today = "Saturday";
    
            coffee = {
                color: "Blue",
                name: "pumpkin spice latte",
                pic: "images/pumpkin-spice-latte.jpg",
                alt: "A pic of pumpkin spice",
                day: "Saturday",
                desc: `Sounds comfy?`
    
            
            };
    
        break;
        
        
        case 0:
            today = "Sunday";
    
            coffee = {
                color: "purple",
                name: "cold-brew",
                pic: "images/cold-brew.jpg",
                alt: "A pic of cold brew",
                day: "Sunday",
                desc: `cold brew for the toughest of minds...`
            };
    
        break;    
    
    
    
    }
    
    
    console.log(coffee);
    
    document.getElementById("coffee-output").innerHTML = coffeeTemplate(coffee);
    
    document.getElementsByTagName("HTML")[0].style.backgroundColor = coffee.color;
    
    document.getElementById("coffee-highlight").style.color = coffee.color;
    
    
    //alert("Hi, it's " + today);