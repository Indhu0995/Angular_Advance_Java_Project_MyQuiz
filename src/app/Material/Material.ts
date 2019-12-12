import { NgModule } from '@angular/core';
import {MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatTableModule,
  MatPaginatorModule,MatSortModule,MatButtonToggleModule,MatMenuModule,MatRadioModule,MatOptionModule,
  MatSelectModule,MatRippleModule

  
} from '@angular/material'


const MaterialComponets=[
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatButtonToggleModule,
  MatMenuModule,
  MatRadioModule,
  MatOptionModule,
  MatSelectModule,MatRippleModule
  
 
 
]
@NgModule({
  imports: [MaterialComponets],
  exports:[MaterialComponets]
})
export class MaterialModule { }
