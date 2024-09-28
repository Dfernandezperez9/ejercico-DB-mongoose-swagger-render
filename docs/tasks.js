const SWAGGER_TASKS = {
    paths: {
      '/create': {
        post: {
          summary: 'Crear una nueva tarea',
          description: 'Crear una nueva tarea con el estado "no completada"',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Task' },
              },
            },
          },
          responses: {
            201: {
              description: 'Tarea creada con éxito',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/Task' },
                },
              },
            },
            500: {
              description: 'Error al crear la tarea',
            },
          },
        },
      },
      '/': {
        get: {
          summary: 'Obtener todas las tareas',
          description: 'Obtener todas las tareas existentes',
          responses: {
            200: {
              description: 'Tareas obtenidas con éxito',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: { $ref: '#/components/schemas/Task' },
                  },
                },
              },
            },
            500: {
              description: 'Error al obtener las tareas',
            },
          },
        },
      },
      '/markAsCompleted/{_id}': {
        put: {
          summary: 'Marcar una tarea como completada',
          description: 'Marcar una tarea como completada según su ID',
          parameters: [
            {
              in: 'path',
              name: '_id',
              required: true,
              schema: { type: 'string' },
            },
          ],
          responses: {
            200: {
              description: 'Tarea actualizada con éxito',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/Task' },
                },
              },
            },
            500: {
              description: 'Error al actualizar la tarea',
            },
          },
        },
      },
      '/id/{_id}': {
        delete: {
          summary: 'Eliminar una tarea',
          description: 'Eliminar una tarea según su ID',
          parameters: [
            {
              in: 'path',
              name: '_id',
              required: true,
              schema: { type: 'string' },
            },
          ],
          responses: {
            200: {
              description: 'Tarea eliminada con éxito',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/Task' },
                },
              },
            },
            500: {
              description: 'Error al eliminar la tarea',
            },
          },
        },
      },
    },
  };
  
  module.exports = SWAGGER_TASKS;