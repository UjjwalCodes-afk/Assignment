// import React from 'react';

// const ProductCard = ({ title, price }) => (
//   <div className="bg-white rounded-lg shadow-xl p-4 pl-8 justify-between  gap-7  flex flex-col items-center w-64 grid-cols-4">
//     <img src={'images/logo.png'} alt={title} className="w-32 h-32 object-cover mb-4" />
//     <h3 className="text-lg font-semibold text-gray-800 text-center">{title}</h3>
//     <p className="text-blue-600 font-bold mt-2">{price}</p>
//     <button className="w-[180px] h-[56px] mt-4 bg-blue-400 text-white py-2 px-4 rounded-full hover:bg-blue-500 transition duration-300">
//       BUY NOW
//     </button>
//   </div>
// );

// const ProductListing = () => {
//   const products = [
//     { id: 1, title: "CRYSTAL AGATE PHONE GRIP", price: "18.99$" },
//     { id: 2, title: "CRYSTAL AGATE PHONE GRIP", price: "18.99$" },
//     { id: 3, title: "CRYSTAL AGATE PHONE GRIP", price: "18.99$" },
//     { id: 5, title: "CRYSTAL AGATE PHONE GRIP", price: "18.99$" },
//     { id: 6, title: "CRYSTAL AGATE PHONE GRIP", price: "18.99$" },
//     { id: 7, title: "CRYSTAL AGATE PHONE GRIP", price: "18.99$" },
//     { id: 9, title: "CRYSTAL AGATE PHONE GRIP", price: "18.99$" },
//     { id: 10, title: "CRYSTAL AGATE PHONE GRIP", price: "18.99$" },
//     { id: 11, title: "CRYSTAL AGATE PHONE GRIP", price: "18.99$" },
//     { id: 12, title: "CRYSTAL AGATE PHONE GRIP", price: "18.99$" },
//   ];

//   return (
//     <div className="container mx-auto px-4">
//       <div className="mb-8">
//         <h1 className="text-4xl font-bold text-gray-700 mb-4">All products</h1>
//         <div className="flex justify-between items-center mb-4">
//           <div className="relative">
//             <select className="block appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
//               <option value="">All Products</option>
//             </select>
//             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//               <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//                 <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//               </svg>
//             </div>
//           </div>
//           <div className="relative">
//             <select className="block appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
//               <option value="">Best Selling</option>
//             </select>
//             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//               <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//                 <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//               </svg>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex overflow-x-auto space-x-4 pb-4">
//         {products.map((product) => (
//           <ProductCard key={product.id} title={product.title} price={product.price} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductListing;

import React from "react";

function ProductGrid() {
  const products = [
    {
      id: 1,
      image: "images/logo.png",
      title: "Product 1",
      price: "$19.99",
    },
    {
      id: 2,
      image: "images/logo.png",
      title: "Product 2",
      price: "$29.99",
    },
    {
      id: 3,
      image: "images/logo.png",
      title: "Product 3",
      price: "$39.99",
    },
    {
      id: 4,
      image: "images/logo.png",
      title: "Product 4",
      price: "$49.99",
    },
    {
      id: 5,
      image: "images/logo.png",
      title: "Product 5",
      price: "$59.99",
    },
    {
      id: 6,
      image: "images/logo.png",
      title: "Product 6",
      price: "$69.99",
    },
    {
      id: 7,
      image: "images/logo.png",
      title: "Product 7",
      price: "$79.99",
    },
    {
      id: 8,
      image: "images/logo.png",
      title: "Product 8",
      price: "$89.99",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-black mb-4 text-center"> All products</h1>
        <div className="flex justify-between items-center mb-4">
          <div className="flex row">
            <h2 className="text-xl font-bold text-gray-400/90  pt-0.5">
              Filter :
            </h2>
            <select className="text-xl block appearance-none bg-white  text-black p-1 pr-2 px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ">
              <option value="">All Products</option>
            </select>
            <svg
            className="mt-3"
              width="8"
              height="7"
              viewBox="0 0 8 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.86603 6.5C4.48113 7.16667 3.51887 7.16667 3.13397 6.5L0.535898 2C0.150998 1.33333 0.632122 0.500001 1.40192 0.500001L6.59807 0.5C7.36788 0.5 7.849 1.33333 7.4641 2L4.86603 6.5Z"
                fill="#31546D"
              />
            </svg>

            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <div className="flex row pb-1">
            <h2 className="text-xl font-bold text-gray-400/90 pt-0.5 ">
              Sort :
            </h2>
            <select className="text-xl block appearance-none bg-white  text-black p-1 pr-2 px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ">
              <option value="">Best Selling</option>
            </select>
            <svg
            className="mt-3"
              width="8"
              height="7"
              viewBox="0 0 8 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.86603 6.5C4.48113 7.16667 3.51887 7.16667 3.13397 6.5L0.535898 2C0.150998 1.33333 0.632122 0.500001 1.40192 0.500001L6.59807 0.5C7.36788 0.5 7.849 1.33333 7.4641 2L4.86603 6.5Z"
                fill="#31546D"
              />
            </svg>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {products.slice(0, 4).map((product) => (
            <div key={product.id} className="bg-white rounded shadow-md p-4 gap-4">
              <img
                height={'198px'}
                width = {'198px'}
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <h2 className="text-lg font-bold mt-2">{product.title}</h2>
              <p className="text-gray-600">{product.price}</p>
              <button className="w-[180px] h-[56px] mt-4 bg-blue-400 text-white py-2 px-4 rounded-full hover:bg-blue-500 transition duration-300">
                Buy
              </button>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {products.slice(4).map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-xl p-4 pl-8 justify-between  gap-7  flex flex-col items-center"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <h2 className="text-lg font-bold mt-2">{product.title}</h2>
              <p className="text-gray-600">{product.price}</p>
              <button className="w-[180px] h-[56px] mt-4 bg-blue-400 text-white py-2 px-4 rounded-full hover:bg-blue-500 transition duration-300">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductGrid;
