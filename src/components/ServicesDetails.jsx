import React, { useState } from "react";
export const services = [
  "Obesidad",
  "Prediabetes y Diabetes",
  "Cardiometabólico",
  "Enfermedades Crónicas",
  "Cuidados Pre y Postoperatorios",
  "Segunda Opinión",
  "Soporte Nutricional",
  "Salud de Migrantes",
  "Personas Sanas",
  "Nutrición Personalizada",
  "Deportistas y Atletas"
]
export const ServicesAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // // Array of 10 items for mapping
  // const items = Array.from({ length: 10 }, (_, index) => ({
  //   id: `item-${index + 1}`,
  //   title: `Services Details ${index + 1}`,
  // }));

  const items = services.map(service => ({
    id: service,
    title: service,
  }));

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-[900px] mx-auto pb-12 pt-[70px] md:pt-[148px]">
      <div className="flex flex-col gap-4">
        {items.map((item, index) => (
          <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <span className={`transform transition-transform duration-200 ${
                activeIndex === index ? 'rotate-180' : ''
              }`}>
                ▼
              </span>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                activeIndex === index ? 'max-h-[2000px]' : 'max-h-0'
              }`}
            >
              <article className="p-4 text-main/90">
                <div className="flex items-center gap-4">
                  <img
                    src="/api/placeholder/44/44"
                    alt="doctor_avatar"
                    className="w-11 h-11 rounded-full"
                  />
                  <div className="flex flex-col">
                    <div className="flex gap-2 items-center text-base">
                      <span>Dr Ramfis Nieto</span>
                      <span className="inline-block align-middle">.</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mt-10 gap-8">
                  <p className="text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </p>
                  <p className="text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </p>
                  <h2 className="text-xl font-semibold">Lorem ipsum dolor sit amet</h2>
                  <p className="text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </p>
                  <p className="text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </p>
                  <h2 className="text-xl font-semibold">Lorem ipsum dolor sit amet</h2>
                  <p className="text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </p>
                  <ul className="list-disc pl-5 text-xl space-y-2">
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                    </li>
                  </ul>
                  <h2 className="text-xl font-semibold">Lorem ipsum dolor sit amet</h2>
                  <p className="text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </p>
                </div>
              </article>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesAccordion;