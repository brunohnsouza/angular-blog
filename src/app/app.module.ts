import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LucideAngularModule, Linkedin, Github, Globe, MoveLeft, Copy, CopyCheck, ChevronsRight, ChevronsLeft, ChevronRight, ChevronLeft } from 'lucide-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { BigCardComponent } from './pages/home/components/big-card/big-card.component';
import { SmallCardComponent } from './pages/home/components/small-card/small-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';
import { PostContentComponent } from './pages/post/components/post-content/post-content.component';
import { PaginationButtonComponent } from './pages/home/components/pagination-buttons/pagination-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    BigCardComponent,
    SmallCardComponent,
    FooterComponent,
    HomeComponent,
    PostComponent,
    PostContentComponent,
    PaginationButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LucideAngularModule.pick({ Linkedin, Github, Globe, MoveLeft, Copy, CopyCheck, ChevronsRight, ChevronsLeft, ChevronRight, ChevronLeft }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
