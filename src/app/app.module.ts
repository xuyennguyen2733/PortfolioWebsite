import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { WebAppComponent } from './components/web-app/web-app.component';
import {
  ArtworkComponent,
  PopUpImage,
} from './components/artwork/artwork.component';
import { OthersComponent } from './components/others/others.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRipple } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import {
  MatDrawer,
  MatDrawerContainer,
  MatDrawerContent,
} from '@angular/material/sidenav';
import {
  SvgGitHubIconComponent,
  SvgIconComponent,
  SvgMsWordComponent,
  SvgPdfIconComponent,
} from './shared/svg-icon/svg-icon.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import {
  MatChip,
  MatChipGrid,
  MatChipRow,
  MatChipSet,
} from '@angular/material/chips';
import { SvgPlaceholderImageComponent } from './shared/svg-placeholder-image/svg-placeholder-image.component';
import { SvgIconButtonComponent } from './utils/svg-icon-button/icon-button.component';
import { LinkCardComponent } from './utils/link-card/link-card.component';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import {
  MatDialogActions,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatTooltip } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatLabel } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    WebAppComponent,
    ArtworkComponent,
    OthersComponent,
    SvgIconComponent,
    SvgGitHubIconComponent,
    SvgMsWordComponent,
    SvgPdfIconComponent,
    SideBarComponent,
    IntroductionComponent,
    SvgPlaceholderImageComponent,
    SvgIconButtonComponent,
    LinkCardComponent,
    PopUpImage,
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
    MatDrawerContent,
    MatChip,
    MatChipSet,
    MatChipGrid,
    MatChipRow,
    MatTab,
    MatTabGroup,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatTooltip,
    MatMenuModule,
    MatLabel
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
