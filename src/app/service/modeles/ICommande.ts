import { IZones } from "./IZones"

export interface ICommande{

     Produits: ILigneCmd[]
     zone:string
}



export interface ILigneCmd{
produit:string,
quantite:number
}



export interface Commande{
        id: number,
        etatCmd: string,
        numCmd: string,
        dateCmd: Date,
        etatPaiement: string,
        client: string,
        livraison?: string,
        gestionnaire?: string,
        Produits: {quantite:number,produit:IProduit}[]
        zone:IZones


}


export interface IClient{
        id:number
        adresse: string,
        telephone: string,
        email: string,
        prenom: string,
        nom: string,
        commandes: Commande[]
}


export interface IProduit{
        id: number,
        nomProduit:string,
        prix: number,
        image:string ,
        quantites:number
}