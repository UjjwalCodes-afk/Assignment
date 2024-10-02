import React from "react";
import { ShoppingCart } from "lucide-react";

const PopRockCrystalShop = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-300 via-purple-300 to-blue-300">
      {/* Navbar */}
      <nav className="bg-white bg-opacity-20 p-4 ">
        <div className="container  flex justify-between items-center">
          <div className="flex items-center">
            <svg
              width="37"
              height="64"
              viewBox="0 0 37 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_54)">
                <path
                  d="M18.5219 0C8.29537 0 0 8.44103 0 18.8472V45.1975C0 55.6036 8.29537 64.0447 18.5219 64.0447C28.7485 64.0447 37.0439 55.6036 37.0439 45.1975V18.8472C37 8.44103 28.7046 0 18.5219 0ZM35.5516 45.1975C35.5516 54.7551 27.9146 62.5262 18.5219 62.5262C9.1293 62.5262 1.49229 54.7551 1.49229 45.1975V18.8472C1.49229 9.2896 9.1293 1.51849 18.5219 1.51849C27.9146 1.51849 35.5516 9.2896 35.5516 18.8472V45.1975Z"
                  fill="white"
                />
                <path
                  d="M12.7725 22.4201L24.7108 36.8904L31.8211 28.2708L26.0275 22.4201H12.7725ZM23.9646 23.8939L19.6195 28.3154L15.9765 23.8939H23.9646ZM24.7108 34.5234L20.5412 29.4766L25.7203 24.2066L29.7582 28.3154L24.7108 34.5234Z"
                  fill="white"
                />
                <path
                  d="M5.22313 28.2707L18.5221 44.4382L23.5695 38.3196L10.7095 22.688L5.22313 28.2707ZM18.5221 42.0712L7.19822 28.3601L10.5778 24.9211L21.5944 38.3196L18.5221 42.0712Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_54">
                  <rect width="37" height="64" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="text-white text-xl font-semibold pl-3">
              Pop Rock Crystal
            </span>
          </div>
          <div className="flex row justify-items-center gap-20">
            <a href="#" className="text-white hover:text-gray-200 font-medium">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-200  font-medium">
              Shop
            </a>
            <a href="#" className="text-white hover:text-gray-200  font-medium">
              About Us
            </a>
            <a href="#" className="text-white hover:text-gray-200  font-medium">
              Help
            </a>
            {/* <ShoppingCart className="text-white" /> */}
            <div className="flex row gap-2">
              <h2 className="h-2 text-red-600 rounded-md border-red">00</h2>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.8502 11.25H21.0937L15.75 4.125C15.6626 4.00857 15.5494 3.91406 15.4192 3.84897C15.289 3.78389 15.1455 3.75 15 3.75C14.8544 3.75 14.7109 3.78389 14.5807 3.84897C14.4505 3.91406 14.3373 4.00857 14.25 4.125L8.90621 11.25H5.14976C4.64444 11.2492 4.15943 11.4489 3.80112 11.8052C3.44281 12.1616 3.24045 12.6455 3.23844 13.1508C3.23735 13.3294 3.26322 13.5072 3.31519 13.6781L6.02633 23.2371C6.20262 23.8601 6.57755 24.4085 7.09411 24.7989C7.61066 25.1893 8.24057 25.4003 8.88805 25.3998H21.1119C21.7594 25.3978 22.3889 25.1864 22.9064 24.7971C23.4239 24.4079 23.8015 23.8616 23.983 23.24L26.6976 13.6682C26.7101 13.6228 26.7192 13.5766 26.7246 13.5299L26.7556 13.241C26.7591 13.2109 26.7609 13.1805 26.7609 13.1502C26.7587 12.6451 26.5564 12.1614 26.1982 11.8052C25.8401 11.449 25.3553 11.2494 24.8502 11.25ZM15 6.2502L18.75 11.25H11.25L15 6.2502ZM15 20.6057C14.5635 20.6036 14.1375 20.4723 13.7756 20.2283C13.4137 19.9843 13.1322 19.6386 12.9667 19.2347C12.8011 18.8309 12.7588 18.3871 12.8453 17.9593C12.9317 17.5315 13.1429 17.1389 13.4522 16.831C13.7616 16.5231 14.1552 16.3138 14.5834 16.2294C15.0116 16.145 15.4552 16.1894 15.8583 16.3569C16.2613 16.5244 16.6057 16.8075 16.8479 17.1705C17.0902 17.5336 17.2195 17.9602 17.2195 18.3967C17.2162 18.9831 16.9809 19.5445 16.565 19.958C16.1491 20.3715 15.5864 20.6035 15 20.6033V20.6057Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </nav>
      <div className="container mx-auto mt-16 flex p-4">
        {/* Left Column */}
        <div className="w-1/2 pr-8">
          <h1 className="text-5xl font-normal text-white mb-4 ">
            Welcome to
            <br />
            Pop Rock Crystal Shop!
          </h1>
          <p className="text-white mb-8 pt-5 font-normal text-xl">
            Here you will find unique phone accessories, crystals, jewelry and
            more. Free shipping inside the U.S. and our phone grips come with a
            limited warranty. Enjoy!
          </p>
          <div className="flex space-x-4">
            <button className="bg-white text-blue-500 px-6 py-5 text-xl rounded-full font-semibold hover:bg-blue-100 transition duration-300 ">
              SHOP NOW
            </button>
            <button className="text-white border text-xl border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-blue-500 transition duration-300">
              About us
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-[569px] h-[554px] top-[173px] left-[821px] rounded-full">
          <div className="bg-white rounded-lg p-4 shadow-lg">
            <div className="bg-purple-200 inline-block px-3 py-1 rounded-full text-sm font-semibold text-purple-700 mb-4">
              New lot
            </div>
            <img
              src={"images/logo.png"}
              alt="Crystal Agate Phone Grip"
              className="w-[362px] h-[362px] object-cover rounded-lg mb-4 pl-12"
            />
            <h2 className="text-xl font-semibold text-gray-800 pl-10">
              CRYSTAL AGATE PHONE GRIP - 18.99$
            </h2>
          </div>
          <svg
            width="260"
            height="36"
            viewBox="0 0 260 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_60)" filter="url(#filter0_d_1_60)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9 2C8.20435 2 7.44129 2.31607 6.87868 2.87868C6.31607 3.44129 6 4.20435 6 5L6 23C6 23.7956 6.31607 24.5587 6.87868 25.1213C7.44129 25.6839 8.20435 26 9 26H27C27.7956 26 28.5587 25.6839 29.1213 25.1213C29.6839 24.5587 30 23.7956 30 23V5C30 4.20435 29.6839 3.44129 29.1213 2.87868C28.5587 2.31607 27.7956 2 27 2H9ZM18.531 17.969C18.6718 18.1098 18.7509 18.3008 18.7509 18.5C18.7509 18.6992 18.6718 18.8902 18.531 19.031C18.3902 19.1718 18.1992 19.2509 18 19.2509C17.8008 19.2509 17.6098 19.1718 17.469 19.031L12.969 14.531C12.8992 14.4613 12.8437 14.3786 12.8059 14.2874C12.7681 14.1963 12.7487 14.0987 12.7487 14C12.7487 13.9013 12.7681 13.8037 12.8059 13.7125C12.8437 13.6214 12.8992 13.5387 12.969 13.469L17.469 8.969C17.5387 8.89927 17.6215 8.84395 17.7126 8.80621C17.8037 8.76848 17.9014 8.74905 18 8.74905C18.0986 8.74905 18.1963 8.76848 18.2874 8.80621C18.3785 8.84395 18.4613 8.89927 18.531 8.969C18.6007 9.03873 18.656 9.12152 18.6938 9.21262C18.7315 9.30373 18.7509 9.40138 18.7509 9.5C18.7509 9.59862 18.7315 9.69627 18.6938 9.78738C18.656 9.87848 18.6007 9.96127 18.531 10.031L15.3105 13.25H22.5C22.6989 13.25 22.8897 13.329 23.0303 13.4697C23.171 13.6103 23.25 13.8011 23.25 14C23.25 14.1989 23.171 14.3897 23.0303 14.5303C22.8897 14.671 22.6989 14.75 22.5 14.75H15.3105L18.531 17.969Z"
                fill="#8A93E5"
              />
            </g>
            <g clip-path="url(#clip1_1_60)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M257 2C257.796 2 258.559 2.31607 259.121 2.87868C259.684 3.44129 260 4.20435 260 5V23C260 23.7956 259.684 24.5587 259.121 25.1213C258.559 25.6839 257.796 26 257 26H239C238.204 26 237.441 25.6839 236.879 25.1213C236.316 24.5587 236 23.7956 236 23V5C236 4.20435 236.316 3.44129 236.879 2.87868C237.441 2.31607 238.204 2 239 2H257ZM247.469 17.969C247.328 18.1098 247.249 18.3008 247.249 18.5C247.249 18.6992 247.328 18.8902 247.469 19.031C247.61 19.1718 247.801 19.2509 248 19.2509C248.199 19.2509 248.39 19.1718 248.531 19.031L253.031 14.531C253.101 14.4613 253.156 14.3786 253.194 14.2874C253.232 14.1963 253.251 14.0987 253.251 14C253.251 13.9013 253.232 13.8037 253.194 13.7125C253.156 13.6214 253.101 13.5387 253.031 13.469L248.531 8.969C248.461 8.89927 248.378 8.84395 248.287 8.80621C248.196 8.76848 248.099 8.74905 248 8.74905C247.901 8.74905 247.804 8.76848 247.713 8.80621C247.622 8.84395 247.539 8.89927 247.469 8.969C247.399 9.03873 247.344 9.12152 247.306 9.21262C247.268 9.30373 247.249 9.40138 247.249 9.5C247.249 9.59862 247.268 9.69627 247.306 9.78738C247.344 9.87848 247.399 9.96127 247.469 10.031L250.69 13.25H243.5C243.301 13.25 243.11 13.329 242.97 13.4697C242.829 13.6103 242.75 13.8011 242.75 14C242.75 14.1989 242.829 14.3897 242.97 14.5303C243.11 14.671 243.301 14.75 243.5 14.75H250.69L247.469 17.969Z"
                fill="#8A93E5"
              />
            </g>
            <circle cx="61" cy="14" r="7" fill="#8A93E5" />
            <circle cx="85" cy="14" r="7" fill="#D7DBFF" />
            <circle cx="109" cy="14" r="7" fill="#D7DBFF" />
            <circle cx="133" cy="14" r="7" fill="#D7DBFF" />
            <circle cx="157" cy="14" r="7" fill="#D7DBFF" />
            <circle cx="181" cy="14" r="7" fill="#D7DBFF" />
            <circle cx="205" cy="14" r="7" fill="#D7DBFF" />
            <defs>
              <filter
                id="filter0_d_1_60"
                x="0"
                y="0"
                width="36"
                height="36"
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
                <feGaussianBlur stdDeviation="3" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.541176 0 0 0 0 0.576471 0 0 0 0 0.898039 0 0 0 0.15 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1_60"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_60"
                  result="shape"
                />
              </filter>
              <clipPath id="clip0_1_60">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(6 2)"
                />
              </clipPath>
              <clipPath id="clip1_1_60">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="matrix(-1 0 0 1 260 2)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PopRockCrystalShop;
