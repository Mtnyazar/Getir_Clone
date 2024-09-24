import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'
import { Entypo } from "@expo/vector-icons"

function index() {
  return (

    <View style={styles.headerMain}>
      <View style={styles.headerOne}>
        <Image style={styles.image} source={{ uri: "https://cdn.getir.com/misc/emoji/house.png" }} />
        <View style={styles.headerOneView}>
          <Text style={{ fontWeight: "600",fontSize:16 }}>Ev</Text>
          <Text style={{fontSize:12,fontWeight:"500",color:"#6e7480", marginLeft:12, marginRight:10}}>Akçağlayan Mah. Zarf Sk.</Text>
          <Entypo name='chevron-right' size={24} color={"#5d3ebd"} style={{marginLeft:65}} />
        </View>
        <View style={styles.headerTwo}>
          <Text style={{fontSize:12,fontWeight:"bold",color:"#5d3ebd"}}>TVS</Text>
          <Text style={{fontSize:20,fontWeight:"bold", color:"#5d3ebd"}}>13dk</Text>
        </View>
      </View>

      <View>

      </View>
    </View>
  )
}

export default index