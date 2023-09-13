import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './pages/components/notfound/notfound.component';
import { ProductService } from './pages/service/product.service';
import { CountryService } from './pages/service/country.service';
import { CustomerService } from './pages/service/customer.service';
import { EventService } from './pages/service/event.service';
import { IconService } from './pages/service/icon.service';
import { NodeService } from './pages/service/node.service';
import { PhotoService } from './pages/service/photo.service';
import {OAuthModule} from "angular-oauth2-oidc";

@NgModule({
    declarations: [
        AppComponent, NotfoundComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        OAuthModule.forRoot()
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
