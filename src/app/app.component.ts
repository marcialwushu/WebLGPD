import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    
    {
      title: 'CAPITULO I',
      url: '/capitulo-i',
      icon: 'archive'
    },
    {
      title: 'CAPITULO II',
      url: '/capitulo-ii',
      icon: 'archive'
    },
    {
      title: 'CAPITULO III',
      url: '/capitulo-iii',
      icon: 'archive'
    },
    {
      title: 'CAPITULO IV',
      url: '/capitulo-iv',
      icon: 'archive'
    },
    {
      title: 'CAPITULO V',
      url: '/capitulo-v',
      icon: 'archive'
    },
    {
      title: 'CAPITULO VI',
      url: '/capitulo-vi',
      icon: 'archive'
    },
    {
      title: 'CAPITULO VII',
      url: '/capitulo-vii',
      icon: 'archive'
    },
    {
      title: 'CAPITULO VIII',
      url: '/capitulo-viii',
      icon: 'archive'
    },
    {
      title: 'CAPITULO IX',
      url: '/capitulo-ix',
      icon: 'archive'
    },
    {
      title: 'CAPITULO X',
      url: '/capitulo-x',
      icon: 'archive'
    }
  ];
  public labels = ['Anotações', 'Revisão'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
