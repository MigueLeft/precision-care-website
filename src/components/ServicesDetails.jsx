import { div, p } from "framer-motion/client";
import React, { useState, useEffect } from "react";
export const ServicesAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // // Array of 10 items for mapping
  //   id: `item-${index + 1}`,
  // const items = Array.from({ length: 10 }, (_, index) => ({
  //   title: `Services Details ${index + 1}`,
  // }));

  const servicesIndex = [
    { id: "obesity", index: 0 },
    { id: "diabetes", index: 1 },
    { id: "cardiometabolic", index: 2 },
    { id: "chronic", index: 3 },
    { id: "care", index: 4 },
    { id: "second", index: 5 },
    { id: "support", index: 6 },
    { id: "migrants", index: 7 },
    { id: "healthy", index: 8 },
    { id: "nutrition", index: 9 },
    { id: "athletes", index: 10 },
  ];

  const services = [
    {
      id: "obesity",
      title: "Obesidad",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
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
      whatTitle: "¿Qué es la obesidad?",
      what: "La obesidad es una enfermedad crónica donde la cantidad de grasa aumenta, ubicándose en lugares donde su presencia y función anormal causa daños al organismo.",
      whichTitle: "¿Cuál es su nuevo nombre?",
      which:
        "Su nuevo nombre es Enfermedad Crónica por Adiposidad y en este modelo debe investigarse no solo el peso, sino también las complicaciones de la obesidad ya que se asocia con un mayor riesgo de padecer diabetes, hipertensión, enfermedades cardiovasculares y otros problemas metabólicos.",
      howTitle: "¿Cómo debe ser tratada?",
      how: "Su tratamiento requiere un enfoque integral que incluya cambios en las rutinas de vida, específicamente la alimentación, actividad física, manejo del estrés, calidad de sueño y, en algunos casos, medicamentos o cirugía. Esto generalmente se logra creando un nexo entre un equipo de varias disciplinas, médicos, psicólogos, fisiólogos del ejercicio y por supuesto, el paciente.Cada plan es personalizado y diferente, porque el caso es diferente y cada persona es",
      solution: {
        whatTitle: "¿Qué hacemos?",
        what: "En Precision Care usamos el modelo de enfermedad crónica por adiposidad para ver el panorama más amplio incluyendo como centro al paciente y sus problemas físicos y emocionales, su entorno, su cultura, sus rutinas, sus creencias y todo aquello que permita tener una visión de 360 grados y confeccionar un plan de acción personalizado. Esto forma parte de la medicina de precisión, y de ahí viene nuestro nombre. Nuestro programa permite detectar tempranamente condiciones asociadas como el hígado graso, el ovario poliquístico, la apnea obstructiva del sueño, entre otras.",
        resultsTitle: "¿Qué vas a lograr?",
        results:
          "En Precision Care empoderamos a cada paciente con los conocimientos y estrategias necesarias para tomar control de su salud con resultados increíbles en la pérdida de grasa corporal y peso, así como, remisión y control de las complicaciones asociadas. Y por supuesto, “Cero” visitas a la sala de emergencia u hospitalizaciones y alargar el tiempo y calidad de vida.",
      },
    },
    {
      id: "diabetes",
      title: "Prediabetes y Diabetes",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M14.73 2.29a1 1 0 0 1 1.41 1.41L13 6.79l.76.95l1.94 5a1.46 1.46 0 0 1-.34 1.55l-3.09 3.09a1.55 1.55 0 0 1-2.12 0l-4.6-4.6a1.37 1.37 0 0 1-.4-1l-.5-6.44h1.07a1 1 0 0 1 .75.3l.14.17l1.05 3.48m0 12.71L2 16.36l2.12-2.12l5.66 5.66M19.5 4.5S17 7.26 17 9a2.5 2.5 0 1 0 5 0c0-1.74-2.5-4.5-2.5-4.5"
          ></path>
        </svg>
      ),
      whatTitle: "¿Qué es la prediabetes?",
      what: "La prediabetes es una condición en la que los niveles de glucosa (azúcar) en sangre son más altos de lo normal, pero aún no lo suficientemente altos como para ser diagnosticados como diabetes. Cuando no hacemos ningún cambio positivo, la prediabetes puede evolucionar a diabetes tipo 2. La diabetes es una enfermedad en la que el cuerpo no produce suficiente o no usa adecuadamente la insulina, lo que provoca un aumento de la glucosa en sangre.",
      whichTitle: "¿Qué es la diabetes?",
      which:
        "La diabetes es una enfermedad en la que el cuerpo no produce suficiente o no usa adecuadamente la insulina, lo que provoca un aumento de la glucosa en sangre. La elevación de la glicemia daña los vasos sanguíneos grandes por un proceso llamado aterosclerosis formado placas que obstruyen la circulación de la sangre lo que conlleva a infartos cardíacos, cerebrales y de miembros inferiores. El exceso de glucosa también daña los vasos sanguíneos pequeños o micro-circulación, lo que produce daño a la retina y ceguera, daño al riñón y enfermedad renal crónica, y daño a los nervios o neuropatía con manifestaciones que deterioran enormemente tu calidad de vida. Por eso su control incluye mantener valores normales de peso, presión arterial, glucemia y los lípidos (colesterol y triglicéridos). Su control es clave para prevenir todas estas complicaciones.",
      howTitle: "¿Cómo debe ser tratada?",
      how: "Su tratamiento requiere un enfoque integral que incluya cambios en las rutinas de vida, específicamente la alimentación, actividad física, manejo del estrés, calidad de sueño y, en algunos casos, medicamentos o cirugía. Esto generalmente se logra creando un nexo entre un equipo de varias disciplinas, médicos, psicólogos, fisiólogos del ejercicio y por supuesto, el paciente. Cada plan es personalizado y diferente, porque cada caso es diferente y cada persona es diferente.",
      solution: {
        whatTitle: "¿Qué hacemos?",
        what: "En Precision Care vemos el panorama completo. La enfermedad no comienza cuando se eleva la glucosa en la sangre y diagnosticamos la prediabetes o la diabetes. Este proceso comienza antes, generalmente con el exceso de grasa corporal y con un estado de riesgo llamado resistencia a la insulina. En Precision Care usamos el nuevo modelo de atencion llamado Enfermedad crónica por disglucemia que tiene 4 etapas: Etapa 1) Riesgo (Resistencia a la insulina; Etapa 2)  Pre-enfermedad (Prediabetes); Etapa 3) Enfermedad (Diabetes tipo 2); y Etapa 4) (Complicaciones). De este modo, tratamos pacientes en diversas etapas desde su riesgo reciente diagnóstico hasta aquellos con hiperglucemia severa y complicaciones. Tambien consideramos el entorno, situacion social y economica, asi como, sus hábitos de vida.",
        resultsTitle: "¿Qué vas a lograr?",
        results:
          "El equipo de Precision Care te garantiza prevenir la diabetes cuando la detectamos en etapa 1 o 2, mantenerte perfectamente controlado en caso de ya tener la diabetes tipo 2 (etapa 3) para que no progrese a complicaciones (etapa 4). También, en casos seleccionados, se puede lograr la remisión de tu diabetes. Esto significa que con cambios efectivos de estilo de vida es posible mantener valores normales de glucosa sin necesidad de ningún medicamento hasta por 5 años. Y por supuesto, “Cero” visitas a la sala de emergencia u hospitalizaciones y alargar el tiempo y calidad de vida.",
      },
    },
    {
      id: "cardiometabolic",
      title: "Enfermedad Cardiometabólica",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 21q-.45 0-.862-.162t-.738-.488l-6.7-6.725q-.875-.875-1.287-2T2 9.275Q2 6.7 3.675 4.85T7.85 3q1.2 0 2.263.475T12 4.8q.8-.85 1.863-1.325T16.125 3q2.5 0 4.188 1.85T22 9.25q0 1.225-.425 2.35t-1.275 2l-6.725 6.75q-.325.325-.725.488T12 21m1-13q.25 0 .475.125t.35.325l1.7 2.55h4.15q.175-.425.263-.862t.087-.888q-.05-1.725-1.15-2.963t-2.75-1.237q-.775 0-1.487.3t-1.238.875l-.675.725q-.125.15-.325.238t-.4.087t-.4-.087t-.35-.238l-.675-.725q-.525-.575-1.225-.9T7.85 5Q6.2 5 5.1 6.263T4 9.25q0 .45.075.888t.25.862H9q.25 0 .475.125t.35.325l.875 1.3l1.35-4.05q.1-.3.362-.5T13 8m.3 3.25l-1.35 4.05q-.1.3-.375.5t-.6.2q-.25 0-.475-.125t-.35-.325L8.45 13H5.9l5.925 5.925q.05.05.088.063T12 19t.088-.012t.087-.063l5.9-5.925H15q-.25 0-.475-.125t-.375-.325z"
          ></path>
        </svg>
      ),
      whatTitle: "¿Qué es la enfermedad crónica cardiometabólica?",
      what: "La enfermedad crónica cardiometabolica incluye 4 conductores (o culpables) principales: (1) la acumulacion de grasa corporal total, su distribución anormal en el abdomen (grasa visceral) y su ubicación anormal (grasa en el hígado o en el músculo); (2) elevación de la glicemia, y su predecesor la resistencia a la insulina; (3) la hipertensión arterial y (4) los lípidos elevados en la sangre (colesterol y/o triglicéridos altos). Estos 4 impulsores de enfermedad se agrupan con frecuencia aumentando tu riesgo de padecer aterosclerosis y en consecuencia, enfermedades vasculares del corazón (infarto al miocardio, insuficiencia cardiaca, arritmias), del cerebro (infarto o hemorragia cerebral) o de las extremidades (enfermedad vascular periférica)",
      howTitle: "¿Cómo debe ser tratada?",
      how: "Su tratamiento requiere un enfoque integral que incluya cambios en las rutinas de vida, específicamente la alimentación, actividad física, manejo del estrés, calidad de sueño y, en algunos casos, medicamentos o cirugía. Esto generalmente se logra creando un nexo entre un equipo de varias disciplinas, médicos, psicólogos, fisiólogos del ejercicio y por supuesto, el paciente. Cada plan es personalizado y diferente, porque cada caso es diferente y cada persona es diferente.",
      solution: {
        what: "La prevención y el tratamiento  se basan en cambios en el estilo de vida y en medicamentos de eficacia científicamente probada. En Precision Care te ofrecemos un programa diseñado para brindarte un enfoque integral hacia tu bienestar. Utilizamos un conjunto avanzado de herramientas de tamizaje para evaluar tu estado de salud actual.",
        list: [
          "Análisis de hábitos alimenticios",
          "Evaluación de nivel de actividad y aptitud física",
          "Identificación de riesgo cardiometabólico y otras condiciones crónicas",
          "Estudio de composición corporal",
          "Análisis completos de laboratorio",
        ],
        results:
          "Con esta información, elaboramos un plan personalizado de cambios en tu estilo de vida, incluyendo:",
        listResults: [
          "Asesoría nutricional",
          "Rutinas de ejercicio adaptadas a tus necesidades",
          "Estrategias para mejorar tu higiene del sueño",
          "Técnicas de manejo del estrés",
          "Uso de medicamentos preventivos, si fuera necesario",
        ],
      },
    },
    {
      id: "chronic",
      title: "Enfermedades Crónicas",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M2.175 10.1q.65-3.5 3.388-5.8T12 2q1.85 0 3.488.6t2.937 1.7q-.35.65-.562 1.113t-.288.862q-1.1-1.05-2.525-1.662T12 4Q9.475 4 7.475 5.413t-2.9 3.612Q3.9 9 3.263 9.275t-1.088.825M12 22q-3.7 0-6.437-2.3t-3.388-5.8q.425.55 1.063.838T4.575 15q.9 2.2 2.9 3.6T12 20q3.325 0 5.663-2.337T20 12q0-.425-.038-.85t-.137-.85q.275.1.563.15t.612.05q.225 0 .45-.025t.425-.075q.05.4.088.788T22 12q0 2.075-.788 3.9t-2.137 3.175t-3.175 2.138T12 22M8.4 11.6l2.1-2.1l-2.125-2.125l-1.05 1.05L8.4 9.475L7.325 10.55zM21 9q-.825 0-1.412-.587T19 7q0-.675.375-1.437T21 3q1.25 1.8 1.625 2.563T23 7q0 .825-.587 1.413T21 9m-5.375 2.625L16.7 10.55l-1.075-1.075l1.05-1.05l-1.05-1.05L13.5 9.5zM12 13.5q-.65 0-1.263.15t-1.162.425L6 12q0-.4-.2-.75t-.55-.55q-.55-.3-1.137-.137t-.913.687q-.3.55-.137 1.138t.687.912q.35.2.75.2t.75-.2l2.975 1.725q-.425.425-.763.913T6.9 17h1.65q.525-.9 1.425-1.45T12 15t2.025.55T15.45 17h1.65q-.6-1.55-1.963-2.525T12 13.5m0-1.5"
          ></path>
        </svg>
      ),
      whatTitle: "¿Qué son enfermedades crónicas?",
      what: "Las enfermedades crónicas son afecciones que por definición duran más de 2 meses, y generalmente progresan con el tiempo y podrían ser de por vida. Todas estas condiciones tienen las mismas etapas 4 etapas (1. Riesgo, 2. Pre-enfermedad, 3. Enfermedad, y 4. Complicaciones.",
      what2:
        "Además de las enfermedad crónica cardiometabolica que abarca la enfermedad crónica por adiposidad (obesidad), por disglucemia (diabetes), por presión arterial elevada (hipertensión) y por elevación de lípidos (dislipidemia)  Incluyen hipertensión, enfermedades pulmonares, artritis, enfermedades renales, entre otras. Su manejo requiere un seguimiento médico continuo para prevenir complicaciones y mejorar la calidad de vida.",
      whichTitle: "¿Cuáles son estas condiciones crónicas?",
      whichList: [
        "Enfermedad cardiometabolica cronica",
        "Enfermedad respiratoria cronica como la Enfermedad bronco-pulmonar obstructiva crónica y el Síndrome de apnea obstructiva del sueño",
        "Enfermedad renal cronica",
        "Enfermedad neoplasica cronica como el cáncer en sus diversas etapas",
        "Enfermedad inmuno-inflamatoria cronica como la artritis reumatoidea y el lupus eritematoso sistémico",
        "Enfermedad neurodegenerativa cronica: como el deterioro cognitivo y la  enfermedad de Alzheimer",
      ],
      solution: {
        what: "En Precision Care ayudamos a los pacientes que padecen estas enfermedades o condiciones crónicas y a los médicos especialistas que los tratan (cardiologos, neumonologos, reumatólogos, oncologos) a lograr sus metas.",
        whyTitle: "¿Por qué es necesario?",
        why: "Porque todas las enfermedades crónicas necesitan un modelo de atención multidisciplinario que empodere al paciente a controlar su enfermedad por educarlo en cambios de estilo de vida específicos y personalizados. Muchas de estas enfermedades afectan el estado nutricional, la aptitud física, el estado mental promoviendo ansiedad y/o depresión, y por tanto, también responden positivamente a intervenciones de estilo de vida. Por ejemplo, un paciente con enfermedad renal crónica estadio 3B amerita modificar su dieta para detener o enlentecer la progresión de la enfermedad. Un paciente con cáncer (estadio 3 o enfermedad), pudo haber prevenido la enfermedad si se mejoraba el estilo de vida antes del diagnóstico cuando estaba en etapa de riesgo o pre-enfermedad. Sin embargo, se puede lograr remisión del cáncer o prevención de complicaciones (metástasis) con un manejo especializado por oncología y el aprendizaje e implementación de cambios efectivos de rutinas y estilo de vida incluyendo alimentación, actividad física, manejo de la ansiedad y/o depresión o el estrés emocional que las incrementa, higiene y calidad del sueño.",
        howTitle: "¿Cómo deben ser tratadas?",
        how: "A través de un programa estructurado o consultas individuales según las necesidades del paciente que abarcan nutrición, actividad física, salud mental y rediseño de sus rutinas de vida. En Precision Care te ofrecemos un programa diseñado para brindarte un enfoque integral hacia tu bienestar. Utilizamos un conjunto avanzado de herramientas de tamizaje para evaluar tu estado de salud actual.",
        list: [
          "Análisis de hábitos alimenticios",
          "Evaluación de nivel de actividad y aptitud física",
          "Identificación de riesgo cardiometabólico y otras condiciones crónicas",
          "Estudio de composición corporal",
          "Análisis completos de laboratorio",
        ],
        results:
          "Con esta información, elaboramos un plan personalizado de cambios en tu estilo de vida, incluyendo: Asesoría nutricional, Rutinas de ejercicio adaptadas a tus necesidades, Estrategias para mejorar tu higiene del sueño, Técnicas de manejo del estrés, Uso de medicamentos preventivos, si fuera necesario",
        listResults: [
          "Asesoría nutricional",
          "Rutinas de ejercicio adaptadas a tus necesidades",
          "Estrategias para mejorar tu higiene del sueño",
          "Técnicas de manejo del estrés",
          "Uso de medicamentos preventivos, si fuera necesario",
        ],
      },
    },
    {
      id: "care",
      title: "Cuidados Pre y Postoperatorios",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
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
    {
      id: "second",
      title: "Segunda Opinión",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M17 12h.01" />
          <path d="M12 12h.01" />
          <path d="M7 12h.01" />
        </svg>
      ),
    },
    {
      id: "support",
      title: "Soporte Nutricional",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 21h10" />
          <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" />
          <path d="M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1" />
          <path d="m13 12 4-4" />
          <path d="M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2" />
        </svg>
      ),
    },
    {
      id: "migrants",
      title: "Salud de Migrantes",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" />
          <path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" />
          <path d="M16 17h4" />
          <path d="M4 13h4" />
        </svg>
      ),
    },
    {
      id: "healthy",
      title: "Personas Sanas",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11.246 16.657a1 1 0 0 0 1.508 0l3.57-4.101A2.75 2.75 0 1 0 12 9.168a2.75 2.75 0 1 0-4.324 3.388z" />
          <path d="M17 3h2a2 2 0 0 1 2 2v2" />
          <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
          <path d="M3 7V5a2 2 0 0 1 2-2h2" />
          <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
        </svg>
      ),
    },
    {
      id: "nutrition",
      title: "Nutrición Personalizada",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
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
      id: "athletes",
      title: "Deportistas y Atletas",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="18.5" cy="17.5" r="3.5" />
          <circle cx="5.5" cy="17.5" r="3.5" />
          <circle cx="15" cy="5" r="1" />
          <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const currentPath = window.location.pathname;
    const hash = window.location.hash;
    const serviceIndex = servicesIndex.find(
      (service) => service.id === hash.split("#")[1]
    );
    if (serviceIndex) {
      setActiveIndex(serviceIndex.index);
      const element = document.getElementById(serviceIndex.id);
      if (element) {
        const offset = 120; 
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  }, []);

  const items = services.map((service) => {
    return {
      id: typeof service === "object" ? service.title : service,
      title: typeof service === "object" ? service.title : service,
    };
  });

  const renderContent = (key, value) => {
    // if (key === "id") {
    //   return (
    //     <div className="scroll-mt-[6rem] lg:scroll-mt-[13rem]" id={value}></div>
    //   );
    // }

    if (key === "solution" && typeof value === "object") {
      return (
        <div key={key}>
          {Object.entries(value).map(([subKey, subValue]) => {
            if (subKey.endsWith("Title")) {
              return (
                <h3 key={subKey} className="text-xl font-semibold mt-6 mb-4">
                  {subValue}
                </h3>
              );
            } else if (subKey === "list" || subKey === "listResults") {
              return (
                <ul
                  key={subKey}
                  className="list-disc pl-5 text-xl space-y-2 mb-4"
                >
                  {Array.isArray(subValue) &&
                    subValue.map((item, i) => (
                      <li key={`${subKey}-${i}`}>{item}</li>
                    ))}
                </ul>
              );
            } else if (typeof subValue === "string") {
              return (
                <p key={subKey} className="text-xl justify mb-4">
                  {subValue}
                </p>
              );
            }
            return null;
          })}
        </div>
      );
    }

    if (key.endsWith("Title")) {
      return (
        <h3 key={key} className="text-xl font-semibold mt-6 mb-4">
          {value}
        </h3>
      );
    }

    if (key === "whichList" || key === "list" || key === "listResults") {
      return (
        <ul key={key} className="list-disc pl-5 text-xl space-y-2 mb-4">
          {Array.isArray(value) &&
            value.map((item, i) => <li key={`${key}-${i}`}>{item}</li>)}
        </ul>
      );
    }

    if (key !== "title" && key !== "id" && typeof value === "string") {
      return (
        <p key={key} className="text-xl justify mb-4">
          {value}
        </p>
      );
    }

    return null;
  };

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-[900px] mx-auto px-2 pb-12 pt-[90px] 2md:pt-[148px]">
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-main">
          Lineas de Servicio
        </h1>
        <p className="mt-4 text-lg text-main/80">
          Nuestro enfoque multidisciplinario y especializado nos permite abordar
          diversas condiciones de salud y enfocarnos en mejorar tu bienestar de
          manera integral
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="border border-gray-200 rounded-lg overflow-hidden "
          >
            <button
              id={service.id}
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 transition-colors"
            >
              {service.icon}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
                {service.title}
              </h3>
              <span
                className={`transform transition-transform duration-200 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden bg-[#b7d9e9] ${
                activeIndex === index ? "max-h-full" : "max-h-0"
              }`}
            >
              <article className="text-justify p-4 text-main/90">
                {Object.entries(service).map(([key, value]) => {
                  console.log(key, value);
                  return renderContent(key, value);
                })}
              </article>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesAccordion;
