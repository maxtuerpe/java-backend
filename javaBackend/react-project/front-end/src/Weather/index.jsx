import React, {Component} from "react";
import {Button, Alert, Container, Row, Col } from "reactstrap";
import shorts from "../img/shorts.png";
import santa from "../img/santa.png";
import jeans from "../img/jeans.png";
import jacket from "../img/jacket.png";

export default class Weather extends Component {
    constructor(){
        super();
        this.state = {
            clothingFromTemp: null,
            clothingImage: null
        }
    }
    componentDidMount(){
        if(this.props.temp > 75){
            this.setState({
                clothingFromTemp: "It's shorts weather.",
                clothingImage: shorts
            })
        }
        else if(this.props.temp < 75 && this.props.temp > 65){
            this.setState({
                clothingFromTemp: "It's normal-clothes weather.",
                clothingImage: jeans
            })
        }
        else if(this.props.temp < 65 && this.props.temp > 45){
            this.setState({
                clothingFromTemp: "Make sure you grab a jacket.",
                clothingImage: jacket
            })
        }
        else if(this.props.temp < 45){
            this.setState({
                clothingFromTemp: "It's cold af.",
                clothingImage: santa
            })
        }
    }
    render(){
        return(
            <div className="big-container">
                <Container>
                    <Row><div className="spacer"></div></Row>
                    <Row>
                        <Col>
                    <h1>Hi, {this.props.username}!</h1>
                    <div className="spacer"/>
                    </Col>
                    </Row>
                    <Row>
                        <Col><h2 className="title">In {this.props.city}...</h2></Col>
                        <Col></Col>
                        <Col></Col>
                        <div className="spacer" />
                    </Row>
                    <Row>
                        <Col xs="4">
                            <div className="weather-box">
                                <p>It's {this.props.temp}°F.</p>
                            </div>
                        </Col>
                        <Col xs="8">
                            <div className="clothing-box">
                                <p>{this.state.clothingFromTemp}</p>
                                <div className="clothing-image">
                                    <img src={this.state.clothingImage}/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}