function Menu() {
  return (
    <header className="bg-white grid grid-cols-2 top-0 w-full px-4 md:px-12">
      <img
        className="w-64"
        src="https://www.upds.edu.bo/wp-content/uploads/2020/10/upds_logo-1-1-1.png"
        alt=""
      />
      <div className="border ">
        <h1>Proyecto Final</h1>
        <ul>
          <li>Materia: Estructura de datos</li>
          <li>Docente: Magaly Meneses</li>
          <li>Carrera: Ingenieria en sistemas</li>
          <li>
            Integrantes:
            <ul>
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
