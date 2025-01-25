
// import React, { FC } from 'react'
// // import { useCollapsibleContext } from '@r0b0t3d/react-native-collapsible'
// import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated'
// import Header from '@components/dashboard/Header'

// const AnimatedHeader: FC<{ showNotice: () => void }> = ({showNotice}) => {

//     const { scrollY } = useCollapsibleContext()
    
//     const headerAnimatedStyle = useAnimatedStyle(() => {
//         const opacity = interpolate(scrollY.value, [0, 120], [1, 0])
//         return {opacity}
//     })

//   return (
//     <Animated.View style={headerAnimatedStyle}>
//       <Header showNotice={showNotice} />
//     </Animated.View>
//   )
// }

// export default AnimatedHeader
import { View, Text } from 'react-native'
import React from 'react'

const AnimatedHeader = () => {
  return (
    <View>
      <Text>AnimatedHeader</Text>
    </View>
  )
}

export default AnimatedHeader