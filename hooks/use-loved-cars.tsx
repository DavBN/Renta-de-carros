import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import { toast } from "@/components/ui/use-toast"
import { Car } from "@prisma/client"

interface UseLovedCarsType {
    lovedItems: Car[],
    addLoveItem: (data: Car) => void,
    removeLovedItem: (id: string) => void

}

export const useLovedCars = create(
    persist<UseLovedCarsType>(
        (set, get) => ({
            lovedItems: [],
            addLoveItem: (data: Car) => {
                const currentLovedItems = get().lovedItems;
                const existingItem = currentLovedItems.find((item) => item.id == data.id)

                if (existingItem) {
                    return toast({
                        title: "El carro ya existe en la lista💔"
                    });

                }
                set({
                    lovedItems: [...get().lovedItems, data]
                })
                toast({
                    title: "Carro añadido a tu lista de favoritos🚗"
                })
            },

            removeLovedItem: (id: string) => {
                set({
                    lovedItems: [...get().lovedItems.filter((item) => item.id != id)]
                })
                toast({
                    title: "El carro se ha eliminado con éxito✅"
                })
            }
        }),
        {
            name: "loved-products-storage",
            storage: createJSONStorage(() => localStorage)
        }
    )
)