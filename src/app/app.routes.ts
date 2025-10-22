import { Routes } from '@angular/router';
//importing pages to route to
import { HomeHomeComponent } from './home-home/home-home.component';
import { ContactHomeComponent } from './contact-home/contact-home.component';
import { ProjectsHomeComponent } from './projects-home/projects-home.component';
import { ServicesHomeComponent } from './services-home/services-home.component';

//creating the path to the component
export const routes: Routes = [
    { path: 'home', component: HomeHomeComponent },
    { path: 'contact', component: ContactHomeComponent},
    { path: 'projects', component: ProjectsHomeComponent},
    { path: 'services', component: ServicesHomeComponent}
];
