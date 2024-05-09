
import { View, Text, Pressable, Modal, Button } from 'react-native'; // Importe o Button de 'react-native'
import { enemstyle } from './style';

import Cabecalho from '../../components/header';

import  { useState } from 'react';
import * as Font from 'expo-font';
import { useEffect } from 'react';
import KollektifBold from '../../assets/fonts/Kollektif-Bold.ttf';
import Kollektif from '../../assets/fonts/Kollektif.ttf';



export default function PaginaEnem() {

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


    const [modalVisible1, setModalVisible1] = useState(false);
    function abrirModal1(){
        setModalVisible1(!modalVisible1)
    }
    const [modalVisible2, setModalVisible2] = useState(false);
    function abrirModal2(){
        setModalVisible2(!modalVisible2)
    }
    const [modalVisible3, setModalVisible3] = useState(false);
    function abrirModal3(){
        setModalVisible3(!modalVisible3)
    }
    const [modalVisible4, setModalVisible4] = useState(false);
    function abrirModal4(){
        setModalVisible4(!modalVisible4)
    }
    const [modalVisible5, setModalVisible5] = useState(false);
    function abrirModal5(){
        setModalVisible5(!modalVisible5)
    }
    const [modalVisible6, setModalVisible6] = useState(false);
    function abrirModal6(){
        setModalVisible6(!modalVisible6)
    }
    const [modalVisible7, setModalVisible7] = useState(false);
    function abrirModal7(){
        setModalVisible7(!modalVisible7)
    }
    const [modalVisible8, setModalVisible8] = useState(false);
    function abrirModal8(){
        setModalVisible8(!modalVisible8)
    }
    const [modalVisible9, setModalVisible9] = useState(false);
    function abrirModal9(){
        setModalVisible9(!modalVisible9)
    }
    const [modalVisible10, setModalVisible10] = useState(false);
    function abrirModal10(){
        setModalVisible10(!modalVisible10)
    }
    const [modalVisible11, setModalVisible11] = useState(false);
    function abrirModal11(){
        setModalVisible11(!modalVisible11)
    }
    const [modalVisible12 ,setModalVisible12] = useState(false);
    function abrirModal12(){
        setModalVisible121(!modalVisible12)
    }

    return (
        <View style={enemstyle.root}>
            <Cabecalho/>
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

                    <View style={enemstyle.espacopv1} >

                        
                    <View style={enemstyle.card}> 
                            <Text style={enemstyle.textinho}>Prova 2012</Text>
                            <Text>Clique no botão abaixo para acessar a prova</Text>
                            <Button title="Prova" onPress={abrirModal1}  style={enemstyle.butaomodal} />
                        </View>

                    <View style={enemstyle.modal}>
                <View> <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible1}
                    onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible1(!modalVisible1);
                    }}>
                    <View style={enemstyle.centeredView}>
                    <View >
                    <View style={enemstyle.modalView}>
                        <Text style={enemstyle.textStyle}>Detalhes sobre a prova</Text>
                        <Text style={enemstyle.textStyle1} >1º Dia – Caderno 1 – Azul – Aplicação Regular</Text>
                        <View style={enemstyle.modalText} >
                             <Pressable onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2012/dia1_caderno1_azul.pdf', "Vestibular")} style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/gabaritos/2012/dia1_azul.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                       </View>
                      
                        <Text style={enemstyle.textStyle1} >2º Dia – Caderno 7 – Azul – Aplicação Regular</Text>
                         <View style={enemstyle.modalText} >
                              <Pressable onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2012/dia2_caderno7_azul.pdf', "Vestibular") }  style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/gabaritos/2012/dia2_azul.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                         </View>
                      
                         <Pressable
                        style={[enemstyle.button, enemstyle.buttonClose]}
                        onPress={()=> setModalVisible1(!modalVisible1)}>
                        <Text style={enemstyle.textStyle1}>Voltar a pagina anterior</Text>
                        </Pressable>
                    </View>
                      
                    </View>
                    </View>
                </Modal></View>        
               
                </View>
                <View style={enemstyle.card}> 
                            <Text style={enemstyle.textinho}>Prova 2013</Text>
                            <Text>Clique no botão abaixo para acessar a prova</Text>
                            <Button title="Prova" onPress={abrirModal2}  style={enemstyle.butaomodal} />
                        </View>

                    <View style={enemstyle.modal}>
                <View> <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible2}
                    onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible2(!modalVisible2);
                    }}>
                    <View style={enemstyle.centeredView}>
                    <View >
                    <View style={enemstyle.modalView}>
                        <Text style={enemstyle.textStyle}>Detalhes sobre a prova</Text>
                        <Text style={enemstyle.textStyle1} >1º Dia – Caderno 1 – Azul – Aplicação Regular</Text>
                        <View style={enemstyle.modalText} >
                             <Pressable onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2013/dia1_caderno1_azul.pdf', "Vestibular")} style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/gabaritos/2013/dia1_azul.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                       </View>
                      
                        <Text style={enemstyle.textStyle1} >2º Dia – Caderno 7 – Azul – Aplicação Regular</Text>
                         <View style={enemstyle.modalText} >
                              <Pressable onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2013/dia2_caderno7_azul.pdf', "Vestibular") }  style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/gabaritos/2013/dia2_azul.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                         </View>
                      
                         <Pressable
                        style={[enemstyle.button, enemstyle.buttonClose]}
                        onPress={()=> setModalVisible2(!modalVisible2)}>
                        <Text style={enemstyle.textStyle1}>Voltar a pagina anterior</Text>
                        </Pressable>
                    </View>
                      
                    </View>
                    </View>
                </Modal></View>        
               
                </View>
                <View style={enemstyle.card}> 
                            <Text style={enemstyle.textinho}>Prova 2014</Text>
                            <Text>Clique no botão abaixo para acessar a prova</Text>
                            <Button title="Prova" onPress={abrirModal3}  style={enemstyle.butaomodal} />
                        </View>

                    <View style={enemstyle.modal}>
                <View> <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible3}
                    onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible3(!modalVisible3);
                    }}>
                    <View style={enemstyle.centeredView}>
                    <View >
                    <View style={enemstyle.modalView}>
                        <Text style={enemstyle.textStyle}>Detalhes sobre a prova</Text>
                        <Text style={enemstyle.textStyle1} >1º Dia – Caderno 1 – Azul – Aplicação Regular</Text>
                        <View style={enemstyle.modalText} >
                             <Pressable onPress={() => window.open('  https://download.inep.gov.br/educacao_basica/enem/provas/2014/2014_PV_impresso_D1_CD1.pdf')} style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/gabaritos/2014/CADERNO_1_AZUL_SABADO.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                       </View>
                      
                        <Text style={enemstyle.textStyle1} >2º Dia – Caderno 7 – Azul – Aplicação Regular</Text>
                         <View style={enemstyle.modalText} >
                              <Pressable onPress={() => window.open('  https://download.inep.gov.br/educacao_basica/enem/provas/2014/2014_PV_impresso_D2_CD7.pdf', "Vestibular") }  style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open('  https://download.inep.gov.br/educacao_basica/enem/gabaritos/2014/CADERNO_7_AZUL_DOMINGO.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                         </View>
                      
                         <Pressable
                        style={[enemstyle.button, enemstyle.buttonClose]}
                        onPress={()=> setModalVisible3(!modalVisible3)}>
                        <Text style={enemstyle.textStyle1}>Voltar a pagina anterior</Text>
                        </Pressable>
                    </View>
                      
                    </View>
                    </View>
                </Modal></View>        
               
                </View>
                <View style={enemstyle.card}> 
                            <Text style={enemstyle.textinho}>Prova 2015</Text>
                            <Text>Clique no botão abaixo para acessar a prova</Text>
                            <Button title="Prova" onPress={abrirModal4}  style={enemstyle.butaomodal} />
                        </View>

                    <View style={enemstyle.modal}>
                <View> <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible4}
                    onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible4(!modalVisible4);
                    }}>
                    <View style={enemstyle.centeredView}>
                    <View >
                    <View style={enemstyle.modalView}>
                        <Text style={enemstyle.textStyle}>Detalhes sobre a prova</Text>
                        <Text style={enemstyle.textStyle1} >1º Dia – Caderno 1 – Azul – Aplicação Regular</Text>
                        <View style={enemstyle.modalText} >
                             <Pressable onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2015/2015_PV_impresso_D1_CD1.pdf', "Vestibular")} style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open('  https://download.inep.gov.br/educacao_basica/enem/gabaritos/2015/CADERNO_1_AZUL_SABADO.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                       </View>
                      
                        <Text style={enemstyle.textStyle1} >2º Dia – Caderno 7 – Azul – Aplicação Regular</Text>
                         <View style={enemstyle.modalText} >
                              <Pressable onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2015/2015_PV_impresso_D2_CD7.pdf', "Vestibular") }  style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open('https://download.inep.gov.br/educacao_basica/enem/gabaritos/2015/CADERNO_7_AZUL_DOMINGO.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                         </View>
                      
                         <Pressable
                        style={[enemstyle.button, enemstyle.buttonClose]}
                        onPress={()=> setModalVisible4(!modalVisible4)}>
                        <Text style={enemstyle.textStyle1}>Voltar a pagina anterior</Text>
                        </Pressable>
                    </View>
                      
                    </View>
                    </View>
                </Modal></View>        
               
                </View>
                <View style={enemstyle.card}> 
                            <Text style={enemstyle.textinho}>Prova 2016</Text>
                            <Text>Clique no botão abaixo para acessar a prova</Text>
                            <Button title="Prova" onPress={abrirModal5}  style={enemstyle.butaomodal} />
                        </View>

                    <View style={enemstyle.modal}>
                <View> <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible5}
                    onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible5(!modalVisible5);
                    }}>
                    <View style={enemstyle.centeredView}>
                    <View >
                    <View style={enemstyle.modalView}>
                        <Text style={enemstyle.textStyle}>Detalhes sobre a prova</Text>
                        <Text style={enemstyle.textStyle1} >1º Dia – Caderno 1 – Azul – Aplicação Regular</Text>
                        <View style={enemstyle.modalText} >
                             <Pressable onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2016/2016_PV_impresso_D1_CD1.pdf', "Vestibular")} style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open('  https://download.inep.gov.br/educacao_basica/enem/gabaritos/2016/GAB_ENEM_2016_DIA_1_01_AZUL.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                       </View>
                      
                        <Text style={enemstyle.textStyle1} >2º Dia – Caderno 7 – Azul – Aplicação Regular</Text>
                         <View style={enemstyle.modalText} >
                              <Pressable onPress={() => window.open('  https://download.inep.gov.br/educacao_basica/enem/provas/2016/2016_PV_impresso_D2_CD7.pdf', "Vestibular") }  style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open('  https://download.inep.gov.br/educacao_basica/enem/gabaritos/2016/GAB_ENEM_2016_DIA_2_07_AZUL.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                         </View>
                      
                         <Pressable
                        style={[enemstyle.button, enemstyle.buttonClose]}
                        onPress={()=> setModalVisible5(!modalVisible5)}>
                        <Text style={enemstyle.textStyle1}>Voltar a pagina anterior</Text>
                        </Pressable>
                    </View>
                      
                    </View>
                    </View>
                </Modal></View>        
               
                </View>
                <View style={enemstyle.card}> 
                            <Text style={enemstyle.textinho}>Prova 2017</Text>
                            <Text>Clique no botão abaixo para acessar a prova</Text>
                            <Button title="Prova" onPress={abrirModal6}  style={enemstyle.butaomodal} />
                        </View>

                    <View style={enemstyle.modal}>
                <View> <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible6}
                    onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible6(!modalVisible6);
                    }}>
                    <View style={enemstyle.centeredView}>
                    <View >
                    <View style={enemstyle.modalView}>
                        <Text style={enemstyle.textStyle}>Detalhes sobre a prova</Text>
                        <Text style={enemstyle.textStyle1} >1º Dia – Caderno 1 – Azul – Aplicação Regular</Text>
                        <View style={enemstyle.modalText} >
                             <Pressable onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2017/2017_PV_impresso_D1_CD1.pdf', "Vestibular")} style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open('  https://download.inep.gov.br/educacao_basica/enem/gabaritos/2017/cad_1_gabarito_azul_5112017.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                       </View>
                      
                        <Text style={enemstyle.textStyle1} >2º Dia – Caderno 7 – Azul – Aplicação Regular</Text>
                         <View style={enemstyle.modalText} >
                              <Pressable onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2017/2017_PV_impresso_D2_CD7.pdf', "Vestibular") }  style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open('  https://download.inep.gov.br/educacao_basica/enem/gabaritos/2017/cad_8_gabarito_rosa_12112017.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                         </View>
                      
                         <Pressable
                        style={[enemstyle.button, enemstyle.buttonClose]}
                        onPress={()=> setModalVisible6(!modalVisible6)}>
                        <Text style={enemstyle.textStyle1}>Voltar a pagina anterior</Text>
                        </Pressable>
                    </View>
                      
                    </View>
                    </View>
                </Modal></View>        
               
                </View>
                <View style={enemstyle.card}> 
                            <Text style={enemstyle.textinho}>Prova 2018</Text>
                            <Text>Clique no botão abaixo para acessar a prova</Text>
                            <Button title="Prova" onPress={abrirModal7}  style={enemstyle.butaomodal} />
                        </View>

                    <View style={enemstyle.modal}>
                <View> <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible7}
                    onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible7(!modalVisible7);
                    }}>
                    <View style={enemstyle.centeredView}>
                    <View >
                    <View style={enemstyle.modalView}>
                        <Text style={enemstyle.textStyle}>Detalhes sobre a prova</Text>
                        <Text style={enemstyle.textStyle1} >1º Dia – Caderno 1 – Azul – Aplicação Regular</Text>
                        <View style={enemstyle.modalText} >
                             <Pressable onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2018/2018_PV_impresso_D1_CD1.pdf', "Vestibular")} style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/gabaritos/2018/GAB_ENEM_2018_DIA_1_AZUL.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                       </View>
                      
                        <Text style={enemstyle.textStyle1} >2º Dia – Caderno 7 – Azul – Aplicação Regular</Text>
                         <View style={enemstyle.modalText} >
                              <Pressable onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2018/2018_PV_impresso_D2_CD7.pdf', "Vestibular") }  style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open('  https://download.inep.gov.br/educacao_basica/enem/gabaritos/2018/GAB_ENEM_2018_DIA_2_AZUL.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                         </View>
                      
                         <Pressable
                        style={[enemstyle.button, enemstyle.buttonClose]}
                        onPress={()=> setModalVisible7(!modalVisible7)}>
                        <Text style={enemstyle.textStyle1}>Voltar a pagina anterior</Text>
                        </Pressable>
                    </View>
                      
                    </View>
                    </View>
                </Modal></View>        
               
                </View>
                <View style={enemstyle.card}> 
                            <Text style={enemstyle.textinho}>Prova 2019</Text>
                            <Text>Clique no botão abaixo para acessar a prova</Text>
                            <Button title="Prova" onPress={abrirModal8}  style={enemstyle.butaomodal} />
                        </View>

                    <View style={enemstyle.modal}>
                <View> <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible8}
                    onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible8(!modalVisible8);
                    }}>
                    <View style={enemstyle.centeredView}>
                    <View >
                    <View style={enemstyle.modalView}>
                        <Text style={enemstyle.textStyle}>Detalhes sobre a prova</Text>
                        <Text style={enemstyle.textStyle1} >1º Dia – Caderno 1 – Azul – Aplicação Regular</Text>
                        <View style={enemstyle.modalText} >
                             <Pressable onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2019/2019_PV_impresso_D1_CD1.pdf', "Vestibular")} style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/gabaritos/2019/gabarito_1_dia_caderno_1_azul_aplicacao_regular.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                       </View>
                      
                        <Text style={enemstyle.textStyle1} >2º Dia – Caderno 7 – Azul – Aplicação Regular</Text>
                         <View style={enemstyle.modalText} >
                              <Pressable onPress={() => window.open('  https://download.inep.gov.br/educacao_basica/enem/provas/2019/2019_PV_impresso_D2_CD7.pdf', "Vestibular") }  style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/gabaritos/2019/gabarito_2_dia_caderno_7_azul_aplicacao_regular.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                         </View>
                      
                         <Pressable
                        style={[enemstyle.button, enemstyle.buttonClose]}
                        onPress={()=> setModalVisible8(!modalVisible8)}>
                        <Text style={enemstyle.textStyle1}>Voltar a pagina anterior</Text>
                        </Pressable>
                    </View>
                      
                    </View>
                    </View>
                </Modal></View>        
               
                </View>
                <View style={enemstyle.card}> 
                            <Text style={enemstyle.textinho}>Prova 2020</Text>
                            <Text>Clique no botão abaixo para acessar a prova</Text>
                            <Button title="Prova" onPress={abrirModal9}  style={enemstyle.butaomodal} />
                        </View>

                    <View style={enemstyle.modal}>
                <View> <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible9}
                    onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible9(!modalVisible9);
                    }}>
                    <View style={enemstyle.centeredView}>
                    <View >
                    <View style={enemstyle.modalView}>
                        <Text style={enemstyle.textStyle}>Detalhes sobre a prova</Text>
                        <Text style={enemstyle.textStyle1} >1º Dia – Caderno 1 – Azul – Aplicação Regular</Text>
                        <View style={enemstyle.modalText} >
                             <Pressable onPress={() => window.open(' https://download.inep.gov.br/enem/provas_e_gabaritos/2020_PV_impresso_D1_CD1.pdf', "Vestibular")} style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open('https://download.inep.gov.br/enem/provas_e_gabaritos/2020_GB_impresso_D1_CD1.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                       </View>
                      
                        <Text style={enemstyle.textStyle1} >2º Dia – Caderno 7 – Azul – Aplicação Regular</Text>
                         <View style={enemstyle.modalText} >
                              <Pressable onPress={() => window.open(' https://download.inep.gov.br/enem/provas_e_gabaritos/2020_PV_impresso_D2_CD7.pdf', "Vestibular") }  style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open(' https://download.inep.gov.br/enem/provas_e_gabaritos/2020_GB_impresso_D2_CD7.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                         </View>
                      
                         <Pressable
                        style={[enemstyle.button, enemstyle.buttonClose]}
                        onPress={()=> setModalVisible9(!modalVisible9)}>
                        <Text style={enemstyle.textStyle1}>Voltar a pagina anterior</Text>
                        </Pressable>
                    </View>
                      
                    </View>
                    </View>
                </Modal></View>        
               
                </View>
                <View style={enemstyle.card}> 
                            <Text style={enemstyle.textinho}>Prova 2021</Text>
                            <Text>Clique no botão abaixo para acessar a prova</Text>
                            <Button title="Prova" onPress={abrirModal10}  style={enemstyle.butaomodal} />
                        </View>

                    <View style={enemstyle.modal}>
                <View> <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible10}
                    onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible10(!modalVisible10);
                    }}>
                    <View style={enemstyle.centeredView}>
                    <View >
                    <View style={enemstyle.modalView}>
                        <Text style={enemstyle.textStyle}>Detalhes sobre a prova</Text>
                        <Text style={enemstyle.textStyle1} >1º Dia – Caderno 1 – Azul – Aplicação Regular</Text>
                        <View style={enemstyle.modalText} >
                             <Pressable onPress={() => window.open(' https://download.inep.gov.br/enem/provas_e_gabaritos/2021_PV_impresso_D1_CD1.pdf', "Vestibular")} style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open('  https://download.inep.gov.br/enem/provas_e_gabaritos/2021_GB_impresso_D1_CD1.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                       </View>
                      
                        <Text style={enemstyle.textStyle1} >2º Dia – Caderno 7 – Azul – Aplicação Regular</Text>
                         <View style={enemstyle.modalText} >
                              <Pressable onPress={() => window.open('  https://download.inep.gov.br/enem/provas_e_gabaritos/2021_PV_impresso_D2_CD7.pdf', "Vestibular") }  style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open(' https://download.inep.gov.br/enem/provas_e_gabaritos/2021_GB_impresso_D2_CD7.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                         </View>
                      
                         <Pressable
                        style={[enemstyle.button, enemstyle.buttonClose]}
                        onPress={()=> setModalVisible10(!modalVisible10)}>
                        <Text style={enemstyle.textStyle1}>Voltar a pagina anterior</Text>
                        </Pressable>
                    </View>
                      
                    </View>
                    </View>
                </Modal></View>        
               
                </View>
                <View style={enemstyle.card}> 
                            <Text style={enemstyle.textinho}>Prova 2022</Text>
                            <Text>Clique no botão abaixo para acessar a prova</Text>
                            <Button title="Prova" onPress={abrirModal11}  style={enemstyle.butaomodal} />
                        </View>

                    <View style={enemstyle.modal}>
                <View> <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible11}
                    onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible11(!modalVisible11);
                    }}>
                    <View style={enemstyle.centeredView}>
                    <View >
                    <View style={enemstyle.modalView}>
                        <Text style={enemstyle.textStyle}>Detalhes sobre a prova</Text>
                        <Text style={enemstyle.textStyle1} >1º Dia – Caderno 1 – Azul – Aplicação Regular</Text>
                        <View style={enemstyle.modalText} >
                             <Pressable onPress={() => window.open(' https://download.inep.gov.br/enem/provas_e_gabaritos/2022_PV_impresso_D1_CD1.pdf', "Vestibular")} style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open('  https://download.inep.gov.br/enem/provas_e_gabaritos/2022_GB_impresso_D1_CD1.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                       </View>
                      
                        <Text style={enemstyle.textStyle1} >2º Dia – Caderno 7 – Azul – Aplicação Regular</Text>
                         <View style={enemstyle.modalText} >
                              <Pressable onPress={() => window.open('https://download.inep.gov.br/enem/provas_e_gabaritos/2022_PV_impresso_D2_CD7.pdf', "Vestibular") }  style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open('  https://download.inep.gov.br/enem/provas_e_gabaritos/2022_GB_impresso_D2_CD7.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                         </View>
                      
                         <Pressable
                        style={[enemstyle.button, enemstyle.buttonClose]}
                        onPress={()=> setModalVisible11(!modalVisible11)}>
                        <Text style={enemstyle.textStyle1}>Voltar a pagina anterior</Text>
                        </Pressable>
                    </View>
                      
                    </View>
                    </View>
                </Modal></View>        
               
                </View>
                <View style={enemstyle.card}> 
                            <Text style={enemstyle.textinho}>Prova 2023</Text>
                            <Text>Clique no botão abaixo para acessar a prova</Text>
                            <Button title="Prova" onPress={abrirModal12}  style={enemstyle.butaomodal} />
                        </View>

                    <View style={enemstyle.modal}>
                <View> <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible12}
                    onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible12(!modalVisible12);
                    }}>
                    <View style={enemstyle.centeredView}>
                    <View >
                    <View style={enemstyle.modalView}>
                        <Text style={enemstyle.textStyle}>Detalhes sobre a prova</Text>
                        <Text style={enemstyle.textStyle1} >1º Dia – Caderno 1 – Azul – Aplicação Regular</Text>
                        <View style={enemstyle.modalText} >
                             <Pressable onPress={() => window.open(' https://download.inep.gov.br/enem/provas_e_gabaritos/2023_PV_impresso_D1_CD1.pdf', "Vestibular")} style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open('  https://download.inep.gov.br/enem/provas_e_gabaritos/2023_GB_impresso_D1_CD1.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                       </View>
                      
                        <Text style={enemstyle.textStyle1} >2º Dia – Caderno 7 – Azul – Aplicação Regular</Text>
                         <View style={enemstyle.modalText} >
                              <Pressable onPress={() => window.open(' https://download.inep.gov.br/enem/provas_e_gabaritos/2023_PV_impresso_D2_CD7.pdf', "Vestibular") }  style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open(' https://download.inep.gov.br/enem/provas_e_gabaritos/2023_GB_impresso_D2_CD7.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                         </View>
                      
                         <Pressable
                        style={[enemstyle.button, enemstyle.buttonClose]}
                        onPress={()=> setModalVisible12(!modalVisible12)}>
                        <Text style={enemstyle.textStyle1}>Voltar a pagina anterior</Text>
                        </Pressable>
                    </View>
                      
                    </View>
                    </View>
                </Modal></View>        
               
                </View>
                    
                    </View>
    
                

            </View>
            </View>
           
        </View>

    )
}


