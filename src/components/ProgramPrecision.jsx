import { useState } from "react";

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
    image:
      "https://www.simbiotia.com/wp-content/uploads/relación-médico-paciente.png",
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
    image: "https://cardiavant.com/wp-content/uploads/nutricionista.jpg",
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
    image:
      "https://colombia-blog.bodytech.co/uploads/post/060031581b4044808e8720ad6e8593df/MEDICO-DEL-DEPORTE-VALORACION_1920x854.jpg",
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
    image:
      "https://cdn0.psicologia-online.com/es/posts/0/5/8/por_que_siento_que_no_avanzo_en_terapia_y_que_hacer_6850_600.webp",
  },
];

export default function ProgramPrecision() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className="bg-main/90">
      <div
        id="program"
        className="hidden lg:block scroll-mt-[90px] lg:scroll-mt-[100px] max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-14 py-8 lg:py-16"
      >
        {/* Header */}
        <div className="flex flex-col items-center gap-3 font-semibold mb-8 lg:mb-12">
          <h3 className="text-xl sm:text-2xl text-[#009aff]">
            Nuestras soluciones
          </h3>
          <p className="text-2xl sm:text-3xl lg:text-4xl text-center px-4 text-white">
            Una solución para múltiples dimensiones
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-6 h-6 sm:w-8 sm:h-8 ${
                    activeTab === step.id ? "mx-3 sm:mx-5" : "ml-4 sm:ml-9 group-hover:mx-3 group-hover:sm:mx-5"
                  }`}
                  viewBox="0 0 2048 2048"
                >
                  <path
                    fill="currentColor"
                    d="M1728 640q66 0 124 25t101 69t69 102t26 124q0 57-19 109t-53 93t-81 71t-103 41v102q0 89-22 173t-62 160t-98 137t-129 107t-155 70t-174 25q-91 0-174-25t-154-70t-129-107t-98-137t-63-159t-22-174v-229q-123-11-218-59T133 962T34 781T0 558V0h320q26 0 45 19t19 45t-19 45t-45 19H128v430q0 106 29 192t87 147t140 94t192 33q101 0 184-31t141-89t91-140t32-185V128H832q-26 0-45-19t-19-45t19-45t45-19h320v558q0 120-34 223t-99 181t-160 126t-219 59v229q0 107 38 205t107 174t162 120t205 45q111 0 204-45t162-120t107-173t39-206v-102q-56-12-103-41t-81-70t-53-94t-19-109q0-66 25-124t68-101t102-69t125-26m0 512q40 0 75-15t61-41t41-61t15-75t-15-75t-41-61t-61-41t-75-15t-75 15t-61 41t-41 61t-15 75t15 75t41 61t61 41t75 15"
                  />
                </svg>
              </div>
              <p className="font-bold text-sm sm:text-base">{step.title}</p>
              {activeTab === step.id && (
                <div className="absolute -bottom-2 left-1/2 w-5 h-5 sm:w-7 sm:h-7 rotate-45 bg-main -z-10 -translate-x-1/2" />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white border border-slate-400 rounded-lg w-full min-h-[300px] sm:min-h-[400px] lg:max-h-[406px] p-4 sm:p-6 lg:p-8">
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
            <div className="w-full lg:w-1/2 h-[200px] sm:h-[300px] lg:h-auto order-1 lg:order-2">
              <img
                src={programSteps[activeTab - 1].image}
                alt={`Imagen ${programSteps[activeTab - 1].title}`}
                className="w-full lg:w-auto h-full lg:h-[340px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        id="program"
        className="block lg:hidden scroll-mt-[90px] lg:scroll-mt-[100px] max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-14 py-8 lg:py-16"
      >
        {/* Header */}
        <div className="flex flex-col items-center gap-3 font-semibold mb-8 lg:mb-12">
          <h3 className="text-xl sm:text-2xl text-[#009aff]">
            Nuestras soluciones
          </h3>
          <p className="text-2xl sm:text-3xl lg:text-4xl text-center px-4 text-white">
            Una solución para múltiples dimensiones
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
                    <svg
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
                    </svg>
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
      </div>
    </section>
  );
}
