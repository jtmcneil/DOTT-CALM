import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
    return (
        <nav id="Sidebar" className="">
            <Link to="/" id="title">
                .calm
            </Link>
            <Link to="/" className="nav-link">
                .mp3
            </Link>
            <Link to="/" className="nav-link">
                .mov
            </Link>
        </nav>
    );
}
