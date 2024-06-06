import { Text, TouchableOpacity, View, TextInput,Image } from 'react-native';
import { style } from './style';

import  { useState } from 'react';
import * as Font from 'expo-font';
import { useEffect } from 'react';
import KollektifBold from '../../assets/fonts/Kollektif-Bold.ttf';
import Kollektif from '../../assets/fonts/Kollektif.ttf';



export default function Cadastro() {

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
    <View style={style.container}> 
        <Image source={require('../../assets/LogoPreparaVest.png')} style={style.Logo}  />
      <View style={style.header}>
        <View style={style.titulo}>
          <Text style={style.titulo}>Cadastro</Text>
        </View>

        <TextInput style={style.TextInput} placeholder="Nome"/>
        <TextInput style={style.TextInput} placeholder="Email"/>
        <TextInput style={style.TextInput} placeholder="Senha"/>
        <TextInput style={style.TextInput} placeholder="Confirmar senha"/>

        <TouchableOpacity style={style.botao}>
          <Text style={{color: '#fff', fontSize: 22, fontFamily: 'KollektifBold'}}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}