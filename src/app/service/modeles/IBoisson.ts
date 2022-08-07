import { IBurger } from "src/app/burger/burger"

export interface IBoisson{
    tailleBoisson: {
        libelle:string,
        boissons: IBurger[]
    }
}