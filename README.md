# 🛍️ Product Catalog App

Aplicación web construida con **Next.js**, **Redux Toolkit** y **Material UI** para mostrar un catálogo de productos con filtros dinámicos.

## ✨ Características

- ✅ Listado de productos con tarjetas responsivas.
- ✅ Filtros por:
  - Búsqueda por nombre
  - Categoría
  - Rango de precios
- ✅ Botón de "Limpiar filtros".
- ✅ Estado global manejado con **Redux Toolkit**.
- ✅ UI construida con **Material UI (MUI)**.
- ✅ Layout responsivo: en desktop filtros fijos, en mobile adaptable.

---

## 🛠️ Tecnologías utilizadas

- [Next.js](https://nextjs.org/) – Framework de React
- [Redux Toolkit](https://redux-toolkit.js.org/) – Manejo de estado global
- [Material UI](https://mui.com/) – Librería de componentes UI
- [TypeScript](https://www.typescriptlang.org/) – Tipado estático

---

## 📂 Estructura del proyecto

src/
├─ app/ # Páginas y layouts de Next.js
├─ components/ # Componentes UI (ProductCard, Filters, etc.)
├─ store/ # Redux slices (productsSlice, filtersSlice)
├─ types/ # Definiciones de tipos (Product, etc.)
├─ lib/ # Datos mock o utilidades
└─ hooks/ # Hooks personalizados (useAppSelector, useAppDispatch)

---

## 🚀 Instalación y ejecución

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tuusuario/product-catalog-app.git
   cd product-catalog-app
   npm install
   npm run dev
   http://localhost:3000
   