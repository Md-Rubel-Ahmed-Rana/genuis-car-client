import { React } from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const { _id, title, price } = useLoaderData();


    const handlePlaceOrder = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`
        const phone = form.phone.value
        const email = form.email.value
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }

        fetch("https://genius-car-server-zeta-sage.vercel.app/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("genius-token")}`
            },
            body: JSON.stringify(order)
        })
            .then((res) => res.json())
            .then(() => {
                alert("Order placed successfully");
                form.reset()
            })
            .catch((err) => console.log(err))
    }




    return (
        <div className='conatainer my-5'>
            <form onSubmit={handlePlaceOrder} className='w-100'>
                <div className='text-center'>
                    <h4>You are about to {title}</h4>
                    <p>Price: {price}</p>
                </div>
                <div className='d-flex justify-content-between m-2'>
                    <input type="text" name="firstName" className='w-100 mx-2 py-1 px-2' id="firstName" placeholder='First Name' />
                    <input type="text" name="lastName" className='w-100 mx-2 py-1 px-2' id="lastName" placeholder='Last Name' />
                </div>
                <div className='d-flex justify-content-between m-2'>
                    <input type="text" name="phone" className='w-100 mx-2 py-1 px-2' id="phone" placeholder='Phone' />
                    <input type="email" name="email" className='w-100 mx-2 py-1 px-2' id="email" placeholder='Email' />
                </div>
                <div className='text-center px-3'>
                    <textarea placeholder='Your message' className='w-100 p-2' name="message" id="message" cols="40" rows="3"></textarea>
                </div>
                <div className='text-center'>
                    <button type='submit' className="btn btn-warning py-1 px-3 mx-auto w-50">Order Confirm</button>
                </div>
            </form>
        </div>
    );
};

export default Checkout;