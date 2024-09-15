import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { WebAppComponent } from './components/web-app/web-app.component';
import { ArtworkComponent } from './components/artwork/artwork.component';
import { OthersComponent } from './components/others/others.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRipple } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatDrawer, MatDrawerContainer, MatDrawerContent } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    WebAppComponent,
    ArtworkComponent,
    OthersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatDrawerContainer,
    MatDrawer,
    MatDrawerContent
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
