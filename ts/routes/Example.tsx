import * as React from 'react'
import { StyleSheet, View, Image, Button, Text } from 'react-native'
import { connect } from 'react-redux'
import { actions } from 'rua'
// import { default as R } from '../../rua'

class Example extends React.Component<any, any>
{
  static navigationOptions = {
    // ...R.style.header,
    headerTitle: '',
  }

  render()
  {
    return (
      <View>
        <Text>Example</Text>
      </View>
    )
  }
}

export default Example
