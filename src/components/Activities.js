import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import CreateActivity from "./CreateActivity";

const Activities = ({ activities, setActivities, token, user }) => {

    const [searchValue, setSearchValue] = useState("");

    const postMatches = (post) => {
        const textToCheck = (
            post.name + post.description
        ).toLowerCase();
        return textToCheck.includes(searchValue.toLowerCase());
    };

    const filteredPosts = activities.filter((post) => {
        return post ? postMatches(post) : false;
    });


    return (
        <div className="container">
            <h2 className="text-center text-light bg-secondary">Find an Activity</h2>
            <div className="container">
                <div className="input-group">
                    <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon"
                        value={searchValue} onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <button type="button" className="btn btn-outline-primary">search</button>
                </div>

                <div>
                    <CreateActivity setActivities={setActivities} token={token} />
                </div>

                <div>
                    {filteredPosts.map((p) => (
                            <div key={p.id} className="card">
                                <div className="card-body">
                                    <h3 className="card-title">{p.name}</h3>
                                    <p className="card-subtitle mb-2 text-muted">{p.description}</p>
                                    <Link className="btn btn-outline-primary" to={`/activities/${p.id}/routines`}>View associated public routines</Link>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default Activities;