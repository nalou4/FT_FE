
import { useState } from "react";
import { Link } from "react-router-dom";
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
                                    <Link to="/user/routines">Create a routine</Link>
                                    
                                </div>
                            </div>}


                    </div>
                    <div>
                        {token && 
                            <div className="container">
                                <div className="container">
                                    <h2 className="text-center">Create an activity</h2>

                                    <Link to="/activities">Create an activity</Link>
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