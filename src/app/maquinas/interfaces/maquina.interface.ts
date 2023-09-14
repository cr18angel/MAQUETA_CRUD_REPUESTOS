

export interface Maquina {
  id:               string;
  nombreMaquina:        string;
  publisher:        Publisher;
  modelo:        string;
  peso: string;
  
  alt_img?:         string;
}

export enum Publisher {
  DCComics = "DC Comics",
  MarvelComics = "Marvel Comics",
}
