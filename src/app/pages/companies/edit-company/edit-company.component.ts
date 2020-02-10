import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompaniesService } from '../companies.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit {
  companyId: string;
  companyForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private companiesService: CompaniesService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createCompanyForm();

    this.route.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');

      this.companiesService.getById(id).subscribe((res: any) => {
        if (!res.error) {
          const company = {
            name: res.data.name,
            cnpj: res.data.cnpj,
            address: res.data.address,
            workers: res.data.workers,
            description: res.data.description,
          }

          this.companyId = id;
          this.companyForm.setValue(company);
        } else {
          console.log(res);
          alert('Empresa não encontrada');
        }
      })
    })
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

    this.companiesService.update(this.companyId, company).subscribe((res: any) => {
      if (!res.error) {
        alert('Empresa atualizada!');
      }
    });
  }

}
