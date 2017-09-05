import React, {Component} from 'react';
import {Col} from "react-bootstrap";
import Contact from "./Contact";


import "./LeftSidebar.css";
import Skills from "./Skills";
import Blogroll from "./Blogroll";

export default class LeftSidebar extends Component {

    constructor() {
        super();

        this.state = {
            developer: "ali can kuştemur",
            title: "java developer",
            about: "93 mersin doğumlu, çocukluğunu bilgisayar oyunlarına ve gençliğini " +
            "bilgisayar programlarına adamış bir programcı.plak ve hüzün koleksiyoncusu, " +
            "kahvesever.önceleri müzik prodüktörlüğü ile uğraşıp, bir eğitim seti oluşturan " +
            "ve türkiye'nin birçok iline 100'lerce dvd gönderen emektar.artık sadece kodların " +
            "notalarını çalmak istiyor."
        }

    }

    render() {
        return (
            <div>
                <Col lg={3} md={3} sm={12} className="left-sidebar">
                    <br/><br/>
                    <div className="center">
                        <img src={this.props.logo} className="logo" alt="" onClick={this.props.goToPath.bind(this,"/")} style={{"cursor":"pointer"}} />
                    </div>
                    <h5 className="center">{this.state.developer}</h5>
                    <h6 className="center">{this.state.title}</h6>
                    <a href="" id="about" ><div/></a>
                    <hr className="soften"/>
                    <h5>hakkımda</h5>
                    <p>{this.state.about}</p>
                    <a href="" id="contact" ><div/></a>
                    <hr className="soften"/>
                    <Contact/>
                    <hr className="soften"/>
                    <a href="" id="skills"><div/></a>
                    <Skills/>
                    <hr className="soften"/>
                    <Blogroll/>
                </Col>
            </div>
        );
    }


}
