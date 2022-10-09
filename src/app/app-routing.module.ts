import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'todo',
    loadChildren: () => import('./components/todo/todo.module').then((m) => m.TodoModule),
  },
  {
    path: 'my-counter',
    loadChildren: () => import('./components/my-counter/my-counter.module').then((m) => m.MyCounterModule),
  },
  {
    path: '',
    redirectTo: 'my-counter',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
