// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

let vendingMachine = {
    water:500,
    steamedMilk: 1000,
    foamedMilk:300,
    coffeeBeans: 1000,
    sugar: 1000,
    cream: 500,
    iceCream: 500,
    ice:700,
    Lemon:400,
    rum:1000,
    whip:200,
    nb:200,
    cups:5000,
    money:0
}

let coffeesItems = {
    0:
        {
            water:250,
            steamedMilk: 0,
            foamedMilk:0,
            coffeeBeans: 20,
            sugar: 0,
            cream: 0,
            iceCream: 0,
            ice:0,
            Lemon:0,
            rum:0,
            whip:0,
            nb:0,
            price:5
        },
    1:
        {
            water:20,
            steamedMilk:200 ,
            foamedMilk:30,
            coffeeBeans: 10,
            sugar: 0,
            cream: 0,
            iceCream: 0,
            ice:0,
            Lemon:0,
            rum:0,
            whip:0,
            nb:0,
            price:5
        },
    2:
        {
            water:20,
            steamedMilk:200 ,
            foamedMilk:30,
            coffeeBeans: 10,
            sugar: 0,
            cream: 0,
            iceCream: 0,
            ice:0,
            Lemon:0,
            rum:0,
            whip:0,
            nb:0,
            price:5

        },
    3:
        {
            water:20,
            steamedMilk:200 ,
            foamedMilk:30,
            coffeeBeans: 10,
            sugar: 0,
            cream: 0,
            iceCream: 0,
            ice:0,
            Lemon:0,
            rum:0,
            whip:0,
            nb:0,
            price:5

        },
    4:
        {
            water:20,
            steamedMilk:200 ,
            foamedMilk:30,
            coffeeBeans: 10,
            sugar: 0,
            cream: 0,
            iceCream: 0,
            ice:0,
            Lemon:0,
            rum:0,
            whip:0,
            nb:0,
            price:5

        },
    5:
        {
            water:20,
            steamedMilk:200 ,
            foamedMilk:30,
            coffeeBeans: 10,
            sugar: 0,
            cream: 0,
            iceCream: 0,
            ice:0,
            Lemon:0,
            rum:0,
            whip:0,
            nb:0,
            price:5

        },
    6:
        {
            water:20,
            steamedMilk:200 ,
            foamedMilk:30,
            coffeeBeans: 10,
            sugar: 0,
            cream: 0,
            iceCream: 0,
            ice:0,
            Lemon:0,
            rum:0,
            whip:0,
            nb:0,
            price:5

        },
    7:
        {
            water:20,
            steamedMilk:200 ,
            foamedMilk:30,
            coffeeBeans: 10,
            sugar: 0,
            cream: 0,
            iceCream: 0,
            ice:0,
            Lemon:0,
            rum:0,
            whip:0,
            nb:0,
            price:5

        },
    8:
        {
            water:20,
            steamedMilk:200 ,
            foamedMilk:30,
            coffeeBeans: 10,
            sugar: 0,
            cream: 0,
            iceCream: 0,
            ice:0,
            Lemon:0,
            rum:0,
            whip:0,
            nb:0,
            price:5

        },
    9:
        {
            water:20,
            steamedMilk:200 ,
            foamedMilk:30,
            coffeeBeans: 10,
            sugar: 0,
            cream: 0,
            iceCream: 0,
            ice:0,
            Lemon:0,
            rum:0,
            whip:0,
            nb:0,
            price:5

        },
    10:
        {
            water:20,
            steamedMilk:200 ,
            foamedMilk:30,
            coffeeBeans: 10,
            sugar: 0,
            cream: 0,
            iceCream: 0,
            ice:0,
            Lemon:0,
            rum:0,
            whip:0,
            nb:0,
            price:5

        },
    11:
        {
            water:20,
            steamedMilk:200 ,
            foamedMilk:30,
            coffeeBeans: 10,
            sugar: 0,
            cream: 0,
            iceCream: 0,
            ice:0,
            Lemon:0,
            rum:0,
            whip:0,
            nb:0,
            price:5

        },
    12:
        {
            water:20,
            steamedMilk:200 ,
            foamedMilk:30,
            coffeeBeans: 10,
            sugar: 0,
            cream: 0,
            iceCream: 0,
            ice:0,
            Lemon:0,
            rum:0,
            whip:0,
            nb:0,
            price:5

        },
    13:
        {
            water:20,
            steamedMilk:200 ,
            foamedMilk:30,
            coffeeBeans: 10,
            sugar: 0,
            cream: 0,
            iceCream: 0,
            ice:0,
            Lemon:0,
            rum:0,
            whip:0,
            nb:0,
            price:5

        },
    14:
        {
            water:20,
            steamedMilk:200 ,
            foamedMilk:30,
            coffeeBeans: 10,
            sugar: 0,
            cream: 0,
            iceCream: 0,
            ice:0,
            Lemon:0,
            rum:0,
            whip:0,
            nb:0,
            price:5

        },
    15:
        {
            water:20,
            steamedMilk:200 ,
            foamedMilk:30,
            coffeeBeans: 10,
            sugar: 0,
            cream: 0,
            iceCream: 0,
            ice:0,
            Lemon:0,
            rum:0,
            whip:0,
            nb:0,
            price:5

        },
    16:
        {
            water:20,
            steamedMilk:200 ,
            foamedMilk:30,
            coffeeBeans: 10,
            sugar: 0,
            cream: 0,
            iceCream: 0,
            ice:0,
            Lemon:0,
            rum:0,
            whip:0,
            nb:0,
            price:5

        }
}

