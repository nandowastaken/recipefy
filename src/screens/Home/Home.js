import React from 'react';
import {View, Image, Text, StyleSheet } from 'react-native';
import hamburgerMenu from '../../../assets/hamburger.svg';
import person from '../../../assets/person.jpg';

import { 
    useFonts, 
    Inter_800ExtraBold, 
    Inter_600SemiBold, 
    Inter_400Regular 
} from '@expo-google-fonts/inter';

export default function Home() {
    const [loadedFonts] = useFonts({
        "InterExtraBold": Inter_800ExtraBold,
        "InterSemiBold": Inter_600SemiBold,
        "InterRegular": Inter_400Regular,
      });

    return <>
        <View style={styles.main}>
            <Image source={hamburgerMenu} style={styles.hamburger}/>
            <Text>Recipefy</Text>
            <Image source={person} style={styles.icon}/>
        </View>
    </>
}

const styles = StyleSheet.create({
    main: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "15px",
    },  
    titulo: {
      fontSize: 20,
      fontFamily: 'Inter',
    },

    hamburger: {
        width: "22px",
        height: "18px",
    },

    icon: {
        width: "34px",
        height: "34px",
        borderRadius: "20px",
    }
});