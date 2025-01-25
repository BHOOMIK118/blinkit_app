import { View, Text, Animated as RNAnimated, SafeAreaView, StyleSheet } from 'react-native'
import React, { useEffect, useRef } from 'react'
import NoticeAnimation from './NoticeAnimation'
import { NoticeHeight } from '@utils/Scaling'
import Visuals from './Visuals'
// import  {CollapsibleContainer, CollapsibleHeaderContainer, withCollapsibleContext } from  '@r0b0t3d/react-native-collapsible'
import AnimatedHeader from './AnimatedHeader'


const NOTICE_HEIGHT = -(NoticeHeight + 12)


const ProductDashboard = () => {

  const noticePostion = useRef(new RNAnimated.Value(NOTICE_HEIGHT)).current

  const slideUp = () => {
    RNAnimated.timing(noticePostion, {
      toValue: NOTICE_HEIGHT,
      duration: 1200,
      useNativeDriver: false
    }).start()
  }

  const slideDown = () => {
    RNAnimated.timing(noticePostion, {
      toValue: 0,
      duration: 1200,
      useNativeDriver: false
    }).start()
  }

  useEffect(() => {
    slideDown()
    const timeoutid = setTimeout(() => {
      slideUp()
    }, 3500)
  }, [])

  return (
    <NoticeAnimation noticePostion={noticePostion}>
      <>
        <Visuals />
        <SafeAreaView/>
        {/* <CollapsibleContainer style={styles.panelContainer}>
          <CollapsibleHeaderContainer containerStyle={styles.transparent}>
            <AnimatedHeader
              showNotice={() => {
                slideDown()
                const timeoutid = setTimeout(() => { 
                  slideUp()

                }, 3500)
                return () =>  clearTimeout(timeoutid) 
              }}
            />
          </CollapsibleHeaderContainer>
        </CollapsibleContainer>  */}
        </>
    </NoticeAnimation>
  )
}

const styles = StyleSheet.create({
  panelContainer: {
    flex: 1,
  },
  transparent: {
    backgroundColor: 'transparent',
  },

})

export default ProductDashboard

/* withCollapsibleContext() */