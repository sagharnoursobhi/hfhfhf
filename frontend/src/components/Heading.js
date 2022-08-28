import { FetchData } from "../data/FetchData";
import NavbarHeading from '../components/NavbarHeading';


export default function Header() {

    const videoHeading = FetchData('http://localhost:1337/api/videos?populate=*');
    console.log(videoHeading);
    let content = [];

    if(videoHeading.data) {
        content = <video autoPlay loop muted src={`http://localhost:1337${videoHeading.data[0].attributes.background.data[0].attributes.url}`} type="video/mp4" />
    }

    return(
        <div className="heading-container">
            <NavbarHeading />
            { content }
            <div className="position-absolute empty-div-transform heading-blur mw-100 mh-100 w-100 heading-desc">
                <div>Dream car rental</div>
                <div>We will make your dreams come true!</div>
            </div>
        </div>
    )
}