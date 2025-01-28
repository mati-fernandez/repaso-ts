# Comenzando

- Creamos el index.html que incluya un script con su src = "script.js"
- Creamos un archivo script.ts el cual NO es levantado nativamente por HTML
- Escribimos algo en JS en el script.js como `console.log("Hola mundo en TS")`
- Por terminal escribímos "tsc script.ts" para que TypeScript Compiler compile el archivo a "script.js".
- Agregamos un favicon.ico

# Modo observador

Va a estar revisando los cambios automaticamente al guardar para hacer la compilación a JS. 

- Para esto ponemos por terminal `tsc script.ts -w`
- Luego creamos "script2.ts" y vemos que este otro no está siendo escuchado u observado
- Entonces cerramos con ctrl c la escucha actual y hacemos `tsc -init` para inicializar un proyecto TS
- Observamos el archivo tsconfig.json que se creó
- Ahora que es un proyecto TS, podemos volver al modo observardor con `tsc -w` que esta vez observará todos los archivos TS.
- Agragamos al HTML el segundo script y al script2.ts le agregamos también un console.log

# Tipos de dato en TS

## Arrays

Para indicar qué tipo de datos tiene un array se usa la sintaxis:
`const nombres: string[] = ["Juan", María", "Pedro"]`. En este caso se indicó que es un array de strings.

## ENUM
Es un tipo de dato que se suma al usar TS y permiten crear un conjunto de valores constantes y bien definidos.
Ayudan a organizar y hacer más legible el código.
Se usan principalmente para valores que no deberían cambiar, como estados, tipos de error, direcciones, etc.

---

### **1. Enum numérico básico**
Por defecto, los valores de un enum son números que empiezan desde 0.

```ts
enum ROLES {
  ADMIN,     // 0
  EDITOR,    // 1
  VIEWER     // 2
}

console.log(ROLES.ADMIN);   // 0
console.log(ROLES[1]);      // 'EDITOR'
```

---

### **2. Enum numérico con valores personalizados**
Podés asignarles valores específicos a los elementos del enum.

```ts
enum HTTP_STATUS {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401
}

console.log(HTTP_STATUS.OK);          // 200
console.log(HTTP_STATUS.BAD_REQUEST); // 400
```

---

### **3. Enum de cadenas**
Usar strings en lugar de números es útil cuando necesitas valores más descriptivos.

```ts
enum COLORS {
  RED = 'red',
  GREEN = 'green',
  BLUE = 'blue'
}

console.log(COLORS.RED);    // 'red'
console.log(COLORS.GREEN);  // 'green'
```

---

### **4. Usando enums como tipos**
Podés usar un enum para asegurarte de que una variable solo tome valores válidos.

```ts
enum FRUITS {
  APPLE = 'apple',
  BANANA = 'banana',
  ORANGE = 'orange'
}

function eatFruit(fruit: FRUITS) {
  console.log(`Estoy comiendo una ${fruit}.`);
}

eatFruit(FRUITS.APPLE);  // OK
// eatFruit('pineapple'); // ❌ Error: 'pineapple' no está en el enum FRUITS
```

---

### **5. Const enum para optimización**
Con `const enum`, TypeScript reemplaza el valor directamente en el código compilado, evitando referencias extras.

```ts
const enum KEYS {
  ESC = 'Escape',
  ENTER = 'Enter',
  SPACE = 'Space'
}

console.log(KEYS.ENTER); // 'Enter'
```

Código compilado en JS:
```js
console.log('Enter');
```

---

### **6. Enum para un estado**
Simular los estados de un semáforo.

```ts
enum TRAFFIC_LIGHT {
  RED = 'STOP',
  YELLOW = 'CAUTION',
  GREEN = 'GO'
}

function getAction(color: TRAFFIC_LIGHT) {
  switch (color) {
    case TRAFFIC_LIGHT.RED:
      console.log('Detente');
      break;
    case TRAFFIC_LIGHT.YELLOW:
      console.log('Precaución');
      break;
    case TRAFFIC_LIGHT.GREEN:
      console.log('Avanza');
      break;
  }
}

getAction(TRAFFIC_LIGHT.RED);  // Detente
```

---

### **7. Enum híbrido (numérico y cadena)**
Podés combinar números y strings en un mismo enum.

```ts
enum MIXED {
  ZERO,           // 0
  ONE,            // 1
  TWO = 'two',    // 'two'
  THREE = 'three' // 'three'
}

console.log(MIXED.ZERO);   // 0
console.log(MIXED.THREE);  // 'three'
```

---

### **8. Enum como clave-valor inverso**
Los enums numéricos permiten acceder a sus valores tanto por nombre como por número.

```ts
enum DAYS {
  MONDAY = 1,
  TUESDAY,
  WEDNESDAY
}

console.log(DAYS.MONDAY);    // 1
console.log(DAYS[1]);        // 'MONDAY'
```

Los **enums de cadenas no tienen esta propiedad**.

---

### **Ejemplo realista: Tipos de errores**
Un **enum** puede ser ideal para manejar códigos de error o estados.

```ts
enum ERROR_CODES {
  NOT_FOUND = 404,
  UNAUTHORIZED = 401,
  SERVER_ERROR = 500
}

function handleError(code: ERROR_CODES) {
  switch (code) {
    case ERROR_CODES.NOT_FOUND:
      console.log('Recurso no encontrado.');
      break;
    case ERROR_CODES.UNAUTHORIZED:
      console.log('No estás autorizado.');
      break;
    case ERROR_CODES.SERVER_ERROR:
      console.log('Error interno del servidor.');
      break;
  }
}

handleError(ERROR_CODES.NOT_FOUND);  // Recurso no encontrado.
```

# Proyecto Final en React con TS

[Ver](https://mati-fernandez.github.io/repaso-ts/tareas-pendientes-react-ts/) (Ctrl + click or mouse wheel click to open in new tab)