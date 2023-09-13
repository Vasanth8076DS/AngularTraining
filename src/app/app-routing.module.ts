import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UserlistComponent } from "./userlist/userlist.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { ProfileComponent } from "./profile/profile.component";
import { OverviewComponent } from "./overview/overview.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "user", component: UserlistComponent },
  {
    path: "user/:id",
    component: UserDetailComponent,
    children: [
      { path: "profile", component: ProfileComponent },
      { path: "overview", component: OverviewComponent },
    ],
  },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  HomeComponent,
  UserlistComponent,
  PageNotFoundComponent,
  UserDetailComponent,
  ProfileComponent,
  OverviewComponent
];
