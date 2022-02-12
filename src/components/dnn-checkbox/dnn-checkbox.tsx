import { Component, Element, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'dnn-checkbox',
  styleUrl: 'dnn-checkbox.scss',
  shadow: true,
})
export class DnnCheckbox {
  @Element() el: HTMLDnnCheckboxElement;

  /** Defines if the checkbox is checked (true) or unchecked (false) or in an intermediate state (undefined) */
  @Prop({mutable: true}) checked: boolean | undefined = false;

  /** Defines if clicking the checkbox will go through the intermediate state between checked and unchecked (tri-state) */
  @Prop() useIntermediate: boolean = false;

  /** The value for this checkbox (not to be confused with its checked state). */
  @Prop() value: string;

  /** Fires up when the checkbox checked property changes. */
  @Event() checkedchange: EventEmitter<boolean | undefined>;
  
  private button: HTMLButtonElement;

  private changeState(): void {
    if (!this.useIntermediate){
      this.checked = !this.checked;
      this.emitEvents();
      return;
    }
    if (this.checked === true){
      this.checked = false;
      this.button.classList.remove("undefined");
      this.emitEvents();
      return;
    }
    if (this.checked === undefined){
      this.checked = true;
      this.button.classList.remove("undefined");
      this.emitEvents();
      return;
    }
    if (this.checked === false){
      this.checked = undefined;
      this.button.classList.add("undefined");
      this.emitEvents();
      return;
    }
  }

  private emitEvents() {
    this.checkedchange.emit(this.checked);
  }

  render() {
    return (
      <Host>
        <button class="icon" onClick={() => this.changeState()} ref={el => this.button = el}>
          {this.checked === false &&
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>
          }
          {this.checked === true &&
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
          }
          {this.checked === undefined &&
            <svg class="undefined" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M17,13H7v-2h10V13z"/></g></g></g></svg>
          }
        </button>
        <label htmlFor={this.el.id} onClick={() => this.changeState()}><slot></slot></label>
      </Host>
    );
  }
}