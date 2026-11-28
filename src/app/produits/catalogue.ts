import { Component, inject, signal } from '@angular/core';
import { PanierService, Produit } from '../services/panier';

@Component({
  selector: 'app-catalogue',
  imports: [],
  templateUrl: './catalogue.html',
  styleUrl: './catalogue.css',
})
export class Catalogue {
  panier = inject(PanierService);

  produits = signal<Produit[]>([
    { id: 1, nom: 'Casque audio', prix: 249 },
    { id: 2, nom: 'Souris sans fil', prix: 89 },
    { id: 3, nom: 'Clavier mécanique', prix: 399 },
    { id: 4, nom: 'Tapis de souris', prix: 49 },
  ]);

  ajouter(produit: Produit) {
    
    this.panier.ajouter(produit);
  }
}