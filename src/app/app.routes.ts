import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Child1Component } from './child1/child1.component';
import { NgModule } from '@angular/core';
import { Child2Component } from './child2/child2.component';

export const routes: Routes = [
    {
        path:'login',
        component: LoginComponent,
    },
    {
        path:'dashboard',
        component: DashboardComponent,
        children:[
            {
                path:'child1',
                component: Child1Component,
            },
            {
                path:'child2',
                component: Child2Component,
            },
        ]
    },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
