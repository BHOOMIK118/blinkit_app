import { View, Text, StyleSheet, Animated as RNAnimated } from 'react-native'
import React, { FC } from 'react'
import { NoticeHeight } from '@utils/Scaling'
import Notice from '@components/dashboard/Notice'

const NOTICE_HEIGHT = -(NoticeHeight + 12)


const NoticeAnimation: FC<{ noticePostion: any, children: React.ReactElement }>
    = ({ noticePostion, children }) => {
        return (
            <View style={styles.container}>
                <RNAnimated.View style={[styles.noticeConatiner, { transform: [{ translateY: noticePostion }] }]}>        
                <Notice/>
                </RNAnimated.View>
                <RNAnimated.View style={[styles.contentContainer, {
                    paddingTop: noticePostion.interpolate({
                        inputRange: [NOTICE_HEIGHT, 0],
                        outputRange:[0,NoticeHeight+20]
                    })
                }]}    >
                    {children}
                </RNAnimated.View>
            </View>
        )
    }

const styles = StyleSheet.create({

    noticeConatiner: {
        width: '100%',
        zIndex: 999,
        position: 'absolute'
    },
    contentContainer: {
        flex: 1,
        width: '100%'
    },
    container: {
        flex: 1,
        color: '#fff',
    }




})

export default NoticeAnimation