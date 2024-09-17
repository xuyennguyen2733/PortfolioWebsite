import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebAppComponent } from './components/web-app/web-app.component';
import { ArtworkComponent } from './components/artwork/artwork.component';
import { OthersComponent } from './components/others/others.component';
import { IntroductionComponent } from './components/introduction/introduction.component';

const routes: Routes = [
  {path:'introduction', component: IntroductionComponent},
  {path:'web-app', component: WebAppComponent},
  {path:'artwork', component: ArtworkComponent},
  {path:'others', component: OthersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
