import { IBurger } from "../burger/burger";
import { IMenuBoisson } from "../service/modeles/IMenuBoisson";
import { IMenuBurger } from "../service/modeles/IMenuBurger";
import { IMenuFrite } from "../service/modeles/IMenuFrite";

export class IMenu{
        // id!:number;
        // prix!:number;
        // nomProduit!:string;
        // image!:string;
        // burger!:IBurger
               
                id!: number;
                prix!: number;
                quantites!:number 
                nomProduit!: string;
                image!: string;
                menuBurgers!: IMenuBurger[]
                menuPortionFrites!: IMenuFrite[]
                menuTailleBoissons!: IMenuBoisson
               
}


