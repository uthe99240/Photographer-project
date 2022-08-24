import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from '../../images/womanCamera.jpg';
import './Home.css';
import { FiFacebook } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';
import { FiLinkedin } from 'react-icons/fi';

const Home = () => {
    return (
        <div className='bg-black pt-5'>
            <Container>
                <Row lg={2} md={1} sm={1} xs={1}>
                    <Col className='text-start py-4 px-5'>
                        <h1 className='fw-bolder text-white'>Hi, I'm <span className='text-danger'>Sumaiya Sanaya</span></h1>
                        <h1 className='fw-bolder text-white'>Photographer</h1>
                        <p className='py-4 text-secondary text-gradient fs-5 fw-semibold '>I design and code beautifully simple things, and I love what I do. I use animation as a third dimension by which
                            Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <p className='pt-5 text-secondary text-gradient'>FIND WITH ME</p>
                        <div className='mt-4'>
                            <a href="https://www.facebook.com" target="_blank"><span className='text-secondary text-gradient bg-dark p-3 rounded-3 me-3'><big><FiFacebook /></big></span></a>
                            <a href="https://www.instragram.com" target="_blank"><span className='text-secondary text-gradient bg-dark p-3 rounded-3 me-3'><big><BsInstagram /></big></span></a>
                            <a href="https://www.linkedin.com" target="_blank"><span className='text-secondary text-gradient bg-dark p-3 rounded-3 me-3'><big><FiLinkedin /></big></span></a>

                        </div>
                    </Col>
                    <Col>
                        <img className='w-100' src={image} alt="" />
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Home;