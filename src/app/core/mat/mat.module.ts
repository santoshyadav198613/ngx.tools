import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatSelectModule,
  MatButtonToggleModule,
  MatTooltipModule,
  MatChipsModule
} from '@angular/material';

const MAT_MODULES = [
  MatSnackBarModule,
  MatExpansionModule,
  MatListModule,
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatSelectModule,
  MatButtonToggleModule,
  MatTooltipModule,
  MatChipsModule
];

@NgModule({
  imports: MAT_MODULES,
  exports: MAT_MODULES
})
export class MatModule {}
