import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule  } from "@angular/material/core";
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
    imports: [],
    exports: [
                MatButtonModule, 
                MatFormFieldModule, 
                MatInputModule, 
                MatDatepickerModule, 
                MatNativeDateModule,
                MatIconModule,
                MatCheckboxModule
    ]
})
export class MaterialModule { }
