export default function getStatsDetails(team, a) {
    switch (team.name) {
      case 'WAS':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ec8d4-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({
              team1_name: 'Washington Wizards',
              teamPlayers: data,
              team1: team,
              selected: true
            })
            fetch('https://buzzer-beater.live/api/nba/team_stats', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ teamId: '583ec8d4-fb46-11e1-82cb-f4ce4684ea4c' })
            })
              .then(response => response.json())
              .then(data => {
                a.setState({ team_stats: data, isLoading: false })
              })
          })
          .catch(() => {
            a.setState({
              team1_name: 'Washington Wizards',
              teamPlayers: null,
              team1: team,
              selected: true,
              isLoading: false
            })
          })
        break
      case 'HOU':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ec825-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({
              team1_name: 'Houston Rockets',
              teamPlayers: data,
              team1: team,
              selected: true
            })
          })
          .catch(() => {
            a.setState({
              team1_name: 'Houston Rockets',
              teamPlayers: null,
              team1: team,
              selected: true
            })
          })
        fetch('https://buzzer-beater.live/api/nba/team_stats', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ec825-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({ team_stats: data, isLoading: false })
          })
          .catch(() => {
            a.setState({ isLoading: false })
          })
        break
      case 'CHA':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ec97e-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({
              team1_name: 'Charlotte Hornets',
              teamPlayers: data,
              team1: team,
              selected: true
            })
          })
          .catch(() => {
            a.setState({
              team1_name: 'Charlotte Hornets',
              teamPlayers: null,
              team1: team,
              selected: true
            })
          })
        fetch('https://buzzer-beater.live/api/nba/team_stats', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ec97e-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({ team_stats: data, isLoading: false })
          })
          .catch(() => {
            a.setState({ isLoading: false })
          })
        break
      case 'PHI':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ec87d-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({
              team1_name: 'Philadelphia 76ers',
              teamPlayers: data,
              team1: team,
              selected: true
            })
          })
          .catch(() => {
            a.setState({
              team1_name: 'Philadelphia 76ers',
              teamPlayers: null,
              team1: team,
              selected: true
            })
          })
        fetch('https://buzzer-beater.live/api/nba/team_stats', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ec87d-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({ team_stats: data, isLoading: false })
          })
          .catch(() => {
            a.setState({ isLoading: false })
          })
        break
      case 'OKC':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ecfff-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({
              team1_name: 'Oklahoma City Thunder',
              teamPlayers: data,
              team1: team,
              selected: true
            })
          })
          .catch(() => {
            a.setState({
              team1_name: 'Oklahoma City Thunder',
              teamPlayers: null,
              team1: team,
              selected: true
            })
          })
        fetch('https://buzzer-beater.live/api/nba/team_stats', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ecfff-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({ team_stats: data, isLoading: false })
          })
          .catch(() => {
            a.setState({ isLoading: false })
          })
        break
      case 'POR':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ed056-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({
              team1_name: 'Portland Trail Blazers',
              teamPlayers: data,
              team1: team,
              selected: true
            })
          })
          .catch(() => {
            a.setState({
              team1_name: 'Portland Trail Blazers',
              teamPlayers: null,
              team1: team,
              selected: true
            })
          })
        fetch('https://buzzer-beater.live/api/nba/team_stats', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ed056-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({ team_stats: data, isLoading: false })
          })
          .catch(() => {
            a.setState({ isLoading: false })
          })
        break
      case 'NOP':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ecc9a-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({
              team1_name: 'New Orleans Pelicans',
              teamPlayers: data,
              team1: team,
              selected: true
            })
          })
          .catch(() => {
            a.setState({
              team1_name: 'New Orleans Pelicans',
              teamPlayers: null,
              team1: team,
              selected: true
            })
          })
        fetch('https://buzzer-beater.live/api/nba/team_stats', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ecc9a-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({ team_stats: data, isLoading: false })
          })
          .catch(() => {
            a.setState({ isLoading: false })
          })
        break
      case 'GSW':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ec825-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({
              team1_name: 'Golden State Warriors',
              teamPlayers: data,
              team1: team,
              selected: true
            })
          })
          .catch(() => {
            a.setState({
              team1_name: 'Golden State Warriors',
              teamPlayers: null,
              team1: team,
              selected: true
            })
          })

        fetch('https://buzzer-beater.live/api/nba/team_stats', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ec825-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({ team_stats: data, isLoading: false })
          })
          .catch(() => {
            a.setState({ isLoading: false })
          })
        break
      case 'MIL':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ecefd-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({
              team1_name: 'Milwaukee Bucks',
              teamPlayers: data,
              team1: team,
              selected: true
            })
          })
          .catch(() => {
            a.setState({
              team1_name: 'Milwaukee Bucks',
              teamPlayers: null,
              team1: team,
              selected: true
            })
          })
        fetch('https://buzzer-beater.live/api/nba/team_stats', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ecefd-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({ team_stats: data, isLoading: false })
          })
          .catch(() => {
            a.setState({ isLoading: false })
          })
        break
      case 'ORL':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ed157-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({
              team1_name: 'Orlando Magic',
              teamPlayers: data,
              team1: team,
              selected: true
            })
          })
          .catch(() => {
            a.setState({
              team1_name: 'Orlando Magic',
              teamPlayers: null,
              team1: team,
              selected: true
            })
          })
        fetch('https://buzzer-beater.live/api/nba/team_stats', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ed157-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({ team_stats: data, isLoading: false })
          })
          .catch(() => {
            a.setState({ isLoading: false })
          })
        break
      case 'MIA':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ecea6-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({
              team1_name: 'Miami Heat',
              teamPlayers: data,
              team1: team,
              selected: true
            })
          })
          .catch(() => {
            a.setState({
              team1_name: 'Miami Heat',
              teamPlayers: null,
              team1: team,
              selected: true
            })
          })
        fetch('https://buzzer-beater.live/api/nba/team_stats', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ecea6-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({ team_stats: data, isLoading: false })
          })
          .catch(() => {
            a.setState({ isLoading: false })
          })
        break
      case 'ATL':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ecb8f-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({
              team1_name: 'Atlanta Hawks',
              teamPlayers: data,
              team1: team,
              selected: true
            })
          })
          .catch(() => {
            a.setState({
              team1_name: 'Atlanta Hawks',
              teamPlayers: null,
              team1: team,
              selected: true
            })
          })
        fetch('https://buzzer-beater.live/api/nba/team_stats', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ecb8f-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({ team_stats: data, isLoading: false })
          })
          .catch(() => {
            a.setState({ isLoading: false })
          })
        break
      case 'IND':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ec7cd-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({
              team1_name: 'Indiana Pacers',
              teamPlayers: data,
              team1: team,
              selected: true
            })
          })
          .catch(() => {
            a.setState({
              team1_name: 'Indiana Pacers',
              teamPlayers: null,
              team1: team,
              selected: true
            })
          })
        fetch('https://buzzer-beater.live/api/nba/team_stats', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ec7cd-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({ team_stats: data, isLoading: false })
          })
          .catch(() => {
            a.setState({ isLoading: false })
          })
        break
      case 'DET':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ec928-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({
              team1_name: 'Detroit Pistons',
              teamPlayers: data,
              team1: team,
              selected: true
            })
          })
          .catch(() => {
            a.setState({
              team1_name: 'Detroit Pistons',
              teamPlayers: null,
              team1: team,
              selected: true
            })
          })
        fetch('https://buzzer-beater.live/api/nba/team_stats', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ec928-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({ team_stats: data, isLoading: false })
          })
          .catch(() => {
            a.setState({ isLoading: false })
          })
        break
      case 'CHI':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ec5fd-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({
              team1_name: 'Chicago Bulls',
              teamPlayers: data,
              team1: team,
              selected: true
            })
          })
          .catch(() => {
            a.setState({
              team1_name: 'Chicago Bulls',
              teamPlayers: null,
              team1: team,
              selected: true
            })
          })
        fetch('https://buzzer-beater.live/api/nba/team_stats', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ec5fd-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({ team_stats: data, isLoading: false })
          })
          .catch(() => {
            a.setState({ isLoading: false })
          })
        break
      case 'CLE':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ec773-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({
              team1_name: 'Cleveland Cavaliers',
              teamPlayers: data,
              team1: team,
              selected: true
            })
          })
          .catch(() => {
            a.setState({
              team1_name: 'Cleveland Cavaliers',
              teamPlayers: null,
              team1: team,
              selected: true
            })
          })
        fetch('https://buzzer-beater.live/api/nba/team_stats', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ec773-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({ team_stats: data, isLoading: false })
          })
          .catch(() => {
            a.setState({ isLoading: false })
          })
        break
      case 'TOR':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ecda6-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({
              team1_name: 'Toronto Raptors',
              teamPlayers: data,
              team1: team,
              selected: true
            })
          })
          .catch(() => {
            a.setState({
              team1_name: 'Toronto Raptors',
              teamPlayers: null,
              team1: team,
              selected: true
            })
          })
        fetch('https://buzzer-beater.live/api/nba/team_stats', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ecda6-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({ team_stats: data, isLoading: false })
          })
          .catch(() => {
            a.setState({ isLoading: false })
          })
        break
      case 'BOS':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583eccfa-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({
              team1_name: 'Boston Celtics',
              teamPlayers: data,
              team1: team,
              selected: true
            })
          })
          .catch(() => {
            a.setState({
              team1_name: 'Boston Celtics',
              teamPlayers: null,
              team1: team,
              selected: true
            })
          })
        fetch('https://buzzer-beater.live/api/nba/team_stats', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583eccfa-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({ team_stats: data, isLoading: false })
          })
          .catch(() => {
            a.setState({ isLoading: false })
          })
        break
      case 'BRK':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ec9d6-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({
              team1_name: 'Brooklyn Nets',
              teamPlayers: data,
              team1: team,
              selected: true
            })
          })
          .catch(() => {
            a.setState({
              team1_name: 'Brooklyn Nets',
              teamPlayers: null,
              team1: team,
              selected: true
            })
          })
        fetch('https://buzzer-beater.live/api/nba/team_stats', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ec9d6-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({ team_stats: data, isLoading: false })
          })
          .catch(() => {
            a.setState({ isLoading: false })
          })
        break
      case 'NYK':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ec70e-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({
              team1_name: 'New York Knicks',
              teamPlayers: data,
              team1: team,
              selected: true
            })
          })
          .catch(() => {
            a.setState({
              team1_name: 'New York Knicks',
              teamPlayers: null,
              team1: team,
              selected: true
            })
          })
        fetch('https://buzzer-beater.live/api/nba/team_stats', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ec70e-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({ team_stats: data, isLoading: false })
          })
          .catch(() => {
            a.setState({ isLoading: false })
          })
        break
      case 'LAC':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ecdfb-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({
              team1_name: 'Los Angeles Clippers',
              teamPlayers: data,
              team1: team,
              selected: true
            })
          })
          .catch(() => {
            a.setState({
              team1_name: 'Los Angeles Clippers',
              teamPlayers: null,
              team1: team,
              selected: true
            })
          })
        fetch('https://buzzer-beater.live/api/nba/team_stats', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ecdfb-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({ team_stats: data, isLoading: false })
          })
          .catch(() => {
            a.setState({ isLoading: false })
          })
        break
      case 'SAC':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ed0ac-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({
              team1_name: 'Sacramento Kings',
              teamPlayers: data,
              team1: team,
              selected: true
            })
          })
          .catch(() => {
            a.setState({
              team1_name: 'Sacramento Kings',
              teamPlayers: null,
              team1: team,
              selected: true
            })
          })
        fetch('https://buzzer-beater.live/api/nba/team_stats', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ed0ac-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({ team_stats: data, isLoading: false })
          })
          .catch(() => {
            a.setState({ isLoading: false })
          })
        break
      case 'LAL':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ecae2-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({
              team1_name: 'Los Angeles Lakers',
              teamPlayers: data,
              team1: team,
              selected: true
            })
          })
          .catch(() => {
            a.setState({
              team1_name: 'Los Angeles Lakers',
              teamPlayers: null,
              team1: team,
              selected: true
            })
          })
        fetch('https://buzzer-beater.live/api/nba/team_stats', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ecae2-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({ team_stats: data, isLoading: false })
          })
          .catch(() => {
            a.setState({ isLoading: false })
          })
        break
      case 'PHX':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ecfa8-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({
              team1_name: 'Phoenix Suns',
              teamPlayers: data,
              team1: team,
              selected: true
            })
          })
          .catch(() => {
            a.setState({
              team1_name: 'Phoenix Suns',
              teamPlayers: null,
              team1: team,
              selected: true
            })
          })
        fetch('https://buzzer-beater.live/api/nba/team_stats', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ecfa8-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({ team_stats: data, isLoading: false })
          })
          .catch(() => {
            a.setState({ isLoading: false })
          })
        break
      case 'SAS':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ecd4f-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({
              team1_name: 'San Antonio Spurs',
              teamPlayers: data,
              team1: team,
              selected: true
            })
          })
          .catch(() => {
            a.setState({
              team1_name: 'San Antonio Spurs',
              teamPlayers: null,
              team1: team,
              selected: true
            })
          })
        fetch('https://buzzer-beater.live/api/nba/team_stats', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ecd4f-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({ team_stats: data, isLoading: false })
          })
          .catch(() => {
            a.setState({ isLoading: false })
          })
        break
      case 'DAL':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ecf50-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({
              team1_name: 'Dallas Mavericks',
              teamPlayers: data,
              team1: team,
              selected: true
            })
          })
          .catch(() => {
            a.setState({
              team1_name: 'Dallas Mavericks',
              teamPlayers: null,
              team1: team,
              selected: true
            })
          })
        fetch('https://buzzer-beater.live/api/nba/team_stats', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ecf50-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({ team_stats: data, isLoading: false })
          })
          .catch(() => {
            a.setState({ isLoading: false })
          })
        break
      case 'MEM':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583eca88-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({
              team1_name: 'Memphis Grizzlies',
              teamPlayers: data,
              team1: team,
              selected: true
            })
          })
          .catch(() => {
            a.setState({
              team1_name: 'Memphis Grizzlies',
              teamPlayers: null,
              team1: team,
              selected: true
            })
          })

        fetch('https://buzzer-beater.live/api/nba/team_stats', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583eca88-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({ team_stats: data, isLoading: false })
          })
          .catch(() => {
            a.setState({ isLoading: false })
          })
        break
      case 'DEN':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ed102-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({
              team1_name: 'Denver Nuggets',
              teamPlayers: data,
              team1: team,
              selected: true
            })
          })
          .catch(() => {
            a.setState({
              team1_name: 'Denver Nuggets',
              teamPlayers: null,
              team1: team,
              selected: true
            })
          })
        fetch('https://buzzer-beater.live/api/nba/team_stats', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ed102-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({ team_stats: data, isLoading: false })
          })
          .catch(() => {
            a.setState({ isLoading: false })
          })
        break
      case 'UTA':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ece50-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({
              team1_name: 'Utah Jazz',
              teamPlayers: data,
              team1: team,
              selected: true
            })
          })
          .catch(() => {
            a.setState({
              team1_name: 'Utah Jazz',
              teamPlayers: null,
              team1: team,
              selected: true
            })
          })
        fetch('https://buzzer-beater.live/api/nba/team_stats', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583ece50-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({ team_stats: data, isLoading: false })
          })
          .catch(() => {
            a.setState({ isLoading: false })
          })
        break
      case 'MIN':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583eca2f-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({
              team1_name: 'Minnesota Timberwolves',
              teamPlayers: data,
              team1: team,
              selected: true
            })
          })
          .catch(() => {
            a.setState({
              team1_name: 'Minnesota Timberwolves',
              teamPlayers: null,
              team1: team,
              selected: true
            })
          })
        fetch('https://buzzer-beater.live/api/nba/team_stats', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ teamId: '583eca2f-fb46-11e1-82cb-f4ce4684ea4c' })
        })
          .then(response => response.json())
          .then(data => {
            a.setState({ team_stats: data, isLoading: false })
          })
          .catch(() => {
            a.setState({ isLoading: false })
          })
        break
      default:
        a.setState({ team1_name: '', team1: team, selected: true })
    }
  }