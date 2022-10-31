
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { callApi } from "../api";

import RoutinesByUser from "./RoutinesByUser";

function MyProfile({ user, token}) {

    const [error, setError] = useState('');

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
                                    <Link to="/routines">Create a routine</Link>

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
                        <div className="container">
                            <h1 className="text-center text-light bg-secondary">My routines</h1>
                            {/* <div>
                                <div className='container'>
                                    <div className='container'>
                                        <div className="card" >
                                            <div className="card-body">
                                                <h2 className="card-title">Routine name: {myRoutines.name}</h2>
                                                <div>
                                                    {activities.map(activity => <Activity key={activity.id} activity={activity} />)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            {<RoutinesByUser token={token} user={user} />}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyProfile;