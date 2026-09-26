# Tripleten web_project_around_es

# Descripción:

**Around The U.S.** es una aplicación web interactiva tipo álbum de fotos que permite a los usuarios gestionar su perfil y una colección de tarjetas con imágenes de lugares. Toda la información se almacena en un servidor remoto, por lo que los cambios persisten entre sesiones.

El proyecto fue desarrollado como parte del bootcamp de desarrollo web de **TripleTen**, aplicando buenas prácticas de arquitectura, Programación Orientada a Objetos (POO), tipado estático con TypeScript y comunicación con una API REST.

## ✨ Funcionalidades

- **Carga inicial desde el servidor:** el perfil del usuario y las tarjetas se obtienen mediante `Promise.all` al cargar la página.
- **Edición de perfil:** permite cambiar el nombre y la descripción del usuario. Los cambios se envían al servidor con `PATCH`.
- **Actualización de avatar:** permite cambiar la foto de perfil. Se envía con `PATCH` y se refleja inmediatamente en la página.
- **Agregar tarjetas:** formulario para añadir nuevas imágenes con título. Se envían al servidor con `POST` y se renderizan al recibir la respuesta.
- **Eliminar tarjetas:** solo el propietario puede eliminar una tarjeta. Se pide confirmación mediante un popup y se envía `DELETE` al servidor.
- **Like/unlike:** el corazón se activa o desactiva según el estado devuelto por el servidor (`PUT`/`DELETE`).
- **Zoom de imagen:** al hacer clic en una tarjeta, se abre un modal con la imagen ampliada y su título.
- **Validación de formularios:** los campos se validan en tiempo real, mostrando mensajes de error personalizados y deshabilitando el botón hasta que todos sean válidos.
- **Cierre de modales:** los popups se cierran con la "X", haciendo clic fuera de ellos (overlay) o presionando `Escape`.
- **UX "Guardando...":** al enviar cualquier formulario, el botón cambia su texto a "Guardando..." hasta que la petición termina.

# Tecnologías y Herramientas:

- **HTML5 semántico:** estructura clara y accesible.
- **CSS3:** diseño responsivo, Flexbox, Grid, variables CSS y animaciones.
- **TypeScript:** tipado estático, interfaces, genéricos y clases.
- **Programación Orientada a Objetos (POO):**
  - Clases con propiedades y métodos públicos/privados.
  - Herencia (`Popup` → `PopupWithImage`, `PopupWithForm`, `PopupWithConfirmation`).
  - Encapsulamiento y acoplamiento débil mediante callbacks.
- **Comunicación con API REST:**
  - Métodos HTTP: `GET`, `POST`, `PATCH`, `PUT`, `DELETE`.
  - Uso de `fetch` con `async/await`.
  - Manejo de errores con `try/catch` y `throw new Error`.
  - `Promise.all` para cargar datos en paralelo.
- **Manipulación del DOM:** creación dinámica de elementos, clonación de templates y eventos.
- **Módulos ES6:** importación y exportación de archivos para una arquitectura modular.
- **Git y GitHub:** control de versiones y despliegue en GitHub Pages.
