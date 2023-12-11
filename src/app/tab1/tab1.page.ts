import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public produtos = [
    {
      produto: "Diário de um banana - Ora bolas",
      miniDescricao: "Greg Heffley enfrenta confusões hilariantes e desafios na escola neste livro repleto de humor.",
      imagem: 'assets/imagens/diario17.jpg'
    },
    {
      produto: "Diário de um banana - Vai ou racha",
      miniDescricao: "Greg enfrenta desafios na escola e em casa de forma divertida e atrapalhada.",
      imagem: 'assets/imagens/diario12.jpg'
    },
    {
      produto: "Diário de um banana - O emplastro",
      miniDescricao: "Greg busca popularidade e enfrenta situações embaraçosas na escola com muito humor.",
      imagem: 'assets/imagens/diario8.jpg'
    },
    {
      produto: "Diário de um banana - Põe-te a Milhas!",
      miniDescricao: "Greg vive aventuras engraçadas em uma viagem de verão com sua família.",
      imagem: 'assets/imagens/diario14.jpg'
    }
  ]

  constructor() {}

}
