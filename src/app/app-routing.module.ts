import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { PhotoCompareComponent } from './photo-compare/photo-compare.component';

const routes: Routes = [
  {path: '', component : PhotoCompareComponent } ,
  {path: "table", component : TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

