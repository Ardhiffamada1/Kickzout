import Link from 'next/link';
import Image from 'next/image';
import Products from '../data/product.json'


export default function ProductShow () {
// Get the first 4 products from the array
  const productsToShow = Products.slice(0, 5);

  const usdToIdr = (usd) => {
    const exchangeRate = 15000; // Example exchange rate
    const idr = usd * exchangeRate;
    return new Intl.NumberFormat('id-ID').format(idr); // Format with delimiter for IDR
  };

  return(
    <div className="lg:col-span-3">
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {productsToShow.map(product => (
      <li key={product.id}>
        <Link href="#" className="group block overflow-hidden">
          <Image
            src={product.image}
            height={500}
            width={500}
            objectFit="contain"
            priority
            alt=""
            className="h-[350px] w-full object-contain transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative bg-white pt-3">
            <h3
              className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
            >
              {product.name}
            </h3>

            <p className="mt-2">
              <span className="sr-only"> Regular Price </span>

              <span className="tracking-wider text-gray-900">Rp.{usdToIdr(product.price)}</span>
            </p>
          </div>
        </Link>
      </li>
      ))}
      </ul>
      </div>
  )
}