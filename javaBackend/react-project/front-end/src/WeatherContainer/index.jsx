import React, {Component} from "react";
import Weather from "../Weather";
import { Redirect } from "react-router-dom";

const DarkSkyAPIkey = "54027aaa136404819ab799aaa96235ce";
const googleAPIkey = "AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg";
const proxyurl = "https://cors-anywhere.herokuapp.com/";

export default class WeatherContainer extends Component {
    constructor(){
        super();
        this.state = {
            city: "",
            lat: "",
            long: "",
            // values given
            apparentTemperature: "",

            // values to be calculated
            hot: false,
            top: "",
            bottom: "",
            jacket: false,
            wetGear: false,
            snowGear: false
        }
    }
    getCityInfo = async () => {
        console.log(this.props.location);
        const fetchURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + this.props.location + "&key=" + googleAPIkey + "&type=json";
        console.log(fetchURL);
        try {
            const cityInfo = await fetch(proxyurl + fetchURL);
            const parsedCityInfo = await cityInfo.json();
            console.log(parsedCityInfo);
            this.setState({
                city: parsedCityInfo.results[0].address_components[1].long_name,
                lat: parsedCityInfo.results[0].geometry.location.lat,
                long: parsedCityInfo.results[0].geometry.location.lng,
            });
            console.log("GOT HERE")
            const weatherURL = "https://api.darksky.net/forecast/" + DarkSkyAPIkey + "/" + this.state.lat + "," + this.state.long;
            console.log("GOT HERE 2")
            console.log(weatherURL);
            const weather = await fetch(proxyurl + weatherURL);
            const parsedWeather = await weather.json();
            console.log("GOT HERE 3")
            console.log(parsedWeather)
            return parsedWeather;
        }catch(err){
            console.log(err)
        }
    }
    componentDidMount(){
        if(this.props.loggedIn){
        this.getCityInfo().then((weather) => {
            this.setState({
                apparentTemperature: weather.currently.apparentTemperature,
            })
        })}
    }
    render(){
        console.log(this.props.username)
        return(
            <div>
                {this.props.loggedIn ? <div/> : <Redirect to="/"/>}
                {this.state.apparentTemperature ? <Weather 
                    temp={this.state.apparentTemperature} 
                    city={this.state.city} 
                    username={this.props.username}
                /> : <p>Getting weather data...</p>}
            </div>
        )
    }
}

// if it's raining (or probably going to rain), they'll need a coat
// if apparent Temp is over 75, tell them "it's shorts weather" and show a nice pair of shorts
// 