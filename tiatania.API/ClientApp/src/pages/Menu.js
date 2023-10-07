
import { useEffect, useState } from "react";
import beers from "../menu/beers.js"
import liquors from "../menu/liquors.js"
import bienestar from "../menu/bienestar"
import tobaccos from "../menu/tobaccos"
import drinks from "../menu/drinks"
import wines from "../menu/wines"
import picaderas from "../menu/picaderas";
import { Tooltip } from 'reactstrap';

export function Menu() {

    const [selectedDrink, setSelectedDrink] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [showTotalPrice, setShowTotalPrice] = useState(false);
    const [drinkQuantities, setDrinkQuantities] = useState({});

    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => setTooltipOpen(!tooltipOpen);

    const toggleDrinkSelection = (beer) => {
        // Function to toggle the selection of a beer

        // Add the name of the current beer to the list of selected beers
        setSelectedDrink([...selectedDrink, beer.name]);

        // Update the total price by adding the price of the current beer
        setTotalPrice(totalPrice + beer.price);

        // Create a copy of the existing beer quantities object
        const newQuantities = { ...drinkQuantities };

        // Check if the current beer is already in the quantities object
        if (newQuantities[beer.name]) {
            // If yes, increment its quantity by 1
            newQuantities[beer.name]++;
        } else {
            // If not, set its quantity to 1
            newQuantities[beer.name] = 1;
        }

        // Update the beer quantities object with the new quantities
        setDrinkQuantities(newQuantities);
    };

    const subtractDrink = (event, beer) => {

        event.stopPropagation(); // Stop the event propagation

        // Get the quantity of this beer from the drinkQuantities object, or 0 if it doesn't exist
        const beerQuantity = drinkQuantities[beer.name] || 0;

        // Calculate the subtotal of this beer by multiplying its price with the quantity
        const beerSubtotal = beer.price * beerQuantity;

        // Subtract the subtotal from the overall total to update the new total price
        const newTotalPrice = totalPrice - beerSubtotal;
        setTotalPrice(newTotalPrice);

        // Filter the list of selected beers to remove the current beer
        const newselectedDrink = selectedDrink.filter(name => name !== beer.name);
        setSelectedDrink(newselectedDrink);

        // Create a copy of the drinkQuantities object and set the quantity of this beer to 0
        const newQuantities = { ...drinkQuantities };
        if (newQuantities[beer.name]) {
            newQuantities[beer.name] = 0;
            setDrinkQuantities(newQuantities);
        }
    };

    useEffect(() => {
        setShowTotalPrice(totalPrice > 0);
    }, [totalPrice]);

    return (

        <>

            <section className="py-7 py-md-9 border-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="nav justify-content-center mb-6" id="menuTabs" role="tablist">
                                <a className="nav-link active mb-3" id="mainsTab" data-bs-toggle="tab" href="#mains" role="tab" aria-controls="mains" aria-selected="true">
                                    Cervezas
                                </a>
                                <a className="nav-link mb-3" id="licoresTab" data-bs-toggle="tab" href="#licores" role="tab" aria-controls="licores">
                                    Licores
                                </a>
                                <a className="nav-link mb-3" id="vinosTab" data-bs-toggle="tab" href="#vinos" role="tab" aria-controls="vinos">
                                    vinos
                                </a>
                                <a className="nav-link mb-3" id="bebidasTab" data-bs-toggle="tab" href="#bebidas" role="tab" aria-controls="bebidas">
                                    Bebidas
                                </a>
                                <a className="nav-link mb-3" id="tabacosTab" data-bs-toggle="tab" href="#tabacos" role="tab" aria-controls="tabacos">
                                    cigarrillos
                                </a>
                                <a className="nav-link mb-3" id="picaderasTab" data-bs-toggle="tab" href="#picaderas" role="tab" aria-controls="picaderas">
                                    snacks
                                </a>
                                <a className="nav-link mb-3" id="bienestarTab" data-bs-toggle="tab" href="#bienestar" role="tab" aria-controls="bienestar">
                                    Cuidado personal
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">

                            {/*Cervezas*/}
                            <div className="tab-content" id="menuContent">
                                <div className="tab-pane fade show active" id="mains" role="tabpanel" aria-labelledby="mainsTab">
                                    <div className="row">
                                        {Object.values(beers).map((beer) => (
                                            <div className='col-12 col-md-6 mb-3' key={beer.name}>
                                                <div className={`py-3 ${selectedDrink.includes(beer.name) ? 'custom-border' : ''}`} onClick={() => toggleDrinkSelection(beer)}>
                                                    <div className="row">
                                                        <div className="col-3 align-self-center">
                                                            {/*<!-- Image -->*/}
                                                            <div className="ratio ratio-1x1">
                                                                <img className="object-fit-cover" src={beer.src} alt="..." />
                                                            </div>
                                                        </div>
                                                        <div className="col-6 align-self-center">
                                                            {/*<!-- Heading -->*/}
                                                            <h5 className="mb-2">{beer.name}</h5>
                                                            <div className="d-flex">
                                                                {drinkQuantities[beer.name] > 0 && <p className="mb-0">
                                                                    Cantidad: <span>{drinkQuantities[beer.name] || 0}</span>
                                                                </p>}
                                                                {selectedDrink.includes(beer.name) && (
                                                                    <div className="mx-1">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="bi bi-x-circle-fill" viewBox="0 0 16 16 "
                                                                            onClick={(e) => subtractDrink(e, beer)}>
                                                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                                                        </svg>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="col-1 align-self-center">
                                                            {/*<!-- Price -->*/}
                                                            <div className="fs-5 font-serif text-center text-black">
                                                                ${beer.price}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/*Licores*/}
                                <div className="tab-pane fade show" id="licores" role="tabpanel" aria-labelledby="licoresTab">
                                    <div className="row">
                                        {Object.values(liquors).map((liquor) => (
                                            <div className='col-12 col-md-6 mb-3' key={liquor.name}>
                                                <div className={`py-3 ${selectedDrink.includes(liquor.name) ? 'custom-border' : ''}`} onClick={() => toggleDrinkSelection(liquor)}>
                                                    <div className="row">
                                                        <div className="col-3 align-self-center">
                                                            {/*<!-- Image -->*/}
                                                            <div className="ratio ratio-1x1">
                                                                <img className="object-fit-cover" src={liquor.src} alt="..." />
                                                            </div>
                                                        </div>
                                                        <div className="col-6 align-self-center">
                                                            {/*<!-- Heading -->*/}
                                                            <h5 className="mb-2">{liquor.name}</h5>
                                                            <div className="d-flex">
                                                                {drinkQuantities[liquor.name] > 0 && <p className="mb-0">
                                                                    Cantidad: <span>{drinkQuantities[liquor.name] || 0}</span>
                                                                </p>}
                                                                {selectedDrink.includes(liquor.name) && (
                                                                    <div className="mx-1">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="bi bi-x-circle-fill" viewBox="0 0 16 16 "
                                                                            onClick={(e) => subtractDrink(e, liquor)}>
                                                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                                                        </svg>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="col-1 align-self-center">
                                                            {/*<!-- Price -->*/}
                                                            <div className="fs-5 font-serif text-center text-black">
                                                                ${liquor.price}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/*Wines*/}
                                <div className="tab-pane fade show" id="vinos" role="tabpanel" aria-labelledby="vinosTab">
                                    <div className="row">
                                        {Object.values(wines).map((wine) => (
                                            <div className='col-12 col-md-6 mb-3' key={wine.name}>
                                                <div className={`py-3 ${selectedDrink.includes(wine.name) ? 'custom-border' : ''}`} onClick={() => toggleDrinkSelection(wine)}>
                                                    <div className="row">
                                                        <div className="col-3 align-self-center">
                                                            {/*<!-- Image -->*/}
                                                            <div className="ratio ratio-1x1">
                                                                <img className="object-fit-cover" src={wine.src} alt="..." />
                                                            </div>
                                                        </div>
                                                        <div className="col-6 align-self-center">
                                                            {/*<!-- Heading -->*/}
                                                            <h5 className="mb-2">{wine.name}</h5>
                                                            <div className="d-flex">
                                                                {drinkQuantities[wine.name] > 0 && <p className="mb-0">
                                                                    Cantidad: <span>{drinkQuantities[wine.name] || 0}</span>
                                                                </p>}
                                                                {selectedDrink.includes(wine.name) && (
                                                                    <div className="mx-1">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="bi bi-x-circle-fill" viewBox="0 0 16 16 "
                                                                            onClick={(e) => subtractDrink(e, wine)}>
                                                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                                                        </svg>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="col-1 align-self-center">
                                                            {/*<!-- Price -->*/}
                                                            <div className="fs-5 font-serif text-center text-black">
                                                                ${wine.price}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/*Bebidas*/}
                                <div className="tab-pane fade show" id="bebidas" role="tabpanel" aria-labelledby="bebidasTab">
                                    <div className="row">
                                        {Object.values(drinks).map((drink) => (
                                            <div className='col-12 col-md-6 mb-3' key={drink.name}>
                                                <div className={`py-3 ${selectedDrink.includes(drink.name) ? 'custom-border' : ''}`} onClick={() => toggleDrinkSelection(drink)}>
                                                    <div className="row">
                                                        <div className="col-3 align-self-center">
                                                            {/*<!-- Image -->*/}
                                                            <div className="ratio ratio-1x1">
                                                                <img className="object-fit-cover" src={drink.src} alt="..." />
                                                            </div>
                                                        </div>
                                                        <div className="col-6 align-self-center">
                                                            {/*<!-- Heading -->*/}
                                                            <h5 className="mb-2">{drink.name}</h5>
                                                            <div className="d-flex">
                                                                {drinkQuantities[drink.name] > 0 && <p className="mb-0">
                                                                    Cantidad: <span>{drinkQuantities[drink.name] || 0}</span>
                                                                </p>}
                                                                {selectedDrink.includes(drink.name) && (
                                                                    <div className="mx-1">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="bi bi-x-circle-fill" viewBox="0 0 16 16 "
                                                                            onClick={(e) => subtractDrink(e, drink)}>
                                                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                                                        </svg>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="col-1 align-self-center">
                                                            {/*<!-- Price -->*/}
                                                            <div className="fs-5 font-serif text-center text-black">
                                                                ${drink.price}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/*Tobbaco*/}
                                <div className="tab-pane fade show" id="tabacos" role="tabpanel" aria-labelledby="tabacosTab">
                                    <div className="row">
                                        {Object.values(tobaccos).map((tobbaco) => (
                                            <div className='col-12 col-md-6 mb-3' key={tobbaco.name}>
                                                <div className={`py-3 ${selectedDrink.includes(tobbaco.name) ? 'custom-border' : ''}`} onClick={() => toggleDrinkSelection(tobbaco)}>
                                                    <div className="row">
                                                        <div className="col-3 align-self-center">
                                                            {/*<!-- Image -->*/}
                                                            <div className="ratio ratio-1x1">
                                                                <img className="object-fit-cover" src={tobbaco.src} alt="..." />
                                                            </div>
                                                        </div>
                                                        <div className="col-6 align-self-center">
                                                            {/*<!-- Heading -->*/}
                                                            <h5 className="mb-2">{tobbaco.name}</h5>
                                                            <div className="d-flex">
                                                                {drinkQuantities[tobbaco.name] > 0 && <p className="mb-0">
                                                                    Cantidad: <span>{drinkQuantities[tobbaco.name] || 0}</span>
                                                                </p>}
                                                                {selectedDrink.includes(tobbaco.name) && (
                                                                    <div className="mx-1">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="bi bi-x-circle-fill" viewBox="0 0 16 16 "
                                                                            onClick={(e) => subtractDrink(e, tobbaco)}>
                                                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                                                        </svg>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="col-1 align-self-center">
                                                            {/*<!-- Price -->*/}
                                                            <div className="fs-5 font-serif text-center text-black">
                                                                ${tobbaco.price}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/*Picaderas*/}
                                <div className="tab-pane fade show" id="picaderas" role="tabpanel" aria-labelledby="picaderasTab">
                                    <div className="row">
                                        {Object.values(picaderas).map((picadera) => (
                                            <div className='col-12 col-md-6 mb-3' key={picadera.name}>
                                                <div className={`py-3 ${selectedDrink.includes(picadera.name) ? 'custom-border' : ''}`} onClick={() => toggleDrinkSelection(picadera)}>
                                                    <div className="row">
                                                        <div className="col-3 align-self-center">
                                                            {/*<!-- Image -->*/}
                                                            <div className="ratio ratio-1x1">
                                                                <img className="object-fit-cover" src={picadera.src} alt="..." />
                                                            </div>
                                                        </div>
                                                        <div className="col-6 align-self-center">
                                                            {/*<!-- Heading -->*/}
                                                            <h5 className="mb-2">{picadera.name}</h5>
                                                            <div className="d-flex">
                                                                {drinkQuantities[picadera.name] > 0 && <p className="mb-0">
                                                                    Cantidad: <span>{drinkQuantities[picadera.name] || 0}</span>
                                                                </p>}
                                                                {selectedDrink.includes(picadera.name) && (
                                                                    <div className="mx-1">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="bi bi-x-circle-fill" viewBox="0 0 16 16 "
                                                                            onClick={(e) => subtractDrink(e, picadera)}>
                                                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                                                        </svg>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="col-1 align-self-center">
                                                            {/*<!-- Price -->*/}
                                                            <div className="fs-5 font-serif text-center text-black">
                                                                ${picadera.price}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/*Bienestar*/}
                                <div className="tab-pane fade show" id="bienestar" role="tabpanel" aria-labelledby="bienestarTab">
                                    <div className="row">
                                        {Object.values(bienestar).map((bnstar) => (
                                            <div className='col-12 col-md-6 mb-3' key={bnstar.name}>
                                                <div className={`py-3 ${selectedDrink.includes(bnstar.name) ? 'custom-border' : ''}`} onClick={() => toggleDrinkSelection(bnstar)}>
                                                    <div className="row">
                                                        <div className="col-3 align-self-center">
                                                            {/*<!-- Image -->*/}
                                                            <div className="ratio ratio-1x1">
                                                                <img className="object-fit-cover" src={bnstar.src} alt="..." />
                                                            </div>
                                                        </div>
                                                        <div className="col-6 align-self-center">
                                                            {/*<!-- Heading -->*/}
                                                            <h5 className="mb-2">{bnstar.name}</h5>
                                                            <div className="d-flex">
                                                                {drinkQuantities[bnstar.name] > 0 && <p className="mb-0">
                                                                    Cantidad: <span>{drinkQuantities[bnstar.name] || 0}</span>
                                                                </p>}
                                                                {selectedDrink.includes(bnstar.name) && (
                                                                    <div className="mx-1">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="bi bi-x-circle-fill" viewBox="0 0 16 16 "
                                                                            onClick={(e) => subtractDrink(e, bnstar)}>
                                                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                                                        </svg>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="col-1 align-self-center">
                                                            {/*<!-- Price -->*/}
                                                            <div className="fs-5 font-serif text-center text-black">
                                                                ${bnstar.price}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {showTotalPrice && (

                <div className="totalprice d-flex justify-content-center fixed-bottom bg-primary p-3" type="button" id='tooltip' href="#">

                    <div>{`TOTAL RD$${totalPrice.toFixed(2)}`}</div>

                    <Tooltip placement="top" isOpen={tooltipOpen} target="tooltip" toggle={toggle} autohide={true}>
                        Recuerda marcar al 0 para comunicarse con la oficiona.
                    </Tooltip>

                </div>

            )}

       

        </>


    );
}