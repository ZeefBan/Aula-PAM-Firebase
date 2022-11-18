import React from 'react';
import {Image,View,TouchableOpacity,StyleSheet,Text} from 'react-native'



export default function CardAlunos({data}){

    return (

        <TouchableOpacity style={estilo.Container}>

            <Image style = {estilo.Imagem} source = {{ uri: data.Imagem}}></Image>
            <Text>{data.Nome}</Text>

        </TouchableOpacity>

    );


}

const estilo =  StyleSheet.create({

    Container:{
        margin:10,
        width: 150,
        height:150,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "#ffff"
    }
    ,
    Imagem :{

       width:120,
       height:120

    }





})