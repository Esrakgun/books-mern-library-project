export default function Books({
  books,
  viewBook,
  borrowBook,
  returnBook,
  deleteBook,
}) {
  return (
    <div className="container mt-5">
      <table className="table table-hover align-middle">
        <thead className="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Book Name</th>
            <th scope="col">Author</th>
            <th scope="col">Department</th>
            <th scope="col">Quantity</th>
            <th scope="col" colSpan={4} className="text-center">
              Process
            </th>
          </tr>
        </thead>

        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <th scope="row">{book._id.slice(-6)}</th>

              <td
                data-toggle="tooltip"
                data-placement="top"
                title={book.commments}
              >
                {book.bookName}
              </td>

              <td>{book.authorName}</td>
              <td>{book.department}</td>
              <td>{book.quantity}</td>

              {/* VIEW */}
              <td className="text-center">
                <button
                  className="btn btn-sm btn-info"
                  onClick={() => viewBook(book)}
                >
                  View
                </button>
              </td>

              {/* BORROW */}
              <td className="text-center">
                <button
                  className="btn btn-sm btn-warning"
                  onClick={() => borrowBook(book._id, book.bookName)}
                >
                  Borrow
                </button>
              </td>

              {/* RETURN */}
              <td className="text-center">
                <button
                  className="btn btn-sm btn-success"
                  onClick={() => returnBook(book._id, book.bookName)}
                >
                  Return
                </button>
              </td>

              {/* DELETE */}
              <td className="text-center">
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => deleteBook(book._id, book.bookName)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
