import { expand, forkJoin, last, map, of, switchMap, takeWhile } from 'rxjs';
import { EsnUtils } from './utils';
import { CustomHttpUrlEncodingCodec } from './controllers-configuration/encoder';
import { HttpParams, } from '@angular/common/http';
export class EsnApiUtils {
    static async retry(func, condition = () => true, stepName = '', bodySent = 'Unavailable', retries = 2, interval = 5000) {
        const stepNamePrecision = stepName ? ' for ' + stepName : '';
        let count = 0;
        let resp;
        let error;
        while (count < retries) {
            try {
                resp = await func();
                if (condition(resp)) {
                    return resp;
                }
                else {
                    console.log(`Call number ${count + 1} failed${stepNamePrecision}: Condition unfullfilled`);
                    console.log(resp);
                }
            }
            catch (err) {
                error = err;
                console.log(`Call number ${count + 1} failed${stepNamePrecision} with following error:`);
                console.log(err);
            }
            count++;
            await EsnUtils.sleep(interval);
        }
        console.log(`Call failed ${stepNamePrecision} after ${retries} retries. Stopping Synchro:`);
        throw {
            message: `Api call error: Call failed${stepNamePrecision}`,
            responseReceived: resp,
            error,
            bodySent,
        };
    }
    static getErrorMessage(error, errorType = '') {
        if (!navigator.onLine) {
            return {
                message: `Merci de vérifier votre connexion et réessayer.`,
                retryable: true,
            };
        }
        const code = error?.status || error?.error?.status;
        if (!code) {
            return {
                message: `Une erreur technique s'est produite, merci de contacter le support.`,
            };
        }
        switch (code) {
            case 400:
                return {
                    message: `Requête rejetée par le serveur, merci de contacter le support.`,
                    code,
                };
            case 401:
                return {
                    message: `Votre authentification Gardian a expiré, merci de vous reconnecter.`,
                };
            case 403:
                return {
                    message: `L'accès à cette ressource n'est pas autorisé. Merci de contacter le support.`,
                    code,
                };
            case 409:
                return {
                    message: `Un autre utilisateur à apporté une modification. Veuillez rafraîchir la page 
          pour visualiser sa modification avant d'effectuer votre opération.`,
                    code,
                };
            case 500:
                return {
                    message: `Une erreur non gérée s'est produite, merci de contacter le support.`,
                    code,
                };
            case 503:
                return {
                    message: `Le service est temporairement indisponible, merci de réessayer ultérieurement.`,
                    retryable: true,
                    code,
                };
            default:
                return {
                    message: `Une erreur technique s'est produite, merci de contacter le support.`,
                    code,
                };
        }
    }
    static async fetchAllElementsWithCallWrapper(callFunc) {
        let allElements = [];
        let errorDisplay = null;
        let batchSize = 50;
        let page = 0;
        let totalNumberOfResults = 1;
        while (page == 0 ||
            (!errorDisplay && page * batchSize < totalNumberOfResults && page < 200)) {
            const resp = await callFunc(page, batchSize);
            if (!!resp.resp?.results) {
                allElements = allElements.concat(resp.resp.results);
                totalNumberOfResults = resp.resp.totalNumberOfResults;
            }
            errorDisplay = resp.error;
            page = page + 1;
            console.log(allElements);
        }
        return { error: errorDisplay, resp: allElements };
    }
    static fetchAllElementsWithoutCallWrapper(callFunc) {
        const batchSize = 50;
        return of({
            allElements: [],
            page: 0,
            totalNumberOfResults: 1,
        }).pipe(expand((data) => callFunc(data.page, batchSize).pipe(map((resp) => ({
            allElements: data.allElements.concat(resp.content.results),
            page: data.page + 1,
            totalNumberOfResults: resp.content?.totalNumberOfResults,
        })))), takeWhile((data) => (data.page - 1) * batchSize < data.totalNumberOfResults &&
            data.page < 200), map((data) => data.allElements), last());
    }
    // Resolves when all calls resolve
    // with resp = array of all resp
    // and error = first error found
    static async forkJoinCallWrappers(calls) {
        const results = await Promise.all(calls);
        return {
            resp: results.map((res) => res.resp),
            error: results.map((res) => res.error).find((err) => !!err),
        };
    }
    static forkJoinXByX(calls, batchSize = 3) {
        let call = of([]);
        for (let i = 0; batchSize * i < calls.length; i++) {
            call = call.pipe(switchMap((acc) => {
                const batchToDo = [];
                for (let index = i * 3; index < calls.length && index < (i + 1) * batchSize; index++) {
                    batchToDo.push(calls[index]);
                }
                return forkJoin(batchToDo).pipe(map((resp) => {
                    resp.forEach((r) => acc.push(r));
                    return acc;
                }));
            }));
        }
        return call;
    }
    static makeQueryParameters(queryParams) {
        let queryParameters = new HttpParams({
            encoder: new CustomHttpUrlEncodingCodec(),
        });
        Object.entries(queryParams).forEach(([paramName, paramVal]) => {
            if (paramVal != null && paramVal !== '' && !(Array.isArray(paramVal) && !paramVal.length)) {
                queryParameters = queryParameters.set(paramName, paramVal);
            }
        });
        return queryParameters;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpVXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcm9tLWRvbWFpbi1pcG5uLWM5MC1kZXNpZ24tbGliL3NyYy9saWIvdXRpbHMvdXRpbHMvYXBpVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBYyxFQUFFLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV6RixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ25DLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ2pGLE9BQU8sRUFDTCxVQUFVLEdBQ1gsTUFBTSxzQkFBc0IsQ0FBQztBQUU5QixNQUFNLE9BQU8sV0FBVztJQUN0QixNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FDaEIsSUFBYyxFQUNkLFlBQXNCLEdBQUcsRUFBRSxDQUFDLElBQUksRUFDaEMsV0FBbUIsRUFBRSxFQUNyQixXQUFnQixhQUFhLEVBQzdCLFVBQWtCLENBQUMsRUFDbkIsV0FBbUIsSUFBSTtRQUV2QixNQUFNLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzdELElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksSUFBSSxDQUFDO1FBQ1QsSUFBSSxLQUFLLENBQUM7UUFDVixPQUFPLEtBQUssR0FBRyxPQUFPLEVBQUU7WUFDdEIsSUFBSTtnQkFDRixJQUFJLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztnQkFDcEIsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ25CLE9BQU8sSUFBSSxDQUFDO2lCQUNiO3FCQUFNO29CQUNMLE9BQU8sQ0FBQyxHQUFHLENBQ1QsZUFD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LCBPYnNlcnZhYmxlLCBvZiwgc3dpdGNoTWFwLCB0YWtlV2hpbGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQXBpQ2FsbFdyYXBwZXIsIEFwaUVycm9yRGlzcGxheSwgQXBpUmVzcG9uc2UsIExpc3RXcmFwcGVyRHRvIH0gZnJvbSAnLi4vbW9kZWwvcHVibGljLWFwaSc7XHJcbmltcG9ydCB7IEVzblV0aWxzIH0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCB7IEN1c3RvbUh0dHBVcmxFbmNvZGluZ0NvZGVjIH0gZnJvbSAnLi9jb250cm9sbGVycy1jb25maWd1cmF0aW9uL2VuY29kZXInO1xyXG5pbXBvcnQge1xyXG4gIEh0dHBQYXJhbXMsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVzbkFwaVV0aWxzIHtcclxuICBzdGF0aWMgYXN5bmMgcmV0cnkoXHJcbiAgICBmdW5jOiBGdW5jdGlvbixcclxuICAgIGNvbmRpdGlvbjogRnVuY3Rpb24gPSAoKSA9PiB0cnVlLFxyXG4gICAgc3RlcE5hbWU6IHN0cmluZyA9ICcnLFxyXG4gICAgYm9keVNlbnQ6IGFueSA9ICdVbmF2YWlsYWJsZScsXHJcbiAgICByZXRyaWVzOiBudW1iZXIgPSAyLFxyXG4gICAgaW50ZXJ2YWw6IG51bWJlciA9IDUwMDBcclxuICApIHtcclxuICAgIGNvbnN0IHN0ZXBOYW1lUHJlY2lzaW9uID0gc3RlcE5hbWUgPyAnIGZvciAnICsgc3RlcE5hbWUgOiAnJztcclxuICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICBsZXQgcmVzcDtcclxuICAgIGxldCBlcnJvcjtcclxuICAgIHdoaWxlIChjb3VudCA8IHJldHJpZXMpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICByZXNwID0gYXdhaXQgZnVuYygpO1xyXG4gICAgICAgIGlmIChjb25kaXRpb24ocmVzcCkpIHtcclxuICAgICAgICAgIHJldHVybiByZXNwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgYENhbGwgbnVtYmVyICR7XHJcbiAgICAgICAgICAgICAgY291bnQgKyAxXHJcbiAgICAgICAgICAgIH0gZmFpbGVkJHtzdGVwTmFtZVByZWNpc2lvbn06IENvbmRpdGlvbiB1bmZ1bGxmaWxsZWRgXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBlcnJvciA9IGVycjtcclxuICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgIGBDYWxsIG51bWJlciAke1xyXG4gICAgICAgICAgICBjb3VudCArIDFcclxuICAgICAgICAgIH0gZmFpbGVkJHtzdGVwTmFtZVByZWNpc2lvbn0gd2l0aCBmb2xsb3dpbmcgZXJyb3I6YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfVxyXG4gICAgICBjb3VudCsrO1xyXG4gICAgICBhd2FpdCBFc25VdGlscy5zbGVlcChpbnRlcnZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIGBDYWxsIGZhaWxlZCAke3N0ZXBOYW1lUHJlY2lzaW9ufSBhZnRlciAke3JldHJpZXN9IHJldHJpZXMuIFN0b3BwaW5nIFN5bmNocm86YFxyXG4gICAgKTtcclxuICAgIHRocm93IHtcclxuICAgICAgbWVzc2FnZTogYEFwaSBjYWxsIGVycm9yOiBDYWxsIGZhaWxlZCR7c3RlcE5hbWVQcmVjaXNpb259YCxcclxuICAgICAgcmVzcG9uc2VSZWNlaXZlZDogcmVzcCxcclxuICAgICAgZXJyb3IsXHJcbiAgICAgIGJvZHlTZW50LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRFcnJvck1lc3NhZ2UoZXJyb3I6IGFueSwgZXJyb3JUeXBlOiBzdHJpbmcgPSAnJyk6IEFwaUVycm9yRGlzcGxheSB7XHJcbiAgICBpZiAoIW5hdmlnYXRvci5vbkxpbmUpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBtZXNzYWdlOiBgTWVyY2kgZGUgdsOpcmlmaWVyIHZvdHJlIGNvbm5leGlvbiBldCByw6llc3NheWVyLmAsXHJcbiAgICAgICAgcmV0cnlhYmxlOiB0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY29uc3QgY29kZSA9IGVycm9yPy5zdGF0dXMgfHwgZXJyb3I/LmVycm9yPy5zdGF0dXM7XHJcbiAgICBpZiAoIWNvZGUpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBtZXNzYWdlOiBgVW5lIGVycmV1ciB0ZWNobmlxdWUgcydlc3QgcHJvZHVpdGUsIG1lcmNpIGRlIGNvbnRhY3RlciBsZSBzdXBwb3J0LmAsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKGNvZGUpIHtcclxuICAgICAgY2FzZSA0MDA6XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIG1lc3NhZ2U6IGBSZXF1w6p0ZSByZWpldMOpZSBwYXIgbGUgc2VydmV1ciwgbWVyY2kgZGUgY29udGFjdGVyIGxlIHN1cHBvcnQuYCxcclxuICAgICAgICAgIGNvZGUsXHJcbiAgICAgICAgfTtcclxuICAgICAgY2FzZSA0MDE6XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIG1lc3NhZ2U6IGBWb3RyZSBhdXRoZW50aWZpY2F0aW9uIEdhcmRpYW4gYSBleHBpcsOpLCBtZXJjaSBkZSB2b3VzIHJlY29ubmVjdGVyLmAsXHJcbiAgICAgICAgfTtcclxuICAgICAgY2FzZSA0MDM6XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIG1lc3NhZ2U6IGBMJ2FjY8OocyDDoCBjZXR0ZSByZXNzb3VyY2Ugbidlc3QgcGFzIGF1dG9yaXPDqS4gTWVyY2kgZGUgY29udGFjdGVyIGxlIHN1cHBvcnQuYCxcclxuICAgICAgICAgIGNvZGUsXHJcbiAgICAgICAgfTtcclxuICAgICAgY2FzZSA0MDk6XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIG1lc3NhZ2U6IGBVbiBhdXRyZSB1dGlsaXNhdGV1ciDDoCBhcHBvcnTDqSB1bmUgbW9kaWZpY2F0aW9uLiBWZXVpbGxleiByYWZyYcOuY2hpciBsYSBwYWdlIFxyXG4gICAgICAgICAgcG91ciB2aXN1YWxpc2VyIHNhIG1vZGlmaWNhdGlvbiBhdmFudCBkJ2VmZmVjdHVlciB2b3RyZSBvcMOpcmF0aW9uLmAsXHJcbiAgICAgICAgICBjb2RlLFxyXG4gICAgICAgIH07XHJcbiAgICAgIGNhc2UgNTAwOlxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBtZXNzYWdlOiBgVW5lIGVycmV1ciBub24gZ8OpcsOpZSBzJ2VzdCBwcm9kdWl0ZSwgbWVyY2kgZGUgY29udGFjdGVyIGxlIHN1cHBvcnQuYCxcclxuICAgICAgICAgIGNvZGUsXHJcbiAgICAgICAgfTtcclxuICAgICAgY2FzZSA1MDM6XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIG1lc3NhZ2U6IGBMZSBzZXJ2aWNlIGVzdCB0ZW1wb3JhaXJlbWVudCBpbmRpc3BvbmlibGUsIG1lcmNpIGRlIHLDqWVzc2F5ZXIgdWx0w6lyaWV1cmVtZW50LmAsXHJcbiAgICAgICAgICByZXRyeWFibGU6IHRydWUsXHJcbiAgICAgICAgICBjb2RlLFxyXG4gICAgICAgIH07XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIG1lc3NhZ2U6IGBVbmUgZXJyZXVyIHRlY2huaXF1ZSBzJ2VzdCBwcm9kdWl0ZSwgbWVyY2kgZGUgY29udGFjdGVyIGxlIHN1cHBvcnQuYCxcclxuICAgICAgICAgIGNvZGUsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBzdGF0aWMgYXN5bmMgZmV0Y2hBbGxFbGVtZW50c1dpdGhDYWxsV3JhcHBlcihcclxuICAgIGNhbGxGdW5jOiAocGFnZTogbnVtYmVyLCBzaXplOiBudW1iZXIpID0+IFByb21pc2U8QXBpQ2FsbFdyYXBwZXI+XHJcbiAgKTogUHJvbWlzZTxBcGlDYWxsV3JhcHBlcj4ge1xyXG4gICAgbGV0IGFsbEVsZW1lbnRzOiBhbnlbXSA9IFtdO1xyXG4gICAgbGV0IGVycm9yRGlzcGxheSA9IG51bGw7XHJcbiAgICBsZXQgYmF0Y2hTaXplID0gNTA7XHJcbiAgICBsZXQgcGFnZSA9IDA7XHJcbiAgICBsZXQgdG90YWxOdW1iZXJPZlJlc3VsdHMgPSAxO1xyXG4gICAgd2hpbGUgKFxyXG4gICAgICBwYWdlID09IDAgfHxcclxuICAgICAgKCFlcnJvckRpc3BsYXkgJiYgcGFnZSAqIGJhdGNoU2l6ZSA8IHRvdGFsTnVtYmVyT2ZSZXN1bHRzICYmIHBhZ2UgPCAyMDApXHJcbiAgICApIHtcclxuICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGNhbGxGdW5jKHBhZ2UsIGJhdGNoU2l6ZSk7XHJcbiAgICAgIGlmICghIXJlc3AucmVzcD8ucmVzdWx0cykge1xyXG4gICAgICAgIGFsbEVsZW1lbnRzID0gYWxsRWxlbWVudHMuY29uY2F0KHJlc3AucmVzcC5yZXN1bHRzKTtcclxuICAgICAgICB0b3RhbE51bWJlck9mUmVzdWx0cyA9IHJlc3AucmVzcC50b3RhbE51bWJlck9mUmVzdWx0cztcclxuICAgICAgfVxyXG4gICAgICBlcnJvckRpc3BsYXkgPSByZXNwLmVycm9yO1xyXG4gICAgICBwYWdlID0gcGFnZSArIDE7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFsbEVsZW1lbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBlcnJvcjogZXJyb3JEaXNwbGF5IGFzIEFwaUVycm9yRGlzcGxheSB8IHVuZGVmaW5lZCwgcmVzcDogYWxsRWxlbWVudHMgfTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmZXRjaEFsbEVsZW1lbnRzV2l0aG91dENhbGxXcmFwcGVyKFxyXG4gICAgY2FsbEZ1bmM6IChcclxuICAgICAgcGFnZTogbnVtYmVyLFxyXG4gICAgICBzaXplOiBudW1iZXJcclxuICAgICkgPT4gT2JzZXJ2YWJsZTxBcGlSZXNwb25zZTxMaXN0V3JhcHBlckR0bzxhbnk+Pj5cclxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgY29uc3QgYmF0Y2hTaXplID0gNTA7XHJcbiAgICByZXR1cm4gb2Yoe1xyXG4gICAgICBhbGxFbGVtZW50czogW10gYXMgYW55W10sXHJcbiAgICAgIHBhZ2U6IDAsXHJcbiAgICAgIHRvdGFsTnVtYmVyT2ZSZXN1bHRzOiAxLFxyXG4gICAgfSkucGlwZShcclxuICAgICAgZXhwYW5kKChkYXRhKSA9PlxyXG4gICAgICAgIGNhbGxGdW5jKGRhdGEucGFnZSwgYmF0Y2hTaXplKS5waXBlKFxyXG4gICAgICAgICAgbWFwKChyZXNwKSA9PiAoe1xyXG4gICAgICAgICAgICBhbGxFbGVtZW50czogZGF0YS5hbGxFbGVtZW50cy5jb25jYXQocmVzcC5jb250ZW50IS5yZXN1bHRzKSxcclxuICAgICAgICAgICAgcGFnZTogZGF0YS5wYWdlICsgMSxcclxuICAgICAgICAgICAgdG90YWxOdW1iZXJPZlJlc3VsdHM6IHJlc3AuY29udGVudD8udG90YWxOdW1iZXJPZlJlc3VsdHMsXHJcbiAgICAgICAgICB9KSlcclxuICAgICAgICApXHJcbiAgICAgICksXHJcbiAgICAgIHRha2VXaGlsZShcclxuICAgICAgICAoZGF0YSkgPT5cclxuICAgICAgICAgIChkYXRhLnBhZ2UgLSAxKSAqIGJhdGNoU2l6ZSA8IGRhdGEudG90YWxOdW1iZXJPZlJlc3VsdHMhICYmXHJcbiAgICAgICAgICBkYXRhLnBhZ2UgPCAyMDBcclxuICAgICAgKSxcclxuICAgICAgbWFwKChkYXRhKSA9PiBkYXRhLmFsbEVsZW1lbnRzKSxcclxuICAgICAgbGFzdCgpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gUmVzb2x2ZXMgd2hlbiBhbGwgY2FsbHMgcmVzb2x2ZVxyXG4gIC8vIHdpdGggcmVzcCA9IGFycmF5IG9mIGFsbCByZXNwXHJcbiAgLy8gYW5kIGVycm9yID0gZmlyc3QgZXJyb3IgZm91bmRcclxuICBzdGF0aWMgYXN5bmMgZm9ya0pvaW5DYWxsV3JhcHBlcnMoXHJcbiAgICBjYWxsczogUHJvbWlzZTxBcGlDYWxsV3JhcHBlcj5bXVxyXG4gICk6IFByb21pc2U8QXBpQ2FsbFdyYXBwZXI+IHtcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChjYWxscyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXNwOiByZXN1bHRzLm1hcCgocmVzKSA9PiByZXMucmVzcCksXHJcbiAgICAgIGVycm9yOiByZXN1bHRzLm1hcCgocmVzKSA9PiByZXMuZXJyb3IpLmZpbmQoKGVycikgPT4gISFlcnIpLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmb3JrSm9pblhCeVgoY2FsbHM6IE9ic2VydmFibGU8YW55PltdLCBiYXRjaFNpemU6IG51bWJlciA9IDMpIHtcclxuICAgIGxldCBjYWxsID0gb2YoW10pIGFzIE9ic2VydmFibGU8YW55PjtcclxuICAgIGZvciAobGV0IGkgPSAwOyBiYXRjaFNpemUgKiBpIDwgY2FsbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY2FsbCA9IGNhbGwucGlwZShcclxuICAgICAgICBzd2l0Y2hNYXAoKGFjYykgPT4ge1xyXG4gICAgICAgICAgY29uc3QgYmF0Y2hUb0RvID0gW107XHJcbiAgICAgICAgICBmb3IgKFxyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSBpICogMztcclxuICAgICAgICAgICAgaW5kZXggPCBjYWxscy5sZW5ndGggJiYgaW5kZXggPCAoaSArIDEpICogYmF0Y2hTaXplO1xyXG4gICAgICAgICAgICBpbmRleCsrXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgYmF0Y2hUb0RvLnB1c2goY2FsbHNbaW5kZXhdKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4gZm9ya0pvaW4oYmF0Y2hUb0RvKS5waXBlKFxyXG4gICAgICAgICAgICBtYXAoKHJlc3ApID0+IHtcclxuICAgICAgICAgICAgICByZXNwLmZvckVhY2goKHIpID0+IGFjYy5wdXNoKHIpKTtcclxuXHJcbiAgICAgICAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2FsbDtcclxuICB9XHJcblxyXG5cclxuICBzdGF0aWMgbWFrZVF1ZXJ5UGFyYW1ldGVycyhxdWVyeVBhcmFtczoge1trZXkgaW4gc3RyaW5nXTogYW55fSk6IEh0dHBQYXJhbXN7XHJcbiAgICBsZXQgcXVlcnlQYXJhbWV0ZXJzID0gbmV3IEh0dHBQYXJhbXMoe1xyXG4gICAgICBlbmNvZGVyOiBuZXcgQ3VzdG9tSHR0cFVybEVuY29kaW5nQ29kZWMoKSxcclxuICAgIH0pO1xyXG5cclxuICAgIE9iamVjdC5lbnRyaWVzKHF1ZXJ5UGFyYW1zKS5mb3JFYWNoKChbcGFyYW1OYW1lLCBwYXJhbVZhbF0pID0+e1xyXG4gICAgICBpZiAocGFyYW1WYWwgIT0gbnVsbCAmJiBwYXJhbVZhbCAhPT0gJycgJiYgICEoQXJyYXkuaXNBcnJheShwYXJhbVZhbCkgJiYgIXBhcmFtVmFsLmxlbmd0aCkpIHtcclxuICAgICAgICBxdWVyeVBhcmFtZXRlcnMgPSBxdWVyeVBhcmFtZXRlcnMuc2V0KHBhcmFtTmFtZSwgPGFueT5wYXJhbVZhbCk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBcclxuICAgIHJldHVybiBxdWVyeVBhcmFtZXRlcnM7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=