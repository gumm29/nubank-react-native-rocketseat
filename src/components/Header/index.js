import React from 'react'
import { Container, Top, LogoI, Title } from './styles'
import Logo from '../../assets/Nubank_Logo.png'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Home(){
  return(
    <Container>
      <Top>
        <LogoI source={Logo} />
        <Title>Gustavo</Title>
      </Top>
      <Icon name='arrow-drop-down' size={20} color="#fff" />
    </Container>
  )
}