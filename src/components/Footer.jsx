import { Container, Row, Col } from 'reactstrap';
import logo from '../assets/webpage-logo.png';

const Footer = () => {
    return(
        <section id='footer'>
            <Container>
                <Row>
                    <Col lg='6' md='6' sm='12' xs='12'>

                        <div className='footer-logo'>
                            <img src={logo} alt=''/>
                        </div>
                    </Col>
                    <Col lg='6' md='6' sm='12' xs='12'>
                        <ul className='footer-social'>

                            <li className='footer-item'>
                                <a href='mailto:cnrates@gmail.com'>
                                    Contact
                                </a>
                            </li>
                            <li className='footer-item'>
                            <a href=''>
                                    Privacy
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col lg='12'>
                        <p> © 2024 Moble AR</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Footer;