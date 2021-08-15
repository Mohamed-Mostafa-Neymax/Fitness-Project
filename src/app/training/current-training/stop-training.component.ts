import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector: 'app-stop-training',
    template: `
        <h1 mat-dialog-title>Are you sure?</h1>
        <mat-dialog-content>You already got {{ passedDate.progress }}%</mat-dialog-content>
        <mat-dialog-actions>
            <button mat-button [mat-dialog-close]="true">Yes</button>
            <button mat-button [mat-dialog-close]="false">No</button>
        </mat-dialog-actions>
    `
})

export class StopTrainingComponent implements OnInit{

    constructor( @Inject(MAT_DIALOG_DATA) public passedDate: {progress: number}) {}
    ngOnInit() {
        console.log(this.passedDate);
        
    }
}