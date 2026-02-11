# Estrategia de Renderizado

## Tipo de Renderizado

Esta página utiliza **Server-Side Rendering (SSR dinámico)** mediante
**Server Components en Next.js 16**.

El filtrado de productos se realiza en el servidor a partir del
parámetro `searchParams`. Cada vez que el usuario escribe en el campo de
búsqueda:

1.  El componente **SearchBar** actualiza la URL con `?search=...`
2.  Next.js detecta el cambio en `searchParams`
3.  El Server Component se vuelve a ejecutar
4.  El servidor envía el HTML ya filtrado

Esto garantiza que el contenido renderizado siempre provenga del
servidor.

## ¿Por qué SSR en este caso?

Se eligió SSR por las siguientes razones:

- Mejor escalabilidad cuando el número de productos crezca
- SEO óptimo (el HTML ya viene filtrado desde el servidor)
- Seguridad (el filtrado ocurre en "backend")
- Arquitectura preparada para migrar a base de datos o API

Aunque actualmente los datos provienen de un JSON local, la arquitectura
permite cambiar fácilmente a una fuente externa sin modificar la lógica
principal.

## ¿Se usa ISR?

**No.**

No se utiliza **Incremental Static Regeneration (ISR)** porque:

- Los datos provienen de un JSON local incluido en el build.
- No existe una fuente externa que requiera revalidación.
- No hay operaciones de `fetch` que puedan beneficiarse del cache
  incremental.

Agregar `revalidate` en este contexto no aporta beneficios reales.

# Escenarios de Escalabilidad

## Escenario Pequeño

Mantener SSR dinámico es suficiente.

**Ventajas:**

- Simplicidad
- Bajo costo computacional
- Código limpio y mantenible

## Escenario Mediano (miles de productos)

**Recomendado:**

- Migrar datos a API o base de datos
- Usar `fetch` con `revalidate`
- Implementar ISR

**Beneficio:**

- Cache inteligente
- Menor carga en el servidor
- Mejor rendimiento bajo tráfico

## Escenario Grande (decenas de miles de productos)

**Recomendado:**

- Búsqueda directamente en base de datos
- Índices optimizados
- Paginación server-side

En este punto, el filtrado debe ejecutarse a nivel de base de datos, no
en memoria.

# Arquitectura Híbrida

La aplicación combina:

- Server Components para lógica y filtrado
- Client Components para interactividad (SearchBar y Cards)
- Re-render basado en URL
