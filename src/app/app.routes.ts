import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'templateform', component: TemplateDrivenFormComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'about',
    component: AboutComponent,
    children: [{ path: 'child-a', component: DetailComponent }],
  },

  { path: 'pageNotFound', component: PageNotFoundComponent },
  //Vd nếu đường dẫn không có thì nó sẽ chạy đến home
  { path: '', component: HomeComponent },
];
