import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'photo-gallery',
        loadChildren: () => import('../photo-gallery/photo-gallery.module').then(m => m.PhotoGalleryPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/photo-gallery',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/photo-gallery',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
