import CreateRoutine from "./CreateRoutine";
import Routine from "./Routine";
import { callApi } from "../api";

import { useState, useEffect } from "react";

const Routines = ({ token, user }) => {

    const [routines, setRoutines] = useState([]);

    useEffect(() => {
        const getRoutines = async () => {
            try {
                const routines = await callApi({ path: "routines" });
                setRoutines(routines);
            } catch (error) {
                console.log(error);
                setError(error);
            }
        };
        getRoutines()
    }, [token])

    return (
        <div className="container">
            <h1 className="text-center text-light bg-secondary">Routines</h1>
            <div>
                <CreateRoutine setRoutines={setRoutines} token={token} />
            </div>
            <div>
                <div className="card-body">
                    {routines.map(routine => {
                        // console.log('routine :>> ', routine);
                        return <Routine key={routine.id} routine={routine} setRoutines={setRoutines} token={token} user={user} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Routines;