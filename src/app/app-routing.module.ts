import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdatefamilyhistoryComponent } from './family-history/updatefamilyhistory/updatefamilyhistory.component';
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
import { GetProcedureComponent } from './procedure/get-procedure/get-procedure.component';
import { UpdateProcedureComponent } from './procedure/update-procedure/update-procedure.component';
import { SocialhistoryComponent } from './Socialhistory/socialhistory/socialhistory.component';
import { UpdatesocialhistoryComponent } from './Socialhistory/updatesocialhistory/updatesocialhistory.component';
import { UpdateimmunizationsComponent } from './Immunizations/updateimmunizations/updateimmunizations.component';
import { HomeComponent } from './Home/home/home.component';
import { MedicationComponent } from './Medication/medication/medication.component';
import { UpdatemedicationComponent } from './Medication/updatemedication/updatemedication.component';


const routes: Routes = [
   { path:'vitals',component:VitalsComponent },
   {path:'updatevitals',component:UpdatevitalsComponent},
   {path:'planoftreatement',component:PlanOfTreatementComponent},
   {path:'updateplanoftreatement',component:UpdateplanoftreatementComponent},
   {path:'insurance',component:InsuranceComponent},
   {path:'updateinsurance',component:UpdateinsuranceComponent},
   {path:'conditons',component:ConditionComponent},
   {path:'updateCondition',component:UpdateconditionComponent},
   {path:'login',component:Login},
   {path:'immunization',component:ImmunizationsComponent},
   {path:'updateImmunizations',component:UpdateimmunizationsComponent},
   {path:'procedures',component:GetProcedureComponent},
   {path:'updateprocedure',component:UpdateProcedureComponent},
   {path:'socialhistory',component:SocialhistoryComponent},
   {path:'updateSocialHistory',component:UpdatesocialhistoryComponent},
  { path:'familyhistory',component:FamilyhistoryComponent },

   {path:'Updatefamilyhistory',component:UpdatefamilyhistoryComponent},
   {path:'',component:HomeComponent},
   {path:'medication',component:MedicationComponent},
   {path:'updatemedication',component:UpdatemedicationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
