

import { useState, useEffect } from "react";
import { callApi } from "../api";
import Routine from "./Routine";
import CreateRoutine from "./CreateRoutine";

const RoutinesByUser = ({ activities, setActivities, routines, setRoutines, user, token}) => {

    const [routinesByUser, setRoutinesByUser] = useState([]);

    useEffect(()=>{
        const getUserRoutines = async () => {
            if (user) {
                const path = `users/${user.username}/routines/`
                const routines = await callApi({path: path})
                console.log('routines :>> ', routines);
                setRoutinesByUser(routines);
            }
        }
        getUserRoutines();
    }, []);

    const userRoutines = routines.filter(routine => user.username === routine.creatorName);

    return (
        <div>
            <h1>Routines</h1>
            {
                routinesByUser.map(routine => {
                    return <Routine key={routine.id} activities={activities} setActivities={setActivities} setRoutines={setRoutines} token={token} user={user}/>
                })
            }
            {<CreateRoutine token={token} setRoutines={setRoutines}/>}
        </div>
    )
}

export default RoutinesByUser;