import React from "react";
import { Dropdown, Image } from "react-bootstrap";
import user1 from "../../../assets/images/user/user-1.jpg";
import UserCard from "./user/UserCard";
import { useUser } from "../../../context/UserContext";


const UserDropdown = () => {
    const {currentUser:user, setCurrentUser, loading } = useUser();
    console.log(user);
    return (
        <Dropdown as="li" className="nav-item user-dropdown">
            <Dropdown.Toggle as="a" className="d-flex align-items-center" id="drop-down-arrow">
                <Image src={user1} className="img-fluid rounded-circle avatar-48 border border-2 me-3" alt="user" loading="lazy" />
            </Dropdown.Toggle>
            <Dropdown.Menu className="sub-drop caption-menu">
                <UserCard name="Andaw Ciss" />
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default UserDropdown;