import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Root.css";

export default function Root() {
    return (
        <div id="Root">
            <Sidebar />
            <main>
                <Outlet />
            </main>
        </div>
    );
}
