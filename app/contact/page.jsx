import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />

      <main className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">
          Contact Us
        </h1>

        <p>
          Reach out to us for orders, inquiries and partnerships.
        </p>

        <p className="mt-4">
          Email: info@himshaktiharvest.com
        </p>

        <p>
          Phone: +91 93346 09452
        </p>
      </main>

      <Footer />
    </>
  );
}