import { useState } from "react";
import { X } from "lucide-react";

const TeamSection = () => { // Corrected syntax: removed leading '='
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
        { name: "Precision Care Corp, St Cloud, USA", link: "", linkName: "Precision Care Corp" },
        { name: "Lown Scholar. Harvard TH Chan School of Public Health, Boston, MA, USA", link: "https://connects.catalyst.harvard.edu/Profiles/display/Person/158181", linkName: "Harvard Catalyst" },
        { name: "Presidente Fundación para la Investigación Clínica, Epidemiológica y en Salud Pública de Venezuela", link: "https://fispeven.com/", linkName: "(FISPEVEN INC)" },
        { name: "Vicepresidente The MEchanick Transculturalization Research and Innovation ConSortium", link: "https://metricscm.com/", linkName: "(METRICS)" }
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
        { name: "Precision Care Corp, St Cloud, USA", link: "", linkName: "Precision Care Corp" },
        { name: "West Orange Endocrinology, Orlando, FL, USA.", link: " https://www.woendo.com/", linkName: "WOENDO" },
        { name: "Ex-presidenta de la Sociedad Venezolana de Medicina Interna, Caracas, Venezuela", link: "", linkName: "Sociedad Venezolana de Medicina Interna" },
        { name: "Ex-presidenta Fundación para la Investigación Clínica, Epidemiológica y en Salud Pública de Venezuela", link: "https://fispeven.com/", linkName: "(FISPEVEN INC)" }
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
        { name: "Precision Care Corp, St Cloud, USA", link: "", linkName: "Precision Care Corp" },
        { name: "Miembro de la Sociedad Argentina de Diabetes", link: "", linkName: "Sociedad Argentina de Diabetes" },
        { name: "Profesora en la Universidad del Aconcagua, Facultad de Psicología y Facultad de Ciencias Económicas y Jurídicas, Argentina, Mendoza", link: "https://www.uda.edu.ar/", linkName: "UDA" }
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
      affiliations: [{ name: "Miebro asociado de Fundación para la Investigación Clínica, Epidemiológica y en Salud Pública de Venezuela", link: "https://fispeven.com/", linkName: "(FISPEVEN INC)" }]
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
        { name: "Precision Care Corp, St Cloud, USA", link: "", linkName: "Precision Care Corp" },
        { name: "CEO. La Casa. Centro de Bienestar. Barquisimeto, Venezuela", link: "", linkName: "La Casa. Centro de Bienestar" }
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
        { name: "Precision Care Corp, St Cloud, Florida", link: "", linkName: "Precision Care Corp" },
        { name: "Sociedad Internacional para el Avance de la Kinantropometría (ISAK)", link: "", linkName: "ISAK" }
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
        { name: "Precision Care Corp, St Cloud, USA", link: "", linkName: "Precision Care Corp" },
        { name: "Universidad Centroccidental Lisandro Alvarado. Departamento de Procesos Agroindustriales", link: "", linkName: "Universidad Centroccidental Lisandro Alvarado" }
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
    <section aria-labelledby="team-heading">
      <div id="team" className="bg-main/90 py-16 px-4 scroll-mt-[70px]">
        <div className="max-w-6xl mx-auto">
          <div className="font-bold text-center mb-16">
            <h2 id="team-heading" className="text-2xl md:text-3xl lg:text-4xl text-[#40f7f7]">Nuestro Equipo</h2> 
            <p className="text-xl sm:text-2xl text-center text-white">
              Profesionales comprometidos con tu bienestar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex flex-col lg:flex-row lg:gap-6 items-center" aria-label={`Información del miembro ${member.name}`}>
                <div className="relative mb-4">
                  <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-cyan-400">
                    <img
                      src={member.imageSrc}
                      alt={`Retrato de ${member.name} - ${member.role}`} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <h3
                    className="text-xl font-bold text-white mb-1 cursor-pointer hover:text-cyan-400 transition-colors"
                    onClick={() => handleMemberClick(member)}
                    tabIndex="0"
                    role="button" 
                    aria-expanded={selectedMember?.id === member.id ? "true" : "false"} 
                    aria-controls={`member-modal-${member.id}`} 
                  >
                    {member.name}
                  </h3>
                  <p className="text-cyan-400 mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm mb-4 max-w-xs">
                    {member.description}
                  </p>
                  {/* Social media links (commented out, as per original) */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal con información detallada */}
        {selectedMember && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
            onClick={(e) => e.target === e.currentTarget && closeModal()}
            role="dialog" 
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                aria-label="Cerrar detalles del miembro" 
              >
                <X size={24} />
              </button>

              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-500 mr-4">
                    <img
                      src={selectedMember.imageSrc}
                      alt={`Retrato de ${selectedMember.name}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 id="modal-title" className="text-xl font-bold text-gray-900">{selectedMember.name}</h3> 
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
                          <li key={index}>
                            {affiliation.name}{" "}
                            {affiliation.link && (
                              <a
                                target="_blank"
                                className="text-cyan-600 hover:underline"
                                href={affiliation.link}
                                rel="noopener noreferrer" 
                                aria-label={`Visitar sitio de ${affiliation.linkName}`} 
                              >
                                {affiliation.linkName}
                              </a>
                            )}
                          </li>
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
    </section>
  );
};

export default TeamSection;