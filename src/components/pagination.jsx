/* eslint-disable react/prop-types */

const Pagination = ({ eventsPerPage, totalEvents, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalEvents / eventsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center mt-8">
      <ul className="inline-flex -space-x-px">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`py-2 px-3 leading-tight border border-primary bg-white text-black hover:bg-primary hover:text-white ${
                currentPage === number ? "bg-primary text-white" : ""
              }`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
