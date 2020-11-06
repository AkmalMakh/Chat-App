import React, {Component} from 'react'
import {View,Text ,StyleSheet ,Image,Button} from 'react-native'
import config from '../../config';



class Home extends Component{
  constructor(){
    super()
      this.state= {
        showActivityIndicator: true,
        messages: []
      };
  }
    componentDidMount(){

    return fetch(`${config.baseUrl}api/message`,{
      method: "GET", 
      headers:{
        Accept: "application/json",
        "Content-type": "application/json"
      }
    })
    .then((response)=>{
      console.log(response);
      return response.json();
    })
    .then((responseJson)=>{
       this.setState({messages: responseJson.data, showActivityIndicator: false});
    })
    .catch(err =>{
      console.log(err.message);
      this.setState({ showActivityIndicator: false})
    });
  }   
    render(){
      

      const { messages } = this.state;
    
        const lastIndex = messages.length - 1;
       return(
         
            <View style={style.container}>
            
       
              <Text style={style.header}>Logo</Text>  
              
              <View style={style.container2}>
                 <Text style={style.icon_text}> Messages</Text>
                <Image style={style.icon} source={require('../../assets/8.png')} /> 

              </View>

              <Button
          title="Add some friends"
          onPress={() =>
            this.props.navigation.navigate('Login')
          }
      
        />
          
            </View>
        )
    }

}

const style ={
    container: {
        width: 100+"%",
        height: 100+"%",
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
       
       
    },
    container2: {
      flexDirection: 'row-reverse',
      bottom: 300,
      right: 100,
      
   
    },
    
    header: {
      top: 120,
      fontSize: 50,
      color: '#363A44',
      textAlign: 'center',
      fontWeight: 'bold',
      flex: 1,
      marginTop: 180
    
    },
    icon_text:{
      top:10,
      fontSize: 30,
      color: '#363A44',
      justifyContent: "flex-start"
    

    },
    icon: {
      
      justifyContent: "flex-end"
      
    },

}

export default Home