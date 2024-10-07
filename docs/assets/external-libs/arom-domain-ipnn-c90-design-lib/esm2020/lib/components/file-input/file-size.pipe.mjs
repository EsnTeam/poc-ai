import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
/*
 * Convert bytes into largest possible unit if no unit is passed as parameter.
 * Usage:
 *   bytes | fileSize
 * Example:
 *   {{ 1024 |  fileSize}}
 *   formats to: 1 KB
 */
export class FileSizePipe {
    constructor() {
        this.units = ['Octets', 'Ko', 'Mo', 'Go', 'To', 'Po'];
    }
    transform(bytes = 0) {
        // wihout a "while" loop
        // https://stackoverflow.com/a/20732091
        if (bytes) {
            const i = Math.floor(Math.log(bytes) / Math.log(1024));
            return ((bytes / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + this.units[i]);
        }
        return '';
    }
}
FileSizePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: FileSizePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
FileSizePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: FileSizePipe, name: "fileSize" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: FileSizePipe, decorators: [{
            type: Pipe,
            args: [{ name: 'fileSize' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1zaXplLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcm9tLWRvbWFpbi1pcG5uLWM5MC1kZXNpZ24tbGliL3NyYy9saWIvY29tcG9uZW50cy9maWxlLWlucHV0L2ZpbGUtc2l6ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDOztBQUVsRDs7Ozs7OztHQU9HO0FBRUgsTUFBTSxPQUFPLFlBQVk7SUFEekI7UUFFUyxVQUFLLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBYXpEO0lBWEMsU0FBUyxDQUFDLFFBQWdCLENBQUM7UUFDekIsd0JBQXdCO1FBQ3hCLHVDQUF1QztRQUN2QyxJQUFJLEtBQUssRUFBRTtZQUNULE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdkQsT0FBTyxDQUNBLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FDdEUsQ0FBQztTQUNIO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDOzswR0FiVSxZQUFZO3dHQUFaLFlBQVk7NEZBQVosWUFBWTtrQkFEeEIsSUFBSTttQkFBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLypcclxuICogQ29udmVydCBieXRlcyBpbnRvIGxhcmdlc3QgcG9zc2libGUgdW5pdCBpZiBubyB1bml0IGlzIHBhc3NlZCBhcyBwYXJhbWV0ZXIuXHJcbiAqIFVzYWdlOlxyXG4gKiAgIGJ5dGVzIHwgZmlsZVNpemVcclxuICogRXhhbXBsZTpcclxuICogICB7eyAxMDI0IHwgIGZpbGVTaXplfX1cclxuICogICBmb3JtYXRzIHRvOiAxIEtCXHJcbiAqL1xyXG5AUGlwZSh7IG5hbWU6ICdmaWxlU2l6ZScgfSlcclxuZXhwb3J0IGNsYXNzIEZpbGVTaXplUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHB1YmxpYyB1bml0cyA9IFsnT2N0ZXRzJywgJ0tvJywgJ01vJywgJ0dvJywgJ1RvJywgJ1BvJ107XHJcblxyXG4gIHRyYW5zZm9ybShieXRlczogbnVtYmVyID0gMCk6IHN0cmluZyB7XHJcbiAgICAvLyB3aWhvdXQgYSBcIndoaWxlXCIgbG9vcFxyXG4gICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIwNzMyMDkxXHJcbiAgICBpZiAoYnl0ZXMpIHtcclxuICAgICAgY29uc3QgaSA9IE1hdGguZmxvb3IoTWF0aC5sb2coYnl0ZXMpIC8gTWF0aC5sb2coMTAyNCkpO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxhbnk+KGJ5dGVzIC8gTWF0aC5wb3coMTAyNCwgaSkpLnRvRml4ZWQoMikgKiAxICsgJyAnICsgdGhpcy51bml0c1tpXVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxufVxyXG4iXX0=