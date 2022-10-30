import { useState } from 'react';
import { callApi } from '../api';

const CreateRoutine = ({ setRoutines, token}) => {
    const [routineName, setRoutineName] = useState('');
    const [routineGoal, setRoutineGoal] = useState('');
    const [isPublic, setIsPublic] = useState(false);
    const [error, setError] = useState('');

        const handleSubmit = async (event) => {
            event.preventDefault();
            try {
                const { newRoutine } = await callApi({ token, method: 'POST', path: "routines", body: { name: routineName, goal: routineGoal, isPublic } });
                setRoutines((prev) => [newRoutine, ...prev]);
                setRoutineName("");
                setRoutineGoal("");
                setIsPublic(false);
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
                                <input type="text" className="form-control" id="exampleFormControlInput1"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Routine goal</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
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