import isChecked from './checkbox';

const fetchData = (val) => {
  fetch('https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=7')
    .then((res) => res.json())
    .then((json) => {
      json
        .filter((item) => {
          if (item.title.toLowerCase().includes(val.toLowerCase())) {
            return true;
          }
          return false;
        })
        .map((obj) => {
          root.innerHTML += `
              <div class="data-item">
                  <div class="data-item__title">
                      <h2>${obj.title}</h2>
                  </div>
                  <div class="data-item__content">
                      <div class="data-item__body">${obj.body}</div>
                      <input type="checkbox" class="check" name="check">
                  </div>
              </div>`;
        });
    })
    .catch((err) => console.log(err))
    .finally(
      setTimeout(() => {
        isChecked();
      }, 1000)
    );
};

export default fetchData;
