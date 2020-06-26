import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DraggableColorBox from "./DraggableColorBox";

const DraggableColorList = SortableContainer(({ colors, removeColor }) => {
  return (
    <div style={{ height: "100%" }}>
      {colors.map((color, i) => (
        <DraggableColorBox
          color={color.color}
          name={color.name}
          handleClick={() => removeColor(color.name)}
          index={i}
          key={color.name}
        />
      ))}
    </div>
  );
});

export default DraggableColorList;
