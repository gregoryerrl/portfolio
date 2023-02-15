import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const rootRouterConfig: Routes = [
  //{
  //   path: 'admin',
  //   loadChildren: () => import('./admin-panel/admin-panel.module').then(m => m.AdminPanelModule),
  //   canActivate: [AuthGuard],
  //   data: {
  //     role: '1'
  //   }
  // },
  // {
  //   path: 'technician-panel',
  //   loadChildren: () => import('./views/technician-panel/technician-panel.module').then(m => m.TechnicianPanelModule),
  //   canActivate: [AuthGuard],
  //   data: {
  //     role: '2'
  //   }
  // },
  // {
  //   path: 'technician',
  //   loadChildren: () => import('./tech-panel/tech-panel.module').then(m => m.TechPanelModule),
  //   canActivate: [AuthGuard],
  //   data: {
  //     role: '2'
  //   }
  // },
  // {
  //   path: 'user',
  //   loadChildren: () => import('./client-panel/client-panel.module').then(m => m.ClientPanelModule),
  //   canActivate: [AuthGuard],
  //   data: {
  //     role: '3'
  //   }
  // },
  // {
  //   path: '',
  //   loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  //   // canActivate: [LoginGuard]
  // }
  // {
  //   path: 'login',
  //   loadChildren: () => import('./views/auth/auth.module').then((m) => m.AuthModule),
  // },
  // {
  //   path: '',
  //   redirectTo: 'login/selection',
  //   pathMatch: 'full'
  // },
  // {
  //   path: '',
  //   children: [
  //     {
  //       path: 'admin',
  //       loadChildren: () => import('./views/auth/admin/admin.module').then(m => m.AdminsModule)
  //     },
  //     {
  //       path: 'admin',
  //       loadChildren: () => import('./views/admin-panel/admin-panel.module').then(m => m.AdminPanelModule)
  //     },
  //   ]
  // },
  // {
  //   path: '',
  //   children: [
  //     {
  //       path: 'technician',
  //       loadChildren: () => import('./views/auth/technician/technician.module').then(m => m.TechniciansModule)
  //     },
  //     {
  //       path: 'technician',
  //       loadChildren: () => import('./views/technician-panel/technician-panel.module').then(m => m.TechnicianPanelModule)
  //     },
  //   ]
  // },
  // {
  //   path: '',
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: () => import('./views/auth/customer/customer.module').then(m => m.CustomersModule)
  //     },
  //     {
  //       path: '',
  //       loadChildren: () => import('./views/customer-panel/customer-panel.module').then(m => m.CustomerPanelModule)
  //     },
  //   ]
  // },
  // {
  //   path: '',
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: () => import('./views/auth/main/main-auth.module').then(m => m.MainAuthModule)
  //     }
  //   ]
  // },
  // {
  //   path: '',
  //   component: HeaderComponent,
  //   children: [
  //     {
  //       path: 'error',
  //       loadChildren: () => import('./views/error-page/error-page.module').then(m => m.ErrorPageModule)
  //     }
  //   ]
  // },
  // {
  //   path: '**',
  //   redirectTo: 'error/404'
  // }
];

const routerOptions: any = {
  useHash: false,
  //anchorScrolling: 'false',
};

@NgModule({
  imports: [RouterModule.forRoot(rootRouterConfig, routerOptions)],
  exports: [RouterModule],
  /*providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],*/
})
export class AppRoutingModule {}
