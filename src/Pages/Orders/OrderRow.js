import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const OrderRow = ({ order, index, handleDelete, handleStatusUpdate }) => {
    const { _id, serviceName, phone, customer, service, price, status } = order;
    const [serviceOrder, serServiceOrder] = useState({})

    useEffect(() => {
        fetch(`https://genius-car-server-zeta-sage.vercel.app/services/${service}`)
            .then((res) => res.json())
            .then((data) => serServiceOrder(data))
    }, [service])


    const style = {
        cursor: "pointer"
    }

    return (
        <tr>
            <Button onClick={() => handleDelete(_id)} variant="outline-danger w-100">Delete</Button>
            <td>{index + 1}</td>
            <td>
                <img style={{ height: "40px", width: "40px", borderRadius: "50%" }} src={serviceOrder.img} alt="" />
            </td>
            <td>{customer}</td>
            <td>{serviceName}</td>
            <td>{phone}</td>
            <td>{price}</td>
            <td>{order.email}</td>
            <td style={style} onClick={() => handleStatusUpdate(_id)} >{status ? status : "Pending"}</td>
        </tr>
    );
};

export default OrderRow;