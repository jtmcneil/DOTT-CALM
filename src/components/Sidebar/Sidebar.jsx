import { Link } from "react-router-dom";
import "./SideBar.css";

export default function SideBar() {
    return (
        <nav id="SideBar" className="">
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
