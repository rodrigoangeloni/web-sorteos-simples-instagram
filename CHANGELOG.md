# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-10-20

### Added

- 🎉 **Lanzamiento Inicial**: Versión inicial de la aplicación de sorteos avanzados para Instagram.
- ✨ **Interfaz de Usuario Moderna**: Se ha implementado una interfaz de usuario completamente nueva, con un diseño profesional, atractivo y responsivo.
- 📁 **Estructura Modular**: El proyecto ha sido refactorizado a una arquitectura modular, utilizando módulos de JavaScript (ESM) y una estructura de archivos limpia en el directorio `assets`.
- ⚙️ **Configuración de Sorteos**: Los usuarios ahora pueden configurar el nombre del sorteo, la lista de participantes y el número de ganadores.
- 🏆 **Selección de Ganadores**: Se ha implementado un algoritmo de selección de ganadores justo y aleatorio.
- 🎊 **Animación de Confeti**: Se ha integrado la librería `canvas-confetti` para mostrar una celebración vibrante al anunciar los ganadores.
- 📄 **Exportación de Resultados**: Se ha añadido la funcionalidad para exportar la lista de ganadores a un archivo `.txt`.
- 🛡️ **Validación de Entradas**: Se han implementado validaciones robustas para todas las entradas del usuario, mejorando la experiencia y previniendo errores.
- 📚 **Nueva Documentación**: Se ha creado un archivo `README.md` detallado que explica las características, la estructura y el uso del proyecto.

### Changed

- **Rediseño Completo**: La aplicación original ha sido completamente rediseñada y reescrita desde cero para mejorar la calidad del código, la usabilidad y la estética.
- **Lógica de JavaScript**: Se ha reemplazado el código monolítico por una clase `Giveaway` que encapsula toda la lógica del sorteo.