' use client '

import Cards from "@/components/Card";
import CustomerReview from "@/components/CustomerReview";
import reviews from '../data/review.json';
import Collection from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Collection />
      <Cards />
      <div className="mt-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Customer Reviews</h1>
        <div className="flex flex-col md:flex-row xl:flex-row justify-center gap-3">
        {reviews.map(review => (
          <CustomerReview key={review.id} {...review}
           />
        ))}
      </div>
      </div>
    </main>
  );
}
