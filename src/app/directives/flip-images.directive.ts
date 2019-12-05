import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appFlipImages]'
})
export class FlipImagesDirective {
  @HostBinding('src')
  imageSource;
  @Input() likeBoolean;
  constructor() { }
  ngOnChanges() {
    this.imageSource = './assets/images/'+this.getLikeImages(this.likeBoolean);
  }
  getLikeImages(likeBoolean){
    if(likeBoolean)
      return "dislike.jpg";
      else
        return "like.png";

  }

}
