# Heroes App – Angular

Aplicación web construida con **Angular 11** que implementa un sistema completo de gestión de héroes (CRUD) utilizando **Angular Material**, **Flex Layout**, y un **backend simulado con JSON-Server**.  
Forma parte de la **Práctica 4: Heroes App con Angular** del curso *Desarrollo de Sitios Web* (BUAP).

---

## Descripción del Proyecto

HeroesApp es una **Single Page Application (SPA)** modular, escalable y responsiva, diseñada para aplicar de forma práctica los conceptos fundamentales de Angular:  
rutas hijas, carga perezosa (lazy loading), servicios HTTP, tipado estricto, pipes personalizados, formularios y uso de Angular Material.

### Funcionalidades principales

- Autenticación básica con módulo `Auth`
- Módulo principal de héroes (`HeroesModule`) con CRUD completo
- Rutas hijas y Lazy Loading para mejorar rendimiento
- Diseño responsivo con Angular Flex Layout
- Interfaz moderna usando Angular Material
- Consumo de API simulada mediante JSON-Server
- Pipes personalizados, guards y variables de entorno

---

## Tecnologías utilizadas

| Tecnología | Versión | Descripción |
|-------------|----------|-------------|
| **Angular CLI** | 11.x | Framework base para construir la SPA |
| **Node.js** | ≥ 14.x | Entorno de ejecución para Angular y JSON-Server |
| **TypeScript** | 4.x | Lenguaje base del proyecto |
| **Angular Material** | 11.x | Librería de componentes visuales |
| **Angular Flex Layout** | 11.x | Diseño responsivo basado en Flexbox |
| **JSON-Server** | 0.17.x | Simulador de backend REST API |

---

## Instalación y configuración

### 1. Clonar el repositorio
```bash
git clone https://github.com/sosa-rcrdt/HeroesApp.git
cd HeroesApp
```

### 2. Instalar dependencias
Asegúrate de tener Node.js y Angular CLI instalados, luego ejecuta:
```bash
npm install
```

---

## Ejecución del Frontend (Angular)

Inicia el servidor de desarrollo:
```bash
ng serve
```

Por defecto, la aplicación estará disponible en:
```
http://localhost:4200/
```

---

## Ejecución del Backend (JSON-Server)

La aplicación utiliza un archivo `db.json` para simular una base de datos.  
Este archivo se encuentra en la raíz del proyecto o en la carpeta `assets/`.

Ejecuta el siguiente comando:
```bash
npx json-server --watch db.json
```

Por defecto, el servidor estará disponible en:
```
http://localhost:3000/
```

Puedes acceder a los datos en:
```
http://localhost:3000/heroes
```

---

## Variables de entorno

El proyecto utiliza archivos de configuración para definir el entorno:

| Archivo | Descripción | URL base |
|----------|--------------|-----------|
| `src/environments/environment.ts` | Modo desarrollo | `http://localhost:3000` |
| `src/environments/environment.prod.ts` | Modo producción | `https://tu-dominio.com/api` |

---

## Estructura del proyecto

```
src/
│
├── app/
│   ├── auth/              # Módulo de autenticación
│   ├── heroes/            # CRUD principal de héroes
│   │   ├── components/    # Componentes reutilizables
│   │   ├── pages/         # Listado, agregar, buscar, etc.
│   │   ├── services/      # Comunicación con backend
│   │   └── pipes/         # Pipes personalizados
│   ├── material/          # Módulo con imports de Angular Material
│   ├── shared/            # Elementos compartidos (404, layouts)
│   ├── app-routing.module.ts
│   └── app.module.ts
│
├── assets/
│   └── heroes/            # Imágenes locales de los héroes
│
├── environments/          # Configuración de entornos
│
└── db.json                # Base de datos del backend simulado
```

---

## Conceptos aplicados

- SPA (Single Page Application)
- Rutas hijas y rutas dinámicas (`:id`)
- Lazy Loading
- Observables y suscripciones (`HttpClient`)
- Formulario con `ngModel` y Autocomplete
- Pipes personalizados
- Dialogs y SnackBars (Angular Material)
- Tipado estricto en TypeScript
- Guards (`canLoad`, `canActivate`)

---

## Licencia

Este proyecto fue desarrollado con fines académicos para la materia **Desarrollo de Sitios Web (BUAP)**.  
Uso libre con fines educativos.

## Colaborador

- Nelson Ricardo Sosa Francisco