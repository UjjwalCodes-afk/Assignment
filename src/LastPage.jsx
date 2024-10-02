import React from "react";

const AgatePhoneGripShowcase = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-row md:flex-row items-center text-center justify-between">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <div className="text-right mb-2 items-center">
          <button className="text-blue-400 border border-blue-400 rounded-full text-2xl px-3 pl-4 pr-4 py-1 hover:bg-blue-400 hover:text-white transition duration-300">
            View All
          </button>
        </div>
        <div className="text-center p-5 items-center">
          <h2 className="text-sm text-gray-600 mb-2">BEST PRICE</h2>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Agate Phone Grip
          </h1>
        </div>
        <div className="mb-4 text-center">
          <span className="text-gray-400 line-through mr-2">$44.50</span>
          <span className="text-3xl font-bold text-red-500">$19.50</span>
        </div>
        <p className="text-gray-600 mb-6 max-w-md text-center justify-items-center p-3 ml-20 pl-10  text-xl gap-2">
          These Pop Rock Crystal grip tops can be swapped with other tops
          depending on your mood, outfit, nails, phone case, holiday, etc! Just
          gently squeeze the sides to remove and swap out with another color or
          design!
        </p>
        <button className="bg-blue-400 ml-7 p-5 text-white py-2 px-6 rounded-full hover:bg-blue-500 transition duration-300 text-2xl">
          BUY NOW
        </button>
      </div>
      <div className="md:w-1/2 relative">
        <div className="w-64 h-64 md:w-80 md:h-80 bg-blue-100 rounded-full absolute top-0 right-0 z-0" />
        <div className="w-48 h-48 md:w-64 md:h-64 bg-white rounded-full absolute top-8 right-8 z-10 flex items-center justify-center pt-2">
          <svg
            width="464"
            height="464"
            viewBox="0 0 464 464"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_1_148)">
              <circle cx="232" cy="228" r="182" fill="white" />
            </g>
            <defs>
              <filter
                id="filter0_d_1_148"
                x="0"
                y="0"
                width="464"
                height="464"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="25" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.472135 0 0 0 0 0.561969 0 0 0 0 0.6125 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1_148"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_148"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>

          <img
            src="images/logo.png"
            alt="Agate Phone Grip"
            className="w-[248px] h-[248px] object-cover"
          />
        </div>
      </div>
      <div className="absolute bottom-4 right-4 text-gray-400">
        <span className="mr-2">1/1</span>
        <button className="bg-gray-300 text-white rounded-full p-2 hover:bg-gray-400 transition duration-300"></button>
      </div>
      
    </div>
    
  );
};

export default AgatePhoneGripShowcase;
