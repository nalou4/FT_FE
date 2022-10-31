import { Link } from 'react-router-dom';
import Activity from './Activity';

const Routine = ({ routine }) => {

    const { activities } = routine;

    return (
        <>
            <div className='container'>
                <div className='container'>
                    <div className="card" >
                        <div className="card-body">
                            <h2 className="card-title">Routine name: {routine.name}</h2>
                            <h3 className="card-subtitle mb-2 text-muted">Creator: {routine.creatorName}</h3>
                            <p className="card-text">Goal: {routine.goal}</p>
                            <div>
                                {activities?.map(activity => <Activity key={activity.id} activity={activity} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Routine;