import { BsBag } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import Link from "next/link";

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
                    <BsHeart
                    size={18}/>
                </Link>
            </li>
            <li alt="Checkout"> 
                <Link href='/checkout'>
                    <BsBag
                    size={18}/>
                </Link>
            </li>
        </ul>
        </nav>
    )
}