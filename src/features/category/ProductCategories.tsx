import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import CustomHeader from '@components/ui/CustomHeader'
import { Colors } from '@utils/Constants' 
import SideBar from './SideBar'
import { getAllCategories, getProductsByCategoryId } from '@service/productService'
import ProductList from './ProductList'


const ProductCategories: FC = () => {


    const [categories, setCategories] = useState<any[]>([])
    const [selectedCategory, setSelecteCategory] = useState<any>(null)
    const [products, setProducts] = useState<any[]>([])
    const [categoriesLoading, setCategoriesLoading] = useState<boolean>(true)
    const [productsLoading, setProductsLoading] = useState<boolean>(false)

    const fetchCategories = async () => {
        try {
            setCategoriesLoading(true)
            const data = await getAllCategories();
            setCategories(data)
            if (data && data.length > 0) {
                setSelecteCategory(data[0])
            }
        } catch (error) {
            console.log('Error fetching Categories',error);
        }
        finally {
            setCategoriesLoading(false)
        }
    }
    useEffect(() => {
        fetchCategories()
    }, [])
    
    const fetchProducts = async (categoryId:string) => {
        try {
            setProductsLoading(true)
            const data = await getProductsByCategoryId(categoryId);
          
            setProducts(data)
            
        } catch (error) {
            console.log("Error fetching Products",error);
        }
        finally {
            setProductsLoading(false)
        }
    }
    useEffect(() => {

        if (selectedCategory?._id) {
            fetchProducts(selectedCategory?._id)
        }
        console.log(fetchProducts(selectedCategory?._id));
        
    },[selectedCategory])

    return (
        <View style={styles.mainContainer}>
            <CustomHeader title={selectedCategory?.name || 'Categories'} search />
            <View style={styles.subContainer}>
                {categoriesLoading ? (<ActivityIndicator size='small' color='#d0d4dc' />) :
                
                    (  <SideBar
                            categories={categories}
                            selectedCategory={selectedCategory}
                            OnCategoryPress={(category:any)=>setSelecteCategory(category)}
                        />
                     )
                }
                {productsLoading ? (<ActivityIndicator size='large' color={Colors.border} style={styles.center} />) :
                    (<ProductList data ={products || []}/>) 
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    subContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

})

export default ProductCategories