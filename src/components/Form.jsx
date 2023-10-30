import { useState } from "react";

export default function Form({ onAddItem }) {
  const [name, setName] = useState("");
  const [produk, setProduk] = useState("");
  const [produk1, setProduk1] = useState("");
  const [produk2, setProduk2] = useState("");
  const [produk3, setProduk3] = useState("");
  const [produk4, setProduk4] = useState("");
  const [produk5, setProduk5] = useState("");
  const [produk6, setProduk6] = useState("");
  const [produk7, setProduk7] = useState("");
  const [quantity, setQuantity] = useState(null);
  const [quantity1, setQuantity1] = useState(null);
  const [quantity2, setQuantity2] = useState(null);
  const [quantity3, setQuantity3] = useState(null);
  const [quantity4, setQuantity4] = useState(null);
  const [quantity5, setQuantity5] = useState(null);
  const [quantity6, setQuantity6] = useState(null);
  const [quantity7, setQuantity7] = useState(null);

  function BoxProduk() {
    return (
      <>
        <label
          htmlFor=""
          className="block mb-1 text-white text-xs md:text-sm font-semibold font-comforta"
        >
          Produk <span className="text-red-600">*</span>
        </label>
        <select
          className="p-1.5 sm:p-2 w-full rounded-lg mb-5"
          value={produk}
          onChange={(e) => setProduk(e.target.value)}
        >
          {listProduk}
        </select>
      </>
    );
  }

  function BoxProduk1() {
    return (
      <>
        <label
          htmlFor=""
          className="block mb-1 text-white text-xs md:text-sm font-semibold font-comforta"
        >
          Produk <span className="text-red-600">*</span>
        </label>
        <select
          className="p-1.5 sm:p-2 w-full rounded-lg mb-5"
          value={produk1}
          onChange={(e) => setProduk1(e.target.value)}
        >
          {listProduk}
        </select>
      </>
    );
  }

  function BoxProduk2() {
    return (
      <>
        <label
          htmlFor=""
          className="block mb-1 text-white text-xs md:text-sm font-semibold font-comforta"
        >
          Produk <span className="text-red-600">*</span>
        </label>
        <select
          className="p-1.5 sm:p-2 w-full rounded-lg mb-5"
          value={produk2}
          onChange={(e) => setProduk2(e.target.value)}
        >
          {listProduk}
        </select>
      </>
    );
  }

  function BoxProduk3() {
    return (
      <>
        <label
          htmlFor=""
          className="block mb-1 text-white text-xs md:text-sm font-semibold font-comforta"
        >
          Produk <span className="text-red-600">*</span>
        </label>
        <select
          className="p-1.5 sm:p-2 w-full rounded-lg mb-5"
          value={produk3}
          onChange={(e) => setProduk3(e.target.value)}
        >
          {listProduk}
        </select>
      </>
    );
  }

  function BoxProduk4() {
    return (
      <>
        <label
          htmlFor=""
          className="block mb-1 text-white text-xs md:text-sm font-semibold font-comforta"
        >
          Produk <span className="text-red-600">*</span>
        </label>
        <select
          className="p-1.5 sm:p-2 w-full rounded-lg mb-5"
          value={produk4}
          onChange={(e) => setProduk4(e.target.value)}
        >
          {listProduk}
        </select>
      </>
    );
  }

  function BoxProduk5() {
    return (
      <>
        <label
          htmlFor=""
          className="block mb-1 text-white text-xs md:text-sm font-semibold font-comforta"
        >
          Produk <span className="text-red-600">*</span>
        </label>
        <select
          className="p-1.5 sm:p-2 w-full rounded-lg mb-5"
          value={produk5}
          onChange={(e) => setProduk5(e.target.value)}
        >
          {listProduk}
        </select>
      </>
    );
  }

  function BoxProduk6() {
    return (
      <>
        <label
          htmlFor=""
          className="block mb-1 text-white text-xs md:text-sm font-semibold font-comforta"
        >
          Produk <span className="text-red-600">*</span>
        </label>
        <select
          className="p-1.5 sm:p-2 w-full rounded-lg mb-5"
          value={produk6}
          onChange={(e) => setProduk6(e.target.value)}
        >
          {listProduk}
        </select>
      </>
    );
  }

  function BoxProduk7() {
    return (
      <>
        <label
          htmlFor=""
          className="block mb-1 text-white text-xs md:text-sm font-semibold font-comforta"
        >
          Produk <span className="text-red-600">*</span>
        </label>
        <select
          className="p-1.5 sm:p-2 w-full rounded-lg mb-5"
          value={produk7}
          onChange={(e) => setProduk7(e.target.value)}
        >
          {listProduk}
        </select>
      </>
    );
  }

  function BoxQuantity() {
    return (
      <>
        <label
          htmlFor=""
          className="block mb-1 text-white text-xs md:text-sm font-semibold font-comforta"
        >
          Jumlah <span className="text-red-600">*</span>
        </label>
        <select
          className="p-1.5 sm:p-2 w-full block rounded-lg mb-5"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {quantityNum}
        </select>
      </>
    );
  }

  function BoxQuantity1() {
    return (
      <>
        <label
          htmlFor=""
          className="block mb-1 text-white text-xs md:text-sm font-semibold font-comforta"
        >
          Jumlah <span className="text-red-600">*</span>
        </label>
        <select
          className="p-1.5 sm:p-2 w-full block rounded-lg mb-5"
          value={quantity1}
          onChange={(e) => setQuantity1(Number(e.target.value))}
        >
          {quantityNum}
        </select>
      </>
    );
  }

  function BoxQuantity2() {
    return (
      <>
        <label
          htmlFor=""
          className="block mb-1 text-white text-xs md:text-sm font-semibold font-comforta"
        >
          Jumlah <span className="text-red-600">*</span>
        </label>
        <select
          className="p-1.5 sm:p-2 w-full block rounded-lg mb-5"
          value={quantity2}
          onChange={(e) => setQuantity2(Number(e.target.value))}
        >
          {quantityNum}
        </select>
      </>
    );
  }

  function BoxQuantity3() {
    return (
      <>
        <label
          htmlFor=""
          className="block mb-1 text-white text-xs md:text-sm font-semibold font-comforta"
        >
          Jumlah <span className="text-red-600">*</span>
        </label>
        <select
          className="p-1.5 sm:p-2 w-full block rounded-lg mb-5"
          value={quantity3}
          onChange={(e) => setQuantity3(Number(e.target.value))}
        >
          {quantityNum}
        </select>
      </>
    );
  }

  function BoxQuantity4() {
    return (
      <>
        <label
          htmlFor=""
          className="block mb-1 text-white text-xs md:text-sm font-semibold font-comforta"
        >
          Jumlah <span className="text-red-600">*</span>
        </label>
        <select
          className="p-1.5 sm:p-2 w-full block rounded-lg mb-5"
          value={quantity4}
          onChange={(e) => setQuantity4(Number(e.target.value))}
        >
          {quantityNum}
        </select>
      </>
    );
  }

  function BoxQuantity5() {
    return (
      <>
        <label
          htmlFor=""
          className="block mb-1 text-white text-xs md:text-sm font-semibold font-comforta"
        >
          Jumlah <span className="text-red-600">*</span>
        </label>
        <select
          className="p-1.5 sm:p-2 w-full block rounded-lg mb-5"
          value={quantity5}
          onChange={(e) => setQuantity5(Number(e.target.value))}
        >
          {quantityNum}
        </select>
      </>
    );
  }

  function BoxQuantity6() {
    return (
      <>
        <label
          htmlFor=""
          className="block mb-1 text-white text-xs md:text-sm font-semibold font-comforta"
        >
          Jumlah <span className="text-red-600">*</span>
        </label>
        <select
          className="p-1.5 sm:p-2 w-full block rounded-lg mb-5"
          value={quantity6}
          onChange={(e) => setQuantity6(Number(e.target.value))}
        >
          {quantityNum}
        </select>
      </>
    );
  }

  function BoxQuantity7() {
    return (
      <>
        <label
          htmlFor=""
          className="block mb-1 text-white text-xs md:text-sm font-semibold font-comforta"
        >
          Jumlah <span className="text-red-600">*</span>
        </label>
        <select
          className="p-1.5 sm:p-2 w-full block rounded-lg mb-5"
          value={quantity7}
          onChange={(e) => setQuantity7(Number(e.target.value))}
        >
          {quantityNum}
        </select>
      </>
    );
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;

    const newItem = {
      name,
      produk,
      produk1,
      produk2,
      produk3,
      produk4,
      produk5,
      produk6,
      produk7,
      quantity,
      quantity1,
      quantity2,
      quantity3,
      quantity4,
      quantity5,
      quantity6,
      quantity7,
      checked: false,
      id: Date.now(),
    };

    onAddItem(newItem);

    setName("");
    setProduk("");
    setProduk1("");
    setProduk2("");
    setProduk3("");
    setProduk4("");
    setProduk5("");
    setProduk6("");
    setProduk7("");
    setQuantity("");
    setQuantity1("");
    setQuantity2("");
    setQuantity3("");
    setQuantity4("");
    setQuantity5("");
    setQuantity6("");
    setQuantity7("");
  }
  const quantityNum = [...Array(21)].map((_, i) => (
    <option value={i} key={i}>
      {i}
    </option>
  ));

  const listProduk = [
    ...Array(
      "Pilih Produk",
      "📌 Baci Selimut",
      "📌 Baci Pangsit",
      "📌 Tulang Rangu ( Hot )",
      "📌 Pangsit Tulang Rangu",
      "📌 Baci Suir Ayam",
      "📌 Baci Tulang Rangu",
      "📌 Baci Granat",
      "📌 Baci Jando",
      "📌 All produk"
    ),
  ].map((p) => (
    <option value={p} key={p}>
      {p}
    </option>
  ));

  return (
    <form
      onSubmit={handleSubmit}
      className="add-form bg-gradient-to-b from-cream2 to-cream1 flex flex-col p-5"
    >
      <h3 className="text-center text-cream0 font-comforta font-bold text-xl lg:text-3xl md:text-2xl m-3">
        Menu Pesanan
      </h3>

      <div className="p-6 sm:p-10">
        <label
          htmlFor=""
          className="block text-white mb-1 font-comforta text-xs md:text-sm font-semibold"
        >
          Nama Pembeli <span className="text-red-600">*</span>
        </label>
        <input
          autoFocus
          className="w-full p-2 rounded-lg font-comforta"
          type="text"
          placeholder="nama pembeli . . ."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mx-5 p-1 sm:p-5 font-comforta">
        <div className="bg-cream3 hover:bg-cream4 p-2 rounded-lg hover:-translate-y-2 hover:scale-105 transition-all shadow-lg hover:shadow-xl">
          <div className="text-center mb-5 mt-2 text-cream1 font-extrabold">
            <h1>Produk 1</h1>
          </div>
          {<BoxQuantity />}
          {<BoxProduk />}
        </div>
        <div className="bg-cream3 hover:bg-cream4 p-2 rounded-lg hover:-translate-y-2 hover:scale-105 transition-all shadow-lg hover:shadow-xl">
          <div className="text-center mb-5 mt-2 text-cream1 font-extrabold">
            <h1>Produk 2</h1>
          </div>
          {<BoxQuantity1 />}
          {<BoxProduk1 />}
        </div>
        <div className="bg-cream3 hover:bg-cream4 p-2 rounded-lg hover:-translate-y-2 hover:scale-105 transition-all shadow-lg hover:shadow-xl">
          <div className="text-center mb-5 mt-2 text-cream1 font-extrabold">
            <h1>Produk 3</h1>
          </div>
          {<BoxQuantity2 />}
          {<BoxProduk2 />}
        </div>
        <div className="bg-cream3 hover:bg-cream4 p-2 rounded-lg hover:-translate-y-2 hover:scale-105 transition-all shadow-lg hover:shadow-xl">
          <div className="text-center mb-5 mt-2 text-cream1 font-extrabold">
            <h1>Produk 4</h1>
          </div>
          {<BoxQuantity3 />}
          {<BoxProduk3 />}
        </div>
        <div className="bg-cream3 hover:bg-cream4 p-2 rounded-lg hover:-translate-y-2 hover:scale-105 transition-all shadow-lg hover:shadow-xl">
          <div className="text-center mb-5 mt-2 text-cream1 font-extrabold">
            <h1>Produk 5</h1>
          </div>
          {<BoxQuantity4 />}
          {<BoxProduk4 />}
        </div>
        <div className="bg-cream3 hover:bg-cream4 p-2 rounded-lg hover:-translate-y-2 hover:scale-105 transition-all shadow-lg hover:shadow-xl">
          <div className="text-center mb-5 mt-2 text-cream1 font-extrabold">
            <h1>Produk 6</h1>
          </div>
          {<BoxQuantity5 />}
          {<BoxProduk5 />}
        </div>
        <div className="bg-cream3 hover:bg-cream4 p-2 rounded-lg hover:-translate-y-2 hover:scale-105 transition-all shadow-lg hover:shadow-xl">
          <div className="text-center mb-5 mt-2 text-cream1 font-extrabold">
            <h1>Produk 7</h1>
          </div>
          {<BoxQuantity6 />}
          {<BoxProduk6 />}
        </div>
        <div className="bg-cream3 hover:bg-cream4 p-2 rounded-lg hover:-translate-y-2 hover:scale-105 transition-all shadow-lg hover:shadow-xl">
          <div className="text-center mb-5 mt-2 text-cream1 font-extrabold">
            <h1>Produk 8</h1>
          </div>
          {<BoxQuantity7 />}
          {<BoxProduk7 />}
        </div>
      </div>
      <button className="bg-cream6 hover:bg-cream7 shadow-xl mb-5 text-white mx-6 sm:mx-auto py-2 px-4 md:px-8 mt-10 rounded-lg font-comforta font-bold text-md lg:text-xl md:text-lg">
        Tambah
      </button>
    </form>
  );
}
