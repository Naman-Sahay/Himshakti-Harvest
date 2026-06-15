import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <section className="max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProductCard
            title="Apple Jam"
            description="Made from fresh Himalayan apples."
            price="180"
          />

          <ProductCard
            title="Apricot Jam"
            description="Sweet and natural apricot spread."
            price="220"
          />

          <ProductCard
            title="Herbal Tea"
            description="Refreshing herbal blend from the hills."
            price="150"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}