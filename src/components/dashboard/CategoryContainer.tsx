import { View, Text, StyleSheet, Image } from 'react-native';
import React, { FC } from 'react';
import ScalePress from '@components/ui/ScalePress';
import { navigate } from '@utils/NavigationUtils';
import CustomText from '@components/ui/CustomText';
import { Fonts } from '@utils/Constants';

interface CategoryItem {
  image: any; // Use appropriate type for image source
  name: string;
}

interface CategoryContainerProps {
  data: CategoryItem[];
}

const CategoryContainer: FC<CategoryContainerProps> = ({ data }) => {
  const renderItems = (items: CategoryItem[]) => {
    return items.map((item, index) => (
      <ScalePress
        onPress={() => navigate('ProductCategories')}
        key={index}
        style={styles.item}
      >
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} />
        </View>
        <CustomText style={styles.text} variant="h8" fontFamily={Fonts.Medium}>
          {item.name}
        </CustomText>
      </ScalePress>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>{renderItems(data?.slice(0, 4))}</View>
      <View style={styles.row}>{renderItems(data?.slice(4))}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center', // Changed from 'baseline' to 'center' for better alignment
    marginBottom: 25,
  },
  text: {
    textAlign: 'center',
  },
  item: {
    width: '22%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 6,
    backgroundColor: '#E5F3F3',
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: '100%', // Removed extra space
    resizeMode: 'contain',
  },
});

export default CategoryContainer;