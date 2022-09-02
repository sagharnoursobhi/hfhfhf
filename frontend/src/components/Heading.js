import { FetchData } from "../data/FetchData";
import NavbarHeading from '../components/NavbarHeading';
import { useRef, useState } from 'react';


export default function Header() {

    const videoHeading = FetchData('http://localhost:1337/api/videos?populate=*');
    let content = [];
    const [filter, setFilter] = useState(false);

    const onFilter = () => {
        setFilter(!filter);
    }

    if(videoHeading.data) {
        content = <video className={`${filter ? 'custom-blur' : ''}`} autoPlay loop muted src={`http://localhost:1337${videoHeading.data[0].attributes.background.data[0].attributes.url}`} type="video/mp4" />
    }

    const heading = useRef();

    return(
        <div className="heading-container" ref={heading}>
            <NavbarHeading heading={heading} onFilter={onFilter}/>
            { content }
            <div className={`position-absolute empty-div-transform mw-100 mh-100 w-100 heading-desc ${filter ? 'custom-blur' : ''}`}>
                <div>Dream car rental</div>
                <div>We will make your dreams come true!</div>
            </div>
        </div>
    )
}