import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() backgroundImage = 'assets/images/hero-wedding.png';
  @Input() ctaText = '';
  @Input() ctaLink = '/contact';
  @Input() secondaryCtaText = '';
  @Input() secondaryCtaLink = '/portfolio';
  @Input() overlay = 0.55;
  @Input() height = '100vh';
  @Input() centered = true;
}
