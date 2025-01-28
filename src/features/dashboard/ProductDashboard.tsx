import { View, Text, Animated as RNAnimated, SafeAreaView, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import React, { FC, useEffect, useRef } from 'react'
import NoticeAnimation from './NoticeAnimation'
import { NoticeHeight, screenHeight } from '@utils/Scaling'
import Visuals from './Visuals'
import  {CollapsibleContainer, CollapsibleHeaderContainer, CollapsibleScrollView, useCollapsibleContext, withCollapsibleContext } from  '@r0b0t3d/react-native-collapsible'
import AnimatedHeader from './AnimatedHeader'
import StickSearchBar from './StickSearchBar'
import Content from '@components/dashboard/Content'
import CustomText from '@components/ui/CustomText'
import { RFValue } from 'react-native-responsive-fontsize'
import { Fonts } from '@utils/Constants'
import { opacity } from 'react-native-reanimated/lib/typescript/Colors'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/Ionicons'

const NOTICE_HEIGHT = -(NoticeHeight + 12)


const ProductDashboard: FC = () => {
  
  const { scrollY, expand } = useCollapsibleContext();
  const previousScroll = useRef<number>(0);

  const backToTopStyle = useAnimatedStyle(() => {
    const isScrollingUp = scrollY.value < previousScroll.current && scrollY.value > 180;
    const opacity = withTiming(isScrollingUp ? 1 : 0, { duration: 300 });
    const translateY = withTiming(isScrollingUp ? 0 : 10, { duration: 300 });

    previousScroll.current = scrollY.value;
    return {
    opacity,
      transform: [{ translateY }],
  }
  })

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
    return () => clearTimeout(timeoutid)  
  }, [])

  return (
    <NoticeAnimation noticePostion={noticePostion}>
      <>
        <Visuals />

        <SafeAreaView />
        
        <Animated.View style={[styles.backToTopButton, backToTopStyle]}>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}
            onPress={() => { 
              scrollY.value = 0
              expand()
            }}>
            <Icon name="arrow-up-circle-outline" size={RFValue(12)} color="white" />
            <CustomText variant='h9' style={{color: 'white'}} fontFamily={Fonts.SemiBold}>
              Back to top
            </CustomText>
          </TouchableOpacity>
        </Animated.View>
        
        <CollapsibleContainer style={styles.panelContainer}>
        
          <CollapsibleHeaderContainer containerStyle={styles.transparent}>
        
            <AnimatedHeader
              showNotice  ={() => {
                slideDown()
                const timeoutid = setTimeout(() => { 
                  slideUp()

                }, 3500)
                return () =>  clearTimeout(timeoutid) 
              }}
            />
        
            <StickSearchBar />
        
           </CollapsibleHeaderContainer>
        
          <CollapsibleScrollView
            nestedScrollEnabled
            style={styles.panelContainer} 
            showsVerticalScrollIndicator={false}>
        
            <Content />


          
            <View style={{ backgroundColor: '#F8F8F8', padding: 20 }}>
              <CustomText
                fontSize={RFValue(32)}
                fontFamily={Fonts.Bold}
                style={{ opacity: 0.2 }}>
                India's last minute app 🥭
              </CustomText>
              <CustomText
                fontFamily={Fonts.Bold}
                style={{marginTop:10,paddingBottom:100, opacity: 0.2 }}>
                Developed By ❤️ Bhoomik Arya
              </CustomText>
            </View>


            
            </CollapsibleScrollView>
        
         </CollapsibleContainer> 
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
  backToTopButton: {
    position: 'absolute',
    alignSelf: 'center',
    top: Platform.OS === 'ios' ? screenHeight * 0.18 : 100,
    flexDirection: 'row',
    alignItems: 'center',
    gap:4,
    backgroundColor: 'black',
    paddingHorizontal: 10,
    paddingVertical: 10,
    zIndex:999,
    borderRadius: 20,
  },
  
})

export default withCollapsibleContext(ProductDashboard)
