import { Component, Input, Output, EventEmitter, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LucideAngularModule, WavesLadder, Bed, Bath, MapPin, Heart } from "lucide-angular";
import { Home } from "../../models/home.type";
import { HomeService } from "../../services/home.service";
import { RouterLink } from "@angular/router";



/**
 * Component for displaying a single home card
 * This is a presentational component that receives a Home object via @Input
 */
@Component({
  selector: "app-home-card",
  standalone: true,
  imports: [CommonModule, LucideAngularModule, RouterLink],
  templateUrl: "./home-card.component.html",
  styleUrls: ["./home-card.component.css"],
})
export class HomeCardComponent {
  @Input() home!: Home;
  @Output() toggleFavorite = new EventEmitter<number>();

  homeService = inject(HomeService);

  readonly WavesLadder = WavesLadder;
  readonly Bed = Bed;
  readonly Bath = Bath;
  readonly MapPin = MapPin;
  readonly Heart = Heart;

  /**
   * Emit the home id when favorite is toggled
   */
  onFavoriteClick() {
    this.homeService.toggleFavorite(this.home);
  }
}
