import React, { Component, useEffect, useRef, useState } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Nav } from 'reactstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export function NavBar() {

    const navbar = useRef(null);
    const navbarCollapse = useRef(null);
    const navbarToggler = useRef(null);

    const [isLight, setIsLight] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const makeNavbarDark = () => {

        if (navbar.current != null) {
            navbar.current.classList.remove('navbar-light');
            navbar.current.classList.add('navbar-dark');
            setIsLight(false);
        }
    };

    const makeNavbarLight = () => {
        if (navbar.current != null) {
            navbar.current.classList.remove('navbar-dark');
            navbar.current.classList.add('navbar-light');
            setIsLight(true);
        }
    };

    const toggleNavbar = () => {

        const scrollTop = window.pageYOffset;

        if (scrollTop && !isLight) {
            makeNavbarLight();
        }

        if (!scrollTop && !isCollapsed) {
            makeNavbarDark();
        }
    };

    const closeNavbarIfOpenOnClick = (navbarCollapse, navbarToggler) => () => {

        if (navbarCollapse.current && window.getComputedStyle(navbarCollapse.current).display === 'block') {
            navbarToggler.current.click();
        }
    };

    useEffect(() => {

        const windowEvents = ['load', 'scroll'];

        if (navbar.current && navbarCollapse.current) {
            // Toggle navbar on scroll
            windowEvents.forEach((event) => {
                window.addEventListener(event, toggleNavbar);
            });

            // Toggle navbar on expand
            navbarCollapse.current.addEventListener('show.bs.collapse', () => {
                setIsCollapsed(true);
                makeNavbarLight();
            });

            // Toggle navbar on collapse
            navbarCollapse.current.addEventListener('hidden.bs.collapse', () => {
                setIsCollapsed(false);

                if (!window.pageYOffset) {
                    makeNavbarDark();
                }
            });

        }

        // Recuerda limpiar los event listeners cuando el componente se desmonte

        return () => {

            windowEvents.forEach((event) => {
                window.removeEventListener(event, toggleNavbar);
            });

            if (navbarCollapse.current) {
                navbarCollapse.current.removeEventListener('show.bs.collapse', makeNavbarLight);
                navbarCollapse.current.removeEventListener('hidden.bs.collapse', makeNavbarDark);
            }
        };

    }, [isLight, isCollapsed]);

    return (

        <nav className="navbar navbar-dark navbar-expand-lg navbar-togglable fixed-top" ref={navbar}>
            <div className="container">

                {/*<!-- Navbar brand (mobile) -->*/}
                <Link className="navbar-brand d-lg-none" to="/" > Tia Tania</Link>

                {/*<!-- Navbar toggler -->*/}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" ref={navbarToggler}  >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/*<!-- Navbar collapse -->*/}
                <div className="collapse navbar-collapse" ref={navbarCollapse} id="navbarCollapse"   >

                    {/*<!-- Navbar nav -->*/}
                    <Nav navbar>
                        <NavItem>
                            <NavLink tag={Link} className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about" onClick={closeNavbarIfOpenOnClick(navbarCollapse, navbarToggler)}>Sobre nosotros</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className={`nav-link ${location.pathname === '/menu' ? 'active' : ''}`} to="/menu" onClick={closeNavbarIfOpenOnClick(navbarCollapse, navbarToggler)} >Menu</NavLink>
                        </NavItem>
                    </Nav >

                    {/*<!-- Navbar brand -->*/}
                    <Link className="navbar-brand d-none d-lg-flex mx-lg-auto" to="/"> Tia Tania</Link>

                    {/*<!-- Navbar nav -->*/}
                    <Nav navbar>
                        <NavItem>
                            <NavLink tag={Link} className={`nav-link ${location.pathname === '/gallery' ? 'active' : ''}`} to="/gallery" onClick={closeNavbarIfOpenOnClick(navbarCollapse, navbarToggler)} >Galeria</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className={`nav-link ${location.pathname === '/prices' ? 'active' : ''}`} to="/prices" onClick={closeNavbarIfOpenOnClick(navbarCollapse, navbarToggler)}>Precios</NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </div>
        </nav>

    );

};