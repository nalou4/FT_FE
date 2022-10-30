import { Link } from "react-router-dom"

const Home = ({ user }) => {
    return (
        <div className="text-center">
            <main className="container">
                <div className="starter-template">
                    <h1 className="text-light bg-secondary">Welcome to Fitness Trackr!</h1>
                    {!user && (
                        <p className="lead">
                            <Link to="/users/:action" className="button" id="home-link" >Click here to Get Started </Link>
                        </p>
                    )}
                </div>
            </main>
        </div>
    )
}

export default Home;