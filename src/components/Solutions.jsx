import { useState } from "react";
import useFormStore from "../store/useFormStore";

const programSteps = [
  {
    id: 1,
    title: "Medicina",
    content:
      "Manejo especializado y personalizado. Tratamientos basados en evidencia científica, enfocados en optimizar tu salud con intervenciones precisas, dedicamos a brindarte el tiempo necesario para resolver tus problemas de salud de manera integral.",
    features: [
      "Manejo especializado y personalizado",
      "Tratamientos basados en evidencia científica",
      "Intervenciones precisas",
      "Optimización de la salud",
    ],
    image: "/img/medicina.png",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 sm:w-8 sm:h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 11v4" />
        <path d="M14 13h-4" />
        <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <path d="M18 6v14" />
        <path d="M6 6v14" />
        <rect width="20" height="14" x="2" y="6" rx="2" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Nutrición",
    content:
      "Planes nutricionales adaptados a tus necesidades específicas. Evaluación y prescripción personalizada para transformar tu alimentación.",
    features: [
      "Planes de nutrición personalizados, adaptados a tus necesidades específicas",
      "Disponibilidad de atención 16 horas al día, 7 días a la semana",
      "Consultas individuales de una hora para atención detallada y personalizada",
    ],
    image: "/img/nutricion.jpg",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 sm:w-8 sm:h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46" />
        <path d="M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z" />
        <path d="M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Ejercicio",
    content:
      "Programas de actividad física diseñados según tu condición física. Diagnósticos precisos y seguimiento objetivo para mejorar tu rendimiento.",
    features: [
      "Evaluamos tu nivel de aptitud física con diagnósticos precisos",
      "Diseñamos programas de actividad física personalizados",
      "Supervisamos tu progreso",
      "Estamos disponibles para ti 16 horas al día, 7 días a la semana",
      "Ofrecemos consultas individuales de una hora, asegurando atención detallada y personalizada",
    ],
    image: "/img/ejercicio.jpg",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 sm:w-8 sm:h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.4 14.4 9.6 9.6" />
        <path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z" />
        <path d="m21.5 21.5-1.4-1.4" />
        <path d="M3.9 3.9 2.5 2.5" />
        <path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Psicología",
    content:
      "Ofrecemos intervenciones precisas para mejorar tu salud mental, indispensable para el control de diversas enfermedades crónicas, brindado el tiempo necesario para resolver tus problemas",
    features: [
      "Manejo del estrés, ansiedad y depresión",
      "Mejorar la higiene y calidad del sueño",
      "Control de adicciones",
      "Detección y tratamiento de trastornos de conducta alimentaria",
      "Terapia cognitivo-conductual",
    ],
    image: "/img/psicologo.webp",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 sm:w-8 sm:h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
        <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
        <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
        <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
        <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
        <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
        <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
        <path d="M6 18a4 4 0 0 1-1.967-.516" />
        <path d="M19.967 17.484A4 4 0 0 1 18 18" />
      </svg>
    ),
  },
];

