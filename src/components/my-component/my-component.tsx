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
  addPerson() {
    this.numberPerson += 1;

  }
  disPerson() {
    this.numberPerson -= 1;
    if (this.numberPerson < 0) {
      this.numberPerson = 0;
    }
  }
  resetPerson() {
    this.numberPerson = 0;
  }
  render() {
    return [
      <div class="text-position text-color">{this.numberPerson}</div>,
      <div class="actions-container">
        <button onClick={() => this.addPerson()}>เพิ่มจำนวนคน</button>
        <button onClick={() => this.disPerson()} disabled={this.numberPerson === 0}>ลดจำนวนคน</button>
        <button onClick={() => this.resetPerson()} disabled={this.numberPerson === 0}>รีเซ็ทจำนวนคน</button>
      </div>
    ]
  }
}
