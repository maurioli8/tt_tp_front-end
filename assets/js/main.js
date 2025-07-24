document.addEventListener('DOMContentLoaded', () => {
  fetch('assets/data/data.json')
    .then(response => response.json())
    .then(data => {
      // Productos
      const productosContainer = document.querySelector('.productos-container');
      data.productos.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <img src="${producto.imagen}" alt="${producto.nombre}" style="width:100%;height:auto;margin-bottom:10px;">
          <h3>${producto.nombre}</h3>
          <p>${producto.descripcion}</p>
          <p><strong>${producto.precio}</strong></p>
        `;
        productosContainer.appendChild(card);
      });

      // Reseñas
      const reseñasGrid = document.querySelector('.reseñas-grid');
      data.reseñas.forEach(reseña => {
        const div = document.createElement('div');
        div.className = 'reseña';
        div.innerHTML = `
          <h4>${reseña.autor}</h4>
          <p>${reseña.texto}</p>
        `;
        reseñasGrid.appendChild(div);
      });
    });
});