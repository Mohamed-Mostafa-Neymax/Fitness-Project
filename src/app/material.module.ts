import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule  } from "@angular/material/core";
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    imports: [],
    exports: [
                MatButtonModule, 
                MatFormFieldModule, 
                MatInputModule, 
                MatDatepickerModule, 
                MatNativeDateModule,
                MatIconModule,
                MatCheckboxModule,
                MatSidenavModule,
                MatToolbarModule
    ]
})
export class MaterialModule { }