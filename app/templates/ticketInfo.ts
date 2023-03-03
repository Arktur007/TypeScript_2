import {ITours} from "../models/tours";
export function initTicketElementTemplate(data, i) {
    const tmpl = `
       <div  data-item-index=${i} class="ticket-block">
           <p>${data}</p>
       </div>
    `
    return tmpl;
}