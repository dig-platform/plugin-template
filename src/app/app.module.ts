import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import {NgxFirebaseClientModule} from '@ngx-firebase/client';
import {MatButtonModule} from '@angular/material/button';
import {DighubPluginModule} from './dighub-plugin/dighub-plugin.module';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        DighubPluginModule,
        FormsModule,
        MatCardModule,
        NgxFirebaseClientModule.forRoot({
            apiKey: 'AIzaSyB0xQpZfNg99d3I8VbG-ieFBMjtD6FMVmc',
            authDomain: 'dighub-test.firebaseapp.com',
            databaseURL: 'https://dighub-test.firebaseio.com',
            projectId: 'dighub-test',
            storageBucket: 'dighub-test.appspot.com',
            messagingSenderId: '669622839376',
            appId: '1:669622839376:web:1732d3c43b0b3930bc4955',
            measurementId: 'G-4Q3CK76JTQ'
        }),
        MatButtonModule,
        MatIconModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
