// Fetch API con Async Await

const url = "https://jsonplaceholder.typicode.com/comments";

const consultarAPI = async () => {
  const respuesta = await (await fetch(url)).json(); // await bloque la siguiente linea hasta que esta esté ejecutada
  const resultado = await respuesta.json();
  resultado.forEach((comentario) => {
    console.log(comentario);
  });
};

const cristian = async () => {
  try {
    const cris = await promesa();
  } catch (ex) {
    console.log(ex);
  }
  console.log(cris);
};

const promesa = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        user: "cristian",
        rol: "admin",
      });
    }, 2000);
  });
};

consultarAPI();
