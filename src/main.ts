// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // or adjust to your routing path

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()), // ✅ Replaces HttpClientModule
    provideRouter(routes)
  ]
});

