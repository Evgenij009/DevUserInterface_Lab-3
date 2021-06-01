﻿import React from "react";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import '../css/styles.css';
import useLanguage from "../hooks/Language";
import {Dropdown} from "react-bootstrap";
import {Globe2} from "react-bootstrap-icons";

export function DropdownLanguage() {
    const {setLang} = useLanguage();

    return (
        <Dropdown className="mt-2">
            <Dropdown.Toggle variant="dark">
                <Globe2/>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={() => setLang("ru")}>Русский</Dropdown.Item>
                <Dropdown.Item onClick={() => setLang("en")}>English</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

function Navigation() {
    const {t} = useLanguage();
    return (

    <nav className="navbar navbar-expand-lg bg-info text-uppercase fixed-top" id="mainNav">
        <div className="container">
            <a className="navbar-brand" href="/">Filmmakers</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item mx-0 mx-lg-1">
                        <HashLink className="nav-link py-3 px-0 px-lg-3 rounded" smooth
                                  to="/#contact">{t("navbar.devs")}</HashLink>
                    </li>
                    <li className="nav-item mx-0 mx-lg-1">
                        <HashLink className="nav-link py-3 px-0 px-lg-3 rounded" smooth
                                  to="/#about">{t("navbar.desc")}</HashLink>
                    </li>
                    <li className="nav-item mx-0 mx-lg-1">
                        <HashLink className="nav-link py-3 px-0 px-lg-3 rounded" smooth
                                  to="/#daily">{t("navbar.daily")}</HashLink>
                    </li>
                    <li className="nav-item mx-0 mx-lg-1">
                        <Link className="nav-link py-3 px-0 px-lg-3 rounded"
                              to="/filmmakers">{t("navbar.filmmakers")}</Link>
                    </li>
                    <li className="nav-item mx-0 mx-lg-1">
                        <DropdownLanguage/>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
}

export default Navigation;
