export default function setTeamImage(data, TeamsLogos) {
  let result
  switch (data.name) {
    case 'Wizards':
      TeamsLogos.forEach(team => {
        if (team.name === 'WAS') result = team.url
      })
      break
    case 'Rockets':
      TeamsLogos.forEach(team => {
        if (team.name === 'HOU') result = team.url
      })
      break
    case 'Hornets':
      TeamsLogos.forEach(team => {
        if (team.name === 'CHA') result = team.url
      })
      break
    case '76ers':
      TeamsLogos.forEach(team => {
        if (team.name === 'PHI') result = team.url
      })
      break
    case 'Thunder':
      TeamsLogos.forEach(team => {
        if (team.name === 'OKC') result = team.url
      })
      break
    case 'Trail Blazers':
      TeamsLogos.forEach(team => {
        if (team.name === 'POR') result = team.url
      })
      break
    case 'Pelicans':
      TeamsLogos.forEach(team => {
        if (team.name === 'NOP') result = team.url
      })
      break
    case 'Warriors':
      TeamsLogos.forEach(team => {
        if (team.name === 'GSW') result = team.url
      })
      break
    case 'Bucks':
      TeamsLogos.forEach(team => {
        if (team.name === 'MIL') result = team.url
      })
      break
    case 'Magic':
      TeamsLogos.forEach(team => {
        if (team.name === 'ORL') result = team.url
      })
      break
    case 'Heat':
      TeamsLogos.forEach(team => {
        if (team.name === 'MIA') result = team.url
      })
      break
    case 'Hawks':
      TeamsLogos.forEach(team => {
        if (team.name === 'ATL') result = team.url
      })
      break
    case 'Pacers':
      TeamsLogos.forEach(team => {
        if (team.name === 'IND') result = team.url
      })
      break
    case 'Pistons':
      TeamsLogos.forEach(team => {
        if (team.name === 'DET') result = team.url
      })
      break
    case 'Bulls':
      TeamsLogos.forEach(team => {
        if (team.name === 'CHI') result = team.url
      })
      break
    case 'Cavaliers':
      TeamsLogos.forEach(team => {
        if (team.name === 'CLE') result = team.url
      })
      break
    case 'Raptors':
      TeamsLogos.forEach(team => {
        if (team.name === 'TOR') result = team.url
      })
      break
    case 'Celtics':
      TeamsLogos.forEach(team => {
        if (team.name === 'BOS') result = team.url
      })
      break
    case 'Nets':
      TeamsLogos.forEach(team => {
        if (team.name === 'BKN') result = team.url
      })
      break
    case 'Knicks':
      TeamsLogos.forEach(team => {
        if (team.name === 'NYK') result = team.url
      })
      break
    case 'Clippers':
      TeamsLogos.forEach(team => {
        if (team.name === 'LAC') result = team.url
      })
      break
    case 'Kings':
      TeamsLogos.forEach(team => {
        if (team.name === 'SAC') result = team.url
      })
      break
    case 'Lakers':
      TeamsLogos.forEach(team => {
        if (team.name === 'LAL') result = team.url
      })
      break
    case 'Suns':
      TeamsLogos.forEach(team => {
        if (team.name === 'PHX') result = team.url
      })
      break
    case 'Spurs':
      TeamsLogos.forEach(team => {
        if (team.name === 'SAS') result = team.url
      })
      break
    case 'Mavericks':
      TeamsLogos.forEach(team => {
        if (team.name === 'DAL') result = team.url
      })
      break
    case 'Grizzlies':
      TeamsLogos.forEach(team => {
        if (team.name === 'MEM') result = team.url
      })
      break
    case 'Nuggets':
      TeamsLogos.forEach(team => {
        if (team.name === 'DEN') result = team.url
      })
      break
    case 'Jazz':
      TeamsLogos.forEach(team => {
        if (team.name === 'UTA') result = team.url
      })
      break
    case 'Timberwolves':
      TeamsLogos.forEach(team => {
        if (team.name === 'MIN') result = team.url
      })
      break
  }
  return result
}
