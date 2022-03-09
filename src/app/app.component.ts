import { Component } from '@angular/core';

interface Location {
  name: string;
}
interface FundingSource {
  name: string;
}
interface ChassisType {
  name: string;
}
interface TenantProduct {
  name: string;
}
interface Process {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'asset-tagging';
  locations: Location[] = [
    { name: 'Anytown High School' },
    { name: 'Anytown Middle School' },
    { name: 'Anytown Elementary School' },
  ];
  fundingSources: FundingSource[] = [
    { name: 'Purchase' },
    { name: 'Donation' },
  ];
  chassisTypes: ChassisType[] = [
    { name: 'Laptop' },
    { name: 'Chromebook' },
    { name: 'Desktop' },
  ];
  tenantProducts: TenantProduct[] = [
    { name: 'Asus C204MA Chromebook' },
    { name: 'Aver X30i Cart' },
    { name: 'Lenovo 300e Chromebook 2nd Gen' },
  ];
  processes: Process[] = [
    { name: 'Standalone' },
    { name: 'Carted' },
    { name: 'Carted on Site' },
  ];
}
