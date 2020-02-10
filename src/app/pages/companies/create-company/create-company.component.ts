import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';

import { CompaniesService } from '../companies.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {
  companyForm: FormGroup;

  constructor(
    private companiesService: CompaniesService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createCompanyForm();
  }

  createCompanyForm() {
    this.companyForm = this.fb.group({
      name: ['', Validators.compose([
        Validators.required, Validators.minLength(5), Validators.maxLength(30)
      ])],
      cnpj: ['', Validators.compose([
        Validators.required, Validators.minLength(14)
      ])],
      address: ['', Validators.maxLength(50)],
      workers: ['', Validators.min(0)],
      description: ['', Validators.maxLength(100)],
    });
  }

  saveCompany() {
    const company = this.companyForm.value;

    this.companiesService.create(company).subscribe((res: any) => {
      if (!res.error) {
        alert('Empresa cadastrada!');
        this.companyForm.reset();
      }
    });
  }

}