let icedCoffeeItems = {

    0:
        {
            water:250,
            steamedMilk: 0,
            foamedMilk:0,
            coffeeBeans: 20,
            sugar: 0,
            cream: 10,
            iceCream: 0,
            ice:3,
            Lemon:0,
            rum:0,
            whip:0,
            nb:0,
            price:5
        },
    1:
        {
            water:50,
            steamedMilk: 0,
            foamedMilk:0,
            coffeeBeans: 20,
            sugar: 0,
            cream: 20,
            iceCream: 0,
            ice:1,
            Lemon:0,
            rum:0,
            whip:0,
            nb:0,
            price:12
        },
    2:
        {
            water:150,
            steamedMilk: 0,
            foamedMilk:0,
            coffeeBeans: 20,
            sugar: 0,
            cream: 0,
            iceCream: 0,
            ice:6,
            Lemon:0,
            rum:0,
            whip:20,
            nb:0,
            price:20
        },
    3:
        {
            water:250,
            steamedMilk: 0,
            foamedMilk:0,
            coffeeBeans: 20,
            sugar: 0,
            cream: 5,
            iceCream: 0,
            ice:2,
            Lemon:0,
            rum:0,
            whip:0,
            nb:5,
            price:10
        },
    4:
        {
            water:250,
            steamedMilk: 0,
            foamedMilk:0,
            coffeeBeans: 20,
            sugar: 0,
            cream: 0,
            iceCream: 0,
            ice:5,
            Lemon:0,
            rum:0,
            whip:0,
            nb:0,
            price:5
        },
    5:
        {
            water:150,
            steamedMilk: 0,
            foamedMilk:0,
            coffeeBeans: 30,
            sugar: 0,
            cream: 0,
            iceCream: 0,
            ice:0,
            Lemon:5,
            rum:100,
            whip:0,
            nb:0,
            price:20
        }
}
let coffees = ["Black", "Latte", "Cappuccino", "Americano", "Espresso", "Doppio", "Cortado", "Red Eye", "Galao", "Lungo", "Macchiato", "Mocha", "Ristretto", "Flat White", "Affogato", "Cafe au Lait", "Irish"];
let icedCoffees = ["Iced Coffee", "Iced Espresso", "Frappuccino", "Nitro", "Cold Brew", "Mazagran"];

let askUser = () => {
    return input("Write action (buy, exit): \n");
}
let coffeeOption = () => {
    return input("1 - Coffee Drinks\n2 - Iced Coffee")
}
let cupOption = () => {
    return input("1 - Only One\n2 - Two Cups\n3 - Three Cups\n4 - Four Cups\n5 - Cups")
}

let coffeeDrinksOption = () => {
    let menu = "";
    for(x in coffees){
        menu = menu + `${x} - ${coffees[x]}, `;

    }
    return input("Which Items: " + menu);
}

let icedCoffeeOption = () => {
    let menu = "";
    for(x in icedCoffees){
        menu = menu + `${x} - ${icedCoffees[x]}, `;

    }
    return input("Which Items: " + menu);
}

