import { Container, Row, Col} from 'reactstrap';
import { AppStoreButton } from "react-mobile-app-button";
import imageHorizontal from '../assets/home-min.png'
import imageVertical from '../assets/home2-min.png';

const Main = () => {
    const iOSUrl = 'https://apps.apple.com/tr/app/moblear-real-time-design-3d/id6479243434'
    return(
        <section id='main'>
            <Container>
                <Row className='row-center'>
                    <Col lg='8' md='8' sm='12' xs='12' className='section-padding-top'>
                        <img src={imageVertical} alt="" className='image-vertical'/>
                        <img src={imageHorizontal} alt="" className='image-horizontal'/>
                    </Col>
                    <Col lg='4' md='4' sm='12' xs='12' className='main-description col-pb-30'>
                        <Row>
                            <h1 className='main-h1'><span className='main-span'>Design</span></h1>
                        </Row>
                        <Row>
                            <h1 className='main-h1'>with your models</h1>
                        </Row>
                        <Row>
                            <p className='details'>Moble AR allows you to upload your own USDZ models and use them to design your real world environment.</p>
                        </Row>
                        <Row>
                            <div className='app-store-button'>
                                <AppStoreButton
                                    url={iOSUrl}
                                    theme={"dark"}
                                    height={60}
                                />
                            </div>
                        </Row>
                    </Col>
                </Row>
                
            </Container>
        </section>
    );
};

export default Main;