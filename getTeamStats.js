const doTheFetch = (teamFullName, teamHashID, theState, team) => {
  fetch('https://buzzer-beater.live/api/nba/team_details', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ teamId: teamHashID })
  })
    .then(response => response.json())
    .then(data => {
      theState.setState({
        team1_name: teamFullName,
        teamPlayers: data,
        team1: team,
        selected: true
      })
      fetch('https://buzzer-beater.live/api/nba/team_stats', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ teamId: teamHashID })
      })
        .then(response => response.json())
        .then(data => {
          theState.setState({ team_stats: data, isLoading: false })
        })
    })
    .catch(() => {
      theState.setState({
        team1_name: teamFullName,
        teamPlayers: null,
        team1: team,
        selected: true,
        isLoading: false
      })
    })
}
export default function getStatsDetails(team, a) {
  switch (team.name) {
    case 'WAS':
      doTheFetch('Washington Wizards', '583ec8d4-fb46-11e1-82cb-f4ce4684ea4c', a, team)
      break
    case 'HOU':
      doTheFetch('Houston Rockets', '583ec825-fb46-11e1-82cb-f4ce4684ea4c', a, team)
      break
    case 'CHA':
      doTheFetch('Charlotte Hornets', '583ec97e-fb46-11e1-82cb-f4ce4684ea4c', a, team)
      break
    case 'PHI':
      doTheFetch('Philadelphia 76ers', '583ec87d-fb46-11e1-82cb-f4ce4684ea4c', a, team)
      break
    case 'OKC':
      doTheFetch('Oklahoma City Thunder', '583ecfff-fb46-11e1-82cb-f4ce4684ea4c', a, team)
      break
    case 'POR':
      doTheFetch('Portland Trail Blazers', '583ed056-fb46-11e1-82cb-f4ce4684ea4c', a, team)
      break
    case 'NOP':
      doTheFetch('New Orleans Pelicans', '583ecc9a-fb46-11e1-82cb-f4ce4684ea4c', a, team)
      break
    case 'GSW':
      doTheFetch('Golden State Warriors', '583ec825-fb46-11e1-82cb-f4ce4684ea4c', a, team)
      break
    case 'MIL':
      doTheFetch('Milwaukee Bucks', '583ecefd-fb46-11e1-82cb-f4ce4684ea4c', a, team)
      break
    case 'ORL':
      doTheFetch('Orlando Magic', '583ed157-fb46-11e1-82cb-f4ce4684ea4c', a, team)
      break
    case 'MIA':
      doTheFetch('Miami Heat', '583ecea6-fb46-11e1-82cb-f4ce4684ea4c', a, team)
      break
    case 'ATL':
      doTheFetch('Atlanta Hawks', '583ecb8f-fb46-11e1-82cb-f4ce4684ea4c', a, team)
      break
    case 'IND':
      doTheFetch('Indiana Pacers', '583ec7cd-fb46-11e1-82cb-f4ce4684ea4c', a, team)
      break
    case 'DET':
      doTheFetch('Detroit Pistons', '583ec928-fb46-11e1-82cb-f4ce4684ea4c', a, team)
      break
    case 'CHI':
      doTheFetch('Chicago Bulls', '583ec5fd-fb46-11e1-82cb-f4ce4684ea4c', a, team)
      break
    case 'CLE':
      doTheFetch('Cleveland Cavaliers', '583ec773-fb46-11e1-82cb-f4ce4684ea4c', a, team)
      break
    case 'TOR':
      doTheFetch('Toronto Raptors', '583ecda6-fb46-11e1-82cb-f4ce4684ea4c', a, team)
      break
    case 'BOS':
      doTheFetch('Boston Celtics', '583eccfa-fb46-11e1-82cb-f4ce4684ea4c', a, team)
      break
    case 'BRK':
      doTheFetch('Brooklyn Nets', '583ec9d6-fb46-11e1-82cb-f4ce4684ea4c', a, team)
      break
    case 'NYK':
      doTheFetch('New York Knicks', '583ec70e-fb46-11e1-82cb-f4ce4684ea4c', a, team)
      break
    case 'LAC':
      doTheFetch('Los Angeles Clippers', '583ecdfb-fb46-11e1-82cb-f4ce4684ea4c', a, team)
      break
    case 'SAC':
      doTheFetch('Sacramento Kings', '583ed0ac-fb46-11e1-82cb-f4ce4684ea4c', a, team)
      break
    case 'LAL':
      doTheFetch('Los Angeles Lakers', '583ecae2-fb46-11e1-82cb-f4ce4684ea4c', a, team)
      break
    case 'PHX':
      doTheFetch('Phoenix Suns', '583ecfa8-fb46-11e1-82cb-f4ce4684ea4c', a, team)
      break
    case 'SAS':
      doTheFetch('San Antonio Spurs', '583ecd4f-fb46-11e1-82cb-f4ce4684ea4c', a, team)
      break
    case 'DAL':
      doTheFetch('Dallas Mavericks', '583ecf50-fb46-11e1-82cb-f4ce4684ea4c', a, team)
      break
    case 'MEM':
      doTheFetch('Memphis Grizzlies', '583eca88-fb46-11e1-82cb-f4ce4684ea4c', a, team)
      break
    case 'DEN':
      doTheFetch('Denver Nuggets', '583ed102-fb46-11e1-82cb-f4ce4684ea4c', a, team)
      break
    case 'UTA':
      doTheFetch('Utah Jazz', '583ece50-fb46-11e1-82cb-f4ce4684ea4c', a, team)
      break
    case 'MIN':
      doTheFetch('Minnesota Timberwolves', '583eca2f-fb46-11e1-82cb-f4ce4684ea4c', a, team)
      break
    default:
      a.setState({ team1_name: '', team1: team, selected: true })
  }
}
