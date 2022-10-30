const Activity = ({activity}) => {

    return (
        <>
            <div className="container">
                <div className="container">
                    <h5 className="card-title">Activity Name: {activity.name}</h5>
                        <p>Description: {activity.description}</p>
                        {
                            activity.duration && activity.count ?   
                            <ul>
                                <li>Duration: {activity.duration}</li>
                                <li>Count: {activity.count}</li>
                            </ul>
                            :
                            null
                        }

                </div>

            </div>
        </>
    )
}

export default Activity;