import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

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

interface Rule {
  rule: string;
  range: string;
  prefix?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'asset-tagging';
  locations: Location[] = [
    { name: 'All' },
    { name: 'Anytown High School' },
    { name: 'Anytown Middle School' },
    { name: 'Anytown Elementary School' },
  ];
  fundingSources: FundingSource[] = [
    { name: 'All' },
    { name: 'Purchase' },
    { name: 'Donation' },
  ];
  chassisTypes: ChassisType[] = [
    { name: 'All' },
    { name: 'Laptop' },
    { name: 'Chromebook' },
    { name: 'Desktop' },
  ];
  tenantProducts: TenantProduct[] = [
    { name: 'All' },
    { name: 'Asus C204MA Chromebook' },
    { name: 'Aver X30i Cart' },
    { name: 'Lenovo 300e Chromebook 2nd Gen' },
  ];
  processes: Process[] = [
    { name: 'All' },
    { name: 'Standalone' },
    { name: 'Carted' },
    { name: 'Carted on Site' },
  ];
  rules: Rule[] = [
    {
      rule: '{ Location: All, Funding Source: All, Chassis Type: All, Tenant Product: All, Process: All }',
      range: '{ Starting Number: 1, Ending Number: 9999 }',
    },
    {
      rule: '{ Location: Anytown High School, Funding Source: All, Chassis Type: All, Tenant Product: All, Process: All }',
      range: '{ Starting Number: 1, Ending Number: 9999 }',
      prefix: 'AHS',
    },
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.rules, event.previousIndex, event.currentIndex);
  }
}
