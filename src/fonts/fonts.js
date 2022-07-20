import { createGlobalStyle } from "styled-components";
import RobotoRegularTtf from "./RobotoRegularTtf.ttf";
import RobotoRegularWoff from "./RobotoRegularWoff.woff";
import RobotoRegularSvg from "./RobotoRegularSvg.svg";
import RobotoLightTtf from "./RobotoLightTtf.ttf";
import RobotoLightWoff from "./RobotoLightWoff.woff";
import RobotoLightSvg from "./RobotoLightSvg.svg";

export default createGlobalStyle` 
@font-face {
	font-family: 'Roboto';
	src: local('☺'), url(${RobotoRegularWoff}) format('woff'), 
        url(${RobotoRegularTtf}) format('truetype'), 
        url(${RobotoRegularSvg}) format('svg');
	font-weight: normal;
	font-style: normal;
}

@font-face {
	font-family: 'Roboto';
	src: local('☺'), url(${RobotoLightWoff}) format('woff'), 
        url(${RobotoLightTtf}) format('truetype'), 
        url(${RobotoLightSvg}) format('svg');
	    font-style: normal;
    	font-weight: 100;
}
`;
