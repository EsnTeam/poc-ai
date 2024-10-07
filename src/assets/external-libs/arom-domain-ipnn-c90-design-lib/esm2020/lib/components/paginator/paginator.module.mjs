import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsnPaginator } from './paginator.component';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatPaginatorIntlFr } from './MatPaginatorIntlFr';
import * as i0 from "@angular/core";
export class EsnPaginatorModule {
}
EsnPaginatorModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnPaginatorModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
EsnPaginatorModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: EsnPaginatorModule, declarations: [EsnPaginator], imports: [CommonModule,
        MatPaginatorModule], exports: [EsnPaginator] });
EsnPaginatorModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnPaginatorModule, providers: [
        {
            provide: MatPaginatorIntl,
            useClass: MatPaginatorIntlFr,
        },
    ], imports: [CommonModule,
        MatPaginatorModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnPaginatorModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [EsnPaginator],
                    imports: [
                        CommonModule,
                        MatPaginatorModule,
                    ],
                    providers: [
                        {
                            provide: MatPaginatorIntl,
                            useClass: MatPaginatorIntlFr,
                        },
                    ],
                    exports: [EsnPaginator],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fyb20tZG9tYWluLWlwbm4tYzkwLWRlc2lnbi1saWIvc3JjL2xpYi9jb21wb25lbnRzL3BhZ2luYXRvci9wYWdpbmF0b3IubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQWEsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUNqRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFnQjFELE1BQU0sT0FBTyxrQkFBa0I7O2dIQUFsQixrQkFBa0I7aUhBQWxCLGtCQUFrQixpQkFiZCxZQUFZLGFBRXpCLFlBQVk7UUFDWixrQkFBa0IsYUFRVixZQUFZO2lIQUVYLGtCQUFrQixhQVJuQjtRQUNSO1lBQ0UsT0FBTyxFQUFFLGdCQUFnQjtZQUN6QixRQUFRLEVBQUUsa0JBQWtCO1NBQzdCO0tBQ0YsWUFSQyxZQUFZO1FBQ1osa0JBQWtCOzRGQVVULGtCQUFrQjtrQkFkOUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQzVCLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGtCQUFrQjtxQkFDbkI7b0JBQ0QsU0FBUyxFQUFDO3dCQUNSOzRCQUNFLE9BQU8sRUFBRSxnQkFBZ0I7NEJBQ3pCLFFBQVEsRUFBRSxrQkFBa0I7eUJBQzdCO3FCQUNGO29CQUNELE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztpQkFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBFc25QYWdpbmF0b3IsIFBhZ2VFdmVudCB9IGZyb20gJy4vcGFnaW5hdG9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TWF0UGFnaW5hdG9ySW50bCwgTWF0UGFnaW5hdG9yTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xyXG5pbXBvcnQgeyBNYXRQYWdpbmF0b3JJbnRsRnIgfSBmcm9tICcuL01hdFBhZ2luYXRvckludGxGcic7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0VzblBhZ2luYXRvcl0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTWF0UGFnaW5hdG9yTW9kdWxlLFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOltcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTWF0UGFnaW5hdG9ySW50bCxcclxuICAgICAgdXNlQ2xhc3M6IE1hdFBhZ2luYXRvckludGxGcixcclxuICAgIH0sXHJcbiAgXSxcclxuICBleHBvcnRzOiBbRXNuUGFnaW5hdG9yXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVzblBhZ2luYXRvck1vZHVsZSB7fVxyXG4iXX0=