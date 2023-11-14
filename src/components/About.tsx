//import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

export default function About(){
    const navigate = useNavigate();
    return (
        <>
            <h1>About</h1>
            <button onClick={() => navigate("/")}>Home</button>
        </>
    )
}