import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Container, Content, Card, CardHeader, CardContent, Title, Description, CardFooter, Annotation } from './styles'
import { Animated } from 'react-native'
import { PanGestureHandler, State } from 'react-native-gesture-handler'
import Header from '../../components/Header'
import Menu from '../../components/Menu'
import Tabs from '../../components/Tabs'

export default function Main(){
  let offset = 0
  const translateY = new Animated.Value(0)
  
  const animatedEvent = Animated.event(
    [
      { nativeEvent: {
        translationY: translateY
        }
      }
    ], { useNativeDriver: true } 
  )

  function handlerEvent(event){
    if(event.nativeEvent.oldState === State.ACTIVE){
      let opened = false
      const { translationY } = event.nativeEvent
      offset += translationY
      
      if(translationY >= 100){
        opened = true
      }else{
        translateY.setValue(offset)
        translateY.setOffset(0)
        offset = 0
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true
      }).start(() =>{
        offset = opened ? 380 : 0,
        translateY.setOffset(offset)
        translateY.setValue(0)
      })
    }
  }

  return(
    <Container>
      <Header/>

      <Content>
        <Menu translateY={translateY} />

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={handlerEvent}
        >
          <Card style={{
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [-350, 0, 380],
                outputRange: [-50, 0, 380],
                extrapolate: 'clamp'
              })
            }]
          }}>
            <CardHeader>
              <Icon name="attach-money" size={24} color="#666" />
              <Icon name="visibility-off" size={24} color="#fff" />
            </CardHeader>
            <CardContent>
              <Title>Saldo em Conta:</Title>
              <Description>R$ 200.000,00</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                Transferencia recebida no valor de R$10,00
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>

      <Tabs translateY={translateY}/>
    </Container>
  )
}