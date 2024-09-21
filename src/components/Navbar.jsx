import { Link } from "react-router-dom";
export default function Navbar () {
    return(
        <nav>
            <h1>Example Navbar Title</h1>
            <Link to={"/"}>Go To Home</Link>
        </nav>
    );
}