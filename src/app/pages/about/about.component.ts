import { Component } from '@angular/core';
import { HeroComponent } from '../../shared/hero/hero.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  whyUs = [
    { icon: 'fas fa-star',          title: 'Award-Winning Team',     desc: 'Recognised by industry leaders for excellence in event design and execution.' },
    { icon: 'fas fa-heart',         title: 'Personalised Touch',      desc: 'Every event is uniquely crafted to reflect your personality, style, and vision.' },
    { icon: 'fas fa-clock',         title: 'Always On Time',          desc: 'We pride ourselves on punctuality and delivering results ahead of schedule.' },
    { icon: 'fas fa-tags',          title: 'Transparent Pricing',     desc: 'No hidden costs. Clear, upfront pricing tailored to your budget and needs.' },
    { icon: 'fas fa-handshake',     title: 'Trusted Vendors',         desc: 'Our curated network ensures premium quality in every floral, catering, and tech service.' },
    { icon: 'fas fa-shield-alt',    title: 'Stress-Free Planning',    desc: 'We handle every detail so you can relax, celebrate, and enjoy every moment.' },
  ];

  team = [
    { name: 'Poorna Chandra Rao',   role: 'Founder & Lead Planner',       initials: 'PCR', color: '#c8a96e' },
    { name: 'Sourabh VKV',   role: 'Creative Director',             initials: 'VKV', color: '#8B2252' },
    { name: 'Anil DSS',   role: 'Decor & Floral Specialist',     initials: 'DSS', color: '#5a7dbf' },
  ];
}
