import { Component, OnInit, ViewChild } from '@angular/core';
import { PoListViewAction, PoDialogService, PoModalComponent } from '@portinari/portinari-ui';

import { CompaniesService } from './companies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companyList: object[];

  readonly actions: Array<PoListViewAction> = [{
    label: 'Editar',
    action: this.editCompany.bind(this),
    icon: 'po-icon-edit'
  }, {
    label: 'Excluir',
    action: this.deleteCompany.bind(this),
    type: 'danger',
    icon: 'po-icon-delete'
  }
  ];

  constructor(
    private router: Router,
    private companiesService: CompaniesService,
    private poDialog: PoDialogService,
  ) { }

  ngOnInit() {
    this.loadCompanies();
  }

  formatTitle(item: any) {
    return `${item.name}`.toUpperCase();
  }

  loadCompanies() {
    this.companiesService.getAll().subscribe((res: any) => {
      if (!res.error) {
        this.companyList = res.data;
      } else {
        console.error(res);
      }
    });
  }

  editCompany(company: any) {
    const id = company._id;

    this.router.navigate([`companies/edit/${id}`]);
  }

  deleteCompany(company: any) {
    this.poDialog.confirm({
      title: "Exclusão de Empresa",
      message: "Quer mesmo excluir esta empresa?",
      confirm: () => {
        this.companiesService.delete(company._id).subscribe((res: any) => {
          this.loadCompanies();
        });
      }
    });
  }

}
