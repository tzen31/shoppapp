import { Component } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { sliderData } from 'src/app/api/api-slider';
import { Slide } from 'src/app/models/slide';

@Component({
  selector: 'app-home-slider',
  standalone: false,
  templateUrl: './home-slider.component.html',
  styleUrl: './home-slider.component.css'
})
export class HomeSliderComponent {
slider: Slide[] = sliderData;
currentSlide: Slide = this.slider[0];
currentIndex: number = 0;
indexObs: Observable<number> = interval(5000);
indexOnsSub: Subscription | undefined;

ngOnInit() {
  this.indexOnsSub = this.indexObs.subscribe({
    next: (value: number) =>{
      this.handleChangeImage(1);
    }
  });
}
ngOnDestroy() {
  this.indexOnsSub?.unsubscribe();
}

handleChangeImage(index: number) {
    if (index === -1) {
      //previous
      const newIndex = this.currentIndex - 1;
      if (newIndex >= 0)  {
        this.currentIndex = newIndex;
      }
      else {
        //error
        this.currentIndex = this.slider.length - 1;
      }
    }
    else {
      //next
      const newIndex = this.currentIndex + 1;

      if (newIndex > this.slider.length -1) {
        //error
        this.currentIndex = 0;
      }
      else {
        //ok
        this.currentIndex = newIndex;
      }
    }
  }

}
