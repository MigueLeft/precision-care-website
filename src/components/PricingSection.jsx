import React from "react";
import useFormStore from "../store/useFormStore";

const PricingSection = () => {
  const { setValues, handleSelect } = useFormStore();

  const programas = [
    {
      id: 1,
      title: "PROGRAMA 1",
      sesiones: 12,
      promedioPorHora: 48,
      consultas: [
        { tipo: "Consultas médicas (M)", cantidad: 3 },
        { tipo: "Consultas de nutrición (N)", cantidad: 2 },
        { tipo: "Consultas de ejercicio (E)", cantidad: 3 },
        { tipo: "Consultas psicológicas (P)", cantidad: 4 },
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
      consultas: [
        { tipo: "Consultas médicas (M)", cantidad: 2 },
        { tipo: "Consultas híbridas médico-nutrición (N)", cantidad: 1 },
        { tipo: "Consultas de ejercicio (E)", cantidad: 3 },
        { tipo: "Consultas psicológicas (P)", cantidad: 4 },
      ],
      precioTotal: 520,
      precioPorSeparado: 635,
      precioUnaCuota: 500,
      ahorro: 135,
      descuento: 21,
      nota: "ADQUIRIDO ANTES DE LA PRIMERA CONSULTA",
    },
    {
      id: 3,
      title: "PROGRAMA 3",
      sesiones: 9,
      promedioPorHora: 48,
      consultas: [
        { tipo: "Consultas médicas (M)", cantidad: 1 },
        { tipo: "Consultas híbridas médico-nutrición (N)", cantidad: 1 },
        { tipo: "Consultas de ejercicio (E)", cantidad: 3 },
        { tipo: "Consultas psicológicas (P)", cantidad: 4 },
      ],
      precioTotal: 440,
      precioPorSeparado: 535,
      precioUnaCuota: 420,
      ahorro: 115,
      descuento: 22,
      nota: "ADQUIRIDO DESPUÉS DE LA PRIMERA CONSULTA",
    },
  ];

  const addProgram = (programId) => {
    console.log(programId);
    if (programId === 1) {
      console.log("SE EJECUTO");

      setValues(new Set(["programa1"]));
      handleSelect(new Set(["programa1"]));
    }
    if (programId === 2) {
      setValues(new Set(["programa2"]));
      handleSelect(new Set(["programa2"]));
    }
    if (programId === 3) {
      setValues(new Set(["programa3"]));
      handleSelect(new Set(["programa3"]));
    }
  };

  return (
    <section className="bg-[#e8f9ff] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-[#0194c2]">
            Nuestros Programas
          </h2>
          <p className="font-bold text-2xl md:text-3xl lg:text-4xl text-center text-main/90">
            Soluciones para mejorar tu bienestar físico y mental
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programas.map((programa) => (
            <div
              key={programa.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full"
            >
              <div className="min-h-[168px] p-6 bg-gradient-to-r from-main to-blue-900 text-white">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold">{programa.title}</h3>
                  {programa.descuento >= 18 && (
                    <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {programa.descuento}% OFF
                    </span>
                  )}
                </div>
                <div>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">
                      ${programa.precioUnaCuota}
                    </span>
                    <span className="text-sm opacity-80 ml-2 line-through">
                      ${programa.precioPorSeparado}
                    </span>
                  </div>
                  {programa.nota && (
                    <div className="mt-2 text-xs bg-white bg-opacity-20 rounded-md px-2 py-1 inline-block">
                      {programa.nota}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col p-6 flex-grow">
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">
                      Total de sesiones:
                    </span>
                    <span className="text-gray-900 font-bold">
                      {programa.sesiones}
                    </span>
                  </div>
                  <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="bg-[#0099ff] h-full rounded-full"
                      style={{ width: `${(programa.sesiones / 12) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="flex-grow">
                  <ul className="space-y-3 mb-8">
                    {programa.consultas.map((consulta) => (
                      <li key={consulta.tipo} className="flex items-center">
                        <div className="mr-3 text-green-500">✓</div>
                        <span className="text-gray-700">
                          {consulta.cantidad} {consulta.tipo}
                        </span>
                      </li>
                    ))}
                    <li className="flex items-center">
                      <div className="mr-3 text-green-500">✓</div>
                      <span className="text-gray-700">
                        Promedio por hora: ${programa.promedioPorHora}
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-auto">
                  <div className="mb-6 bg-blue-50 rounded-lg p-4 text-center">
                    <p className="text-[#0099ff] font-semibold">
                      Ahorras ${programa.ahorro} ({programa.descuento}% de
                      descuento)
                    </p>
                  </div>

                  <a
                    href="#contact"
                    onClick={() => addProgram(programa.id)}
                    className="cursor-pointer text-center block w-full py-3 px-4 bg-main hover:bg-main/70 text-white font-medium rounded-lg transition-colors duration-200 seleccionar-plan-btn"
                  >
                    Seleccionar Plan
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
