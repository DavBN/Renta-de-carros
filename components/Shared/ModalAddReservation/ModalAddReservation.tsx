import { Button } from "@/components/ui/button";
import { ModalAddReservationProps } from "./ModalAddReservation.types";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Car } from "@prisma/client";
  

export function ModalAddReservation(props: ModalAddReservationProps) {
    const {car} = props;

    const onReserveCar = async(car: Car, dateSelected: any) => {};
  return (
    <AlertDialog>
    <AlertDialogTrigger asChild>
        <Button variant="outline" className="w-full mt-3"> 
            Reservar Vehículo
        </Button>
        </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Seleccion la fecha del alquiler</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your account
          and remove your data from our servers.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction onClick={() => onReserveCar(car, "")}>Reservar Vehículo</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
  
  )
}
