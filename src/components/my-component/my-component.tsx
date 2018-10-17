import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'person-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  @Prop() first: string;
  @Prop() middle: string;
  @Prop() last: string;
  @State() numberPerson: number = 0;
  format(): string {
    return (
      (this.first || '') +
      (this.middle ? ` ${this.middle}` : '') +
      (this.last ? ` ${this.last}` : '')
    );
  }
  addPerson(e) {
    console.log(e);
    this.numberPerson += 1;

  }
  disPerson(e) {
    console.log(e);
    this.numberPerson -= 1;
    if (this.numberPerson < 0) {
      this.numberPerson = 0;
    }

  }
  render() {
    return [
      <div class="text-position text-color">{this.numberPerson}</div>,
      <div class="actions-container">
        <button onClick={(event) => this.addPerson(event)}>เพิ่มจำนวนคน</button>
        <button onClick={(event) => this.disPerson(event)}>ลดจำนวนคน</button>
      </div>
    ]
  }
}
