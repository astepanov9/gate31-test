const handleFormSubmit = (event) => {
  event.preventDefault();
  const val = document.querySelector('.search-input').value;
  root.innerHTML = '';
  fetchData(val);
  const url = new URL(window.location);
  url.searchParams.set('search', val);
  window.history.pushState({}, '', url);
};

export default handleFormSubmit;
