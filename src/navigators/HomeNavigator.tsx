import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import { Image, View } from 'react-native'

const Stack = createStackNavigator()
function HomeNavigator() {
  return (

    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: "#5c3ebc" },
          headerTitle: () => (
            <View style={{ marginHorizontal: "40%" }}>
              <Image
                source={require("../../assets/getirlogo.png")}
                style={{ width: 70, height: 30 }} />
            </View>
          )
        }}
      />
    </Stack.Navigator>
  )
}

export default HomeNavigator