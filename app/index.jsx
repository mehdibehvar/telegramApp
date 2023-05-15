import { Stack } from 'expo-router'

import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import { COLORS, SIZES, icons } from '../constants'
import ScreenHeaderBtn from '../components/common/header/ScreenHeaderBtn'
import RightHeaderBtns from '../components/common/header/rightHeaderBtns'
import { getLocales } from 'expo-localization';
import { i18n } from './_layout'

const Home = () => {
  return (
    <SafeAreaView style={{backgroundColor:COLORS.lightbg,flex:1}}>
        <Stack.Screen
        
        options={{
            headerStyle:{backgroundColor:COLORS.primary,border:"1px solid red"},
            headerShadowVisible:false,
            headerTitle: "Telegram",
           headerRight:()=><RightHeaderBtns
           />,
            headerLeft:()=><ScreenHeaderBtn
            dimension={"50%"}
            handlePressBtn={()=>console.log("openmenu")}
            iconUrl={icons.menu}
            />
           }}
        />
       <ScrollView>
       <View  dir={getLocales()[0].textDirection || 'ltr'} style={{ flex: 1, padding: SIZES.small}}>
        <Text >{i18n.t("welcome")} </Text>
          {/* <Welcome /> */}
          {/* <Popularjobs /> */}
          {/* <Nearbyjobs /> */}
        </View>
       </ScrollView>
    </SafeAreaView>
  )
}

export default Home