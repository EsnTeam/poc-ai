import { Injectable } from '@angular/core';
import { MatTab } from '@angular/material/tabs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomRendererLayoutTabsService {
  public tabs$: Subject<MatTab> = new Subject<MatTab>();
}
