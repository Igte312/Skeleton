import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data: any;
  bDate: string = '';
  name: string = '';
  last_name: string = '';
  EducLevel: string = '';
  static user: string = '';
  @ViewChild("title", {read: ElementRef, static: true}) title!: ElementRef;
  @ViewChild('nameInput', { static: false }) nameInput!: ElementRef;
  @ViewChild('lastNameInput', { static: false }) lastNameInput!: ElementRef;


  constructor(
    private activeroute: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
    private animationCtrl: AnimationController
  ) {
    this.activeroute.queryParams.subscribe((params) => {
      if (
        this.router.getCurrentNavigation()?.extras?.state
      ) {
        this.data = this.router.getCurrentNavigation()?.extras?.state?.['user'];
        console.log(this.data);
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

  ngAfterViewInit() {
    const animation = this.animationCtrl
      .create()
      .addElement(this.title.nativeElement)
      .duration(2500)
      .iterations(Infinity)
      .keyframes([
        { offset: 0, transform: 'translateX(0)', opacity: 0.2 },
        { offset: 0.5, transform: 'translateX(150px)', opacity: 2 },
        { offset: 1, transform: 'translateX(0)', opacity: 0.2 },
      ]);

    animation.play();
    
  }
//---------------------------------------------------------------------------------
  nullfield2() {
    // Aplicar la animación al campo de nombre
    const nameAnimation = this.animationCtrl
      .create()
      .addElement(this.nameInput.nativeElement)
      .duration(1000)
      .keyframes([
        { offset: 0, transform: 'translateX(0)' },
        { offset: 1, transform: 'translateX(50px)' },
      ]);
  
    // Aplicar la animación al campo de apellido
    const lastNameAnimation = this.animationCtrl
      .create()
      .addElement(this.lastNameInput.nativeElement)
      .duration(1000)
      .keyframes([
        { offset: 0, transform: 'translateX(0)' },
        { offset: 1, transform: 'translateX(50px)' },
      ]);
  
    // Reproducir ambas animaciones
    nameAnimation.play();
    lastNameAnimation.play();
  
    // Resto del código de limpiar
    this.name = '';
    this.last_name = '';
    this.EducLevel = '';
    this.bDate = '';
  }
  //---------------------------------------------------------------------------------

  async mostrarInformacion() {
    const alert = await this.alertController.create({
      header: 'Usuario',
      message: 'su nombre es '+`${this.name} ${this.last_name}`,
      buttons: ['Yes'],
    });

    await alert.present();
  }

  nullfield() {
    this.name = '';
    this.last_name = '';
    this.EducLevel = '';
    this.bDate = '';
  }
}