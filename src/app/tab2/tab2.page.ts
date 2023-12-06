import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public produtos = [
    {
      id: 1,
      produto: "Diário de um banana - dias de cão",
      preco: "R$ 54,49",
      imagem: 'assets/imagens/diario5.jpg'
    },
    {
      id: 2,
      produto: "Diário de um banana - verdade nua e crua",
      preco: "R$69,49",
      imagem: 'assets/imagens/diario6.jpg'
    },
    {
      id: 3,
      produto: "Diário de um banana - batalha neval",
      preco: "R$64,49",
      imagem: 'assets/imagens/diario7.jpg'
    },
    {
      id: 4,
      produto: "Diário de um banana - o emplastro",
      preco: "R$79,49",
      imagem: 'assets/imagens/diario8.jpg'
    },
    {
      id: 5,
      produto: "Diário de um banana - rodrick é o cara",
      preco: "R$44,00",
      imagem: 'assets/imagens/diario9.jpg'
    },
    {
      id: 6,
      produto: "Diário de um banana - vai fundo",
      preco: "R$72,79",
      imagem: 'assets/imagens/diario10.jpg'
    },
    {
      id: 7,
      produto: "Diário de um banana - de-mo-li-ção",
      preco: "R$49,99",
      imagem: 'assets/imagens/diario11.jpg'
    },
    {
      id: 8,
      produto: "Diário de um banana - vai ou racha",
      preco: "R$39,99",
      imagem: 'assets/imagens/diario12.jpg'
    },
    {
      id: 9,
      produto: "Diário de um banana - dantes é que era",
      preco: "R$59,49",
      imagem: 'assets/imagens/diario13.jpg'
    },
    {
      id: 10,
      produto: "Diário de um banana - põe-te a milhas",
      preco: "R$79,49",
      imagem: 'assets/imagens/diario14.jpg'
    },
    {
      id: 11,
      produto: "Diário de um banana - ...e o meu",
      preco: "R$59,99",
      imagem: 'assets/imagens/diario15.jpg'
    },
    {
      id: 12,
      produto: "Diário de um banana - cabeça-oca",
      preco: "R$59,49",
      imagem: 'assets/imagens/diario16.jpg'
    },
    {
      id: 13,
      produto: "Diário de um banana - ora bolas",
      preco: "R$79,99",
      imagem: 'assets/imagens/diario17.jpg'
    },
    {
      id: 14,
      produto: "Diário de um banana - tirem-me daqui!",
      preco: "R$42,00",
      imagem: 'assets/imagens/diario18.jpg'
    },
    {
      id: 15,
      produto: "Diário de um banana - faça você mesmo",
      preco: "R$35,49",
      imagem: 'assets/imagens/diario19.jpg'
    },
    {
      id: 16,
      produto: "Diário de um banana - Box de livros",
      preco: "R$69,99",
      imagem: 'assets/imagens/boxdiario.jpg'
    },
  ]
  constructor() {}

}
