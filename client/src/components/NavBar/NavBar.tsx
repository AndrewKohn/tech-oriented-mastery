import { Link, useLocation } from "react-router-dom";
import "./NavBar.scss";
import NavBarMobile from "./NavBarMobile";

const NavBar = () => {
    const location = useLocation().pathname;

    const currentNavLinkStyle = (path: string): string => {
        return path === location ? "nav-link current-page" : "nav-link";
    };

    return (
        <nav role="navigation">
            <div className="nav-container">
                <span className="nav-logo">TOM</span>
                <div className="nav-links">
                    <Link
                        to="/"
                        aria-current={location === "/" ? "page" : undefined}
                        className={currentNavLinkStyle("/")}
                    >
                        <p className="nav-text">HOME</p>
                    </Link>
                    <Link
                        to="/about"
                        aria-current={location === "/about" ? "page" : undefined}
                        className={currentNavLinkStyle("/about")}
                    >
                        <p className="nav-text">ABOUT</p>
                    </Link>
                    <Link
                        to="/categories"
                        aria-current={location === "/categories" ? "page" : undefined}
                        className={`${currentNavLinkStyle("/categories")} cta`}
                    >
                        <p className="nav-text">START</p>
                    </Link>
                </div>

                <NavBarMobile currentNavLinkStyle={currentNavLinkStyle} />
            </div>
        </nav>
    );
};

export default NavBar;
