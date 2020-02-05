import React from 'react';

const Pagination = ({ info, page, setPage }) => {
  const totalResults = info.count;
  const perPage = 20;
  const lastPage = info.pages;
  const start = (page * perPage) - (perPage - 1);
  const end = Math.min(start + perPage - 1, totalResults);

  return (
    <section>
      <p>Showing {start} - {end} of {totalResults}</p>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>◀</button>
      <p>Page {page} of {lastPage}</p>
      <button onClick={() => setPage(page + 1)} disabled={page === lastPage}>▶</button>
    </section>
  );
}

export default Pagination;
