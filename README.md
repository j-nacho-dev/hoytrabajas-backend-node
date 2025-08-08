# Prueba Técnica: API y Carrito de Compras

Backend básico en **Node.js + TypeScript** que simula una API para gestionar productos y un carrito de compras en memoria.  


## Instalación y ejecución

```bash
# Clonar el repositorio
git clone https://github.com/j-nacho-dev/hoytrabajas-backend-node.git

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Compilar y ejecutar en producción
npm run build
npm start


```

## Endpoints

GET / products
Devuelve todos los productos disponibles.

```bash
    {
        "ok": true,
        "products": [ 
            { "id": 1, "name": "Producto 1", "price": 60 },
            { "id": 2, "name": "Producto 2", "price": 100 } 
        ]
    }
```



POST /cart/:id
Agrega un producto al carrito por su ID.
```bash
   {
        "ok": true,
        "message": "Product with id: 1 added to cart",
        "product": { "id": 1, "name": "Producto 1", "price": 60 }
   }
```

GET /cart
Devuelve el contenido del carrito.
```bash
  {
    "ok": true,
    "cart": [ { "id": 1, "name": "Producto 1", "price": 60 } ]
  }
```


## Tecnologías utilizadas:
- Node.js
- Typescript
- Express