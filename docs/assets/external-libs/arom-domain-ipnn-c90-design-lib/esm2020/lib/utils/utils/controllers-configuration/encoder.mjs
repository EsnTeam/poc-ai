import { HttpUrlEncodingCodec } from '@angular/common/http';
/**
 * CustomHttpUrlEncodingCodec
 * Fix plus sign (+) not encoding, so sent as blank space
 * See: https://github.com/angular/angular/issues/11058#issuecomment-247367318
 */
export class CustomHttpUrlEncodingCodec extends HttpUrlEncodingCodec {
    encodeKey(k) {
        k = super.encodeKey(k);
        return k.replace(/\+/gi, '%2B');
    }
    encodeValue(v) {
        v = super.encodeValue(v);
        return v.replace(/\+/gi, '%2B');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5jb2Rlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fyb20tZG9tYWluLWlwbm4tYzkwLWRlc2lnbi1saWIvc3JjL2xpYi91dGlscy91dGlscy9jb250cm9sbGVycy1jb25maWd1cmF0aW9uL2VuY29kZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFMUQ7Ozs7R0FJRztBQUNILE1BQU0sT0FBTywwQkFBMkIsU0FBUSxvQkFBb0I7SUFDekQsU0FBUyxDQUFDLENBQVM7UUFDMUIsQ0FBQyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRVEsV0FBVyxDQUFDLENBQVM7UUFDNUIsQ0FBQyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHBVcmxFbmNvZGluZ0NvZGVjfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG4vKipcclxuICogQ3VzdG9tSHR0cFVybEVuY29kaW5nQ29kZWNcclxuICogRml4IHBsdXMgc2lnbiAoKykgbm90IGVuY29kaW5nLCBzbyBzZW50IGFzIGJsYW5rIHNwYWNlXHJcbiAqIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTEwNTgjaXNzdWVjb21tZW50LTI0NzM2NzMxOFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEN1c3RvbUh0dHBVcmxFbmNvZGluZ0NvZGVjIGV4dGVuZHMgSHR0cFVybEVuY29kaW5nQ29kZWMge1xyXG4gIG92ZXJyaWRlIGVuY29kZUtleShrOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgayA9IHN1cGVyLmVuY29kZUtleShrKTtcclxuICAgIHJldHVybiBrLnJlcGxhY2UoL1xcKy9naSwgJyUyQicpO1xyXG4gIH1cclxuXHJcbiAgb3ZlcnJpZGUgZW5jb2RlVmFsdWUodjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHYgPSBzdXBlci5lbmNvZGVWYWx1ZSh2KTtcclxuICAgIHJldHVybiB2LnJlcGxhY2UoL1xcKy9naSwgJyUyQicpO1xyXG4gIH1cclxufVxyXG4iXX0=