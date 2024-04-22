import { PiBagSimpleLight } from "react-icons/pi";
import { PiHeartLight } from "react-icons/pi";

import Link from "next/link";
import Dropdown from "@/props/dropdownNavigation";

export default function Navbar () {
    return(
        <nav className="flex m-3 py-2 px-5 justify-between">
            <a href="/" className="text-2xl font-bold">
                <span
                className="bg-rose-300">K</span>ickzout.co
            </a>
        <ul className="flex ml-4 gap-4">
            <li>
            <Link href='#'>
                    <PiHeartLight className="w-6 h-6"
                    />
                </Link>
            </li>
            <li alt="Checkout"> 
                <Link href='/checkout'>
                    <PiBagSimpleLight className="w-6 h-6" 
                    />
                </Link>
            </li>
            <li>
            <Dropdown />
            </li>
        </ul>
        </nav>
    )
}