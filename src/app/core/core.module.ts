import { NgModule } from "@angular/core";
import {HttpClientModule} from "@angular/common/http"

import { DataService } from "./data.service";
import { SorterService } from "./sorter.service";

//import in AppModule as imports
@NgModule({
    providers: [ DataService, SorterService ],
    imports: [  ]
})

export class CoreModule{

}