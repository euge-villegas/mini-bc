import { NgModule } from "@angular/core";

import { MatCardModule } from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
    imports: [
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatPaginatorModule
    ],
    exports: [
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatPaginatorModule
    ]
})
export class MaterialModule {

}