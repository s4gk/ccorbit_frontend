# 🛍️ Product Filter App

Aplicación en **Next.js + Redux Toolkit + Material UI** para gestionar productos con filtros dinámicos (búsqueda, categoría, rango de precios) y la posibilidad de agregar nuevos productos.

---

## 🚀 Tecnologías
- **Next.js** – Framework de React
- **Redux Toolkit** – Manejo de estado global
- **Material UI** – Librería de componentes UI
- **TypeScript** – Tipado estático

---

## 📂 Estructura del proyecto

```
src/
 ├── app/                  # Páginas y layouts de Next.js
 ├── components/           # Componentes de UI reutilizables
 │    ├── filters/         # Componentes de filtros (Search, Category, PriceRange)
 │    ├── ProductCard.tsx  # Tarjeta de producto
 │    ├── ProductForm.tsx  # Formulario para agregar producto
 │    └── ProductList.tsx  # Listado de productos
 ├── store/                # Estado global con Redux Toolkit
 │    ├── productsSlice.ts # Slice de productos
 │    ├── filtersSlice.ts  # Slice de filtros
 │    ├── selectors.ts     # Selectores memoizados
 │    ├── index.ts         # Barrel file
 │    └── store.ts         # Configuración de Redux
 ├── types/                # Tipados globales
 │    └── product.ts
 └── lib/
      └── mockData.ts      # Datos iniciales
```

---

## 🧩 Estado Global

### `productsSlice`
- `items`: lista de productos
- Reducers: `addProduct`, `removeProduct`, `updateProduct`

### `filtersSlice`
- `search`: filtro de texto
- `category`: categoría seleccionada
- `priceRange`: rango de precios

### `selectors.ts`
- `selectProducts`: todos los productos
- `selectFilters`: estado actual de los filtros
- `selectCategories`: categorías únicas disponibles
- `selectFilteredProducts`: productos filtrados en base a todos los filtros

---

## 📋 Funcionalidades
- [x] Listar productos en una grilla responsive
- [x] Filtrar por:
  - Texto de búsqueda
  - Categoría dinámica (según productos existentes)
  - Rango de precios
- [x] Limpiar filtros
- [x] Agregar nuevos productos con formulario modal
- [x] Redux Toolkit para centralizar estado
- [x] Material UI para un diseño limpio y responsive

---

## ▶️ Scripts

```bash
# Instalar dependencias
npm install

# Correr el proyecto en desarrollo
npm run dev

# Build de producción
npm run build

# Correr el proyecto en producción
npm start
```
