' use client '

import Cards from "@/components/Card";
import Collection from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <div>
        <div className="container mx-auto">
          <div className="container title p-12">
              <Cards />
              <Collection />
          </div>
        </div>
      </div>
    </main>
  );
}
