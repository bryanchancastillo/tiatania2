﻿
export function Prices() {

    const h1Style = {
        fontSize: "45px",
    }

    const cardHeaderStyle = {
        backgroundColor: "#ffa1b8",
        borderRadius: "15px 15px 0px 0px",
    }

    return (
        <>

            <section className="py-7 py-md-9">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-8 col-lg-6 text-center">
                                <h2 className="mb-4">
                                    Horarios De Amanecida
                                </h2>
                                <div className="mb-8">
                                    <p >
                                        Todos los días amanecida <b>RD$ 880</b><br></br>
                                        <span className="text-primary">Domingo a Jueves</span> 10PM - 10AM / <span className="text-primary">Viernes a Sabado</span> 12AM - 11AM
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-9 col-md-3">
                                    <div className="card mb-4 shadow-sm text-center">
                                        <div className="card-header py-3" style={cardHeaderStyle}>
                                            <h4 className="my-0 fw-normal">2 Horas</h4>
                                        </div>
                                        <div className="card-body">
                                            <h1 className="card-title pricing-card-title">RD$<span style={h1Style}>630</span></h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-9 col-md-3">
                                    <div className="card mb-4 shadow-sm text-center">
                                        <div className="card-header py-3" style={cardHeaderStyle}>
                                            <h4 className="my-0 fw-normal">4 Horas</h4>
                                        </div>
                                        <div className="card-body">
                                            <h1 className="card-title pricing-card-title">RD$<span style={h1Style}>880</span></h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


        </>
    )
};