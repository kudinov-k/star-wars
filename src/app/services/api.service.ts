import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({providedIn: 'root'})
export class ApiService {

  constructor(private http: HttpClient,
              private router: Router) {
  }

  send<R>(method: string, uri: string, body = {}, formData = false): Observable<R> {
    let headers = new HttpHeaders();
    if (!formData) {
      headers = headers.append('Content-Type', 'application/json');
    } else {
      headers = headers.append('Content-Type', 'multipart/form-data');
    }
    const options: any = {
      headers,
      observe: 'response',
      // withCredentials: true
    };

    if (method === 'GET') {
      options['params'] = body;
    } else {
      options['body'] = formData ? body : JSON.stringify(body);
    }

    return this.http.request(method, uri, options).pipe(
      map((response: any) => response.body),
      catchError((reason: HttpErrorResponse) => {
        if (reason.status === 401) {
          this.router.navigate(['auth/login']);
        }
        return throwError(reason.error);
      })
    );
  }

  post<T>(uri: string, body = {}, formData = false): Observable<T> {
    return this.send<T>('POST', uri, body, formData);
  }

  put(uri: string, body = {}): Observable<any> {
    return this.send('PUT', uri, body);
  }

  get<T>(uri: string, body = {}): Observable<T> {
    return this.send<T>('GET', uri, body);
  }

  delete(uri: string, body = {}): Observable<any> {
    return this.send('DELETE', uri, body);
  }

  postRaw(uri: string, formData: any): Observable<any> {
    const options = {
      // headers: headers,
      body: formData,
      responseType: 'json' as 'json',
      observe: 'response' as 'response',
      withCredentials: true
    };
    return this.http.request('POST', uri, options);
  }
}
