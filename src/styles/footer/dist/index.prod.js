"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SubscribeTf=exports.FooterTitle=void 0;var _styled=_interopRequireDefault(require("@emotion/styled")),_material=require("@mui/material"),_theme=require("../theme");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var FooterTitle=(0,_styled.default)(_material.Typography)(function(){return{textTransform:"uppercase",marginBottom:"1em"}});exports.FooterTitle=FooterTitle;var SubscribeTf=(0,_styled.default)(_material.TextField)(function(){return{".MuiInputLabel-root":{color:_theme.Colors.primary,opacity:.5},".MuiInput-root::before":{borderBottom:"1px solid ".concat(_theme.Colors.primary)}}});exports.SubscribeTf=SubscribeTf;