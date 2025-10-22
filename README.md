# 🎉 Sorteos Pro para Instagram 🎉

¡Bienvenido a **Sorteos Pro**, la herramienta definitiva para realizar sorteos en Instagram de forma rápida, segura y con un toque profesional! Esta aplicación web te permite gestionar tus sorteos sin depender de la API de Meta, ofreciendo una experiencia de usuario moderna y animaciones espectaculares.

## ✨ Características Principales

- **Interfaz Moderna y Responsiva**: Un diseño limpio e intuitivo que se adapta a cualquier dispositivo.
- **Configuración Flexible**: Define el nombre del sorteo, el número de ganadores, la lista de participantes, y opciones avanzadas como el manejo de duplicados y la exclusión de usuarios.
- **Selección Aleatoria y Justa**: Un algoritmo transparente que garantiza una selección imparcial de los ganadores.
- **Animaciones Espectaculares**: Celebra a tus ganadores con una emocionante animación de ruleta y una vibrante lluvia de confeti.
- **Exportación de Resultados**: Descarga un archivo `.txt` con la lista de ganadores, el nombre del sorteo y la fecha.
- **Sin Dependencias de API**: Funciona de forma autónoma, solo necesitas la lista de participantes.
- **Tecnologías Modernas**: Desarrollado con HTML5, CSS3 y JavaScript (ESM), siguiendo las mejores prácticas de modularidad.

## 🚀 Cómo Usar

1.  **Abre la Aplicación**: Simplemente abre el archivo `index.html` en tu navegador web preferido.
2.  **Configura tu Sorteo**:
    -   **Nombre del Sorteo**: Dale un título a tu sorteo (ej. "Sorteo de Verano").
    -   **Participantes**: Pega la lista de nombres de usuario, uno por línea. Puedes usar el script de consola para obtenerlos fácilmente (ver sección "Extractor de Participantes").
    -   **Excluir Participantes**: Pega una lista de usuarios (uno por línea) que no deseas que participen en el sorteo (ej. el organizador, cuentas de prueba, etc.).
    -   **Número de Ganadores**: Especifica cuántos ganadores quieres seleccionar.
3.  **Inicia el Sorteo**: Haz clic en el botón `Iniciar Sorteo` y ¡deja que la magia ocurra!
4.  **Celebra y Exporta**:
    -   Disfruta de la animación de ruleta mientras se seleccionan los ganadores, seguida de una explosión de confeti.
    -   Haz clic en `Exportar` para guardar un registro de los resultados.
    -   Usa el botón `Nuevo Sorteo` para comenzar de nuevo.

## 💡 Extractor de Participantes (Script de Consola)

Para facilitar la obtención de la lista de participantes de una publicación de Instagram, puedes usar el siguiente script.

1.  Abre la publicación de Instagram en tu navegador.
2.  Haz clic en el botón de comentarios para abrir la ventana modal de comentarios.
3.  Abre la consola de desarrollador de tu navegador (F12 o Ctrl+Shift+I).
4.  Pega el contenido del archivo `assets/js/instagram-comment-extractor.js` directamente en la consola y presiona Enter.
5.  El script se encargará de hacer scroll automáticamente para cargar todos los comentarios y copiará los nombres de usuario únicos al portapapeles.
6.  Luego, podrás pegar esta lista directamente en el campo "Participantes" de la aplicación.

## 📂 Estructura del Proyecto

El proyecto está organizado de forma modular para facilitar su mantenimiento y escalabilidad:

```
/
├── assets/
│   ├── css/
│   │   └── main.css         # Estilos principales de la aplicación
│   └── js/
│       ├── main.js          # Lógica principal y orquestación
│       ├── animations.js    # Módulo de animaciones (confeti, ruleta)
│       ├── export.js        # Módulo de exportación de resultados
│       └── instagram-comment-extractor.js # Script para extraer participantes de Instagram
├── index.html               # Estructura principal de la aplicación
├── README.md                # ¡Estás aquí!
└── CHANGELOG.md             # Registro de cambios y versiones (próximamente)
```

## 🛠️ Tecnologías Utilizadas

-   **HTML5**: Para una estructura semántica y accesible.
-   **CSS3**: Para estilos modernos, responsivos y animaciones fluidas.
-   **JavaScript (ESM)**: Para una lógica modular y escalable.
-   **canvas-confetti (v1.9.3)**: Para crear animaciones de confeti espectaculares.
-   **Font Awesome (v7.0.0)**: Para iconos nítidos y escalables.

---

Desarrollado con ❤️ por Rodrigo Angeloni.