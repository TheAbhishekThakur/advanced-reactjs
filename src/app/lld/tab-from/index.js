"use client";
import Profile from "./Profile";
import Interests from "./Interests";
import Setting from "./Setting";
import "./style.css";
import { useState } from "react";

const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [state, setState] = useState({
    profile: {
      name: "",
      age: "",
      email: "",
    },
    interests: [],
    setting: "dark",
  });

  const tabs = [
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Interests",
      component: Interests,
    },
    {
      name: "Setting",
      component: Setting,
    },
  ];

  const ActiveTabComponent = tabs[activeTab].component;

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("state", state);
  };

  return (
    <>
      <h1>Tab Form Component</h1>
      <div className="tab-page-container">
        <div className="tab-container">
          {tabs.map((tab, index) => (
            <div
              key={tab.name}
              className="tab-box"
              onClick={() => setActiveTab(index)}
            >
              {tab.name}
            </div>
          ))}
        </div>
      </div>
      <div className="body">
        <form onSubmit={onSubmit}>
          <ActiveTabComponent state={state} setState={setState} />
          <div>
            {activeTab > 0 && (
              <button
                type="button"
                className="text-white mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => setActiveTab((prev) => prev - 1)}
              >
                Prev
              </button>
            )}
            {activeTab < tabs.length - 1 && activeTab !== tabs.length - 1 && (
              <button
                type="button"
                className="text-white mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => setActiveTab((prev) => prev + 1)}
              >
                Next
              </button>
            )}
          </div>
          {activeTab === tabs.length - 1 && (
            <button
              type="submit"
              className="text-white mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </>
  );
};
export default TabForm;
