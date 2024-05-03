import React from "react";

function Menu() {
  return (
    <header className="bg-gradient-to-r from-blue-950 to-blue-950 grid grid-cols-2 top-0 w-full h-screen justify-center items-center px-4 md:px-12 py-6 shadow-lg">
      <div className="flex justify-center items-center">
        <img
          className="w-64 object-contain rounded-lg"
          src="https://www.upds.edu.bo/wp-content/uploads/2020/10/upds_logo-1-1-1.png"
          alt="UPDS Logo"
        />
      </div>
      <div className="bg-white border border-gray-300 p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-8 text-blue-800 text-center">
          Proyecto Final - Ejercicio #1
        </h1>
        <ul className="text-lg text-gray-700">
          <li className="mb-4">
            <strong>Materia:</strong> Estructura de datos
          </li>
          <li className="mb-4">
            <strong>Docente:</strong> Magaly Meneses Rivera
          </li>
          <li className="mb-4">
            <strong>Carrera:</strong> Ingeniería en Sistemas
          </li>
          <li>
            <strong>Integrantes:</strong>
            <ul className="ml-4 text-base list-disc">
              <li>Celso Franciscano Choque</li>
              <li>Jose Rodrigo Jimenez Huanca</li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Menu;
