import CarInfo from './CarInfo';
import { Link } from 'react-router-dom';

export default function ListOfCars(props) {
    return(
        <>
            { props.itemsToRender.map((item, ix) => {
                return(
                    <div className=" custom-orange-border car-card p-4" key={ix}>
                        <div className="car-title mb-3">{item.carName}</div>
                        <div className="car-info-container flex-xl-row flex-lg-row flex-md-column flex-sm-column d-flex justify-content-around align-items-center">
                            <div className="img-container"><img src={item.carImageSrc} alt="" /></div>
                            <CarInfo brand={item.brand} enginInfo={item.enginInfo} color={item.color} speed={item.speed}/>
                        </div>
                        <div className="d-flex justify-content-center align-items-center mt-3"><Link className="text-info cursor-pointer" to={`/car-details/${item.id}`}>Read More</Link></div>
                    </div>
                )
            })}
        </>
    )
}