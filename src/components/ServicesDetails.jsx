"use client";

import { useState, useEffect } from "react";
import {
  ChevronDown,
  Activity,
  Heart,
  Stethoscope,
  Scissors,
  MessageSquareQuote,
  Apple,
  Globe,
  Users,
  Utensils,
  Bike,
} from "lucide-react";
import ContactForm from "./ContactForm";

export default function ServicesAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const serviceId = hash.substring(1);
      const serviceIndex = services.findIndex(
        (service) => service.id === serviceId
      );
      if (serviceIndex !== -1) {
        setActiveIndex(serviceIndex);
        setTimeout(() => {
          const element = document.getElementById(serviceId);
          if (element) {
            const offset = 120;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }, 100);
      }
    }
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const services = [
    {
      id: "obesity",
      title: "Obesidad y Control de Peso",
      icon: <Activity className="w-6 h-6 md:w-7 md:h-7" />,
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">¿Qué es la obesidad?</h3>
            <p>
              La obesidad es una enfermedad crónica donde la cantidad de grasa
              aumenta, y se ubica en lugares donde su presencia y función
              anormal causa daños al organismo.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              ¿Cuál es su nuevo nombre?
            </h3>
            <p>
              La obesidad ahora la llamamos Enfermedad Crónica por Adiposidad
              (ECA). En este nuevo modelo debe investigarse no solo el peso,
              sino también las complicaciones. El exceso de grasa se asocia con
              un mayor riesgo de padecer diabetes, hipertensión, enfermedades
              cardiovasculares, osteoartritis, hígado graso, apnea del sueño,
              ciertos tipos de cáncer, y otros problemas de salud.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              ¿Cómo debe ser tratada?
            </h3>
            <p>
              El tratamiento de la obesidad o Enfermedad Crónica por Adiposidad
              requiere un enfoque integral que abarque cambios en el estilo de
              vida, incluyendo alimentación, actividad física, manejo del estrés
              y calidad del sueño. En algunos casos, es necesario el uso de
              medicamentos aprobados o cirugía bariátrica. Para lograr un
              tratamiento efectivo, es fundamental crear un nexo entre un equipo
              multidisciplinario de atención conformado por médicos, psicólogos
              y fisiólogos del ejercicio, y la participación activa del
              paciente, creando así un enfoque personalizado y sostenible. Cada
              plan es personalizado, porque cada caso es diferente y cada
              persona es diferente.
            </p>
          </div>

          <div className="bg-primary/10 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">La solución</h3>

            <div className="mb-3">
              <h4 className="font-medium mb-1">¿Qué hacemos?</h4>
              <p>
                En Precision Care usamos el modelo de enfermedad crónica por
                adiposidad para ver el panorama más amplio incluyendo como
                centro al paciente, sus problemas físicos y emocionales, su
                entorno, su cultura, sus rutinas, sus creencias y tomamos en
                cuenta todo aquello que nos permita tener una visión de 360
                grados de nuestros pacientes y confeccionar un plan de acción
                personalizado. Esto forma parte de la medicina de precisión, y
                de ahí viene nuestro nombre. Cada plan es personalizado, porque
                cada caso es diferente y cada persona es diferente.
              </p>
              <p className="mt-2">
                Nuestro programa permite detectar tempranamente condiciones
                asociadas al exceso de peso como el hígado graso, el ovario
                poliquístico, la apnea obstructiva del sueño, entre otras. Esto
                permite actuar para normalizarlas o detener su progresión. Pero
                también te ofrecemos metas a mediano y largo plazo. ¿Cuántas
                personas bajan de peso y después de 4 a 6 meses vuelven a ganar
                el peso perdido? En Precision Care, no solamente buscamos
                resultados a corto plazo, sino también te empoderamos para
                mantener a largo plazo las mejoras y cambios logrados, es decir,
                cambiar realmente tu salud y estilo de vida.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-1">¿Qué vas a lograr?</h4>
              <p>
                En Precision Care, te empoderamos con el conocimiento y las
                estrategias necesarias para que tomes el control de tu salud,
                logrando una pérdida efectiva de grasa corporal y peso, así como
                la remisión y el control de complicaciones asociadas. Nuestro
                objetivo es reducir a cero las visitas a la sala de emergencias
                y hospitalizaciones, al mismo tiempo que mejoramos tu calidad de
                vida y prolongamos tu bienestar.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">¿Cómo lo hacemos?</h3>
            <p>
              En Precision Care diseñamos un programa para brindarte un enfoque
              integral hacia tu bienestar. Utilizamos un conjunto avanzado de
              herramientas de tamizaje que permiten detectar problemas antes de
              que aparezca la enfermedad, herramientas de diagnóstico y
              tecnológicas para evaluar tu estado de salud actual, generar un
              diagnóstico preciso, explicártelo claramente, y diseñar junto a ti
              un plan de intervención efectivo. Nuestras consultas y programa
              incluyen 3 etapas:
            </p>

            <div className="mt-3">
              <h4 className="font-medium mb-1">1a etapa. Evaluación</h4>
              <p>
                La primera etapa consiste en la evaluación inicial donde
                recolectamos un conjunto de datos que llamamos Ingresables que
                nos permiten:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Analizar tus hábitos de alimentación</li>
                <li>Evaluar tu nivel de actividad y aptitud física</li>
                <li>
                  Identificar tu riesgo cardiometabólico y otras condiciones
                  crónicas
                </li>
                <li>Estudiar tu composición corporal</li>
                <li>Analizar en detalle tus exámenes de laboratorio</li>
                <li>Evaluar tu salud emocional y calidad de sueño</li>
              </ul>
            </div>

            <div className="mt-3">
              <h4 className="font-medium mb-1">2da etapa. Intervención</h4>
              <p>
                En la segunda etapa, usamos la información obtenida para
                elaborar diagnósticos precisos y un plan de tratamiento adaptado
                a ti incluyendo cambios en tu estilo de vida y rutinas. Esto
                incluye varios aspectos que llamamos Entregables:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Plan nutricional personalizado</li>
                <li>
                  Rutinas de ejercicio y actividad física adaptadas a tus
                  necesidades
                </li>
                <li>Estrategias para mejorar la calidad de tu sueño</li>
                <li>
                  Técnicas para identificar y manejar tu estrés y otros
                  problemas emocionales que afecten tu salud
                </li>
                <li>
                  Prescripción de medicamentos preventivos únicamente cuando
                  sean necesarios, evitando la sobremedicación
                </li>
                <li>
                  Educación en nuevas tecnologías de monitoreo (Apps, técnicas
                  de autoevaluación, etc) para hacer los cambios más fáciles,
                  medibles, y efectivos
                </li>
              </ul>
            </div>

            <div className="mt-3">
              <h4 className="font-medium mb-1">
                3a etapa. Monitoreo de resultados y ajustes del tratamiento
              </h4>
              <p>
                Finalmente, reconocemos que no todos los cambios se pueden
                iniciar al mismo tiempo y no todas las metas se logran de
                inmediato. Además, hay muchas condiciones ambientales y
                personales pueden cambiar en el tiempo. Nuestro programa básico
                tiene una duración entre 3 - 4 meses. A lo largo del programa
                evaluamos un conjunto de más de 40 indicadores basados en
                evidencia científica que abarcan mediciones biológicas,
                sociales, conductuales, y ambientales. El monitoreo de estas
                variables nos permite ir haciendo los ajustes necesarios para
                llevarte de la mano a alcanzar las metas y lograr el éxito.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="#contact"
              className="bg-main inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Agenda tu cita aquí
            </a>
          </div>
        </div>
      ),
    },
    {
      id: "diabetes",
      title: "Prediabetes y Diabetes",
      icon: <Heart className="w-6 h-6 md:w-7 md:h-7" />,
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              ¿Qué es la prediabetes?
            </h3>
            <p>
              La prediabetes es una condición en la que los niveles de glucosa o
              azúcar (glucemia) en sangre están elevados, pero no lo suficiente
              como para ser diagnosticados como diabetes. Si no se toman medidas
              para revertirla, la prediabetes puede progresar a diabetes tipo 2,
              una enfermedad más compleja y con mayores riesgos para la salud.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">¿Qué es la diabetes?</h3>
            <p>
              La diabetes es una enfermedad en la que el cuerpo no produce
              suficiente insulina o no la utiliza de manera adecuada, lo que
              provoca un aumento de la glucosa en sangre. Esta elevación de la
              glucemia daña los vasos sanguíneos de distintos tamaños, afectando
              gravemente la salud.
            </p>
            <p className="mt-2">
              Por un lado, el daño a los vasos sanguíneos grandes, a través de
              un proceso llamado aterosclerosis, favorece la formación de placas
              que obstruyen la circulación, aumentando el riesgo de infartos
              cardíacos, accidentes cerebrovasculares y problemas en los
              miembros inferiores. Por otro lado, el exceso de glucosa también
              afecta los vasos sanguíneos pequeños (microcirculación), causando
              daños en la retina que pueden llevar a la ceguera, afectación
              renal que puede llevar a enfermedad renal crónica y afectación de
              los nervios o neuropatía diabética, la cual deteriora
              significativamente la calidad de vida.
            </p>
            <p className="mt-2">
              Por ello, el control de la diabetes es fundamental e implica
              mantener niveles saludables de peso, presión arterial, glucosa y
              lípidos (colesterol y triglicéridos) para prevenir estas
              complicaciones y preservar tu bienestar.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              ¿Cuál es el nuevo modelo de atención?
            </h3>
            <p>
              La Enfermedad Crónica por Disglucemia (ECD) es un término que
              abarca los cambios progresivos en el organismo, desde la
              resistencia a la insulina hasta la prediabetes, la diabetes tipo 2
              y sus complicaciones. Siguiendo este modelo investigamos, no solo
              la glicemia, sino también las alteraciones tempranas que preceden
              su elevación (resistencia y/o secreción de insulina) y que
              aumentan el riesgo de desarrollar diabetes. Además, en quienes ya
              la padecen, se busca identificar y abordar sus posibles
              complicaciones de manera oportuna.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              ¿Cómo debe ser tratada?
            </h3>
            <p>
              El tratamiento de la prediabetes y diabetes (Enfermedad crónica
              por Disglucemia) requiere un enfoque integral que abarque cambios
              en el estilo de vida, incluyendo alimentación, actividad física,
              manejo del estrés y calidad del sueño. En algunos casos, es
              necesario el uso de medicamentos aprobados o cirugía bariátrica.
              Para lograr un tratamiento efectivo, es fundamental crear un nexo
              entre un equipo multidisciplinario de atención conformado por
              médicos, psicólogos y fisiólogos del ejercicio, y la participación
              activa del paciente, creando así un enfoque personalizado y
              sostenible. Cada plan es personalizado, porque cada caso es
              diferente y cada persona es diferente.
            </p>
          </div>

          <div className="bg-primary/10 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">La solución</h3>

            <div className="mb-3">
              <h4 className="font-medium mb-1">¿Qué hacemos?</h4>
              <p>
                En Precision Care vemos el panorama completo. La enfermedad no
                comienza cuando la glucosa en sangre se eleva y se diagnostica
                prediabetes o diabetes; el proceso inicia mucho antes,
                generalmente con el exceso de grasa corporal, que desencadena
                inflamación crónica y un estado de riesgo conocido como
                resistencia a la insulina.
              </p>
              <p className="mt-2">
                Aplicamos un enfoque innovador basado en el modelo de Enfermedad
                Crónica por Disglucemia (ECD), el cual comprende cuatro etapas:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Etapa 1: Riesgo (Resistencia a la insulina)</li>
                <li>Etapa 2: Pre-enfermedad (Prediabetes)</li>
                <li>Etapa 3: Enfermedad (Diabetes tipo 2)</li>
                <li>Etapa 4: Complicaciones</li>
              </ul>
              <p className="mt-2">
                De esta manera, brindamos atención a pacientes en distintas
                fases de la enfermedad, desde aquellos en riesgo inicial con
                resistencia a la insulina y prediabetes, hasta quienes tienen un
                diagnóstico reciente o presentan hiperglucemia severa con
                complicaciones. Además, consideramos su entorno, situación
                social y económica, así como sus hábitos de vida, para ofrecer
                un tratamiento verdaderamente personalizado.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-1">¿Qué vas a lograr?</h4>
              <p>
                El equipo de Precision Care te ofrece las mejores herramientas
                para actuar en cada etapa de la Enfermedad Crónica por
                Disglucemia (ECD). Si identificamos el riesgo en las primeras
                fases (etapas 1 y 2), te ayudamos a prevenir la progresión a
                diabetes tipo 2. Si ya tienes diabetes (etapa 3), trabajamos
                para mantenerte perfectamente controlado y evitar complicaciones
                futuras (etapa 4).
              </p>
              <p className="mt-2">
                En casos seleccionados, también es posible lograr la remisión de
                la diabetes, lo que significa que, con cambios efectivos en el
                estilo de vida, puedes alcanzar niveles normales de glucosa sin
                necesidad de ningún medicamento por hasta cinco años. ¡Anímate a
                saber si calificas para esta meta! Nuestro objetivo final es
                reducir a cero las visitas a la sala de emergencias y
                hospitalizaciones, mientras mejoramos tu calidad de vida y
                prolongamos tu bienestar.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">¿Cómo lo hacemos?</h3>
            <p>
              En Precision Care diseñamos un programa para brindarte un enfoque
              integral hacia tu bienestar. Utilizamos un conjunto avanzado de
              herramientas de tamizaje que permiten detectar problemas antes de
              que aparezca la enfermedad, herramientas de diagnóstico y
              tecnológicas para evaluar tu estado de salud actual, generar un
              diagnóstico preciso, explicártelo claramente, y diseñar junto a ti
              un plan de intervención efectivo. Nuestras consultas y programa
              incluyen 3 etapas:
            </p>

            <div className="mt-3">
              <h4 className="font-medium mb-1">1a etapa. Evaluación</h4>
              <p>
                La primera etapa consiste en la evaluación inicial donde
                recolectamos un conjunto de datos que llamamos Ingresables que
                nos permiten:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Analizar tus hábitos de alimentación</li>
                <li>Evaluar tu nivel de actividad y aptitud física</li>
                <li>
                  Identificar tu riesgo cardiometabólico y otras condiciones
                  crónicas
                </li>
                <li>Estudiar tu composición corporal</li>
                <li>Analizar en detalle tus exámenes de laboratorio</li>
                <li>Evaluar tu salud emocional y calidad de sueño</li>
              </ul>
            </div>

            <div className="mt-3">
              <h4 className="font-medium mb-1">2da etapa. Intervención</h4>
              <p>
                En la segunda etapa, usamos la información obtenida para
                elaborar diagnósticos precisos y un plan de tratamiento adaptado
                a ti incluyendo cambios en tu estilo de vida y rutinas. Esto
                incluye varios aspectos que llamamos Entregables:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Plan nutricional personalizado</li>
                <li>
                  Rutinas de ejercicio y actividad física adaptadas a tus
                  necesidades
                </li>
                <li>Estrategias para mejorar la calidad de tu sueño</li>
                <li>
                  Técnicas para identificar y manejar tu estrés y otros
                  problemas emocionales que afecten tu salud
                </li>
                <li>
                  Prescripción de medicamentos preventivos únicamente cuando
                  sean necesarios, evitando la sobremedicación
                </li>
                <li>
                  Educación en nuevas tecnologías de monitoreo (Apps, técnicas
                  de autoevaluación, etc) para hacer los cambios más fáciles,
                  medibles, y efectivos
                </li>
              </ul>
            </div>

            <div className="mt-3">
              <h4 className="font-medium mb-1">
                3a etapa. Monitoreo de resultados y ajustes del tratamiento
              </h4>
              <p>
                Finalmente, reconocemos que no todos los cambios se pueden
                iniciar al mismo tiempo y no todas las metas se logran de
                inmediato. Además, hay muchas condiciones ambientales y
                personales pueden cambiar en el tiempo. Nuestro programa básico
                tiene una duración entre 3 - 4 meses. A lo largo del programa
                evaluamos un conjunto de más de 40 indicadores basados en
                evidencia científica que abarcan mediciones biológicas,
                sociales, conductuales, y ambientales. El monitoreo de estas
                variables nos permite ir haciendo los ajustes necesarios para
                llevarte de la mano a alcanzar las metas y lograr el éxito.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="#contact"
              className="bg-main inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Agenda tu cita aquí
            </a>
          </div>
        </div>
      ),
    },
    {
      id: "cardiometabolic",
      title: "Enfermedad Cardiometabólica",
      icon: <Stethoscope className="w-6 h-6 md:w-7 md:h-7" />,
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              ¿Qué es la enfermedad crónica cardiometabólica?
            </h3>
            <p>
              La enfermedad crónica cardiometabolica (ECCM) incluye 4
              conductores (o culpables) principales:
            </p>
            <ol className="list-decimal pl-5 mt-2 space-y-1">
              <li>
                Alta adiposidad (Obesidad): incluye el exceso de grasa corporal
                total, su distribución anormal en el abdomen (grasa visceral) y
                su acumulación en órganos donde no debería estar, como el hígado
                (hígado graso) o en los músculos
              </li>
              <li>
                Elevación de la glucemia, precedida por la resistencia a la
                insulina
              </li>
              <li>La presión arterial alta (hipertensión)</li>
              <li>
                La elevación de los lípidos en la sangre (colesterol y/o
                triglicéridos altos)
              </li>
            </ol>
            <p className="mt-2">
              Estos 4 impulsores de enfermedad se agrupan con frecuencia
              aumentando tu riesgo de padecer aterosclerosis y en consecuencia,
              enfermedades vasculares del corazón (infarto al miocardio,
              insuficiencia cardiaca, arritmias), del cerebro (infarto o
              hemorragia cerebral) o de las extremidades (enfermedad vascular
              periférica).
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              ¿Cómo debe ser tratada?
            </h3>
            <p>
              La Enfermedad Crónica Cardiometabólica (ECCM) requiere un enfoque
              integral que combine estrategias personalizadas para mejorar la
              alimentación, la actividad física, el manejo del estrés y la
              calidad del sueño y el mejor criterio para seleccionar otros
              tratamientos o medicamentos necesarios. Todas estas decisiones
              están basadas en estudios científicos y la mejor experiencia de
              nuestros especialistas. El primer paso es identificar la
              enfermedad lo antes posible, en etapa de riesgo, y actuar.
            </p>
            <p className="mt-2">
              El tratamiento es más efectivo cuando se trabaja con un equipo
              multidisciplinario compuesto por médicos, psicólogos, fisiólogos
              del ejercicio y, por supuesto, tú, el paciente. Cada plan se
              diseña a medida, porque cada persona es única y cada caso es
              diferente.
            </p>
          </div>

          <div className="bg-primary/10 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">La solución</h3>

            <div className="mb-3">
              <h4 className="font-medium mb-1">¿Qué hacemos?</h4>
              <p>
                La prevención y el tratamiento de la ECCM se basa en una
                combinación de cambios en el estilo de vida y medicamentos de
                eficacia científicamente probada. En Precision Care vemos el
                panorama completo. La enfermedad no comienza cuando presentas un
                infarto al miocardio o un accidente cerebrovascular. Mucho
                tiempo antes estaba ocurriendo un proceso llamado
                aterosclerosis, iniciado por un conjunto de factores de riesgo
                que básicamente incluye el aumento de los 4 impulsores de la
                enfermedad (adiposidad, glucemia, presión arterial y lípidos).
              </p>
              <p className="mt-2">
                En Precision care, aplicamos un enfoque innovador basado en el
                modelo de Enfermedad Crónica Cardiometabolica (ECCM), el cual
                comprende cuatro etapas:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  Etapa 1: Riesgo (factores de riesgo del síndrome metabólico)
                </li>
                <li>
                  Etapa 2: Pre-enfermedad (enfermedad cardiovascular subclínica,
                  donde habitualmente no hay síntomas pero puede detectarse
                  mediante pruebas médicas)
                </li>
                <li>
                  Etapa 3: Enfermedad (puede estar en una fase avanzada sin
                  generar síntomas perceptibles en el paciente)
                </li>
                <li>
                  Etapa 4: Complicaciones (enfermedad cardiovascular establecida
                  con síntomas, a veces incapacitantes)
                </li>
              </ul>
              <p className="mt-2">
                De esta manera, detectamos en qué etapa te encuentras y te
                brindamos atención, desde aquellos en riesgo inicial hasta
                quienes tienen complicaciones de la enfermedad. En todas las
                fases se debe tener buenos hábitos de estilo de vida. Además,
                consideramos tu entorno, situación social y económica, así como
                tus rutinas, para ofrecer un tratamiento verdaderamente
                personalizado.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-1">¿Qué vas a lograr?</h4>
              <p>
                En Precision Care te brindamos el conocimiento y las estrategias
                necesarias para que tomes el control de tu salud y logres la
                prevención y control de condiciones como la hipertensión, la
                elevación de triglicéridos y colesterol, la inflamación crónica
                y otros factores de riesgo que conducen a enfermedades
                cardiovasculares, como infartos, accidentes cerebrovasculares o
                problemas circulatorios en los miembros inferiores.
              </p>
              <p className="mt-2">
                Si estos factores se detectan y controlan en las primeras
                etapas—etapa 1 (riesgo) y etapa 2 (aterosclerosis)—es posible
                prevenir eventos cardiovasculares graves. Y si ya has sufrido
                una complicación, es aún más crucial actuar para evitar un nuevo
                evento y mejorar tu calidad y esperanza de vida.
              </p>
              <p className="mt-2">
                ¿De qué sirve tenerlo todo si no tienes salud? Con la remisión y
                el control adecuado de las complicaciones cardiovasculares,
                nuestro objetivo es lograr "cero" visitas a la sala de
                emergencias y hospitalizaciones, permitiéndote vivir más y
                mejor.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">¿Cómo lo hacemos?</h3>
            <p>
              En Precision Care diseñamos un programa para brindarte un enfoque
              integral hacia tu bienestar. Utilizamos un conjunto avanzado de
              herramientas de tamizaje que permiten detectar problemas antes de
              que aparezca la enfermedad, herramientas de diagnóstico y
              tecnológicas para evaluar tu estado de salud actual, generar un
              diagnóstico preciso, explicártelo claramente, y diseñar junto a ti
              un plan de intervención efectivo. Nuestras consultas y programa
              incluyen 3 etapas:
            </p>

            <div className="mt-3">
              <h4 className="font-medium mb-1">1a etapa. Evaluación</h4>
              <p>
                La primera etapa consiste en la evaluación inicial donde
                recolectamos un conjunto de datos que llamamos Ingresables que
                nos permiten:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Analizar tus hábitos de alimentación</li>
                <li>Evaluar tu nivel de actividad y aptitud física</li>
                <li>
                  Identificar tu riesgo cardiometabólico y otras condiciones
                  crónicas
                </li>
                <li>Estudiar tu composición corporal</li>
                <li>Analizar en detalle tus exámenes de laboratorio</li>
                <li>Evaluar tu salud emocional y calidad de sueño</li>
              </ul>
            </div>

            <div className="mt-3">
              <h4 className="font-medium mb-1">2da etapa. Intervención</h4>
              <p>
                En la segunda etapa, usamos la información obtenida para
                elaborar diagnósticos precisos y un plan de tratamiento adaptado
                a ti incluyendo cambios en tu estilo de vida y rutinas. Esto
                incluye varios aspectos que llamamos Entregables:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Plan nutricional personalizado</li>
                <li>
                  Rutinas de ejercicio y actividad física adaptadas a tus
                  necesidades
                </li>
                <li>Estrategias para mejorar la calidad de tu sueño</li>
                <li>
                  Técnicas para identificar y manejar tu estrés y otros
                  problemas emocionales que afecten tu salud
                </li>
                <li>
                  Prescripción de medicamentos preventivos únicamente cuando
                  sean necesarios, evitando la sobremedicación
                </li>
                <li>
                  Educación en nuevas tecnologías de monitoreo (Apps, técnicas
                  de autoevaluación, etc) para hacer los cambios más fáciles,
                  medibles, y efectivos
                </li>
              </ul>
            </div>

            <div className="mt-3">
              <h4 className="font-medium mb-1">
                3a etapa. Monitoreo de resultados y ajustes del tratamiento
              </h4>
              <p>
                Finalmente, reconocemos que no todos los cambios se pueden
                iniciar al mismo tiempo y no todas las metas se logran de
                inmediato. Además, hay muchas condiciones ambientales y
                personales pueden cambiar en el tiempo. Nuestro programa básico
                tiene una duración entre 3 - 4 meses. A lo largo del programa
                evaluamos un conjunto de más de 40 indicadores basados en
                evidencia científica que abarcan mediciones biológicas,
                sociales, conductuales, y ambientales. El monitoreo de estas
                variables nos permite ir haciendo los ajustes necesarios para
                llevarte de la mano a alcanzar las metas y lograr el éxito.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="#contact"
              className="bg-main inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Agenda tu cita aquí
            </a>
          </div>
        </div>
      ),
    },
    {
      id: "chronic",
      title: "Enfermedades Crónicas",
      icon: <Stethoscope className="w-6 h-6 md:w-7 md:h-7" />,
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              ¿Qué son enfermedades crónicas?
            </h3>
            <p>
              Las enfermedades crónicas son afecciones que, por definición,
              duran más de dos meses, generalmente progresan con el tiempo y, en
              muchos casos, pueden ser de por vida. Todas comparten las mismas
              cuatro etapas: (1) Riesgo, (2) Pre-enfermedad, (3) Enfermedad y
              (4) Complicaciones. Mientras más rápido las detectemos (en etapa 1
              o 2) mejor, ya que tenemos más tiempo de revertir los valores
              alterados antes de que aparezca la enfermedad o las
              complicaciones.
            </p>
            <p className="mt-2">
              El tratamiento de TODAS las enfermedades crónicas requiere mejorar
              el estilo de vida, incluyendo nutrición, actividad física, calidad
              del sueño, manejo del estrés y control de adicciones. En algunos
              casos, también se recomienda el uso de medicamentos preventivos
              como aspirina, estatinas, antihipertensivos, quimioterapia o
              inmunoterapia, entre otros. Su manejo requiere un seguimiento
              médico continuo para prevenir complicaciones y mejorar la calidad
              de vida.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              ¿Cuáles son estas enfermedades crónicas?
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Enfermedad crónica cardiometabolica (ECCM) por adiposidad
                (obesidad), por disglucemia (diabetes), por presión arterial
                elevada (hipertensión) y por elevación de lípidos (dislipidemia)
              </li>
              <li>
                Enfermedad crónica respiratoria como la enfermedad
                bronco-pulmonar obstructiva crónica (EPOC) y el Síndrome de
                apnea obstructiva del sueño (SAOS)
              </li>
              <li>Enfermedad crónica renal</li>
              <li>
                Enfermedad crónica neoplásica como el cáncer en sus diversas
                etapas
              </li>
              <li>
                Enfermedad crónica inmuno-inflamatoria como la artritis
                reumatoidea y el lupus eritematoso sistémico
              </li>
              <li>
                Enfermedad crónica neurodegenerativa: como el deterioro
                cognitivo y la enfermedad de Alzheimer
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              ¿Por qué es necesario ver más allá de las medicinas?
            </h3>
            <p>
              Todas las enfermedades crónicas requieren un modelo de atención
              multidisciplinario que empodere al paciente, brindándole educación
              y estrategias personalizadas para mejorar su estilo de vida y
              controlar su enfermedad. Muchas de estas enfermedades, como el
              cáncer, las enfermedades renales o pulmonares, afectan el estado
              nutricional, la condición física y la salud mental, favoreciendo
              la ansiedad y la depresión. Es por eso que, estas enfermedades
              también mejoran significativamente con intervenciones en el estilo
              de vida.
            </p>
            <p className="mt-2">
              Por ejemplo, un paciente con enfermedad renal crónica en estadio
              3B necesita ajustes específicos en su alimentación para detener o
              enlentecer el deterioro de la función del riñón y la necesidad de
              otros tratamientos como la diálisis. En el caso del cáncer, su
              desarrollo podría haberse prevenido con mejoras en el estilo de
              vida en etapas tempranas, como la fase de riesgo o pre-enfermedad.
              Sin embargo, incluso después del diagnóstico, es posible alcanzar
              la remisión o prevenir complicaciones como la metástasis a través
              de un tratamiento especializado en oncología, complementado con
              cambios efectivos en la alimentación, actividad física, manejo del
              estrés, ansiedad o depresión, y la optimización de la higiene y
              calidad del sueño.
            </p>
          </div>

          <div className="bg-primary/10 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">La solución</h3>

            <div className="mb-3">
              <h4 className="font-medium mb-1">¿Qué hacemos?</h4>
              <p>
                En Precision Care ayudamos a los pacientes que padecen estas
                enfermedades o condiciones crónicas y a los médicos
                especialistas que los tratan (cardiólogos, neumólogos,
                reumatólogos, oncólogos) a lograr sus metas.
              </p>
              <p className="mt-2">
                En Precision Care vemos el panorama completo y sabemos que la
                causa de estas afecciones a veces va más allá, incluyendo la
                mala alimentación, estrés, ansiedad, sedentarismo, hábito de
                fumar y otras adicciones. La inmunosupresión que te pone en
                riesgo de neoplasia (cáncer) surge muchas veces de un estado de
                estrés crónico y elevación del cortisol que debilita el sistema
                que se encarga de controlar y eliminar las células tumorales. La
                enfermedad no comienza cuando detectamos un tumor, comienza
                mucho antes.
              </p>
              <p className="mt-2">
                En Precision care, aplicamos un enfoque innovador basado en el
                modelo de Enfermedad Crónica, el cual comprende cuatro etapas:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Etapa 1: Riesgo</li>
                <li>Etapa 2: Pre-enfermedad</li>
                <li>Etapa 3: Enfermedad</li>
                <li>Etapa 4: Complicaciones</li>
              </ul>
              <p className="mt-2">
                De esta manera, tanto el paciente como el equipo de atención
                podrán identificar en qué etapa de la enfermedad se encuentra y
                aplicar las mejores estrategias en cada fase.
              </p>
              <p className="mt-2">
                Por ejemplo, en la enfermedad crónica neoplásica, la
                alimentación varía según la etapa. Un paciente en etapa 1, donde
                solo existe un riesgo sin enfermedad establecida, puede
                beneficiarse de una dieta basada en alimentos saludables y
                patrones dietéticos que contribuyan a la prevención del cáncer.
                En cambio, un paciente con metástasis (complicaciones) requiere
                un enfoque que priorice el mantenimiento de su estado
                nutricional, evitando restricciones innecesarias que puedan
                afectar su calidad de vida.
              </p>
              <p className="mt-2">
                Además, en Precision Care consideramos no sólo los aspectos
                médicos, sino también el entorno del paciente, su situación
                social y económica, hábitos de vida, preferencias nutricionales
                y nivel de actividad física, para ofrecer un tratamiento
                verdaderamente personalizado.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-1">¿Qué vas a lograr?</h4>
              <p>
                La prevención y el tratamiento de la mayoría de las enfermedades
                crónicas se basan en cambios en el estilo de vida y en
                medicamentos de eficacia científicamente probada. En Precision
                Care te ofrecemos un programa diseñado para brindarte un enfoque
                integral hacia tu bienestar. Utilizamos un conjunto avanzado de
                herramientas de tamizaje para evaluar tu estado de salud actual
                e implementar cambios para lograr remisión de estas
                enfermedades, y en algunos casos curación.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">¿Cómo lo hacemos?</h3>
            <p>
              En Precision Care diseñamos un programa para brindarte un enfoque
              integral hacia tu bienestar. Utilizamos un conjunto avanzado de
              herramientas de tamizaje que permiten detectar problemas antes de
              que aparezca la enfermedad, herramientas de diagnóstico y
              tecnológicas para evaluar tu estado de salud actual, generar un
              diagnóstico preciso, explicártelo claramente, y diseñar junto a ti
              un plan de intervención efectivo. Nuestras consultas y programa
              incluyen 3 etapas:
            </p>

            <div className="mt-3">
              <h4 className="font-medium mb-1">1a etapa. Evaluación</h4>
              <p>
                La primera etapa consiste en la evaluación inicial donde
                recolectamos un conjunto de datos que llamamos Ingresables que
                nos permiten:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Analizar tus hábitos de alimentación</li>
                <li>Evaluar tu nivel de actividad y aptitud física</li>
                <li>
                  Identificar tu riesgo cardiometabólico y otras condiciones
                  crónicas
                </li>
                <li>Estudiar tu composición corporal</li>
                <li>Analizar en detalle tus exámenes de laboratorio</li>
                <li>Evaluar tu salud emocional y calidad de sueño</li>
              </ul>
            </div>

            <div className="mt-3">
              <h4 className="font-medium mb-1">2da etapa. Intervención</h4>
              <p>
                En la segunda etapa, usamos la información obtenida para
                elaborar diagnósticos precisos y un plan de tratamiento adaptado
                a ti incluyendo cambios en tu estilo de vida y rutinas. Esto
                incluye varios aspectos que llamamos Entregables:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Plan nutricional personalizado</li>
                <li>
                  Rutinas de ejercicio y actividad física adaptadas a tus
                  necesidades
                </li>
                <li>Estrategias para mejorar la calidad de tu sueño</li>
                <li>
                  Técnicas para identificar y manejar tu estrés y otros
                  problemas emocionales que afecten tu salud
                </li>
                <li>
                  Prescripción de medicamentos preventivos únicamente cuando
                  sean necesarios, evitando la sobremedicación
                </li>
                <li>
                  Educación en nuevas tecnologías de monitoreo (Apps, técnicas
                  de autoevaluación, etc) para hacer los cambios más fáciles,
                  medibles, y efectivos
                </li>
              </ul>
            </div>

            <div className="mt-3">
              <h4 className="font-medium mb-1">
                3a etapa. Monitoreo de resultados y ajustes del tratamiento
              </h4>
              <p>
                Finalmente, reconocemos que no todos los cambios se pueden
                iniciar al mismo tiempo y no todas las metas se logran de
                inmediato. Además, hay muchas condiciones ambientales y
                personales pueden cambiar en el tiempo. Nuestro programa básico
                tiene una duración entre 3 - 4 meses. A lo largo del programa
                evaluamos un conjunto de más de 40 indicadores basados en
                evidencia científica que abarcan mediciones biológicas,
                sociales, conductuales, y ambientales. El monitoreo de estas
                variables nos permite ir haciendo los ajustes necesarios para
                llevarte de la mano a alcanzar las metas y lograr el éxito.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="#contact"
              className="bg-main inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Agenda tu cita aquí
            </a>
          </div>
        </div>
      ),
    },
    {
      id: "care",
      title: "Cuidados Pre y Postoperatorios de Cirugía Bariátrica",
      icon: <Scissors className="w-6 h-6 md:w-7 md:h-7" />,
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              ¿Qué es la cirugía bariátrica?
            </h3>
            <p>
              La cirugía bariátrica se define como modificaciones quirúrgicas de
              la anatomía del aparato digestivo con el objetivo de perder y
              normalizar la cantidad de grasa corporal, mejorar la regulación de
              la secreción de insulina con el fin de revertir la obesidad, la
              diabetes y sus complicaciones asociadas. Sin embargo, muchos
              pacientes no son evaluados adecuadamente o llegan mal preparados
              para este cambio y, es decir, poco informados sobre los cambios de
              estilo de vida necesarios, ejercicio para evitar la pérdida de
              masa muscular, dieta pre y post-operatoria, evaluación de la
              aptitud mental para la cirugía, entre otros.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              ¿Cómo deben ser tratados?
            </h3>
            <p>
              El cuidado perioperatorio - antes y después de la cirugía-
              consiste en preparar al paciente antes de una cirugía para reducir
              riesgos, lograr las metas de la cirugía, y mejorar la
              recuperación. Esto incluye evaluaciones médicas, ajustes en
              medicamentos y orientación nutricional, control de estrés, y
              algunos cambios de estilo de vida.
            </p>
          </div>

          <div className="bg-primary/10 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">La solución</h3>

            <div className="mb-3">
              <h4 className="font-medium mb-1">¿Qué hacemos?</h4>
              <p>
                En Precision Care trabajamos de la mano con los equipos de
                cirugía bariátrica para evaluar y proveer al paciente todas las
                indicaciones y el monitoreo necesario para lograr los objetivos
                propuestos a largo plazo. Las Guías de Práctica Clínica
                establecen que, antes de la cirugía bariátrica, el paciente debe
                ser evaluado por un equipo multidisciplinario. La evaluación
                preoperatoria incluye la participación de un especialista en
                nutrición, citroen salud mental e idealmente un especialista en
                actividad física y ejercicio. Incluso se debe iniciar el
                ejercicio y cambios nutricionales antes de la intervención.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-1">¿Qué vas a lograr?</h4>
              <p>
                En Precision Care, te proporcionamos las herramientas y el apoyo
                necesario para maximizar los beneficios de tu cirugía
                bariátrica. Nuestro enfoque personalizado te ayudará a optimizar
                la pérdida de peso, mejorar tu salud metabólica, y reducir el
                riesgo de complicaciones. A través de nuestra colaboración
                constante, lograrás mejorar tu calidad de vida y asegurar que
                puedas mantener los cambios en el tiempo. Nos enfocamos en
                capacitarte para que adoptes hábitos saludables y efectivos a
                largo plazo, minimizando el riesgo de recuperación del peso
                perdido.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">¿Cómo lo hacemos?</h3>
            <p>
              En Precision Care diseñamos un programa para brindarte un enfoque
              integral hacia tu bienestar. Utilizamos un conjunto avanzado de
              herramientas de tamizaje que permiten detectar problemas antes de
              que aparezca la enfermedad, herramientas de diagnóstico y
              tecnológicas para evaluar tu estado de salud actual, generar un
              diagnóstico preciso, explicártelo claramente, y diseñar junto a ti
              un plan de intervención efectivo. Nuestras consultas y programa
              incluyen 3 etapas:
            </p>

            <div className="mt-3">
              <h4 className="font-medium mb-1">1a etapa. Evaluación</h4>
              <p>
                La primera etapa consiste en la evaluación inicial donde
                recolectamos un conjunto de datos que llamamos Ingresables que
                nos permiten:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Analizar tus hábitos de alimentación</li>
                <li>Evaluar tu nivel de actividad y aptitud física</li>
                <li>
                  Identificar tu riesgo cardiometabólico y otras condiciones
                  crónicas
                </li>
                <li>Estudiar tu composición corporal</li>
                <li>Analizar en detalle tus exámenes de laboratorio</li>
                <li>Evaluar tu salud emocional y calidad de sueño</li>
              </ul>
            </div>

            <div className="mt-3">
              <h4 className="font-medium mb-1">2da etapa. Intervención</h4>
              <p>
                En la segunda etapa, usamos la información obtenida para
                elaborar diagnósticos precisos y un plan de tratamiento adaptado
                a ti incluyendo cambios en tu estilo de vida y rutinas. Esto
                incluye varios aspectos que llamamos Entregables:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Plan nutricional personalizado</li>
                <li>
                  Rutinas de ejercicio y actividad física adaptadas a tus
                  necesidades
                </li>
                <li>Estrategias para mejorar la calidad de tu sueño</li>
                <li>
                  Técnicas para identificar y manejar tu estrés y otros
                  problemas emocionales que afecten tu salud
                </li>
                <li>
                  Prescripción de medicamentos preventivos únicamente cuando
                  sean necesarios, evitando la sobremedicación
                </li>
                <li>
                  Educación en nuevas tecnologías de monitoreo (Apps, técnicas
                  de autoevaluación, etc) para hacer los cambios más fáciles,
                  medibles, y efectivos
                </li>
              </ul>
            </div>

            <div className="mt-3">
              <h4 className="font-medium mb-1">
                3a etapa. Monitoreo de resultados y ajustes del tratamiento
              </h4>
              <p>
                Finalmente, reconocemos que no todos los cambios se pueden
                iniciar al mismo tiempo y no todas las metas se logran de
                inmediato. Además, hay muchas condiciones ambientales y
                personales pueden cambiar en el tiempo. Nuestro programa básico
                tiene una duración entre 3 - 4 meses. A lo largo del programa
                evaluamos un conjunto de más de 40 indicadores basados en
                evidencia científica que abarcan mediciones biológicas,
                sociales, conductuales, y ambientales. El monitoreo de estas
                variables nos permite ir haciendo los ajustes necesarios para
                llevarte de la mano a alcanzar las metas y lograr el éxito.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="#contact"
              className="bg-main inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Agenda tu cita aquí
            </a>
          </div>
        </div>
      ),
    },
    {
      id: "second",
      title: "Segunda Opinión Médica",
      icon: <MessageSquareQuote className="w-6 h-6 md:w-7 md:h-7" />,
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">El problema</h3>
            <p>
              Muchas enfermedades son difíciles de diagnosticar, los síntomas pueden ser inespecíficos y, en algunos casos, los pacientes no reciben un diagnóstico claro, diagnósticos contradictorios o tratamientos que no responden a sus necesidades. Además, en muchos sistemas de salud, las consultas son rápidas y no brindan el tiempo suficiente para una evaluación en profundidad.
            </p>
            <h3 className="font-semibold text-lg mb-2">¿Qué es una segunda opinión médica?</h3>
            <p>
              Es la evaluación de tu caso por un especialista altamente calificado que revisa tu historial médico, estudios y tratamientos previos para confirmar, aclarar o corregir un diagnóstico, así como ofrecerte opciones de manejo basadas en la mejor evidencia científica.
            </p>
            <h3 className="font-semibold text-lg mb-2">¿Cuál es la importancia de una segunda opinión médica?</h3>
            <p>
              Cuando hay dudas sobre un diagnóstico o un tratamiento, una segunda opinión:
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Aporta claridad y seguridad en la toma de decisiones.</li>
                <li>Evita errores diagnósticos o tratamientos innecesarios.</li>
                <li>Permite conocer opciones terapéuticas más avanzadas.</li>
                <li>Ayuda a definir el mejor plan de acción según el caso.</li>
                <li>O simplemente, te reduce el nivel de estrés que genera no poder tener acceso a un diagnostico de tus síntomas, condiciones o enfermedades</li>
              </ul>
            </p>
          </div>

          <div className="pt-2">
            <a
              href="#contact"
              className="bg-main inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Agenda tu cita aquí
            </a>
          </div>
        </div>
      ),
    },
    {
      id: "support",
      title: "Soporte Nutricional y Dietas Especiales",
      icon: <Apple className="w-6 h-6 md:w-7 md:h-7" />,
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              ¿Existe la necesidad de alimentación por sonda o endovenosa? ¿Qué
              es el soporte nutricional?
            </h3>
            <p>
              Algunas enfermedades impiden que el paciente pueda cubrir sus
              requerimientos nutricionales alimentándose normalmente por la vía
              oral. Cuando no se cubre el requerimiento de al menos el 60% de
              las calorías por un plazo de al menos 7 días o simplemente el
              paciente no se puede alimentar por la boca, requerimos usar
              técnicas de nutrición enteral - a través de sondas o tubos de
              alimentación en el estómago o intestino - o la nutrición
              parenteral - que consiste en alimentar con mezclas especiales de
              nutrientes directamente en la vena. Esta última puede ser a través
              un catéter colocado en una vena del brazo (nutrición parenteral
              periférica) o en una vena de mayor calibre del cuello (nutrición
              parenteral central). Todas estas técnicas para alimentar al
              paciente directamente con un tubo en el estómago o intestino, o
              con catéter en la vena es lo que se conoce como soporte
              nutricional.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              ¿Existe la necesidad de dietas especiales?
            </h3>
            <p>
              Múltiples condiciones de salud se ven mejoradas por intervenciones
              nutricionales precisas o dietas especiales. Aquí algunos ejemplos:
              Dietas bajas en Oligosacáridos, Disacáridos, Monosacáridos y
              Polioles Fermentables (FODMAPs) para pacientes con síndrome de
              intestino irritable; Dietas de exclusión por etapas para pacientes
              con alergias alimentarias; Modificaciones nutricionales
              específicas para atenuar el Trastorno por déficit de atención con
              hiperactividad (TDAH); Dieta Antiinflamatoria (Mediterránea) para
              esclerosis múltiple; Dietas de bajo índice glucémico y ricas en
              omega-3 para Síndrome de Ovario poliquístico; Dieta cetogénica
              para pacientes con Epilepsia; Dietas libre de gluten para
              Enfermedad celíaca; Dietas especiales para Rectocolitis ulcerosa y
              Enfermedad de Crohn; Dietas especiales para Cáncer de Colon y
              Cáncer de mama, entre otras.
            </p>
          </div>

          <div className="bg-primary/10 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">La solución</h3>

            <div className="mb-3">
              <h4 className="font-medium mb-1">¿Qué hacemos?</h4>
              <h5 className="font-medium mt-2">Hacemos Soporte nutricional</h5>
              <p>
                El equipo de especialistas en nutrición de Precision Care
                realizará la evaluación nutricional, obtendrá diagnósticos
                precisos del estado nutricional y composición corporal, la
                composición exacta de la ingesta en comparación con las
                necesidades del paciente y diseñará un plan de nutrición
                personalizado acorde al estado clínico del paciente. Esto
                incluye el cálculo preciso del requerimiento calórico, de
                macronutrientes (carbohidratos, grasas, y proteínas) y
                micronutrientes (vitaminas y minerales), la vía correcta de
                administración (oral, sonda o catéter) y la supervisión de la
                evolución del paciente. Nuestro equipo coordinará las acciones
                del equipo de atención (enfermera) y trabajará en equipo con los
                médicos tratantes. Estos tratamientos pueden ser administrados
                en la casa con una adecuada supervisión por personal de
                enfermería capacitado y adaptarse a cada situación particular
                del paciente.
              </p>

              <h5 className="font-medium mt-2">Hacemos Dietas especiales</h5>
              <p>
                El equipo de Precision Care diseñará los planes de Dietas
                Especiales para cada paciente de acuerdo a su patología y
                condición clínica. Sin embargo, no será una lista de alimentos
                permitidos o un plan estándar para todos los pacientes. Nosotros
                diseñamos una dieta personalizada tomando en cuenta los gustos y
                preferencias del paciente, las condiciones económicas, los
                horarios y rutinas, y las tolerancias individuales. Además,
                educamos al paciente o los familiares para que aprendan a
                diseñar sus propios menús usando las herramientas disponibles.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-1">¿Qué vas a lograr?</h4>
              <p>
                Con nuestros servicios de soporte nutricional y dietas
                especiales, alcanzarás un óptimo estado nutricional que
                contribuirá significativamente a tu recuperación y bienestar
                general. Al recibir un plan personalizado, podrás satisfacer tus
                necesidades calóricas y nutrientes específicos, mejorando así tu
                calidad de vida y reduciendo el riesgo de complicaciones
                asociadas a una nutrición inadecuada. Además, te empoderamos con
                el conocimiento necesario para tomar decisiones dietéticas
                informadas y flexibles, adaptadas a tus condiciones de salud
                individuales.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">¿Cómo lo hacemos?</h3>
            <p>
              En Precision Care diseñamos un programa para brindarte un enfoque
              integral hacia tu bienestar. Utilizamos un conjunto avanzado de
              herramientas de tamizaje que permiten detectar problemas antes de
              que aparezca la enfermedad, herramientas de diagnóstico y
              tecnológicas para evaluar tu estado de salud actual, generar un
              diagnóstico preciso, explicártelo claramente, y diseñar junto a ti
              un plan de intervención efectivo. Nuestras consultas y programa
              incluyen 3 etapas:
            </p>

            <div className="mt-3">
              <h4 className="font-medium mb-1">1a etapa. Evaluación</h4>
              <p>
                La primera etapa consiste en la evaluación inicial donde
                recolectamos un conjunto de datos que llamamos Ingresables que
                nos permiten:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Analizar tus hábitos de alimentación</li>
                <li>Evaluar tu nivel de actividad y aptitud física</li>
                <li>
                  Identificar tu riesgo cardiometabólico y otras condiciones
                  crónicas
                </li>
                <li>Estudiar tu composición corporal</li>
                <li>Analizar en detalle tus exámenes de laboratorio</li>
                <li>Evaluar tu salud emocional y calidad de sueño</li>
              </ul>
            </div>

            <div className="mt-3">
              <h4 className="font-medium mb-1">2da etapa. Intervención</h4>
              <p>
                En la segunda etapa, usamos la información obtenida para
                elaborar diagnósticos precisos y un plan de tratamiento adaptado
                a ti incluyendo cambios en tu estilo de vida y rutinas. Esto
                incluye varios aspectos que llamamos Entregables:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Plan nutricional personalizado</li>
                <li>
                  Rutinas de ejercicio y actividad física adaptadas a tus
                  necesidades
                </li>
                <li>Estrategias para mejorar la calidad de tu sueño</li>
                <li>
                  Técnicas para identificar y manejar tu estrés y otros
                  problemas emocionales que afecten tu salud
                </li>
                <li>
                  Prescripción de medicamentos preventivos únicamente cuando
                  sean necesarios, evitando la sobremedicación
                </li>
                <li>
                  Educación en nuevas tecnologías de monitoreo (Apps, técnicas
                  de autoevaluación, etc) para hacer los cambios más fáciles,
                  medibles, y efectivos
                </li>
              </ul>
            </div>

            <div className="mt-3">
              <h4 className="font-medium mb-1">
                3a etapa. Monitoreo de resultados y ajustes del tratamiento
              </h4>
              <p>
                Finalmente, reconocemos que no todos los cambios se pueden
                iniciar al mismo tiempo y no todas las metas se logran de
                inmediato. Además, hay muchas condiciones ambientales y
                personales pueden cambiar en el tiempo. Nuestro programa básico
                tiene una duración entre 3 - 4 meses. A lo largo del programa
                evaluamos un conjunto de más de 40 indicadores basados en
                evidencia científica que abarcan mediciones biológicas,
                sociales, conductuales, y ambientales. El monitoreo de estas
                variables nos permite ir haciendo los ajustes necesarios para
                llevarte de la mano a alcanzar las metas y lograr el éxito.
              </p>
            </div>
          </div>
          <div className="pt-2">
            <a
              href="#contact"
              className="bg-main inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Agenda tu cita aquí
            </a>
          </div>
        </div>
      ),
    },
    {
      id: "migrants",
      title: "Salud de Migrantes",
      icon: <Globe className="w-6 h-6 md:w-7 md:h-7" />,
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">¿Qué es un migrante?</h3>
            <p>
              Es aquella persona que ha dejado su casa y su país por 2 razones:
              1. Por decisión propia (razones económicas, estudios, trabajo,
              reunificación familiar); y 2. Aquellos que son desplazados por la
              fuerza debido a conflictos, persecución o desastres ambientales e
              incluyen a los refugiados, solicitantes de asilo y personas
              indocumentadas.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              ¿Cuáles son los principales problemas de la población migrante?
            </h3>
            <p>
              Los migrantes enfrentan múltiples desafíos de salud debido a las
              enfermedades que ya tenían en su país de origen (diabetes,
              hipertensión, obesidad, enfermedad cardiovascular, etc), el estrés
              del viaje, las limitaciones económicas, y las dificultades de
              acceso a los servicios de salud en su país de destino. A esto se
              le suma el "duelo migratorio" que es la adaptación emocional y
              psicológica para enfrentar esa transformación profunda en su
              identidad y entorno. Todo esto, aumenta el riesgo de que se
              desarrollen enfermedades crónicas, mientras que las barreras
              económicas, culturales y legales limitan la atención médica
              disponible.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              ¿Cómo los migrantes deben ser tratados?
            </h3>
            <p>
              Los migrantes deben recibir atención médica que sea comprensiva,
              accesible e inclusiva, respetando su diversidad cultural y sus
              necesidades específicas. Es esencial que el enfoque de salud para
              migrantes considere los siguientes aspectos:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                <span className="font-medium">Accesibilidad y Equidad:</span>{" "}
                Asegurar que todos los migrantes, independientemente de su
                estatus legal, tengan acceso a servicios de salud sin
                discriminación, especialmente los más vulnerables. Esto incluye
                facilitar el acceso a información clara y concisa sobre sus
                derechos de salud y servicios disponibles.
              </li>
              <li>
                <span className="font-medium">
                  Atención Integrada y Coordinada:
                </span>{" "}
                Proveer un enfoque holístico que no solo atienda las necesidades
                médicas físicas, sino también las emocionales y psicológicas.
                Esto implica coordinar con otros servicios de apoyo, como
                consejería y asistencia social, para abordar el duelo migratorio
                y el estrés.
              </li>
              <li>
                <span className="font-medium">
                  Respeto Cultural y Lingüístico:
                </span>{" "}
                Ofrecer atención que respete y valore la diversidad cultural,
                asegurando servicios que cuenten con intérpretes y materiales
                educativos en el idioma del paciente para mejorar la
                comunicación y la comprensión.
              </li>
              <li>
                <span className="font-medium">Prevención y Educación:</span>{" "}
                Implementar programas de prevención y educación para que los
                migrantes puedan tomar decisiones informadas sobre su salud,
                promoviendo estilos de vida saludables que se adapten a su nueva
                realidad.
              </li>
              <li>
                <span className="font-medium">Participación Activa:</span>{" "}
                Fomentar la participación activa de los migrantes en su propio
                cuidado de salud, empoderándolos para que expresen sus
                preocupaciones, preferencias y experiencias únicas.
              </li>
            </ul>
            <p className="mt-2">
              A través de estas prácticas, los migrantes podrán recibir el apoyo
              necesario para adaptarse a su nuevo entorno mientras mantienen y
              mejoran su bienestar general.
            </p>
          </div>

          <div className="bg-primary/10 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">La solución</h3>

            <div className="mb-3">
              <h4 className="font-medium mb-1">¿Qué hacemos?</h4>
              <p>
                Nuestra plataforma de Precision Care ofrece una solución
                accesible y eficaz para reducir estos riesgos, facilitando el
                acceso a especialistas, promoviendo cambios en el estilo de vida
                y ajustando tratamientos de forma personalizada, sin importar la
                ubicación o el estatus migratorio del paciente. Este proyecto de
                salud a migrantes se concibió y está respaldado por el Equipo de
                salud de Migrantes del Programa Lown Scholars de la Escuela de
                Salud Pública de la Universidad de Harvard.
              </p>
              <p className="mt-2">
                En Precision Care, creemos en un acceso justo y equitativo a la
                atención médica para todos los migrantes. Nuestro compromiso es
                ofrecerte un camino hacia una vida más saludable y estable, a
                través de soluciones innovadoras y adaptativas que se ajusten a
                tu contexto personal y cultural.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-1">¿Qué vas a lograr?</h4>
              <p>
                Al unirte a nuestro programa de salud para migrantes en
                Precision Care, lograrás una transformación significativa en tu
                bienestar físico y mental. Nuestro enfoque te permitirá:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  <span className="font-medium">
                    Acceder a Cuidados de Salud Personalizados:
                  </span>{" "}
                  Recibirás atención médica adaptada a tus necesidades
                  individuales, ayudándote a manejar condiciones crónicas
                  preexistentes y reducir los riesgos de nuevas enfermedades.
                </li>
                <li>
                  <span className="font-medium">
                    Superar el Duelo Migratorio:
                  </span>{" "}
                  Fortalecerás tu salud mental a través de estrategias diseñadas
                  para afrontar el estrés y la adaptación emocional necesarios
                  en el proceso migratorio.
                </li>
                <li>
                  <span className="font-medium">
                    Navegar Eficazmente el Sistema de Salud Local:
                  </span>{" "}
                  Te proporcionaremos las herramientas y orientación necesarias
                  para entender y acceder al sistema de salud del país al que
                  has migrado. Esto incluye información sobre cómo registrarte
                  para recibir atención médica, entender tus derechos de salud,
                  y aprovechar los recursos disponibles para migrantes.
                </li>
                <li>
                  <span className="font-medium">
                    Desarrollar Hábitos Saludables y Sostenibles:
                  </span>{" "}
                  Mejorarás tu calidad de vida mediante cambios positivos y
                  duraderos en tu estilo de vida, como una mejor nutrición,
                  actividad física, y manejo del estrés, adaptados a tus nuevas
                  circunstancias.
                </li>
                <li>
                  <span className="font-medium">
                    Sentirte Empoderado y Respaldado:
                  </span>{" "}
                  En Precision Care, te ofrecemos un acompañamiento continuo,
                  asegurando que siempre cuentes con el apoyo y la información
                  necesaria para tomar decisiones informadas sobre tu salud y
                  bienestar en tu nuevo entorno.
                </li>
              </ul>
              <p className="mt-2">
                Nuestro compromiso es acompañarte en cada paso de tu viaje hacia
                una vida más saludable y estable, proporcionándote no solo
                atención médica, sino también la confianza para enfrentar con
                éxito los desafíos del entorno migrante.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">¿Cómo lo hacemos?</h3>
            <p>
              En Precision Care diseñamos un programa para brindarte un enfoque
              integral hacia tu bienestar. Utilizamos un conjunto avanzado de
              herramientas de tamizaje que permiten detectar problemas antes de
              que aparezca la enfermedad, herramientas de diagnóstico y
              tecnológicas para evaluar tu estado de salud actual, generar un
              diagnóstico preciso, explicártelo claramente, y diseñar junto a ti
              un plan de intervención efectivo. Nuestras consultas y programa
              incluyen 3 etapas:
            </p>

            <div className="mt-3">
              <h4 className="font-medium mb-1">1a etapa. Evaluación</h4>
              <p>
                La primera etapa consiste en la evaluación inicial donde
                recolectamos un conjunto de datos que llamamos Ingresables que
                nos permiten:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Analizar tus hábitos de alimentación</li>
                <li>Evaluar tu nivel de actividad y aptitud física</li>
                <li>
                  Identificar tu riesgo cardiometabólico y otras condiciones
                  crónicas
                </li>
                <li>Estudiar tu composición corporal</li>
                <li>Analizar en detalle tus exámenes de laboratorio</li>
                <li>Evaluar tu salud emocional y calidad de sueño</li>
              </ul>
            </div>

            <div className="mt-3">
              <h4 className="font-medium mb-1">2da etapa. Intervención</h4>
              <p>
                En la segunda etapa, usamos la información obtenida para
                elaborar diagnósticos precisos y un plan de tratamiento adaptado
                a ti incluyendo cambios en tu estilo de vida y rutinas. Esto
                incluye varios aspectos que llamamos Entregables:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Plan nutricional personalizado</li>
                <li>
                  Rutinas de ejercicio y actividad física adaptadas a tus
                  necesidades
                </li>
                <li>Estrategias para mejorar la calidad de tu sueño</li>
                <li>
                  Técnicas para identificar y manejar tu estrés y otros
                  problemas emocionales que afecten tu salud
                </li>
                <li>
                  Prescripción de medicamentos preventivos únicamente cuando
                  sean necesarios, evitando la sobremedicación
                </li>
                <li>
                  Educación en nuevas tecnologías de monitoreo (Apps, técnicas
                  de autoevaluación, etc) para hacer los cambios más fáciles,
                  medibles, y efectivos
                </li>
              </ul>
            </div>

            <div className="mt-3">
              <h4 className="font-medium mb-1">
                3a etapa. Monitoreo de resultados y ajustes del tratamiento
              </h4>
              <p>
                Finalmente, reconocemos que no todos los cambios se pueden
                iniciar al mismo tiempo y no todas las metas se logran de
                inmediato. Además, hay muchas condiciones ambientales y
                personales pueden cambiar en el tiempo. Nuestro programa básico
                tiene una duración entre 3 - 4 meses. A lo largo del programa
                evaluamos un conjunto de más de 40 indicadores basados en
                evidencia científica que abarcan mediciones biológicas,
                sociales, conductuales, y ambientales. El monitoreo de estas
                variables nos permite ir haciendo los ajustes necesarios para
                llevarte de la mano a alcanzar las metas y lograr el éxito.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="#contact"
              className="bg-main inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Agenda tu cita aquí
            </a>
          </div>
        </div>
      ),
    },
    // {
    //   id: "nutrition",
    //   title: "Nutrición Personalizada",
    //   icon: <Utensils className="w-6 h-6 md:w-7 md:h-7" />,
    //   content: (
    //     <div className="space-y-4">
    //       <div>
    //         <p>
    //           Servicio de nutrición personalizada adaptada a las necesidades
    //           específicas de cada paciente, considerando sus objetivos de salud,
    //           preferencias alimentarias y condiciones médicas.
    //         </p>
    //       </div>

    //       <div className="pt-2">
    //         <a
    //           href="#contact"
    //           className="bg-main inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
    //         >
    //           Agenda tu cita aquí
    //         </a>
    //       </div>
    //     </div>
    //   ),
    // },
    {
      id: "healthy",
      title: "Deportistas, Atletas y Personas Sanas",
      icon: <Bike className="w-6 h-6 md:w-7 md:h-7" />,
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              ¿Por qué es importante chequear tu salud?
            </h3>
            <p>
              La mayoría de las enfermedades crónicas no avisan de su presencia. Por tanto, una evaluación de salud anual es una estrategia muy potente para detectar condiciones en etapas iniciales y tratarlas a tiempo para que no se transformen en enfermedades. En el caso de los atletas se asume que son personas sanas. Sin embargo, no siempre es así y también es recomendable que chequeen su estado de salud.
            </p>
            <p>Además, la medicina del deporte se enfoca en optimizar el rendimiento físico a través de estrategias nutricionales, entrenamiento adecuado y control médico. Es decir, no se trata solo del entrenamiento deportivo sino de todos los factores que garantizan lograr el máximo rendimiento. </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              ¿Cómo mantenerse sano?
            </h3>
            <p>
              Las personas aparentemente sanas, incluyendo deportistas y atletas, requieren crear o mantener buenos hábitos de vida para prevenir enfermedades y mejorar su condición física y mental. Esto los hará personas más productivas y  exitosas.
            </p>
          </div>

          <div className="bg-primary/10 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">La solución</h3>

            <div className="mb-3">
              <h4 className="font-medium mb-1">¿Qué hacemos?</h4>
              <p>
                En Precision Care tenemos un equipo de salud especializado en medicina de estilo de vida. Esta es una rama de la medicina que incluye todas las estrategias para el tratamiento de las enfermedades excepto el uso de medicamentos y cirugía. Tener buenos hábitos de alimentación, un nivel suficiente de actividad física, cantidad y calidad de sueño, y una mente en el presente que logre controlar el estrés son las bases de la salud en cualquier momento de la vida. Lo ideal es implementarlo desde la infancia. Promovemos la educación de niños y adolescentes
              </p>
              <p>Nuestro equipo de fisiólogos del ejercicio, nutricionistas y psicólogos pueden liderar intervenciones que mejoren tu rendimiento deportivo. Además nuestro equipo de médicos especialistas en estilo de vida y nutricionistas te darán las herramientas para saber cual es la alimentación, composición corporal ideal de acuerdo a tu disciplina. </p>
            </div>

            <div>
              <h4 className="font-medium mb-1">¿Qué vas a lograr?</h4>
              <p>
                De la mano de nuestro equipo de Precision Care, lograrás optimizar tu salud y rendimiento físico, permitiéndote alcanzar tus metas deportivas y personales de manera eficiente y segura. Al enfocarnos en crear y mantener hábitos de vida saludables, mejorarás no solo en el ámbito deportivo, sino también tu calidad de vida en general. Obtendrás un plan personalizado que abordará aspectos clave como la nutrición, el entrenamiento físico, la gestión del estrés y el sueño, asegurando que tu cuerpo y mente funcionen en armonía.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">¿Cómo lo hacemos?</h3>
            <p>
              En Precision Care diseñamos un programa para brindarte un enfoque
              integral hacia tu bienestar. Utilizamos un conjunto avanzado de
              herramientas de tamizaje que permiten detectar problemas antes de
              que aparezca la enfermedad, herramientas de diagnóstico y
              tecnológicas para evaluar tu estado de salud actual, generar un
              diagnóstico preciso, explicártelo claramente, y diseñar junto a ti
              un plan de intervención efectivo. Nuestras consultas y programa
              incluyen 3 etapas:
            </p>

            <div className="mt-3">
              <h4 className="font-medium mb-1">1a etapa. Evaluación</h4>
              <p>
                La primera etapa consiste en la evaluación inicial donde
                recolectamos un conjunto de datos que llamamos Ingresables que
                nos permiten:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Analizar tus hábitos de alimentación</li>
                <li>Evaluar tu nivel de actividad y aptitud física</li>
                <li>
                  Identificar tu riesgo cardiometabólico y otras condiciones
                  crónicas
                </li>
                <li>Estudiar tu composición corporal</li>
                <li>Analizar en detalle tus exámenes de laboratorio</li>
                <li>Evaluar tu salud emocional y calidad de sueño</li>
              </ul>
            </div>

            <div className="mt-3">
              <h4 className="font-medium mb-1">2da etapa. Intervención</h4>
              <p>
                En la segunda etapa, usamos la información obtenida para
                elaborar diagnósticos precisos y un plan de tratamiento adaptado
                a ti incluyendo cambios en tu estilo de vida y rutinas. Esto
                incluye varios aspectos que llamamos Entregables:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Plan nutricional personalizado</li>
                <li>
                  Rutinas de ejercicio y actividad física adaptadas a tus
                  necesidades
                </li>
                <li>Estrategias para mejorar la calidad de tu sueño</li>
                <li>
                  Técnicas para identificar y manejar tu estrés y otros
                  problemas emocionales que afecten tu salud
                </li>
                <li>
                  Prescripción de medicamentos preventivos únicamente cuando
                  sean necesarios, evitando la sobremedicación
                </li>
                <li>
                  Educación en nuevas tecnologías de monitoreo (Apps, técnicas
                  de autoevaluación, etc) para hacer los cambios más fáciles,
                  medibles, y efectivos
                </li>
              </ul>
            </div>

            <div className="mt-3">
              <h4 className="font-medium mb-1">
                3a etapa. Monitoreo de resultados y ajustes del tratamiento
              </h4>
              <p>
                Finalmente, reconocemos que no todos los cambios se pueden
                iniciar al mismo tiempo y no todas las metas se logran de
                inmediato. Además, hay muchas condiciones ambientales y
                personales pueden cambiar en el tiempo. Nuestro programa básico
                tiene una duración entre 3 - 4 meses. A lo largo del programa
                evaluamos un conjunto de más de 40 indicadores basados en
                evidencia científica que abarcan mediciones biológicas,
                sociales, conductuales, y ambientales. El monitoreo de estas
                variables nos permite ir haciendo los ajustes necesarios para
                llevarte de la mano a alcanzar las metas y lograr el éxito.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="#contact"
              className="bg-main inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Agenda tu cita aquí
            </a>
          </div>
        </div>
      ),
    },
    {
      id: "obesitychild",
      title: "Niños Y Adolescentes: Obesidad Y Riesgo Cardiometabólico",
      icon: <Activity className="w-6 h-6 md:w-7 md:h-7" />,
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              ¿Qué es la obesidad infantil?
            </h3>
            <p>
              La obesidad infantil es una condición médica seria que ocurre
              cuando un niño o adolescente tiene un exceso de grasa corporal que
              puede afectar su salud o bienestar. Esta situación afecta su
              desarrollo físico e incrementa el riesgo de enfermedades
              cardiometabólicas como la diabetes tipo 2, la hipertensión y el
              colesterol alto a una edad temprana. Además, la obesidad también
              impacta la salud emocional con mayor frecuencia de ansiedad,
              depresión, y estrés psicosocial.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              ¿Por qué es importante evaluarla?
            </h3>
            <p>
              La cantidad de niños y adolescentes con obesidad ha aumentado dramáticamente en las últimas décadas debido a factores como una dieta poco saludable, la falta de actividad física, y el aumento del tiempo frente a pantallas de celulares. Esto puede llevar a complicaciones de salud a largo plazo y afectar su calidad de vida en el presente y el futuro. Los niños con obesidad tienen mayor riesgo de presentar resistencia a la insulina, prediabetes o diabetes tipo 2, hipertensión, dislipidemia, hígado graso, alteraciones de la menstruación y pubertad temprana en niñas, pubertad tardía y ginecomastia (crecimiento mamario en niños).
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              ¿Qué deberías hacer?
            </h3>
            <p>
              Si tu hijo o hija tiene sobrepeso dale la oportunidad de que investiguemos si hay complicaciones asociadas, no solo físicas o metabólicas, sino también emocionales. Muchos son tratados con estigma y discriminacion lo cual afecta la salud mental y desempeño del niño o adolescente.  Abordar la obesidad infantil requiere un enfoque multidisciplinario que no solo incluya cambios en la dieta y el ejercicio, sino también el apoyo emocional y educativo para el niño y la familia. Un tratamiento efectivo también debe enfocarse en la prevención de problemas cardiometabólicos a través de la detección temprana y la intervención adecuada.
            </p>
          </div>

          <div className="bg-primary/10 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">La solución</h3>

            <div className="mb-3">
              <h4 className="font-medium mb-1">¿Qué hacemos?</h4>
              <p>
                En Precision Care usamos el modelo de enfermedad crónica por
                adiposidad para ver el panorama más amplio incluyendo como
                centro al paciente, sus problemas físicos y emocionales, su
                entorno, su cultura, sus rutinas, sus creencias y tomamos en
                cuenta todo aquello que nos permita tener una visión de 360
                grados de nuestros pacientes y confeccionar un plan de acción
                personalizado. Esto forma parte de la medicina de precisión, y
                de ahí viene nuestro nombre. Cada plan es personalizado, porque
                cada caso es diferente y cada persona es diferente.
              </p>
              <p className="mt-2">
                En Precision Care, nuestra abordaje integral incluye:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  <strong>Evaluación Integral</strong>: Realizamos una evaluación exhaustiva que incluye el análisis de hábitos alimenticios, actividad física, antecedentes familiares, y mediciones corporales, composición corporal,  y otros indicadores cardiometabólicos.
                </li>
                <li>
                  <strong>Intervención Personalizada</strong>: Diseñamos planes de acción que incluyen prescripción nutricional, rutinas de ejercicio, y estrategias para el manejo del estrés y las emociones. Nuestra meta es involucrar a toda la familia, creando un ambiente de apoyo que fomente la salud y el bienestar.
                </li>
                <li>
                  <strong>Educación y Apoyo Continuo</strong>: Ofrecemos educación continua para empoderar a los niños y sus familias, ayudándoles a adquirir herramientas para hacer elecciones de estilo de vida saludable a largo plazo.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-1">¿Qué vas a lograr?</h4>
              <p>
                Con nuestro programa, tu hijo(a) logrará una mejor salud física y emocional, reduciendo el riesgo de enfermedades cardiometabólicas tanto en el presente como en el futuro. Fomentamos la construcción de hábitos saludables que pueden durar toda la vida, mejorando su calidad de vida y autoestima. En Precision Care, estamos comprometidos a acompañar a tu familia en cada paso del camino hacia un futuro más saludable.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">¿Cómo lo hacemos?</h3>
            <p>
              En Precision Care diseñamos un programa para brindarte un enfoque
              integral hacia tu bienestar. Utilizamos un conjunto avanzado de
              herramientas de tamizaje que permiten detectar problemas antes de
              que aparezca la enfermedad, herramientas de diagnóstico y
              tecnológicas para evaluar tu estado de salud actual, generar un
              diagnóstico preciso, explicártelo claramente, y diseñar junto a ti
              un plan de intervención efectivo. Nuestras consultas y programa
              incluyen 3 etapas:
            </p>

            <div className="mt-3">
              <h4 className="font-medium mb-1">1a etapa. Evaluación</h4>
              <p>
                La primera etapa consiste en la evaluación inicial donde
                recolectamos un conjunto de datos que llamamos Ingresables que
                nos permiten:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Analizar tus hábitos de alimentación</li>
                <li>Evaluar tu nivel de actividad y aptitud física</li>
                <li>
                  Identificar tu riesgo cardiometabólico y otras condiciones
                  crónicas
                </li>
                <li>Estudiar tu composición corporal</li>
                <li>Analizar en detalle tus exámenes de laboratorio</li>
                <li>Evaluar tu salud emocional y calidad de sueño</li>
              </ul>
            </div>

            <div className="mt-3">
              <h4 className="font-medium mb-1">2da etapa. Intervención</h4>
              <p>
                En la segunda etapa, usamos la información obtenida para
                elaborar diagnósticos precisos y un plan de tratamiento adaptado
                a ti incluyendo cambios en tu estilo de vida y rutinas. Esto
                incluye varios aspectos que llamamos Entregables:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Plan nutricional personalizado</li>
                <li>
                  Rutinas de ejercicio y actividad física adaptadas a tus
                  necesidades
                </li>
                <li>Estrategias para mejorar la calidad de tu sueño</li>
                <li>
                  Técnicas para identificar y manejar tu estrés y otros
                  problemas emocionales que afecten tu salud
                </li>
                <li>
                  Prescripción de medicamentos preventivos únicamente cuando
                  sean necesarios, evitando la sobremedicación
                </li>
                <li>
                  Educación en nuevas tecnologías de monitoreo (Apps, técnicas
                  de autoevaluación, etc) para hacer los cambios más fáciles,
                  medibles, y efectivos
                </li>
              </ul>
            </div>

            <div className="mt-3">
              <h4 className="font-medium mb-1">
                3a etapa. Monitoreo de resultados y ajustes del tratamiento
              </h4>
              <p>
                Finalmente, reconocemos que no todos los cambios se pueden
                iniciar al mismo tiempo y no todas las metas se logran de
                inmediato. Además, hay muchas condiciones ambientales y
                personales pueden cambiar en el tiempo. Nuestro programa básico
                tiene una duración entre 3 - 4 meses. A lo largo del programa
                evaluamos un conjunto de más de 40 indicadores basados en
                evidencia científica que abarcan mediciones biológicas,
                sociales, conductuales, y ambientales. El monitoreo de estas
                variables nos permite ir haciendo los ajustes necesarios para
                llevarte de la mano a alcanzar las metas y lograr el éxito.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="#contact"
              className="bg-main inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Agenda tu cita aquí
            </a>
          </div>
        </div>
      ),
    },
    {
      id: "mentalhealth",
      title: "Salud Mental Y Bienestar Emocional",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" x2="9.01" y1="9" y2="9" />
          <line x1="15" x2="15.01" y1="9" y2="9" />
        </svg>
      ),
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">El problema</h3>
            <p>
              ¿Qué es el bienestar emocional? El bienestar emocional implica un equilibrio entre la salud mental positiva y la capacidad de enfrentar situaciones estresantes o desafiantes. En la actualidad, muchas personas luchan con estrés crónico, ansiedad y depresión, factores que pueden impactar significativamente su salud física y calidad de vida.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">¿Cuál es el impacto?</h3>
            <p>
              Alteraciones en el bienestar emocional afectan no solo la salud mental, sino también aumentan el riesgo de enfermedades cardiovasculares, obesidad y diabetes, creando un círculo vicioso que deteriora el bienestar general.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">¿Cómo debe ser abordado?</h3>
            <p>
              Abordar el bienestar emocional requiere una atención integral, que no se limite a reducir síntomas, sino que también promueva la resiliencia y el desarrollo personal. Un enfoque individualizado que combine terapias psicológicas, estrategias de manejo del estrés y educación sobre salud mental es esencial.
            </p>
          </div>

          <div className="bg-primary/10 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">La solución</h3>

            <div className="mb-3">
              <h4 className="font-medium mb-1">¿Qué hacemos?</h4>
              <p>
                En Precision Care, colocamos al ser humano en el centro de nuestras estrategias, comprendiendo su contexto emocional y social. Trabajamos en conjunto con cada paciente para identificar estresores, promover habilidades de afrontamiento y fortalecer su bienestar a través de un plan personalizado. Las condiciones comúnmente identificadas y tratadas por nuestro equipo de psicólogos incluyen la ansiedad, depresión, estrés psicosocial, trastornos de conducta alimentaria (bulimia, anorexia nerviosa, síndrome del comedor nocturno, trastorno alimentario compulsivo), insomnio, adicciones (tabaco, alcohol) entre otros.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-1">¿Qué vas a lograr?</h4>
              <p>
                Con nuestro apoyo, te dotaremos de herramientas que te permitan gestionar tus emociones de manera eficaz, superar situaciones desafiantes, y fortalecer tu salud mental, logrando un equilibrio que se refleje en tu vida diaria.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">¿Cómo lo hacemos?</h3>
            <p>
              Nuestro enfoque consiste en:
            </p>
            <ol className="list-decimal pl-5 mt-2 space-y-1">
              <li>
                <strong>Evaluación Inicial:</strong> Identificación de factores de riesgo emocional mediante una evaluación exhaustiva de tus hábitos, antecedentes, y estado emocional actual.
              </li>
              <li>
                <strong>Intervención Personalizada:</strong> Implementación de un plan que puede incluir terapias cognitivo-conductuales, técnicas de mindfulness, y programas de relajación.
              </li>
              <li>
                <strong>Monitoreo y Ajustes:</strong> Revisión constante para ajustar y optimizar estrategias según tu progreso emocional y necesidades cambiantes.
              </li>
            </ol>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="w-full pt-[90px] 2md:pt-[148px]">
      <div className="mx-auto container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-main">
            Líneas de Servicio
          </h2>
          <p className="mt-4 text-lg text-main">
            Nuestro enfoque multidisciplinario y especializado nos permite
            abordar diversas condiciones de salud y enfocarnos en mejorar tu
            bienestar de manera integral
          </p>
        </div>
        <div className="mx-auto max-w-4xl space-y-4">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="border border-main rounded-lg overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className={`flex items-center justify-between w-full p-4 text-left transition-colors ${activeIndex === index
                    ? "bg-main text-primary-foreground"
                    : "hover:bg-muted/50"
                  }`}
                aria-expanded={activeIndex === index}
                aria-controls={`content-${service.id}`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex items-center justify-center rounded-full p-1.5 ${activeIndex === index
                        ? "bg-primary-foreground/20"
                        : "bg-primary/10"
                      }`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                </div>
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-200 ${activeIndex === index ? "rotate-180 transform" : ""
                    }`}
                />
              </button>
              <div
                id={`content-${service.id}`}
                className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-[5000px]" : "max-h-0"
                  }`}
              >
                <div className="p-4 bg-card text-card-foreground">
                  {service.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
