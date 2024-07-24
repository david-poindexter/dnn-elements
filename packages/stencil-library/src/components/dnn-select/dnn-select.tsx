import { Component, Element, Host, Prop, h, State, Event, EventEmitter, AttachInternals, Method } from '@stencil/core';
import { generateRandomId } from '../../utilities/stringUtilities';

@Component({
  tag: 'dnn-select',
  styleUrl: 'dnn-select.scss',
  shadow: true,
  formAssociated: true,
})
export class DnnSelect {

  /** The label for this input. */
  @Prop() label: string;

  /** The name for this input, if used in forms. */
  @Prop() name: string;

  /** Defines whether the field requires having a value. */
  @Prop() required: boolean;

  /** Defines the help label displayed under the field. */
  @Prop() helpText: string;
  
  /** Defines whether the field is disabled. */
  @Prop() disabled: boolean;
  
  /** @deprecated This control has its own validatin reporting, will be removed in v0.25.0 */
  @Prop() disableValidityReporting: boolean;
  
  /** The value of the input. */
  @Prop({mutable: true, reflect:true}) value: string;
  
  @Element() el: HTMLDnnSelectElement;
  
  @State() focused: boolean = false;
  @State() valid = true;
  @State() customValidityMessage: string;

  /** Fires when the value has changed and the user exits the input. */
  @Event() valueChange: EventEmitter<string>;
  
  /** Reports the element validity.
   * @param valid - Whether the element is valid or not.
   * @param message - The message to show when the element is invalid, optional if valid.
  */
  @Method()
  async reportValidity(valid: boolean, message?: string) {
    return this.fieldset.setValidity(valid, message);
  }
  
  @AttachInternals() internals: ElementInternals;
  
  private slot: HTMLSlotElement;
  private select: HTMLSelectElement;
  private observer: MutationObserver;
  private labelId: string;
  private originalValue: string;
  private fieldset: HTMLDnnFieldsetElement;
  
  componentWillLoad() {
    this.originalValue = this.value;
    this.labelId = generateRandomId();
    this.observer = new MutationObserver((mutations) => {
      for (let mutation of mutations) {
        if (mutation.type === 'childList') {
          this.applySlottedItemsToSelect();
        }
      }
    });

    const config = { attributes: true, childList: true, subtree: true };
    this.observer.observe(this.el, config);
  }
  
  componentDidLoad() {
    this.applySlottedItemsToSelect();
    this.setFormValue();
  }

  // eslint-disable-next-line @stencil-community/own-methods-must-be-private
  formResetCallback() {
    this.internals.setValidity({});
    this.value = this.originalValue;
    this.internals.setFormValue("");
    this.select.selectedIndex = -1;
  }

  private applySlottedItemsToSelect () {
    const slottedItems = this.slot?.assignedElements();
    slottedItems?.forEach((item) => {
      if (item.nodeName === "OPTION") {
        const optionElement = item as HTMLOptionElement;
        this.select.appendChild(optionElement);
      }
    });
  }

  private setFormValue(){
    if (this.name != undefined){
      var data = new FormData();
      data.append(this.name, this.value);
      this.internals.setFormValue(data);
    }
  }

  private handleChange(value: string) {
    this.value = value;
    var valid = this.select.checkValidity();
    this.valid = valid;
    this.valueChange.emit(this.value);
    this.setFormValue();
    if (this.valid){
      this.internals.setValidity({});
      this.fieldset.setValidity(true);
    }
    else{
      this.internals.setValidity({customError: true}, this.select.validationMessage);
      this.fieldset.setValidity(false, this.select.validationMessage);
    }
  }

  private handleInvalid(): void {
    this.valid = false;
    if (this.customValidityMessage == undefined){
      this.customValidityMessage = this.select.validationMessage;
    }
  }

  render() {
    return (
      <Host
        tabIndex={this.focused ? -1 : 0}
        onFocus={() => this.select.focus()}
        onBlur={() => this.select.blur()}
      >
        <dnn-fieldset
          invalid={!this.valid}
          focused={this.focused}
          label={`${this.label ?? ""}${this.required ? " *" : ""}`}
          helpText={this.helpText}
          id={this.labelId}
          onClick={() => !this.focused && this.select.focus()}
          ref={el => this.fieldset = el}
        >
          <div class="inner-container">
            <select
              ref={el => this.select = el}
              onFocus={() => this.focused = true}
              onBlur={() => this.focused = false}
              onChange={e => this.handleChange((e.target as HTMLSelectElement).value)}
              onInvalid={() => this.handleInvalid()}
              required={this.required}
              disabled={this.disabled}
              aria-labelledby={this.labelId}
            >
              <slot ref={el => this.slot = (el as HTMLSlotElement)}></slot>
            </select>
            {!this.valid &&
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" class="error">
                <path d="M479.982-280q14.018 0 23.518-9.482 9.5-9.483 9.5-23.5 0-14.018-9.482-23.518-9.483-9.5-23.5-9.5-14.018 0-23.518 9.482-9.5 9.483-9.5 23.5 0 14.018 9.482 23.518 9.483 9.5 23.5 9.5ZM453-433h60v-253h-60v253Zm27.266 353q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80-397.681 80-480.5q0-82.819 31.5-155.659Q143-709 197.5-763t127.341-85.5Q397.681-880 480.5-880q82.819 0 155.659 31.5Q709-817 763-763t85.5 127Q880-563 880-480.266q0 82.734-31.5 155.5T763-197.684q-54 54.316-127 86Q563-80 480.266-80Zm.234-60Q622-140 721-239.5t99-241Q820-622 721.188-721 622.375-820 480-820q-141 0-240.5 98.812Q140-622.375 140-480q0 141 99.5 240.5t241 99.5Zm-.5-340Z"/>
              </svg>
            }
          </div>
        </dnn-fieldset>
      </Host>
    );
  }

}
