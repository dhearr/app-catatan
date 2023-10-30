import { useState } from "react";
import Item from "./Item";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

export default function GroceryList({
  items,
  onDeleteItem,
  onToogleItem,
  onClearItems,
}) {
  const [sortBy, setSortBy] = useState("input");

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "data-catatan",
    onAfterPrint: () => alert("Print  Success 💙💙💙 "),
  });

  let sortedItems;

  switch (sortBy) {
    case "name":
      sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "checked":
      sortedItems = items.slice().sort((a, b) => a.checked - b.checked);
      break;
    default:
      sortedItems = items;
      break;
  }

  return (
    <div className="bg-gradient-to-b from-cream1 to-cream2 p-3 sm:p-10">
      <div className="flex justify-between p-5 bg-cream4 rounded-t-lg font-comforta">
        <h1 className="text-center text-cream1 font-black">List Produk</h1>
        <button
          onClick={handlePrint}
          className="bg-cream6 hover:bg-cream7 text-cream1 font-bold shadow-lg hover:shadow-xl hover:scale-105 py-1 px-5 rounded-lg transition-all"
        >
          Cetak
        </button>
      </div>
      <div className="relative bg-cream1 h-[400px] overflow-x-auto shadow-xl">
        <table
          ref={componentRef}
          className=" w-full text-sm text-left text-gray-500 font-comforta"
        >
          {/* <thead className="text-xs text-center text-cream1 bg-cream2 border-b-2 border-cream1">
            <tr>
              <th scope="col" className="p-5">
                <div className="flex items-center"></div>
              </th>
              <th scope="col" className="px-6 py-3 sm:text-lg">
                Nama
              </th>
              <th scope="col" className="px-6 py-3 sm:text-lg">
                Produk
              </th>
              <th scope="col" className="px-6 py-3 sm:text-lg">
                Action
              </th>
            </tr>
          </thead> */}
          {sortedItems.map((item) => (
            <Item
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onToogleItem={onToogleItem}
            />
          ))}
        </table>
      </div>
      <div className="actions mx-auto mb-5 bg-cream4 p-5 flex flex-col sm:flex-row justify-between gap-5 rounded-b-xl shadow-xl">
        <select
          className="rounded-lg bg-cream1 font-comforta sm:text-sm p-2 shadow-xl"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama pembeli</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button
          onClick={onClearItems}
          className="bg-cream6 hover:bg-cream7 text-cream1 font-bold shadow-lg hover:shadow-xl hover:scale-105 py-2 px-4 md:px-8 rounded-lg font-comforta transition-all"
        >
          Bersihkan Semua Pesanan
        </button>
      </div>
    </div>
  );
}
