import { Select, SelectItem } from "@heroui/select";

export const solutions = [
  { key: "medicina", label: "Medicina" },
  { key: "nutricion", label: "Nutrición" },
  { key: "ejercicio", label: "Ejercicio" },
  { key: "psicologia", label: "Psicología" },
  { key: "programa", label: "Programa Precision" },
];

export default function SelectForm() {
  return (
    <Select
    labelPlacement="outside"
      label="Soluciones"
      placeholder="Selecciona una o varias soluciones"
      selectionMode="multiple"
      className=" col-span-2 md:col-span-1"
      radius="sm"
      classNames={{
        trigger:
          "h-[3rem] bg-main/10 data-[hover=true]:bg-main/20 group-data-[focus=true]:bg-main/20 input border border-main/20 w-full focus:outline-main/60",
      }}
    >
      {solutions.map((solution) => (
        <SelectItem key={solution.key}>{solution.label}</SelectItem>
      ))}
    </Select>
  );
}
