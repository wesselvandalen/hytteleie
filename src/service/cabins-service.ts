import type { Cabin } from "../model/cabin";
import { cabins } from "../data/cabins";

export function findCabinsByLocation(location: string) {
    let matchingLocations: Cabin[] = [];

    for (let i = 0; i < cabins.length; i++) {
        const currentCabin: Cabin = cabins[i];

        if (currentCabin.location.toLowerCase().includes(location.toLowerCase())) {
            matchingLocations.push(currentCabin);
        }
    }

    return matchingLocations;
}

export function getCabinById(id: string): any {
    for (let i = 0; i < cabins.length; i++) {
        const currentCabin: Cabin = cabins[i];

        if (currentCabin.id === id) {
            return currentCabin;
        }
    }
}