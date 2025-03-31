import { NavLink } from "react-router";

const Navbar = () => {
    return (
        <nav className="flex justify-around bg-gray-800 text-white p-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/diffie-hellman">
                Diffie-Hellman
            </NavLink>
            <NavLink to="/elgamal">
                ElGamal
            </NavLink>
        </nav>
    );
}

export default Navbar;