import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankinglawComponent } from './bankinglaw/bankinglaw.component';
import { CivillawComponent } from './civillaw/civillaw.component';
import { CorporatelawComponent } from './corporatelaw/corporatelaw.component';
import { CrimiallawComponent } from './crimiallaw/crimiallaw.component';
import { FamilylawComponent } from './familylaw/familylaw.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HumanresouceslawComponent } from './humanresouceslaw/humanresouceslaw.component';
import { HumarightslawComponent } from './humarightslaw/humarightslaw.component';
import { ImmigrationlawComponent } from './immigrationlaw/immigrationlaw.component';
import { IntellectuallawComponent } from './intellectuallaw/intellectuallaw.component';
import { InternationallawComponent } from './internationallaw/internationallaw.component';
import { MedialawComponent } from './medialaw/medialaw.component';
import { MergerslawComponent } from './mergerslaw/mergerslaw.component';
import { TaxationlawComponent } from './taxationlaw/taxationlaw.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'header',component:HeaderComponent},
{path:'footer',component:FooterComponent},
{path:'bankinglaw',component:BankinglawComponent},
{path:'civillaw',component:CivillawComponent},
{path:'corporatelaw',component:CorporatelawComponent},
{path:'criminallaw',component:CrimiallawComponent},
{path:'familylaw',component:FamilylawComponent},
{path:'human',component:HumanresouceslawComponent},
{path:'humarightslaw',component:HumarightslawComponent},
{path:'intel',component:IntellectuallawComponent},
{path:'inter',component:InternationallawComponent},
{path:'media',component:MedialawComponent},
{path:'merger',component:MergerslawComponent},
{path:'taxation',component:TaxationlawComponent},
{path:'immi',component:ImmigrationlawComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
