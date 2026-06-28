"use client";

import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import Loader from "../components/ui/Loader";
import Toast from "../components/ui/Toast";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load products.");
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />

      <section className="max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Products
        </h2>

        {loading && <Loader />}

        {error && <Toast message={error} />}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.name}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}