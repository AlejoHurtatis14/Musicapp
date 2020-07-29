import { Component, OnInit, OnDestroy, HostListener } from "@angular/core";
import { environment } from 'src/environments/environment';
import { RxFormGroup, RxFormBuilder } from '@rxweb/reactive-form-validators';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: "app-loginpage",
  templateUrl: "loginpage.component.html",
  styleUrls: ["loginpage.component.scss"]
})
export class LoginpageComponent implements OnInit, OnDestroy {

  formLogin: RxFormGroup;

  constructor(
    private formBuilder: RxFormBuilder,
    private loginService: LoginService
  ) { }

  @HostListener("document:mousemove", ["$event"])

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("register-page");
    this.configForm();
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("register-page");
  }

  configForm() {
    this.formLogin = <RxFormGroup>this.formBuilder.formGroup(this.loginService);
  }

  executeSignIn(type?) {
    const url = environment.musixMatch + 'track.search?q_artist=justin bieber&page_size=3&page=1&s_track_rating=desc&apikey=24cfbf9043e212897e8f2927daecb7f0';
    const google = environment.apiGoogle + 'oauth?client_id=719003813794-s9932lepg5rl10q1t3ouevb5doiaublb.apps.googleusercontent.com&redirect_uri=http://localhost:4200&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email';
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Access-Control-Origin': '*',
    //     'Access-Control-Allow-Origin': 'http://127.0.0.1:4200/',
    //     'Accept': 'text/plain',
    //   })
    // };
    // track.search?q_artist=justin bieber&page_size=3&page=1&s_track_rating=desc&apikey=24cfbf9043e212897e8f2927daecb7f0
    // this.http.get(url).subscribe(respuesta => {
    //   console.log("respuesta ", respuesta);
    // }, error => {
    //   console.log("Error ", error);
    // });
    this.loginService.signIn(this.formLogin.value, type).then(resp => {
      console.log("Respuesta ", resp);
    }, error => {
      console.log("Error ", error);
    });
  }

  executeLogin() {
    if (this.formLogin.valid) {
      this.loginService.signIn(this.formLogin.value).then(resp => {
        console.log("Respuesta ", resp);
      }, error => {
        console.log("Error ", error);
      });
    } else {
      this.formLogin.markAsTouched();
    }
  }

}
