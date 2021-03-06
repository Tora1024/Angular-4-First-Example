import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { convertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductGuardService } from './product-detail/product-guard.service';
import { ProductService } from './product.service';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', 
        canActivate: [ProductGuardService], 
        component: ProductDetailComponent },
    ]),
    SharedModule,
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    convertToSpacesPipe,
  ],
  providers: [
    ProductService,
    ProductGuardService
  ],
})
export class ProductModule { }
