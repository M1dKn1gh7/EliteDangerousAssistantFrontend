import { Component, OnInit } from '@angular/core';
import { CurrentSystemService } from "../../services/current-system-service";

@Component({
  selector: 'app-current-system',
  templateUrl: './current-system.component.html',
  styleUrls: ['./current-system.component.scss']
})
export class CurrentSystemComponent implements OnInit {


  currentStarImageUrl: any;
  currentSystem: any;

  constructor(private currentSystemService: CurrentSystemService) {
  }

  ngOnInit() {
    this.currentSystem = this.currentSystemService.getCurrentSystem()
  }

}
