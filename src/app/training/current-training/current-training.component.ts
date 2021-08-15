import { StopTrainingComponent } from './stop-training.component';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {

  @Output() trainingExit = new EventEmitter<void>();
  progress: number = 0;
  timer;
  toggleInterval: boolean = false;


  constructor(private dialog: MatDialog) { }
  ngOnInit(): void {
    this.startOrResumeTimer();

    // ------------------------------------------
    // || trying to toggle the inceasing count ||
    // this.stopInterval = setInterval( () => {
    //   this.progress = this.progress + 10;
    // }, 1000)
    // ------------------------------------------
  }

  startOrResumeTimer() {
    this.timer = setInterval( () => {
      this.progress = this.progress + 20;
      if ( this.progress >= 100 ) clearInterval(this.timer);
    }, 1000);
  }

  onStop() {
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopTrainingComponent, { data: { progress: this.progress }});
    dialogRef.afterClosed().subscribe( result => {
      if (result) this.trainingExit.emit();
      else this.startOrResumeTimer();
    } );
    // ------------------------------------------------------------------
    // || trying to toggle the inceasing count ||
    // this.toggleInterval = !this.toggleInterval;
    // if( this.toggleInterval ) clearInterval(this.stopInterval);
    // else {
    //   this.stopInterval = setInterval( () => {
    //     if( this.progress <= 90 ) this.progress = this.progress + 10;
    //   }, 1000)
    // }
    // ------------------------------------------------------------------
  }
  
}
