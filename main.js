function createGame(player1, hour, player2){
    return `
        <li>
            <img class="calender-flags" src="./assets/${player1}.svg"
            alt="Bandeira do ${player1}">
            <strong>${hour}</strong>
            <img class="calender-flags" src="./assets/${player2}.svg"
            alt="Bandeira da ${player2}">
        </li>
    `
}

let delay = -0.3;
function createCard(date, day, games){
    delay = delay + 0.3;
    return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
            ${games}
        </ul>
    </div>
    `
}
document.querySelector('#cards').innerHTML =
        createCard("20/11", "domingo", 
        createGame("qatar", "16:00", "ghana")) +
        createCard("21/11", "segunda",
            createGame("england", "10:00", "iran")+
            createGame("senegal", "13:00","serbia")+
            createGame("unitedstates", "16:00","wales")) +         
        createCard("22/11", "terça", createGame("brazil", "16:00",
        "serbia")) +
        createCard("23/11", "quarta", createGame("brazil", "16:00",
        "serbia")) +
        createCard("24/11", "quinta", createGame("brazil", "16:00",
        "serbia")) +
        createCard("25/11", "sexta", createGame("brazil", "16:00",
        "serbia")) +
        createCard("26/11", "sábado", createGame("brazil", "16:00",
        "serbia")) +
        createCard("27/11", "domingo", createGame("brazil", "16:00",
        "serbia")) +
        createCard("28/11", "segunda", createGame("brazil", "16:00",
        "serbia")) +
        createCard("29/11", "terça", createGame("brazil", "16:00",
        "serbia")) +
        createCard("30/11", "quarta",
            createGame("brazil", "13:00", "switzerland") + 
            createGame("portugal", "16:00", "uruguai")
        ) +
        createCard("01/12", "quinta", 
        createGame("brazil", "16:00", "ghana"))+
        createCard("02/12", "sexta", 
        createGame("brazil", "16:00", "ghana"))