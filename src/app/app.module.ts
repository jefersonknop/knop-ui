import { LinhaListComponent } from './views/transporte/linha/crud/linha-list/linha-list.component';

import { CurrencyMaskModule } from "ng2-currency-mask";

import { UsuarioService } from 'src/app/services/usuario-service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {InputMaskModule} from 'primeng/inputmask';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MenubarModule } from 'primeng/menubar';

import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button'; 
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { DropdownModule } from 'primeng/dropdown';
import {KeyFilterModule} from 'primeng/keyfilter';

import { SplitButtonModule } from 'primeng/splitbutton';
import { SidebarModule } from 'primeng/sidebar';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import {TabMenuModule} from 'primeng/tabmenu';
import {MegaMenuModule} from 'primeng/megamenu';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {CheckboxModule} from 'primeng/checkbox';







import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { routing } from 'src/app.routes';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TabViewModule } from 'primeng/tabview';

import { EstadoCrudComponent } from './views/estado/crud/estado-crud/estado-crud.component';
import { CidadeCrudComponent } from './views/cidade/crud/cidade-crud/cidade-crud.component';

import { ConfigService } from './services/config-service';
import { EstadoService } from './services/estado-service';
import { CidadeService } from './services/cidade-service';
import { EstadoListComponent } from './views/estado/estado-list/estado-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { InquilinoCrudComponent } from './views/inquilino/crud/inquilino-crud/inquilino-crud.component';
import { InquilinoService } from './services/inquilino-service';
import { InquilinoListComponent } from './views/inquilino/inquilino-list/inquilino-list.component';
import { CidadeListComponent } from './views/cidade/cidade-list/cidade-list.component';

import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ListboxModule} from 'primeng/listbox';
import { LoginComponent } from './components/login/login.component';
import { SharedService } from './services/shared.service';
import { AuthGuard } from './security/auth.guard';
import { AuthInterceptor } from './security/auth.interceptor';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransportePassageirosComponent } from './views/transporte/transporte-passageiros/transporte-passageiros.component';
import { BilhetePassagemComponent } from './views/transporte/transporte-passageiros/bilhete-passagem/bilhete-passagem.component';

import { LayoutComponent } from './components/layout/layout.component';
import {FieldsetModule} from 'primeng/fieldset';

import { LinhaService } from './services/linha-service';
import { LocalidadeService } from './services/localidade-service';
import { SecaoService } from './services/secao-service';
import { HomeComponent } from './components/home/home/home.component';
import { LinhaCrudComponent } from './views/transporte/linha/crud/linha-crud/linha-crud.component';
import { LocalidadeCrudComponent } from './views/transporte/localidade/crud/localidade-crud/localidade-crud.component';
import { LocalidadeListComponent } from './views/transporte/localidade/crud/localidade-list/localidade-list.component';

import { SecaoListComponent } from './views/transporte/secao/crud/secao-list/secao-list.component';
import { SecaoCrudComponent } from './views/transporte/secao/crud/secao-crud/secao-crud.component';
import { UnidadeMedidaCrudComponent } from './src/app/modulo-estoque/views/unidade-medida/unidade-medida-crud/unidade-medida-crud.component';








@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,  
    LayoutComponent,
    EstadoCrudComponent,
    CidadeCrudComponent,
    InquilinoCrudComponent,
    EstadoListComponent,
    MenuComponent, 
    InquilinoListComponent,
    CidadeListComponent,
    TransportePassageirosComponent,
    BilhetePassagemComponent,
    LoginComponent,
    LinhaCrudComponent,
    LocalidadeCrudComponent,
    LinhaListComponent,
    LocalidadeListComponent,
    SecaoCrudComponent,
    SecaoListComponent,
    UnidadeMedidaCrudComponent
    
 
   
  ],
  entryComponents: [
    EstadoListComponent,
    CidadeListComponent,
    LinhaListComponent,
    LocalidadeListComponent,
    SecaoListComponent
    

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule, 
    routing, 
    AngularFontAwesomeModule,
    AccordionModule,
    MenuModule,
    ButtonModule,
    PanelModule,
    InputTextModule,
    ToastModule,
    ToolbarModule,  
    TableModule,
    SplitButtonModule,
    SidebarModule,
    PanelMenuModule,
    DialogModule,
    CardModule,
    DropdownModule,
    DynamicDialogModule,
    MenubarModule,
    PanelMenuModule,
    TabViewModule,
    DropdownModule,
    PanelMenuModule,
    TabMenuModule,
    ScrollPanelModule,
    ListboxModule,
    MessagesModule,
    MessageModule,
    FieldsetModule,
    MegaMenuModule,
    ReactiveFormsModule,
    KeyFilterModule,
    InputMaskModule,
    CurrencyMaskModule,
    ProgressSpinnerModule,
    CheckboxModule
 
  ],





  providers: [ConfigService, 
              EstadoService,
              CidadeService, 
              InquilinoService,
              AuthGuard,
              UsuarioService,
              LinhaService,
              LocalidadeService,
              SecaoService,
              SharedService,
             {
                 provide: HTTP_INTERCEPTORS,
                 useClass: AuthInterceptor,
                 multi: true
              }
             ],
  bootstrap: [AppComponent]
})

export class AppModule { }


