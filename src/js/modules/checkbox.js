const isChecked = () => {
  const item = document.querySelectorAll('.data-item');
  const check = document.querySelectorAll('.check');

  for (let i = 0, length = item.length; i < length; i++) {
    for (let i = 0, length = check.length; i < length; i++) {
      check[i].addEventListener('click', function () {
        if (check[i].checked) {
          item[i].classList.add('active');
        } else {
          item[i].classList.remove('active');
        }
      });
    }
  }
};

export default isChecked;
