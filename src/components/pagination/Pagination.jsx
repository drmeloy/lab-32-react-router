import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const Pagination = ({ info, page, pageDown, pageUp }) => {
  const totalResults = info.count;
  const perPage = 20;
  const lastPage = info.pages;
  const start = (page * perPage) - (perPage - 1);
  const end = Math.min(start + perPage - 1, totalResults);
  const history = useHistory();
  const location = useLocation();

  return (
    <section>
      <p>Showing {start} - {end} of {totalResults}</p>
      <button onClick={pageDown} disabled={page === 1}>◀</button>
      <p>Page {page} of {lastPage}</p>
      <button onClick={pageUp} disabled={page === lastPage}>▶</button>
    </section>
  );
}

export default Pagination;
