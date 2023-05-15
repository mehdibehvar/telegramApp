import { useFonts } from "expo-font";
import { Stack } from "expo-router"
import { useCallback } from "react";
import * as SplashScreen from 'expo-splash-screen';
import { getLocales } from 'expo-localization';
const deviceLanguage = getLocales()[0].languageCode;
import { I18n } from 'i18n-js';
export const i18n = new I18n({
  en: { welcome: 'Hello' },
  fa: { welcome: 'خوش امدید'},
});
// Set the locale once at the beginning of your app.
i18n.locale =deviceLanguage;
SplashScreen.preventAutoHideAsync();
 const Layout = () => {
const [fontsLoaded]=useFonts({
    DMBold:require("../assets/fonts/DMSans-Bold.ttf"),
    DMRegular:require("../assets/fonts/DMSans-Regular.ttf"),
    DMMedium:require("../assets/fonts/DMSans-Medium.ttf"),
})
const onLayoutRootView=useCallback(async ()=>{
    if (fontsLoaded) {
    await SplashScreen.hideAsync();
    }
},[fontsLoaded]);
if(!fontsLoaded) return null;
  return <Stack onLayout={onLayoutRootView}/>
  
}
export default Layout;