const genTickerPrice = 20;
const discTicketPrice = 10;
const matinee = -3;




function buyTicket(){
    
    let age = prompt("What is your age?");
    let cost = getBaseTicketCost(age);
    let ifMatinee = prompt("Are you attending a matinee show?").toLowerCase();
    cost = applyMatineeDiscount(cost,ifMatinee);
    
    alert("Your ticket will cost: $" + cost);
}

function getBaseTicketCost(age){
    
    if(age <= 12 || age >= 65){
       return discTicketPrice;
    }
    else{
        return genTickerPrice;
    }
}

function applyMatineeDiscount(cost,ifMatinee){
    if(ifMatinee === 'yes' || ifMatinee === 'y'){
        return cost + matinee;
    }else{
        return cost;
    }
}