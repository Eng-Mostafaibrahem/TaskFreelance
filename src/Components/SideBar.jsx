import React, { useEffect, useState } from "react";
import axios from "axios";

import MainSection from "./MainSection";
import NavBar from "./NavBar";
import FilterSection from "./FilterSection";

export default function SideBar() {
  const [products, setProducts] = useState([]);
  const [electronics, setElectronics] = useState([]);
  const [JeweleryProducts, setJeweleryProducts] = useState([]);
  const [mensClothingProducts, setMensClothingProducts] = useState([]);
  const [womensClothingProducts, setWomensClothingProducts] = useState([]);

  async function getWomensClothing() {
    const data = await axios.get(
      "https://fakestoreapi.com/products/category/women's%20clothing"
    );
    setWomensClothingProducts(data.data);
  }

  async function getElectronics() {
    const data = await axios.get(
      "https://fakestoreapi.com/products/category/electronics"
    );
    setElectronics(data.data);
  }

  async function getJewelery() {
    const data = await axios.get(
      "https://fakestoreapi.com/products/category/jewelery"
    );
    setJeweleryProducts(data.data);
  }

  async function getMensClothing() {
    const data = await axios.get(
      "https://fakestoreapi.com/products/category/men's%20clothing"
    );
    setMensClothingProducts(data.data);
  }

  useEffect(() => {
    getElectronics();
    getJewelery();
    getMensClothing();
    getWomensClothing();
  }, []);
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 "
        aria-label="Sidebar"
      >
        <div class="h-full px-3 pt-8 overflow-y-auto bg-gray800 dark:bg-gray-800">
          <FilterSection />
        </div>
      </aside>

      <div class="p-4 sm:ml-64 ">
        <NavBar />
        <MainSection title={"electronics"} data={electronics} />
        <MainSection title={"Jewelery"} data={JeweleryProducts} />
        <MainSection title={"Men'sClothing"} data={mensClothingProducts} />
        <MainSection title={"Women'sClothing"} data={womensClothingProducts} />
      </div>
    </>
  );
}
