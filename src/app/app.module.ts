import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { App }         from './app.component';
import { Home }   from './routes/home.component'

import { Login }   from './routes/authorize/login.component'
import { ForgetPassword }   from './routes/authorize/forget-password.component'

import { DataCenterInstance }   from './routes/data-center/instance.component'
import { DataCenterList }   from './routes/data-center/list.component'

import { SpiderInstance }      from './routes/services/spider/instance.component'
import { SpiderList }      from './routes/services/spider/list.component'
import { Spider }      from './routes/services/spider/spider.component'

import { ScanInstance }  from './routes/services/scan/instance.component'
import { ScanList }  from './routes/services/scan/list.component'
import { Scan }  from './routes/services/scan/scan.component'

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    App,
    Home,
    Login,
    ForgetPassword,
    DataCenterList,
    DataCenterInstance,
    SpiderList,
    Spider,
    ScanInstance,
    ScanList,
    Scan
  ],
  bootstrap: [ App ]
})
export class AppModule { }
