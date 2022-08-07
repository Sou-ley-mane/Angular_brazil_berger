export interface IMenuFrite {
  frite: IFrite;
  quantite:number;
}

export interface IFrite {
  id: number;
  nomProduit: string;
  prix: number;
  image: string;
}
