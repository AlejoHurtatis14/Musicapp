import { Component, OnInit, OnDestroy, HostListener } from "@angular/core";
import { environment } from 'src/environments/environment';

@Component({
  selector: "app-registerpage",
  templateUrl: "registerpage.component.html"
})
export class RegisterpageComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  focus;
  focus1;
  focus2;
  constructor() { }
  @HostListener("document:mousemove", ["$event"])
  onMouseMove(e) {
    var squares1 = document.getElementById("square1");
    var squares2 = document.getElementById("square2");
    var squares3 = document.getElementById("square3");
    var squares4 = document.getElementById("square4");
    var squares5 = document.getElementById("square5");
    var squares6 = document.getElementById("square6");
    var squares7 = document.getElementById("square7");
    var squares8 = document.getElementById("square8");

    var posX = e.clientX - window.innerWidth / 2;
    var posY = e.clientY - window.innerWidth / 6;

    squares1.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares2.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares3.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares4.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares5.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares6.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares7.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.02 +
      "deg) rotateX(" +
      posY * -0.02 +
      "deg)";
    squares8.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.02 +
      "deg) rotateX(" +
      posY * -0.02 +
      "deg)";
  }

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("register-page");

    this.onMouseMove(event);
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
