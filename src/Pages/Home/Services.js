import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Services.css"

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("https://genius-car-server-zeta-sage.vercel.app/services")
            .then((res) => res.json())
            .then((data) => setServices(data))
    }, [])

    return (
        <div>
            <div className='text-center'>
                <h3 className="text-warning">Service</h3>
                <h2>Our Service Area</h2>
                <p className='w-50 mx-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam consequuntur quidem et pariatur aut ab vitae incidunt reprehenderit nemo quo.</p>
            </div>
            <div className='services my-2'>
                {
                    services.map((service) => <div className='service shadow' key={service._id}>
                        <img className='img-fluid' src={service.img} alt="" />
                        <h3>{service.title}</h3>
                        <p>Price: ${service.price}</p>
                        <Link to={`/checkout/${service._id}`}>
                            <button className="btn btn-primary">Buy Now</button>
                        </Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;