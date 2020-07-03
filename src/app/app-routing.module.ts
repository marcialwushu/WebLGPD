import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'capitulo-i',
    loadChildren: () => import('./pages/capitulo-i/capitulo-i.module').then( m => m.CapituloIPageModule)
  },
  {
    path: 'capitulo-ii',
    loadChildren: () => import('./pages/capitulo-ii/capitulo-ii.module').then( m => m.CapituloIiPageModule)
  },
  {
    path: 'capitulo-iii',
    loadChildren: () => import('./pages/capitulo-iii/capitulo-iii.module').then( m => m.CapituloIiiPageModule)
  },
  {
    path: 'capitulo-iv',
    loadChildren: () => import('./pages/capitulo-iv/capitulo-iv.module').then( m => m.CapituloIvPageModule)
  },
  {
    path: 'capitulo-v',
    loadChildren: () => import('./pages/capitulo-v/capitulo-v.module').then( m => m.CapituloVPageModule)
  },
  {
    path: 'capitulo-vi',
    loadChildren: () => import('./pages/capitulo-vi/capitulo-vi.module').then( m => m.CapituloViPageModule)
  },
  {
    path: 'capitulo-vii',
    loadChildren: () => import('./pages/capitulo-vii/capitulo-vii.module').then( m => m.CapituloViiPageModule)
  },
  {
    path: 'capitulo-viii',
    loadChildren: () => import('./pages/capitulo-viii/capitulo-viii.module').then( m => m.CapituloViiiPageModule)
  },
  {
    path: 'capitulo-ix',
    loadChildren: () => import('./pages/capitulo-ix/capitulo-ix.module').then( m => m.CapituloIxPageModule)
  },
  {
    path: 'capitulo-x',
    loadChildren: () => import('./pages/capitulo-x/capitulo-x.module').then( m => m.CapituloXPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
