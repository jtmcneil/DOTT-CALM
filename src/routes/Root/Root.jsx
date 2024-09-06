import { Outlet } from "react-router-dom";
import SideBar from "../../components/Sidebar/SideBar";
import "./Root.css";
import BottomBar from "../../components/BottomBar/BottomBar";

export default function Root() {
    return (
        <div id="Root">
            <SideBar />
            <main>
                <Outlet />
                <BottomBar />
            </main>
        </div>
    );
}
