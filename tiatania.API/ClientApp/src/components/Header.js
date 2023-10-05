import { jarallax } from 'jarallax'; // Importa jarallax desde el módulo
import { useEffect } from 'react';

export function Header(props) {

    useEffect(() => {
        jarallax(document.querySelectorAll('.bg-cover'), {
            speed: 0.8,
        })
    }, [])

    return (
        <header className="bg-cover" style={{ backgroundImage: 'url(assets/img/menu.jpg' }}>
            <div className="pt-10 pb-8 pt-md-15 pb-md-13 bg-black-50">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-6 text-center">
                            <h1 className="display-6 fw-bold text-white">
                                {props.title}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );



}
