// PLAYER REGISTRATION

// Creating a function to add a player

function addPlayer() {

  // Using the value property to access input values

    const position = document.getElementById("position").value;
    const name = document.getElementById("name").value;
    const number = document.getElementById("number").value;
  
    const confirmation = confirm("Escalar " + name + " como " + position + "?");
  
    if (confirmation) {
      const teamList = document.getElementById("team-list");
      const playerItem = document.createElement("li");
      playerItem.id = "player-" + number;
      playerItem.innerText = position + ": " + name + " (" + number + ")";

      // Adding Player

      teamList.appendChild(playerItem);
  
      // Leaving inputs blank after confirming player lineup

      document.getElementById("position").value = "";
      document.getElementById("name").value = "";
      document.getElementById("number").value = "";
    }
  }

// Creating a function to remove a player

function removePlayer() {
    const number = document.getElementById("numberToRemove").value;
    const playerToRemove = document.getElementById("player-" + number);
  
    const confirmation = confirm("Remover o jogador " + playerToRemove.innerText + "?");

    // Removing Player
  
    if (confirmation) {
      document.getElementById("team-list").removeChild(playerToRemove);
      document.getElementById("numberToRemove").value = "";
    }
  }