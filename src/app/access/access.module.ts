import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessComponent } from './access/access.component';
import { ModuleComponent } from './module/module.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
    {
      path: '', component: AccessComponent,
      children: [
        { path: '', redirectTo: 'access', pathMatch: 'full' },
        // {path: 'access', component: AppointmentComponent},
        { path: 'make-appointment', component: AppointmentComponent },
        // { path: 'contact-us', component: ContactComponent },
        // { path: 'read-more-about-us', component: AboutComponent },
        // { path: 'about-us', component: AboutComponent },
        // { path: 'reset-forgotten-password', component: ForgotPasswordComponent },
        // { path: 'recover-password/:code/:username/:id', component: RecoverPasswordComponent },
        // { path: 'reset-your-password', component: ResetPasswordComponent },
      ]
    }
]

@NgModule({
    declarations: [
        AccessComponent, 
        ModuleComponent, 
        AppointmentComponent
    ],

    imports: [
        CommonModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        ComponentsModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        HttpClientModule
        // BrowserAnimationsModule
    ]
})
export class AccessModule { }
