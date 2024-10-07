import { OnInit } from '@angular/core';
import { EdfApplicationUser } from "../../utils/model/edfApplicationUser";
import * as i0 from "@angular/core";
export declare class EsnPersonAvatar implements OnInit {
    user: EdfApplicationUser;
    size?: 'xs' | 'sm' | '' | 'lg';
    nniColorNumber: number;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnPersonAvatar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnPersonAvatar, "esn-person-avatar", never, { "user": "user"; "size": "size"; }, {}, never, never, false, never>;
}
