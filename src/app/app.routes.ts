import { Routes } from '@angular/router';
import { ManagerComponent } from './manager/manager.component';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './home/home.component';
import { ServiceCreateComponent } from './manager/service-create/service-create.component';
import { ServiceAddComponent } from './components/service-add/service-add.component';
import { ClientAddComponent } from './components/client-add/client-add.component';


export const routes: Routes = [
    {
        path: 'manager',
        component: ManagerComponent,
        children: [
            { path: 'employee', component: ClientAddComponent },
            { path: 'service', component: ServiceAddComponent },
        ]
    },
    { path: 'client', component: ClientComponent },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
