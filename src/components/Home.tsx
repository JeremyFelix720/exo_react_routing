import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

export default function Home(){

    const navigate = useNavigate();

    return (
        <>
            <h1>Hello world!</h1>
            <Link to ="/about">About</Link>
            <button onClick={() => navigate("/connexion")}>Se connecter</button>
        </>
    )
}