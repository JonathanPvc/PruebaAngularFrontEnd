# PruebaAngular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.13.  node 20.0.0

powershell con permisos de admin ejecutar este comando para permisos del jsonServer back local  ------->!important<------ojo

Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

instalar en la raiz del proyecto 

npm install 

luego

npm run dev

esto ( npm run dev ) te corre el ng y el servidor local 


si te aparece error en el servidor ejecutar en otra terminal o CMD

json-server --watch db.json --port 3000

json-server --watch ./server/db.json --port 3000

Verifica q el archivo db.json este alli en server

se intento desplegar en render por ello ves otro package.json y un server.js

el serevidor en render fallo por las rutas de la carpeta serer  me buscar esta ruta pero es inexistente /opt/render/project/src/server/server.js

la app en local no debe de tener ningun problema

se hizo todo lo solicitado en la prueba

navegacion 
simular un get 
componente padre e hijo 
rutas padres/hijas
login
base de datos simulada 
libreria de estilos 
libreria de alertar para errores 
manejos de errores simulados por si no llega nada de la bs simulada 
css responsivo, estilos en linea

el plus del despliegue era opcional lo intente pero no veo las configuraciones de ruta en render por tiempo no me da para ahcerlo ya hablare con la de RRHH para notificar eso.

muchas gracias. 



para saber si estan alli 
## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
