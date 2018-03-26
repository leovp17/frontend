//requiere funcion q obtiene paquete de node_modules
var _ = require("lodash");
var servicios = require("./servicios"); 
servicios.setValor(servicios.getSuma(16.5,65));
console.log('Lo que sea');

import component from "./component";
import './styles/theme.scss';

document.body.appendChild(component());