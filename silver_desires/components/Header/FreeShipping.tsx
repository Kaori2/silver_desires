import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

export default function FreeShipping() {
    return (
        <div className="border-1 border-x-0 border-b-0 border-white bg-rose-800 text-white text-center py-2 text-sm font-medium">
            <FontAwesomeIcon icon={faTruck} className="mr-2 text-lg" />
            Free Shipping on orders over $50!
        </div>
    );
}