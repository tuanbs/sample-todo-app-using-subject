import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'sample',
    loadChildren: () => import('./components/sample/sample.module').then((m) => m.SampleModule),
  },
  {
    path: 'todo',
    loadChildren: () => import('./components/todo/todo.module').then((m) => m.TodoModule),
  },
  {
    path: 'my-counter',
    loadChildren: () => import('./components/my-counter/my-counter.module').then((m) => m.MyCounterModule),
  },
  {
    path: 'my-todo',
    loadChildren: () => import('./components/my-todo/my-todo.module').then((m) => m.MyTodoModule),
  },
  {
    path: '',
    redirectTo: 'my-todo',
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
