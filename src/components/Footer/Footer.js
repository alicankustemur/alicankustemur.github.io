import React, {Component} from 'react';
const aStyle = {
    "paddingLeft": "4px"
}

const footerText = "ali can kuştemur ~ copyleft while( !© ){ print(\"hiçbir hakkı saklı değildir,bilgi paylaştıkça çoğalır\"); }";

export default class App extends Component {
    render() {
        return (
                <footer className="footer-distributed col-lg-12 col-md-12 col-sm-12">
                    <div className="footer-right">
                        <a>
                            <img src={this.props.logo} className="img-responsive" alt=""
                                 onClick={this.props.goToPath.bind(this, "/")} style={{"cursor": "pointer"}}/>
                        </a>
                    </div>
                    <div className="footer-left">
                        <p className="footer-links">
                            <a href="#skills">· yetenekler</a>
                            <a href="#about" style={aStyle}>· hakkımda</a>
                            <a href="#contact" style={aStyle}>· iletişim</a>
                        </p>
                        <p>{footerText}</p>
                    </div>
                </footer>
        )
    }
}