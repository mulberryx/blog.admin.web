import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router'
import { UserService } from './user.service'

@Injectable()
export class AuthService implements CanActivate {

  constructor(public router: Router, private UserService: userService) {}

    canActivate(): boolean {
        if (!this.userService.isLogin()) {
            this.router.navigate(['login'])
            return false
        }

        return true
    }
}
