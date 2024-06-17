<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<html>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>
      Learn Modern JavaScript methods by building football team cards
    </title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1 class="title">Team stats</h1>
    <main>
      <div class="team-stats">
        <p>Team: <span id="team"></span></p>
        <p>Sport: <span id="sport"></span></p>
        <p>Year: <span id="year"></span></p>
        <p>Head coach: <span id="head-coach"></span></p>
      </div>
      <label class="options-label" for="players">Filter Teammates:</label>
      <select name="players" id="players">
        <option value="all">All Players</option>
        <option value="nickname">Nicknames</option>
        <option value="forward">Position Forward</option>
        <option value="midfielder">Position Midfielder</option>
        <option value="defender">Position Defender</option>
        <option value="goalkeeper">Position Goalkeeper</option>
      </select>
      <div class="cards" id="player-cards">
        <div class="player-card">
          <h2>Sergio Almirón</h2>
          <p>Position: forward</p>
          <p>Number: 1</p>
          <p>Nickname: N/A</p>
        </div>
        <div class="player-card">
          <h2>Sergio Batista</h2>
          <p>Position: midfielder</p>
          <p>Number: 2</p>
          <p>Nickname: N/A</p>
        </div>
        <div class="player-card">
          <h2>Ricardo Bochini</h2>
          <p>Position: midfielder</p>
          <p>Number: 3</p>
          <p>Nickname: El Bocha</p>
        </div>
        <div class="player-card">
          <h2>Claudio Borghi</h2>
          <p>Position: midfielder</p>
          <p>Number: 4</p>
          <p>Nickname: Bichi</p>
        </div>
        <div class="player-card">
          <h2>José Luis Brown</h2>
          <p>Position: defender</p>
          <p>Number: 5</p>
          <p>Nickname: Tata</p>
        </div>
        <div class="player-card">
          <h2>Daniel Passarella</h2>
          <p>Position: defender</p>
          <p>Number: 6</p>
          <p>Nickname: El Gran Capitán</p>
        </div>
        <div class="player-card">
          <h2>Jorge Burruchaga</h2>
          <p>Position: forward</p>
          <p>Number: 7</p>
          <p>Nickname: Burru</p>
        </div>
        <div class="player-card">
          <h2>Néstor Clausen</h2>
          <p>Position: defender</p>
          <p>Number: 8</p>
          <p>Nickname: N/A</p>
        </div>
        <div class="player-card">
          <h2>José Luis Cuciuffo</h2>
          <p>Position: defender</p>
          <p>Number: 9</p>
          <p>Nickname: El Cuchu</p>
        </div>
        <div class="player-card">
          <h2>(Captain) Diego Maradona</h2>
          <p>Position: midfielder</p>
          <p>Number: 10</p>
          <p>Nickname: El Pibe de Oro</p>
        </div>
        <div class="player-card">
          <h2>Jorge Valdano</h2>
          <p>Position: forward</p>
          <p>Number: 11</p>
          <p>Nickname: The Philosopher of Football</p>
        </div>
        <div class="player-card">
          <h2>Héctor Enrique</h2>
          <p>Position: midfielder</p>
          <p>Number: 12</p>
          <p>Nickname: N/A</p>
        </div>
        <div class="player-card">
          <h2>Oscar Garré</h2>
          <p>Position: defender</p>
          <p>Number: 13</p>
          <p>Nickname: N/A</p>
        </div>
        <div class="player-card">
          <h2>Ricardo Giusti</h2>
          <p>Position: midfielder</p>
          <p>Number: 14</p>
          <p>Nickname: N/A</p>
        </div>
        <div class="player-card">
          <h2>Luis Islas</h2>
          <p>Position: goalkeeper</p>
          <p>Number: 15</p>
          <p>Nickname: El loco</p>
        </div>
        <div class="player-card">
          <h2>Julio Olarticoechea</h2>
          <p>Position: defender</p>
          <p>Number: 16</p>
          <p>Nickname: N/A</p>
        </div>
        <div class="player-card">
          <h2>Pedro Pasculli</h2>
          <p>Position: forward</p>
          <p>Number: 17</p>
          <p>Nickname: N/A</p>
        </div>
        <div class="player-card">
          <h2>Nery Pumpido</h2>
          <p>Position: goalkeeper</p>
          <p>Number: 18</p>
          <p>Nickname: N/A</p>
        </div>
        <div class="player-card">
          <h2>Oscar Ruggeri</h2>
          <p>Position: defender</p>
          <p>Number: 19</p>
          <p>Nickname: El Cabezón</p>
        </div>
        <div class="player-card">
          <h2>Carlos Tapia</h2>
          <p>Position: midfielder</p>
          <p>Number: 20</p>
          <p>Nickname: N/A</p>
        </div>
        <div class="player-card">
          <h2>Marcelo Trobbiani</h2>
          <p>Position: midfielder</p>
          <p>Number: 21</p>
          <p>Nickname: Calesita</p>
        </div>
        <div class="player-card">
          <h2>Héctor Zelada</h2>
          <p>Position: goalkeeper</p>
          <p>Number: 22</p>
          <p>Nickname: N/A</p>
        </div>
      </div>
    </main>
    <footer>&copy; freeCodeCamp</footer>
    <script src="./script.js"></script>
  </body>
</html>
