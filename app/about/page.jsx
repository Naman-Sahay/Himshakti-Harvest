import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">
          About HimShakti Harvest
        </h1>

        <p>
          HimShakti Harvest brings authentic Himalayan food products
          directly from local farmers and producers to customers.
        </p>
      </main>

      <Footer />
    </>
  );
}