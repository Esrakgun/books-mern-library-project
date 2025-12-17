

export default function AddBook({ book, handleChange, addBook }) {
  return (
    <div className="container w-55 mt-5 border border-secondary rounded">
      
      {/* 🔥 BURASI DÜZELTİLDİ */}
      <form style={{ padding: "20px" }} onSubmit={addBook}>

        {/* BOOK NAME */}
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="bookName"
            name="bookName"
            placeholder="Book Name"
            value={book.bookName}
            onChange={handleChange}
            required
          />
          <label htmlFor="bookName">Book Name</label>
        </div>

        {/* AUTHOR NAME */}
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="authorName"
            name="authorName"
            placeholder="Author Name"
            value={book.authorName}
            onChange={handleChange}
            required
          />
          <label htmlFor="authorName">Author Name</label>
        </div>

        {/* PUBLISH YEAR */}
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="publishYear"
            name="publishYear"
            placeholder="Publish Year"
            value={book.publishYear}
            onChange={handleChange}
            required
          />
          <label htmlFor="publishYear">Publish Year</label>
        </div>

        {/* DEPARTMENT */}
        <div className="form-floating mb-3">
          <select
            className="form-select"
            id="department"
            name="department"
            value={book.department}
            onChange={handleChange}
            required
          >
            <option value="">Select department</option>
            <option>Fiction</option>
            <option>Non-Fiction</option>
            <option>History</option>
            <option>Science</option>
            <option>Philosophy</option>
            <option>Psychology</option>
          </select>
          <label htmlFor="department">Department</label>
        </div>

        {/* DESCRIPTION */}
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            id="description"
            name="description"
            placeholder="Description"
            style={{ height: "100px" }}
            value={book.description}
            onChange={handleChange}
          />
          <label htmlFor="description">Description</label>
        </div>

        {/* COMMENTS */}
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            id="commments"
            name="commments"
            placeholder="Comments"
            style={{ height: "80px" }}
            value={book.commments}
            onChange={handleChange}
          />
          <label htmlFor="commments">Comments</label>
        </div>

        {/* COVER IMAGE */}
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="coverImage"
            name="coverImage"
            placeholder="Cover Image URL"
            value={book.coverImage}
            onChange={handleChange}
          />
          <label htmlFor="coverImage">Cover Image URL</label>
        </div>

        {/* QUANTITY */}
        <div className="form-floating mb-4">
          <input
            type="number"
            className="form-control"
            id="quantity"
            name="quantity"
            min={1}
            value={book.quantity}
            onChange={handleChange}
          />
          <label htmlFor="quantity">Quantity</label>
        </div>

        {/* 🔥 BUTTON ARTIK SADE */}
        <button type="submit" className="btn btn-dark w-100">
          Save Book
        </button>

      </form>
    </div>
  );
}
