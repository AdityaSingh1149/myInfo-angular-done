import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { NavlistComponent } from './navlist/navlist.component';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { UpdatefamilyhistoryComponent } from './family-history/updatefamilyhistory/updatefamilyhistory.component';
import { UserComponent } from './family-history/user/user.component';
import { FamilyhistoryComponent } from './family-history/familyhistory/familyhistory.component';
import { VitalsComponent } from './Vitals/vitals/vitals.component';
import { UpdatevitalsComponent } from './Vitals/updatevitals/updatevitals.component';
import { PlanOfTreatementComponent } from './planOfTreatement/plan-of-treatement/plan-of-treatement.component';
import { UpdateplanoftreatementComponent } from './planOfTreatement/updateplanoftreatement/updateplanoftreatement.component';
import { InsuranceComponent } from './Insurance/insurance/insurance.component';
import { UpdateinsuranceComponent } from './Insurance/updateinsurance/updateinsurance.component';
import { ConditionComponent } from './Condition/condition/condition.component';
import { UpdateconditionComponent } from './Condition/updatecondition/updatecondition.component';
import { Login } from './login.controller/login.controller.component';
import { ImmunizationsComponent } from './Immunizations/immunizations/immunizations.component';
import { UpdateimmunizationsComponent } from './Immunizations/updateimmunizations/updateimmunizations.component';
import { GetProcedureComponent } from './procedure/get-procedure/get-procedure.component';
import { UpdateProcedureComponent } from './procedure/update-procedure/update-procedure.component';
import { SocialhistoryComponent } from './Socialhistory/socialhistory/socialhistory.component';
import { UpdatesocialhistoryComponent } from './Socialhistory/updatesocialhistory/updatesocialhistory.component';
import { HomeComponent } from './Home/home/home.component';
import { MedicationComponent } from './Medication/medication/medication.component';
import { UpdatemedicationComponent } from './Medication/updatemedication/updatemedication.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavlistComponent,
    UpdatefamilyhistoryComponent,
    UserComponent,
    FamilyhistoryComponent,
    VitalsComponent,
    UpdatevitalsComponent,
    PlanOfTreatementComponent,
    UpdateplanoftreatementComponent,
    InsuranceComponent,
    UpdateinsuranceComponent,
    ConditionComponent,
    UpdateconditionComponent,
    Login,
    ImmunizationsComponent,
    UpdateimmunizationsComponent,
    GetProcedureComponent,
    UpdateProcedureComponent,
    SocialhistoryComponent,
    UpdatesocialhistoryComponent,
    HomeComponent,
    MedicationComponent,
    UpdatemedicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
