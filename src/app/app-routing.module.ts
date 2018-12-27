import { NgModule }             from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

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

import { AuthorizeService }  from './services/authorize.service'

const routes: Routes = [{ 
  path: '', 
  component: Home, 
  pathMatch: 'full', 
  canActivate: [AuthorizeService] 
}, { 
  path: 'login', 
  component: Login, 
  pathMatch: 'full', 
  canActivate: [AuthorizeService] 
}, { 
  path: 'forget-password', 
  component: ForgetPassword, 
  pathMatch: 'full', 
  canActivate: [AuthorizeService] 
}, { 
  path: 'data-center/list', 
  component: DataCenterList, 
  pathMatch: 'full', 
  canActivate: [AuthorizeService] 
}, { 
  path: 'data-center/instance', 
  component: DataCenterInstance, 
  pathMatch: 'full', 
  canActivate: [AuthorizeService]
}, { 
  path: 'spider/instance', 
  component: SpiderInstance, 
  pathMatch: 'full', 
  canActivate: [AuthorizeService]
}, { 
  path: 'spider/list', 
  component: SpiderList, 
  pathMatch: 'full', 
  canActivate: [AuthorizeService]
}, { 
  path: 'spider', 
  component: Spider, 
  pathMatch: 'full', 
  canActivate: [AuthorizeService] 
}, { 
  path: 'scan/instance', 
  component: ScanInstance, 
  pathMatch: 'full', 
  canActivate: [AuthorizeService] 
}, { 
  path: 'scan/list', 
  component: ScanList, 
  pathMatch: 'full', 
  canActivate: [AuthorizeService] 
}, { 
  path: 'scan', 
  component: Scan, 
  pathMatch: 'full', 
  canActivate: [AuthorizeService] 
}]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
