# 🎉 Sorteo de Instagram 🎉

¡Bienvenido a la herramienta definitiva para realizar sorteos de Instagram de forma rápida, sencilla y con un toque de emoción! Esta página web te permite pegar una lista de participantes y seleccionar un ganador al azar con una animación espectacular.

---

## ✨ Características

- **Interfaz Limpia y Moderna**: Un diseño inspirado en Instagram, atractivo y fácil de usar.
- **Entrada Manual de Participantes**: Simplemente copia y pega la lista de concursantes. ¡Sin complicaciones!
- **Animación de Suspenso**: Aumenta la emoción con una cuenta regresiva cinematográfica (3, 2, 1) con efectos visuales impactantes.
- **Celebración Espectacular**: Un efecto de confeti y un texto vibrante anuncian al ganador, creando un momento memorable.
- **Totalmente Frontend**: No requiere backend ni bases de datos. Funciona directamente en tu navegador.
- **Responsive**: Se adapta a cualquier dispositivo, ya sea de escritorio, tablet o móvil.
- **Despliegue con Docker**: Incluye configuración para despliegue rápido usando Docker Compose con Nginx.

---

## 📷 Vista Previa

**Interfaz Principal** | **Cuenta Regresiva y Ganador**
:---: | :---:
![Imagen 1 - Interfaz Principal](imagen1.png) | ![Imagen 2 - Cuenta Regresiva y Ganador](imagen2.png)

---

## 🚀 Cómo Usar

### Opción 1: Localmente
1.  **Abre el archivo `index.html`**: Haz doble clic en el archivo `index.html` para abrirlo en tu navegador web preferido (Google Chrome, Firefox, etc.).
2.  **Pega los Participantes**: En el área de texto, pega la lista de nombres de usuario de los participantes. Asegúrate de que cada nombre esté en una línea separada.
    ```
    @usuario_genial
    @otro_participante
    @suerte_a_todos
    ```
3. **Inicia el Sorteo**: Haz clic en el botón **"Iniciar Sorteo"**.
4.  **¡Disfruta el Espectáculo!**: La aplicación mostrará una cuenta regresiva cinematográfica y, finalmente, revelará al afortunado ganador con una lluvia de confeti.

### Opción 2: Con Docker (Despliegue en Servidor)
1.  **Asegúrate de tener Docker y Docker Compose instalados** en tu sistema.
2.  **Ejecuta el siguiente comando** en el directorio del proyecto:
    ```bash
    docker-compose up -d
    ```
3.  **Accede a la aplicación** en tu navegador:
    - HTTP: `http://localhost` o `http://[TU_DIRECCION_IP]`
    - HTTPS: `https://localhost` o `https://[TU_DIRECCION_IP]`
4.  **¡Listo!** La aplicación estará disponible para su uso con soporte para puertos 80 y 443.

---

## 🛠️ Tecnologías Utilizadas

Este proyecto fue construido con tecnologías web estándar, enfocándose en la simplicidad y el rendimiento.

- **HTML5**: Para la estructura semántica de la página.
- **CSS3**: Para los estilos, animaciones y el diseño responsive.
- **JavaScript (ES6+)**: Para toda la lógica del sorteo, manipulación del DOM y efectos interactivos.
- **Font Awesome**: Para los iconos.
- **Docker**: Para contenerización y despliegue.
- **Nginx**: Como servidor web ligero y eficiente.
- **Alpine Linux**: Para imágenes Docker ligeras y seguras.

---

## 📋 Changelog

Para ver un registro completo de cambios, consulta el archivo [CHANGELOG.md](CHANGELOG.md).

---

¡Mucha suerte en tus sorteos! 🍀