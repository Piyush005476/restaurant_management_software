import { Footer as FlowbiteFooter } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

export default function Footer() {
  return (
    <div className="relative bg-gradient-to-r from-amber-900 via-yellow-800 to-orange-900 shadow-lg">
      <div className="absolute inset-0 bg-black/40"></div>
      <FlowbiteFooter container className="relative z-10 bg-transparent">
        <div className="w-full max-w-screen-xl p-4 py-6 mx-auto lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center">
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-amber-100 hover:text-white transition-colors duration-300">
                  Muskan Restaurant
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-amber-200">About</h2>
                <ul className="font-medium">
                  <li className="mb-4">
                    <a
                      href="#"
                      className="text-amber-100 hover:text-white transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Our Story
                    </a>
                  </li>
                  <li>
                    <Link to="/about" className="text-amber-100 hover:text-white transition-colors duration-300">
                      About Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-amber-200">Menu</h2>
                <ul className="font-medium">
                  <li className="mb-4">
                    <Link to="/item" className="text-amber-100 hover:text-white transition-colors duration-300">
                      View Menu
                    </Link>
                  </li>
                  <li>
                    <Link to="/signin" className="text-amber-100 hover:text-white transition-colors duration-300">
                      Reserve Table
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-amber-200">Contact</h2>
                <ul className="font-medium">
                  <li className="mb-4">
                    <span className="text-amber-100">+91 7367052678</span>
                  </li>
                  <li>
                    <span className="text-amber-100">123 Culinary Avenue</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-amber-200/20 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-amber-100 sm:text-center">
              © 2024 Muskan Restaurant™. All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <a href="#" className="text-amber-100 hover:text-white transition-colors duration-300">
                <BsFacebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-amber-100 hover:text-white transition-colors duration-300">
                <BsInstagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-amber-100 hover:text-white transition-colors duration-300">
                <BsTwitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </FlowbiteFooter>
    </div>
  );
}
