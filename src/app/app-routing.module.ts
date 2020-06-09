import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'monitor', loadChildren: () => import('./pages/monitor/monitor.module').then(m => m.MonitorModule) },
  { path: 'workspace', loadChildren: () => import('./pages/workspace/workspace.module').then(m => m.WorkspaceModule) },
  { path: 'g2', loadChildren: () => import('./pages/g2-chart/g2-chart.module').then(m => m.G2ChartModule) },
  { path: 'ng-zorro',
    children: [
      { path: 'table', loadChildren: () => import('./pages/ng-zorro/table/table.module').then(m => m.TableModule)},
      { path: 'form', loadChildren: () => import('./pages/ng-zorro/form/form.module').then(m => m.FormModule)}
    ]
  },
  {
    path: 'css-basic',
    children: [
      { path: 'building-blocks', loadChildren: () => import('./pages/css-basic/building-blocks/building-blocks.module').then(m => m.BuildingBlocksModule) },
      { path: 'styling-text', loadChildren: () => import('./pages/css-basic/styling-text/styling-text.module').then(m => m.StylingTextModule) },
      { path: 'layout', loadChildren: () => import('./pages/css-basic/layout/layout.module').then(m => m.LayoutModule) }
    ]
  },
  {
    path: 'front-lib',
    children: [
      { path: 'draggable-grid-lib', loadChildren: () => import('./pages/front-end-lib/draggable-grid-lib/draggable-grid-lib.module').then(m => m.DraggableGridLibModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
