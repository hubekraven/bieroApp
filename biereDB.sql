-- phpMyAdmin SQL Dump
-- version 4.2.12deb2+deb8u1build0.15.04.1
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Mer 01 Mars 2017 à 11:45
-- Version du serveur :  5.6.28-0ubuntu0.15.04.1
-- Version de PHP :  5.6.4-4ubuntu6.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `biero`
--

-- --------------------------------------------------------

--
-- Structure de la table `biere`
--

CREATE TABLE IF NOT EXISTS `biere` (
`id_biere` int(11) NOT NULL,
  `nom` varchar(200) DEFAULT NULL,
  `brasserie` varchar(200) DEFAULT NULL,
  `description` varchar(5000) DEFAULT NULL,
  `image` varchar(200) DEFAULT NULL,
  `date_ajout` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date_modif` date DEFAULT NULL,
  `actif` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `biere`
--

INSERT INTO `biere` (`id_biere`, `nom`, `brasserie`, `description`, `image`, `date_ajout`, `date_modif`, `actif`) VALUES
(1, 'Antartica', ' brasserie de l''Antarctique', 'Comme toutes les bières pils typique, l''Antarctique Pilsen est claire et de fermentation basse. Elle conquiert de plus en plus d''amateurs chaque jour, grâce à sa couleur lumière et sa douceur et sa légère amertume.', './src/images/AntarticaBiere.png', '2017-02-10 09:36:43', NULL, NULL),
(2, 'IPA du diable', 'Ma breasserie', 'Une bière de grande qualité avec beaucoup d''amerturme', '', '2017-02-10 11:24:22', NULL, 1),
(3, 'Malzbier', 'Ma breasserie', 'La Malzbier est une bière de fermentation haute titrant entre 0 et 0,5 % d''alcool. De couleur brune à noire, elle se distingue par son goût sucré.\r\n\r\nElle est souvent considérée comme une sorte de limonade et un apport énergétique, plus qu''une bière en tant que telle. Elle apporte moins de calories qu''un jus de fruit.', './src/images/MalzbierBiere.png', '2017-02-10 11:43:28', NULL, 1),
(4, 'Brahma Beer', 'Brahma Beer', 'Originaire de Rio de Janeiro, la Brahma est une lager moelleuse, fraîche et nette, sans arrière goût d''amertume et une saveur distinctive de houblon.', './src/images/BrahmaBiere.png', '2017-02-23 09:42:31', NULL, NULL),
(5, 'SKOLL', 'Brasserie Kronenbourg', 'Lancée par la Brasserie Kronenbourg en 2013, la bière SKOLL est une bière aromatisée de vodka et d''agrumes. \r\nL''abus d''alcool est dangeureux pour la santé. A consommer avec modération.', './src/images/SkollBiere.png', '2017-02-23 09:42:31', NULL, NULL),
(6, 'Eisenbahn Pale Ale', 'Cervejaria Sudbrack', 'Le Eisenbahn Pale Ale est une bière de couleur ambrée, le goût et plus d''amertume corsé et complexe et avec une teneur en alcool de 4,8%. Il est très similaire aux Ales belges et température idéale pour la consommation se situe entre 3 et 5 degrés. ', './src/images/EisenbahnPale.png', '2017-02-23 09:51:49', NULL, NULL),
(7, 'Stella Artois', 'Brasserie Artois', 'La Stella Artois est donc une bière de basse fermentation (pils). C''est une bière au goût sec et malté avec une pointe de houblon en fin de bouche. Elle est légèrement âpre.', './src/images/StellaArtois.png', '2017-02-23 09:51:49', NULL, NULL);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `biere`
--
ALTER TABLE `biere`
 ADD PRIMARY KEY (`id_biere`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `biere`
--
ALTER TABLE `biere`
MODIFY `id_biere` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=14;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
