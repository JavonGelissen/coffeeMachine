// // Use "input()" to input a line from the user
// // Use "input(str)" to print some text before requesting input
// // You will need this in the following stages
const input = require('sync-input')

itemToBuy = '';
moneyLeft = 0;

let stock = {
    water: 400,
    milk: 540,
    beans: 120,
    cups: 9,
    money: 550
}

function action() {
    let action = input(`Write action (buy, fill, take, remaining, exit): `);
    switch (action) {
        case 'buy':
            buyItem();
            break;
        case 'fill':
            fillStock();
            break;
        case 'take':
            takeMoney(stock.money);
            break;
        case 'remaining':
            currentMachineStatus();
            break;
        case 'exit':
            break;
        default:
    }
}

function buyItem() {
    let itemToBuy = input(`What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu: `);
    switch (itemToBuy) {
        case '1':
            buyEspresso();
            break;
        case '2':
            buyLatte();
            break;
        case '3':
            buyCappuccino();
            break;
        case 'back':
            break;
        default:
    }
}

function buyEspresso() {
    if (stock.water >= 250 && stock.beans >= 16 && stock.cups >= 1) {
        stock.water -= 250;
        stock.beans -= 16;
        stock.cups -= 1;
        stock.money += 4;
        console.log('I have enough resources, making you a coffee!');
    } else if (stock.water < 250) {
        console.log('Sorry, not enough water!');
    } else if (stock.beans < 16) {
        console.log('Sorry, not enough coffee beans!');
    } else if (stock.cups < 1) {
        console.log('Sorry, not enough disposable cups!');
    }
}

function buyLatte() {
    if (stock.water >= 350 && stock.milk >= 75 && stock.beans >= 20 && stock.cups >= 1) {
        stock.water -= 350;
        stock.milk -= 75;
        stock.beans -= 20;
        stock.cups -= 1;
        stock.money += 7;
        console.log('I have enough resources, making you a coffee!');
    } else if (stock.water < 350) {
        console.log('Sorry, not enough water!');
    } else if (stock.milk < 75) {
        console.log('Sorry, not enough milk!');
    } else if (stock.beans < 20) {
        console.log('Sorry, not enough coffee beans!');
    } else if (stock.cups < 1) {
        console.log('Sorry, not enough disposable cups!');
    }
}

function buyCappuccino() {
    if (stock.water >= 200 && stock.milk >= 100 && stock.beans >= 12 && stock.cups >= 1) {
        stock.water -= 200;
        stock.milk -= 100;
        stock.beans -= 12;
        stock.cups -= 1;
        stock.money += 6;
        console.log('I have enough resources, making you a coffee!');
    } else if (stock.water < 200) {
        console.log('Sorry, not enough water!');
    } else if (stock.milk < 100) {
        console.log('Sorry, not enough milk!');
    } else if (stock.beans < 12) {
        console.log('Sorry, not enough coffee beans!');
    } else if (stock.cups < 1) {
        console.log('Sorry, not enough disposable cups!');
    }
}

function fillStock() {
    stock.water += Number(input('Write how many ml of water you want to add: '));
    stock.milk += Number(input('Write how many ml of milk you want to add: '));
    stock.beans += Number(input('Write how many grams of coffee beans you want to add: '));
    stock.cups += Number(input('Write how many disposable cups you want to add: '));
}

function takeMoney(money) {
    console.log(`I gave you ${money}`);
    stock.money -= money;
}

function currentMachineStatus() {
    console.log(`The coffee machine has:
${stock.water} ml of water
${stock.milk} ml of milk
${stock.beans} g of coffee beans
${stock.cups} cups
$${stock.money} of money
`);
}

while (action !== 'exit') {
    action();
}


