import Routine from "./Routine";

const Routines = ({ routines, setRoutines, token, user }) => {

    return (
        <div className="container">
            <h1 className="text-center text-light bg-secondary">Routines</h1>
            <div>
                <div className="card-body">
                    {routines.map(routine => {
                        return <Routine key={routine.id} routine={routine} setRoutines={setRoutines} token={token} user={user} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Routines;