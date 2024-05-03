import ArbolOne from "./arboles/arbolOne";
import Menu from "./components/menu";
import ArbolTwo from "./arboles/arbolTwo";
import ArbolThree from "./arboles/arbolThree";
import ArbolFour from "./arboles/arbolFour";
import ArbolFive from "./arboles/arbolFive";
import ArbolSix from "./arboles/arbolSix";
import ArbolSeven from "./arboles/arbolSeven";
import ArbolEight from "./arboles/arbolEight";
import ArbolNine from "./arboles/arbolNine";

function App() {
  return (
    <>
    <Menu />
      <div className="grid gap-8 px-4 md:px-12 pt-20 ">
        <details   className="rounded-md bg-blue-200 pb-4 px-4">
          <summary className="text-lg font-bold mt-4">
            Ejercicio Nº 1 
          </summary>
          <ArbolOne />
        </details>
        <details  className="rounded-md bg-blue-200 pb-4 px-4">
          <summary className="text-lg font-bold mt-4">
          Ejercicio Nº 2 
          </summary>
          <ArbolTwo />
        </details>
        <details   className="rounded-md bg-blue-200 pb-4 px-4">
          <summary className="text-lg font-bold mt-4">
          Ejercicio Nº 3
          </summary>
          <ArbolThree />
        </details>
        <details   className="rounded-md bg-blue-200 pb-4 px-4">
          <summary className="text-lg font-bold mt-4">
          Ejercicio Nº 4
          </summary>
          <ArbolFour />
        </details>
        <details   className="rounded-md bg-blue-200 pb-4 px-4">
          <summary className="text-lg font-bold mt-4">
          Ejercicio Nº 5
          </summary>
          <ArbolFive />
        </details>
        <details open  className="rounded-md bg-blue-200 pb-4 px-4">
          <summary className="text-lg font-bold mt-4">
          Ejercicio Nº 6
          </summary>
          <ArbolSix />
        </details>
        <details  className="rounded-md bg-blue-200 pb-4 px-4">
          <summary className="text-lg font-bold mt-4">
          Ejercicio Nº 7
          </summary>
          <ArbolSeven />
        </details>
        <details  className="rounded-md bg-blue-200 pb-4 px-4">
          <summary className="text-lg font-bold mt-4">
          Ejercicio Nº 8
          </summary>
          <ArbolEight />
        </details>
        <details  className="rounded-md bg-blue-200 pb-4 px-4">
          <summary className="text-lg font-bold mt-4">
          Ejercicio Nº 9
          </summary>
          <ArbolNine />
        </details>
     
      </div>
    </>
  );
}

export default App;
