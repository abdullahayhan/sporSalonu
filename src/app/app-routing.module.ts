import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBlogComponent } from './admin-panel/admin-blog/admin-blog.component';
import { BlogAddComponent } from './admin-panel/admin-blog/blog-add/blog-add.component';
import { BlogUpdateComponent } from './admin-panel/admin-blog/blog-update/blog-update.component';
import { LoginComponent } from './admin-panel/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { GaleryComponent } from './components/galery/galery.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {path:'' ,component:HomeComponent},
  {path:'aboutUs',component:AboutComponent},
  {path:'gallery',component:GaleryComponent},
  {path:'services',component:ServicesComponent},
  {path:'contact',component:ContactComponent},
  {path:'blog',component:BlogComponent},
  {path:'login',component:LoginComponent},
  {path:'admin-blog', canActivate:[AuthGuard],component:AdminBlogComponent},
  {path:'blog-update/:id',component:BlogUpdateComponent},
  {path:'blog-add',component:BlogAddComponent},
];

@NgModule({
  imports: [RouterModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
