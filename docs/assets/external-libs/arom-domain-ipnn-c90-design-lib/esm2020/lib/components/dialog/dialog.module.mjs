import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsnDialog } from './dialog.service';
import { MatDialogModule } from '@angular/material/dialog';
import { OverlayModule } from '@angular/cdk/overlay';
import { EsnDialogClose, EsnDialogContent, EsnDialogFooter, EsnDialogHeader } from './dialog-content';
import { ObserversModule } from '@angular/cdk/observers';
import { EsnButtonModule } from '../button/button.module';
import * as i0 from "@angular/core";
export class EsnDialogModule {
}
EsnDialogModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnDialogModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
EsnDialogModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: EsnDialogModule, declarations: [EsnDialogClose,
        EsnDialogHeader,
        EsnDialogContent,
        EsnDialogFooter], imports: [MatDialogModule,
        OverlayModule,
        CommonModule,
        EsnButtonModule,
        ObserversModule], exports: [EsnDialogClose, EsnDialogHeader, EsnDialogContent, EsnDialogFooter] });
EsnDialogModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnDialogModule, providers: [EsnDialog], imports: [MatDialogModule,
        OverlayModule,
        CommonModule,
        EsnButtonModule,
        ObserversModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnDialogModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        EsnDialogClose,
                        EsnDialogHeader,
                        EsnDialogContent,
                        EsnDialogFooter,
                    ],
                    imports: [
                        MatDialogModule,
                        OverlayModule,
                        CommonModule,
                        EsnButtonModule,
                        ObserversModule
                    ],
                    exports: [EsnDialogClose, EsnDialogHeader, EsnDialogContent, EsnDialogFooter],
                    providers: [EsnDialog],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fyb20tZG9tYWluLWlwbm4tYzkwLWRlc2lnbi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2RpYWxvZy9kaWFsb2cubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3RHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBbUIxRCxNQUFNLE9BQU8sZUFBZTs7NkdBQWYsZUFBZTs4R0FBZixlQUFlLGlCQWZ4QixjQUFjO1FBQ2QsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixlQUFlLGFBR2YsZUFBZTtRQUNmLGFBQWE7UUFDYixZQUFZO1FBQ1osZUFBZTtRQUNmLGVBQWUsYUFFUCxjQUFjLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGVBQWU7OEdBR2pFLGVBQWUsYUFGZixDQUFDLFNBQVMsQ0FBQyxZQVBwQixlQUFlO1FBQ2YsYUFBYTtRQUNiLFlBQVk7UUFDWixlQUFlO1FBQ2YsZUFBZTs0RkFLTixlQUFlO2tCQWpCM0IsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osY0FBYzt3QkFDZCxlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsZUFBZTtxQkFDaEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGVBQWU7d0JBQ2YsYUFBYTt3QkFDYixZQUFZO3dCQUNaLGVBQWU7d0JBQ2YsZUFBZTtxQkFDaEI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsY0FBYyxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLENBQUM7b0JBQzdFLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQztpQkFDdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7RXNuRGlhbG9nfSBmcm9tICcuL2RpYWxvZy5zZXJ2aWNlJztcclxuaW1wb3J0IHtNYXREaWFsb2dNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7T3ZlcmxheU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQge0Jyb3dzZXJBbmltYXRpb25zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBFc25EaWFsb2dDbG9zZSwgRXNuRGlhbG9nQ29udGVudCwgRXNuRGlhbG9nRm9vdGVyLCBFc25EaWFsb2dIZWFkZXIgfSBmcm9tICcuL2RpYWxvZy1jb250ZW50JztcclxuaW1wb3J0IHsgT2JzZXJ2ZXJzTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL29ic2VydmVycyc7XHJcbmltcG9ydCB7IEVzbkJ1dHRvbk1vZHVsZSB9IGZyb20gJy4uL2J1dHRvbi9idXR0b24ubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBFc25EaWFsb2dDbG9zZSxcclxuICAgIEVzbkRpYWxvZ0hlYWRlcixcclxuICAgIEVzbkRpYWxvZ0NvbnRlbnQsXHJcbiAgICBFc25EaWFsb2dGb290ZXIsXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBNYXREaWFsb2dNb2R1bGUsXHJcbiAgICBPdmVybGF5TW9kdWxlLFxyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRXNuQnV0dG9uTW9kdWxlLFxyXG4gICAgT2JzZXJ2ZXJzTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbRXNuRGlhbG9nQ2xvc2UsIEVzbkRpYWxvZ0hlYWRlciwgRXNuRGlhbG9nQ29udGVudCwgRXNuRGlhbG9nRm9vdGVyXSxcclxuICBwcm92aWRlcnM6IFtFc25EaWFsb2ddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXNuRGlhbG9nTW9kdWxlIHt9XHJcbiJdfQ==