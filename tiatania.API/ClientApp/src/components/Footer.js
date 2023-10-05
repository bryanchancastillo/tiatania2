
import React from 'react';




export function Footer() {

    const hrStyle = {
        height: '1px'
    };

    const copyrightText = `\u00A9 2023 Tia Tania. All rights reserved.`;


    return (

        <footer class="py-7 py-md-9 bg-black">
            <div class="container px-4">
                <div class="row gx-7">
                    <div class="col-sm-4">
                        <h5 class="text-xs text-primary">
                            Redes Sociales
                        </h5>
                        <div className="d-flex mb-6 mb-md-0 font-serif" >
                            <a class="text-secondary text-primary-hover d-block me-3" href="#!">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a class="text-secondary text-primary-hover d-block me-3" href="#!">
                                <i class="fab fa-facebook"></i>
                            </a>
                            <a class="text-secondary text-primary-hover d-block me-3" href="#!">
                                <i class="fab fa-x"></i>
                            </a>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <h5 class="text-xs text-primary">
                            Contactos
                        </h5>
                        <ul class="list-unstyled mb-6">
                            <li class="d-flex mb-2">
                                <a style={{ textDecoration: 'none' }} class="text-secondary text-primary-hover" href="https://www.google.com/maps/place/Caba%C3%B1as+Tia+Tania/@18.4242891,-69.9920031,15z/data=!4m6!3m5!1s0x8ea56107ec23aeef:0xf1982ccf3e5e2e21!8m2!3d18.4242891!4d-69.9920031!16s%2Fg%2F11c0rnbr8k?entry=ttu">
                                    <div class="fas fa-map-marker-alt me-3 mt-2 fs-sm"></div>
                                    Autop. 30 de Mayo, Santo Domingo, República Dominicana
                                </a>
                            </li>
                            <li class="d-flex mb-2">
                                <a style={{ textDecoration: 'none' }} class="text-secondary text-primary-hover" href="tel:+18095376122">
                                    <div class="fas fa-phone me-3 mt-2 fs-sm"></div>
                                    +1 809 537 6122
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-sm-4">
                        <h5 class="text-xs text-primary">
                            Horarios
                        </h5>
                        <div class="mb-3">
                            <div class="text-xs">Lunes - Domingo</div>
                            <div class="font-serif">24/7</div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="d-flex align-items-center">
                            <hr class="hr-sm me-3" style={hrStyle} /> &copy; 2021 Touché. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>




    );
}