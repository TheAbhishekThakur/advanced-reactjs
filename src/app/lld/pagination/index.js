"use client";
import { useEffect, useState } from "react";
import Card from "./Card";
import "./style.css";
import Pagination from "./Pagination";

const PAGE_SIZE = 10;

const PaginationPage = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchData = () => {
    fetch("https://dummyjson.com/products?limit=500")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onPrev = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const onNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const totalProducts = products?.length;
  const numOfPages = Math.ceil(totalProducts / PAGE_SIZE);

  const start = Math.ceil(PAGE_SIZE * currentPage);
  const end = start + PAGE_SIZE;

  return (
    <div>
      <h1>Pagination</h1>
      <Pagination
        onPrev={onPrev}
        onNext={onNext}
        currentPage={currentPage}
        numOfPages={numOfPages}
        setCurrentPage={setCurrentPage}
      />
      <div className="card-container">
        {products &&
          products
            .slice(start, end)
            .map((item) => <Card data={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default PaginationPage;
