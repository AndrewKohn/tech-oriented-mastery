import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import "./NavBarMobile.scss";
import { createPortal } from "react-dom";

interface Props {
    currentNavLinkStyle: (pathname: string) => string;
}

const NavBarMobile = ({ currentNavLinkStyle }: Props) => {
    const [isNavModalVisible, setIsNavModalVisible] = useState<boolean>(false);
    const toggleModal = () => setIsNavModalVisible(!isNavModalVisible);

    return (
        <>
            <button className="nav-btn" onClick={() => toggleModal()}>
                {isNavModalVisible ? (
                    <HiOutlineX className="nav-btn-icon" />
                ) : (
                    <HiOutlineMenu className="nav-btn-icon" />
                )}
            </button>

            {createPortal(
                isNavModalVisible ? (
                    <>
                        <div className="backdrop" onClick={() => toggleModal()} />
                        <div className="nav-modal">
                            <Link
                                to="/"
                                className={currentNavLinkStyle("/")}
                                onClick={() => toggleModal()}
                            >
                                <p className="nav-text">HOME</p>
                            </Link>
                            <Link
                                to="/about"
                                className={currentNavLinkStyle("/about")}
                                onClick={() => toggleModal()}
                            >
                                <p className="nav-text">ABOUT</p>
                            </Link>
                            <Link
                                to="/categories"
                                className={`${currentNavLinkStyle("/categories")} cta`}
                                onClick={() => toggleModal()}
                            >
                                <p className="nav-text">START</p>
                            </Link>
                        </div>
                    </>
                ) : (
                    <></>
                ),
                document.getElementById("modal-root") as HTMLElement,
            )}
        </>
    );
};

export default NavBarMobile;
