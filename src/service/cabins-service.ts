import type { Cabin } from "../model/cabin";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase.config";

interface CabinFilterOptions {
  location?: string;
  maxGuests?: number | "";
  maxPrice?: number | "";
  amenities?: string[];
}

export async function findCabins({
  location,
  maxGuests,
  maxPrice,
  amenities,
}: CabinFilterOptions): Promise<Cabin[]> {
  const cabins = await getAllCabins();

  return cabins.filter((cabin) => {
    const matchesLocation = location?.trim()
      ? cabin.location.toLowerCase().includes(location.trim().toLowerCase())
      : true;

    const matchesGuests = maxGuests ? cabin.maxGuests >= maxGuests : true;

    const matchesPrice = maxPrice ? cabin.pricePerNight <= maxPrice : true;

    const matchesAmenities =
      amenities && amenities.length > 0
        ? amenities.every((a) =>
            cabin.amenities
              .map((am: string) => am.toLowerCase())
              .includes(a.toLowerCase())
          )
        : true;

    return matchesLocation && matchesGuests && matchesPrice && matchesAmenities;
  });
}

export async function getAllCabins(): Promise<any[]> {
  try {
    const cabinsCol = collection(db, "cabins"); // Reference to "cabins" collection
    const cabinSnapshot = await getDocs(cabinsCol); // Fetch all docs
    const cabins = cabinSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); // Map to array with id
    return cabins;
  } catch (error) {
    console.error("Error fetching cabins:", error);
    throw error;
  }
}

export async function getCabinById(id: string): Promise<Cabin | null> {
  const cabins = await getAllCabins(); // await here

  for (const cabin of cabins) {
    if (cabin.id === id) {
      return cabin;
    }
  }

  return null;
}