import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './loginPackage/login/login.component';
import { MainComponent } from './loginPackage/main/main.component';
import { RegisterComponent } from './loginPackage/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './persona/formulario/formulario.component';
import { ListadoComponent } from './persona/listado/listado.component';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        MainComponent,
        RegisterComponent,
        FormularioComponent,
        ListadoComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        AppRoutingModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
    ]
})
export class AppModule { }
