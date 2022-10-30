import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { callApi } from "../api";

import Home from "./Home";
import Navigation from "./Navigation";
import Activity from "./Activity";
import Activities from "./Activities";
import AccountForm from "./AccountForm";
import MyProfile from "./MyProfile";
import Routines from "./Routines";
import RoutinesByUser from "./RoutinesByUser"

const App = () => {

    const [activities, setActivities] = useState([]);
    const [token, setToken] = useState(window.localStorage.getItem('token') || "");
    const [user, setUser] = useState(null);
    const [routines, setRoutines] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        window.localStorage.setItem("token", token);
    }, [token]);

    useEffect(() => {
        const getActivities = async () => {
            try {
                const activities = await callApi({ path: "activities" });
                setActivities(activities);
            } catch (error) {
                console.log(error);
                setError(error);
            }
        };
        getActivities()
    }, [token])
    
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

    useEffect(() => {
        try {
            if (token) {
                const getUser = async () => {
                    try {
                        const user = await callApi({method: "GET", path: "/users/me", token});
                        setUser(user);
                    } catch (error) {
                        console.log(error);
                        setError(error);
                    }
                };
                getUser();
            }
        } catch (error) {
            console.log(error);
            setError(error);
        }
    }, [token])

    return (
        <>
            <Navigation token={token} setToken={setToken} setUser={setUser} />
            <Routes>
                <Route path="/" element={<Home user={user} token={token}/>} />
                <Route path="/users/me" element={<MyProfile routines={routines} setRoutines={setRoutines} setActivities={setActivities} token={token} user={user} />} />
                <Route path="/activities" element={<Activities activities={activities} setActivities={setActivities} token={token} user={user}/>} />
                <Route path="/Activities/:postId" element={<Activity activities={activities} setActivities={setActivities} token={token} user={user} />} ></Route>
                {/* <Route path="/user/routines" element={<RoutinesByUser user={user} routines={routines} setRoutines={setRoutines}/>}></Route> */}
                <Route path="/users/:action" element={<AccountForm setToken={setToken} />}></Route>
                <Route path="/routines" element={<Routines routines={routines} name={name} />}></Route>
                <Route path="/user/routines" element={<RoutinesByUser activities={activities} setActivities={setActivities} routines={routines} setRoutines={setRoutines} user={user} token={token} />}></Route>
            </Routes>
            
        </>
    );
};

export default App;