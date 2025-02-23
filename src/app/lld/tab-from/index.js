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
  const [errors, setErrors] = useState({
    name: "",
    age: "",
    email: "",
    interests: "",
    stting: "",
  });

  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        if (!state.profile.name) {
          setErrors({ ...errors, name: "Name is not valid" });
          return false;
        } else if (!state.profile.age) {
          setErrors({ ...errors, age: "Age is not valid" });
          return false;
        } else if (!state.profile.email) {
          setErrors({ ...errors, email: "Email is not valid" });
          return false;
        }
        setErrors({ ...errors, name: "", age: "", email: "" });
        return true;
      },
    },
    {
      name: "Interests",
      component: Interests,
      validate: () => {
        if (state.interests.length === 0) {
          setErrors({ ...errors, interests: "Interests is not valid" });
          return false;
        }
        setErrors({ ...errors, interests: "" });
        return true;
      },
    },
    {
      name: "Setting",
      component: Setting,
      validate: () => {
        if (!state.setting) {
          setErrors({ ...errors, setting: "Setting is not valid" });
          return false;
        }
        setErrors({ ...errors, setting: "" });
        return true;
      },
    },
  ];

  const ActiveTabComponent = tabs[activeTab].component;

  const onSubmit = (e) => {
    e.preventDefault();
    if (tabs[activeTab].validate()) {
      console.log("state", state);
    }
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
          <ActiveTabComponent
            state={state}
            setState={setState}
            errors={errors}
          />
          <div>
            {activeTab > 0 && (
              <button
                type="button"
                className="text-white mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => {
                  if (tabs[activeTab].validate()) {
                    setActiveTab((prev) => prev - 1);
                  }
                }}
              >
                Prev
              </button>
            )}
            {activeTab < tabs.length - 1 && activeTab !== tabs.length - 1 && (
              <button
                type="button"
                className="text-white mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => {
                  if (tabs[activeTab].validate()) {
                    setActiveTab((prev) => prev + 1);
                  }
                }}
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
