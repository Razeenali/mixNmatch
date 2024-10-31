import React from "react";

// white squares are a placeholder for user uploaded pictures
// make the squares clickable and have them a modal show up that darkens the background
// and shows more detail about each clothing item (date added)

// idea
// if the user chooses to have the images displayed in rows then each image is followed by its info
// and therefore it's clickable anymore!
const SquareGrid = () => {
  const num = 100;
  const squaresArray = Array.from({ length: num });
  return (
    <div
      className="h-full p-4 border border-gray-300
      grid gap-4
      grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8
       "
    >
      {squaresArray.map((index) => (
        <div>
          <div
            key={index}
            className="w-48 h-48 p-2 bg-white border border-black"
          ></div>
          <h4 className="text-lg">Test Closet Item 123</h4>
        </div>
      ))}
    </div>
  );
};

export default SquareGrid;
