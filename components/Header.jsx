import Image from "next/image";
import React from "react";

/**
 *  Header present in all cards.
 * @param {object} props
 * @param {string} props.img - Name of the file in /public for the avatar
 * @param {string} props.name - Name os the person
 * @param {string} props.color - CSS color for the string name
 * @param {boolean} props.ring  - If the avatar image has a purple circle
 */
const Header = ({ img, name, color, ring }) => {
  return (
    <div className="z-10 flex space-x-4">
      <Image
        src={img}
        width={60}
        height={60}
        alt="avatar"
        className={`w-10 h-10 rounded-full ${
          ring ? "ring-2 ring-purple-300" : ""
        } `}
      />
      <div className={`text-sm text-${color}`}>
        <h4>{name}</h4>
        <p className="opacity-50">Verified Graduate</p>
      </div>
    </div>
  );
};

export default Header;
