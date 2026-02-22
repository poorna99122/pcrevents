import { Component } from '@angular/core';
import { HeroComponent } from '../../shared/hero/hero.component';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  testimonials = [
    { name: 'Priya & Arjun Sharma',     role: 'Wedding — Mumbai',           stars: 5, text: 'PCR Events made our wedding day absolutely magical. Every single detail was handled with such grace, warmth, and professionalism. We received so many compliments from our guests!' },
    { name: 'Neha Kapoor',              role: 'Corporate Event — Pune',      stars: 5, text: 'Our annual awards night was a grand success thanks to PCR Events. Flawless execution from start to finish. The décor, the timeline, the coordination — all outstanding.' },
    { name: 'Rohit & Meera Verma',      role: 'Engagement — Delhi',         stars: 5, text: 'The engagement setup was beyond our wildest imagination. Every flower, every light was placed with love. Our families were speechless and guests are still talking about it!' },
    { name: 'Sunita Pillai',            role: 'Birthday Party — Bangalore',  stars: 5, text: 'My daughter\'s first birthday party was a fairy tale. The decorations were stunning, the team was so attentive, and everything ran perfectly on schedule. 10/10!' },
    { name: 'Vikram & Deepa Iyer',      role: 'Wedding — Chennai',           stars: 5, text: 'Working with PCR Events was the best decision we made. They understood our traditional yet modern vision perfectly and delivered a wedding that exceeded expectations.' },
    { name: 'Riya Joshi',               role: 'Engagement — Hyderabad',      stars: 5, text: 'I was completely blown away by the surprise engagement setup they planned for me. Romantic, elegant, and personal — exactly what I dreamed of. Thank you so much!' },
    { name: 'Nikhil Patel',             role: 'Corporate Event — Ahmedabad', stars: 5, text: 'Our product launch event was executed with brilliant precision. The stage setup, the branding, the guest management — everything was seamless. A truly professional team.' },
    { name: 'Anushka & Rajeev Menon',   role: 'Wedding — Kochi',             stars: 5, text: 'We planned a destination wedding and PCR Events handled every vendor, every permission, every surprise with complete ease. We felt completely taken care of!' },
    { name: 'Divya Krishnan',           role: 'Birthday Party — Coimbatore', stars: 5, text: 'My 40th birthday surprise was a dream come true. The venue decoration, the cake, the musical setup — all pristine. PCR Events truly knows how to create unforgettable memories.' },
    { name: 'Sanjay & Pooja Gupta',     role: 'Wedding — Jaipur',            stars: 5, text: 'An absolutely royal Rajasthani-themed wedding! They sourced the most beautiful mandap, coordinated a huge guest list effortlessly, and were available 24/7 for us.' },
    { name: 'Leena Nair',               role: 'Decoration — Trivandrum',     stars: 5, text: 'I hired them just for decoration at our family function and was blown away. Fresh florals, elegant draping, perfect lighting — the hall looked like a page out of a magazine.' },
    { name: 'Aditya Kulkarni',          role: 'Corporate Gala — Nashik',     stars: 5, text: 'Year after year we trust PCR Events for our corporate gala. They never disappoint. Innovative themes, impeccable service, and always within budget. Truly the best!' },
  ];

  getStars(count: number) {
    return Array(count).fill(0);
  }
}
