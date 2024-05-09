import { View, TextInput, TouchableOpacity, Text, Image } from "react-native";
import { styles } from "./style";

import  { useState } from 'react';
import * as Font from 'expo-font';
import { useEffect } from 'react';
import KollektifBold from '../../assets/fonts/Kollektif-Bold.ttf';
import Kollektif from '../../assets/fonts/Kollektif.ttf';



export default function Login() {

  
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        KollektifBold: KollektifBold,
        Kollektif: Kollektif,
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

    return (
      <View style={styles.container}> 
        <Image style={styles.Logo}
        source={require('../../assets/LogoPreparaVest.png')} />
        <View style={styles.header}>
          <Text style={styles.texto}>Login</Text>
  
          <TextInput style={styles.TextInput} placeholder="Nome"/>
          <TextInput style={styles.TextInput} placeholder="Email"/>
          <TextInput style={styles.TextInput} placeholder="Senha"/>
  
          <TouchableOpacity style={styles.botao}>
            <Text style={{color: '#fff', fontSize: 22,   fontFamily: 'KollektifBold'}}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }