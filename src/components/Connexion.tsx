import { useCallback, useState } from "react";
//import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

export default function Connexion(){
    const [pseudo, setPseudo] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleChangePseudo = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setPseudo(e.target.value)
    }, [pseudo]) // la fonction handleChangePseudo ne s'execute que lorsque la valeur "pseudo" change.

    const handleChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }, [password]) // la fonction handleChangePassword ne s'execute que lorsque la valeur "password" change.

    const handleSubmit = useCallback(() => {

        if(pseudo == "admin" && password == "safeAdmin") {
            navigate("/home")
        }

    }, [pseudo, password, navigate])

    return (
        <>
            <h1>Connexion</h1>
            <div className="connexion_form">
                <div>
                    <label>Pseudonyme : </label>
                    <input type="text" onChange={handleChangePseudo} value={pseudo}></input>
                </div>
                <div>
                    <label>Mot de passe : </label>
                    <input type="password" onChange={handleChangePassword} value={password}></input>
                </div>
                <button onClick={handleSubmit}>Se connecter</button>
            </div>
        </>
    )
}