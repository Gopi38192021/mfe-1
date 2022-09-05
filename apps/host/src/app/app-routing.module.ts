import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { BreedListComponent } from './breed-list/breed-list.component';

const routes: Routes = [
  {
    path:'',
    component: BreedListComponent
  },
  {
    path:'breed-info/:id',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      exposedModule: './Module'
  })
  .then((m) =>{
    console.log(m);
    return m.MicroBreedInfoModule
  })
  }
]
@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
