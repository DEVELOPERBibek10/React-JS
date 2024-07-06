import { useState } from "react";

interface ButtonClick {
  text: string | number;
  onclick: () => void;
  something?: boolean;
}

interface Book {
  name: string;
  price: number;
}

function Button(props: ButtonClick) {
  const { text } = props;
  const [value, setValue] = useState<number>(1);
  const [book, setBook] = useState<Book>({
    name: "React",
    price: 100,
  });

  const handleValueChange = () => {
    setValue(value + 1);
  };

  const handleBookChange = () => {
    setBook({ name: "JavaScript", price: 200 });
  };

  return (
    <>
      <h1 className="font-semibold">{value}</h1>
      <h3>
        {book.name} - ${book.price}
      </h3>
      <button
        onClick={handleValueChange}
        className="btn-default overflow-hidden relative w-64 bg-stone-50 text-gray-900 py-4 px-4 rounded-xl font-bold uppercase transition-all duration-100 -- hover:shadow-md border border-stone-100 hover:bg-gradient-to-t hover:from-stone-100 before:to-stone-50 hover:-translate-y-[3px]"
      >
        <span className="relative">{text}</span>
      </button>
      <button onClick={handleBookChange}>Change Book</button>
    </>
  );
}

export default Button;
