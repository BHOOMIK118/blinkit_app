import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import AdCarousel from './AdCarousel'
import { adData, categories } from '@utils/dummyData'
import CustomText from '@components/ui/CustomText'
import { Fonts } from '@utils/Constants'
import CategoryContainer from './CategoryContainer'


const Content = () => {
  return (
      <View style={styles.container}>
          
              <AdCarousel adData={adData} />
              
          <CustomText variant='h5' fontFamily={Fonts.SemiBold}>Grocery & Kitchen</CustomText>
      <CategoryContainer data={categories} />
      <CustomText variant='h5' fontFamily={Fonts.SemiBold}> Snacks & Drinks</CustomText>
      <CategoryContainer data={categories} />
      <CustomText variant='h5' fontFamily={Fonts.SemiBold}>Beauty & Personal Care</CustomText>
      <CategoryContainer data={categories} />
      <CustomText variant='h5' fontFamily={Fonts.SemiBold}>Household Essentials</CustomText>
      <CategoryContainer data={categories} />
      <CustomText variant='h5' fontFamily={Fonts.SemiBold}>Grocery & Kitchen</CustomText>
          <CategoryContainer data={categories} />

      </View>
  )
}




const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    }
})

export default Content