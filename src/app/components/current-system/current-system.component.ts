import { Component, OnInit } from '@angular/core';
import { CurrentSystemService } from "../../services/current-system-service";

@Component({
  selector: 'app-current-system',
  templateUrl: './current-system.component.html',
  styleUrls: ['./current-system.component.scss']
})
export class CurrentSystemComponent implements OnInit {

  currentSystem = {name: 'Maia', spectralId: 2, spectralClass: 'B Blue-White'};

  constructor(private currentSystemService: CurrentSystemService) {
    console.log(currentSystemService.getStarImage(this.currentSystem.spectralId));
  }

  ngOnInit() {
  }

}
