import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { HttpClient } from '@angular/common/http';
import { Pattern } from 'src/app/modules/shared/model/pattern';
import { TestData } from 'src/app/modules/shared/model/test-data';

const baseUrl = `https://poc-ai-backend.web.app/api`;
@Injectable({
  providedIn: 'root',
})
export class FirebaseController {
  constructor(
    public tokenService: TokenService,
    public httpClient: HttpClient
  ) {}

  public getPatterns(): Observable<Pattern[]> {
    return this.httpClient.get(`${baseUrl}/patterns`) as Observable<Pattern[]>;
  }

  public getPatternById(id: string): Observable<Pattern> {
    return this.httpClient.get(
      `${baseUrl}/patterns/${id}`
    ) as Observable<Pattern>;
  }

  public createPattern(pattern: Pattern) {
    return this.httpClient.post(`${baseUrl}/patterns`, pattern);
  }

  public updatePattern(id: string, pattern: Pattern) {
    return this.httpClient.put(`${baseUrl}/patterns/${id}`, pattern);
  }

  public deletePattern(id: string) {
    return this.httpClient.delete(`${baseUrl}/patterns/${id}`);
  }

  public getAllTestData(): Observable<TestData[]> {
    return this.httpClient.get(`${baseUrl}/test-data`) as Observable<
      TestData[]
    >;
  }

  public getTestDataById(id: string): Observable<TestData> {
    return this.httpClient.get(
      `${baseUrl}/test-data/${id}`
    ) as Observable<TestData>;
  }

  public createTestData(testdata: TestData) {
    return this.httpClient.post(`${baseUrl}/test-data`, testdata);
  }

  public updateTestData(id: string, testdata: TestData) {
    return this.httpClient.put(`${baseUrl}/test-data/${id}`, testdata);
  }

  public deleteTestData(id: string) {
    return this.httpClient.delete(`${baseUrl}/test-data/${id}`);
  }
}
