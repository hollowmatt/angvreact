import {Component} from 'angular2/core' 
import {HomeComponent} from './home.component'
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router' 


@Component({ 
  selector: 'app-router', 
  template: '<router-outlet></router-outlet>', 
  directives: [ROUTER_DIRECTIVES], styles:[] 
}) 
@RouteConfig([ 
  { path: '/', name: 'Home', component: HomeComponent }
]) 
export class AppRouterComponent {}
