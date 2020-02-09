-- --------------------------------------------------------
-- Host:                         localhost
-- Versión del servidor:         5.7.24 - MySQL Community Server (GPL)
-- SO del servidor:              Win32
-- HeidiSQL Versión:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Volcando estructura de base de datos para conciertosbd
DROP DATABASE IF EXISTS `conciertosbd`;
CREATE DATABASE IF NOT EXISTS `conciertosbd` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `conciertosbd`;

-- Volcando estructura para tabla conciertosbd.administrador
DROP TABLE IF EXISTS `administrador`;
CREATE TABLE IF NOT EXISTS `administrador` (
  `cedula` int(11) NOT NULL,
  `Nombre_Completo` varchar(100) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `contrasegnia` varchar(16) NOT NULL,
  `Nombre_Concierto` varchar(80) NOT NULL,
  PRIMARY KEY (`cedula`),
  KEY `Nombre_Concierto` (`Nombre_Concierto`),
  CONSTRAINT `administrador_ibfk_1` FOREIGN KEY (`Nombre_Concierto`) REFERENCES `concierto` (`Nombre`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla conciertosbd.administrador: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `administrador` DISABLE KEYS */;
INSERT INTO `administrador` (`cedula`, `Nombre_Completo`, `correo`, `contrasegnia`, `Nombre_Concierto`) VALUES
	(321, 'Admin', 'admin@mail.com', '321', 'Concierto A');
/*!40000 ALTER TABLE `administrador` ENABLE KEYS */;

-- Volcando estructura para tabla conciertosbd.artista
DROP TABLE IF EXISTS `artista`;
CREATE TABLE IF NOT EXISTS `artista` (
  `Nombre` varchar(80) NOT NULL,
  `Genero_Musical` varchar(50) NOT NULL,
  `integrantes` int(11) NOT NULL,
  PRIMARY KEY (`Nombre`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla conciertosbd.artista: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `artista` DISABLE KEYS */;
/*!40000 ALTER TABLE `artista` ENABLE KEYS */;

-- Volcando estructura para tabla conciertosbd.boleta
DROP TABLE IF EXISTS `boleta`;
CREATE TABLE IF NOT EXISTS `boleta` (
  `num_silla` int(11) NOT NULL,
  `Seccion` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `Nombre_Concierto` varchar(80) NOT NULL,
  `estado` tinyint(1) NOT NULL,
  PRIMARY KEY (`num_silla`),
  KEY `Nombre_Concierto` (`Nombre_Concierto`),
  CONSTRAINT `boleta_ibfk_1` FOREIGN KEY (`Nombre_Concierto`) REFERENCES `concierto` (`Nombre`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla conciertosbd.boleta: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `boleta` DISABLE KEYS */;
/*!40000 ALTER TABLE `boleta` ENABLE KEYS */;

-- Volcando estructura para tabla conciertosbd.concierto
DROP TABLE IF EXISTS `concierto`;
CREATE TABLE IF NOT EXISTS `concierto` (
  `fecha` date NOT NULL,
  `Nombre` varchar(80) NOT NULL,
  `hora` int(11) NOT NULL,
  `lugar` varchar(128) NOT NULL,
  PRIMARY KEY (`Nombre`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla conciertosbd.concierto: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `concierto` DISABLE KEYS */;
INSERT INTO `concierto` (`fecha`, `Nombre`, `hora`, `lugar`) VALUES
	('2019-11-12', 'C3', 2, 'Abc'),
	('2019-09-09', 'Concierto A', 8, ''),
	('2019-08-08', 'Concierto B', 9, '');
/*!40000 ALTER TABLE `concierto` ENABLE KEYS */;

-- Volcando estructura para tabla conciertosbd.concierto_artistas
DROP TABLE IF EXISTS `concierto_artistas`;
CREATE TABLE IF NOT EXISTS `concierto_artistas` (
  `Nombre_Concierto` varchar(80) NOT NULL,
  `Artista_Nombre` varchar(80) NOT NULL,
  PRIMARY KEY (`Nombre_Concierto`),
  KEY `Artista_Nombre` (`Artista_Nombre`),
  CONSTRAINT `concierto_artistas_ibfk_1` FOREIGN KEY (`Nombre_Concierto`) REFERENCES `concierto` (`Nombre`),
  CONSTRAINT `concierto_artistas_ibfk_2` FOREIGN KEY (`Artista_Nombre`) REFERENCES `artista` (`Nombre`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla conciertosbd.concierto_artistas: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `concierto_artistas` DISABLE KEYS */;
/*!40000 ALTER TABLE `concierto_artistas` ENABLE KEYS */;

-- Volcando estructura para tabla conciertosbd.concierto_asistentes
DROP TABLE IF EXISTS `concierto_asistentes`;
CREATE TABLE IF NOT EXISTS `concierto_asistentes` (
  `Nombre_Concierto` varchar(80) NOT NULL,
  `asistentes` int(11) NOT NULL,
  PRIMARY KEY (`Nombre_Concierto`),
  KEY `asistentes` (`asistentes`),
  CONSTRAINT `concierto_asistentes_ibfk_1` FOREIGN KEY (`Nombre_Concierto`) REFERENCES `concierto` (`Nombre`),
  CONSTRAINT `concierto_asistentes_ibfk_2` FOREIGN KEY (`asistentes`) REFERENCES `persona` (`cedula`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla conciertosbd.concierto_asistentes: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `concierto_asistentes` DISABLE KEYS */;
/*!40000 ALTER TABLE `concierto_asistentes` ENABLE KEYS */;

-- Volcando estructura para tabla conciertosbd.concierto_zonas
DROP TABLE IF EXISTS `concierto_zonas`;
CREATE TABLE IF NOT EXISTS `concierto_zonas` (
  `Nombre_Concierto` varchar(80) NOT NULL,
  `zona_numero` int(11) NOT NULL,
  PRIMARY KEY (`Nombre_Concierto`),
  KEY `zona_numero` (`zona_numero`),
  CONSTRAINT `concierto_zonas_ibfk_1` FOREIGN KEY (`Nombre_Concierto`) REFERENCES `concierto` (`Nombre`),
  CONSTRAINT `concierto_zonas_ibfk_2` FOREIGN KEY (`zona_numero`) REFERENCES `zona` (`numero`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla conciertosbd.concierto_zonas: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `concierto_zonas` DISABLE KEYS */;
/*!40000 ALTER TABLE `concierto_zonas` ENABLE KEYS */;

-- Volcando estructura para tabla conciertosbd.persona
DROP TABLE IF EXISTS `persona`;
CREATE TABLE IF NOT EXISTS `persona` (
  `cedula` int(11) NOT NULL,
  `Nombre_Completo` varchar(100) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `contrasegnia` varchar(16) NOT NULL,
  `celular` int(11) NOT NULL,
  `boleta` int(11) NOT NULL,
  `fecha_Nacimiento` date NOT NULL,
  `genero` enum('F','M','O') NOT NULL,
  `EPS` varchar(80) NOT NULL,
  PRIMARY KEY (`cedula`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla conciertosbd.persona: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `persona` DISABLE KEYS */;
INSERT INTO `persona` (`cedula`, `Nombre_Completo`, `correo`, `contrasegnia`, `celular`, `boleta`, `fecha_Nacimiento`, `genero`, `EPS`) VALUES
	(123, 'John', 'john@mail.com', '123', 123, 1, '2013-05-05', 'M', 'ABC'),
	(987, 'Hamed', 'hamed@mail.com', '987', 987, 1, '2013-07-07', 'M', 'ABC'),
	(951456, 'NC1', 'nc1@mail.com', '852', 564646, 1, '2019-11-12', 'M', '123');
/*!40000 ALTER TABLE `persona` ENABLE KEYS */;

-- Volcando estructura para tabla conciertosbd.persona_boletas
DROP TABLE IF EXISTS `persona_boletas`;
CREATE TABLE IF NOT EXISTS `persona_boletas` (
  `Per_cedula` int(11) NOT NULL,
  `Bol_numSilla` int(11) NOT NULL,
  PRIMARY KEY (`Per_cedula`),
  KEY `Bol_numSilla` (`Bol_numSilla`),
  CONSTRAINT `persona_boletas_ibfk_1` FOREIGN KEY (`Bol_numSilla`) REFERENCES `boleta` (`num_silla`),
  CONSTRAINT `persona_boletas_ibfk_2` FOREIGN KEY (`Per_cedula`) REFERENCES `persona` (`cedula`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla conciertosbd.persona_boletas: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `persona_boletas` DISABLE KEYS */;
/*!40000 ALTER TABLE `persona_boletas` ENABLE KEYS */;

-- Volcando estructura para tabla conciertosbd.persona_has_concierto
DROP TABLE IF EXISTS `persona_has_concierto`;
CREATE TABLE IF NOT EXISTS `persona_has_concierto` (
  `cedula` int(11) NOT NULL,
  `concierto` varchar(80) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `reservado` tinyint(1) NOT NULL DEFAULT '0',
  `zona_numero` int(11) NOT NULL,
  `precio` double DEFAULT NULL,
  KEY `fk_persona_has_concierto_concierto1_idx` (`concierto`),
  KEY `fk_persona_has_concierto_persona1_idx` (`cedula`),
  KEY `fk_persona_has_concierto_zona1_idx` (`zona_numero`),
  CONSTRAINT `fk_persona_has_concierto_concierto1` FOREIGN KEY (`concierto`) REFERENCES `concierto` (`Nombre`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_persona_has_concierto_persona1` FOREIGN KEY (`cedula`) REFERENCES `persona` (`cedula`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_persona_has_concierto_zona1` FOREIGN KEY (`zona_numero`) REFERENCES `zona` (`numero`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla conciertosbd.persona_has_concierto: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `persona_has_concierto` DISABLE KEYS */;
INSERT INTO `persona_has_concierto` (`cedula`, `concierto`, `cantidad`, `reservado`, `zona_numero`, `precio`) VALUES
	(123, 'Concierto A', 9, 1, 1, 900);
/*!40000 ALTER TABLE `persona_has_concierto` ENABLE KEYS */;

-- Volcando estructura para tabla conciertosbd.zona
DROP TABLE IF EXISTS `zona`;
CREATE TABLE IF NOT EXISTS `zona` (
  `numero` int(11) NOT NULL,
  `cupos` int(11) NOT NULL,
  `precio_reserva` double NOT NULL,
  `precio_compra` double NOT NULL,
  PRIMARY KEY (`numero`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla conciertosbd.zona: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `zona` DISABLE KEYS */;
INSERT INTO `zona` (`numero`, `cupos`, `precio_reserva`, `precio_compra`) VALUES
	(1, 10, 900, 1000),
	(2, 20, 800, 2000);
/*!40000 ALTER TABLE `zona` ENABLE KEYS */;

-- Volcando estructura para tabla conciertosbd.zona_boleta
DROP TABLE IF EXISTS `zona_boleta`;
CREATE TABLE IF NOT EXISTS `zona_boleta` (
  `numero_zona` int(11) NOT NULL,
  `numSilla_boleta` int(11) NOT NULL,
  PRIMARY KEY (`numero_zona`),
  KEY `numSilla_boleta` (`numSilla_boleta`),
  CONSTRAINT `zona_boleta_ibfk_1` FOREIGN KEY (`numero_zona`) REFERENCES `zona` (`numero`),
  CONSTRAINT `zona_boleta_ibfk_2` FOREIGN KEY (`numSilla_boleta`) REFERENCES `boleta` (`num_silla`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla conciertosbd.zona_boleta: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `zona_boleta` DISABLE KEYS */;
/*!40000 ALTER TABLE `zona_boleta` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
