import { Component, OnInit, OnDestroy, HostListener } from "@angular/core";
import { environment } from 'src/environments/environment';

@Component({
  selector: "app-loginpage",
  templateUrl: "loginpage.component.html"
})
export class LoginpageComponent implements OnInit, OnDestroy {
  
  isCollapsed = true;
  
  constructor() { }
  @HostListener("document:mousemove", ["$event"])

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("register-page");
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("register-page");
  }

  executeLogin(type) {
    const url = environment.complementoMusixMatch + 'track.search?q_artist=justin bieber&page_size=3&page=1&s_track_rating=desc&apikey=24cfbf9043e212897e8f2927daecb7f0';
    const google = environment.complementoApiGoogle + 'oauth?client_id=719003813794-s9932lepg5rl10q1t3ouevb5doiaublb.apps.googleusercontent.com&redirect_uri=http://localhost:4200&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email';
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
    // this.loginService.loginUser(type);
  }

}
