import React from 'react'
import { Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutText} from './styles'
import QRCode from 'react-native-qrcode-image'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Menu({ translateY }){
  return(
    <Container styled={{
      opacity: translateY.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1]
      })
    }}>
      <Code>
        <QRCode
          value="https://github.com/gumm29"
          size={80}
          bgColor='#FFFFFF'
          fgColor='#8B10AE'
        />
      </Code>

      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#fff" />
          <NavText>Me ajuda</NavText>
        </NavItem>
        <NavItem>
          <Icon name="person-outline" size={20} color="#fff" />
          <NavText>Meu perfil</NavText>
        </NavItem>
        <NavItem>
          <Icon name="credit-card" size={20} color="#fff" />
          <NavText>Configurar Cartão</NavText>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" size={20} color="#fff" />
          <NavText>Configurações</NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={()=> { }}>
        <SignOutText>Sair do app</SignOutText>
      </SignOutButton>
    </Container>
  )
}