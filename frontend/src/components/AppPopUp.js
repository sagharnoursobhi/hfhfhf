import {setState} from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';

const AppPopUp = () => {

    
    const [isOpen , setIsOpen] = setState(false)
    const togglePopUp = ()=>{
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <button onClick={togglePopUp}><InstagramIcon/><FacebookIcon/><PlayCircleFilledWhiteIcon/></button>
        </div>
    )
}
export default AppPopUp