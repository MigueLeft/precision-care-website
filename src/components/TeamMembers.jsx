import { useState } from "react";
import { X } from "lucide-react";

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Ramfis Nieto",
      role: "Médico especialista",
      description:
        "Especialista en Medicina Interna, experto en medicina cardiometabólica, nutrición, metabolismo y medicina del estilo de vida",
      imageSrc: "/img/ramfis.webp",
      credentials: [
        "Médico especialista Medicina Interna",
        "Magister en Nutrición"
      ],
      affiliations: [
        {name: "Precision Care Corp, St Cloud, USA", link: "", linkName: "Precision Care Corp"},
        {name: "Lown Scholar. Harvard TH Chan School of Public Health, Boston, MA, USA", link: "https://connects.catalyst.harvard.edu/Profiles/display/Person/158181", linkName: "Harvard Catalyst"},
        {name: "Presidente Fundación para la Investigación Clínica, Epidemiológica y en Salud Pública de Venezuela", link: "https://fispeven.com/", linkName: "(FISPEVEN INC)"},
        {name: "Vicepresidente The MEchanick Transculturalization Research and Innovation ConSortium", link: "https://metricscm.com/", linkName: "(METRICS)"}
      ]
    },
    {
      id: 4,
      name: "Dra. María Inés Marulanda",
      role: "Médico especialista",
      description:
        "Especialista en Medicina Interna, con larga experiencia en enfermedades crónicas, medicina cardiometabólica y preventiva",
        imageSrc: "/img/maria.webp",
      credentials: [
        "Médico especialista Medicina Interna"
      ],
      affiliations: [
        {name: "Precision Care Corp, St Cloud, USA", link: "", linkName: "Precision Care Corp"},
        {name: "West Orange Endocrinology, Orlando, FL, USA.", link: " https://www.woendo.com/", linkName: "WOENDO"},
        {name: "Ex-presidenta de la Sociedad Venezolana de Medicina Interna, Caracas, Venezuela", link: "", linkName: "Sociedad Venezolana de Medicina Interna"},
        {name: "Ex-presidenta Fundación para la Investigación Clínica, Epidemiológica y en Salud Pública de Venezuela", link: "https://fispeven.com/", linkName: "(FISPEVEN INC)"}
      ]
    },
    {
      id: 2,
      name: "Lic. Lucia Druetta",
      role: "Psicólogo",
      description:
        "Psicóloga clínica experta en terapia cognitivo-conductual, manejo de estrés, y trastornos de conducta alimentaria",
        imageSrc: "/img/lucia.webp",
      credentials: [
        "Licenciada en Psicología, Universidad del Aconcagua, Mendoza, Argentina",
        "Postgrado en Psicología Clínica Conductual Cognitiva, Universidad del Aconcagua, Mendoza, Argentina",
        "Terapeuta especializada en el área de Diabetes",
        "Autora del libro 'La Alimentacion Emocional'"
      ],
      affiliations: [
        {name: "Precision Care Corp, St Cloud, USA", link: "", linkName: "Precision Care Corp"},
        {name: "Miembro de la Sociedad Argentina de Diabetes", link: "", linkName: "Sociedad Argentina de Diabetes"},
        {name: "Profesora en la Universidad del Aconcagua, Facultad de Psicología y Facultad de Ciencias Económicas y Jurídicas, Argentina, Mendoza", link: "https://www.uda.edu.ar/", linkName: "UDA"}
      ]
    },
    {
      name: "Lic. Rebeca Figueroa",
      role: "Nutricionista",
      description:
        "Nutricionista clínico con experticia en terapia medica nutricional y educación individualizada",
      imageSrc: "/img/rebeca.webp",
      credentials: [
        "Licenciada en Nutrición y Dietética. Universidad de Los Andes (Venezuela, 2022). Distinción Magna Cum Laude"
      ],
      affiliations: [{name: "Miebro asociado de Fundación para la Investigación Clínica, Epidemiológica y en Salud Pública de Venezuela", link: "https://fispeven.com/", linkName: "(FISPEVEN INC)"}]
    },
    {
      name: "Lic. Naty Gaschteff",
      role: "Especialista en Ejercicio y Actividad Física",
      description:
        "Especialista en Ejercicio y Actividad Física experta en prescripción del ejercicio físico para condiciones clínicas especiales",
      imageSrc: "/img/naty.webp",
      credentials: [
        "Licenciada en Educación Física. Universidad Federal do Amazonas (Brasil, 2010)",
        "Postgrado en Rehabilitación y Prescripción del ejercicio físico para grupos especiales Instituto Valorize (Brasil, 2024)"
      ],
      affiliations: [
        {name: "Precision Care Corp, St Cloud, USA", link: "", linkName: "Precision Care Corp"},
        {name: "CEO. La Casa. Centro de Bienestar. Barquisimeto, Venezuela", link: "https://www.instagram.com/lacasa.cdb?igsh=MWNpcWN5aW91YXN2dQ==", linkName: "(La Casa. Centro de Bienestar)"}
      ]
    },
    {
      id: 3,
      name: "Lic. Joel Peña",
      role: "Especialista en Ejercicio y Actividad Física",
      description:
        "Especialista en Ejercicio y Actividad Física experto en prescripción de ejercicio y planes de entrenamiento personalizados",
        imageSrc: "/img/joel.webp",
      credentials: [
        "Profesor de Educación Física. Universidad Pedagógica Experimental Libertador. Instituto Pedagógico de Barquisimeto, Venezuela",
        "Magister en Actividad Física en la Comunidad. Universidad de Ciencias de la Cultura Física y el Deporte 'Manuel Fajardo'. Habana, Cuba",
        "Magister en Gestión para la Creación Intelectual. Universidad Nacional Experimental Simón Rodríguez. Barquisimeto, Venezuela"
      ],
      affiliations: [
        {name: "Precision Care Corp, St Cloud, Florida", link: "", linkName: "Precision Care Corp"},
        {name: "Sociedad Internacional para el Avance de la Kinantropometría (ISAK)", link: "", linkName: "ISAK"}
      ]
    },
    {
      name: "Lic. Astrid Nieto",
      role: "Coordinadora de Logística y administración",
      description:
        "Gerente logístico y administrativo con alta experiencia comunicacional",
      imageSrc: "/img/astrid.webp",
      credentials: [
        "Licenciada en Gerencia Agroindustrial",
        "Magister en Gerencia Empresarial"
      ],
      affiliations: [
        {name: "Precision Care Corp, St Cloud, USA", link: "", linkName: "Precision Care Corp"},
        {name: "Universidad Centroccidental Lisandro Alvarado. Departamento de Procesos Agroindustriales", link: "", linkName: "Universidad Centroccidental Lisandro Alvarado"}
      ]
    },
  ];

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <section>
      <div id="team" class="bg-main/90 py-16 px-4 scroll-mt-[70px]">
        <div className="max-w-6xl mx-auto">
          <div className="font-bold text-center mb-16">
            <h3 className="text-2xl md:text-3xl lg:text-4xl text-[#40f7f7]">Nuestro Equipo</h3>
            <p className="text-xl sm:text-2xl text-center text-white">
              Profesionales comprometidos con tu bienestar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex flex-col lg:flex-row lg:gap-6 items-center">
                <div className="relative mb-4">
                  <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-cyan-400">
                    <img
                      src={member.imageSrc}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <h3 
                    className="text-xl font-bold text-white mb-1 cursor-pointer hover:text-cyan-400 transition-colors"
                    onClick={() => handleMemberClick(member)}
                  >
                    {member.name}
                  </h3>
                  <p className="text-cyan-400 mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm mb-4 max-w-xs">
                    {member.description}
                  </p>
                  {/* <div className="flex space-x-2">
                    <a
                      href="#"
                      className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                      </svg>
                    </a>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal con información detallada */}
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4" onClick={(e) => e.target === e.currentTarget && closeModal()}>
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              >
                <X size={24} />
              </button>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-500 mr-4">
                    <img
                      src={selectedMember.imageSrc}
                      alt={selectedMember.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{selectedMember.name}</h3>
                    <p className="text-cyan-600">{selectedMember.role}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-900 border-b border-gray-200 pb-1 mb-2">Credenciales</h4>
                    <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                      {selectedMember.credentials.map((credential, index) => (
                        <li key={index}>{credential}</li>
                      ))}
                    </ul>
                  </div>
                  
                  {selectedMember.affiliations.length > 0 && (
                    <div>
                      <h4 className="font-bold text-gray-900 border-b border-gray-200 pb-1 mb-2">Afiliaciones</h4>
                      <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                        {selectedMember.affiliations.map((affiliation, index) => (
                          // affiliation === "West Orange Endocrinology, Orlando, FL, USA." ? (
                          //   <li key={index}>
                          //     {affiliation}{" "}
                          //     <a 
                          //       className="text-cyan-600"
                          //       href="https://www.woendo.com/" 
                          //       target="_blank" 
                          //       rel="noopener noreferrer"
                          //     >
                          //       (WOENDO)
                          //     </a>
                          //   </li>
                          // ) : (
                          //   <li key={index}>{affiliation}</li>
                          // )
                          <><li key={index}>{affiliation.name}</li>{affiliation.link && <a  target="_blank" className="text-cyan-600" href={affiliation.link}>{affiliation.linkName}</a>}</>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* <div className="p-4 bg-gray-100 text-center">
        <p className="text-gray-700 text-sm">Haz clic en el nombre de cualquier miembro para ver sus credenciales y afiliaciones</p>
      </div> */}
    </section>
  );
};

export default TeamSection;