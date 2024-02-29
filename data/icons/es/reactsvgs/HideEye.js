function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgHideEye = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  viewBox: "0 0 64 64",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M51.9566 45.2972C53.4666 44.2897 54.8248 43.2258 56.0332 42.164C58.6248 39.887 60.5398 37.6111 61.8108 35.8989C62.4472 35.0416 62.9247 34.3222 63.2473 33.8096C63.4086 33.5532 63.5314 33.3482 63.616 33.2032C63.6584 33.1307 63.6912 33.0732 63.7146 33.0317L63.7426 32.9816L63.7513 32.9659L63.7555 32.9582C63.7555 32.9582 63.7565 32.9564 61.9999 32.0001L63.7565 32.9564V31.0437L61.9999 32.0001C63.7565 31.0437 63.7555 31.042 63.7555 31.042L63.7513 31.0343L63.7426 31.0185L63.7146 30.9684C63.6912 30.9269 63.6584 30.8694 63.616 30.7969C63.5314 30.6519 63.4086 30.4469 63.2473 30.1905C62.9247 29.678 62.4472 28.9585 61.8108 28.1012C60.5398 26.389 58.6248 24.1131 56.0332 21.8361C50.843 17.2758 42.8923 12.6771 31.9999 12.6771C27.9325 12.6771 24.2753 13.3183 21.0188 14.3594L24.2584 17.599C26.6232 17.0168 29.2017 16.6771 31.9999 16.6771C41.6761 16.6771 48.7254 20.7399 53.393 24.841C55.7304 26.8947 57.4589 28.9496 58.599 30.4855C59.0409 31.0807 59.3929 31.5959 59.6562 32.0001C59.3929 32.4042 59.0409 32.9194 58.599 33.5147C57.4589 35.0505 55.7304 37.1054 53.393 39.1591C52.1274 40.2712 50.6867 41.3804 49.0659 42.4065L51.9566 45.2972Z"
}), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  d: "M40.9716 39.969L40.9691 39.9719L45.4049 44.4078L45.4086 44.4061L48.3973 47.3948L48.3938 47.3966L54.5267 53.5295L51.6983 56.358L44.4684 49.1281C40.8499 50.4673 36.6986 51.3231 31.9999 51.3231C21.1076 51.3231 13.1569 46.7244 7.96664 42.164C5.3751 39.887 3.46013 37.6111 2.18911 35.8989C1.55272 35.0416 1.07516 34.3222 0.752624 33.8096C0.591285 33.5532 0.468513 33.3482 0.383847 33.2032C0.341507 33.1307 0.308675 33.0732 0.285293 33.0317L0.257292 32.9816L0.248589 32.9659L0.245559 32.9603L0.244373 32.9582C0.244373 32.9582 0.243408 32.9564 1.99994 32.0001C0.243408 31.0437 0.244374 31.042 0.244374 31.042L0.245559 31.0398L0.248589 31.0343L0.257293 31.0185L0.285293 30.9684C0.308675 30.9269 0.341507 30.8694 0.383847 30.7969C0.468513 30.6519 0.591285 30.4469 0.752625 30.1905C1.07516 29.678 1.55272 28.9585 2.18911 28.1012C3.46013 26.389 5.3751 24.1131 7.96664 21.8361C9.49214 20.4958 11.2561 19.1521 13.2631 17.9228L5.69828 10.358L8.5267 7.52954L16.9455 15.9483L16.9492 15.9466L19.9881 18.9856L19.9843 18.9871L24.0281 23.0309L24.031 23.0284L26.8663 25.8638L26.8634 25.8662L38.1338 37.1366L38.1362 37.1337L40.9716 39.969ZM10.6068 24.841C12.1885 23.4513 14.0437 22.0659 16.1819 20.8416L21.5096 26.1693C20.5481 27.8956 20.0003 29.8838 20.0003 32.0001C20.0003 38.6273 25.3727 43.9997 31.9999 43.9997C34.1162 43.9997 36.1044 43.4519 37.8307 42.4904L41.311 45.9707C38.5301 46.8125 35.4301 47.3231 31.9999 47.3231C22.3238 47.3231 15.2744 43.2603 10.6068 39.1591C8.26945 37.1054 6.54102 35.0505 5.40088 33.5147C4.95897 32.9194 4.60702 32.4042 4.34367 32.0001C4.60702 31.5959 4.95897 31.0807 5.40088 30.4855C6.54102 28.9496 8.26945 26.8947 10.6068 24.841ZM23.9996 32.0001C23.9996 31.0048 24.1813 30.0521 24.5134 29.1731L34.8269 39.4866C33.9479 39.8187 32.9952 40.0004 31.9999 40.0004C27.5815 40.0004 23.9996 36.4185 23.9996 32.0001Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M43.1366 36.4771C43.6932 35.0937 43.9996 33.5827 43.9996 32.0001C43.9996 25.3728 38.6272 20.0004 31.9999 20.0004C30.4173 20.0004 28.9063 20.3068 27.5229 20.8634L30.7554 24.096C31.1609 24.0326 31.5766 23.9997 31.9999 23.9997C36.4184 23.9997 40.0003 27.5816 40.0003 32.0001C40.0003 32.4234 39.9674 32.8391 39.904 33.2446L43.1366 36.4771Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.99994 32.0001L0.243408 32.9564V31.0437L1.99994 32.0001Z"
}));

export default SvgHideEye;