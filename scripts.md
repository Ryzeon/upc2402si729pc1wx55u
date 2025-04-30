## Primero instalar todo 

```bash
ng add @angular/material
npm install @ngx-translate/core --save # Solamente si te piden i18n
npm install @ngx-translate/http-loader --save
mkdir public/assets
mkdir public/assets/i18n
echo "{\n}" > public/assets/i18n/en.json
echo "{\n}" > public/assets/i18n/es.json
ng generate environments

```

```ts
export const environment = {
  production : false,
  serverBasePath: "URL"
};

```

# segundo si te piden i18 se agrega esto en app.config.ts se debe ver asi
```typescript
const httpLoaderFactory: (http: HttpClient) => TranslateLoader = (http: HttpClient) =>
  new TranslateHttpLoader(http, './assets/i18n/', '.json');

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideTranslateService({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'en',
    })]
};

```
