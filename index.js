import './virtual-scroll.js'

document.addEventListener('DOMContentLoaded', main);
function main() {
  let data = createData();
  let productsGrid = document.getElementById("products-grid");
  productsGrid.setViewportHeight(300);
  productsGrid.setData(data);
  let ticking = false;
  document.getElementById("container").addEventListener("scroll", (event) => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        productsGrid.render(event.target.scrollTop);
        ticking = false;
      });

      ticking = true;
    }
  });
}

function createData() {
  let gridData = [];
  for (let index = 1; index <= 10000; index++) {
    gridData.push(generateRowData(index));
  }
  return gridData;
}

function generateRowData(index) {
  return {
    'productId': index,
    'label': 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
    'price': parseFloat(Math.random() * 100).toFixed(2),
    'qty': parseFloat(Math.random() * 100).toFixed(0)
  };
}