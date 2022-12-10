import { ShoppingCart } from "phosphor-react";
import React from "react";
import { Link } from "react-router-dom";
import addmobile from "../assets/addmobile.webp";
import addweb from "../assets/addweb.webp";

export const Navbar = () => {
    return (
        <div>
            <div className=" bg-black flex justify-center">
                <div className="flex sm:hidden mx-auto">
                    <img src={addmobile} alt="" />
                </div>
                <div className="hidden sm:flex mx-auto">
                    <img src={addweb} alt="" />
                </div>{" "}
            </div>

            <div className=" w-100 h-35 bg-[#ec0062] flex justify-end ">
                <div className=" mr-50 flex items-center">
                    <Link className="no-underline text-white ml-5 text-sm" to="/">Shop</Link>
                    <Link className="no-underline text-white ml-5 text-sm" to="/cart">
                        <ShoppingCart size={32} />
                    </Link>
                </div>
            </div>
        </div>
    );
};
