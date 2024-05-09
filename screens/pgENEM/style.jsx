import { StyleSheet } from "react-native";

export const enemstyle = StyleSheet.create({

    root:{
        flex:1,
        height:'100%',
        width:'100%'

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
     
      fontSize:30,
      fontFamily: 'KollektifBold',

     marginBottom:60
    },

    textinho:{
      fontSize:19,
      fontFamily: 'Kollektif',
    },

    //modal//
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fundo semi-transparente escuro
    
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        height:'100%',
        width:'100%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        marginTop:20,
        backgroundColor: '#2196F3'
      },
   
      buttonClose: {
        backgroundColor: '#38B6FF'

      },
      textStyle: {
        color: 'black',
        textAlign: 'center',
        fontSize:25,
        marginBottom:30,
        fontFamily: 'KollektifBold',
      },

      textStyle1: {
        color: 'black',
        fontSize:20,
        textAlign: 'center',
        fontFamily: 'Kollektif',
      },
      modalText: {
        marginBottom: 15,
       justifyContent:'center',
       alignItems:'center',
       justifyContent:'space-around',
       flexDirection:'row',
       width:'50%'
      
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
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent:'space-around',
        width:1000,
        height:480,
        backgroundColor:'#38B6FF',
        borderRadius:5


    },

    card:{
        height:'20%',
        width:'30%',
        margin:12,
        backgroundColor:'#fff',
        padding:3,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        justifyContent:'space-around'
    },

 
})