
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { callApi } from "../api";

const AccountForm = ({ setToken }) => {
    const navigate = useNavigate();
    const { action } = useParams();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const path = (action === "login" ? 'users/login' : 'users/register')
            const { token } = await callApi({ method: 'POST', path: path, body: { username, password } });
            setToken(token);
            navigate('/users/me');
        } catch (error) {
            console.log(error);
            setError(error);
        }
    }

    return (
        <div className="card">
            <div className="container">
                <h1 className="text-center text-light bg-secondary">{action === 'login' ? 'Log In' : 'Sign Up'}</h1>

                <form onSubmit={handleSubmit}>
                    {/* <!-- Email input --> */}
                    <div className="form-outline mb-4">
                        <input type="username" id="form2Example1" className="form-control" value={username} onChange={(event) => setUsername(event.target.value)} />
                        <label className="form-label" htmlFor="form2Example1">Username</label>
                    </div>

                    {/* <!-- Password input --> */}
                    <div className="form-outline mb-4">
                        <input type="password" id="form2Example2" className="form-control" value={password} onChange={(event) => setPassword(event.target.value)} />
                        <label className="form-label" htmlFor="form2Example2">Password</label>
                    </div>

                    {/* <!-- Submit button --> */}
                    <button type="submit" className="btn btn-primary btn-block mb-4">{action === 'login' ? 'Log In' : 'Sign Up'}</button>

                    {/* <!-- Error message --> */}
                    {error && 
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>}

                </form>

            </div>
        </div>
    )
}

export default AccountForm;
