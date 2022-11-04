import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../../assets/images/banner/1.jpg"
import img2 from "../../assets/images/banner/2.jpg"
import img3 from "../../assets/images/banner/3.jpg"
import "./Banner.css"

function Banner() {
    return (
        <Carousel>
            <Carousel.Item className='position-relative '>
                <div className="img-gradient">
                    <img
                        className="d-block w-100 rounded-3"
                        src={img1}
                        alt="First slide"
                    />
                </div>
                <div className='text-white position-absolute top-50 start-50'>
                    <h3>
                        Afforsable
                        Price for Car <br />
                        Servicing
                    </h3>
                    <p className='w-50'>There are many variations of passages available, but the majority have suffered in alteration in some form. </p>
                    <Button className='m-2' variant="warning">Warning</Button>
                    <Button variant="warning">Warning</Button>
                </div>
            </Carousel.Item>
            <Carousel.Item className='position-relative'>
                <div className="img-gradient">
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="First slide"
                    />
                </div>
                <div className='text-white position-absolute top-50 start-50'>
                    <h3>
                        Afforsable
                        Price for Car <br />
                        Servicing
                    </h3>
                    <p className='w-50'>There are many variations of passages available, but the majority have suffered in alteration in some form. </p>
                    <Button className='m-2' variant="warning">Warning</Button>
                    <Button variant="warning">Warning</Button>
                </div>
            </Carousel.Item>
            <Carousel.Item className='position-relative'>
                <div className="img-gradient">
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="First slide"
                    />
                </div>
                <div className='text-white position-absolute top-50 start-50'>
                    <h3>
                        Afforsable
                        Price for Car <br />
                        Servicing
                    </h3>
                    <p className='w-50'>There are many variations of passages available, but the majority have suffered in alteration in some form. </p>
                    <Button className='m-2' variant="warning">Warning</Button>
                    <Button variant="warning">Warning</Button>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default Banner;