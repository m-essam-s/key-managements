import { Outlet } from "react-router";
import Navbar from "./Navbar";

const Layout = () => {
    return (
        <main className="flex flex-col h-screen">
            <Navbar />
            <section className="flex-1 overflow-auto bg-gray-100 p-4">
                <Outlet />
            </section>
        </main>
    );
};

export default Layout;