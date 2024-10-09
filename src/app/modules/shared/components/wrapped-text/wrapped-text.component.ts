import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wrapped-text',
  templateUrl: './wrapped-text.component.html',
  styleUrls: ['./wrapped-text.component.scss'],
})
export class WrappedTextComponent {
  @Input() text: string;
  @Input() maxChars: number = 600;
  public isOpened: boolean = false;

  get displayedText() {
    return this.isOpened ? this.text : this.text.slice(0, this.maxChars);
  }

  public open() {
    this.isOpened = true;
  }
}
