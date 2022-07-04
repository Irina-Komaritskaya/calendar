import { createGlobalStyle } from "styled-components";
import RobotoRegularTtf from "./RobotoRegularTtf.ttf";
import RobotoRegularWoff from "./RobotoRegularWoff.woff";
import RobotoRegularSvg from "./RobotoRegularSvg.svg";
export default createGlobalStyle` 
@font-face {
	font-family: 'Roboto';
	src: local('☺'), url(${RobotoRegularWoff}) format('woff'), 
        url(${RobotoRegularTtf}) format('truetype'), 
        url(${RobotoRegularSvg}) format('svg');
	font-weight: normal;
	font-style: normal;
}
`;
