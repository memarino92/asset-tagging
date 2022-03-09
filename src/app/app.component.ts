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
  name: string;
  rule: string;
  range: string;
  useGlobalRange: boolean;
  prefix?: string;
}
interface FormulaPart {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'asset-tagging';

  //all tenant locations
  locations: Location[] = [
    { name: 'All' },
    { name: 'Anytown High School' },
    { name: 'Anytown Middle School' },
    { name: 'Anytown Elementary School' },
  ];

  //all possible funding sources
  fundingSources: FundingSource[] = [
    { name: 'All' },
    { name: 'Purchase' },
    { name: 'Donation' },
  ];

  //Should be pulled from chassis types found in tenant products
  chassisTypes: ChassisType[] = [
    { name: 'All' },
    { name: 'Laptop' },
    { name: 'Chromebook' },
    { name: 'Desktop' },
  ];

  //all tenant products
  tenantProducts: TenantProduct[] = [
    { name: 'All' },
    { name: 'Asus C204MA Chromebook' },
    { name: 'Aver X30i Cart' },
    { name: 'Lenovo 300e Chromebook 2nd Gen' },
  ];

  //all process types
  processes: Process[] = [
    { name: 'All' },
    { name: 'Standalone' },
    { name: 'Carted' },
    { name: 'Carted on Site' },
  ];
  rules: Rule[] = [
    {
      name: 'High School Cart Template',
      rule: '{ Location: Anytown High School, Funding Source: All, Chassis Type: Cart, Tenant Product: All, Process: All }',
      range: '{ Starting Number: 1000, Ending Number: 4999 }',
      useGlobalRange: false,
      prefix: 'AHS',
    },
    {
      name: 'Middle School Chromebook Template',
      rule: '{ Location: All, Funding Source: All, Chassis Type: All, Tenant Product: All, Process: All }',
      range: '{ Starting Number: 5000, Ending Number: 9999 }',
      useGlobalRange: false,
      prefix: 'AMS',
    },
    {
      name: 'Default Template',
      rule: '{ Location: All, Funding Source: All, Chassis Type: All, Tenant Product: All, Process: All }',
      range: '{ Starting Number: 1, Ending Number: 9999 }',
      useGlobalRange: true,
    },
  ];

  formula: FormulaPart[] = [
    {
      name: 'LocationCode',
    },
    {
      name: 'Text',
    },
    {
      name: 'Number',
    },
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.rules, event.previousIndex, event.currentIndex);
  }
  formulaDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.formula, event.previousIndex, event.currentIndex);
  }
}
