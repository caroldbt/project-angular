import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { LocalSorageDataComponent } from './local-sorage-data/local-sorage-data.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';
import { LocalStorageDataComponent } from './local-storage-data/local-storage-data.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    LocalSorageDataComponent,
    DeleteItemComponent,
    LocalStorageDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
