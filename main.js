//Variables
let playerHp = 100;
let playerDmg = 10;
let playerSpecial = 6;
let playerSpeed = 4;
let enemyHp = 75;
let enemyDmg = 10;
let enemySpeed = 5;


//Para mostrar la salud del jugador y enemigo
const showStats = () => {
    alert(`Salud Jugador: ${playerHp}\tSalud Enemigo: ${enemyHp}`)
}

//Funciones generales de combate

//Sacar un numero aleatorio entre 1 y 3 para el ataque especial
const numberOfAttacks = () => {
    return Math.floor(Math.random() * (3 - 1 + 1) + 1);
}
//Ataque jugador
const playerAttack = () => {
    if(Math.round((Math.random()*101)) > 10){
        enemyHp = enemyHp - playerDmg;
        alert(`Haz causado ${playerDmg} de danio`)
    }
    else{
        alert("Haz fallado tu ataque!")
    }
}
//Ataque Especial jugador
const playerSpecialAttack = () => {
    if(Math.round((Math.random()*101)) > 10){
        enemyHp = enemyHp - playerSpecial;
        alert(`Haz causado ${playerSpecial} de danio`)
    }
    else{
        alert("Haz fallado tu ataque!")
    }
}
//Ataque enemigo
const EnemyAttack = () => {
    if(Math.round((Math.random()*101)) > 10){
        playerHp = playerHp - enemyDmg ;
        alert(`El enemigo te hizo ${enemyDmg} de danio`)
    }else{
        alert("El enemigo ha fallado el ataque")
    }
}
//Funcion Ataque especial
const specialAttack = () => {
    let counter = 0
    for(let i = 0 ; i < numberOfAttacks() ; i++){
        counter++
        if (enemyHp > 0){
            playerSpecialAttack();
        }
    }
    if (counter > 1){ 
        alert(`Haz golpeado ${counter} veces!`);
    }else if(counter == 1){
        alert(`Haz golpeado ${counter} vez!`);
    }
    else{
        alert(`Haz Fallado todos tus ataques!`);
    }
}


//Menu y opciones


// La opcion de menu 1 "Ataque"
const attack = () => {
    if (playerSpeed > enemySpeed){
        playerAttack();
        if (enemyHp > 0){
            EnemyAttack();
        }
    }else{
        EnemyAttack();
        if (playerHp > 0){
            playerAttack();
        }
    }
}
// La opcion 3 del menu "Aumentar tu velocidad"
const speedUp = () => {
    playerSpeed = playerSpeed * 2;
    alert("Tu velocidad se ha duplicado!")
    EnemyAttack();
}
//Opcion 4 del menu "Pocion"
const hpUp = () => {
    if (playerHp < 100){
        playerHp = playerHp + 15;
        if (playerHp > 100){
            playerHp = 100;
        }
        alert(`Te haz sanado 15 puntos de vida: Salud = ${playerHp}`);
        EnemyAttack();
    }else{
        alert('tu salud esta al maximo')
        EnemyAttack();
    }
}
//Opcion 2 del menu, "Ataque especial"
const sAttack = () => {
    if (playerSpeed > enemySpeed){
        specialAttack();
        if (enemyHp > 0){
            EnemyAttack();
        }
    }else{
        EnemyAttack();
        if (playerHp > 0){
            specialAttack();
        }

    }
}
//El menu de combate
const combateMenu = () => {
    let choice = parseInt(prompt("Que quieres hacer ahora?:\n1.- Ataque\n2.-Ataque Especial\n3.-Aumenta tu velocidad\n4.-Pocion"))
    while(isNaN(choice)){
        choice = parseInt(prompt("Ingresa una opcion valida.\nQue quieres hacer ahora?:\n1.- Ataque\n2.-Ataque Especial\n3.-Aumenta tu velocidad\n4.-Pocion"));
    }
    switch (choice) {
        case 1:
            attack();
            showStats();
            break;
        case 2:
            sAttack();
            showStats();
            break;
        case 3:
            speedUp();
            showStats();
            break;
        case 4:
            hpUp();
            showStats();
            break;
        default:
            combateMenu();
            break;
    }
}

//Game

//La funcion main que ejecuta el juego.
const main = () => {
    alert("Bienvenido a un combate RPG!")
    showStats();
    while (playerHp > 0 && enemyHp > 0) {
        combateMenu();
    }
    if(enemyHp <= 0){
        alert("Ganaste! gracias por probar esta demo.")
    }else if(playerHp <= 0){
        alert("Perdiste! pero gracias por probar esta demo")
    }
}

main();