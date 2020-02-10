import { Component } from '@angular/core';

import { PoMenuItem } from '@portinari/portinari-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName: string = "Catálogo de Produtos";

  readonly menus: Array<PoMenuItem> = [
    { label: 'Início', link: '/', icon: 'po-icon po-icon-home' },
    { 
      label: 'Empresas',
      icon: 'po-icon po-icon-company',
      subItems: [
        { label: "Listar", link: '/companies' },
        { label: "Criar", link: '/companies/create' }
      ]
    },
    { 
      label: 'Produtos',
      link: '/products',
      icon: 'po-icon po-icon-stock',
      subItems: [
        { label: "Listar", link: '/companies' },
        { label: "Criar" }
      ]
    }
  ];

}
