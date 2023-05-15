
import { View, Pressable, Image } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({dimension,handlePressBtn,iconUrl}) => {
  return (

     <Pressable onPress={handlePressBtn} style={styles.btnContainer}>
<Image
   source={iconUrl}
   style={styles.btnImg(dimension)}
   resizeMode='cover'
/>
     </Pressable>

  )
}

export default ScreenHeaderBtn