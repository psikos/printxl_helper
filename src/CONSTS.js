import Start from "./components/Start/Start";
import Sprawdzanie from "./components/Sprawdzanie/Sprawdzanie";
import Produkcja from "./components/Produkcja/Produkcja";
import SprawdzanieSkladek from "./components/SprawdzanieSkladek/SprawdzanieSkladek";
import GeneratorWykonczen from "./components/GeneratorWykonczen/GeneratorWykonczen";
import Szwalnia from "./components/Szwalnia/Szwalnia";

export const navItemsDtp = [
  { name: "Start", to: "", component: Start },
  { name: "Sprawdzanie", to: "sprawdzanie", component: Sprawdzanie },
  { name: "Produkcja", to: "produkcja", component: Produkcja },
  {
    name: "Sprawdzanie składek",
    to: "sprawdzanie-skladek",
    component: SprawdzanieSkladek,
  },
  { name: "Produkty", to: "produkty", component: Start },
  { name: "Kalkulator produkcyjny", to: "kalkulator", component: Start },
  {
    name: "Generator wykończeń",
    to: "generator-wykonczen",
    component: GeneratorWykonczen,
  },
  {
    name: "Szwalnia",
    to: "szwalnia",
    component: Szwalnia,
  },
];
