import React from "react";

const Banner = ({ img, title, text, backgroundColor = "#f5f5f5" }) => {
  return (
    <>
      <div className="">
        <div
          className="bg-no-repeat bg-center bg-cover relative flex justify-center items-center "
          style={{ backgroundImage: `url(${img})`, backgroundColor }}
        >
          <div className="content-[''] absolute top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.2)] opacity-60">
            <div className="">
              <h1 className="text-2xl lg:text7xl">{title}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
