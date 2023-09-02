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
  @ViewChild('nameInput', { read: ElementRef, static : true }) nameInput!: ElementRef;
  @ViewChild('lastNameInput', { read: ElementRef, static : true }) lastNameInput!: ElementRef;
  apellido : any ;
  nombreN : any ;

  constructor(
    private activeroute: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
    private animationCtrl: AnimationController
  ) {
    this.nombreN = Animation.prototype as any;
    this.apellido = Animation.prototype as any;
    this.nameInput = ElementRef.prototype as any;
    this.lastNameInput = ElementRef.prototype as any;

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
        { offset: 0.5, transform: 'translateX(150px)', opacity: 3 },
        { offset: 1, transform: 'translateX(0)', opacity: 0.2 },
      ]);

    animation.play();
    
    this.nombreN = this.animationCtrl
    .create()
    .addElement(this.nameInput.nativeElement)
    .duration(1000) // Duración de la vibración en milisegundos (2 segundos)
    //.iterations(Infinity) // Repetir infinitamente
    .direction('alternate') // Invertir la dirección para crear el efecto de vibración
    .keyframes([
      { offset: 0.1, transform: 'translateX(-5px)' }, // Mover hacia la izquierda
      { offset: 0.2, transform: 'translateX(5px)' }, // Mover hacia la derecha
      { offset: 0.3, transform: 'translateX(-5px)' },
      { offset: 0.4, transform: 'translateX(5px)' },
    
      { offset: 1, transform: 'translateX(0)' }, // Volver a la posición original
    ]);

    this.apellido = this.animationCtrl
      .create()
      .addElement(this.lastNameInput.nativeElement)
      .duration(1000) // Duración de la vibración en milisegundos (2 segundos)
    //.iterations(Infinity) // Repetir infinitamente
    .direction('alternate') // Invertir la dirección para crear el efecto de vibración
    .keyframes([
      { offset: 0.1, transform: 'translateX(-5px)' }, // Mover hacia la izquierda
      { offset: 0.2, transform: 'translateX(5px)' }, // Mover hacia la derecha
      { offset: 0.3, transform: 'translateX(-5px)' },
      { offset: 0.4, transform: 'translateX(5px)' },
    
      { offset: 1, transform: 'translateX(0)' }, // Volver a la posición original
    ]);
  }

//---------------------------------------------------------------------------------
  nullfield2() {
    // Aplicar la anim;ación al campo de nombre
    this.nombreN.play();
    this.apellido.play();
    

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