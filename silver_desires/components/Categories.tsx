import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOilCan, faDroplet, faPuzzlePiece, faBook } from "@fortawesome/free-solid-svg-icons";

const category = [
  {
    id: 1,
    icon: faOilCan,
    name: "Sensual Massage Oils",
  },
  {
    id: 2,
    icon: faDroplet,
    name: "Lubrificants and Gels",
  },
  {
    id: 3,
    icon: faPuzzlePiece,
    name: "Sexual Aids and Toys",
  },
  {
    id: 4,
    icon: faBook,
    name: "Books We Like",
  },
  {
    id: 5,
    icon: faOilCan,
    name: "Lingeries",
  },
];

export default function Categories() {
  return (
    <div className="flex space-x-4 overflow-x-auto py-4 px-2 bg-white shadow-md">
      {category.map((cat) => (
        <div key={cat.id}>
          <FontAwesomeIcon
            icon={cat.icon}
            className="text-rose-950 mb-2"
            size="lg"
          />
          {cat.name}
        </div>
      ))}
    </div>
  );
}
