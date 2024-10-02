import Header from "./Header";
import AgatePhoneGripShowcase from "./LastPage";
import Navbar from "./Navbar";
import ProductListing from "./ProductCard";

export default function App() {
  return (
    <>
      <Navbar></Navbar>
      <ProductListing></ProductListing>
      <AgatePhoneGripShowcase></AgatePhoneGripShowcase>
      <svg
        className=" w-full  pt-11"
        viewBox="0 0 1440 269"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="1440" height="269" fill="#0A294D" fill-opacity="0.8" />
      </svg>
    </>
  );
}
