export const formData = {
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Enter your name",
      required: true,
      value: "",
      validation: {
        required: true,
        minLength: 2,
        maxLength: 50,
        message: "Name must be between 2 and 50 characters.",
      },
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      value: "",
      placeholder: "Enter your email",
      required: true,
      validation: {
        required: true,
        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Please enter a valid email address.",
      },
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "number",
      placeholder: "Enter your phone number",
      required: true,
      value: "",
      validation: {
        required: true,
        minLength: 10,
        maxLength: 10,
        message: "Phone number must be 10 digits.",
      },
    },
    {
      name: "message",
      label: "Message",
      type: "textarea",
      placeholder: "Enter your message",
      required: true,
      value: "",
      validation: {
        required: true,
        minLength: 10,
        maxLength: 500,
        message: "Message must be between 10 and 500 characters.",
      },
    },
    {
      name: "file",
      label: "Upload File",
      type: "file",
      required: false,
      value: "",
      validation: {
        maxSize: 5 * 1024 * 1024, // 5 MB
        accept: ".pdf,.doc,.docx",

        message: "File size must be less than 5 MB.",
      },
    },
    {
      name: "Country",
      label: "country",
      type: "dropdown",
      value: "",
      options: [
        {
          label: "India",
          value: "india",
          validation: {
            required: true,
            message: "Please select country.",
          },
        },
        {
          label: "USA",
          value: "usa",
          validation: {
            required: true,
            message: "Please select country.",
          },
        },
      ],
    },
    {
      name: "gender",
      label: "Gender",
      type: "radio",
      value: "",
      required: true,
      message: "Please select gender",
      options: [
        {
          label: "Male",
          value: "male",
        },
        {
          label: "Female",
          value: "female",
        },
      ],
    },
    {
      name: "skills",
      label: "Top Skills",
      type: "checkbox",
      required: true,
      value: [],
      validation: {
        required: true,
        message: "You select atleast one skill.",
      },
      options: [
        {
          label: "React.js",
          value: "react",
        },
        {
          label: "Node.js",
          value: "node",
        },
      ],
    },
    {
      name: "submit",
      label: "Submit",
      type: "submit",
      isSubmitted: false,
      value: "Submit",
    },
  ],
};
