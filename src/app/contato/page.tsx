"use client";

import { useEffect, useState } from "react";

type IProduct = {
  name: string;
  amount: number;
  price: number;
  total: number;
};

export default function Contato() {
  const [products, setProducts] = useState<IProduct[]>([]);

  const [productForm, setProductForm] = useState<IProduct>({
    name: "",
    amount: 0,
    price: 0,
    total: 0,
  });

  function handleChangeName(e: any) {
    setProductForm({ ...productForm, name: e.target.value || "" });
  }

  function handleChangeAmount(e: any) {
    const amount = e.target.value || 0;
    const total = amount * productForm.price;
    setProductForm({ ...productForm, amount, total });
  }

  function handleChangePrice(e: any) {
    const price = e.target.value || 0;
    const total = price * productForm.amount;
    setProductForm({ ...productForm, price, total });
  }

  function handleAddProduct(e: any): void {
    e.preventDefault();

    setProducts([...products, productForm]);
    setProductForm({ name: "", amount: 0, price: 0, total: 0 });
  }

  function handleRemoveItem(index: number): void {
    let tempArray = [...products];
    tempArray.splice(index, 1);

    setProducts(tempArray);
  }

  return (
    <div className="w-full h-screen bg-[#F5F5F7] ">
      <div className="w-full h-[100px] flex items-center justify-center border-b-[1px] shadow-md shadow-slate-900/25 ">
        <a href="../" className="text-[#333336] text-[24px]">
          Adicionar Produtos
        </a>
      </div>

      <form
        action=""
        className="mx-auto w-[400px] mt-10 p-5 flex text-[#86868b] flex-col bg-white rounded-[20px] "
      >
        Nome:
        <input
          type="text"
          value={productForm.name}
          onChange={handleChangeName}
          className="p-3 text-[#1d1d1f] border-[1px] border-[#d2d2d7] rounded-[12px] outline-none"
        />
        Quantidade:
        <input
          type="number"
          value={productForm.amount}
          onChange={handleChangeAmount}
          className="p-3 text-[#1d1d1f] border-[1px] border-[#d2d2d7] rounded-[12px] outline-none"
        />
        Preço unitário:
        <input
          type="number"
          value={productForm.price}
          onChange={handleChangePrice}
          className="p-3 text-[#1d1d1f] border-[1px] border-[#d2d2d7] rounded-[12px] outline-none"
        />
        Preço total:
        <input
          type="text"
          readOnly
          value={productForm.total}
          className="p-3 text-[#1d1d1f] border-[1px] border-[#d2d2d7] rounded-[12px] outline-none"
        />
        <button
          onClick={handleAddProduct}
          className="mx-auto mt-3 w-1/2 p-2 bg-[#272729] hover:bg-[#272729]/95 transition-all text-white rounded-[980px]"
        >
          Adicionar
        </button>
      </form>

      <div className="mx-auto w-[400px] mt-10 p-5 flex text-[#86868b] flex-col bg-white rounded-[20px] ">
        <h1 className="mb-2">Produtos cadastrados ({products.length})</h1>
        <ul className="flex flex-col divide-y divide-dashed divide-slate-400">
          {products.map((item, index) => (
            <li key={index} className="p-2 flex items-center justify-between">
              {item.name} Qtd:{item.amount} Valor R${item.price} Total:
              {item.total}
              <button
                onClick={() => handleRemoveItem(index)}
                className="w-10 h-10 bg-red-500 hover:bg-red-500/90 rounded-[5px] text-white"
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
