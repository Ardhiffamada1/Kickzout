import { FaCcVisa } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcAmex } from "react-icons/fa6";
import { FaCcDiscover } from "react-icons/fa6";
import { MdOutlineVerifiedUser } from "react-icons/md";


export default function Footer () {
    return(
        <footer className="bg-slate-200 p-5">
          <div className=" py-10 sm:px-6 lg:col-span-3 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-2">
              <div>
                <ul className="mt-8 space-y-1 text-sm text-gray-700">
                  <li>We Accept payment</li>
                </ul>

                <ul className="mt-8 flex gap-6">
                  <li>
                    <span>
                    <FaCcVisa 
                    size={30}/>
                    </span>
                  </li>

                  <li>
                  <span>
                    <FaCcMastercard 
                    size={30}/>
                    </span>
                  </li>
                  
                  <li>
                  <span>
                    <FaCcAmex 
                    size={30}/>
                    </span>
                  </li>
                  
                  <li>
                  <span>
                    <FaCcDiscover
                    size={30}/>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4">
                <div>
                  <p className="font-medium text-gray-900">Brands</p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <a href="#" className="text-gray-700 transition hover:opacity-75"> Adidas </a>
                    </li>

                    <li>
                      <a href="#" className="text-gray-700 transition hover:opacity-75"> Nike </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium text-gray-900">Customer Services</p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <a href="#" className="text-gray-700 transition hover:opacity-75"> Contacts </a>
                    </li>

                    <li>
                      <a href="#" className="text-gray-700 transition hover:opacity-75"> Tracking </a>
                    </li>

                    <li>
                      <a href="#" className="text-gray-700 transition hover:opacity-75"> Orders </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-100 pt-12">
              <div className="sm:flex sm:items-center sm:justify-between">
                <span className="flex gap-2 text-xs text-gray-500">
                <MdOutlineVerifiedUser size={18}/> Secure Shopping
                </span>

                <p className="mt-8 text-xs text-gray-500 sm:mt-0">
                  &copy; 2024. Kickzout. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
    )
}