// Lista de productos con sus atributos de nombre, tipo, color e imagen
const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./images/taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./images/taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./images/bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./images/bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./images/zapato-rojo.jpg" }
];

// Obtener elementos del DOM necesarios
const listaProductos = document.getElementById("lista-de-productos"); // Corregido nombre de variable para mayor claridad
const inputFiltro = document.getElementById("filtro"); // Nombre más descriptivo
const botonDeFiltro = document.getElementById("boton-filtrar");

// Función para mostrar productos en la interfaz
const displayProductos = (productos) => {
  // Limpiar lista de productos antes de mostrar nuevos
  listaProductos.innerHTML = "";

  // Crear y agregar cada producto al DOM
  productos.forEach(producto => {
    const contenedorProducto = document.createElement("div");
    contenedorProducto.classList.add("producto");

    const tituloProducto = document.createElement("p");
    tituloProducto.classList.add("titulo");
    tituloProducto.textContent = producto.nombre;

    const imagenProducto = document.createElement("img");
    imagenProducto.setAttribute('src', producto.img);
    imagenProducto.setAttribute('alt', producto.nombre);

    contenedorProducto.appendChild(tituloProducto);
    contenedorProducto.appendChild(imagenProducto);
    listaProductos.appendChild(contenedorProducto);
  });
};

// Mostrar todos los productos al cargar la página
displayProductos(productos);

// Función de filtrado para buscar productos por tipo o color
const filtrado = (productos, texto) => {
  const textoMin = texto.toLowerCase(); // Asegura que el texto ingresado sea en minúsculas

  return productos.filter(item => 
    item.tipo.toLowerCase().includes(textoMin) || 
    item.color.toLowerCase().includes(textoMin)
  );
};

// Configurar evento de click en el botón de filtro
botonDeFiltro.onclick = () => {
  const textoFiltro = inputFiltro.value.trim(); // Eliminar espacios en blanco alrededor del texto
  console.log("Texto de filtro:", textoFiltro);

  // Filtrar y mostrar productos según el texto de filtro
  const productosFiltrados = filtrado(productos, textoFiltro);
  displayProductos(productosFiltrados);
};
