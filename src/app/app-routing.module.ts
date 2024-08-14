import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordExistGuard } from './core/guards/password.guard';

const routes: Routes = [
  {
    path: 'poc-ai',
    loadChildren: () =>
      import('./modules/chat/chat.module').then((m) => m.ChatModule),
    canActivate: [PasswordExistGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
  },

  { path: '**', redirectTo: 'poc-ai' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
