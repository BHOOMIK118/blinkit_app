import { View, Text, StyleSheet, Image } from 'react-native'
import React, { FC } from 'react'
import { screenHeight, screenWidth } from '@utils/Scaling'
import CustomText from '@components/ui/CustomText'
import { RFValue } from 'react-native-responsive-fontsize'
import { Colors, Fonts } from '@utils/Constants'

const ProductItem: FC<{ item: any, index: number }> = ({ item, index }) => {
    
    const isSecondColoumn = index % 2 != 0
    
  return (
      <View style={[styles.container, { marginRight: isSecondColoumn ? 10 : 0 }]}>
          
          <View style={styles.imageContainer}>
              
              <Image source={{ uri: item.image }} style={styles.image} />

            </View>
              
              <View style={[styles.content]}>
              
                  <View style={styles.flexRow}>
              
                      <Image source={require('@assets/icons/clock.png')} style={styles.clockIcon} />
                      <CustomText fontSize={RFValue(6)} fontFamily={Fonts.Medium}>8 MINS</CustomText>
              
                  </View>
              
                  <CustomText
                        fontFamily={Fonts.Medium}
                      variant='h8' numberOfLines={2} style={{ marginVertical: 4 }}>
                      {item.name}
                  </CustomText>
               
                  <View style={styles.priceContainer}>
               
                      <View>
               
                          <CustomText variant='h8' fontFamily={Fonts.Medium} >
                              ₹{item?.price}
                          </CustomText>
               
                          <CustomText variant='h8' style={{ opacity: 0.8, textDecorationLine: 'line-through' }} fontFamily={Fonts.Medium} >
                              ₹{item?.discountPrice}
                          </CustomText>
               
                      </View>
                      
                  </View>
             
            </View>

        </View>
   
  )
}

const styles = StyleSheet.create({
    container: {
        width: '45%',
        borderRadius: 10,
        backgroundColor: '#fff',
        marginBottom: 10,
        marginLeft: 10,
        height:200,
        overflow: 'hidden',
        // borderWidth: 1,
    // borderColor: 'red',
    },
    imageContainer: {
        height:screenHeight*0.16,
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal:5 
    },
    image: {
        width: '100%',
        height: '100%',
        aspectRatio: 1/1,
        resizeMode:'contain',
    },
    content: {
        flex: 1,
        paddingHorizontal: 10,
        // borderWidth: 1,
        // borderColor: 'blue',
    },
    flexRow: {
        flexDirection: 'row',
        padding:2,
        borderRadius: 4,
        alignItems: 'center',
        gap: 2,
        backgroundColor: Colors.backgroundSecondary,
        alignSelf: 'flex-start',
        // borderWidth: 1,
    // borderColor: 'yellow',
    },
    clockIcon: {
        height: 15,
        width:15,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        marginTop: 'auto',
        // borderWidth: 1,
        // borderColor: 'green',
    }
})


export default ProductItem