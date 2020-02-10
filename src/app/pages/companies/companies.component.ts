import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { PoListViewAction } from '@portinari/portinari-ui';

import { CompaniesService } from './companies.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companyList: object[];

  readonly actions: Array<PoListViewAction> = [{
      label: 'Editar',
      icon: 'po-icon-edit'
    }, {
      label: 'Excluir',
      type: 'danger',
      icon: 'po-icon-delete'
    }
  ];

  constructor(private companiesService: CompaniesService) { }

  ngOnInit() {
    this.loadCompanies();
  }

  formatTitle(item: any) {
    return `${item.name}`.toUpperCase();
  }

  loadCompanies() {
    this.companiesService.getAll().subscribe((res: any) => {
      console.log('All companies:', res);
      if (!res.error) {
        this.companyList = res.data
      }
    });
  }

}
