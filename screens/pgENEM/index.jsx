
import React, { useState } from 'react';
import { View, Text, Pressable, Modal, Button,Image } from 'react-native'; // Importe os componentes necessários
import CustomModal from '../../components/modais'; // Importe o componente de modal genérico
import { ModalContent1,ModalContent10,ModalContent11,ModalContent12,ModalContent2,ModalContent3, ModalContent4, ModalContent5, ModalContent6, ModalContent7, ModalContent8, ModalContent9 } from '../../components/modalcontent'; // Importe os conteúdos dos modais
import { enemstyle } from './style'; // Importe o estilo

import Cabecalho from '../../components/header';

import * as Font from 'expo-font';
import { useEffect } from 'react';
import KollektifBold from '../../assets/fonts/Kollektif-Bold.ttf';
import Kollektif from '../../assets/fonts/Kollektif.ttf';

const PaginaEnem = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);

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

  const openModal = (content) => {
    setModalContent(content);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalContent(null);
  };

  return (
    <View style={enemstyle.root}>
      <Cabecalho />
      <View style={enemstyle.espacopv}>
      <View style={enemstyle.espacobt}>
     
          <Text style={enemstyle.text}>Enem</Text>
          <Pressable style={enemstyle.butao} ><Text style={enemstyle.textinho}>Provas</Text></Pressable>
          <Pressable style={enemstyle.butao} ><Text style={enemstyle.textinho}>Informações gerais</Text></Pressable>
          <Pressable style={enemstyle.butao}><Text style={enemstyle.textinho}>Conteúdo relevante</Text></Pressable>
          <Pressable style={enemstyle.butao}><Text style={enemstyle.textinho}>Questões</Text></Pressable>
        </View>
        <View>
          <Text style={enemstyle.textStyle}>Vestibulares anteriores</Text>
         
            <View style={enemstyle.espacopv1}>
              <View style={enemstyle.card}>
                <Text style={enemstyle.textinho}>Prova 2012</Text>
                <Text>Clique no botão abaixo para acessar a prova</Text>
                <Button title="Prova" onPress={() => openModal(<ModalContent1 />)} style={enemstyle.butaomodal} />
              </View>
              <View style={enemstyle.card}>
                <Text style={enemstyle.textinho}>Prova 2013</Text>
                <Text>Clique no botão abaixo para acessar a prova</Text>
                <Button title="Prova" onPress={() => openModal(<ModalContent2 />)} style={enemstyle.butaomodal} />
              </View>
              <View style={enemstyle.card}>
                <Text style={enemstyle.textinho}>Prova 2014</Text>
                <Text>Clique no botão abaixo para acessar a prova</Text>
                <Button title="Prova" onPress={() => openModal(<ModalContent3 />)} style={enemstyle.butaomodal} />
              </View>
              <View style={enemstyle.card}>
                <Text style={enemstyle.textinho}>Prova 2015</Text>
                <Text>Clique no botão abaixo para acessar a prova</Text>
                <Button title="Prova" onPress={() => openModal(<ModalContent4 />)} style={enemstyle.butaomodal} />
              </View>
              <View style={enemstyle.card}>
                <Text style={enemstyle.textinho}>Prova 2016</Text>
                <Text>Clique no botão abaixo para acessar a prova</Text>
                <Button title="Prova" onPress={() => openModal(<ModalContent5 />)} style={enemstyle.butaomodal} />
              </View>
              <View style={enemstyle.card}>
                <Text style={enemstyle.textinho}>Prova 2017</Text>
                <Text>Clique no botão abaixo para acessar a prova</Text>
                <Button title="Prova" onPress={() => openModal(<ModalContent6 />)} style={enemstyle.butaomodal} />
              </View>
              <View style={enemstyle.card}>
                <Text style={enemstyle.textinho}>Prova 2018</Text>
                <Text>Clique no botão abaixo para acessar a prova</Text>
                <Button title="Prova" onPress={() => openModal(<ModalContent7 />)} style={enemstyle.butaomodal} />
              </View>
              <View style={enemstyle.card}>
                <Text style={enemstyle.textinho}>Prova 2019</Text>
                <Text>Clique no botão abaixo para acessar a prova</Text>
                <Button title="Prova" onPress={() => openModal(<ModalContent8 />)} style={enemstyle.butaomodal} />
              </View>
              <View style={enemstyle.card}>
                <Text style={enemstyle.textinho}>Prova 2020</Text>
                <Text>Clique no botão abaixo para acessar a prova</Text>
                <Button title="Prova" onPress={() => openModal(<ModalContent9 />)} style={enemstyle.butaomodal} />
              </View>
              <View style={enemstyle.card}>
                <Text style={enemstyle.textinho}>Prova 2021</Text>
                <Text>Clique no botão abaixo para acessar a prova</Text>
                <Button title="Prova" onPress={() => openModal(<ModalContent10 />)} style={enemstyle.butaomodal} />
              </View>
              <View style={enemstyle.card}>
                <Text style={enemstyle.textinho}>Prova 2022</Text>
                <Text>Clique no botão abaixo para acessar a prova</Text>
                <Button title="Prova" onPress={() => openModal(<ModalContent11 />)} style={enemstyle.butaomodal} />
              </View>
              <View style={enemstyle.card}>
                <Text style={enemstyle.textinho}>Prova 2023</Text>
                <Text>Clique no botão abaixo para acessar a prova</Text>
                <Button title="Prova" onPress={() => openModal(<ModalContent12 />)} style={enemstyle.butaomodal} />
              </View>
             
              <CustomModal visible={modalVisible} onClose={closeModal}>
                {modalContent}
              </CustomModal>
            </View>
          </View>
       
      </View>
    </View>
  );
};

export default PaginaEnem;
