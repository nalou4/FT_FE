
import { useState } from "react";
import { callApi } from "../api";

function MyProfile({ setRoutines, setActivities, token, user }) {
    const [routineName, setRoutineName] = useState('');
    const [routineGoal, setRoutineGoal] = useState('');
    const [isPublic, setIsPublic] = useState(false);
    const [routineError, setRoutineError] = useState('');

    const [activityName, setActivityName] = useState('');
    const [activityDescription, setActivityDescription] = useState('');
    const [activityError, setActivityError] = useState('');

    if (!user) return null;

    const handleRoutineSubmit = async (event) => {
        event.preventDefault();
        try {
            const { newRoutine } = await callApi({ token, method: 'POST', path: "routines", body: { name: routineName, goal: routineGoal, isPublic } });
            setRoutines((prev) => [newRoutine, ...prev]);
            setRoutineName("");
            setRoutineGoal("");
            setIsPublic(false);
        } catch (error) {
            console.log(error);
            setRoutineError(routineError);
        }
    }

    const handleActivitySubmit = async (event) => {
        event.preventDefault();
        try {
            const { newActivity } = await callApi({ token, method: 'POST', path: "activities", body: { name: activityName, description:activityDescription } });
            setActivities((prev) => [newActivity, ...prev]);
            setActivityName("");
            setActivityDescription("");
        } catch (error) {
            console.log(error);
            setActivityError(activityError);
        }
    }

    return (
        <div>
            <div className="container">
                <div className="starter-template">
                    <h1 className="text-center">My Fitness Tracker Home</h1>
                    <div className="text-center text-light bg-secondary">
                        {user && (
                            <p className="lead">
                                Logged in as {user.username}
                            </p>
                        )}
                    </div>
                    <div>
                        {token && 
                            <div className="container">
                                <div className="container">
                                    <h2 className="text-center">Create a routine</h2>
                                    <form onSubmit={handleRoutineSubmit}>
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
                                        {routineError && 
                                        <div className="alert alert-danger" role="alert">
                                            {routineError}
                                        </div>}
                                    </form>
                                </div>
                            </div>}


                    </div>
                    <div>
                        {token && 
                            <div className="container">
                                <div className="container">
                                    <h2 className="text-center">Create an activity</h2>
                                    <form onSubmit={handleActivitySubmit}>
                                        <div className="form-group">
                                            <label htmlFor="exampleFormControlInput1">Activity name</label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleFormControlTextarea1">Activity description</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-block mb-4">Submit</button>
                                        {activityError && 
                                        <div className="alert alert-danger" role="alert">
                                            {activityError}
                                        </div>}
                                    </form>
                                </div>
                            </div>}
                    </div>
                    <div>
                        {/* {
                            user.routines.filter((post) => post.active).map((p) => (
                                <RoutinesByUser key={p.id} post={p}/>
                            ))
                        } */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyProfile;