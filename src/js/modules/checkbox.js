const isChecked = () => {
  const item = document.querySelectorAll('.data-item');
  const check = document.querySelectorAll('.check');

  for (let i = 0, length = item.length; i < length; i++) {
    for (let i = 0, length = check.length; i < length; i++) {
      check[i].addEventListener('click', function () {
        item[i].classList.toggle('active');
      });
    }
  }
};

export default isChecked;
