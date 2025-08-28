// import { haloJakarta } from './haloJakarta.js';
// console.log(haloJakarta());


// Multiple Import / Export
// import { haloJakarta } from './haloJakarta.js';
// import { haloMedan, haloSurabaya } from './haloIndonesia.js';

// console.log(haloJakarta());
// console.log(haloMedan());
// console.log(haloSurabaya());


// Export Default
// import hai from './haloJakarta.js';
// import {haloMedan, haloSurabaya} from './haloIndonesia.js';

// console.log(hai()); // Halo Jakarta
// console.log(haloMedan()); // Halo Medan
// console.log(haloSurabaya()); // Halo Surabaya


// Import Alias
import hai from './haloJakarta.js';
import {haloMedan as horas, haloSurabaya as halo} from './haloIndonesia.js';

console.log(hai());   // Halo Jakarta
console.log(horas()); // Halo Medan
console.log(halo());  // Halo Surabaya


// Import All
import hai from './haloJakarta.js';
import * as sapa from './haloIndonesia.js';

console.log(hai());           // Halo Jakarta
console.log(sapa.haloMedan());    // Halo Medan
console.log(sapa.haloSurabaya()); // Halo Surabaya

