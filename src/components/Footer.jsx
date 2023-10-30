export default function Footer({ items }) {
  if (items.length === 0)
    return (
      <footer className="stats bg-cream2 p-[50px] text-center text-white font-bold font-comforta">
        Belum ada pesanan di dalam list pesanan.
      </footer>
    );

  const totalItems = items.length;
  const checkedItems = items.filter((item) => item.checked).length;
  const percentage = Math.round((checkedItems / totalItems) * 100);
  return (
    <footer className="stats bg-cream2 p-[50px] text-center text-white font-thin font-comforta">
      Ada <span className="font-black italic"> {totalItems} </span> pesanan di
      list pesanan, <span className="font-black italic"> {checkedItems} </span>
      pesanan sudah terjual
      <span className="font-black italic"> ( {percentage}% ) </span>
    </footer>
  );
}
