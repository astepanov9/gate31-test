import '../scss/style.scss';

import fetchData from './modules/fetchData';
import isChecked from './modules/checkbox';

window.addEventListener('DOMContentLoaded', function () {
  const root = document.getElementById('root');
  const val = '';

  document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const val = document.querySelector('.search-input').value;
    root.innerHTML = '';
    fetchData(val);
    const url = new URL(window.location);
    url.searchParams.set('search', val);
    window.history.pushState({}, '', url);
  });

  fetchData(val);
});
