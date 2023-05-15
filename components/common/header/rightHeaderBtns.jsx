import React from 'react'
import { StyleSheet, View } from 'react-native';
import ScreenHeaderBtn from './ScreenHeaderBtn';
import { icons } from '../../../constants';

const RightHeaderBtns = () => {
  return (
   <View style={styles.rightHeaderContainer}>
   <ScreenHeaderBtn
   dimension={"50%"}
   iconUrl={icons.search}
   handlePressBtn={()=>console.log("press search icon")}
   />
    <ScreenHeaderBtn
      dimension={"50%"}
      iconUrl={icons.lock}
      handlePressBtn={()=>console.log("press lock icon")}
    />

   </View>
  )
}
const styles=StyleSheet.create({
  rightHeaderContainer:{
    flexDirection:"row",
  }
})
export default RightHeaderBtns;