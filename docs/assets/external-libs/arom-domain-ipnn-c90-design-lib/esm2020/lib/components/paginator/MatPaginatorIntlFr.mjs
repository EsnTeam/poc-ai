import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import * as i0 from "@angular/core";
export class MatPaginatorIntlFr extends MatPaginatorIntl {
    constructor() {
        super(...arguments);
        this.itemsPerPageLabel = 'Résultats par page';
        this.nextPageLabel = 'Page suivante';
        this.previousPageLabel = 'Page précedente';
        this.lastPageLabel = 'Dernière page';
        this.firstPageLabel = 'Première page';
        this.getRangeLabel = (page, pageSize, length) => `${page * pageSize + 1} - ${Math.min(length, page * pageSize + pageSize)} sur ${length}`;
    }
}
MatPaginatorIntlFr.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MatPaginatorIntlFr, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
MatPaginatorIntlFr.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MatPaginatorIntlFr });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MatPaginatorIntlFr, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWF0UGFnaW5hdG9ySW50bEZyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvcGFnaW5hdG9yL01hdFBhZ2luYXRvckludGxGci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztBQUUvRCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsZ0JBQWdCO0lBRHhEOztRQUVXLHNCQUFpQixHQUFHLG9CQUFvQixDQUFDO1FBQ3pDLGtCQUFhLEdBQUcsZUFBZSxDQUFDO1FBQ2hDLHNCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBQ3RDLGtCQUFhLEdBQUcsZUFBZSxDQUFDO1FBQ2hDLG1CQUFjLEdBQUcsZUFBZSxDQUFDO1FBQ2pDLGtCQUFhLEdBQUcsQ0FBQyxJQUFZLEVBQUUsUUFBZ0IsRUFBRSxNQUFjLEVBQUUsRUFBRSxDQUMxRSxHQUFHLElBQUksR0FBRyxRQUFRLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQ2xDLE1BQU0sRUFDTixJQUFJLEdBQUcsUUFBUSxHQUFHLFFBQVEsQ0FDM0IsUUFBUSxNQUFNLEVBQUUsQ0FBQztLQUNyQjs7Z0hBWFksa0JBQWtCO29IQUFsQixrQkFBa0I7NEZBQWxCLGtCQUFrQjtrQkFEOUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0UGFnaW5hdG9ySW50bCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1hdFBhZ2luYXRvckludGxGciBleHRlbmRzIE1hdFBhZ2luYXRvckludGwge1xyXG4gIG92ZXJyaWRlIGl0ZW1zUGVyUGFnZUxhYmVsID0gJ1LDqXN1bHRhdHMgcGFyIHBhZ2UnO1xyXG4gIG92ZXJyaWRlIG5leHRQYWdlTGFiZWwgPSAnUGFnZSBzdWl2YW50ZSc7XHJcbiAgb3ZlcnJpZGUgcHJldmlvdXNQYWdlTGFiZWwgPSAnUGFnZSBwcsOpY2VkZW50ZSc7XHJcbiAgb3ZlcnJpZGUgbGFzdFBhZ2VMYWJlbCA9ICdEZXJuacOocmUgcGFnZSc7XHJcbiAgb3ZlcnJpZGUgZmlyc3RQYWdlTGFiZWwgPSAnUHJlbWnDqHJlIHBhZ2UnO1xyXG4gIG92ZXJyaWRlIGdldFJhbmdlTGFiZWwgPSAocGFnZTogbnVtYmVyLCBwYWdlU2l6ZTogbnVtYmVyLCBsZW5ndGg6IG51bWJlcikgPT5cclxuICAgIGAke3BhZ2UgKiBwYWdlU2l6ZSArIDF9IC0gJHtNYXRoLm1pbihcclxuICAgICAgbGVuZ3RoLFxyXG4gICAgICBwYWdlICogcGFnZVNpemUgKyBwYWdlU2l6ZVxyXG4gICAgKX0gc3VyICR7bGVuZ3RofWA7XHJcbn1cclxuIl19