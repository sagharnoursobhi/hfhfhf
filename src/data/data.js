import FirstCar from '../assets/images/car1.png';
import SecondCar from '../assets/images/Porsche_718_Cayman_S_2022-removebg-preview.png';
import ThirdCar from '../assets/images/car3.png';
import FourthCar from '../assets/images/car4.png';
import FifthCar from '../assets/images/car5.png';
import SixthCar from '../assets/images/car6.png';
import SeventhCar from '../assets/images/car10.png';
import EigthCar from '../assets/images/car12.png';
import NinthCar from '../assets/images/Frame.png';
import TenthCar from '../assets/images/car18.png';
import EleventhCar from '../assets/images/car14.png';
import TwolveCar from '../assets/images/image16.png';
import ThirteenCar from '../assets/images/car17.png';
import FourteenCar from '../assets/images/image11.png';


const CarsInformation  = [
        { id:'1', carName:'Porsche 911 Carrera 4s', carImageSrc:FirstCar, brand:'Coupe', enginInfo:'3.0l Twin Turbo', color:'Red', speed:'450 Hourses',
        rentalPrices: "- 1 day / 24h: PLN 990. 3 - 6 days: PLN 890 / day. - Week / 7 days: PLN 4,400. - Month: PLN 11,000. - 350 km / day limit - then PLN 3 / km."},
        { id:'2',carName:'Porsche 718 Cayman', carImageSrc:SecondCar, brand:'Coupe', enginInfo:'3.0l Twin Turbo', color:'Yellow', speed:'300 Hourses',
        rentalPrices: "- 1 day / 24h: PLN 890. 3 - 6 days: PLN 1090 / day. - Week / 7 days: PLN 5,400. - Month: PLN 12,000. - 350 km / day limit - then PLN 3 / km."},
        { id:'3',carName:'Mercedes A45 AMG', carImageSrc:ThirdCar, brand:'Coupe', enginInfo:'3.0l Twin Turbo', color:'Gold', speed:'421 Hourses',
        rentalPrices: "- 1 day / 24h: PLN 890. 3 - 6 days: PLN 790 / day. - Week / 7 days: PLN 3,400. - Month: PLN 11,500. - 350 km / day limit - then PLN 3 / km."},
        { id:'4',carName:'BMW M5 Competition', carImageSrc:FourthCar, brand:'Coupe', enginInfo:'3.0l Twin Turbo', color:'Blue', speed:'626 Hourses',
        rentalPrices: "- 1 day / 24h: PLN 1090. 3 - 6 days: PLN 990 / day. - Week / 7 days: PLN 4,800. - Month: PLN 11,500. - 350 km / day limit - then PLN 3 / km."},
        { id:'5',carName:'BMW M4', carImageSrc:FifthCar, brand:'Coupe', enginInfo:'3.0l Twin Turbo', color:'Gold', speed:'450 Hourses',
        rentalPrices: "- 1 day / 24h: PLN 990. 3 - 6 days: PLN 790 / day. - Week / 7 days: PLN 3,100. - Month: PLN 10,500. - 350 km / day limit - then PLN 3 / km."},
        { id:'6',carName:'Nissan GT-R', carImageSrc:SixthCar, brand:'Coupe', enginInfo:'3.0l Twin Turbo', color:'Copper', speed:'570 Hourses',
        rentalPrices: "- 1 day / 24h: PLN 690. 3 - 6 days: PLN 790 / day. - Week / 7 days: PLN 3,100. - Month: PLN 10,000. - 350 km / day limit - then PLN 3 / km."},
        { id:'7',carName:'Lamborghini Aventador', carImageSrc:SeventhCar, brand:'Coupe', enginInfo:'6.5l V12', color:'White', speed:'700 Hourses',
        rentalPrices: "- 1 day / 24h: PLN 1090. 3 - 6 days: PLN 1000 / day. - Week / 7 days: PLN 4,600. - Month: PLN 11,700. - 350 km / day limit - then PLN 3 / km."},
        { id:'8',carName:'Lamborghini Huracan', carImageSrc:EigthCar, brand:'Coupe', enginInfo:'5.2l V10', color:'Orange', speed:'610 Hourses',
        rentalPrices: "- 1 day / 24h: PLN 580. 3 - 6 days: PLN 490 / day. - Week / 7 days: PLN 2,400. - Month: PLN 9,000. - 350 km / day limit - then PLN 3 / km."},
        { id:'9',carName:'BMW M2 Competition', carImageSrc:NinthCar, brand:'Coupe', enginInfo:'3.0l Twin Turbo', color:'white', speed:'570 Hourses',
        rentalPrices: "- 1 day / 24h: PLN 2090. 3 - 6 days: PLN 1090 / day. - Week / 7 days: PLN 6,400. - Month: PLN 13,000. - 350 km / day limit - then PLN 3 / km."},
        { id:'10',carName:'Audi S3', carImageSrc:TenthCar, brand:'Sportback', enginInfo:'2.0 tfsi', color:'Dark blue', speed:'391 Hourses',
        rentalPrices: "- 1 day / 24h: PLN 3990. 3 - 6 days: PLN 2990 / day. - Week / 7 days: PLN 7,400. - Month: PLN 14,000. - 350 km / day limit - then PLN 3 / km."},
        { id:'11',carName:'Ford Mustang 2.3 EcoBoost', carImageSrc:EleventhCar, brand:'Coupe', enginInfo:'2.3 EcoBoost', color:'black', speed:'310 Hourses',
        rentalPrices: "- 1 day / 24h: PLN 4090. 3 - 6 days: PLN 3090 / day. - Week / 7 days: PLN 8,400. - Month: PLN 15,000. - 350 km / day limit - then PLN 3 / km."},
        { id:'12',carName:'Lamborghini Gallardo', carImageSrc:TwolveCar, brand:'Coupe', enginInfo:'5.2l V10', color:'Green', speed:'570 Hourses',
        rentalPrices: "- 1 day / 24h: PLN 7090. 3 - 6 days: PLN 6090 / day. - Week / 7 days: PLN 9,400. - Month: PLN 16,000. - 350 km / day limit - then PLN 3 / km."},
        { id:'13',carName:'Ford Mustang GT 5.0', carImageSrc:ThirteenCar, brand:'Coupe', enginInfo:'5.0l V8', color:'Blue', speed:'450 Hourses',
        rentalPrices: "- 1 day / 24h: PLN 990. 3 - 6 days: PLN 890 / day. - Week / 7 days: PLN 4,400. - Month: PLN 11,000. - 350 km / day limit - then PLN 3 / km."},
        { id:'14',carName:'Ferrari 458 Italia', carImageSrc:FourteenCar, brand:'Coupe', enginInfo:'4.5l V8', color:'Red', speed:'570 Hourses',
        rentalPrices: "- 1 day / 24h: PLN 2090. 3 - 6 days: PLN 1090 / day. - Week / 7 days: PLN 6,400. - Month: PLN 12,000. - 350 km / day limit - then PLN 3 / km."},
]

export default CarsInformation;