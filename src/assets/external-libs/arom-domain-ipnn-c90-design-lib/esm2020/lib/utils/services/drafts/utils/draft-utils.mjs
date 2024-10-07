import { EsnDialogEntry } from "../../../../components/dialog-entry/dialog-entry.component";
import { EsnUtils } from "../../../utils/utils";
export class EsnDraftUtils {
    static getCreationRoutes(containerComponent, creationSteps, guards = []) {
        return {
            path: 'create/:uuid',
            component: EsnDialogEntry,
            data: {
                child: containerComponent,
                panelClass: ['no-padding-dialog'],
                fullScreenDialog: true,
            },
            // TODO: add DatabaseExistGuard to the lib and make it the default guard for this
            // canActivate: [DatabaseExistGuard],
            canActivate: guards,
            children: [
                ...creationSteps.map((step) => ({
                    path: step.path,
                    component: step.component,
                })),
                {
                    path: '',
                    redirectTo: creationSteps[0].path,
                    pathMatch: 'full',
                },
            ],
        };
    }
    static initDraftElement(additionalFields = {}) {
        return {
            externalUuid: EsnUtils.generateRandomUuid(),
            creationDate: new Date(),
            initialCreation: true,
            ...additionalFields
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZnQtdXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcm9tLWRvbWFpbi1pcG5uLWM5MC1kZXNpZ24tbGliL3NyYy9saWIvdXRpbHMvc2VydmljZXMvZHJhZnRzL3V0aWxzL2RyYWZ0LXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUM1RixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHaEQsTUFBTSxPQUFPLGFBQWE7SUFDeEIsTUFBTSxDQUFDLGlCQUFpQixDQUFDLGtCQUF1QixFQUFFLGFBQThCLEVBQUUsU0FBd0IsRUFBRTtRQUMxRyxPQUFPO1lBQ0wsSUFBSSxFQUFFLGNBQWM7WUFDcEIsU0FBUyxFQUFFLGNBQWM7WUFDekIsSUFBSSxFQUFFO2dCQUNKLEtBQUssRUFBRSxrQkFBa0I7Z0JBQ3pCLFVBQVUsRUFBRSxDQUFDLG1CQUFtQixDQUFDO2dCQUNqQyxnQkFBZ0IsRUFBRSxJQUFJO2FBQ3ZCO1lBQ0QsaUZBQWlGO1lBQ2pGLHFDQUFxQztZQUNyQyxXQUFXLEVBQUUsTUFBTTtZQUNuQixRQUFRLEVBQUU7Z0JBQ1IsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUM5QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7b0JBQ2YsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO2lCQUMxQixDQUFDLENBQUM7Z0JBQ0g7b0JBQ0UsSUFBSSxFQUFFLEVBQUU7b0JBQ1IsVUFBVSxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO29CQUNqQyxTQUFTLEVBQUUsTUFBTTtpQkFDbEI7YUFDRjtTQUNGLENBQUE7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLG1CQUE4QyxFQUFFO1FBQ3RFLE9BQU87WUFDTCxZQUFZLEVBQUUsUUFBUSxDQUFDLGtCQUFrQixFQUFFO1lBQzNDLFlBQVksRUFBRSxJQUFJLElBQUksRUFBRTtZQUN4QixlQUFlLEVBQUUsSUFBSTtZQUNyQixHQUFHLGdCQUFnQjtTQUNwQixDQUFDO0lBQ0osQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyAgRXNuV2l6YXJkU3RlcCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL3dpemFyZC9tb2RlbC9zdGVwLXBhcmFtZXRlcnNcIjtcclxuaW1wb3J0IHsgRXNuRGlhbG9nRW50cnkgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9kaWFsb2ctZW50cnkvZGlhbG9nLWVudHJ5LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFc25VdGlscyB9IGZyb20gXCIuLi8uLi8uLi91dGlscy91dGlsc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBFc25EcmFmdFV0aWxzIHtcclxuICBzdGF0aWMgZ2V0Q3JlYXRpb25Sb3V0ZXMoY29udGFpbmVyQ29tcG9uZW50OiBhbnksIGNyZWF0aW9uU3RlcHM6IEVzbldpemFyZFN0ZXBbXSwgZ3VhcmRzOiBDYW5BY3RpdmF0ZVtdID0gW10pOiBSb3V0ZXtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBhdGg6ICdjcmVhdGUvOnV1aWQnLFxyXG4gICAgICBjb21wb25lbnQ6IEVzbkRpYWxvZ0VudHJ5LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgY2hpbGQ6IGNvbnRhaW5lckNvbXBvbmVudCxcclxuICAgICAgICBwYW5lbENsYXNzOiBbJ25vLXBhZGRpbmctZGlhbG9nJ10sXHJcbiAgICAgICAgZnVsbFNjcmVlbkRpYWxvZzogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgLy8gVE9ETzogYWRkIERhdGFiYXNlRXhpc3RHdWFyZCB0byB0aGUgbGliIGFuZCBtYWtlIGl0IHRoZSBkZWZhdWx0IGd1YXJkIGZvciB0aGlzXHJcbiAgICAgIC8vIGNhbkFjdGl2YXRlOiBbRGF0YWJhc2VFeGlzdEd1YXJkXSxcclxuICAgICAgY2FuQWN0aXZhdGU6IGd1YXJkcyxcclxuICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAuLi5jcmVhdGlvblN0ZXBzLm1hcCgoc3RlcCkgPT4gKHtcclxuICAgICAgICAgIHBhdGg6IHN0ZXAucGF0aCxcclxuICAgICAgICAgIGNvbXBvbmVudDogc3RlcC5jb21wb25lbnQsXHJcbiAgICAgICAgfSkpLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHBhdGg6ICcnLFxyXG4gICAgICAgICAgcmVkaXJlY3RUbzogY3JlYXRpb25TdGVwc1swXS5wYXRoLFxyXG4gICAgICAgICAgcGF0aE1hdGNoOiAnZnVsbCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBpbml0RHJhZnRFbGVtZW50KGFkZGl0aW9uYWxGaWVsZHM6IHtba2V5IGluIHN0cmluZ106IHN0cmluZ30gPSB7fSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZXh0ZXJuYWxVdWlkOiBFc25VdGlscy5nZW5lcmF0ZVJhbmRvbVV1aWQoKSxcclxuICAgICAgY3JlYXRpb25EYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICBpbml0aWFsQ3JlYXRpb246IHRydWUsXHJcbiAgICAgIC4uLmFkZGl0aW9uYWxGaWVsZHNcclxuICAgIH07XHJcbiAgfVxyXG59Il19