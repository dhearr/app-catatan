import { useState } from "react";
import Item from "./Item";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Modal from "./Modal";

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

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-gradient-to-b from-cream1 to-cream2 p-3 sm:p-10">
      <div className="flex justify-between p-5 bg-cream4 rounded-t-lg font-comforta">
        <h1 className="text-center text-cream1 font-black">List Produk</h1>
        <div className="space-x-1 flex justify-center">
          <button
            onClick={() => {
              setShowModal(true);
            }}
            className="bg-cream6 hover:bg-cream7 text-cream1 font-bold shadow-lg hover:shadow-xl hover:scale-105 py-1 px-2 sm:px-5 rounded-lg transition-all"
          >
            Preview
          </button>
        </div>
      </div>

      <div className="relative bg-cream1 h-[400px] overflow-x-auto shadow-xl">
        <table className=" w-full text-sm text-left text-gray-500 font-comforta">
          {sortedItems.map((item) => (
            <Item
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onToogleItem={onToogleItem}
            />
          ))}
        </table>
        <Modal
          isVisible={showModal}
          onClose={() => {
            setShowModal(false);
          }}
        >
          <div className="w-full bg-cream1 p-2">
            <div className="relative overflow-x-auto h-[600px]">
              <table
                ref={componentRef}
                className="w-[350px] sm:w-[700px] md:w-[1280px] mx-auto text-xs sm:text-lg text-cream7"
              >
                {sortedItems.map((item) => (
                  <tbody key={item.id}>
                    <tr className="bg-cream1 hover:bg-cream2 transition-all duration-300 border-2 border-cream2">
                      <th
                        scope="row"
                        className="font-medium whitespace-nowrap px-2 border-r-2 border-cream2"
                      >
                        {item.name}
                      </th>
                      <td className="py-3 space-y-3">
                        <span className="block ml-2">
                          {item.produk}
                          <span
                            className={
                              item.quantity
                                ? "font-black bg-cream6 rounded-full text-white p-1 mr-1 ml-2"
                                : {}
                            }
                          >
                            {item.quantity}
                          </span>
                        </span>
                        <span className="block ml-2">
                          {item.produk1}{" "}
                          <span
                            className={
                              item.quantity1
                                ? "font-black bg-cream6 rounded-full text-white p-1 mr-1 ml-2"
                                : {}
                            }
                          >
                            {item.quantity1}
                          </span>
                        </span>
                        <span className="block ml-2">
                          {item.produk2}{" "}
                          <span
                            className={
                              item.quantity2
                                ? "font-black bg-cream6 rounded-full text-white p-1 mr-1 ml-2"
                                : {}
                            }
                          >
                            {item.quantity2}
                          </span>
                        </span>
                        <span className="block ml-2">
                          {item.produk3}{" "}
                          <span
                            className={
                              item.quantity3
                                ? "font-black bg-cream6 rounded-full text-white p-1 mr-1 ml-2"
                                : {}
                            }
                          >
                            {item.quantity3}
                          </span>
                        </span>
                        <span className="block ml-2">
                          {item.produk4}{" "}
                          <span
                            className={
                              item.quantity4
                                ? "font-black bg-cream6 rounded-full text-white p-1 mr-1 ml-2"
                                : {}
                            }
                          >
                            {item.quantity4}
                          </span>
                        </span>
                        <span className="block ml-2">
                          {item.produk5}{" "}
                          <span
                            className={
                              item.quantity5
                                ? "font-black bg-cream6 rounded-full text-white p-1 mr-1 ml-2"
                                : {}
                            }
                          >
                            {item.quantity5}
                          </span>
                        </span>
                        <span className="block ml-2">
                          {item.produk6}{" "}
                          <span
                            className={
                              item.quantity6
                                ? "font-black bg-cream6 rounded-full text-white p-1 mr-1 ml-2"
                                : {}
                            }
                          >
                            {item.quantity6}
                          </span>
                        </span>
                        <span className="block ml-2">
                          {item.produk7}{" "}
                          <span
                            className={
                              item.quantity7
                                ? "font-black bg-cream6 rounded-full text-white p-1 mr-1 ml-2"
                                : {}
                            }
                          >
                            {item.quantity7}
                          </span>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
            <div className="flex justify-around mb-2 p-2">
              <button
                onClick={() => setShowModal(false)}
                className="bg-cream6 hover:bg-cream7 text-cream1 font-bold shadow-lg hover:shadow-xl hover:scale-105 py-1 px-2 sm:px-5 rounded-lg transition-al"
              >
                Close
              </button>
              <button
                onClick={handlePrint}
                className="bg-cream6 hover:bg-cream7 text-cream1 font-bold shadow-lg hover:shadow-xl hover:scale-105 py-1 px-2 sm:px-5 rounded-lg transition-al"
              >
                Cetak
              </button>
            </div>
          </div>
        </Modal>
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
