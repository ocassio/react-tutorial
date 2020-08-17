import { Server } from "miragejs";

export function createServer() {
    return new Server({
        environment: "development",
        routes() {
            this.get('/api/todos', () => {
                return [
                    {
                        id: 1,
                        name: 'Item 1',
                        done: false
                      },
                      {
                        id: 2,
                        name: 'Item 2',
                        done: true
                      }
                ];
            }, { timing: 2000 })
        }
    })
}
