import { SiCodefresh, SiCoffeescript } from "react-icons/si";
import { FaTruckFast } from "react-icons/fa6";
import { MdRestaurantMenu } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { Ri24HoursLine } from "react-icons/ri";

export default function Reasons({ startIndex, endIndex }) {
  const reasons = [
    {
      id: 1,
      title: "High quality and fresh products",
      icon: <SiCodefresh />,
    },
    {
      id: 2,
      title: "Fast and secure shipping",
      icon: <FaTruckFast />,
    },
    {
      id: 3,
      title: "Variety in the menu and special selections",
      icon: <SiCoffeescript />,
    },
    {
      id: 4,
      title: "Easy access to the menu and online ordering",
      icon: <MdRestaurantMenu />,
    },
    {
      id: 5,
      title: "Special offers and discounts",
      icon: <BiSolidOffer />,
    },
    {
      id: 6,
      title: "24/7 customer support",
      icon: <Ri24HoursLine />,
    },
  ];

  return (
    <div className="reasons">
      {reasons.slice(startIndex, endIndex).map((reason) => (
        <div key={reason.id}>
          {reason.icon}
          <h4>{reason.title}</h4>
        </div>
      ))}
    </div>
  );
}
