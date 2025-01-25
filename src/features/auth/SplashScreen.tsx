import { View, Text, StyleSheet, Image, Alert } from 'react-native'
import React, { FC, useEffect } from 'react'
import { Colors } from '@utils/Constants.tsx'
import { screenHeight, screenWidth } from '@utils/Scaling'
import logo from "@assets/images/splash_logo.jpeg"
import GeoLocation from "@react-native-community/geolocation"
import { useAuthStore } from '@state/authStore'
import { tokenStorage } from '@state/storage'
import { resetAndNavigate } from '@utils/NavigationUtils'
import { jwtDecode } from 'jwt-decode'
import { refetchuser, refresh_tokens } from '@service/authService'


GeoLocation.setRNConfiguration({
    skipPermissionRequests: false,
    authorizationLevel: "always",
    enableBackgroundLocationUpdates: true,
    locationProvider: "auto",
});

interface DeocodedToken {
    exp: number;
}

const SplashScreen: FC = () => {

    const { user, setUser } = useAuthStore();

    const tokenCheck = async () => {
        const accessToken = tokenStorage.getString('accessToken') as string;
        const refreshToken = tokenStorage.getString('refreshToken') as string;

        // console.log("AT:",accessToken);
        // console.log("RT:",refreshToken);


        if (accessToken) {
            const decodedAccessToken = jwtDecode<DeocodedToken>(accessToken)
            const decodedRefreshToken = jwtDecode<DeocodedToken>(refreshToken)

            const currentTime = Date.now() / 1000

            if (decodedRefreshToken?.exp < currentTime) {
                resetAndNavigate("CustomerLogin")
                Alert.alert("Session Expired", "Please Login Again")
                return false;
            }

            if (decodedAccessToken?.exp < currentTime) {
                try {
                    refresh_tokens()
                    await refetchuser(setUser)
                } catch (error) {
                    console.log(error);
                    Alert.alert('There was an error refreshing token!')
                    return false
                }
            }

            if (user?.role === "Customer") {
                resetAndNavigate('ProductDashboard')
            }
            else {
                resetAndNavigate('DeliveryDashboard')
            }
            return true;
        }
        resetAndNavigate('CustomerLogin')
        return false
    }

    useEffect(() => {

        const fetchUserLocation = async () => {

            try {
                GeoLocation.requestAuthorization();
                tokenCheck();
            } catch (error) {
                Alert.alert("Sorry we need Location service for better shopping experience ")
            }
        }
        const timeOutId = setInterval(fetchUserLocation, 1000);
        return () => clearTimeout(timeOutId)
    }, []);

    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logoImage} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    logoImage: {
        height: screenHeight * 0.7,
        width: screenWidth * 0.7,
        resizeMode: 'contain'
    }

})

export default SplashScreen
