import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user, logOut } = useContext(AuthContext);
    const [orders, setOrder] = useState([])


    useEffect(() => {
        fetch(`https://genius-car-server-zeta-sage.vercel.app/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("genius-token")}`
            }
        })
            .then((res) => {
                if (res.status === 403 || res.status === 401) {
                    localStorage.removeItem("genius-token")
                    logOut()
                }
                return res.json()
            })
            .then((data) => {
                setOrder(data)
            })
    }, [user?.email, logOut])

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you suren you want to cancel this order?");

        if (proceed) {
            fetch(`https://genius-car-server-zeta-sage.vercel.app/orders/${id}`, {
                method: "DELETE",
                authorization: `Bearer ${localStorage.getItem("genius-token")}`
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        const remaining = orders.filter((odr) => odr._id !== id);
                        setOrder(remaining)
                    }
                })
                .catch((error) => console.log(error))
        }

    }

    const handleStatusUpdate = (id) => {
        fetch(`https://genius-car-server-zeta-sage.vercel.app/orders/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("genius-token")}`
            },
            body: JSON.stringify({ status: "Approved" })
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    const remaining = orders.filter((odr) => odr._id !== id);
                    const approving = orders.find((odr) => odr._id === id);
                    approving.status = "Approved"
                    const newOrders = [approving, ...remaining]
                    setOrder(newOrders)
                }
            })
            .catch((error) => console.log(error))
    }

    return (
        <div>
            <h3>This is orders page: {orders.length}</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Remove</th>
                        <th>Serial</th>
                        <th>Avatar</th>
                        <th>customer</th>
                        <th>serviceName</th>
                        <th>Phone</th>
                        <th>Price</th>
                        <th>Email</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => <OrderRow
                            key={order._id}
                            order={order}
                            index={index}
                            handleDelete={handleDelete}
                            handleStatusUpdate={handleStatusUpdate}
                        />)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default Orders;