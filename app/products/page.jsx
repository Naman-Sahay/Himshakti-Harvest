import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Products() {
  return (
    <>
      <Navbar />

      <main className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">
          Our Products
        </h1>

        <p>
          Browse our collection of jams, herbal teas, pickles and
          other Himalayan food products.
        </p>
      </main>

      <Footer />
    </>
  );
}