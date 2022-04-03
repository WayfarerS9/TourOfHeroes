import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';


@Component({
  	selector: 'app-login',
  	templateUrl: './login.component.html',
  	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  	constructor(private loginService: LoginService, private router: Router) { }

  	ngOnInit(): void {
  	}

  	emailFormControl = new FormControl('', [Validators.required, Validators.email]);

	goToList() {
        return this.router.navigate(['heroes'])
    }

  	async getToken(name: string, email: string) {

		await this.loginService.getToken(name, email);
		this.goToList()
  	}
}
