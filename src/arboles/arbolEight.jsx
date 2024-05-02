import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism"; // Importamos el estilo Dracula
function ArbolEight() {
  return (
    <div className="grid md:grid-cols-2 gap-2  bg-white rounded-md ">
      <section className="border grid gap-4 border-zinc-200 rounded-md shadow-md p-4">
        <p >Dado un árbol binario de números enteros ordenados, se desea un subalgoritmo que busque un elemento con un proceso recursivo.</p>

        <h1 className=" font-semibold">Realizar la busqueda:</h1>
        <div className="flex">
            <input type="number"
            placeholder="Ingrese un número"
             className=" border rounded-md bg-gray-200 px-4" />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Buscar</button>
        </div>
      </section>
      <section className="border border-zinc-200 rounded-md shadow-md p-4">
        <h1 className="text-xl text-center">Arbol Binario  </h1>
      </section>
      <section className="md:col-span-2 bg-zinc-950 border px-4 pb-4 text-white border-zinc-200 rounded-md shadow-md"></section>
    </div>
  );
}

export default ArbolEight;
