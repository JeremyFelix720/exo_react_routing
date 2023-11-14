import { Link } from "react-router-dom"

export default function Home(){

    return (
        <>
            <h1>Hello world!</h1>
            <Link to ="/about">About</Link>
        </>
    )
}