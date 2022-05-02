import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './cmps/app-root/app.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { InputComponent } from './cmps/input/input.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { NaturalTypePipe } from './pipes/natural-type.pipe';
import { FormsModule } from '@angular/forms';
import { StatsPageComponent } from './pages/stats-page/stats-page.component';
import { BarChartComponent } from './cmps/bar-chart/bar-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { SideNavComponent } from './cmps/side-nav/side-nav.component';
import { SignupComponent } from './pages/signup/signup.component';
import { TransferFundsComponent } from './cmps/transfer-funds/transfer-funds.component';
import { UserMovesComponent } from './cmps/user-moves/user-moves.component';
import { UserMoveComponent } from './cmps/user-move/user-move.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFilterComponent,
    ContactListComponent,
    ContactPreviewComponent,
    InputComponent,
    ContactDetailsPageComponent,
    ContactEditPageComponent,
    ContactPageComponent,
    HomePageComponent,
    AppHeaderComponent,
    NaturalTypePipe,
    StatsPageComponent,
    BarChartComponent,
    SideNavComponent,
    SignupComponent,
    TransferFundsComponent,
    UserMovesComponent,
    UserMoveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
