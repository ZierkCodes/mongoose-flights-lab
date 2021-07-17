import { DateRangePicker } from '../js/node_modules/vanillajs-datepicker/js/main.js'

const elem = document.getElementById('dates');
const rangepicker = new DateRangePicker(elem, {
    format: 'M d'
  }); 

console.log(rangepicker)