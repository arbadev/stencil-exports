import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'hermano-feo',
  styleUrl: 'feo.css',
  shadow: true
})
export class Feo {

  @Prop() text: string;


  render() {
    return (
      <Host>
        <slot></slot>
        <button class="my-feo">Hello {this.text}</button>
        <button class="my-feo">what? {this.text}</button>
        <button class="my-feo">bye bye {this.text}</button>
      </Host>
    );
  }

}
