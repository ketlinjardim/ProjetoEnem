import { Text,View,TextInput,Image, Linking } from "react-native";
import { style } from "./style";
import { Icon } from "react-native-elements";
import { Link } from "react-router-native"

import { useState } from 'react';
import * as Font from 'expo-font';
import { useEffect } from 'react';
import KollektifBold from '../../assets/fonts/Kollektif-Bold.ttf';
import Kollektif from '../../assets/fonts/Kollektif.ttf';


export default function Cabecalho(){

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

    return(
            <View style={style.cabecalho}>   
                <Image style={style.ImagemLogo}
                source={require('../../assets/LogoPreparaVest.png')} />
            <View style={{flexDirection: 'row', gap: 4}}>
                <TextInput style={style.pesquisa}
                />
                <Icon style={{height: 20, width: 20}}
                    name='search'
                    type='material'
                    color='#000'
                />
            </View>
            <View style={style.subtitulo}>
                <Text style={{fontSize: 22, fontFamily: 'KollektifBold'}}>Home</Text>
                <Text style={{fontSize: 22, fontFamily: 'KollektifBold'}}>Enem</Text>
                <Text style={{fontSize: 22, fontFamily: 'KollektifBold'}}>Sobre nós</Text>
            </View>
            <Icon
                name='person'
                type='material'
                color='#000'
            />
            </View>  
    )
}
