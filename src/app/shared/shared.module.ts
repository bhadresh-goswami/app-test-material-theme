import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHeaderComponent } from './user-header/user-header.component';

@NgModule({
  declarations: [UserHeaderComponent],
  imports: [CommonModule],
  exports: [UserHeaderComponent],
})
export class SharedModule {}
