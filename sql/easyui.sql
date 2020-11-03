/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50051
 Source Host           : localhost:3306
 Source Schema         : easyui

 Target Server Type    : MySQL
 Target Server Version : 50051
 File Encoding         : 65001

 Date: 25/03/2019 21:33:28
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for easyui_admin
-- ----------------------------
DROP TABLE IF EXISTS `easyui_admin`;
CREATE TABLE `easyui_admin`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `account` char(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` char(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `auth` char(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `ctime` char(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY USING BTREE (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of easyui_admin
-- ----------------------------
INSERT INTO `easyui_admin` VALUES (1, 'admin', '123456', '所有权限', '2019-03-24 19:58:48');
INSERT INTO `easyui_admin` VALUES (3, 'a', '123456', '子管理-1', '2019-03-25 09:00:33');
INSERT INTO `easyui_admin` VALUES (4, 'b', '123456', '子管理-2', '2019-03-25 09:04:33');
INSERT INTO `easyui_admin` VALUES (5, 'ccc', '123456789', '子管理-2', '2019-03-25 12:17:39');
INSERT INTO `easyui_admin` VALUES (6, '1', '11111111111', '子管理-1', '2019-03-25 13:19:33');
INSERT INTO `easyui_admin` VALUES (8, '222', '222', '子管理-2', '2019-03-25 15:19:33');
INSERT INTO `easyui_admin` VALUES (9, '333', '333', '子管理-1', '2019-03-25 18:19:33');

-- ----------------------------
-- Table structure for easyui_nav
-- ----------------------------
DROP TABLE IF EXISTS `easyui_nav`;
CREATE TABLE `easyui_nav`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `text` char(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `state` char(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `iconCls` char(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `url` char(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `fid` int(10) UNSIGNED NOT NULL DEFAULT 0,
  PRIMARY KEY USING BTREE (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of easyui_nav
-- ----------------------------
INSERT INTO `easyui_nav` VALUES (1, '根模块1', 'closed', 'icon-man', '', 0);
INSERT INTO `easyui_nav` VALUES (2, '子管理-1', 'open', 'icon-man', 'tdata', 1);
INSERT INTO `easyui_nav` VALUES (3, '根模块2', 'closed', 'icon-man', '', 0);
INSERT INTO `easyui_nav` VALUES (4, '子管理-2', 'open', 'icon-man', 'tdata2', 3);

SET FOREIGN_KEY_CHECKS = 1;
