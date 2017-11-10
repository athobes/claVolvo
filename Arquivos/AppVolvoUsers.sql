-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Host: mysql.mcibrasil.com.br
-- Tempo de geração: 09/11/2017 às 21:59
-- Versão do servidor: 5.6.34-log
-- Versão do PHP: 7.1.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `bd_mcibrasil`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `AppVolvoUsers`
--

CREATE TABLE `AppVolvoUsers` (
  `idUsers` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(150) NOT NULL,
  `passwd` varchar(255) NOT NULL,
  `position` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Fazendo dump de dados para tabela `AppVolvoUsers`
--

INSERT INTO `AppVolvoUsers` (`idUsers`, `name`, `email`, `passwd`, `position`) VALUES
(1, 'Eduardo Monteiro', 'eduardo.monteiro@grupoandreta.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'GERENTE'),
(2, 'Vander Adriano C.Ravazi', 'vendas02.andretavolvo@grupoandreta.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(3, 'Douglas Gomes Ramos', 'vendas01.andretavolvo@grupoandreta.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(4, 'Lucas Antoniassi', 'lucas.antoniassi@autostar.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(5, 'Aleksandro Silva', 'aleksandro.silva@autostar.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(6, 'Sidney Romero', 'sidney.romero@autostar.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'GERENTE'),
(7, 'EDER ROBERETO MOREIRA', 'cvb4@balticvolvo.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(8, 'GABRIELA PARO MORALLES', 'cvb2@balticvolvo.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(9, 'PEDRO ALVES DO NASCIMENTO JR', 'cvb1@balticvolvo.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(10, 'RICARDO DE OLIVEIRA GERES', 'cvb2@balticvolvo.com.br   ', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(11, 'Lericia Cavalcante Manoel', 'gpvb@balticvolvo.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'GERENTE'),
(12, 'Rogério Valle', 'gerentepv@championvolvo.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'GERENTE'),
(13, 'Suelen Mota', 'ass.comercial@championvolvo.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(14, 'Márjhore Rafaella Souza Teixeira Barreto', 'acessorios.go@championvolvo.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(15, 'jose Vargas', 'josevargas@koraveiculos.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'GERENTE'),
(16, 'Luiz Everton Canarins', 'luizc@dimas.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(17, 'Anderson Luis Cortes de Carvalho', 'anderson@dimas.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(18, 'Eduardo Barros Carvalho', 'eduardocarvalho@dimas.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(19, 'Evaldo Vagner Albarelo', 'evaldoa@dimas.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(20, 'Mário Junior', 'mariojunior@dimas.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'GERENTE'),
(21, 'Iza Keila dos Santos Gurjão', 'iza@dimas.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(22, 'Karla Giovana Fernandes Zerede Colares', 'karlaz@dimas.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(23, 'Márcia Aparecida Turatto', 'marciaturatto@dimas.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(24, 'Ereosvaldo Junior', 'ereosvaldojunior@volvoescandinavia.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'GERENTE'),
(25, 'Bruno Lira', 'brunolira@volvoescandinavia.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(26, 'Wagner Bozolan', 'gerencia@volvofaberge.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'GERENTE'),
(27, 'Anderson Tesuo Harada', 'vendas1@volvofaberge.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(28, 'Priscila de Jesus Alves', 'vendas2@volvofaberge.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(29, 'Silvio Uchoa', 'silviouchoa@gncsuecia.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'GERENTE'),
(30, 'Caio Viana', 'caio.viana@gncsuecia.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(31, 'Alexandre Lopes', 'alexandre.lopes@gncsuecia.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(32, 'Robson Fogaça', 'robson.fogaca@grupoab.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'GERENTE'),
(33, 'Andre Cardoso Richers', 'andre.richers@grupoab.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(34, 'André Ricardo da Silva', 'andre.silva@grupoab.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(35, 'Reno Godleski Heitor', 'reno.heitor@grupoab.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(36, 'PATRICIA SOARES MARQUES', 'Patricia.marques@grupoab.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(37, 'Cleber Fontana', 'cleber.fontana@grupoiesa.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'GERENTE'),
(38, 'GERSON LUIS BEZZI JAEGER', 'gerson.jaeger@grupoiesa.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(39, 'Guilherme', 'guilherme.silva@grupoiesa.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(40, 'Wagner Meyer', 'wagner.meyer@grupoiesa.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'GERENTE'),
(41, 'Cibele Cardoso', 'cibele@intercarvocal.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(42, 'Pamela Simão', 'pamela.simao@intercaruk.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(43, 'Faber Alleksandro', 'faber.sa@intercarvocal.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'GERENTE'),
(44, 'André Mori', 'andre.mori@itavema.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'GERENTE'),
(45, 'Gerlane Prado', 'gerlaneprado@lagomveiculos.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(46, 'Nicolas Tajra', 'nicolastajra@lagomveiculos.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'GERENTE'),
(47, 'Italo Rodrigo Andrade de Lima', 'italo.andrade@neovolvo.com', 'bed70cb7be828c1c0a57bad52abeca52', 'GERENTE'),
(48, 'NICOLLE DOS SANTOS VAZ', 'nicolle.santos@neovolvo.com', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(49, 'CLOVIS BORGES ROSA', 'CVN1@NORDICVOLVO.COM.BR', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(50, 'CYBELE PEREIRA DE GODOY', 'CVN2@NORDICVOLVO.COM.BR', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(51, 'SAMANTHA LOPIZI', 'CVN3@NORDICVOLVO.COM.BR', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(52, 'Antonio Andre Micherif Gomes', 'antonio.micherif@oland.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(53, 'Marcio André Rainha', 'marcio.rainha@oland.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'GERENTE'),
(54, 'Monica Barbosa Monteiro', 'monica.barbosa@oland.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(55, 'Silvia Helena Sales', 'silvia.sales@oland.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(56, 'Victor Nabarro', 'victornabarro@openpointvolvocars.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'GERENTE'),
(57, 'Evaldo Braga', 'evaldobraga@openpointvolvocars.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(58, 'Willian Aleixo', 'willyanaleixo@openpointvolvocars.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'GERENTE'),
(59, 'Jaqueline Duarte de Melo', 'jaquelinemelo@openpointvolvocars.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(60, 'Juliano da Silva Rodrigues', 'julianorodrigues@openpointvolvocars.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(61, 'Lucineia Luzia Herrero', 'lucineiaherrero@openpointvolvocars.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(62, 'Viviane Lambert', 'vivianelambert@openpointvolvocars.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(63, 'Viviane Petter', 'vivianepetter@openpointvolvocars.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(64, 'Rafaela Palmeira', 'rafaela.palmeira@rotapremium.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'GERENTE'),
(65, 'Flávio Monte', 'flaviomonte@rotapremium.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'GERENTE'),
(66, 'NILMA E SILVA DANTAS', 'nilma@rotapremium.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(67, 'Renato Brayner dos Santos', 'renato@rotapremium.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(68, 'Ronny Doriquetto Stefanato', 'ronny@rotapremium.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(69, 'Zemille Carneiro Santana', 'mille@rotapremium.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(70, 'Larissa de Jesus Melo', 'vendas1@starkvolvo.com', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(71, 'Silvio Alves Fonseca', 'vendas@starkvolvo.com', 'bed70cb7be828c1c0a57bad52abeca52', 'GERENTE'),
(72, 'Danilo Vital', 'danilo.vital@thorvolvo.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(73, 'Priscila Pagoto', 'priscila.pagoto@thorvolvo.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(74, 'Alessandro Bressan', 'bressan@newhb.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'GERENTE'),
(75, 'Gabriela Fernandes do Nascimento', 'acessorios.thor@thorvolvo.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(76, 'Alan Mostafa Magri', 'vendas1@volvotoriba.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(77, 'Cibele Flaviana Vitorino', 'cibele.vitorino@volvotoriba.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(78, 'Elton Claudir Cardozo Pfeifer', 'volvodiretoria@volvotoriba.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'GERENTE'),
(79, 'Valmir Dantas de Medeiros', 'valmir.dantas@volvotoriba.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(80, 'Franciane Schulze Padilha', 'franciane.padilha@valborg.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(81, 'Gustavo Henrique Rocha Leite Jorge Moreira', 'gustavo.rocha@valborg.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(82, 'Leonardo Alves da Silva', 'leonardo.alves@valborg.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(83, 'Lígia Miranda Chamon', 'ligia.chamon@valborg.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(84, 'Marcel Waldemar Carvalho Alves Pinto', 'marcel.pinto@valborg.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(85, 'Natália de Lanna Andrade Barros', 'natalia.lanna@valborg.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(86, 'Ricardo Brumond Coura Andrade', 'ricardo.brumond@valborg.com.br', 'bed70cb7be828c1c0a57bad52abeca52', 'GERENTE'),
(87, 'Caio Vieira', 'caio.vieira@volvocars.com', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(88, 'Thiago Basque', 'Thiago.basque@volvocars.com', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(89, 'Juliana Nagy', 'juliana.nagy@mci-group.com', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(90, 'Juliana Nagy', 'cla_volvo@mci-group.com', 'bed70cb7be828c1c0a57bad52abeca52', 'CONSULTOR'),
(91, 'Márcio Kodama', 'marcio.kodama@mci-group.com', 'bed70cb7be828c1c0a57bad52abeca52', 'GERENTE'),
(92, 'Márcio Kodama', 'marcio.kodama@mci-group.com', 'bed70cb7be828c1c0a57bad52abeca52', 'GERENTE'),
(93, 'André Santos', 'andre.santos@mci-group.com', 'bed70cb7be828c1c0a57bad52abeca52', 'GERENTE'),
(94, 'Sibelle Rossi', 'sibelle.rossi@mci-group.com', 'bed70cb7be828c1c0a57bad52abeca52', 'GERENTE'),
(95, 'Ney Neto', 'ney.neto@mci-group.com', 'bed70cb7be828c1c0a57bad52abeca52', 'GERENTE'),
(96, 'Camilla Gialluisi', 'camilla.gialluisi@mci-group.com', 'bed70cb7be828c1c0a57bad52abeca52', 'GERENTE'),
(97, 'Roberto César', 'rcesardeaquino@gmail.com', 'bed70cb7be828c1c0a57bad52abeca52', 'GERENTE');

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `AppVolvoUsers`
--
ALTER TABLE `AppVolvoUsers`
  ADD PRIMARY KEY (`idUsers`),
  ADD UNIQUE KEY `idUsers` (`idUsers`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
