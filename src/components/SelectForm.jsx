// import { Select, SelectItem } from "@heroui/select";

// export function SelectForm({ values, setValues, handleSelect }) {
//   const solutions = [
//     { key: "medicina", label: "Medicina" },
//     { key: "nutricion", label: "Nutrición" },
//     { key: "ejercicio", label: "Ejercicio" },
//     { key: "psicologia", label: "Psicología" },
//     { key: "programa", label: "Programas Precision" },
//   ];

//   const handleSelectionChange = (e) => {
//     setValues(new Set(e.target.value.split(",")));
//     handleSelect(new Set(e.target.value.split(",")));
//   };

//   return (
//     <>
//       <Select
//         selectedKeys={values}
//         onChange={handleSelectionChange}
//         labelPlacement="outside"
//         label="Soluciones"
//         placeholder="Selecciona una o varias soluciones"
//         selectionMode="multiple"
//         className="col-span-2 md:col-span-1"
//         radius="sm"
//         classNames={{
//           trigger:
//             "h-[3rem] bg-main/10 data-[hover=true]:bg-main/20 group-data-[focus=true]:bg-main/20 input border border-main/20 w-full focus:outline-main/60",
//         }}
//       >
//         {solutions.map((solution) => (
//           <SelectItem key={solution.key}>
//             <p>{solution.label}</p>
//           </SelectItem>
//         ))}
//       </Select>
//     </>
//   );
// }

import React, { useEffect } from "react";
import { Select, SelectItem } from "@heroui/select";
import useFormStore from "../store/useFormStore";

export const solutions = [
  { key: "medicina", label: "Medicina" },
  { key: "nutricion", label: "Nutrición" },
  { key: "ejercicio", label: "Ejercicio" },
  { key: "psicologia", label: "Psicología" },
  { key: "programa1", label: "Programa 1 (9 consultas)" },
  { key: "programa2", label: "Programa 2 (10 consultas)" },
  { key: "programa3", label: "Programa 3 (12 consultas)" },
];

export function SelectForm() {
  const {
    values,
    setValues,
    handleSelect,
  } = useFormStore();

  const handleSelectionChange = (e) => {
    console.log(e.target.value)
    setValues(new Set(e.target.value.split(",")));
    handleSelect(new Set(e.target.value.split(",")));
  };

  return (
    <Select
      labelPlacement="outside"
      label="Soluciones"
      placeholder="Selecciona una o varias soluciones"
      selectionMode="multiple"
      className="col-span-2 md:col-span-1"
      radius="sm"
      classNames={{
        trigger:
          "h-[3rem] bg-main/10 data-[hover=true]:bg-main/20 group-data-[focus=true]:bg-main/20 input border border-main/20 w-full focus:outline-main/60",
      }}
      selectedKeys={values}
      onChange={handleSelectionChange}
    >
      {solutions.map((solution) => (
        <SelectItem key={solution.key}>{solution.label}</SelectItem>
      ))}
    </Select>
  );
}
