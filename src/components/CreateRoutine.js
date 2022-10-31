import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { callApi } from '../api';

const CreateRoutine = ({ setRoutines, token}) => {
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');
    const [isPublic, setIsPublic] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newRoutine = await callApi({ token, method: 'POST', path: "routines", body: {
                name, 
                goal, 
                isPublic 
            }});
            // setRoutines((prev) => [newRoutine, ...prev]);
            setName("");
            setGoal("");
            setIsPublic(false);
            navigate("/users/me");
        } catch (error) {
            console.log(error);
            setError(error);
        }
    }

    return (
        <div>
        <div>
            {token && 
                <div className="container">
                    <div className="container">
                        <h2 className="text-center">Create a routine</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Routine name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1"
                                onChange={(e) => setName(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Routine goal</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"onChange={(e) => setGoal(e.target.value)}/>
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Make public</label>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block mb-4">Submit</button>
                        </form>
                    </div>
                </div>}
            </div>
        <div>
            {error && 
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>}
        </div>
        </div>
    )}


export default CreateRoutine;