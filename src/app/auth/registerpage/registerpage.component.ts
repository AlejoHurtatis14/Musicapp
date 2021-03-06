import { Component, OnInit, OnDestroy, HostListener } from "@angular/core";
import { environment } from 'src/environments/environment';
import { RxFormGroup, RxFormBuilder } from '@rxweb/reactive-form-validators';
import { RegisterService } from 'src/app/shared/services/register.service';
import { HttpClient } from '@angular/common/http';
import { Perform } from 'src/app/shared/Functions/functions-generals';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: "app-registerpage",
  templateUrl: "registerpage.component.html",
  styleUrls: ["registerpage.component.scss"],
})
export class RegisterpageComponent implements OnInit, OnDestroy {

  constructor(
    private formBuilder: RxFormBuilder,
    private http: HttpClient,
    private registerService: RegisterService,
    private notificationsService: NotificationsService
  ) { }

  formRegister: RxFormGroup;
  isCollapsed = true;
  focus;
  focus1;
  focus2;

  @HostListener("document:mousemove", ["$event"])

  ngOnInit() {
    this.configFormRegister();
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("register-page");
    this.onMouseMove(body);
  }

  configFormRegister() {
    this.formRegister = <RxFormGroup>this.formBuilder.formGroup(this.registerService);
  }

  onMouseMove(e) {
    var squares1 = document.getElementById("square1");
    var squares2 = document.getElementById("square2");
    var squares8 = document.getElementById("square8");

    var posX = e.clientX - window.innerWidth / 2;
    var posY = e.clientY - window.innerWidth / 6;

    squares1.style.transform = "perspective(500px) rotateY(" + posX * 0.05 + "deg) rotateX(" + posY * -0.05 + "deg)";
    squares2.style.transform = "perspective(500px) rotateY(" + posX * 0.05 + "deg) rotateX(" + posY * -0.05 + "deg)";
    squares8.style.transform = "perspective(500px) rotateY(" + posX * 0.02 + "deg) rotateX(" + posY * -0.02 + "deg)";
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("register-page");
  }

  saveRegister() {
    console.log("Entra");
    // const options = {
    //   timeOut: 55000,
    //   showProgressBar: true,
    //   pauseOnHover: true,
    //   clickToClose: true,
    //   animate: 'fromRight'
    // }
    // this.notificationsService.create(title, content, type, options);
    // this.notificationsService.success('No fue posible registrarse.', 'mensaje de error', 'error', options);
    Perform.execute().createNotification('hola ', 'hola 2');
    console.log("Se ejecutoooooo");
    if (this.formRegister.valid) {
      this.registerService.signUp().then(respuesta => {
        console.log("formulario 2 ", respuesta);
        // if (respuesta.credential) {
        //   const token = respuesta.credential.accessToken;
        // }
      }, error => {
        console.log("Error ", error);
      });
    } else {
      this.formRegister.markAsTouched();
      // this.formRegister.markAsTouched();
      // const url = environment.musixMatch + 'track.search?q_artist=justin bieber&page_size=3&page=1&s_track_rating=desc&apikey=24cfbf9043e212897e8f2927daecb7f0';
      // const google = environment.apiGoogle + 'oauth?client_id=719003813794-s9932lepg5rl10q1t3ouevb5doiaublb.apps.googleusercontent.com&redirect_uri=http://localhost:4200&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email';
      // // const httpOptions = {
      // //   headers: new HttpHeaders({
      // //     'Access-Control-Origin': '*',
      // //     'Access-Control-Allow-Origin': 'http://127.0.0.1:4200/',
      // //     'Accept': 'text/plain',
      // //   })
      // // };
      // // track.search?q_artist=justin bieber&page_size=3&page=1&s_track_rating=desc&apikey=24cfbf9043e212897e8f2927daecb7f0
      // this.http.get(url).subscribe(respuesta => {
      //   console.log("respuesta ", respuesta);
      // }, error => {
      //   console.log("Error ", error);
      // });
      // // this.loginService.loginUser(type);
    }
  }

  executeRegister(type) {
    this.registerService.signUp(type).then(respuesta => {
      console.log("formulario ", respuesta);
    }, error => {
      console.log("Error ", error);
    });
  }

}
