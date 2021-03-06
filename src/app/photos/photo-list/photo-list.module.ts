import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { CardModule } from "../../Shared/Components/Card/card.module";
import { DarkenOnHoverModule } from "../../Shared/Directives/Darken-on-hover/darken-on-hover.module";
import { PhotoModule } from "../photo/photo.module";
import { FilterByDescription } from "./filter-by-description.pipe";
import { LoadButtonComponent } from "./load-button/load-button.component";
import { PhotoListComponent } from "./photo-list.component";
import { PhotosComponent } from "./photos/photos.component";
import { SearchComponent } from "./Search/search.component";

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescription,
    SearchComponent
  ],
  imports: [
    CommonModule,
    PhotoModule,
    CardModule,
    DarkenOnHoverModule
  ]
})
export class PhotoListModule { }
