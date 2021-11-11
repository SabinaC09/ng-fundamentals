import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { userRoutes } from "./user-routes";
import { ProfileComponent } from './user-profile.component'

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations: [

    ],
    providers: [

    ]
})
export class UserModule {

}