import { ContentBlocksComponent } from './content-blocks/content-blocks.component';
import { ContentImageComponent } from './content-image/content-image.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "", component: ContentImageComponent,
    children: [
      { path: "europe", component: ContentBlocksComponent },
      {path:"america",component:ContentBlocksComponent}
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
