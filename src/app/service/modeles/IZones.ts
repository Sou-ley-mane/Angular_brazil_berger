import { Commande } from "./ICommande";

export interface IZones{
    id:number
    nomZone: string;
    etatZone: string,
    coutLivraison: number
    commandes: Commande[]
        
}

export interface ILvreur{
    
        telephoneLivreur: string,
        email: string,
        prenom: string,
        nom: string
      
}


export interface ILivraison{
        livreur: string,
        commandes:string []
        zone:string
      
}