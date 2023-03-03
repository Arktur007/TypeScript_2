import {getTours} from "@rest/tours";
import './assets/styles/main.scss';
import {images} from "@services/img/img";
import {ITours} from "./models/tours";
import {getTourTemplate} from "./templates/tours";
import {openModal} from "@services/modal/modalService";
import {initFooterTitle, initHeaderTitle, initToursDivElements, initTourElemListener} from "@services/general/general";

export let  toursDataArray: ITours[] = [];
const imagesStore = images;



initHeaderTitle('Туры', 'h1');
initFooterTitle('Туры по всему миру', 'h2');
// init data
const tourData: Promise<ITours[]> = getTours();


tourData.then((data): void => {
  console.log('call')
  toursDataArray = data;
  initApp(data);
});

function initApp(data: ITours[]): void{
    initToursDivElements(data);
}

