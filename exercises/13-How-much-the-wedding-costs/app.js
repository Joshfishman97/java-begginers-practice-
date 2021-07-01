let guests = prompt('How many people are coming to your wedding?');

function getPrice(guests){

    if(guests<=50){
        return 4000;
    }
    else if(guests<=100){
        return 10000;
    }
    else if(guests<=200){
        return 15000;
    }
    else if(guests>200){
        return 20000;
    }

    
}

let price = getPrice(guests);
console.log('Your wedding will cost '+price+' dollars');
