import { StyleSheet } from "react-native";

export  const style = StyleSheet.create({

    cabecalho:{
        width: '100%',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'#38B6FF'
    },

    ImagemLogo:{
        height: 130,
        width: 160
    },

    subtitulo: {
        fontSize: 20,
        flexDirection: 'row',
        gap: 25,
       
    },
    pesquisa: {
        backgroundColor: '#fff',
        borderRadius: 5,
        width: 350,
        height: 30,
        border:'solid'
    },
    perfilmodal:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor:'#000000',
        padding: 20,
        justifyContent:'space-around',
        flexDirection:'row'
       
    },
    titulomodal:{
        fontSize: 20,
         fontFamily: 'KollektifBold'
    },
    modal:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor:'#38B6FF',
        justifyContent:'space-around',
        height:100,
        width:'10%',
       borderRadius:5
    },
    imagemavatar:{
        borderRadius:7,
        height:'20%',
        width:'20%'
    },

    textomodal:{
        fontSize: 15,
        fontFamily: 'Kollektif'
    },
    inputmodal:{
        backgroundColor:'#fff5f5f5',
        borderRadius:5,
        padding:10
    },
    botal:{
        backgroundColor:'#fff5f5f5',
        borderRadius:5,
        padding:5
    }

    

})