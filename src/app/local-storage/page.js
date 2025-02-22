"use client";
import {
  addItem,
  getItem,
  removeItem,
  clearStorage,
} from "@/hooks/useLocalStorage";

const LocalStoragePage = () => {
  return (
    <div>
      <h1>Local Storage Custom hooks</h1>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => {
          addItem("name", "Abhishek Thakue");
        }}
      >
        Set Data in Storage
      </button>

      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => {
          const data = getItem("name");
          console.log("Data", data);
        }}
      >
        Get Data from Storage
      </button>

      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => {
          removeItem("name");
        }}
      >
        Remove Data from Storage
      </button>

      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => {
          clearStorage();
        }}
      >
        Clear Data from Storage
      </button>
    </div>
  );
};
export default LocalStoragePage;
