import React from 'react'
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';


const mapStyles = {
  width: '100%',
  height: '100%'
};

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      latitude : 0 ,
      longitude : 0 
    }
  }
  
  componentDidMount(){
    navigator.geolocation.getCurrentPosition((position)=>{
      // console.log(position)
      this.setState({
        latitude : position.coords.latitude,
        longitude : position.coords.longitude
      })
      console.log(this.state.latitude, this.state.longitude)
    },
    (err)=>{console.log(err.code + " "+ err.message)})
  }



  render(){
    return(
      <React.Fragment>
        <p>lOCATION App</p>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: this.state.latitude,
            lng: this.state.longitude
          }}
        ></Map>
        
      </React.Fragment>
    )
  }
}




export default GoogleApiWrapper({
  apiKey: ("YOUR_API_KEY")
}) (App);
