"use client";
import React, { useState } from "react";
import { formData } from "./config";
import "./style.css";

const DynamicForm = () => {
  const [fields, setFields] = useState(formData.fields);

  const handleChange = (e, index) => {
    const { value, type, files } = e.target;

    if (type === "checkbox") {
      // Handle checkbox logic
      const arr = [...fields];
      const optionValue = e.target.value;
      const isChecked = e.target.checked;
      const currentField = arr[index];
      const currentValues = currentField.value || [];
      if (isChecked) {
        // Add the value if checked
        currentValues.push(optionValue);
      } else {
        // Remove the value if unchecked
        const valueIndex = currentValues.indexOf(optionValue);
        if (valueIndex > -1) {
          currentValues.splice(valueIndex, 1);
        }
      }
      arr[index] = {
        ...currentField,
        value: currentValues,
      };
      setFields(arr);
    } else {
      // Update the specific field in the array
      const arr = [...fields];
      arr[index] = {
        ...arr[index],
        value: type === "file" ? files[0] : value,
      };
      setFields(arr);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    fields.forEach((field) => {
      if (field.type === "file") {
        formData.append(field.name, field.value);
      } else {
        formData.append(field.name, field.value);
      }
    });
    console.log("Form Data Submitted: ", Object.fromEntries(formData));
  };
  return (
    <>
      <h1 className="text-center">Config Driven</h1>
      <form onSubmit={onSubmit}>
        {fields.map((field, index) => (
          <div className="form-group" key={field.name}>
            {/* Text, Number, Email, File Inputs */}
            {["text", "number", "file", "email"].includes(field.type) && (
              <div>
                <label htmlFor={field.name}>{field.label}</label>
                <input
                  className="form-input"
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  required={field.required}
                  value={field.value}
                  minLength={field.validation?.minLength}
                  maxLength={field.validation?.maxLength}
                  pattern={field.validation?.pattern}
                  title={field.validation?.message}
                  accept={field.type === "file" ? field.accept : undefined}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
            )}
            {/* Radio Buttons */}
            {field.type === "radio" && (
              <>
                <label htmlFor={field.name}>{field.label}</label>
                {field?.options?.map((option) => (
                  <div key={option.value}>
                    <input
                      type="radio"
                      id={option.value}
                      name={field.name}
                      value={option.value}
                      checked={option.value === field.value}
                      onChange={(e) => handleChange(e, index)}
                    />
                    <label htmlFor={option.value}>{option.label}</label>
                  </div>
                ))}
              </>
            )}
            {/* Checkbox */}
            {field.type === "checkbox" && (
              <>
                <label htmlFor={field.name}>{field.label}</label>
                {field?.options?.map((option) => (
                  <div key={option.value}>
                    <input
                      type="checkbox"
                      id={option.value}
                      name={option.value}
                      checked={option.value.includes(field.value)}
                      onChange={(e) => handleChange(e, index)}
                    />
                    <label htmlFor={option.value}>{option.label}</label>
                  </div>
                ))}
              </>
            )}
            {/* Textarea */}
            {field.type === "textarea" && (
              <div>
                <label htmlFor={field.name}>{field.label}</label>
                <textarea
                  className="form-input"
                  id={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  required={field.required}
                  value={field.value}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
            )}
            {/* Dropdown */}
            {field.type === "dropdown" && (
              <div>
                <label htmlFor={field.name}>{field.label}</label>
                <select
                  className="form-input"
                  id={field.name}
                  name={field.name}
                  value={field.value}
                  onChange={(e) => handleChange(e, index)}
                >
                  <option value="" disabled>
                    Select {field.label}
                  </option>
                  {field.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {/* Button */}
            {field.type === "submit" && (
              <div className="text-center">
                <button className="form-btn" type={field.type}>
                  {field.label}
                </button>
              </div>
            )}
          </div>
        ))}
      </form>
    </>
  );
};

export default DynamicForm;
