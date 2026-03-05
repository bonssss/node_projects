import Fastify from "fastify"; 
import fastifyFormbody from "@fastify/formbody"; 
import fastifyView from "@fastify/view"; 
import handlebars from "handlebars"; 

const app = Fastify(); 
const PORT = 3000; 

await app.register(fastifyFormbody); 
await app.register(fastifyView, { 
  engine: { handlebars },
  root: "views",
});

app.get("/", async (request, reply) => { 
  reply.send("Welcome!"); 
});

try {
  const address = await app.listen({ port: PORT, host: "127.0.0.1" }); 
  console.log(`App listening on ${address}`);
} catch (err) {
  console.error(err);
  process.exit(1);
}