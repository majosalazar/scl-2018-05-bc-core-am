# Secret Party / basado en cifrado César


## El reto 

Desarrollar una aplicación web la cual permita en primera instancia el cifrado de un texto ingresado por el usuario y su posterior descifrado, todo esto en base a una clave numérica ingresada por el usuario, que indica el número de desplazamientos a realizar en el cifrado. 


## Descripción

Este proyecto fue desarrollado considerando el siguiente contexto; entre un grupo de amigas y amigos quieren realizar una fiesta sorpresa a un integrante, piensan planificar todo por WhatsApp ya que es el medio de comunicación más cómodo para ellos, pero no quieren causar sospechas en el amigo en caso de que llegue leer algún mensaje sin querer. Pensando en esto es que se propone la aplicación web 'Secret Party', en ella pueden cifrar y descifrar mensajes en base a una clave numérica. 


## Metodología de trabajo

* Se planificaron todas las tareas necesarios para llegar a desarrollar este proyecto en Trello, lo que permitió la fácil visualización del nivel de avance en cada etapa. 

* El proceso de diseño de este proyecto fue bajo la metodología Agile, lo que permitió una mayor claridad y eficiencia en cada una de las etapas.
 

## Requisitos solicitados:

* elegir cuántas posiciones quiere se desplazar, en este caso es la clave
* insertar un mensaje (texto) a cifrar
* ver el resultado del mensaje cifrado
* insertar un mensaje (texto) a descifrar
* ver el resultado del mensaje descifrado
* debe correr el test 5/5


## Primeros pasos

Puedes revisar un demo de la aplicación en [Secret Party](https://majosalazar.github.io/scl-2018-05-bc-core-am/)

Al ser este un proyecto de código abierto puedes acceder a él de la siguiente forma: 

1. Debes tener un editor de texto funcional. Puede ser; [Visual Studio Code](https://code.visualstudio.com/), [Atom](https://atom.io/), [Sublime Text](https://www.sublimetext.com/), etc.
2. Para ejecutar los comandos a continuación necesitarás una terminal, que permite interpretar las líneas de comando (command-line
   interpreter) así como tener [git](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/scm/01-git)
   instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS,
   ya tienes una _shell_ (terminal) instalada por defecto (y probablemente `git`
   también). Si usas Windows puedes usar [Git bash](https://git-scm.com/download/win),
   aunque recomendaría que consideres probar GNU/Linux.
3. Ya estás listo para [Clonar](https://help.github.com/articles/cloning-a-repository/) este repositorio con el fin de tener una copia local, puedes obtener el enlace desde el botón verde que está en la esquina superior derecha de tu pantalla.
4. 1ro debes abrir la terminal iniciar git y posicionarte en la carpeta donde quieres que se guarde tu clon, escribir el comando "git clone" y listo! ya tendrás una copia local del proyecto. 
5. Ya estás listo para explorar el código!


## ¿Como se usa?

La aplicación de usa de forma fácil e intuitiva, debes ingresa el mensaje que quieres cifrar en el cuadro de texto que se indica, luego muy importante escoger un numero entre el 1 y 1000, el cual será la clave para cifrar el mensaje y luego hacer click en el botón "cifrar", copias el mensaje que te aparece en la zona de resultado y lo envías. OJO *es elemental que le avises a la persona que lo reciba cuál es su clave*. Posteriormente si quieres descifrar un mensaje, haces click en el botón para recargar la página y pegas el mensaje, ingresa la clave y haces click en descifrar y listo !