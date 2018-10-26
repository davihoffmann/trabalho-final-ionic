import { SendButtonComponent } from './send-button/send-button.component';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [
        SendButtonComponent
    ],
    exports: [
        SendButtonComponent
    ],
    imports: [
        IonicModule
    ]
})
export class ComponentsModule {

}