let preparing = (option, val) => {
    let needWater;
    let needSteamedMilk;
    let needFoamedMilk;
    let needCoffeeBeans;
    let needCream;
    let needIceCream;
    let needIce;
    let needLemon;
    let needRum;
    let needWhip;
    let needNB;
    let neePrice;
    let checkWater;
    let checkSteamedMild;
    let checkFoamedMild;
    let checkCoffeeBeans;
    let checkCream;
    let checkIceCream;
    let checkIce;
    let checkLemon;
    let checkRum;
    let checkWhip;
    let checkNB;

    // ask for how many cups.......
    let customerCups = Number(askForCups());

    if(customerCups != NaN){
        if(checkItemsCalc('cups', customerCups) == true){

            switch (option){
                case 1:
                    needWater = coffeesItems[val].water*customerCups;
                    needSteamedMilk = coffeesItems[val].steamedMilk*customerCups;
                    needFoamedMilk= coffeesItems[val].foamedMilk*customerCups;
                    needCoffeeBeans = coffeesItems[val].coffeeBeans*customerCups;
                    needCream = coffeesItems[val].cream*customerCups;
                    needIceCream = coffeesItems[val].iceCream*customerCups;
                    needIce = coffeesItems[val].ice*customerCups;
                    needLemon = coffeesItems[val].Lemon*customerCups;
                    needRum = coffeesItems[val].rum*customerCups;
                    needWhip = coffeesItems[val].whip*customerCups;
                    needNB = coffeesItems[val].nb*customerCups;
                    neePrice = coffeesItems[val].price;
                    break;
                case 2:
                    needWater = icedCoffeeItems[val].water*customerCups;
                    needSteamedMilk = icedCoffeeItems[val].steamedMilk*customerCups;
                    needFoamedMilk= icedCoffeeItems[val].foamedMilk*customerCups;
                    needCoffeeBeans = icedCoffeeItems[val].coffeeBeans*customerCups;
                    needCream = icedCoffeeItems[val].cream*customerCups;
                    needIceCream = icedCoffeeItems[val].iceCream*customerCups;
                    needIce = icedCoffeeItems[val].ice*customerCups;
                    needLemon = icedCoffeeItems[val].Lemon*customerCups;
                    needRum = icedCoffeeItems[val].rum*customerCups;
                    needWhip = icedCoffeeItems[val].whip*customerCups;
                    needNB = icedCoffeeItems[val].nb*customerCups;
                    neePrice = icedCoffeeItems[val].price*customerCups;
                    break;
                default:
            }
        }
        if(checkItemsCalc("water", needWater) == true && checkItemsCalc("steamedMilk", needSteamedMilk) == true && checkItemsCalc("foamedMilk", needFoamedMilk) == true && checkItemsCalc("coffeeBeans", needCoffeeBeans) == true && checkItemsCalc("cream", needCream) == true && checkItemsCalc("iceCream", needIceCream) == true && checkItemsCalc("ice", needIce) == true && checkItemsCalc("Lemon", needLemon) == true && checkItemsCalc("rum", needRum) == true && checkItemsCalc("whip", needWhip) == true && checkItemsCalc("nb", needNB) == true ){
            // askfor how much sugar you want for all each and ever cups.
            let customerSuger = Number(askForSugar());

            if(checkItemsCalc('sugar', customerSuger*customerCups)== true){
                // price calc
                let totalPrice = customerCups * neePrice;
                let rightNowMoney = vendingMachine.money;
                vendingMachine.money = totalPrice + rightNowMoney;
                vendingMachine.water = vendingMachine.water-needWater;
                vendingMachine.foamedMilk = vendingMachine.foamedMilk - needFoamedMilk;
                vendingMachine.steamedMilk = vendingMachine.steamedMilk-needSteamedMilk;
                vendingMachine.coffeeBeans = vendingMachine.coffeeBeans-needCoffeeBeans;
                vendingMachine.cream = vendingMachine.cream-needCream;
                vendingMachine.iceCream = vendingMachine.iceCream-needIceCream;
                vendingMachine.ice = vendingMachine.ice-needIce;
                vendingMachine.Lemon = vendingMachine.Lemon-needLemon;
                vendingMachine.rum = vendingMachine.rum-needRum;
                vendingMachine.whip = vendingMachine.whip-needWhip;
                vendingMachine.nb = vendingMachine.nb-needNB;
                vendingMachine.sugar = vendingMachine.sugar-customerSuger*customerCups;
                console.log("Thank you for choosing Us!! ....")
                // items
                askUserAbout();
            }

        }else {

            if(option==1){
                checkWater = Math.floor(vendingMachine.water/coffeesItems[val].water);
                checkSteamedMild = Math.floor(vendingMachine.steamedMilk/coffeesItems[val].steamedMilk);
                checkFoamedMild = Math.floor(vendingMachine.foamedMilk/coffeesItems[val].foamedMilk);
                checkCoffeeBeans = Math.floor(vendingMachine.coffeeBeans/coffeesItems[val].coffeeBeans);
                checkCream = Math.floor(vendingMachine.cream/coffeesItems[val].cream);
                checkIceCream = Math.floor(vendingMachine.iceCream/coffeesItems[val].iceCream);
                checkIce = Math.floor(vendingMachine.ice/coffeesItems[val].ice);
                checkLemon = Math.floor(vendingMachine.Lemon/coffeesItems[val].Lemon);
                checkRum = Math.floor(vendingMachine.rum/coffeesItems[val].rum);
                checkWhip = Math.floor(vendingMachine.whip/coffeesItems[val].whip);
                checkNB = Math.floor(vendingMachine.nb/coffeesItems[val].nb);

            }else{
                checkWater = Math.floor(vendingMachine.water/icedCoffeeItems[val].water);
                checkSteamedMild = Math.floor(vendingMachine.steamedMilk/icedCoffeeItems[val].steamedMilk);
                checkFoamedMild = Math.floor(vendingMachine.foamedMilk/icedCoffeeItems[val].foamedMilk);
                checkCoffeeBeans = Math.floor(vendingMachine.coffeeBeans/icedCoffeeItems[val].coffeeBeans);
                checkCream = Math.floor(vendingMachine.cream/icedCoffeeItems[val].cream);
                checkIceCream = Math.floor(vendingMachine.iceCream/icedCoffeeItems[val].iceCream);
                checkIce = Math.floor(vendingMachine.ice/icedCoffeeItems[val].ice);
                checkLemon = Math.floor(vendingMachine.Lemon/icedCoffeeItems[val].Lemon);
                checkRum = Math.floor(vendingMachine.rum/icedCoffeeItems[val].rum);
                checkWhip = Math.floor(vendingMachine.whip/icedCoffeeItems[val].whip);
                checkNB = Math.floor(vendingMachine.nb/icedCoffeeItems[val].nb);
            }


            minReq = Math.min(checkWater,checkSteamedMild, checkFoamedMild,checkCoffeeBeans,checkCream,checkIceCream,checkIce,checkLemon,checkRum,checkWhip,checkNB);
            if(minReq == 0){
                console.log(`Sorry! We can Prepare Right now, Some items are empty..`);
            }
            console.log(`Sorry! We can Prepare only ${minReq} cup..`);
            askUserAbout();
        }
    }else{

        console.warn("Sorry!");

    }

}

