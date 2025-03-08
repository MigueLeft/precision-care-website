import React, { useState } from "react";
import { SelectForm } from "./SelectForm";

export default function ContactForm() {
  const [values, setValues] = useState(new Set());
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    fecha: "",
    mensaje: "",
    migrante: false,
    soluciones: [],
  });
  const [formSubmitted, setFormSubmitted] = useState(false); // Estado para indicar si el formulario ha sido enviado

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSelect = (selectedKeys) => {
    const selectedKeysArray = Array.from(selectedKeys);
    // let filteredKeys;
    // if (!selectedKeysArray.includes('medicina') || !selectedKeysArray.includes('nutricion') || !selectedKeysArray.includes('ejercicio') || !selectedKeysArray.includes('psicologia') || !selectedKeysArray.includes('programa')) {
    //   filteredKeys = selectedKeysArray.slice(1);
    // } else {
    //   filteredKeys = selectedKeysArray;
    // }
    setFormData({
      ...formData,
      soluciones: selectedKeysArray,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("DATA DESDE EL FORMULARIO", formData)
    fetch('/api/sendForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      setFormData({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        fecha: "",
        mensaje: "",
        migrante: false,
        soluciones: [],
      });
      setValues(new Set());
      setFormSubmitted(true);
      setTimeout(() => setFormSubmitted(false), 3000);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <section id="contact" className="scroll-mt-[90px] lg:scroll-mt-[70px]">
      <div className="max-w-[1300px] mx-auto flex flex-col justify-center items-center text-2xl py-12 lg:py-16 px-5 md:px-10 lg:px-14">
        <h4 className="text-2xl font-bold text-[#009aff]">Contáctanos</h4>
        <p className="text-xl md:text-2xl lg:text-3xl text-center text-main/90">
          Estamos listos para acompañarte. Agenda tu consulta y comienza la
          transformación hacia una vida más saludable.
        </p>
        {formSubmitted && (
          <div className="w-1/2 rounded bg-green-500 opacity-25 text-center text-green-700 mt-4">
            <p>Formulario enviado con éxito!</p>
          </div>
        )}
        <form
          id="contact-form"
          className="grid grid-cols-2 gap-3 w-full mt-4 max-w-3xl text-black"
          onSubmit={handleSubmit}
        >
          <label className="form-control col-span-2 md:col-span-1">
            <div className="label">
              <span className="label-text text-black">Nombre</span>
            </div>
            <input
              name="nombre"
              type="text"
              className="bg-main/10 input border border-main/20 w-full focus:outline-main/60"
              required
              value={formData.nombre}
              onChange={handleInputChange}
            />
          </label>
          <label className="form-control col-span-2 md:col-span-1">
            <div className="label">
              <span className="label-text text-black">Apellido</span>
            </div>
            <input
              name="apellido"
              type="text"
              className="bg-main/10 input border border-main/20 w-full focus:outline-main/60"
              required
              value={formData.apellido}
              onChange={handleInputChange}
            />
          </label>
          <label className="form-control col-span-2 md:col-span-1">
            <div className="label">
              <span className="label-text text-black">Email</span>
            </div>
            <input
              name="email"
              type="email"
              className="bg-main/10 input border border-main/20 w-full focus:outline-main/60"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
          <label className="form-control col-span-2 md:col-span-1">
            <div className="label">
              <span className="label-text text-black">Teléfono</span>
            </div>
            <input
              name="telefono"
              type="tel"
              className="bg-main/10 input border border-main/20 w-full focus:outline-main/60"
              required
              value={formData.telefono}
              onChange={handleInputChange}
            />
          </label>

          <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
            <SelectForm values={values} setValues={setValues} handleSelect={handleSelect} />
          </div>

          <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
            <label htmlFor="fecha" className="text-sm -mb-1">
              Fecha deseada
            </label>
            <input
              type="date"
              name="fecha"
              className="bg-main/10 input border border-main/20 w-full focus:outline-main/60 col-span-2 md:col-span-1"
              placeholder="Fecha deseada"
              required
              value={formData.fecha}
              onChange={handleInputChange}
            />
          </div>

          <label className="form-control col-span-2">
            <div className="label">
              <span className="label-text text-black">Mensaje</span>
            </div>
            <textarea
              name="mensaje"
              className="textarea bg-main/10 border border-main/20 focus:outline-main/60"
              value={formData.mensaje}
              onChange={handleInputChange}
            ></textarea>
          </label>

          <div className="col-span-2 flex items-center gap-2 my-2">
            <input
              type="checkbox"
              id="migrante"
              name="migrante"
              className="checkbox bg-main/10 border border-main/20"
              checked={formData.migrante}
              onChange={handleInputChange}
            />
            <label htmlFor="migrante" className="text-base">
              Me interesa aplicar al programa de migrantes
            </label>
          </div>

          <button type="submit" className="btn bg-main text-white col-span-2">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
