import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroescription(): string {
    return `${this.name} - ${this.age}`
  }

  changeHero1(): void {
    //TODO
    //throw 'Metodo no implementado'
  }
  changeHero(): void {
    this.name = "Spiderman";
  }

  changeAge(): void {
    this.age = 30;
  }

  reset(): void {
    this.name = 'ironman';
    this.age = 45;

    // document.querySelectorAll('h1')!.forEach(element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>'
    // });
  }
}
