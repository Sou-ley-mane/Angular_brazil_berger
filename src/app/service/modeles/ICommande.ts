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
        Produits: ILigneCmd[]
        zone:string


}