import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss'
})
export class SvgIconButtonComponent {
  @Input() svgIconTemplate!: TemplateRef<any>;
  @Input() text!: string;
  
}
