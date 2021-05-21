# ToDoList
Despliegue: https://alvarosn.github.io/ToDoList/

## Versiones
```
Angular CLI: 11.2.6
Angular CDK: 11.2.9
Angular material: 11.2.9
AngularFire: 6.1.4
Firebase: 9.11.0
```

## Modelo todo
He implementado un modelo que representa las tareas que se van a almacenar en la base de datos. Los objetos todo tienen las siguientes propiedades:
* _tittle_: nombre de la tarea
* _priority_: prioridad de la tarea, que puede ser 1, 2 o 3
* _state_: estado de la tarea, que puede ser 1 (sin empezar), 2 (en proceso) o 3 (finalizada)
* _now_: fecha de creación de la tarea 
* _id_: número único identificador que tendrá cada tarea, cuyo uso se le da a la hora de trabajar con la base de datos


## Base de datos
Para la base de datos he usado la plataforma online de Google Firebase, interactuando con esta a través de un servicio de Angular. En este servicio, nos podemos encontrar con varios métodos para trabajar con la base de datos: obtener el contenido de la base de datos, añadir una nueva tarea, borrar una tarea y las dos últimas funciones son para editar ciertas características de las tareas


## Componentes
La aplicación web cuenta con tres componentes disintos:
* Componente list_: compuesto por el elemento para añadir tareas y la tabla de tareas con las funcionalidades implementadas 
* Componente _history_: compuesto por la lista de tareas competadas
* Componente_edit-form_: es un diálogo, compuesto por un formulario, que se llama desde el componente list y sirve para editar el nombre y la prioridad de las tareas


