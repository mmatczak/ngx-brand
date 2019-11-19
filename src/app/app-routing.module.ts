import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ThemedDialogComponent} from './themed-dialog/themed-dialog.component';
import {DialogAComponent} from './dialog-a/dialog-a.component';
import {DialogBComponent} from './dialog-b/dialog-b.component';
import {DialogDispatcherComponent} from './dialog-dispatcher/dialog-dispatcher.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/agreement/TOKEN', pathMatch: 'full'
  },
  {
    path: 'agreement/:token',
    component: DialogDispatcherComponent
  },
  {
    path: ':brand',
    component: ThemedDialogComponent,
    children: [
      {
        path: 'a',
        component: DialogAComponent
      },
      {
        path: 'b',
        component: DialogBComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
