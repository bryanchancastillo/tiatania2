import React, { useEffect, useState } from 'react';
import Flickity from 'flickity';
import imagesLoaded from 'imagesloaded';
import Isotope from 'isotope-layout';
import BigPicture from 'bigpicture';
import 'flickity/css/flickity.css';

export function Gallery() {

    useEffect(() => {

        // Initialize the carousel when the component is mounted
        const carousel = new Flickity('.carousel', {
            wrapAround: true,
            imagesLoaded: true,
        });

        // Reload the carousel when images are loaded (for responsive design)
        imagesLoaded('.carousel').on('progress', () => {
            carousel.reloadCells();
            carousel.resize();
        });

        // Get all the elements with the atribut 'data-bigpicture'
        const toggles = document.querySelectorAll('[data-bigpicture]');

        // Add the event  click to every element to expand image
        toggles.forEach(function (toggle) {
            toggle.addEventListener('click', function (e) {
                e.preventDefault();

                const elementOptions = JSON.parse(toggle.dataset.bigpicture);

                const defaultOptions = {
                    el: toggle,
                    noLoader: true,
                };

                const options = {
                    ...defaultOptions,
                    ...elementOptions,
                };

                BigPicture(options);
            });
        });

        // Clean up the carousel when the component is unmounted
        return () => {
            carousel.destroy();
        };
    }, []);

    useEffect(() => {
        const isotopeElements = document.querySelectorAll('[data-isotope]');

        isotopeElements.forEach(function (isotopeElement) {
            imagesLoaded(isotopeElement, function () {
                const options = isotopeElement.dataset.isotope
                    ? JSON.parse(isotopeElement.dataset.isotope)
                    : {};

                new Isotope(isotopeElement, options);
            });
        });
    }, []);

    return (
        <>
            <section className="pt-5 pt-md-7 mb-7">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="carousel">
                                <figure className="w-100">
                                    <img className="img-fluid mb-4" src="assets/img/43.jpeg" alt="..." />
                                    <figcaption className="text-center">#43 🥰</figcaption>
                                </figure>
                                <figure className="w-100">
                                    <img className="img-fluid mb-4" src="assets/img/44.jpeg" alt="..." />
                                    <figcaption className="text-center">#44 🥰</figcaption>
                                </figure>
                                <figure className="w-100">
                                    <img className="img-fluid mb-4" src="assets/img/7.jpeg" alt="..." />
                                    <figcaption className="text-center">#7 🥰</figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-7 py-md-9">
                <div className="container">
                    <div className="row gx-3" data-isotope>
                        <div className="col-6 col-sm-6 col-md-4">
                            <a className="d-block mb-3" href="#" data-bigpicture='{ "imgSrc": "assets/img/7.jpeg" }'>
                                <img className="img-fluid" src="assets/img/7.jpeg" alt="..." />
                            </a>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4">
                            <a className="d-block mb-3" href="#" data-bigpicture='{ "imgSrc": "assets/img/12.jpeg" }'>
                                <img className="img-fluid" src="assets/img/12.jpeg" alt="..." />
                            </a>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4">
                            <a className="d-block mb-3" href="#" data-bigpicture='{ "imgSrc": "assets/img/19.jpeg" }'>
                                <img className="img-fluid" src="assets/img/19.jpeg" alt="..." />
                            </a>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4">
                            <a className="d-block mb-3" href="#" data-bigpicture='{ "imgSrc": "assets/img/40.jpg" }'>
                                <img className="img-fluid" src="assets/img/40.jpg" alt="..." />
                            </a>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4">
                            <a className="d-block mb-3" href="#" data-bigpicture='{ "imgSrc": "assets/img/43.jpeg" }'>
                                <img className="img-fluid" src="assets/img/43.jpeg" alt="..." />
                            </a>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4">
                            <a className="d-block mb-3" href="#" data-bigpicture='{ "imgSrc": "assets/img/44.jpeg" }'>
                                <img className="img-fluid" src="assets/img/44.jpeg" alt="..." />
                            </a>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4">
                            <a className="d-block mb-3" href="#" data-bigpicture='{ "imgSrc": "assets/img/47.jpeg" }'>
                                <img className="img-fluid" src="assets/img/47.jpeg" alt="..." />
                            </a>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4">
                            <a className="d-block mb-3" href="#" data-bigpicture='{ "imgSrc": "assets/img/6.png" }'>
                                <img className="img-fluid" src="assets/img/6.png" alt="..." />
                            </a>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4">
                            <a className="d-block mb-3" href="#" data-bigpicture='{ "imgSrc": "assets/img/35.jpeg" }'>
                                <img className="img-fluid" src="assets/img/35.jpeg" alt="..." />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </>

    );
}