export default function Solutions() {
  const [activeTab, setActiveTab] = useState(1);
  const { setValues, handleSelect } = useFormStore();

  const addProgram = (active) => {
    if (active === 1) {
      setValues(new Set(["medicina"]));
      handleSelect(new Set(["medicina"]));
    }
    if (active === 2) {
      setValues(new Set(["nutricion"]));
      handleSelect(new Set(["nutricion"]));
    }
    if (active === 3) {
      setValues(new Set(["ejercicio"]));
      handleSelect(new Set(["ejercicio"]));
    }
    if (active === 4) {
      setValues(new Set(["psicologia"]));
      handleSelect(new Set(["psicologia"]));
    }
  };

  return (
    <section className="bg-main/90">
      <div
        id="solutions"
        className="hidden lg:block scroll-mt-[90px] lg:scroll-mt-[100px] max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-14 py-8 lg:py-16"
      >
        {/* Header */}
        <div className="flex flex-col items-center gap-3 font-semibold mb-8 lg:mb-12">
          <h3 className="text-xl sm:text-2xl text-[#009aff]">
            Nuestras soluciones
          </h3>
          <p className="text-2xl sm:text-3xl lg:text-4xl text-center px-4 text-white">
            Soluciones especializadas en tu salud y bienestar
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 lg:gap-12 text-white text-lg mb-8 lg:mb-12">
          {programSteps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveTab(step.id)}
              className={`group flex items-center z-10 h-14 gap-4 sm:gap-8 rounded-lg w-full relative transition-all duration-300 ease-in-out
                ${
                  activeTab === step.id
                    ? "bg-main text-white transform scale-[1.02] sm:scale-105"
                    : "bg-white text-black hover:bg-main hover:text-white hover:scale-[1.01] sm:hover:scale-102"
                }`}
            >
              <div
                className={`${
                  activeTab === step.id
                    ? "flex items-center rounded-l-lg bg-[#009aff] h-full"
                    : "text-[#009aff] group-hover:flex group-hover:items-center group-hover:rounded-l-lg group-hover:bg-[#009aff] group-hover:h-full group-hover:text-white"
                }`}
              >
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-6 h-6 sm:w-8 sm:h-8 ${
                    activeTab === step.id
                      ? "mx-3 sm:mx-5"
                      : "ml-4 sm:ml-9 group-hover:mx-3 group-hover:sm:mx-5"
                  }`}
                  viewBox="0 0 2048 2048"
                >
                  <path
                    fill="currentColor"
                    d="M1728 640q66 0 124 25t101 69t69 102t26 124q0 57-19 109t-53 93t-81 71t-103 41v102q0 89-22 173t-62 160t-98 137t-129 107t-155 70t-174 25q-91 0-174-25t-154-70t-129-107t-98-137t-63-159t-22-174v-229q-123-11-218-59T133 962T34 781T0 558V0h320q26 0 45 19t19 45t-19 45t-45 19H128v430q0 106 29 192t87 147t140 94t192 33q101 0 184-31t141-89t91-140t32-185V128H832q-26 0-45-19t-19-45t19-45t45-19h320v558q0 120-34 223t-99 181t-160 126t-219 59v229q0 107 38 205t107 174t162 120t205 45q111 0 204-45t162-120t107-173t39-206v-102q-56-12-103-41t-81-70t-53-94t-19-109q0-66 25-124t68-101t102-69t125-26m0 512q40 0 75-15t61-41t41-61t15-75t-15-75t-41-61t-61-41t-75-15t-75 15t-61 41t-41 61t-15 75t15 75t41 61t61 41t75 15"
                  />
                </svg> */}
                <div
                  className={`${
                    activeTab === step.id
                      ? "mx-3 sm:mx-5"
                      : "ml-4 sm:ml-9 group-hover:mx-3 group-hover:sm:mx-5"
                  }`}
                >
                  {step.icon}
                </div>
              </div>
              <p className="font-bold text-sm sm:text-base">{step.title}</p>
              {activeTab === step.id && (
                <div className="absolute -bottom-2 left-1/2 w-5 h-5 sm:w-7 sm:h-7 rotate-45 bg-main -z-10 -translate-x-1/2" />
              )}
            </button>
          ))}
        </div>

        <div className="flex justify-between gap-2">
          {/* Content */}
          <div className="bg-white border border-slate-400 rounded-lg w-[80%] min-h-[300px] sm:min-h-[400px] lg:max-h-[406px] p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              {/* Text Content */}
              <div className="flex-1 space-y-4 order-2 lg:order-1">
                <h4 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-black">
                  {programSteps[activeTab - 1].title}
                </h4>
                <p className="text-gray-700 text-sm sm:text-base text-justify">
                  {programSteps[activeTab - 1].content}
                </p>
                <ul className="text-gray-700 text-base list-disc px-4">
                  {programSteps[activeTab - 1]?.features?.map(
                    (feature, index) => (
                      <li key={index}>{feature}</li>
                    )
                  )}
                </ul>
              </div>

              {/* Image */}
              <div className="w-full lg:w-1/2 h-[200px] sm:h-[300px] lg:h-auto order-1 lg:order-2 lg:justify-items-end">
                <img
                  src={programSteps[activeTab - 1].image}
                  alt={`Imagen ${programSteps[activeTab - 1].title}`}
                  className="w-full lg:w-auto h-full lg:h-[340px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="bg-white border border-slate-400 rounded-lg w-[20%] lg:w-1/3 p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
            <div>
              <div className="bg-[#009aff]/10 p-3 rounded-lg mb-4">
                <h4 className="text-xl font-bold text-center text-[#009aff]">
                  Solicita tu consulta
                </h4>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-[#009aff]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span className="text-gray-700">
                    Evaluación personalizada
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-[#009aff]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span className="text-gray-700">
                    60 minutos de atención especializada
                  </span>
                </div>
              </div>

              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-3xl font-bold text-black">$100</span>
                  <span className="text-gray-500"></span>
                </div>
                <p className="text-gray-500 text-sm">por consulta</p>
              </div>
            </div>

            <a
              href="#contact"
              onClick={() => addProgram(activeTab)}
              className="text-center w-full bg-main hover:bg-main/80 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-300"
            >
              Agendar ahora
            </a>
          </div>
        </div>

        <p className="text-white mt-5">
          Estas soluciones pueden ser tanto individuales como en programas
          diseñados estrategicamente para lograr sus metas.{" "}
          <a href="/program" className="font-bold underline">
            Entra aquí
          </a>{" "}
          para ver conocer más sobre nuestras estrategias
        </p>
      </div>
      <div
        id="program"
        className="block lg:hidden scroll-mt-[90px] lg:scroll-mt-[100px] max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-14 py-8 lg:py-16"
      >
        {/* Header */}
        <div className="flex flex-col items-center gap-3 font-semibold mb-8 lg:mb-12">
          <h3 className="text-xl sm:text-2xl text-[#009aff]">
            Nuestras soluciones
          </h3>
          <p className="text-2xl sm:text-3xl lg:text-4xl text-center px-4 text-white">
            Soluciones especializadas en tu salud y bienestar
          </p>
        </div>

        {/* Mobile Accordion / Desktop Tabs */}
        <div className="flex flex-col lg:flex-row justify-center gap-4 lg:gap-12 text-lg">
          {/* Tabs Container */}
          <div className="flex flex-col lg:flex-row w-full gap-4 lg:gap-12">
            {programSteps.map((step) => (
              <div key={step.id} className="flex flex-col">
                {/* Tab Button */}
                <button
                  onClick={() => setActiveTab(step.id)}
                  className={`flex items-center h-14 gap-4 sm:gap-8 rounded-lg w-full relative transition-all duration-300 ease-in-out
                    ${
                      activeTab === step.id
                        ? "bg-main text-white transform scale-[1.02] lg:scale-105"
                        : "bg-white text-black hover:bg-gray-100 hover:scale-[1.01] lg:hover:scale-102"
                    }`}
                >
                  <div
                    className={`${
                      activeTab === step.id
                        ? "flex items-center rounded-l-lg bg-[#009aff] h-full"
                        : "text-[#009aff]"
                    }`}
                  >
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-6 h-6 sm:w-8 sm:h-8 ${
                        activeTab === step.id ? "mx-3 sm:mx-5" : "ml-4 sm:ml-9"
                      }`}
                      viewBox="0 0 2048 2048"
                    >
                      <path
                        fill="currentColor"
                        d="M1728 640q66 0 124 25t101 69t69 102t26 124q0 57-19 109t-53 93t-81 71t-103 41v102q0 89-22 173t-62 160t-98 137t-129 107t-155 70t-174 25q-91 0-174-25t-154-70t-129-107t-98-137t-63-159t-22-174v-229q-123-11-218-59T133 962T34 781T0 558V0h320q26 0 45 19t19 45t-19 45t-45 19H128v430q0 106 29 192t87 147t140 94t192 33q101 0 184-31t141-89t91-140t32-185V128H832q-26 0-45-19t-19-45t19-45t45-19h320v558q0 120-34 223t-99 181t-160 126t-219 59v229q0 107 38 205t107 174t162 120t205 45q111 0 204-45t162-120t107-173t39-206v-102q-56-12-103-41t-81-70t-53-94t-19-109q0-66 25-124t68-101t102-69t125-26m0 512q40 0 75-15t61-41t41-61t15-75t-15-75t-41-61t-61-41t-75-15t-75 15t-61 41t-41 61t-15 75t15 75t41 61t61 41t75 15"
                      />
                    </svg> */}
                    <div
                      className={`${
                        activeTab === step.id ? "mx-3 sm:mx-5" : "ml-4 sm:ml-9"
                      }`}
                    >
                      {step.icon}
                    </div>
                  </div>
                  <p className="font-bold text-sm sm:text-base">{step.title}</p>
                  {/* Indicator for desktop */}
                  {activeTab === step.id && (
                    <div className="hidden lg:block absolute -bottom-2 left-1/2 w-7 h-7 rotate-45 bg-main -z-10 -translate-x-1/2" />
                  )}
                </button>

                {/* Mobile Accordion Content */}
                <div
                  className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out
                  ${
                    activeTab === step.id
                      ? "opacity-100 mt-4"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="flex flex-col gap-2">
                    <div className="bg-white border border-slate-400 rounded-lg w-full p-4">
                      <div className="flex flex-col gap-4">
                        {/* Text Content */}
                        <div className="flex flex-col gap-2">
                          <h4 className="text-xl font-semibold text-black mb-2">
                            {step.title}
                          </h4>
                          <p className="text-gray-700 text-base text-justify">
                            {step.content}
                          </p>
                          <ul className="text-gray-700 text-base list-disc px-6">
                            {step?.features?.map((feature, index) => (
                              <li key={index}>{feature}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Image */}
                        <div className="w-full h-[300px] lg:h-[500px]">
                          <img
                            src={step.image}
                            alt={`Imagen ${step.title}`}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-slate-400 rounded-lg w-full lg:w-1/3 p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
                      <div>
                        <div className="bg-[#009aff]/10 p-3 rounded-lg mb-4">
                          <h4 className="text-xl font-bold text-center text-[#009aff]">
                            Solicita tu consulta
                          </h4>
                        </div>

                        <div className="space-y-4 mb-6">
                          <div className="flex items-center gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5 text-[#009aff]"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                              <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                            <span className="text-gray-700">
                              Evaluación personalizada
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5 text-[#009aff]"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                              <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                            <span className="text-gray-700">
                              60 minutos de atención especializada
                            </span>
                          </div>
                        </div>

                        <div className="text-center mb-6">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-3xl font-bold text-black">
                              $100
                            </span>
                            <span className="text-gray-500"></span>
                          </div>
                          <p className="text-gray-500 text-sm">por consulta</p>
                        </div>
                      </div>

                      <a
                        href="#contact"
                        onClick={() => addProgram(activeTab)}
                        className="text-center w-full bg-main hover:bg-main/80 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-300"
                      >
                        Agendar ahora
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Content */}
          <div className="hidden lg:block bg-white border border-slate-400 rounded-lg w-full min-h-[400px] p-8">
            <div className="flex gap-8">
              {/* Text Content */}
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-4">
                  {programSteps[activeTab - 1].title}
                </h4>
                <p className="text-gray-700 text-justify">
                  {programSteps[activeTab - 1].content}
                </p>
              </div>

              {/* Image */}
              <div className="w-1/2">
                <img
                  src={programSteps[activeTab - 1].image}
                  alt={`Imagen ${programSteps[activeTab - 1].title}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <p className="text-white mt-5">
          Estas soluciones pueden ser tanto individuales como en programas
          diseñados estrategicamente para lograr sus metas.{" "}
          <a href="/program" className="font-bold underline">
            Entra aquí
          </a>{" "}
          para ver conocer más sobre nuestras estrategias
        </p>
      </div>
    </section>
  );
}
