import  { useEffect } from 'react';
import { View, Text, Pressable} from 'react-native';
import { estilo } from './style';
import * as Font from 'expo-font';
import Cabecalho from '../../components/header';
import { useState } from 'react';

// Importe a fonte
import KollektifBold from '../../assets/fonts/Kollektif-Bold.ttf';
import Kollektif from '../../assets/fonts/Kollektif.ttf';

export default function Conteudorel() {
  // Registre a fonte
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


    <View style={estilo.root}>
        <Cabecalho/>
      <View style={estilo.espacopv}>

      <View style={estilo.espacobt}>
            <Text style={estilo.text}>Enem</Text>
                <Pressable style={estilo.butao} ><Text style={estilo.textinho}>Provas</Text></Pressable>
                <Pressable style={estilo.butao} ><Text style={estilo.textinho}>Informações gerais</Text></Pressable>
                <Pressable style={estilo.butao}><Text style={estilo.textinho}>Conteúdo relevante</Text></Pressable>
                <Pressable style={estilo.butao}><Text style={estilo.textinho}>Questões</Text></Pressable>
            </View>
       
        <View>
          <Text style={estilo.textStyle}>Conteúdo Relevante</Text>
          <View style={estilo.espacopv1}>
            <View style={estilo.espacotaxtos}>
                <View style={estilo.categoria} >
                <Text style={estilo.titulos}> Linguagens, Códigos e suas Tecnologias</Text>
                <Text  style={estilo.textos}>- Interpretação de textos literários e não literários.                </Text>
                <Text  style={estilo.textos}>- Gramática normativa e linguística.</Text>
                <Text  style={estilo.textos}>- Produção textual.</Text>
                <Text  style={estilo.textos}>- Literatura brasileira e portuguesa.</Text>
                <Text  style={estilo.textos}>- Língua estrangeira (inglês ou espanhol).</Text>
               
                </View>
                <View style={estilo.categoria} >
                <Text  style={estilo.titulos}>Matemática e suas Tecnologias:</Text>
                <Text  style={estilo.textos}>- Álgebra.</Text >
                <Text  style={estilo.textos}>- Geometria.</Text>
                <Text  style={estilo.textos}>- Trigonometria.</Text>
                <Text  style={estilo.textos}>- Estatística e probabilidade.</Text>
                <Text  style={estilo.textos}>- Análise de gráficos e tabelas.</Text>
                
                </View>
            </View>
            <View style={estilo.espacotaxtos}>
                <View  style={estilo.categoria}>
                <Text style={estilo.titulos}>Ciências Humanas e suas Tecnologias:</Text>
                <Text  style={estilo.textos}>- História do Brasil e do mundo.</Text>
                <Text  style={estilo.textos}>- Geografia política, econômica e cultural.</Text>
                <Text  style={estilo.textos}>- Sociologia</Text>
                <Text  style={estilo.textos}>- Filosofia.</Text>
                <Text  style={estilo.textos}>- Atualidades e contextos sociais.</Text>
              
                </View >
                <View style={estilo.categoria} >
                <Text  style={estilo.titulos}>Ciências da Natureza e suas Tecnologias:</Text>
                <Text  style={estilo.textos}>- Biologia celular e molecular.</Text >
                <Text  style={estilo.textos}>- Ecologia.</Text>
                <Text  style={estilo.textos}>- Física (mecânica, termodinâmica, óptica, etc.).</Text>
                <Text  style={estilo.textos}>- Química (química geral, orgânica e inorgânica).</Text>
                <Text  style={estilo.textos}>- Aplicação dos conceitos científicos em situações do cotidiano.</Text>
                </View>
            </View>
           
            
          </View>
        </View>
      </View>
    </View>
  );
}

import  { useEffect } from 'react';
import { View, Text, Pressable} from 'react-native';
import { estilo } from './style';
import * as Font from 'expo-font';
import Cabecalho from '../../components/header';
import { useState } from 'react';

// Importe a fonte
import KollektifBold from '../../assets/fonts/Kollektif-Bold.ttf';
import Kollektif from '../../assets/fonts/Kollektif.ttf';

export default function Conteudorel() {
  // Registre a fonte
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


    <View style={estilo.root}>
        <Cabecalho/>
      <View style={estilo.espacopv}>

      <View style={estilo.espacobt}>
            <Text style={estilo.text}>Enem</Text>
                <Pressable style={estilo.butao} ><Text style={estilo.textinho}>Provas</Text></Pressable>
                <Pressable style={estilo.butao} ><Text style={estilo.textinho}>Informações gerais</Text></Pressable>
                <Pressable style={estilo.butao}><Text style={estilo.textinho}>Conteúdo relevante</Text></Pressable>
                <Pressable style={estilo.butao}><Text style={estilo.textinho}>Questões</Text></Pressable>
            </View>
       
        <View>
          <Text style={estilo.textStyle}>Conteúdo Relevante</Text>
          <View style={estilo.espacopv1}>
            <View style={estilo.espacotaxtos}>
                <View style={estilo.categoria} >
                <Text style={estilo.titulos}> Linguagens, Códigos e suas Tecnologias</Text>
                <Text  style={estilo.textos}>- Interpretação de textos literários e não literários.                </Text>
                <Text  style={estilo.textos}>- Gramática normativa e linguística.</Text>
                <Text  style={estilo.textos}>- Produção textual.</Text>
                <Text  style={estilo.textos}>- Literatura brasileira e portuguesa.</Text>
                <Text  style={estilo.textos}>- Língua estrangeira (inglês ou espanhol).</Text>
               
                </View>
                <View style={estilo.categoria} >
                <Text  style={estilo.titulos}>Matemática e suas Tecnologias:</Text>
                <Text  style={estilo.textos}>- Álgebra.</Text >
                <Text  style={estilo.textos}>- Geometria.</Text>
                <Text  style={estilo.textos}>- Trigonometria.</Text>
                <Text  style={estilo.textos}>- Estatística e probabilidade.</Text>
                <Text  style={estilo.textos}>- Análise de gráficos e tabelas.</Text>
                
                </View>
            </View>
            <View style={estilo.espacotaxtos}>
                <View  style={estilo.categoria}>
                <Text style={estilo.titulos}>Ciências Humanas e suas Tecnologias:</Text>
                <Text  style={estilo.textos}>- História do Brasil e do mundo.</Text>
                <Text  style={estilo.textos}>- Geografia política, econômica e cultural.</Text>
                <Text  style={estilo.textos}>- Sociologia</Text>
                <Text  style={estilo.textos}>- Filosofia.</Text>
                <Text  style={estilo.textos}>- Atualidades e contextos sociais.</Text>
              
                </View >
                <View style={estilo.categoria} >
                <Text  style={estilo.titulos}>Ciências da Natureza e suas Tecnologias:</Text>
                <Text  style={estilo.textos}>- Biologia celular e molecular.</Text >
                <Text  style={estilo.textos}>- Ecologia.</Text>
                <Text  style={estilo.textos}>- Física (mecânica, termodinâmica, óptica, etc.).</Text>
                <Text  style={estilo.textos}>- Química (química geral, orgânica e inorgânica).</Text>
                <Text  style={estilo.textos}>- Aplicação dos conceitos científicos em situações do cotidiano.</Text>
                </View>
            </View>
           
            
          </View>
        </View>
      </View>
    </View>
  );
}
