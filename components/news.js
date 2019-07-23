import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import styles from '../styles/styles_screen1'

export default class News extends Component {
  constructor(props) {
    super(props)
    this.state = { news: [] }
  }
  componentDidMount() {
    this.setState({ news: this.props.data })
  }
  render() {
    return (
      <View style={styles.newsView}>
        <Text style={styles.home}>NEWS</Text>
        <View style={styles.table}>
          {this.state.news.map((item, i) => {
            return (
              <View key={i}>
                <View style={styles.headerRow}>
                  <Text style={styles.newsTitle}>
                    {this.state.news[i].title.substring(0, 46) + '...'}
                  </Text>
                </View>
                <View style={styles.bodyRow}>
                  <View style={styles.imageView}>
                    <Image style={styles.imageStyle} source={{ uri: this.state.news[i].image }} />
                    <Text style={styles.imageText}>
                      {' '}
                      {this.state.news[i].body.substring(0, 150) + '...'}
                    </Text>
                  </View>
                </View>
              </View>
            )
          })}
        </View>
      </View>
    )
  }
}
