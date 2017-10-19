import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IotModulesComponent } from './iot-modules/iot-modules.component';
import { FlashLedComponent } from './iot-modules/flash-led/flash-led.component';
import { BuzzerComponent } from './iot-modules/buzzer/buzzer.component';
import { LightSensorComponent } from './iot-modules/light-sensor/light-sensor.component';
import { TempComponent } from './iot-modules/temp/temp.component';
import { RotaryComponent } from './iot-modules/rotary/rotary.component';
import { TouchComponent } from './iot-modules/touch/touch.component';

import { MessageService } from './message.service';

import { MqttMessage, MqttModule, MqttService} from 'ngx-mqtt';

export const MQTT_SERVICE_OPTIONS = {
  hostname: '52.173.72.219',
  port: 8083,
  path: '/mqtt'
};
 
export function mqttServiceFactory() {
  return new MqttService(MQTT_SERVICE_OPTIONS);
}

@NgModule({
  declarations: [
    AppComponent,
    IotModulesComponent,
    FlashLedComponent,
    BuzzerComponent,
    LightSensorComponent,
    TempComponent,
    RotaryComponent,
    TouchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MqttModule.forRoot({
      provide: MqttService,
      useFactory: mqttServiceFactory
    })
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
