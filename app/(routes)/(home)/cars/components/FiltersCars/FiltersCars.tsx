import * as React from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { FiltersCarsProps,} from "./FiltersCars.types";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { set } from "date-fns";

export function FilterCars(props: FiltersCarsProps) {
    const {clearFilters, setFilters, filters} = props;

    const handleFilter = (filter: string, value: string) => {
        setFilters(filter, value)
    }
  return (
    <div className="my-5 mb-8 flex flex-col space-y-2 md:flex-row md:space-y-0 md:gap-5">
      <Select onValueChange={(value) => handleFilter("type", value)} value={filters.type}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Tipo de vehículo" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Tipo de vehículo</SelectLabel>
            <SelectItem value="sedan">Sedán</SelectItem>
            <SelectItem value="suv">SUV</SelectItem>
            <SelectItem value="coupe">Coupé</SelectItem>
            <SelectItem value="familiar">Familiar</SelectItem>
            <SelectItem value="luxe">De lujo</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select onValueChange={(value) => handleFilter("transmission", value)} value={filters.transmission}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Cambio de velocidades" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Cambio de velocidades</SelectLabel>
            <SelectItem value="manual">Manual</SelectItem>
            <SelectItem value="automatic">Automático</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select onValueChange={(value) => handleFilter("engine", value)} value={filters.engine}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Tipo de motor" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Tipo de motor</SelectLabel>
            <SelectItem value="gasoil">Gásolina</SelectItem>
            <SelectItem value="diesel">Diesel</SelectItem>
            <SelectItem value="electric">Eléctrico</SelectItem>
            <SelectItem value="hybrid">Híbrido</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select onValueChange={(value) => handleFilter("people", value)} value={filters.people}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Personas" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Capacidad personas</SelectLabel>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="4">4</SelectItem>
            <SelectItem value="5">5</SelectItem>
            <SelectItem value="7">7</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Button onClick={clearFilters}>
        Remover filtros <Trash className="w-4 h-4 ml-2"/>
      </Button>
    </div>
  )
}
