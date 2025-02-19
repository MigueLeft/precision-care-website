import { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu} className="hamburger">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          class="lucide lucide-align-justify"
        >
          <path d="M3 12h18" />
          <path d="M3 18h18" />
          <path d="M3 6h18" />
        </svg>
      </button>
      {isOpen && (
        <ul className="flex flex-col gap-5 font-semibold text-sm">
          <li>
            <a href="/#why">Nosotros</a>
          </li>
          <li>
            <a href="/#services">Lineas de servicio</a>
          </li>
          <li>
            <a href="/#solutions">Soluciones</a>
          </li>
          <li>
            <a href="/#team">Nuestro equipo</a>
          </li>
          <li>
            <a href="/#health">Salud para migrantes</a>
          </li>
          <li>
            <a href="/#faq">Preguntas</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MobileMenu;
