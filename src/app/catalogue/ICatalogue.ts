import { IBurger } from "../burger/burger";
import { IMenu } from "../menu/IMenu";

export interface ICatalogue{ 
    menu:IMenu [],
    burger:IBurger[]
}

