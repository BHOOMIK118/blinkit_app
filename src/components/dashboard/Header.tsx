import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import CustomText from '@components/ui/CustomText'
import { Fonts } from '@utils/Constants'
import { RFValue } from 'react-native-responsive-fontsize'
import { useAuthStore } from '@state/authStore'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'



const Header: FC<{ showNotice: () => void }> = ({ showNotice }) => {

    const { setUser, user } = useAuthStore();

    return (
        <View style={styles.subConatiner}>
            <TouchableOpacity activeOpacity={0.8} >
                <CustomText fontFamily={Fonts.Bold} variant='h8' style={styles.text}>
                    Delivery in
                </CustomText>
                <View style={styles.flexRowGap}>
                    <CustomText variant='h2' fontFamily={Fonts.SemiBold} style={styles.text}>
                        10 minutes
                    </CustomText>
                    <TouchableOpacity onPress={showNotice} style={styles.noticeBtn}>
                        <CustomText fontFamily={Fonts.SemiBold} fontSize={RFValue(5)}
                            style={{ color: '#3B4886' }}>
                            ⛈️ Rain
                        </CustomText>
                    </TouchableOpacity>
                </View>
                <View style={styles.flexRow}>
                    <CustomText fontFamily={Fonts.Medium} variant='h8' numberOfLines={1} style={styles.text2}>
                        {user?.address || 'knowwhere,Somewhere 😅'}
                    </CustomText>
                    <Icon name='menu-down' size={RFValue(20)} color='#fff' style={{ bottom: -1 }} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name='account-circle-outline' size={RFValue(36)} color='#fff' />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        width: '70%',
    },
    text2: {
        color: '#fff',
        width: '90%',
        textAlign: 'center',
    },
    text: {
        color: "#fff",

    },
    subConatiner: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingTop: Platform.OS === 'android' ? 10 : 5,
        justifyContent: 'space-between'
    },
    flexRowGap: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    noticeBtn: {
        backgroundColor: '#E8EAF5',
        borderRadius: 100,
        paddingHorizontal: 8,
        paddingVertical: 2,
        bottom: -2,

    }
})

export default Header