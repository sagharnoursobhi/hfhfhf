

export default function CarsInfoMoreDetail(props) {
    const { name, source, rentalPrices} = props;

    return(
        <div className="d-flex flex-column justify-content-start align-items-start p-2 grid-item">
            <div className="car-name">{ name }</div>
            <div className="rental-car-img-container"><img src={source} alt="" /></div>
            <div className="prices-container">
                <div className="price-title">Gross Rental Prices:</div>
                <div className="price-detail">{ rentalPrices }</div>
            </div>
        </div>
    )
}