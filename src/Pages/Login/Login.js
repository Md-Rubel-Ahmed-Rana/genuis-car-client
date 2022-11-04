import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LoginLogo from "../../assets/images/login/login.svg"
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

function Login() {
    const { userLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        userLogin(email, password)
            .then((result) => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }

                fetch("https://genius-car-server-zeta-sage.vercel.app/jwt", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then((res) => res.json())
                    .then((data) => {
                        localStorage.setItem("genius-token", data.token)
                        navigate(from, { replace: true })
                    })
                    .catch((err) => console.log(err))

            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <div className='d-flex gap-5 my-5'>
            <div>
                <img src={LoginLogo} alt="" />
            </div>
            <Form onSubmit={handleLogin} className='bg-light w-50 p-4'>
                <h4>Login Please</h4>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <p className='mb-1'><Link>Forget Password?</Link></p>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <p>New to Genius Car? <Link to="/signup">Sign Up</Link> </p>
            </Form>
        </div>
    );
}

export default Login;