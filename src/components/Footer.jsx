import Link from "next/link"


export default function Footer () {
    return(
      <footer className="bg-slate-200 ">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="footer-section">
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <p className="text-sm">
            Kickzout started with a simple idea: to provide sneaker lovers with the latest and greatest kicks, all in one place. Since 2024, we've been curating a collection of top-quality sneakers to help you step up your style game.
            </p>
          </div>
          <div className="footer-section">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
              <li><Link href="./products" className="hover:text-gray-400">Products</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h2 className="text-xl font-bold mb-4">Our Office</h2>
            <p className="text-sm">123 Street Name</p>
            <p className="text-sm">City, Country</p>
            <p className="text-sm">email@example.com</p>
            <p className="text-sm">+123 456 7890</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Kickzout. All rights reserved , Created By Ardhiffa Mada Perdana</p>
        </div>
      </div>
    </footer>
    )
}