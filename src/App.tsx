import { useState } from "react";
import "./App.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion faqs={faqs} />
    </div>
  );
}

function Accordion({ faqs }: any) {
  // const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<any>();
  debugger;
  // function handleOpen(idx: number) {
  //   console.log(idx, "==========selected id");
  //   setSelectedIndex((prevIndex: any) => {
  //     console.log(prevIndex, "========prev ");
  //     return prevIndex === idx ? null : idx;
  //   });
  // }
  return (
    <div className="accordion">
      {faqs.map((f: any, idx: number) => {
        return (
          <div>
            <Item
              item={f}
              idx={idx}
              // onOpen={handleOpen}
              onOpen={setSelectedIndex}
              selectedIndex={selectedIndex}
            />
          </div>
        );
      })}
    </div>
  );
}

function Item({ item, idx, onOpen, selectedIndex }: any) {
  const isOpen = idx == selectedIndex;
  console.log(isOpen, "=====isOpen");
  function handleClick() {
    onOpen((prevIdx: any) => (prevIdx === idx ? null : idx));
  }

  return (
    <div className={`item ${isOpen && "open"}`} onClick={handleClick}>
      <span className="number">{`0${idx + 1}`}</span>
      <h2 className="text">{item.title}</h2>
      <span className="icon">{isOpen ? "-" : "+"}</span>
      {isOpen && <div className="content-box">{item.text}</div>}
    </div>
  );
}
