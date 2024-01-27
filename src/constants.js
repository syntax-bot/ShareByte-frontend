
import food from "./assets/map/food.png"
import circle from "./assets/map/circle.png"
import { Glue } from "./Api/Glue";

export const UserEnum = {
    INVALID: 0,
    FEEDER: 1,
    HUNGRY: 2,
    PROVIDER: 3,
};

export const APP_NAME = 'shareBite';
export const MAPS_API_KEY = 'AIzaSyD8sXtZcEFEWBoyxRIEhTaGkufK8J9LbTA';
export const API_BASE_URL = 'http://localhost:3000/'

export const api_glue = new Glue(API_BASE_URL);

export const report_bugs_to = 'webmaster@sharebyte.com'
export const error_report_message = `Something Went Wrong Please Report This issue At ${report_bugs_to} With Screenshots`

export const images = {
    circle,
    food,
};