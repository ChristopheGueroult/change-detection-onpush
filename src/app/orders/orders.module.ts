import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TemplatesModule } from '../templates/templates.module';
import { OrdersRoutingModule } from './orders-routing.module';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';

@NgModule({
  declarations: [PageListOrdersComponent],
  imports: [CommonModule, OrdersRoutingModule, TemplatesModule],
})
export class OrdersModule {}
