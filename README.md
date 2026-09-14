# Tripleten web_project_around_es

# Descripción:

**Around The U.S.** es una aplicación web interactiva que simula un álbum de fotografías de paisajes de Estados Unidos. Los usuarios pueden personalizar su perfil, agregar nuevas tarjetas con imágenes de lugares, eliminarlas, dar "Me gusta" y visualizar cada imagen en tamaño completo mediante una ventana modal.

El proyecto fue desarrollado como parte del bootcamp de desarrollo web de _TripleTen_, aplicando buenas prácticas de arquitectura, Programación Orientada a Objetos (POO) y tipado estático con TypeScript.

## ✨ Funcionalidades

**Edición de perfil:** permite cambiar el nombre y la descripción del usuario.
**Agregar tarjetas:** formulario para añadir nuevas imágenes con título.
**Eliminar tarjetas:** cada tarjeta cuenta con un botón para eliminarla.
**Me gusta:** botón de like en cada tarjeta con estado activo/inactivo.
**Zoom de imagen:** al hacer clic en una tarjeta, se abre un modal con la imagen ampliada y su título.
**Validación de formularios:** los campos de entrada se validan en tiempo real, mostrando mensajes de error personalizados y deshabilitando el botón de envío hasta que todos los campos sean válidos.
**Cierre de modales:** los popups se cierran al hacer clic en la "X", al hacer clic fuera de ellos (overlay) o al presionar la tecla `Escape`.

# Tecnologías y Herramientas:

**HTML5 semántico:** estructura clara y accesible.
**CSS3:** diseño responsivo, Flexbox, Grid, variables CSS y animaciones.
**TypeScript:** tipado estático, interfaces, genéricos y clases.
**Manipulación del DOM:** creación dinámica de elementos, clonación de templates y eventos.
**Validación de formularios:** uso de la API `Constraint Validation` y mensajes personalizados.
**Módulos ES6:** importación y exportación de archivos para una arquitectura modular.
**Git y GitHub:** control de versiones y despliegue en GitHub Pages.
**Programación Orientada a Objetos (POO):**

- Clases con propiedades y métodos públicos/privados.
- Herencia (`Popup` → `PopupWithImage`, `PopupWithForm`).
- Encapsulamiento y acoplamiento débil mediante callbacks.
