-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-06-2021 a las 05:49:29
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tis2_proyecto`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `busca`
--

CREATE TABLE `busca` (
  `correo` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `id_publicacion` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `chat`
--

CREATE TABLE `chat` (
  `id_conversacion` int(9) NOT NULL,
  `correo_usuario1` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `correo_usuario2` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `contrasena1` int(20) NOT NULL,
  `contrasena2` int(20) NOT NULL,
  `id_publicacion` int(6) NOT NULL,
  `mensaje1` varchar(500) COLLATE utf8_spanish2_ci NOT NULL,
  `mensaje2` varchar(500) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comuna`
--

CREATE TABLE `comuna` (
  `codigo_comuna` int(11) NOT NULL,
  `nombre_comuna` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `latitud` int(10) NOT NULL,
  `longitud` int(10) NOT NULL,
  `codigo_provincia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `comuna`
--

INSERT INTO `comuna` (`codigo_comuna`, `nombre_comuna`, `latitud`, `longitud`, `codigo_provincia`) VALUES
(1, 'Hualpen', 1, 1, 1),
(2, 'Concepcion', 2, 2, 1),
(3, 'Talcahuano', 3, 3, 1),
(4, 'San Pedro de la Paz', 4, 4, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `oficio`
--

CREATE TABLE `oficio` (
  `id_oficio` int(11) NOT NULL,
  `nombre_oficio` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `descripcion` varchar(200) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `oficio`
--

INSERT INTO `oficio` (`id_oficio`, `nombre_oficio`, `descripcion`) VALUES
(1, 'Carpintero', 'Oficio de trabajar, cortar y labrar la madera y sus derivados.'),
(2, 'Conserje', 'Es un oficio que consiste principalmente en controlar el acceso a un determinado sitio, atendiendo a las personas que acceden, y velar por un correcto funcionamiento del mismo'),
(3, 'Albañil', 'Oficio a la construcción, reforma, renovación y reparación de edificaciones, tanto viviendas como industriales.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preguntas`
--

CREATE TABLE `preguntas` (
  `id` int(11) NOT NULL,
  `pregunta` varchar(200) COLLATE utf8_spanish2_ci NOT NULL,
  `respuesta` varchar(500) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `preguntas`
--

INSERT INTO `preguntas` (`id`, `pregunta`, `respuesta`) VALUES
(1, '¿Cómo elegir a un experto?', 'Para elegir a un experto puedes explorar las publicaciones de la página Catalogo, también puedes utilizar el buscador para encontrar lo que necesites!'),
(2, '¿Cómo publicar un servicio?', 'Para publicar tus servicios, despliega el menú lateral en la esquina superior izquierda de tu dispositivo y selecciona la opción \"Publicar\", luego rellena todos los campos necesarios y podrás realizar tu publicación. Ahora solo debes esperar a que se contacten contigo!'),
(3, '¿Cómo registrarme?', 'Para registrarte y poder utilizar todas las utilidades de la aplicación, despliega el menú lateral en la esquina superior izquierda de tu dispositivo, luego selecciona la opción \"Iniciar Sesión\", se mostrará una ventana donde podrás ingresar o crear una nueva cuenta.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `provincia`
--

CREATE TABLE `provincia` (
  `codigo_provincia` int(11) NOT NULL,
  `nombre_provincia` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  `codigo_region` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `provincia`
--

INSERT INTO `provincia` (`codigo_provincia`, `nombre_provincia`, `codigo_region`) VALUES
(1, 'Concepcion', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publicacion`
--

CREATE TABLE `publicacion` (
  `id_publicacion` int(11) NOT NULL,
  `correo` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `foto` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `certificado_oficio` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `descripcion` varchar(500) COLLATE utf8_spanish2_ci NOT NULL,
  `horario` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `precio` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `edad_usuario` int(11) NOT NULL,
  `id_oficio` int(11) NOT NULL,
  `fecha_publicacion` datetime NOT NULL DEFAULT current_timestamp(),
  `Estado` varchar(8) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `publicacion`
--

INSERT INTO `publicacion` (`id_publicacion`, `correo`, `foto`, `certificado_oficio`, `descripcion`, `horario`, `precio`, `edad_usuario`, `id_oficio`, `fecha_publicacion`, `Estado`) VALUES
(1, 'kcarrasco@gmail.com', NULL, NULL, 'Ofrezco mis servicios como carpintero 10 años de experiencia', 'disponibilidad lunes a viernes de 11:00 a 17:00', '$20.000 aprox, inbox mas info', 26, 1, '2021-06-21 21:28:47', 'Activa'),
(11, 'ara@gmail.com', NULL, NULL, 'asdsadsa', 'sadasd', 'asdsad', 23, 1, '2021-06-21 22:48:47', 'Activa');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `region`
--

CREATE TABLE `region` (
  `codigo_region` int(11) NOT NULL,
  `nombre_region` varchar(20) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `region`
--

INSERT INTO `region` (`codigo_region`, `nombre_region`) VALUES
(1, 'Bio-Bio');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `correo` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `nombre` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `apellido` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `contrasena` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `direccion` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `codigo_comuna` int(11) NOT NULL,
  `telefono` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`correo`, `nombre`, `apellido`, `contrasena`, `direccion`, `fecha_nacimiento`, `codigo_comuna`, `telefono`) VALUES
('ara@gmail.com', 'aracely', 'zenteno', '123456789', 'edimburgo 1712', '1996-08-26', 1, 961386241),
('czenteno@gmail.com', 'carmen', 'zenteno', '12345', 'sadasdsa', '2021-06-21', 4, 987654321),
('kcarrasco@gmail.com', 'kevin', 'carrasco', '12345', 'finlandia 1667', '1998-02-23', 1, 942018931);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `busca`
--
ALTER TABLE `busca`
  ADD PRIMARY KEY (`correo`);

--
-- Indices de la tabla `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`id_conversacion`);

--
-- Indices de la tabla `comuna`
--
ALTER TABLE `comuna`
  ADD PRIMARY KEY (`codigo_comuna`),
  ADD KEY `codigo_provincia` (`codigo_provincia`);

--
-- Indices de la tabla `oficio`
--
ALTER TABLE `oficio`
  ADD PRIMARY KEY (`id_oficio`);

--
-- Indices de la tabla `preguntas`
--
ALTER TABLE `preguntas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `provincia`
--
ALTER TABLE `provincia`
  ADD PRIMARY KEY (`codigo_provincia`),
  ADD KEY `codigo_region` (`codigo_region`);

--
-- Indices de la tabla `publicacion`
--
ALTER TABLE `publicacion`
  ADD PRIMARY KEY (`id_publicacion`),
  ADD KEY `id_oficio` (`id_oficio`),
  ADD KEY `correo` (`correo`);

--
-- Indices de la tabla `region`
--
ALTER TABLE `region`
  ADD PRIMARY KEY (`codigo_region`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`correo`),
  ADD KEY `codigo_comuna` (`codigo_comuna`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comuna`
--
ALTER TABLE `comuna`
  MODIFY `codigo_comuna` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `oficio`
--
ALTER TABLE `oficio`
  MODIFY `id_oficio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `preguntas`
--
ALTER TABLE `preguntas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `provincia`
--
ALTER TABLE `provincia`
  MODIFY `codigo_provincia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `publicacion`
--
ALTER TABLE `publicacion`
  MODIFY `id_publicacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `region`
--
ALTER TABLE `region`
  MODIFY `codigo_region` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comuna`
--
ALTER TABLE `comuna`
  ADD CONSTRAINT `comuna_ibfk_1` FOREIGN KEY (`codigo_provincia`) REFERENCES `provincia` (`codigo_provincia`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `provincia`
--
ALTER TABLE `provincia`
  ADD CONSTRAINT `provincia_ibfk_1` FOREIGN KEY (`codigo_region`) REFERENCES `region` (`codigo_region`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `publicacion`
--
ALTER TABLE `publicacion`
  ADD CONSTRAINT `publicacion_ibfk_1` FOREIGN KEY (`correo`) REFERENCES `usuario` (`correo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publicacion_ibfk_2` FOREIGN KEY (`id_oficio`) REFERENCES `oficio` (`id_oficio`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`codigo_comuna`) REFERENCES `comuna` (`codigo_comuna`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
