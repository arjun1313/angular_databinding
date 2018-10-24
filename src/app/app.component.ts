import { Scenario4Parent } from './Scenario4/parent';
import { Scenario4Child } from './Scenario4/child/child';
import { Scenario3Child } from './Scenario3/child/child';
import { Scenario3Parent } from './Scenario3/parent';
import { Scenario2Component } from './Scenario2/component2';
import { Scenario1Component } from './Scenario1/component1';
import { Scenario5Parent } from './Scenario5/parent';
import { Scenario5Child } from './Scenario5/child/child';
import { Scenario5GrandChild } from './Scenario5/child/grandchild/grandchild';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'hellow-world';
}
