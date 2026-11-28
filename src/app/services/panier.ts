import { Injectable, computed, signal } from '@angular/core';

export interface Produit {
  id: number;
  nom: string;
  prix: number;
}

@Injectable({ providedIn: 'root' })
export class PanierService {
  articles = signal<Produit[]>([]);

  //count
  nombreArticles = computed(() => this.articles().length);
  total = computed(() =>
    this.articles().reduce((somme, article) => somme + article.prix, 0)
  );

  ajouter(produit: Produit) {
    this.articles.update(liste => [...liste, produit]);
  }

  retirer(id: number) {
    this.articles.update(liste => liste.filter(a => a.id !== id));
  }

  vider() {
    this.articles.set([]);
  }
}