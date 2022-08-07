import { IBurger } from 'src/app/burger/burger';

export interface IMenuBurger {
  menuBurgers: [
    {
      quantite: number;
      burger: IBurger;
    }
  ];
}

