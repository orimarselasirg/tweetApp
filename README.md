<br>
<br>
<div align="center">

![image](https://github.com/orimarselasirg/tweetApp/assets/84402210/9794fcfb-68d4-4d70-8009-e713b2e564c7)

</div>

<p align="justify"> PostApp es una webapp que consume una API externa y que simula una red social tipo Twitter, en las cuales se pueden ver los diferentes post por usuarios, sus likes, comentarios y datos de perfil de cada usuario. </p>  

https://post-app-six.vercel.app/

<br>
<br>
<h1> Primeros pasos 🚀 </h1>

Con las siguientes instrucciones podrás poner en funcionamiento el proyecto localmente .

**📑    Requerimientos**

Para poder poner a correr esta aplicación tendrás que tener instalado en tu ordenador con anterioridad la última versión de NPM 9.8.0 y Node 20.2.0, puedes chequear en consola si la tienes instalada haciendo 

```
npm -v
```
ó también

``` 
node-v
```

Sino en el siguiente link puedes descargarla gratuitamente - <https://nodejs.org/es/download/> .

Luego, deberás ingresar al repositorio de GitHub:
[https://github.com/orimarselasirg/tweetApp](https://github.com/orimarselasirg/tweetApp)

Copia el repositorio haciendo click en Fork, así obtendrás una copia del mismo en tu Github.

<div align="center">

![image](https://github.com/orimarselasirg/tweetApp/assets/84402210/59b40a57-ef8a-4917-9772-8d6600807542)

</div>

A continuación haz click en Code, copiando el link del repositorio para clonarlo localmente mediante gitBash o puedes descargar el Zip para luego descomprimirlo en tu computadora.

<div align="center">

![image](https://github.com/orimarselasirg/tweetApp/assets/84402210/c79fb516-8ae4-42af-bb23-fbf916fde13b)


</div>

<br>
<br>
<h1>Para instalar 🛠 </h1>

Llegó el momento para instalar el proyecto en tu equipo.

Abre la consola de tu editor y ejecuta los siguientes comandos.

```
npm install o yarn
```

Con este comando descargamos e instalamos todas las dependencias que utilizamos en el proyecto de forma automática. El tiempo de este proceso depende de tu conexión a internet y del poder del procesamiento de tu ordenador, ten paciencia, puede tardar unos minutos.

Después, necesitarás crear un archivo bajo el nombre ".env" (sin comillas) con la siguiente información:

```
# DUMMY POST API
VITE_API_BASE_URL=
VITE_APP_ID=

# AUTH0
VITE_AUTH0_DOMAIN=
VITE_AUTH0_CLIENT_ID=
```
Los valores que irán dentro de cada variable serán enviados por correo electrónico, ya que es información sensible.
<br>
<br>


Luego, para iniciar la aplicación en tu navegador deberás ejecutar la siguiente línea de código en consola:

```
npm start o yarn dev
```

Este comando busca y ejecuta los scripts contenidos en el archivo que se denomina package.json, automáticamente desplegará la aplicación en su navegador predeterminado por el sistema en la dirección [http://localhost:5173](http://localhost:5173/) , este proceso puede demorar unos minutos.

Puedes realizar cambios en el código, y al ser guardados notarás que tu navegador se refrescará con los mismos.

<br>
<br>
<h1>Ahora a navegar 🏄</h1>

- **Inicio**

Al iniciar la aplicación web te encontrarás una pantalla para poder loguearte, el sistema de login utlizado es a traves de la API de Auth0 el cual permite un sistema de login usando cualquier correo y contraseña o a través de Google.

Este sistema de login permite la validación con el token que genera el login

Ya en este punto se abrirá una ventana de autenticación, la que recomiendo que completes, así podrás acceder a todas las funcionalidades de la app.

<div align="center">

![image](https://github.com/orimarselasirg/tweetApp/assets/84402210/c377e983-0fae-4098-9d2f-74d7174ab1f0)

![image](https://github.com/orimarselasirg/tweetApp/assets/84402210/be5452a4-93a0-4cd8-a582-138f19e95cd1)

</div>

<div align="center">

![](./Readme/Aspose.Words.ea102fbd-e677-478a-991b-66b51ee3534b.005.png)

</div>

- **Home**

En esta pantalla se encontraran los diferentes post que se trae de la API, se mostraran de manera paginada con 15 elementos, y al llegar la final del scroll, de habilita el botón para cargar más post.

<div align="center">

![image](https://github.com/orimarselasirg/tweetApp/assets/84402210/c8d2bacd-f687-4815-8d29-4b0e3b991f7c)


</div>

En el header(Cabecera) se podrá observar el logo de la app, los datos del usuario logueado y un searchbar que permitirá buscar por los tags que contengan los posts.

<div align="center">

![image](https://github.com/orimarselasirg/tweetApp/assets/84402210/68a08ea2-3148-4789-ae2f-d7dc7c3613c9)

</div>

- **Post**

En cada post podrás ver una foto y nombre del usuario, y la fecha de publicación del post, además de ver el contenido del post, la cantidad de likes y comentario de cada post.

<div align="center">

![image](https://github.com/orimarselasirg/tweetApp/assets/84402210/a72db453-54c4-4e2b-b70a-bb295f6a0f3f)

</div>

- **Detalles de usuario del post**

Al hacer clic en la foto o nombre del usuario que hizo el post, se abrirá un modal donde podrás encontrar todos los datos del usuario que realizo el post, incluido la cantidad de post realizados por el usuario.

<div align="center">

![image](https://github.com/orimarselasirg/tweetApp/assets/84402210/84447274-1c65-4b0e-8a36-9b0a64a652b9)

</div>

- **Comentarios**

Cuando le das clic a los comentarios, se abre un modal donde podrás ver todos los comentarios asociados al post, la foto y nombre del usuario que realiza el post y la fecha en que se realizó el post.

<div align="center">

![image](https://github.com/orimarselasirg/tweetApp/assets/84402210/283edd7c-10d5-4de2-9097-966011eef59b)

</div>

- **Busqueda**

En el header se encuentra la barra de búsqueda, el cual genera un búsqueda de los post en pantalla, según las coincidencias en el tag buscado, cuando se le da clic en la lupa, cuando se borra la última letra del input, se vuelve a mostrar todos los posts.

<div align="center">

![image](https://github.com/orimarselasirg/tweetApp/assets/84402210/490c828a-9ce2-4f7c-8964-b756f039c160)

</div>

- **Logout**

Cuando se le da clic a la foto del perfil del usuario logueado, se abre un menú donde el usuario podrá cerrar sesión, esta acción cierra la sesión, destruye el token, y vuelve a la pantalla de inicio.

<div align="center">

![image](https://github.com/orimarselasirg/tweetApp/assets/84402210/5b2dcca6-9f78-4811-8523-1c8b96c4f8e8)

</div>


<br>
<br>
<h1>Tecnologías utilizadas 👨‍💻</h1>

- Typescript
- Vite
- React
- Html
- Css
- figma

<br>
<br>
<h1>Desarrollador 🌄</h1>

<div style="display:flex; align-items:center; width: 100%">


![image](https://github.com/orimarselasirg/tweetApp/assets/84402210/5bf5472a-9067-4b9f-b898-a052d087300a)

<div >

- [Ramiro Grisales](<https://github.com/orgs/delosandesdevs/people/orimarselasirg>)

</div>

</div>

<br><br>



<div align="center">

![](./Readme/Aspose.Words.ea102fbd-e677-478a-991b-66b51ee3534b.008.png)

**Ramiro Grisales**
</div>
