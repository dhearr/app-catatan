export default function Item({ item, onDeleteItem, onToogleItem }) {
  return (
    <tbody key={item.id}>
      <tr className="bg-cream1 hover:bg-cream2 transition-all duration-300 border-b-2 border-cream2">
        <td className="w-4 p-4">
          <div className="flex items-center">
            <input
              id="checkbox-table-search-1"
              type="checkbox"
              className="w-5 h-5 appearance-none bg-cream3 checked:bg-cream6 border cursor-pointer rounded-full"
              checked={item.checked}
              onChange={() => onToogleItem(item.id)}
            />
            <label className="sr-only">checkbox</label>
          </div>
        </td>
        <th
          scope="row"
          className="px-6 py-4 uppercase font-medium text-cream7 text-sm sm:text-lg whitespace-nowrap"
        >
          {item.name}
        </th>
        <td className="px-2 sm:px-5 py-4">
          <span
            className=""
            style={
              item.checked
                ? {
                    textDecoration: "line-through",
                    color: "#7a6054",
                    textDecorationThickness: "5px",
                  }
                : {}
            }
          >
            <ul className="max-w-md space-y-5 text-sm sm:text-lg text-cream7 py-2 px-5 sm:px-10">
              <li className="px-36"></li>
              <li>
                <span> {item.produk} </span>
                <span
                  className={
                    item.quantity
                      ? "font-black bg-cream6 rounded-full text-white p-1 mr-1 ml-2"
                      : {}
                  }
                >
                  {item.quantity}
                </span>
              </li>
              <li>
                <span> {item.produk1} </span>
                <span
                  className={
                    item.quantity1
                      ? "font-black bg-cream6 rounded-full text-white p-1 mr-1 ml-2"
                      : {}
                  }
                >
                  {item.quantity1}
                </span>
              </li>
              <li>
                <span>{item.produk2}</span>
                <span
                  className={
                    item.quantity2
                      ? "font-black bg-cream6 rounded-full text-white p-1 mr-1 ml-2"
                      : {}
                  }
                >
                  {item.quantity2}
                </span>
              </li>
              <li>
                <span>{item.produk3}</span>
                <span
                  className={
                    item.quantity3
                      ? "font-black bg-cream6 rounded-full text-white p-1 mr-1 ml-2"
                      : {}
                  }
                >
                  {item.quantity3}
                </span>
              </li>
              <li>
                <span>{item.produk4}</span>
                <span
                  className={
                    item.quantity4
                      ? "font-black bg-cream6 rounded-full text-white p-1 mr-1 ml-2"
                      : {}
                  }
                >
                  {item.quantity4}
                </span>
              </li>
              <li>
                <span>{item.produk5}</span>
                <span
                  className={
                    item.quantity5
                      ? "font-black bg-cream6 rounded-full text-white p-1 mr-1 ml-2"
                      : {}
                  }
                >
                  {item.quantity5}
                </span>
              </li>
              <li>
                <span>{item.produk6}</span>
                <span
                  className={
                    item.quantity6
                      ? "font-black bg-cream6 rounded-full text-white p-1 mr-1 ml-2"
                      : {}
                  }
                >
                  {item.quantity6}
                </span>
              </li>
              <li>
                <span>{item.produk7}</span>
                <span
                  className={
                    item.quantity7
                      ? "font-black bg-cream6 rounded-full text-white p-1 mr-1 ml-2"
                      : {}
                  }
                >
                  {item.quantity7}
                </span>
              </li>
            </ul>
          </span>
        </td>
        <td className="px-6 py-4 text-center">
          <button
            onClick={() => onDeleteItem(item.id)}
            className="shadow-xl hover:scale-125"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              fill="#7a6054"
              className="bi bi-trash3-fill"
              viewBox="0 0 16 16"
            >
              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
            </svg>
          </button>
        </td>
      </tr>
    </tbody>
  );
}
