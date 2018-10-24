import { Scenario4Parent } from './Scenario4/parent';
import { Scenario3Child } from './Scenario3/child/child';
import { Scenario3Parent } from './Scenario3/parent';
import { Scenario2Component } from './Scenario2/component2';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Scenario1Component } from './Scenario1/component1';
import { Scenario4Child } from './Scenario4/child/child';
import { Scenario5Parent } from './Scenario5/parent';
import { Scenario5Child } from './Scenario5/child/child';
import { Scenario5GrandChild } from './Scenario5/child/grandchild/grandchild';

@NgModule({
  declarations: [
    AppComponent,
    Scenario1Component,
    Scenario2Component,
    Scenario3Parent,
    Scenario3Child,
    Scenario4Parent,
    Scenario4Child,
    Scenario5Parent,
    Scenario5Child,
    Scenario5GrandChild
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
