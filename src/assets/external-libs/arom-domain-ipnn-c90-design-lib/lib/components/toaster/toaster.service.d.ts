import { ActiveToast, IndividualConfig, ToastrService } from 'ngx-toastr';
import * as i0 from "@angular/core";
export declare class ToasterService {
    private toasterService;
    constructor(toasterService: ToastrService);
    showToaster(type: 'info' | 'error' | 'success', title?: string, message?: string, config?: Partial<IndividualConfig>): ActiveToast<any> | void;
    clearAll(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToasterService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ToasterService>;
}
