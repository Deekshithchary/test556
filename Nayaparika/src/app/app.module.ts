import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeadComponent } from './head/head.component';
import { BodyComponent } from './body/body.component';
import { CivillawComponent } from './civillaw/civillaw.component';
import { CrimiallawComponent } from './crimiallaw/crimiallaw.component';
import { InternationallawComponent } from './internationallaw/internationallaw.component';
import { HumarightslawComponent } from './humarightslaw/humarightslaw.component';
import { HumanresouceslawComponent } from './humanresouceslaw/humanresouceslaw.component';
import { ImmigrationlawComponent } from './immigrationlaw/immigrationlaw.component';
import { CorporatelawComponent } from './corporatelaw/corporatelaw.component';
import { BankinglawComponent } from './bankinglaw/bankinglaw.component';
import { TaxationlawComponent } from './taxationlaw/taxationlaw.component';
import { MedialawComponent } from './medialaw/medialaw.component';
import { MergerslawComponent } from './mergerslaw/mergerslaw.component';
import { FamilylawComponent } from './familylaw/familylaw.component';
import { IntellectuallawComponent } from './intellectuallaw/intellectuallaw.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HeadComponent,
    BodyComponent,
    CivillawComponent,
    CrimiallawComponent,
    InternationallawComponent,
    HumarightslawComponent,
    HumanresouceslawComponent,
    ImmigrationlawComponent,
    CorporatelawComponent,
    BankinglawComponent,
    TaxationlawComponent,
    MedialawComponent,
    MergerslawComponent,
    FamilylawComponent,
    IntellectuallawComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
