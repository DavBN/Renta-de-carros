import { ButtonAddCar } from "./components/ButtonAddCar";

export default function CarsManagerPage() {
    return (
        <div>
            <div className="flex justify-between">
              <h2 className="text-2xl font-bold">Manager de Carros</h2>
              <ButtonAddCar/>
            </div>
        </div>
    )
}