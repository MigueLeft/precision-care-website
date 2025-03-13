import React, { useEffect, useRef } from 'react';

const TimeLine = () => {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  
  const timelineData = [
    { year: 1990, title: 'MENCION "CUM LAUDE" EN MEDICINA', color: "#086367" },
    { year: 1997, title: "GRADUADO CON HONORES EN NUTRICION", color: "#027f83" },
    { year: 2014, title: "PROFESOR TITULAR DE FISIOLOGIA UCLA", color: "#00a0a4" },
    { year: 2015, title: "PREMIO A LA EXCELENCIA MÉDICA VENEZOLANA", color: "#00c6c6" },
    { year: 2017, title: "LOWN SCHOLAR HARVARD", color: "#19e8e5" },
    { year: 2019, title: "JOHN J. BOGLE AWARD", color: "#4dfbf3" },
    { year: 2021, title: "EB-1 PERSON OF EXTRAORDINARY ABILITY IN THE SCIENCES", color: "#7edff5" },
    { year: 2021, title: "HOMENAJE AL DR. BERNARD LOWN (PREMIO NOBEL DE LA PAZ 1985)", color: "#a3e9e5" }
  ];
  
  // Organizar datos en filas (2 filas de 4 elementos)
  const row1 = timelineData.slice(0, 4);
  const row2 = timelineData.slice(4, 8);
  
  useEffect(() => {
    const updatePath = () => {
      if (!containerRef.current || !svgRef.current) return;
      
      const container = containerRef.current;
      const svg = svgRef.current;
      const dots = container.querySelectorAll('.timeline-dot');
      
      if (dots.length === timelineData.length) {
        const positions = Array.from(dots).map(dot => {
          const rect = dot.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          return {
            x: rect.left - containerRect.left + rect.width/2,
            y: rect.top - containerRect.top + rect.height/2
          };
        });
        
        // Crear el path para la primera fila
        let pathD = `M ${positions[0].x},${positions[0].y} `;
        
        // Conectar puntos de la primera fila
        for (let i = 1; i < 4; i++) {
          pathD += `L ${positions[i].x},${positions[i].y} `;
        }
        
        // Curva para conectar con la segunda fila
        pathD += `C ${positions[3].x + 50},${positions[3].y} ${positions[7].x + 50},${positions[7].y} ${positions[7].x},${positions[7].y} `;
        
        // Conectar puntos de la segunda fila (de derecha a izquierda)
        for (let i = 6; i >= 4; i--) {
          pathD += `L ${positions[i].x},${positions[i].y} `;
        }
        
        // Actualizar el atributo d del path SVG
        const path = svg.querySelector('path');
        if (path) {
          path.setAttribute('d', pathD);
        }
        
        // Ajustar el viewBox del SVG
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
        svg.setAttribute('viewBox', `0 0 ${containerWidth} ${containerHeight}`);
      }
    };
    
    // Ejecutar después de que el componente se monta
    setTimeout(updatePath, 100);
    
    // Actualizar cuando cambia el tamaño de la ventana
    window.addEventListener('resize', updatePath);
    
    return () => {
      window.removeEventListener('resize', updatePath);
    };
  }, [timelineData.length]);
  
  return (
    <div className="w-full max-w-6xl mx-auto px-4">  
      <div ref={containerRef} className="relative">
        {/* SVG para las líneas curvas */}
        <svg ref={svgRef} className="absolute top-0 left-0 w-full h-full z-0">
          <path d="" stroke="#CBD5E1" strokeWidth="3" fill="none" />
        </svg>
        
        {/* Primera fila */}
        <div className="flex justify-between mb-20 relative z-10">
          {row1.map((item, index) => (
            <div key={`row1-${index}`} className="w-1/4 flex flex-col items-center px-2">
              <div className="font-bold text-lg mb-2" style={{ color: item.color }}>
                {item.year}
              </div>
              <div 
                className="timeline-dot w-6 h-6 rounded-full mb-2"
                style={{ backgroundColor: item.color }}
              />
              <div className="text-xs text-center text-gray-700 max-w-xs">
                {item.title}
              </div>
            </div>
          ))}
        </div>
        
        {/* Segunda fila */}
        <div className="flex justify-between flex-row-reverse relative z-10">
          {row2.map((item, index) => (
            <div key={`row2-${index}`} className="w-1/4 flex flex-col items-center px-2">
              <div className="font-bold text-lg mb-2" style={{ color: item.color }}>
                {item.year}
              </div>
              <div 
                className="timeline-dot w-6 h-6 rounded-full mb-2"
                style={{ backgroundColor: item.color }}
              />
              <div className="text-xs text-center text-gray-700 max-w-xs">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeLine;