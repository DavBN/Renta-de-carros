import { Navbar } from "@/components/Shared/Navbar"
import { db } from "@/lib/db"
import { HeadersCars } from "./components/HeadersCars"
import { FiltersAndListCars } from "./components/FiltersAndListCars";

export default async function PageCars() {
    const cars = await db.car.findMany({
        where: {
            isPublish: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
    return (
        <div>
            <Navbar/>
            <div className="p-6 mx-auto max-w-7xl">
                <HeadersCars/>
            <div>
                <FiltersAndListCars cars={cars}/>
            </div>
            </div>
        </div>
    )
}
