import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-card',
  templateUrl: './link-card.component.html',
  styleUrl: './link-card.component.scss'
})
export class LinkCardComponent {
  @Input() link?: string;
  @Input() imagePath?: string;
  @Input() summary: string = "";
  @Input() title!: string;
  
  ngOnInit() {
    
  }
}
