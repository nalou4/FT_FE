

import { useState, useEffect } from "react";
import { callApi } from "../api";
import Routine from "./Routine";

const RoutinesByUser = ({token, user}) => {

    const [userRoutines, setUserRoutines] = useState([]);

    // {activities, setActivities, routines, setRoutines, userRoutines, setUserRoutines, token, user}

    // console.log('hello');

    // console.log('props :>> ', props);

    const [error, setError] = useState('');

    useEffect(() => {
        const getUserRoutines = async () => {
            try {
                console.log('user :>> ', user);
                console.log('token :>> ', token);
                const path = `users/${user.username}/routines`
                const routines = await callApi({token, path: path });
                console.log('routines :>> ', routines);
                setUserRoutines(routines);
            } catch (error) {
                console.log(error);
                setError(error)
            }
        }
        getUserRoutines();
    }, [setUserRoutines, user]);

    // const userRoutines = routines.filter(routine => user.username === routine.creatorName);

    return (
        <div>
            <h1>My Routines</h1>
            {
                userRoutines.map(routine => {
                    return <Routine key={routine.id} routine={routine} />
                })
            }
        </div>
    )
}

export default RoutinesByUser;