let checkItemsCalc = (itemName, itemQty) => {
    // console.log("we are here: ", vendingMachine[itemName])
    if(vendingMachine[itemName] >= itemQty){
        return true;
    }else{
        console.log("this is items: ", itemName);
        return false;
    }
}

let askForCups = () => {
    return input("How Many Cups do you Need: \n1 - One Cup\n2 - Two Cups\n3 - Three Cups\n4 - Four Cups and\n5 - Five Cups.");
}
let askForSugar = () => {
    return input("How much sugar in each every Cups: \nFor eg.: 1 - for one spoon sugar.");
}
let remaining = () => {
    console.log(`We Have:\n${vendingMachine.water} ml of water\n${vendingMachine.steamedMilk} ml of Steamed Milk\n${vendingMachine.foamedMilk} ml of Foamed Milk\n${vendingMachine.sugar} gram of sugar,\n${vendingMachine.cream} gram of Cream,\n${vendingMachine.iceCream} gram of iceCream,\n${vendingMachine.Lemon} ml of Lemon,\n${vendingMachine.rum} ml of RUM\n${vendingMachine.whip} ml of Whiskey, \n${vendingMachine.nb} ml of Nitrogen Bubbles,\n${vendingMachine.cups} disposable cups\n$${vendingMachine.money} of money\n`);

}


let buy = () => {
    let userAnsOption;
    let userAnsNext = Number(coffeeOption());
    if(userAnsNext != NaN) {
        switch (userAnsNext) {
            case 1:
                userAnsOption =Number(coffeeDrinksOption());
                if(userAnsOption != NaN){
                    preparing(1, userAnsOption);
                }
                break;
            case 2:
                userAnsOption =Number(icedCoffeeOption());
                if(userAnsOption != NaN){
                    preparing(2, userAnsOption);
                }
                break;
            default:
        }
    }
}
let password =()=>{

    const cookieValue = document.cookie.split(";").find((row) => row.startsWith("password="))?.split("=")[1];
    if(cookieValue == "ok"){
        return true;
    }else {
        let pp= input("Password Please");
        if(pp=="pwd"){
            document.cookie = "password=ok;val=1";
            remaining();
            return true;
        }else{
            admin();
        }
    }

}
let fill = () => {
    let fillWater = Number(input("Write how many ml of water you want to add:\n"));
    let fillSteamedMilk = Number(input("Write how many ml of Steamed Milk you want to add:\n"));
    let fillFoamedMilk = Number(input("Write how many ml of Foamed Milk you want to add:\n"));
    let fillCoffeeBeans = Number(input("Write how many grm of coffee Beans you want to add:\n"));
    let fillCream = Number(input("Write how many grm of Cream you want to add:\n"));
    let fillIceCream= Number(input("Write how many gram of Ice Cream you want to add:\n"));
    let fillIce = Number(input("Write how many cube of ice you want to add:\n"));
    let fillLemon= Number(input("Write how many ml of Lemon you want to add:\n"));
    let fillRum= Number(input("Write how many ml of RUM you want to add:\n"));
    let fillWhip = Number(input("Write how many ml of Whisky you want to add:\n"));
    let fillNB = Number(input("Write how many ml of Nitrogen Bubbles you want to add:\n"));


    if(!isNaN(fillWater)){
        vendingMachine.water = vendingMachine.water + fillWater;
    }
    if(!isNaN(fillSteamedMilk)){
        vendingMachine.steamedMilk = vendingMachine.steamedMilk + fillSteamedMilk;
    }
    if(!isNaN(fillFoamedMilk)){
        vendingMachine.foamedMilk = vendingMachine.foamedMilk + fillFoamedMilk;
    }
    if(!isNaN(fillCoffeeBeans)){
        vendingMachine.coffeeBeans = vendingMachine.coffeeBeans + fillCoffeeBeans;
    }
    if(!isNaN(fillCream)){
        vendingMachine.cream = vendingMachine.cream + fillCream;
    }
    if(!isNaN(fillIceCream)){
        vendingMachine.iceCream = vendingMachine.iceCream + fillIceCream;
    }
    if(!isNaN(fillIce)){
        vendingMachine.ice = vendingMachine.ice + fillIce;
    }
    if(!isNaN(fillLemon)){
        vendingMachine.Lemon = vendingMachine.Lemon + fillLemon;
    }
    if(!isNaN(fillRum)){
        vendingMachine.rum = vendingMachine.rum + fillRum;
    }
    if(!isNaN(fillWhip)){
        vendingMachine.whip = vendingMachine.whip + fillWhip;
    }
    if(!isNaN(fillNB)){
        vendingMachine.nb = vendingMachine.nb + fillNB;
    }
    remaining();
    admin();


}
let adminOption = () => {
    return input("ADMIN: => Write action (take, remaining, adding, exit): \n");
}
let admin = () => {
    if(password()==true){
        let option = adminOption();
        switch (option){
            case "take":
                console.log("Total: $" + vendingMachine.money);
                vendingMachine.money = 0;
                admin();
                break;

            case "remaining":
                remaining();
                admin();
                break;
            case "fill":
                fill();
                break;
            case "exit":
                document.cookie = "password=no;val=0"
                askUserAbout();
                break;
            default:
                admin();
        }
    }
}

let askUserAbout = () => {
    let userAns = askUser();
    if(isNaN(userAns)){
        switch (userAns){
            case "buy":
                buy();
                break;

            case "admin":
                admin();
                break;

            case "exit":
                console.log("Thank you for choosing us..........");
                break;
            default:
                askUserAbout();

        }
    }
}

askUserAbout();
