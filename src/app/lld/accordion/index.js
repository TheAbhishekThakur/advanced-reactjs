import { useState } from "react";
import AccordianItem from "./accordianItem";

const data = [
  {
    title: "Accordion Item 1",
    body: "Content for Accordion Item 1",
  },
  {
    title: "Accordion Item 2",
    body: "Content for Accordion Item 2",
  },
  {
    title: "Accordion Item 3",
    body: "Content for Accordion Item 3",
  },
  {
    title: "Accordion Item 4",
    body: "Content for Accordion Item 4",
  },
  {
    title: "Accordion Item 5",
    body: "Content for Accordion Item 5",
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="w-[50%] m-auto mt-5">
      <h1>Accordion</h1>
      {data.map((item, index) => (
        <AccordianItem
          key={index}
          title={item.title}
          body={item.body}
          setOpenIndex={() => {
            if (openIndex === index) {
              setOpenIndex(null);
              return;
            }
            setOpenIndex(index);
          }}
          isOpen={openIndex === index}
        />
      ))}
    </div>
  );
};

export default Accordion;
