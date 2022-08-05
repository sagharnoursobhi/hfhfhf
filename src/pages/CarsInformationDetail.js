import CarInfo from "../components/CarInfo";
import { useParams } from "react-router-dom";

export default function Product() {
    const { id } = useParams();
    return(
        <div>
            product page
        </div>
    )
}