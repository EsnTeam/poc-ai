import { EsnIconsRegistry } from '../icon/icons-registry';
import * as i0 from "@angular/core";
import * as i1 from "../../utils/pipes/time-ago.pipe";
import * as i2 from "./notification.component";
import * as i3 from "./notification-drawer/notification-drawer.component";
import * as i4 from "./notification-avatar/notification-avatar.component";
import * as i5 from "./notification-list/notification-list.component";
import * as i6 from "./notification-center/notification-center.component";
import * as i7 from "@angular/common";
import * as i8 from "@angular/forms";
import * as i9 from "@angular/cdk/overlay";
import * as i10 from "../../utils/services/global-configuration/global-configuration.module";
import * as i11 from "../../utils/services/call-wrapper/api-call-wrapper.module";
import * as i12 from "../data/data.module";
import * as i13 from "../button/button.module";
import * as i14 from "../icon/icon.module";
import * as i15 from "../person-avatar/person-avatar.module";
import * as i16 from "../tabs/tabs.module";
import * as i17 from "../infinite-scroll/infinite-scroll.module";
import * as i18 from "../async-content-wrapper/async-content-wrapper.module";
import * as i19 from "../badge/badge.module";
import * as i20 from "../divider/divider.module";
import * as i21 from "../tooltip/tooltip.module";
import * as i22 from "../input/input.module";
import * as i23 from "../select/select.module";
import * as i24 from "../checkbox/checkbox.module";
export declare class EsnNotificationModule {
    private esnIconsRegistry;
    constructor(esnIconsRegistry: EsnIconsRegistry);
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnNotificationModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<EsnNotificationModule, [typeof i1.TimeAgoPipe, typeof i2.EsnNotification, typeof i3.EsnNotificationDrawer, typeof i4.EsnNotificationAvatar, typeof i5.EsnNotificationList, typeof i6.EsnNotificationCenter], [typeof i7.CommonModule, typeof i8.FormsModule, typeof i8.ReactiveFormsModule, typeof i9.OverlayModule, typeof i10.EsnGlobalConfigurationModule, typeof i11.EsnApiCallWrapperModule, typeof i12.EsnDataModule, typeof i13.EsnButtonModule, typeof i14.EsnIconModule, typeof i15.EsnPersonAvatarModule, typeof i16.EsnTabsModule, typeof i17.EsnInfiniteScrollModule, typeof i18.EsnAsyncContentWrapperModule, typeof i19.EsnBadgeModule, typeof i20.EsnDividerModule, typeof i21.EsnTooltipModule, typeof i22.EsnInputModule, typeof i23.EsnSelectModule, typeof i24.EsnCheckboxModule], [typeof i2.EsnNotification, typeof i3.EsnNotificationDrawer, typeof i5.EsnNotificationList, typeof i6.EsnNotificationCenter, typeof i1.TimeAgoPipe, typeof i4.EsnNotificationAvatar]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<EsnNotificationModule>;
}
