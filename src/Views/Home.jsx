import React from 'react';
import { View,Text,ScrollView } from 'react-native';
import Membro from  '../Components/Membro'
// import { Container } from './styles';

const Views = () => {
  return <ScrollView>
    <Membro id = {1} nome ="Jeferson" pontuacao = {3200}></Membro>
    <Membro id = {2} nome = "NOME" pontuacao = 'PONTUACAO'></Membro>
    <Membro id = {3} nome = "NOME" pontuacao = 'PONTUACAO'></Membro>
    <Membro id = {4} nome = "NOME" pontuacao = 'PONTUACAO'></Membro>
    <Membro id = {5} nome = "NOME" pontuacao = 'PONTUACAO'></Membro>
    <Membro id = {6} nome = "NOME" pontuacao = 'PONTUACAO'></Membro>
    <Membro id = {7} nome = "NOME" pontuacao = 'PONTUACAO'></Membro>
    <Membro id = {8} nome = "NOME" pontuacao = 'PONTUACAO'></Membro>
    <Membro id = {9} nome = "NOME" pontuacao = 'PONTUACAO'></Membro>
  </ScrollView>;
}

export default Views;