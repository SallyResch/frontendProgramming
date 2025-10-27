let teams = ["Arsenal", "Aston Villa", "Barnsley", "Birmingham City", "Blackbern", "Liverpool"]

let homeTeam = teams[Math.floor(Math.random() * teams.length)];

let remainingTeams = teams.filter(team => team !== homeTeam);
let awayTeam = remainingTeams[Math.floor(Math.random() * remainingTeams.length)];
console.log(`The first game is between ${homeTeam} vs ${awayTeam}!`);

let playingTeams = [homeTeam, awayTeam]
console.log(`But first, lets find out who starts with the ball!`);

let coinToss = Math.floor(Math.random() * 2);

let startingTeam;

if (coinToss !== 1) {
  startingTeam = homeTeam;
  console.log(`${startingTeam} is starting`)
}
else {
  startingTeam = awayTeam;
  console.log(`${startingTeam} is starting`)
}

console.log("LET THE GAME BEGIN!!!");

let homeTeamScore = 0;
let awayTeamScore = 0;

let teamInPossession = Math.random() < 0.5 ? startingTeam : awayTeam;

for (let i = 0; i <= 20; i++) {
  console.log(`\nEvent ${i + 1}:`);

  let randomFootballEvent = Math.floor(Math.random() * 20) + 1;
  switch (true) {
    case randomFootballEvent === 1:
      console.log(`Red card for ${teamInPossession}`);
      break;
    case randomFootballEvent === 2 || randomFootballEvent === 3:
      console.log(`GOOOAAAAL for ${teamInPossession}`)
      break;
    case randomFootballEvent >= 4 && randomFootballEvent <= 7:
      console.log(`Ball goes out of play for ${teamInPossession}`);
      break;
    case randomFootballEvent >= 8 && randomFootballEvent <= 19:
      console.log(`${teamInPossession} loses posession`);
      teamInPossession = teamInPossession === homeTeam ? awayTeam : homeTeam;
      console.log(`${teamInPossession} now has the ball`);
      break;
    case randomFootballEvent === 20:
      console.log(`Penalty for ${teamInPossession}!`);
      break;
    default:
      break;
  }
}