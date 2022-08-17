import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';
import InvertColorsIcon from '@material-ui/icons/InvertColors';

export default function CarInfo(props) {
    const App = () => (
        <i>
          <FontAwesomeIcon icon={faHome}/>
        </i>
      );

    return(
        <div className="car-info">
            <div className="d-flex justify-content-start align-items-center">
                <LocalTaxiIcon/>
                <div className="ml-3">{props.brand}</div>
            </div>
            <div className="d-flex justify-content-start align-items-center">
                <ViewCarouselIcon/>
                <div className="ml-3">{props.enginInfo}</div>
            </div>
            <div className="d-flex justify-content-start align-items-center">
                <InvertColorsIcon/>
                <div className="ml-3">{props.color}</div>
            </div>
            <div className="d-flex justify-content-start align-items-center">
                <App/>
                <div className="ml-3">{props.speed}</div>
            </div>
        </div>
    )
}