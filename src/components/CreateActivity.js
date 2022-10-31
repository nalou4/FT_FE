import { useState } from "react";
import { callApi } from "../api";

function CreateActivity({ setActivities, token }) {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const newActivity  = await callApi({ method: 'POST', path: "activities/", token, body: {
                name, 
                description
            }});
            setActivities((prev) => [newActivity, ...prev]);
            setName("");
            setDescription("");
        } catch (error) {
            console.log(error);
            setError(error);
        }
    }

    return (
        <div className="card">
            {token &&
                <div className="container">
                    <div className="container">
                        <h2 className="text-center">Create an activity</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Activity name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="exampleFormControlInput1"
                                    onChange={(event) => setName(event.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Activity description</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="exampleFormControlInput1"
                                    onChange={(event) => setDescription(event.target.value)}/>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block mb-4">Submit</button>
                            {error &&
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>}
                        </form>
                    </div>
                </div>}
        </div>
    )
}

export default CreateActivity;