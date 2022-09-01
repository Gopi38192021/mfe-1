import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RemoteWrapperComponent } from './remote-wrapper/remote-wrapper.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path:'host',
    component:RemoteWrapperComponent
  },
  {
    path:'remotes',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      exposedModule: './Module'
  })
  .then((m) =>{
    console.log(m);
    return m.RemoteStubModule
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
