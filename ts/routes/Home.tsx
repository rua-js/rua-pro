import * as React from 'react'
import { StyleSheet, View, Image, Button, Text } from 'react-native'
import { connect } from 'react-redux'
import { actions } from 'rua'
// import { default as R } from '../../rua'
import { Example1, Example2 } from '../components/Example'

class Home extends React.Component<any, any>
{
  static navigationOptions = {
    // ...R.style.header,
    headerTitle: 'Home',
    tabBarLabel: 'Home',
  }

  render()
  {
    return (
      <View style={styles.container}>
        <Text>Here is home,</Text>
        <Example1/>
        <Example2/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
})

export default Home
