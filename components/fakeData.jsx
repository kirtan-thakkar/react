"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const FakeData = () => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const jsonData = await response.json();
    setProducts(jsonData.products ?? []);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="text-center text-2xl font-semibold text-neutral-900 text-shadow-md bg-red-200 mb-12">
        <h1>This is the component that fetches the data from a api!</h1>
      </div>

      <div className="flex flex-wrap h-48 w-full justify-center items-start gap-6 ">
        {products.map((item) => (
          <div className="border border-neutral-700 shadow-md rounded-lg mx-auto max-w-4xl w-full px-4 py-6" key={item.id}>
            <div key={item.id}>
              <h1 className="text-xl font-bold text-neutral-900">{item.title}</h1>
              <p className="text-gray-600">{item.description}</p>
              <Image
                src={item.thumbnail}
                alt={item.title}
                width={200}
                height={50}
                className="object-cover rounded-md bg-neutral-100 h-50 mx-auto w-full max-w-md"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FakeData;
