import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { ContentsComponent } from './routes/contents/contents.component';
import { AuthorityComponent } from './routes/authority/authority.component';
import { JournalsComponent } from './routes/journals/journals.component';
import { AppRoutingModule } from './app-routing.module';
import { InterfacesComponent } from './routes/interfaces/interfaces.component';
import { LoginComponent } from './routes/login/login.component';
import { ServicesComponent } from './routes/services/services.component';

import { JwtInterceptor } from './helpers/jwt.interceptor';
import { AuthGuard } from './guards/auth.guard';

import { AuthorityService } from './services/authority.service';
import { AuthorizeService } from './services/authorize.service';
import { ContentsService } from './services/contents.service';
import { InterfacesService } from './services/interfaces.service';
import { JournalsService } from './services/journals.service';
import { MessagesService } from './services/messages.service';
import { LoginSceneService } from './services/login-scene.service';
import { StorageService } from './services/storage.service';

import { TableComponent } from './components/table/table.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ChartComponent } from './components/chart/chart.component';
import { TreeComponent } from './components/tree/tree.component';
import { EditorComponent } from './components/editor/editor.component';


@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    ContentsComponent,
    AuthorityComponent,
    JournalsComponent,
    InterfacesComponent,
    HomeComponent,
    LoginComponent,
    TableComponent,
    PaginationComponent,
    ChartComponent,
    TreeComponent,
    EditorComponent,
    ServicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    AuthorityService,
    AuthorizeService,
    ContentsService,
    InterfacesService,
    JournalsService,
    MessagesService,
    LoginSceneService,
    StorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
