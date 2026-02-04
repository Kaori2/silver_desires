import { faBoxOpen, faCreditCard, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Banner() {
  return (
    <div className="w-full h-20 bg-rose-800 flex items-center justify-between px-14">
      <div className="flex items-center">
        <FontAwesomeIcon icon={faCreditCard} className="text-white text-5xl" />
        <div className="flex items-center">
          <span className="text-white ml-2 font-bold text-5xl">12x</span>
          <div className="flex flex-col ml-2">
            <span className="text-white text-sm">Installments</span>
            <span className="text-white text-sm">Without Interest</span>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <FontAwesomeIcon icon={faBoxOpen} className="text-white text-5xl" />
        <div className="flex items-center">
          <div className="flex flex-col ml-2">
            <span className="text-white font-bold text-4xl">Discreet</span>
            <span className="text-white text-sm">Packaging</span>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <FontAwesomeIcon icon={faLock} className="text-white text-5xl" />
        <div className="flex flex-col ml-2">
          <span className="text-white text-sm">Your Purchase Is</span>
          <div className="flex flex-row items-end">
            <span className="text-white text-5xl font-bold">100%</span>
            <span className="text-white text-sm ml-1 mb-1">Secure</span>
          </div>
        </div>
      </div>
    </div>
  );
}
