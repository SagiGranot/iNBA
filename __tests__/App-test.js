import 'react-native'
import React from 'react'
import App from '../App'
import renderer from 'react-test-renderer'
import Leaders from '../components/leaders'
import News from '../components/news'
import Standings from '../components/standings'

describe('App snapshot', () => {
  it('renders the loading screen', async () => {
    const tree = renderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders the root without loading screen', async () => {
    const tree = renderer.create(<App skipLoadingScreen />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('<App />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<App />).toJSON()
    expect(tree.children.length).toBe(1)
  })
})

describe('Leaders table tests', function() {
  test('renders correctly', async () => {
    const data = [
      {
        average: {
          minutes: 36.9,
          points: 25.6,
          off_rebounds: 1.09,
          def_rebounds: 3.93,
          rebounds: 5.01
        },
        player: {
          id: 'ff461754-ad20-4eeb-af02-2b46cc980b24',
          full_name: 'Bradley Beal',
          first_name: 'Bradley',
          last_name: 'Beal',
          position: 'G'
        },
        rank: 1,
        score: 3028,
        teams: [
          {
            id: '583ec8d4-fb46-11e1-82cb-f4ce4684ea4c',
            market: 'Washington',
            name: 'Wizards',
            reference: '1610612764'
          }
        ],
        total: {
          games_played: 82,
          games_started: 82,
          minutes: 3028,
          field_goals_made: 764,
          field_goals_att: 1609
        }
      }
    ]

    const testRenderer = renderer.create(<Leaders data={data} tableName="Test" />)
    expect(testRenderer.root.props).toHaveProperty('data')
    expect(testRenderer.root.props.data).toHaveLength(1)
  })
})

describe('News table tests', function() {
  test('renders correctly', async () => {
    const data = [
      {
        authors: [],
        body:
          'OAKLAND, Calif. -- Houston Rockets general manager Daryl Morey popularized the 5% theory',
        dataType: 'news',
        date: '2019-06-07',
        dateTime: '2019-06-07T12:26:00Z',
        title: "Five moments that helped pave Toronto's road to the NBA Finals"
      }
    ]

    const testRenderer = renderer.create(<News data={data} tableName="Test" />)
    expect(testRenderer.root.props).toHaveProperty('data')
    expect(testRenderer.root.props.data).toHaveLength(1)
  })
})

describe('Standings table tests', function() {
  test('renders correctly', async () => {
    const data = {
      id: '3960cfac-7361-4b30-bc25-8d393de6f62f',
      name: 'EASTERN CONFERENCE',
      alias: 'EASTERN',
      divisions: [
        {
          alias: 'SOUTHEAST',
          teams: [
            {
              id: '583ed157-fb46-11e1-82cb-f4ce4684ea4c',
              name: 'Magic',
              market: 'Orlando',
              wins: 42,
              losses: 40,
              games_behind: { league: 18, conference: 18, division: 0 }
            }
          ]
        }
      ]
    }

    const testRenderer = renderer.create(<Standings data={data} tableName="Test" />)
    expect(testRenderer.root.props).toHaveProperty('data')
    expect(testRenderer.root.props.data.divisions).toHaveLength(1)
  })
})
