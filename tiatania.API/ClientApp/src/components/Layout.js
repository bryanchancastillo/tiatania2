import { useLocation } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';

export function Layout(props) {

    const location = useLocation();

    let title = "";

    if (location.pathname === '/about') {
        title = "sobre nosotros";
    } else if (location.pathname === '/menu') {
        title = "Menu";
    } else if (location.pathname === '/gallery') {
        title = "Galeria";
    } else if (location.pathname === '/prices') {
        title = "precios";
    }

    return (
        <div>
            <Header title={title} />
            {props.children}
            <Footer />
        </div>
    );
}