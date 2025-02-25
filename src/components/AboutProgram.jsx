import React, { useState } from 'react';
import ContactForm from './ContactForm';

const ProgramasEsenciales = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const programas = [
    {
      id: 1,
      title: "PROGRAMA 1",
      sesiones: 12,
      promedioPorHora: 48,
      consultas: [
        {
          tipo: "Consultas médicas (M)",
          cantidad: 3,
          precioPrograma: 240,
          precioPorSesion: 80,
          precioNormal: 300,
          precioNormalPorSesion: 100,
          descripcion: "En nuestras consultas médicas, recibirás una evaluación completa y manejo especializado por parte de médicos con amplia experiencia. Analizaremos a fondo tus necesidades de salud, identificando áreas de mejora y diseñando un plan personalizado que te permita alcanzar tus objetivos de bienestar."
        },
        {
          tipo: "Consultas de nutrición (N)",
          cantidad: 2,
          precioPrograma: 80,
          precioPorSesion: 40,
          precioNormal: 90,
          precioNormalPorSesion: 45,
          descripcion: "A través de las consultas de nutrición, identificamos tus necesidades individuales y aplicamos programas de alimentación personalizados que te ayudarán a alcanzar tus metas y mejorar tu salud de manera sostenible."
        },
        {
          tipo: "Consultas de ejercicio (E)",
          cantidad: 3,
          precioPrograma: 120,
          precioPorSesion: 40,
          precioNormal: 135,
          precioNormalPorSesion: 45,
          descripcion: "No solo es importante llevar una alimentación saludable, sino también mantener el cuerpo en movimiento. Por ello, a través de evaluaciones de aptitud física, diseñamos una prescripción de actividad física personalizada, adaptada a tus necesidades y objetivos."
        },
        {
          tipo: "Consultas psicológicas (P)",
          cantidad: 4,
          precioPrograma: 160,
          precioPorSesion: 40,
          precioNormal: 180,
          precioNormalPorSesion: 45,
          descripcion: "La batalla no es solo física, también es mental. En Precision Care, entendemos la importancia del bienestar emocional en el proceso de alcanzar tus metas. Por ello, nuestro equipo de psicólogos te brinda herramientas para el manejo del estrés e identificación de focos de ansiedad y depresión."
        },
      ],
      precioTotal: 600,
      precioPorSeparado: 705,
      precioUnaCuota: 580,
      ahorro: 125,
      descuento: 18,
      nota: "",
    },
    {
      id: 2,
      title: "PROGRAMA 2",
      sesiones: 10,
      promedioPorHora: 50,
      nota: "ADQUIRIDO ANTES DE LA PRIMERA CONSULTA",
      consultas: [
        {
          tipo: "Consultas médicas (M)",
          cantidad: 2,
          precioPrograma: 160,
          precioPorSesion: 80,
          precioNormal: 200,
          precioNormalPorSesion: 100,
          descripcion: "En nuestras consultas médicas, recibirás una evaluación completa y manejo especializado por parte de médicos con amplia experiencia. Analizaremos a fondo tus necesidades de salud, identificando áreas de mejora y diseñando un plan personalizado."
        },
        {
          tipo: "Consultas híbridas médico-nutrición (N)",
          cantidad: 1,
          precioPrograma: 80,
          precioPorSesion: 80,
          precioNormal: 120,
          precioNormalPorSesion: 120,
          descripcion: "A través de las consultas de nutrición, identificamos tus necesidades individuales y aplicamos programas de alimentación personalizados que te ayudarán a alcanzar tus metas y mejorar tu salud de manera sostenible."
        },
        {
          tipo: "Consultas de ejercicio (E)",
          cantidad: 3,
          precioPrograma: 120,
          precioPorSesion: 40,
          precioNormal: 135,
          precioNormalPorSesion: 45,
          descripcion: "No solo es importante llevar una alimentación saludable, sino también mantener el cuerpo en movimiento. Por ello, diseñamos una prescripción de actividad física personalizada, adaptada a tus necesidades y objetivos."
        },
        {
          tipo: "Consultas psicológicas (P)",
          cantidad: 4,
          precioPrograma: 160,
          precioPorSesion: 40,
          precioNormal: 180,
          precioNormalPorSesion: 45,
          descripcion: "La batalla no es solo física, también es mental. Nuestro equipo de psicólogos te brinda herramientas para el manejo del estrés e identificación de focos de ansiedad y depresión a través de la Terapia Cognitivo-Conductual."
        },
      ],
      precioTotal: 520,
      precioPorSeparado: 635,
      precioUnaCuota: 500,
      ahorro: 135,
      descuento: 21,
    },
    {
      id: 3,
      title: "PROGRAMA 3",
      sesiones: 9,
      promedioPorHora: 48,
      nota: "ADQUIRIDO DESPUÉS DE LA PRIMERA CONSULTA",
      consultas: [
        {
          tipo: "Consultas médicas (M)",
          cantidad: 1,
          precioPrograma: 80,
          precioPorSesion: 80,
          precioNormal: 100,
          precioNormalPorSesion: 100,
          descripcion: "En nuestras consultas médicas, recibirás una evaluación completa y manejo especializado por parte de médicos con amplia experiencia."
        },
        {
          tipo: "Consultas híbridas médico-nutrición (N)",
          cantidad: 1,
          precioPrograma: 80,
          precioPorSesion: 80,
          precioNormal: 120,
          precioNormalPorSesion: 120,
          descripcion: "A través de las consultas de nutrición, identificamos tus necesidades individuales y aplicamos programas de alimentación personalizados que te ayudarán a alcanzar tus metas."
        },
        {
          tipo: "Consultas de ejercicio (E)",
          cantidad: 3,
          precioPrograma: 120,
          precioPorSesion: 40,
          precioNormal: 135,
          precioNormalPorSesion: 45,
          descripcion: "A través de evaluaciones de aptitud física, diseñamos una prescripción de actividad física personalizada, adaptada a tus necesidades y objetivos."
        },
        {
          tipo: "Consultas psicológicas (P)",
          cantidad: 4,
          precioPrograma: 160,
          precioPorSesion: 40,
          precioNormal: 180,
          precioNormalPorSesion: 45,
          descripcion: "Nuestro equipo de psicólogos te brinda herramientas para el manejo del estrés e identificación de focos de ansiedad y depresión a través de la Terapia Cognitivo-Conductual."
        },
      ],
      precioTotal: 440,
      precioPorSeparado: 535,
      precioUnaCuota: 420,
      ahorro: 115,
      descuento: 22,
    }
  ];

  return (
    <div className="max-w-6xl mx-auto pt-[90px] 2md:pt-[148px] px-6">
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-main">Nuestros Programas</h1>
        <p className="mt-4 text-base md:text-lg text-main/80">
          Adicionalmente a las consultas individuales con cada especialista según tus necesidades, 
          manejamos un programa de atención integral de 4 meses.
        </p>
        <div className="max-w-3xl mx-auto mt-6">
          <p className="text-base md:text-lg text-main/90">
            Ofrecemos un Programa de Medicina del Estilo de Vida por 4 meses. Este programa ofrece 
            asesoría personalizada en Nutrición (nutrición personalizada), Ejercicio (evaluación y 
            planificación de actividad física adaptada) y Salud Mental (apoyo para el manejo del 
            estrés, el sueño, las adicciones y los trastornos de la conducta alimentaria).
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap w-full">
        {programas.map((programa, index) => (
          <button
            key={programa.id}
            className={`flex-1 px-6 py-3 font-medium text-sm rounded-t-lg transition-all duration-200 ${
              activeTab === index
                ? "bg-main text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-main/20"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {programa.title}
            {programa.nota && <span className="hidden md:block text-xs mt-1">{programa.nota}</span>}
          </button>
        ))}
      </div>

      {/* Active program content */}
      <div className="bg-white p-6 rounded-lg rounded-t-none shadow-md border border-gray-200">
        <div className="mb-6">
          <div className="flex flex-wrap items-center justify-between">
            <h2 className="text-2xl font-bold text-main/80">{programas[activeTab].title}</h2>
            <div className="flex flex-col items-start md:items-end">
              <div className="text-lg">
                <span className="font-semibold">Total: </span>
                <span className="text-main/80 font-bold">{programas[activeTab].sesiones} sesiones</span>
                <span className="text-gray-600"> (1 hora cada una)</span>
              </div>
              <div className="text-lg">
                <span className="font-semibold">Promedio: </span>
                <span className="text-main/80 font-bold">${programas[activeTab].promedioPorHora}/hora</span>
              </div>
            </div>
          </div>
          {programas[activeTab].nota && (
            <div className="mt-2 p-2 bg-indigo-50 text-main/80 rounded-md inline-block w-full">
              {programas[activeTab].nota}
            </div>
          )}
        </div>

        {/* Consultas */}
        <div className="space-y-6 mb-8">
          {programas[activeTab].consultas.map((consulta, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex flex-wrap justify-between items-start">
                <div className="w-full lg:w-2/3">
                  <h3 className="text-xl font-semibold text-gray-800">{consulta.tipo} – {consulta.cantidad} {consulta.cantidad === 1 ? 'sesión' : 'sesiones'}</h3>
                  <p className="mt-2 text-gray-600">{consulta.descripcion}</p>
                </div>
                <div className="w-full lg:w-1/3 mt-4 lg:mt-0 lg:text-right">
                  <div className="bg-indigo-50 p-3 w-full md:w-auto rounded-md inline-block">
                    <div className="text-main/80">
                      <span className="font-bold">${consulta.precioPrograma}</span>
                      <span className="text-sm ml-1">(${consulta.precioPorSesion} c/u)</span>
                    </div>
                    <div className="text-gray-500 text-sm line-through">
                      Precio normal: ${consulta.precioNormal} (${consulta.precioNormalPorSesion} c/u)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing summary */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Resumen de precios</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">Precio total programa:</span>
                <span className="font-semibold">${programas[activeTab].precioTotal}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">Precio consultas por separado:</span>
                <span className="font-semibold">${programas[activeTab].precioPorSeparado}</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">Pagado completo en una cuota:</span>
                <span className="font-bold text-main/80">${programas[activeTab].precioUnaCuota}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">Total de ahorro:</span>
                <span className="font-bold text-green-600">${programas[activeTab].ahorro} ({programas[activeTab].descuento}% descuento)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a 
            href="https://wa.me/TUTELEFONO" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="block px-8 py-3 bg-main text-white font-semibold rounded-lg shadow-md hover:bg-main/80 transition-colors"
          >
            Escríbenos
          </a>
          <p className="mt-3 text-sm text-gray-500">
            Contáctanos para más información o para agendar una consulta
          </p>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default ProgramasEsenciales;