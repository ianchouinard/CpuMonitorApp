import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  {
    path: "",
    loadChildren: "./modules/dashboard/dashboard.module#DashboardModule"
  },
  {
    path: "history",
    loadChildren: "./modules/history/history.module#HistoryModule"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: false,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
