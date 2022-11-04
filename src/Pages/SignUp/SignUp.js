import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import SignUpLogo from "../../assets/images/login/login.svg"
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

function SignUp() {
    const { createUser } = useContext(AuthContext)
    const handleSignUp = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        
        createUser(email, password )
        .then((result) => {
            const user = result.user;
            console.log(user);
        })
        .catch((error) => {
            console.log(error);
        })
    }
    return (
        <div className='d-flex gap-5 my-5'>
            <div>
                <img src={SignUpLogo} alt="" />
            </div>
            <Form onSubmit={handleSignUp} className='bg-light w-50 p-4'>
                <h4>SignUp Please</h4>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    SignUp
                </Button>
                <p>Already have an account? <Link to="/login">Login</Link> </p>
            </Form>
        </div>
    );
}

export default SignUp;