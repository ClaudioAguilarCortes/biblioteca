import{ autor }from "./autor"
import { Copia } from "./copia"
import { lector } from "./lector"
import { libro } from "./libro"
const claudioyo=new autor("claudio ","mexico ",11_02_2006)
console.log(claudioyo);

const algebra=new libro("español","algebra aplicada","conocimiento","susana distancia 1234",1996)
console.log(algebra);

const claudioaguilar=new lector(1324,"claudio aguilar cortes",2741434642,"Tomas mesia",2747481140)
console.log(claudioaguilar);

const picaso= new libro("mexicana","monalisa","pintura","museo nacional de mexico",1997)
console.log(picaso);
