import { StyleSheet } from "react-native";

export const estilo = StyleSheet.create({

    root:{
        flex:1,
        height:'100%',
        width:'100%',
    

    },
    espacobt:{
        flexDirection:'colum',
        alignItems:'flex-start',
        justifyContent: 'flex-start',
        justifyContent:'space-around',
        marginBottom:'20%'
 
    },
    butao:{
        borderRadius:5,
        backgroundColor:'#38B6FF',
        justifyContent:'center',
        alignItems:'center',
        margin:10,
        width:'120%',
        height:40
       
    },

    text:{
        fontFamily: 'KollektifBold',
      fontSize:30,

     marginBottom:60
    },

    textinho:{
      fontSize:19,
      fontFamily: 'KollektifBold',
    },

    textStyle: {
        color: 'black',
        fontFamily: 'KollektifBold',
        textAlign: 'center',
        fontSize:25,
        marginBottom:30,
      },

    espacopv:{
       flexWrap:'wrap',
        flexDirection:'row',
        margin:15,
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent:'space-around',
        
    },
    espacopv1:{
        alignItems: 'flex-start',
        justifyContent:'flex-start',
        justifyContent:'space-around',
        textAlign:'left',
        width:1000,
        height:480,
    },

    //style desta pagina//

    titulos:{
        fontFamily: 'KollektifBold',
        fontSize: 20,
        margin:7
    },

    textos:{

       fontFamily: 'Kollektif',
        fontSize: 20,
        marginLeft:30,
        marginTop:5,
        
    },
 
})