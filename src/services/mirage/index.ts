import { createServer, Model, Factory, Response } from 'miragejs';
import faker from 'faker';

type User = {
  name: string;
  email: string;
  created_at: string;
};

function mirageServer() {
  createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },
    factories: {
      user: Factory.extend({
        name(index: number) {
          return `José Eduardo ${index + 1}`;
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      }),
    },
    seeds(server) {
      server.createList('user', 200);
    },
    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get('/users', function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams;

        const totalCount = schema.all('user').length;

        const start = (Number(page) - 1) * Number(per_page);
        const end = start + Number(per_page);

        const users = this.serialize(schema.all('user')).users.slice(
          start,
          end
        );

        return new Response(
          200,
          { 'x-total-count': String(totalCount) },
          { users }
        );
      });

      this.post('/users');

      this.namespace = '';
      this.passthrough();
    },
  });
}

export default mirageServer;
