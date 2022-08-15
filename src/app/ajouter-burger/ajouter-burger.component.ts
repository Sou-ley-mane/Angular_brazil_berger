import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { burger } from '../burger/burger';
import { GestionCommandeService } from '../service/gestion-commande.service';

@Component({
  selector: 'app-ajouter-burger',
  templateUrl: './ajouter-burger.component.html',
  styleUrls: ['./ajouter-burger.component.css']
})
export class AjouterBurgerComponent implements OnInit {
  // Source de l'image
  imageSrc!: string;
// Formulaire reactive
  myForm = new FormGroup({
   name: new FormControl('', [Validators.required, Validators.minLength(3)]),
   prix: new FormControl('', [Validators.required]),
   file: new FormControl('', [Validators.required]),
   fileSource: new FormControl('', [Validators.required])
 });
  constructor(private http: HttpClient,private gestionCommande:GestionCommandeService) { }
  // Le getter
  get f(){
    return this.myForm.controls;
  }

  // Fonction pour charger l'image
  onFileChange(event:any){
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSrc = reader.result as string;
        this.myForm.patchValue({
          fileSource: reader.result as string
        });
   
      };
      
    }

  }

  submit(){
    // console.log(this.myForm.value);
    let body:burger={
      nomProduit: this.myForm.value.name,
      prix: this.myForm.value.prix,
      image: this.myForm.value.fileSource
    }
this.gestionCommande.ajouterBurger(body);
  }

  ngOnInit(): void {
  }

}
