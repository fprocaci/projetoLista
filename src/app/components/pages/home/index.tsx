import { useState } from "react";

type IProduct = {
  id?: number;
  name: string;
};

export default function Lista() {
  const [products, setProducts] = useState<string>("");

  function handleChangeProducts(e: any): void {
    setProducts(e.target.value);
  }

  return (
    <div className="">
      <input type="text" value={products} onChange={handleChangeProducts} />
    </div>
  );
}
