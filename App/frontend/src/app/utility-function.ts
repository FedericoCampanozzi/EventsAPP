import { HttpClient, HttpHeaders } from "@angular/common/http";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";
import { map, catchError, of } from "rxjs";
import { CustomErrorSnackbarComponent } from "./components/custom-error-snackbar/custom-error-snackbar.component";

export class UtilityFunction {
    static timeSnackbar: number | undefined = 10000; //10 second
    static config: MatSnackBarConfig = {
      duration: this.timeSnackbar,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    };

    public formatDate(dataStr: string): string {
        return UtilityFunction.formatDate(dataStr);
    }
    public static formatDate(dataStr: string): string {
        if(dataStr == undefined) return "";
        let date = new Date(dataStr);
        return date.toLocaleDateString();
    }
    public formatDate2(data: Date): string {
        return UtilityFunction.formatDate2(data);
    }
    public static formatDate2(data: Date): string {
        if(data == undefined) return "";
        return data.toLocaleDateString();
    }    
    static callGetAPI<T>(client: HttpClient,  snackbar: MatSnackBar, api: string, method: string, params?: string) {
        let complete_uri;
        if (params != null) {
          complete_uri = api + "/" + method + "?" + params;
        } else {
          complete_uri = api + "/" + method;
        }
        return client.get<T>(complete_uri)
          .pipe(
            map((data: any) => {
              return data;
            }),
            catchError(err => {
              this.callErrorSnackBar(snackbar, "Error Occurs", err.error.text)
              return of([]);
            })
        );
    }  

    static callPostAPI<T>(client: HttpClient, snackbar: MatSnackBar, api: string, method: string, jsonParams: string) {
        const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');
        return client.post<T>(api + "/" + method, jsonParams,{
            headers: headers
          })
          .pipe(
            map((data: any) => {
              if (data.length == 0) return [];
              else return JSON.parse(data);
            }),
            catchError(err => {
              this.callErrorSnackBar(snackbar, "Error Occurs", err.error.text)
              return of([]);
            })
        );
    }

    private static callErrorSnackBar(snackbar: MatSnackBar, title: string, message:string){    
      snackbar.openFromComponent(CustomErrorSnackbarComponent,{
          data: {
            Title: title,
            Message: message,
            ShowCloseBtn: true,
          },
          ...this.config
        });
    }
}