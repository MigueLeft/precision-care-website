import { useState, useMemo } from "react";
import useFormStore from "../store/useFormStore";

const programSteps = [
  {
    id: 1,
    title: "Medicina",
    titleContent: "Consulta médica",
    content:
      "Médicos especialistas con amplia experiencia te ofrecen una evaluación completa y un manejo basado en evidencia científica. Dedicamos el tiempo necesario para:",
    features: [
      "Análisis a fondo de tus necesidades",
      "Identificación de riesgos y áreas de mejora en tu bienestar",
      "Diagnósticos precisos",
      "Diseño de un plan de tratamiento personalizado.",
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
    titleContent: "Consulta de nutrición",
    content:
      "Especialistas en terapia medica nutricional y nutricionistas te ofrecen una evaluación y prescripción especializada para transformar tu alimentación de forma sostenible y efectiva. Realizamos un diagnóstico completo de tus necesidades nutricionales para diseñar un plan de alimentación personalizado que te ayude a alcanzar tus metas, se ajuste a tu estilo de vida, tus rutinas y te motive a mantener hábitos saludables a largo plazo.",
    image: "/img/nutricion.jpg",
    icon: (
      <svg
        xmlns="http://www.w3.org="
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
    titleContent: "Consulta de ejercicio",
    content:
      "Especialistas en ejercicio y actividad física evaluamos tu aptitud física con herramientas diagnósticas precisas, para diseñar un plan de actividad física adaptado a tus metas, necesidades, preferencias, entorno y momento de vida. Ofrecemos asesoría especializada y supervisamos tu progreso para optimizar tu rendimiento, fomentar la constancia y ayudarte a alcanzar resultados de forma segura, efectiva y sostenible.",
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
    titleContent: "Consulta Psicológica",
    content:
      "Psicólogos especializados crean para ti un espacio confiable para identificar y tratar desajustes psico-emocionales. A través de la terapia cognitivo-conductual, te proporcionamos herramientas personalizadas y efectivas para:",
    features: [
      "Manejar el estrés",
      "Identificar y abordar focos de ansiedad y depresión",
      "Mejorar la calidad del sueño",
      "Tratar adicciones y trastornos de conducta alimentaria",
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
  {
    id: 5,
    title: "Híbrida",
    titleContent: "Consulta Médica y Nutricional",
    content:
      "Si deseas una consulta médica especializada y además llevarte un plan nutricional personalizado. En la primera, recibes un diagnóstico preciso y un plan de tratamiento médico personalizado. Luego, analizamos tus requerimientos nutricionales para diseñar un plan de alimentación que se ajuste a tu estilo de vida, te motive y te ayude a alcanzar tus metas. Todo el abordaje basado en evidencia científica y enfocado en generar cambios sostenibles.",
    image: "/img/psicologo.webp", // Consider changing to a more relevant image for 'Híbrida'
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
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="M9 14h6" />
        <path d="M12 17v-6" />
      </svg>
    ),
  },
];

export default function Solutions() {
  const [activeTab, setActiveTab] = useState(1);
  const { setValues, handleSelect } = useFormStore();

  const addProgram = (tabId) => {
    const programTitle = programSteps.find((step) => step.id === tabId)?.title.toLowerCase();
    if (programTitle) {
      setValues(new Set([programTitle]));
      handleSelect(new Set([programTitle]));
    }
  };

  const activeProgram = useMemo(
    () => programSteps.find((step) => step.id === activeTab),
    [activeTab]
  );

  if (!activeProgram) {
    return null; // Or render a fallback UI
  }

  const getPriceRange = (tabId) => {
    if (tabId === 5) return "120$ - 140$";
    if (tabId === 1) return "70$ - 100$";
    return "40$ - 50$";
  };

  const getConsultationDuration = (tabId) => {
    return tabId === 5 ? "90 - 120 minutos" : "60 minutos";
  };

  return (
    <section className="bg-main/90" aria-labelledby="solutions-heading">
      {/* Desktop View */}
      <div
        id="solutions"
        className="hidden lg:block scroll-mt-[90px] lg:scroll-mt-[100px] max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-14 py-8 lg:py-16"
      >
        {/* Header */}
        <div className="flex flex-col items-center gap-3 mb-8 lg:mb-12">
          <h2 id="solutions-heading" className="text-2xl sm:text-3xl lg:text-4xl text-[#40f7f7] font-bold">
          Nuestras soluciones
          </h2>
          <p className="text-xl sm:text-2xl text-center px-4 text-white font-semibold">
            Soluciones especializadas en tu salud y bienestar
          </p>
        </div>

        {/* Tabs */}
        <div role="tablist" aria-label="Nuestros Servicios" className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 lg:gap-12 text-white text-lg mb-8 lg:mb-12">
          {programSteps.map((step) => (
            <button
              key={step.id}
              role="tab"
              aria-selected={activeTab === step.id}
              aria-controls={`panel-${step.id}`}
              id={`tab-${step.id}`}
              onClick={() => setActiveTab(step.id)}
              className={`group flex items-center z-10 h-14 gap-4 sm:gap-1 rounded-lg w-full relative transition-all duration-300 ease-in-out
                ${activeTab === step.id
                  ? "bg-main text-white transform scale-[1.02] sm:scale-105"
                  : "bg-white text-black hover:bg-main hover:text-white hover:scale-[1.01] sm:hover:scale-102"
                }`}
            >
              <div
                className={`${activeTab === step.id
                  ? "flex items-center rounded-l-lg bg-[#009aff] h-full"
                  : "text-[#009aff] group-hover:flex group-hover:items-center group-hover:rounded-l-lg group-hover:bg-[#009aff] group-hover:h-full group-hover:text-white"
                }`}
              >
                <div className={`mx-3 sm:mx-5`}>
                  {step.icon}
                </div>
              </div>
              <span className={`${activeTab === step.id ? "ml-3" : "group-hover:ml-3"} font-bold text-sm sm:text-base`}>
                {step.title}
              </span>
              {activeTab === step.id && (
                <div className="absolute -bottom-2 left-1/2 w-5 h-5 sm:w-7 sm:h-7 rotate-45 bg-main -z-10 -translate-x-1/2" />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex justify-between gap-2">
          <div
            id={`panel-${activeProgram.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeProgram.id}`}
            className="flex items-center bg-white border border-slate-400 rounded-lg w-[80%] min-h-[300px] sm:min-h-[400px] lg:max-h-[438px] p-4 sm:p-6 lg:p-8"
          >
            <div className="flex flex-row gap-6 lg:gap-8 min-h-[352px]">
              {/* Text Content */}
              <div className="flex-1 space-y-4 order-2 lg:order-1">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-black">
                  {activeProgram.titleContent}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base text-justify">
                  {activeProgram.content}
                </p>
                {activeProgram.features && activeProgram.features.length > 0 && (
                  <ul className="text-gray-700 text-base list-disc px-4">
                    {activeProgram.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Image */}
              <div className="w-full lg:w-1/2 h-[200px] sm:h-[300px] lg:h-auto order-1 lg:order-2 lg:justify-items-end">
                <img
                  src={activeProgram.image}
                  alt={activeProgram.titleContent}
                  className="w-full lg:w-auto h-full lg:h-[340px] object-cover rounded-lg"
                  loading="lazy" // Lazy loading for images
                />
              </div>
            </div>
          </div>
          <div className="bg-white border border-slate-400 rounded-lg w-[20%] lg:w-1/3 p-4 sm:p-6 flex flex-col justify-between">
            <div>
              <div className="bg-[#009aff]/10 p-3 rounded-lg mb-4">
                <h4 className="text-xl font-bold text-center text-[#009aff]">
                  Solicita tu consulta
                </h4>
              </div>

              <div className="space-y-4 mb-4">
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
                  <span className="text-gray-700 text-sm">
                    {getConsultationDuration(activeTab)} de consulta especializada
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
                  <span className="text-gray-700 text-sm">
                    Disponibilidad 16 horas al día, 7 días a la semana
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
                  <span className="text-gray-700 text-sm">
                    Comunicación empática y centrada en nuestros pacientes
                  </span>
                </div>
              </div>

              <div className="text-center mb-4">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-3xl font-bold text-black">
                    {getPriceRange(activeTab)}
                  </span>
                </div>
                <span className="text-gray-500 text-xs">
                  El precio de la consulta puede variar dentro del rango según su región.
                </span>
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

      {/* Mobile View */}
      <div
        id="program"
        className="block lg:hidden scroll-mt-[90px] lg:scroll-mt-[100px] max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-14 py-8 lg:py-16"
      >
        {/* Header */}
        <div className="flex flex-col items-center gap-3 mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#40f7f7] font-bold">
            Nuestras Soluciones de Salud y Bienestar
          </h2>
          <p className="text-xl sm:text-2xl text-center px-4 text-white font-semibold">
            Descubre soluciones especializadas para tu salud integral y bienestar duradero.
          </p>
        </div>

        {/* Mobile Accordion */}
        <div className="flex flex-col lg:flex-row w-full gap-4 lg:gap-12">
          {programSteps.map((step) => (
            <div key={step.id} className="flex flex-col">
              {/* Tab Button */}
              <button
                onClick={() => setActiveTab(step.id)}
                className={`flex items-center h-14 gap-4 sm:gap-8 rounded-lg w-full relative transition-all duration-300 ease-in-out
                  ${activeTab === step.id
                    ? "bg-main text-white transform scale-[1.02] lg:scale-105"
                    : "bg-white text-black hover:bg-gray-100 hover:scale-[1.01] lg:hover:scale-102"
                  }`}
              >
                <div
                  className={`${activeTab === step.id
                    ? "flex items-center rounded-l-lg bg-[#009aff] h-full"
                    : "text-[#009aff]"
                  }`}
                >
                  <div className={`mx-3 sm:mx-5`}>
                    {step.icon}
                  </div>
                </div>
                <span className="font-bold text-sm sm:text-base">{step.title}</span>
              </button>

              {/* Mobile Accordion Content */}
              <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out
                  ${activeTab === step.id
                    ? "opacity-100 mt-4"
                    : "max-h-0 opacity-0"
                  }`}
              >
                <div className="flex flex-col gap-2">
                  <div className="bg-white border border-slate-400 rounded-lg w-full p-4">
                    <div className="flex flex-col gap-4">
                      {/* Text Content */}
                      <div className="flex flex-col gap-2">
                        <h3 className="text-xl font-semibold text-black mb-2">
                          {step.titleContent}
                        </h3>
                        <p className="text-gray-700 text-base text-justify">
                          {step.content}
                        </p>
                        {step.features && step.features.length > 0 && (
                          <ul className="text-gray-700 text-base list-disc px-6">
                            {step.features.map((feature, index) => (
                              <li key={index}>{feature}</li>
                            ))}
                          </ul>
                        )}
                      </div>

                      {/* Image */}
                      <div className="w-full h-[300px] lg:h-[500px]">
                        <img
                          src={step.image}
                          alt={step.titleContent}
                          className="w-full h-full object-cover rounded-lg"
                          loading="lazy" // Lazy loading for images
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-slate-400 rounded-lg w-full p-4 sm:p-6 flex flex-col justify-between">
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
                          <span className="text-gray-700 text-sm">
                            {getConsultationDuration(step.id)} de consulta especializada
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
                          <span className="text-gray-700 text-sm">
                            Disponibilidad 16 horas al día, 7 días a la semana
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
                          <span className="text-gray-700 text-sm">
                            Comunicación empática y centrada en nuestros pacientes
                          </span>
                        </div>
                      </div>

                      <div className="text-center mb-6">
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-3xl font-bold text-black">
                            {getPriceRange(step.id)}
                          </span>
                        </div>
                        <span className="text-gray-500 text-xs">
                          El precio de la consulta puede variar dentro del rango según su ubicación.
                        </span>
                      </div>
                    </div>

                    <a
                      href="#contact"
                      onClick={() => addProgram(step.id)}
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
      </div>
    </section>
  );
}