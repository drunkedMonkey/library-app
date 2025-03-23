# Library App

Este es un proyecto de una librería de componentes en React, creada con **Vite** y **Storybook**. La librería incluye componentes reutilizables como `Button`, `Input`, y más, que pueden ser documentados y probados fácilmente usando Storybook.

## 🚀 Instalación

Sigue estos pasos para clonar y ejecutar el proyecto en tu máquina local.

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/drunkedMonkey/library-app.git
   ```
2. **Navega al directorio del proyecto**:
   ```bash
   cd tu-repositorio
   ```
3. **Instala las dependencias**:
   ```bash
   npm install
   ```
4. **Ejecuta el servidor de desarrollo**:
   ```bash
   npm run dev
   ```
5. **Abre Storybook para ver los componentes**:
   ```bash
   npm run storybook
   ```

## 🛠️ Componentes

La librería incluye los siguientes componentes:

### **Button**

Un botón personalizable con soporte para variantes, colores personalizados, y más.

#### **Props**

| Prop       | Tipo               | Descripción                                      | Valor Predeterminado |
|------------|--------------------|--------------------------------------------------|----------------------|
| `children` | `React.ReactNode`  | Contenido del botón.                             | -                    |
| `onClick`  | `() => void`       | Función que se ejecuta al hacer clic.            | -                    |
| `disabled` | `boolean`          | Deshabilita el botón.                            | `false`              |
| `variant`  | `'primary' | 'secondary'` | Variante del botón.                          | `'primary'`          |
| `color`    | `string`           | Color de fondo personalizado (en formato hexadecimal). | -                    |
| `textColor`| `string`           | Color del texto personalizado (en formato hexadecimal). | -                    |
| `fontSize` | `string`           | Tamaño de la fuente (por ejemplo, `1.2rem`).     | `'1rem'`             |

#### **Ejemplo de Uso**

```tsx
<Button
  variant="primary"
  color="#ff6347"
  textColor="#ffffff"
  fontSize="1.2rem"
  onClick={() => alert('Botón clickeado!')}
>
  Haz clic aquí
</Button>
```
