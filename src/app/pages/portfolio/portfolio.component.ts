import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { HeroComponent } from '../../shared/hero/hero.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  activeCategory = signal('All');

  categories = ['All', 'Weddings', 'Engagements', 'Birthdays', 'Corporate'];

  allItems = [
    { img: 'assets/images/hero-wedding.png',       category: 'Weddings',    title: 'Royal Garden Wedding',         desc: 'A breathtaking outdoor celebration' },
    { img: 'assets/images/service-engagement.png', category: 'Engagements', title: 'Sunset Engagement',             desc: 'Romantic garden proposal setup' },
    { img: 'assets/images/service-birthday.png',   category: 'Birthdays',   title: 'Golden Gala Birthday',          desc: 'Elegant 50th milestone celebration' },
    { img: 'assets/images/service-corporate.png',  category: 'Corporate',   title: 'Annual Awards Night',           desc: 'Grand corporate felicitation evening' },
    { img: 'assets/images/service-decoration.png', category: 'Weddings',    title: 'Floral Fantasy Wedding',        desc: 'Lush floral arch and mandap décor' },
    { img: 'assets/images/hero-wedding.png',       category: 'Engagements', title: 'Intimate Rooftop Proposal',     desc: 'Candlelit rooftop surprise moment' },
    { img: 'assets/images/service-birthday.png',   category: 'Birthdays',   title: 'Princess Theme Birthday',       desc: 'Magical first birthday party setup' },
    { img: 'assets/images/service-corporate.png',  category: 'Corporate',   title: 'Product Launch Event',          desc: 'Brand activation with live demo' },
    { img: 'assets/images/service-decoration.png', category: 'Weddings',    title: 'Pastel Dream Wedding',          desc: 'Soft pastel-themed reception décor' },
  ];

  get filteredItems() {
    const cat = this.activeCategory();
    return cat === 'All' ? this.allItems : this.allItems.filter(i => i.category === cat);
  }

  setCategory(cat: string) {
    this.activeCategory.set(cat);
  }
}
