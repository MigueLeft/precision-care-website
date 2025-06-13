import React, { useState } from "react";
import { SelectForm } from "./SelectForm";
import useFormStore from "../store/useFormStore";

export default function ContactForm() { // Corrected syntax: removed leading '='
  const {
    values,
    formData,
    formSubmitted,
    setValues,
    handleInputChange,
    handleSelect,
    handleSubmit,
  } = useFormStore();

  return (
    <section id="contact" className="scroll-mt-[90px] lg:scroll-mt-[70px]" aria-labelledby="contact-heading">
      <div className="max-w-[1300px] mx-auto flex flex-col justify-center items-center text-2xl py-12 lg:py-16 px-5 md:px-10 lg:px-14">
        <h2 id="contact-heading" className="text-xl md:text-2xl lg:text-3xl font-bold text-[#0194c2]">Contáctanos</h2> {/* Changed to h2 with id */}
        <p className="text-xl sm:text-2xl text-center text-main/90 font-semibold">
          Estamos listos para acompañarte. <span className="block">Agenda tu consulta y comienza la
            transformación hacia una vida más saludable.</span>
        </p>
        {formSubmitted && (
          <div className="p-2 w-full rounded bg-green-300 text-center text-green-900 mt-4 max-w-3xl min-w-3xl" role="status" aria-live="polite"> {/* Added role and aria-live */}
            <p>Formulario enviado con éxito!</p>
          </div>
        )}
        <form
          id="contact-form"
          className="grid grid-cols-2 gap-3 w-full mt-4 max-w-3xl text-black"
          onSubmit={handleSubmit}
          method="POST"
          aria-label="Formulario de contacto para agendar una consulta" // Added ARIA label for overall form context
        >
          <label htmlFor="nombre" className="form-control col-span-2 md:col-span-1"> {/* Added htmlFor */}
            <div className="label">
              <span className="label-text text-black">Nombre</span>
            </div>
            <input
              name="nombre"
              type="text"
              id="nombre" // Added id
              className="bg-main/10 input border border-main/20 w-full focus:outline-main/60"
              required
              value={formData.nombre}
              onChange={handleInputChange}
              aria-required="true" // Explicitly mark as required
              autoComplete="given-name" // Autocomplete for better user experience and hint for browsers/bots
            />
          </label>
          <label htmlFor="apellido" className="form-control col-span-2 md:col-span-1"> {/* Added htmlFor */}
            <div className="label">
              <span className="label-text text-black">Apellido</span>
            </div>
            <input
              name="apellido"
              type="text"
              id="apellido" // Added id
              className="bg-main/10 input border border-main/20 w-full focus:outline-main/60"
              required
              value={formData.apellido}
              onChange={handleInputChange}
              aria-required="true" // Explicitly mark as required
              autoComplete="family-name" // Autocomplete
            />
          </label>
          <label htmlFor="email" className="form-control col-span-2 md:col-span-1"> {/* Added htmlFor */}
            <div className="label">
              <span className="label-text text-black">Email</span>
            </div>
            <input
              name="email"
              type="email"
              id="email" // Added id
              className="bg-main/10 input border border-main/20 w-full focus:outline-main/60"
              required
              value={formData.email}
              onChange={handleInputChange}
              aria-required="true" // Explicitly mark as required
              autoComplete="email" // Autocomplete
            />
          </label>
          <label htmlFor="telefono" className="form-control col-span-2 md:col-span-1"> {/* Added htmlFor */}
            <div className="label">
              <span className="label-text text-black">Teléfono</span>
            </div>
            <input
              name="telefono"
              type="tel"
              id="telefono" // Added id
              className="bg-main/10 input border border-main/20 w-full focus:outline-main/60"
              required
              value={formData.telefono}
              onChange={handleInputChange}
              aria-required="true" // Explicitly mark as required
              autoComplete="tel" // Autocomplete
            />
          </label>

          <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
            {/* Assuming SelectForm handles its own internal accessibility,
                but if it controls a <select> element, it should have a proper label/aria-label */}
            <SelectForm values={values} setValues={setValues} handleSelect={handleSelect} />
          </div>

          <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
            <label htmlFor="fecha" className="text-sm -mb-1">
              Fecha deseada
            </label>
            <input
              type="date"
              name="fecha"
              id="fecha" // Added id
              className="bg-main/10 input border border-main/20 w-full focus:outline-main/60 col-span-2 md:col-span-1"
              placeholder="Fecha deseada"
              required
              value={formData.fecha}
              onChange={handleInputChange}
              aria-required="true" // Explicitly mark as required
            />
          </div>

          <label htmlFor="mensaje" className="form-control col-span-2"> {/* Added htmlFor */}
            <div className="label">
              <span className="label-text text-black">Mensaje</span>
            </div>
            <textarea
              name="mensaje"
              id="mensaje" // Added id
              className="textarea bg-main/10 border border-main/20 focus:outline-main/60"
              value={formData.mensaje}
              onChange={handleInputChange}
            ></textarea>
          </label>

          <button type="submit" className="btn bg-main text-white col-span-2">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}