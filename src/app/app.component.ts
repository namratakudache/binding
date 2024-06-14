import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
    // `<h1>Basic Style Binding</h1>
    //   <p [style.color]="textColor">This text will change color dynamically.</p>
    //   <button (click)="toggleColor()">Toggle Color</button> `,
    `<h1>Multiple Style Binding</h1>
      <p [ngStyle]="getStyles()">
        This text will have multiple dynamic styles.
      </p>
      <button (click)="toggleStyles()">Toggle Styles</button>`,
  styles: [
    `
      button {
        margin-top: 20px;
      }
    `,
  ],
})
export class AppComponent {
  // title = 'Binding';
  // textColor = 'blue';
  // toggleColor() {
  //   this.textColor = this.textColor === 'blue' ? 'red' : 'blue';

  isStyled = false;
  getStyles() {
    return {
      color: this.isStyled ? 'green' : 'red',
      fontsize: this.isStyled ? '20px' : '10px',
      fontWeight: this.isStyled ? 'bold' : 'italic',
    };
  }
  toggleStyles() {
    this.isStyled = !this.isStyled;
  }
}
