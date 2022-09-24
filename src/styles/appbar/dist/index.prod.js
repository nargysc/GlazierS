"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.MyList=exports.ActionIconsContainerDesktop=exports.ActionIconsContainerMobile=exports.AppbarHeader=exports.AppbarContainer=void 0;var _material=require("@mui/material"),_styles=require("@mui/material/styles"),_system=require("@mui/system"),_theme=require("../theme"),AppbarContainer=(0,_styles.styled)(_system.Box)(function(){return{display:"flex",marginTop:2,background:_theme.Colors.secondary,justifyContent:"center",fontFamily:'"Roboto", "sans-serif"',alignItems:"center",padding:"2px 8px"}});exports.AppbarContainer=AppbarContainer;var AppbarHeader=(0,_styles.styled)(_material.Typography)(function(){return{padding:"4px",flexGrow:1,fontSize:"2em",fontFamily:'"Abril Fatface", "cursive"',color:_theme.Colors.primary}});exports.AppbarHeader=AppbarHeader;var ActionIconsContainerMobile=(0,_styles.styled)(_system.Box)(function(){return{display:"flex",background:_theme.Colors.secondary,position:"fixed",bottom:0,left:0,width:"100%",alignItems:"center",zIndex:99,borderTop:"1px solid ".concat(_theme.Colors.border)}});exports.ActionIconsContainerMobile=ActionIconsContainerMobile;var ActionIconsContainerDesktop=(0,_styles.styled)(_system.Box)(function(){return{flexGrow:0}});exports.ActionIconsContainerDesktop=ActionIconsContainerDesktop;var MyList=(0,_styles.styled)(_material.List)(function(e){return{display:"row"===e.type?"flex":"block",flexGrow:3,justifyContent:"center",alignItems:"center"}});exports.MyList=MyList;