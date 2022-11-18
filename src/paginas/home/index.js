import React,{useState,useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,FlatList,Image,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from '../../firebase/firebaseConnection'
import CardAlunos from '../../components/cardAluno';

export default function Home() {
  

  const [alunos,setAlunos] = useState([]);
  



  useEffect(()=>{


    async function buscarAlunos(){


    await firebase.database().ref('Alunos').on('value',(snapshot) =>{


      setAlunos([]);
      snapshot.forEach( (childItem) =>{
        let data = {
          key : childItem.key,
          Nome : childItem.val().Nome,
          Nota1 : childItem.val().Nota1,
          Nota2 : childItem.val().Nota2,
          Nota3 : childItem.val().Nota3,
          Imagem: childItem.val().Imagem
        }
        setAlunos(alunos => [...alunos,data]); 
      })

    })
     

    }


    buscarAlunos();

  },[])

  return (

    <View style = {styles.container}>
      <Text style={{fontSize:30,fontWeight:'bold',}}> LISTA DE ALUNOS  </Text>


      <FlatList 
      
      data = {alunos}
      numColumns = {2}
      keyExtractor = { (item) => item.key}
      renderItem = { ( ({item}) => <CardAlunos data = {item}></CardAlunos>)}
      
      
      />




    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#F0F8FF'
  },
  imagems:{
    width:"70%",
    height:90,
    borderRadius:8
  },
  containerAlunos: {
    height:160,
    width:180,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:40,
    marginLeft:5,
    borderWidth:2,
    borderRadius:8
  }
});
