import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegFormComponent } from './Component/reg-form/reg-form.component';
import { SearchStudentComponent } from './Component/search-student/search-student.component';
import { ViewStudentComponent } from './Component/view-student/view-student.component';
import { CreateCircularComponent } from './Component/create-circular/create-circular.component';
import { ViewCircularComponent } from './Component/view-circular/view-circular.component';
import { ApproveApplicationComponent } from './Component/approve-application/approve-application.component';
const routes: Routes = [{path:'regester', component:RegFormComponent},
                        {path:'view', component:ViewStudentComponent},
                        {path:'search', component:SearchStudentComponent},
                        {path:'createcircular', component:CreateCircularComponent},
                        {path:'viewcircular', component:ViewCircularComponent},
                      {path:'approveapplication',component:ApproveApplicationComponent} ];
                       

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
