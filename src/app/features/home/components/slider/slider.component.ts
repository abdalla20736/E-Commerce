import {
  afterNextRender,
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  signal,
} from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { ISlideData } from './models/slide-data.model';
import { LeftArrowIconComponent } from '../icons/left-arrow-icon/left-arrow-icon.component';
import { RightArrowIconComponent } from '../icons/right-arrow-icon/right-arrow-icon.component';
import { after } from 'node:test';

@Component({
  selector: 'app-slider',
  imports: [LeftArrowIconComponent, RightArrowIconComponent],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  host: { ngSkipHydration: 'true' },
})
export class SliderComponent implements OnInit {
  slides: ISlideData[] = [];
  currentIndex = signal(0);
  loaded = signal(false);

  @ViewChild('swiperContainer') swiperContainer!: ElementRef<SwiperContainer>;

  constructor() {
    afterNextRender(() => {
      this.loaded.set(true);
    });
  }

  nextSlide(): void {
    const swiper = this.swiperContainer?.nativeElement?.swiper;

    if (!swiper || !this.slides.length) {
      return;
    }
    if (swiper.slideNext()) {
      const nextIndex = (this.currentIndex() + 1) % this.slides.length;
      this.currentIndex.set(nextIndex);
    }
  }

  prevSlide(): void {
    const swiper = this.swiperContainer?.nativeElement?.swiper;

    if (!swiper || !this.slides.length) {
      return;
    }

    if (swiper.slidePrev()) {
      const prevIndex = (this.currentIndex() - 1 + this.slides.length) % this.slides.length;
      this.currentIndex.set(prevIndex);
    }
  }

  goToSlide(index: number): void {
    const swiper = this.swiperContainer?.nativeElement?.swiper;

    if (!swiper) {
      return;
    }

    swiper.slideTo(index);
    this.currentIndex.set(index);
  }

  ngOnInit(): void {
    this.slides = [
      {
        imageUrl: '/images/slider/home-slider.png',
        title: 'Fresh Products Delivered to your Door',
        description: 'Get 20% off your first order',
        firstButtonText: { text: 'Shop Now', action: '/products' },
        secondButtonText: { text: 'View Deals', action: '/deals' },
      },
      {
        imageUrl: '/images/slider/home-slider.png',
        title: 'Premium Quality Guaranteed',
        description: 'Fresh from farm to your table',
        firstButtonText: { text: 'Shop Now', action: '/products' },
        secondButtonText: { text: 'Learn More', action: '/about' },
      },
      {
        imageUrl: '/images/slider/home-slider.png',
        title: 'Fast & Free Delivery',
        description: 'Same day delivery available',
        firstButtonText: { text: 'Order Now', action: '/products' },
        secondButtonText: { text: 'Delivery Info', action: '/delivery' },
      },
    ];
  }
}
