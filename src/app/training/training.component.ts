import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { TrainingService } from './training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  constructor( private trainingService: TrainingService) { }
  ngOnInit(): void {
    this.exerciseSubscription = this.trainingService.exerciseChanged.subscribe( ( exercise =>{
      if( exercise ) this.ongoingTraining = true;
      else this.ongoingTraining = false;
    }));
  }

  ongoingTraining: boolean = false;
  exerciseSubscription: Subscription;
}
