import React from "react";
import DropdownButton from "./DropdownButton";
import DropdownCard from "./DropdownCard";

const DropdownMenu = () => {
  const sampleData = new Array(7).fill("item name");
  const myArray = new Array("1", "2", "3", "4", "5", "6", "7");

  const [open, setOpen] = React.useState(false);
  const drop = React.useRef(null);

  function handleClick(e) {
    if (!e.target.closest(`.${drop.current.className}`) && open) {
      setOpen(false);
    }
  }

  React.useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return (
    <div
      className="dropdown"
      ref={drop}
      style={{ position: "relative", margin: "16px" }}
    >
      <DropdownButton onClick={() => setOpen((open) => !open)} />
      {open && <DropdownCard data={myArray} />}
    </div>
  );
};

export default DropdownMenu;
