import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companyList: object[] = [
    { id: "1", name: "Empresa 001", description: "Primeira empresa de teste.", products: 3 },
    { id: "2", name: "Empresa 002", description: "Segunda empresa de teste.", products: 30 },
    { id: "3", name: "Empresa 003", description: "Terceira empresa de teste.", products: 10 }
  ];

  constructor() { }

  ngOnInit() { }

}
