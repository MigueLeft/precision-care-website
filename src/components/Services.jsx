import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const Services = () => {
  const [activeTab, setActiveTab] = useState("especialidades");
  const services = {
    especialidades: [
      {
        title: "Obesidad",
        content:
          "Manejo y reducción del peso, abordando las causas fundamentales y diseñando estrategias personalizadas.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12"
            viewBox="0 0 48 48"
          >
            <g fill="none">
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth={4}
                d="M41 4H7a3 3 0 0 0-3 3v34a3 3 0 0 0 3 3h34a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Z"
              ></path>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth={4}
                d="M12 19.054q4.987-6 12-6q7.012 0 12 6"
              ></path>
              <path
                fill="currentColor"
                d="M24 31a3 3 0 1 0 0-6a3 3 0 0 0 0 6"
              ></path>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth={4}
                d="m19 21l5.008 7"
              ></path>
            </g>
          </svg>
        ),
      },
      {
        title: "Prediabetes y Diabetes",
        content:
          "Prevención, control y tratamiento especializado para optimizar tu calidad de vida y prevenir complicaciones.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M14.73 2.29a1 1 0 0 1 1.41 1.41L13 6.79l.76.95l1.94 5a1.46 1.46 0 0 1-.34 1.55l-3.09 3.09a1.55 1.55 0 0 1-2.12 0l-4.6-4.6a1.37 1.37 0 0 1-.4-1l-.5-6.44h1.07a1 1 0 0 1 .75.3l.14.17l1.05 3.48m0 12.71L2 16.36l2.12-2.12l5.66 5.66M19.5 4.5S17 7.26 17 9a2.5 2.5 0 1 0 5 0c0-1.74-2.5-4.5-2.5-4.5"
            ></path>
          </svg>
        ),
      },
      {
        title: "Cardiometabólico",
        content:
          "Atención integral para padecimientos relacionados con el metabolismo cardiovascular y sus riesgos asociados.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 21q-.45 0-.862-.162t-.738-.488l-6.7-6.725q-.875-.875-1.287-2T2 9.275Q2 6.7 3.675 4.85T7.85 3q1.2 0 2.263.475T12 4.8q.8-.85 1.863-1.325T16.125 3q2.5 0 4.188 1.85T22 9.25q0 1.225-.425 2.35t-1.275 2l-6.725 6.75q-.325.325-.725.488T12 21m1-13q.25 0 .475.125t.35.325l1.7 2.55h4.15q.175-.425.263-.862t.087-.888q-.05-1.725-1.15-2.963t-2.75-1.237q-.775 0-1.487.3t-1.238.875l-.675.725q-.125.15-.325.238t-.4.087t-.4-.087t-.35-.238l-.675-.725q-.525-.575-1.225-.9T7.85 5Q6.2 5 5.1 6.263T4 9.25q0 .45.075.888t.25.862H9q.25 0 .475.125t.35.325l.875 1.3l1.35-4.05q.1-.3.362-.5T13 8m.3 3.25l-1.35 4.05q-.1.3-.375.5t-.6.2q-.25 0-.475-.125t-.35-.325L8.45 13H5.9l5.925 5.925q.05.05.088.063T12 19t.088-.012t.087-.063l5.9-5.925H15q-.25 0-.475-.125t-.375-.325z"
            ></path>
          </svg>
        ),
      },
      {
        title: "Enfermedades Crónicas",
        content:
          "Manejo comprehensivo y personalizado para mejorar tu bienestar y controlar padecimientos a largo plazo.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M2.175 10.1q.65-3.5 3.388-5.8T12 2q1.85 0 3.488.6t2.937 1.7q-.35.65-.562 1.113t-.288.862q-1.1-1.05-2.525-1.662T12 4Q9.475 4 7.475 5.413t-2.9 3.612Q3.9 9 3.263 9.275t-1.088.825M12 22q-3.7 0-6.437-2.3t-3.388-5.8q.425.55 1.063.838T4.575 15q.9 2.2 2.9 3.6T12 20q3.325 0 5.663-2.337T20 12q0-.425-.038-.85t-.137-.85q.275.1.563.15t.612.05q.225 0 .45-.025t.425-.075q.05.4.088.788T22 12q0 2.075-.788 3.9t-2.137 3.175t-3.175 2.138T12 22M8.4 11.6l2.1-2.1l-2.125-2.125l-1.05 1.05L8.4 9.475L7.325 10.55zM21 9q-.825 0-1.412-.587T19 7q0-.675.375-1.437T21 3q1.25 1.8 1.625 2.563T23 7q0 .825-.587 1.413T21 9m-5.375 2.625L16.7 10.55l-1.075-1.075l1.05-1.05l-1.05-1.05L13.5 9.5zM12 13.5q-.65 0-1.263.15t-1.162.425L6 12q0-.4-.2-.75t-.55-.55q-.55-.3-1.137-.137t-.913.687q-.3.55-.137 1.138t.687.912q.35.2.75.2t.75-.2l2.975 1.725q-.425.425-.763.913T6.9 17h1.65q.525-.9 1.425-1.45T12 15t2.025.55T15.45 17h1.65q-.6-1.55-1.963-2.525T12 13.5m0-1.5"
            ></path>
          </svg>
        ),
      },
      {
        title: "Cuidados Pre y Postoperatorios",
        content:
          "Evaluación, acompañamiento y seguimiento especializado para procedimientos quirúrgicos de pérdida de peso.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12"
            viewBox="0 0 48 48"
          >
            <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
              <path d="M40 8H8v32h32zM8 6a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z"></path>
              <path d="M10 34h10v2H10zm18 0h4v2h-4zm-6 0h4v2h-4zm12 0h4v2h-4zm-17.172-6h4.724a4 4 0 0 0 2.798-1.142L28 23.284v-.456A4 4 0 0 1 29.172 20l1.689-1.69l-2.606-1.736zM12 30l16-16l6 4l-3.414 3.414A2 2 0 0 0 30 22.828v.456a2 2 0 0 1-.6 1.43l-3.65 3.573A6 6 0 0 1 21.551 30z"></path>
              <path d="M26.707 21.293a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0m10-13.185l-7.6 7.6l-1.414-1.415l7.6-7.6zm1.5 4.285a1 1 0 0 1 0 1.414l-5.5 5.5l-1.414-1.415l5.5-5.5a1 1 0 0 1 1.414 0"></path>
            </g>
          </svg>
        ),
      },
    ],
    servicios: [
      {
        title: "Segunda Opinión",
        content:
          "Análisis detallado y objetivo de tu diagnóstico actual, ofreciendo claridad y alternativas de tratamiento.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M9.75 4.5a.25.25 0 0 0-.25.25v4a.75.75 0 0 1-.75.75h-4a.25.25 0 0 0-.25.25v4.5c0 .138.112.25.25.25h4a.75.75 0 0 1 .75.75v4c0 .138.112.25.25.25h4.5a.25.25 0 0 0 .25-.25v-4a.75.75 0 0 1 .75-.75h4a.25.25 0 0 0 .25-.25v-4.5a.25.25 0 0 0-.25-.25h-4a.75.75 0 0 1-.75-.75v-4a.25.25 0 0 0-.25-.25zM8 4.75C8 3.784 8.784 3 9.75 3h4.5c.966 0 1.75.784 1.75 1.75V8h3.25c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 19.25 16H16v3.25A1.75 1.75 0 0 1 14.25 21h-4.5A1.75 1.75 0 0 1 8 19.25V16H4.75A1.75 1.75 0 0 1 3 14.25v-4.5C3 8.784 3.784 8 4.75 8H8z"
            ></path>
          </svg>
        ),
      },
      {
        title: "Soporte Nutricional",
        content:
          "Atención y seguimiento para personas con enfermedades crónicas y necesidades específicas.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M9.75 4.5a.25.25 0 0 0-.25.25v4a.75.75 0 0 1-.75.75h-4a.25.25 0 0 0-.25.25v4.5c0 .138.112.25.25.25h4a.75.75 0 0 1 .75.75v4c0 .138.112.25.25.25h4.5a.25.25 0 0 0 .25-.25v-4a.75.75 0 0 1 .75-.75h4a.25.25 0 0 0 .25-.25v-4.5a.25.25 0 0 0-.25-.25h-4a.75.75 0 0 1-.75-.75v-4a.25.25 0 0 0-.25-.25zM8 4.75C8 3.784 8.784 3 9.75 3h4.5c.966 0 1.75.784 1.75 1.75V8h3.25c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 19.25 16H16v3.25A1.75 1.75 0 0 1 14.25 21h-4.5A1.75 1.75 0 0 1 8 19.25V16H4.75A1.75 1.75 0 0 1 3 14.25v-4.5C3 8.784 3.784 8 4.75 8H8z"
            ></path>
          </svg>
        ),
      },
      {
        title: "Salud de Migrantes",
        content:
          "Atención médica integral considerando las necesidades específicas de poblaciones en movimiento.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M9.75 4.5a.25.25 0 0 0-.25.25v4a.75.75 0 0 1-.75.75h-4a.25.25 0 0 0-.25.25v4.5c0 .138.112.25.25.25h4a.75.75 0 0 1 .75.75v4c0 .138.112.25.25.25h4.5a.25.25 0 0 0 .25-.25v-4a.75.75 0 0 1 .75-.75h4a.25.25 0 0 0 .25-.25v-4.5a.25.25 0 0 0-.25-.25h-4a.75.75 0 0 1-.75-.75v-4a.25.25 0 0 0-.25-.25zM8 4.75C8 3.784 8.784 3 9.75 3h4.5c.966 0 1.75.784 1.75 1.75V8h3.25c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 19.25 16H16v3.25A1.75 1.75 0 0 1 14.25 21h-4.5A1.75 1.75 0 0 1 8 19.25V16H4.75A1.75 1.75 0 0 1 3 14.25v-4.5C3 8.784 3.784 8 4.75 8H8z"
            ></path>
          </svg>
        ),
      },
    ],
    bienestar: [
      {
        title: "Personas Sanas",
        content:
          "Programas de prevención y mantenimiento de la salud para optimizar tu bienestar general.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M9.75 4.5a.25.25 0 0 0-.25.25v4a.75.75 0 0 1-.75.75h-4a.25.25 0 0 0-.25.25v4.5c0 .138.112.25.25.25h4a.75.75 0 0 1 .75.75v4c0 .138.112.25.25.25h4.5a.25.25 0 0 0 .25-.25v-4a.75.75 0 0 1 .75-.75h4a.25.25 0 0 0 .25-.25v-4.5a.25.25 0 0 0-.25-.25h-4a.75.75 0 0 1-.75-.75v-4a.25.25 0 0 0-.25-.25zM8 4.75C8 3.784 8.784 3 9.75 3h4.5c.966 0 1.75.784 1.75 1.75V8h3.25c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 19.25 16H16v3.25A1.75 1.75 0 0 1 14.25 21h-4.5A1.75 1.75 0 0 1 8 19.25V16H4.75A1.75 1.75 0 0 1 3 14.25v-4.5C3 8.784 3.784 8 4.75 8H8z"
            ></path>
          </svg>
        ),
      },
      {
        title: "Nutrición Personalizada",
        content:
          "Planes alimenticios personalizados que impulsan tu salud y rendimiento.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12"
            viewBox="0 0 64 64"
          >
            <path
              fill="currentColor"
              d="M7.684 41.188c.146-4.908-2.524-6.756-5.78-7.977c-1.082 4.199 1.904 7.693 5.78 7.977m.737-21.915c2.076-4.445.356-7.211-2.16-9.618c-2.641 3.432-1.283 7.82 2.16 9.618m1.171 12.374c-.143-4.905 2.524-6.761 5.782-7.977c1.078 4.197-1.906 7.69-5.782 7.977m0 7.565c-.143-4.905 2.524-6.756 5.782-7.975c1.078 4.196-1.906 7.69-5.782 7.975m0-15.127c-.143-4.907 2.524-6.763 5.782-7.982c1.078 4.201-1.906 7.693-5.782 7.982m-1.908 9.539c.146-4.905-2.524-6.761-5.78-7.977c-1.082 4.197 1.904 7.691 5.78 7.977m0-7.562c.146-4.908-2.524-6.763-5.78-7.984c-1.082 4.203 1.904 7.692 5.78 7.984m36.769 37.007H18.142l13.157-22.796zM23.369 60.05h15.858l-7.929-13.735zM3.843 47.54l55.741-15.164l-.828-3.063L3.011 44.479zM43.176.634s.408 8.041 7.456 7.359c0 0 .795-6.718-7.456-7.359m7.379 26.153a4.08 4.08 0 0 1-3.339 1.716c-1.123 0-2.223-.528-2.965-1.268c-1.518-1.656-3.486-5.358-3.486-5.358c-1.103-2.239-1.694-3.971-1.694-5.722c0-3.73 3.019-6.965 6.759-6.965a6.74 6.74 0 0 1 4.726 1.93a6.73 6.73 0 0 1 4.724-1.93c3.739 0 6.758 3.235 6.758 6.965c0 1.751-.592 3.483-1.694 5.722c0 0-1.968 3.701-3.486 5.358c-.742.74-1.842 1.268-2.966 1.268a4.08 4.08 0 0 1-3.338-1.716z"
            ></path>
          </svg>
        ),
      },
      {
        title: "Deportistas y Atletas",
        content:
          "Estrategias médicas especializadas para maximizar tu potencial físico y prevenir lesiones.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M9.75 4.5a.25.25 0 0 0-.25.25v4a.75.75 0 0 1-.75.75h-4a.25.25 0 0 0-.25.25v4.5c0 .138.112.25.25.25h4a.75.75 0 0 1 .75.75v4c0 .138.112.25.25.25h4.5a.25.25 0 0 0 .25-.25v-4a.75.75 0 0 1 .75-.75h4a.25.25 0 0 0 .25-.25v-4.5a.25.25 0 0 0-.25-.25h-4a.75.75 0 0 1-.75-.75v-4a.25.25 0 0 0-.25-.25zM8 4.75C8 3.784 8.784 3 9.75 3h4.5c.966 0 1.75.784 1.75 1.75V8h3.25c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 19.25 16H16v3.25A1.75 1.75 0 0 1 14.25 21h-4.5A1.75 1.75 0 0 1 8 19.25V16H4.75A1.75 1.75 0 0 1 3 14.25v-4.5C3 8.784 3.784 8 4.75 8H8z"
            ></path>
          </svg>
        ),
      },
    ],
  };
  return (
    <section
      id="services"
      className="scroll-mt-[90px] lg:scroll-mt-[100px] pt-5 md:pt-10 pb-14 md:pb-28"
    >
      <div className="flex flex-col items-center font-semibold mb-8 lg:mb-12">
        <h3 className="text-xl md:text-2xl text-[#009aff]">
          Lineas de servicios
        </h3>
        <p className="text-2xl md:text-3xl lg:text-4xl text-center text-main/90">
          ¿A quienes atendemos?
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-4 max-w-[1200px] mx-auto px-5 md:px-10 lg:px-14">
        {[
          {
            id: "especialidades",
            text: "Especialidades medicas"
          },
          {
            id: "servicios", 
            text: "Servicios especializados"
          },
          {
            id: "bienestar",
            text: "Bienestar y rendimiento"
          }
        ].map((button) => (
          <button
            key={button.id}
            onClick={() => setActiveTab(button.id)}
            className={`group flex items-center h-14 gap-4 lg:gap-8 rounded-lg w-full relative transition-all duration-300 ease-in-out
              ${
                activeTab === button.id
                  ? "bg-main text-white transform scale-[1.02] lg:scale-105"
                  : "bg-white text-black hover:bg-main hover:text-white hover:scale-[1.01] lg:hover:scale-102"
              }`}
          >
            <div
              className={`${
                activeTab === button.id
                  ? "flex items-center rounded-l-lg bg-[#009aff] h-full"
                  : "text-[#009aff] group-hover:flex group-hover:items-center group-hover:rounded-l-lg group-hover:bg-[#009aff] group-hover:h-full group-hover:text-white"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-6 h-6 sm:w-8 sm:h-8 ${
                  activeTab === button.id ? "mx-3 sm:mx-5" : "ml-4 sm:ml-6 lg:ml-9 group-hover:mx-3 group-hover:sm:mx-5"
                }`}
                viewBox="0 0 2048 2048"
              >
                <path
                  fill="currentColor"
                  d="M1728 640q66 0 124 25t101 69t69 102t26 124q0 57-19 109t-53 93t-81 71t-103 41v102q0 89-22 173t-62 160t-98 137t-129 107t-155 70t-174 25q-91 0-174-25t-154-70t-129-107t-98-137t-63-159t-22-174v-229q-123-11-218-59T133 962T34 781T0 558V0h320q26 0 45 19t19 45t-19 45t-45 19H128v430q0 106 29 192t87 147t140 94t192 33q101 0 184-31t141-89t91-140t32-185V128H832q-26 0-45-19t-19-45t19-45t45-19h320v558q0 120-34 223t-99 181t-160 126t-219 59v229q0 107 38 205t107 174t162 120t205 45q111 0 204-45t162-120t107-173t39-206v-102q-56-12-103-41t-81-70t-53-94t-19-109q0-66 25-124t68-101t102-69t125-26m0 512q40 0 75-15t61-41t41-61t15-75t-15-75t-41-61t-61-41t-75-15t-75 15t-61 41t-41 61t-15 75t15 75t41 61t61 41t75 15"
                />
              </svg>
            </div>
            <p className="text-left font-bold text-sm sm:text-base">
              {button.text}
            </p>
            {activeTab === button.id && (
              <div className="hidden lg:block absolute -bottom-2 left-1/2 w-7 h-7 rotate-45 bg-main -z-10 -translate-x-1/2" />
            )}
          </button>
        ))}
      </div>
      <div className="relative">
        <article className="flex justify-center items-center mt-6 lg:mt-12 max-w-[1200px] mx-auto px-5 md:px-10 lg:px-14">
          <Swiper
            navigation={{
              nextEl: `.arrow-model-right`,
              prevEl: `.arrow-model-left`,
            }}
            modules={[Navigation]}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 10
                },
                768: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 10
                },
                1024: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 10
                }
            }}
            
            className="h-full w-full"
          >
            {services[activeTab].map((item) => (
              <SwiperSlide key={item.title} className="h-[300px]">
                <div className="flex flex-col items-center justify-between rounded-lg bg-white border-[#cef0ff] p-8 relative h-[300px]">
                  <div className="flex flex-col items-center">
                    <div className="text-main/90">
                      {item.icon}
                    </div>
                    <p className="text-lg text-main/90 font-medium pt-1 pb-3">
                      {item.title}
                    </p>
                    <p className="text-justify">{item.content}</p>
                  </div>
                  <button className="bg-main -bottom-5 text-white w-2/5 py-2 rounded-lg drop-shadow-lg">
                    Ver más
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </article>
        <div className="max-w-[1350px] mx-auto px-5 md:px-10 lg:px-14 z-20 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-full">
          <div className="w-full flex flex-row justify-center lg:justify-between items-center gap-4 mt-2 lg:mt-0 text-main/90">
            <button
              className="arrow-model-left w-auto md:rounded-full md:min-w-10"
              color="primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-180 w-12 h-12"
                viewBox="0 0 12 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414"
                ></path>
              </svg>
            </button>
            <button
              className="arrow-model-right w-auto md:rounded-full md:min-w-10"
              color="primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12"
                viewBox="0 0 12 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <style jsx global>{`
        .swiper-button-disabled {
          opacity: 0.35 !important;
          display: flex !important;
        }
      `}</style>
    </section>
  );
};

export default Services;
