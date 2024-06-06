import { Text,View,TextInput,Image, Modal, Pressable} from "react-native";
import { style } from "./style";
import { Icon } from "react-native-elements";


import { useState } from 'react';
import * as Font from 'expo-font';
import { useEffect } from 'react';
import KollektifBold from '../../assets/fonts/Kollektif-Bold.ttf';
import Kollektif from '../../assets/fonts/Kollektif.ttf';


export default function Cabecalho(){

    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
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
            <Pressable onPress={() => setModalVisible(true)}>
                <Icon
                    name='person'
                    type='material'
                    color='#000'
                />
            </Pressable>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}>
              <View style={style.perfilmodal}>
                <View style={style.modal}>
                  <Text style={style.titulomodal}>Perfil</Text>

                  <Image source={require('../../assets/1.png')} style={style.imagemavatar}/>
                  <Text style={style.textomodal}>Nome </Text>
                  <Text style={style.textomodal}>Email usuario</Text>
                  <Pressable style={style.botal }>Alterar foto</Pressable>
                  <View>
                     <TextInput placeholder="Nome"  style={style.inputmodal}/>
                     <TextInput placeholder="Email"  style={style.inputmodal} />
                  </View>
                  <Pressable
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text  style={style.titulomodal}>Voltar a pagina anterior</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          
          </View>
          
    )
}
