import { View, Text, StyleSheet, Image } from 'react-native';
import React, { FC } from 'react';
import { screenWidth } from '@utils/Scaling';
import Carousel from 'react-native-reanimated-carousel';
import ScalePress from '@components/ui/ScalePress';

const AdCarousel: FC<{ adData: any }> = ({ adData }) => {
  const baseOptions = {
    vertical: false,
    width: Math.round(screenWidth),
    height: Math.round(screenWidth * 0.5)
  };

  return (
    <View style={{ left: -20, marginVertical: 20 ,paddingHorizontal: 20}}>
      <Carousel
        {...baseOptions}
        loop
        pagingEnabled
        snapEnabled
        autoPlay
        autoPlayInterval={3000}  // Ensuring it's an integer
        // mode='parallax'
        
        data={adData}
        // modeConfig={{
        //   parallaxScrollingOffset: 0,  // Ensure it's an integer
        //   parallaxScrollingScale: 1  // Limit precision to 2 decimal places
        // }}
        renderItem={({ item }: any) => (
          <ScalePress style={styles.imageContainer} onPress={() => console.log('Pressed')}>
            <Image source={item} style={styles.img} />
          </ScalePress>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '90%',
    height: '100%',
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
  },
});

export default AdCarousel;