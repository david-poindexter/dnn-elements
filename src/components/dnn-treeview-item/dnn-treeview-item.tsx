import { Component, Host, h, Prop, State, Element } from '@stencil/core';

@Component({
  tag: 'dnn-treeview-item',
  styleUrl: 'dnn-treeview-item.scss',
  shadow: true,
})
export class DnnTreeviewItem {
  
  private expander!: HTMLDivElement;

  @Element() el!: HTMLDnnTreeviewItemElement;
  
  /** Defines if the current node is expanded  */
  @Prop({mutable: true}) expanded: boolean = false;

  @State() hasChildren: boolean = false;
  
  private childrenElement!: HTMLDivElement;
  private collapsible!: HTMLDnnCollapsibleElement;

  componentDidLoad() {
    const children = this.childrenElement.children[0] as HTMLSlotElement;
    const count = children.assignedElements().length
    if (count > 0){
      this.hasChildren = true;
    }
    if (this.expanded){
      this.expander.classList.add("expanded");
      this.collapsible.expanded = false;
      setTimeout(() => {
        this.collapsible.expanded = true;
      }, 300);
    }
  }

  private toggleCollapse(): void {
    this.expanded = !this.expanded;
    if (this.expanded){
      this.expander.classList.add("expanded");
      return;
    }

    this.expander.classList.remove("expanded");
  }

  render() {
    return (
      <Host>
        <div class="expander" ref={el => this.expander = el}>
          {this.hasChildren &&
            <button
              onClick={() => this.toggleCollapse()}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M10 17l5-5-5-5v10z"/><path d="M0 24V0h24v24H0z" fill="none"/></svg>
            </button>
          }
        </div>
        <div class="item">
          <div class="item-slot">
            <slot></slot>
          </div>
          <dnn-collapsible ref={el => this.collapsible = el} expanded={this.expanded}>
            <div ref={el => this.childrenElement = el}>
              <slot name="children"></slot>
            </div>
          </dnn-collapsible>
          </div>
      </Host>
    );
  }
}

export interface ExpandedToggledEvent{
  state: "expanded" | "collapsed";
  height: number;
}