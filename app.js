// WSPOLNY KONTRAKT: nazwy zmiennych i funkcji uzgadnia caly zespol.
const MAKS_ENERGIA = 10;
let pokoj = 1;
let energia = MAKS_ENERGIA;
let karta = false;
let bezpiecznik = false;
let zasilanie = false;
let koniec = false;
let wygrana = false;

// SEKCJA 0 — GOTOWY SILNIK NAUCZYCIELA
function start() {
  pokoj = 1;
  energia = MAKS_ENERGIA;
  karta = false;
  bezpiecznik = false;
  zasilanie = false;
  koniec = false;
  wygrana = false;
  console.log("UCIECZKA Z SERWEROWNI. Zasilanie awaryjne wystarczy na 10 tur.");
  pomoc();
  rozejrzyj();
}

function zakonczTure() {
  energia = energia - 1;
  console.log("Pozostala energia: " + energia);
  if (wygrana) {
    console.log("WYGRANA! Drzwi otwarte. Mozesz wrocic do domu.");
  } else if (energia === 0) {
    koniec = true;
    console.log("PRZEGRANA. Zasilanie awaryjne padlo. Wpisz start().");
  }
}

// SEKCJA A — INFORMACJE I MAPA
function nazwaPokoju(numer) {
  // TODO A1: switch; zwroc nazwe pokoju jako tekst.
  return "Nazwa do uzupelnienia";
}
function pomoc() {
  console.log('Dostepne: start(), pomoc(), status(), mapa(), rozejrzyj(), idz("prawo"), akcja("karta")');
  // TODO A5: dopisz pozostale kierunki i akcje oraz zasade kosztu.
}
function status() {
  // TODO A3: wypisz pokoj, energie, przedmioty, zasilanie i stan gry.
  console.log("Status do uzupelnienia");
}
function mapa() {
  // TODO A2: petla for od 1 do 4; nazwa i znacznik aktualnego pokoju.
  console.log("Mapa do uzupelnienia");
}
function rozejrzyj() {
  // TODO A4: switch(pokoj); opis zgodny ze stanem przedmiotow.
  console.log("Opis pokoju do uzupelnienia");
}

// SEKCJA B — RUCH
function idz(kierunek) {
  // TODO B1: zablokuj ruch po koncu gry.
  if (koniec == true ) {
    console.log("Gra została zakończona. wpisz start() aby zagrać ponownie")
    return  0;
  }
  
  // TODO B2: switch kierunku; oblicz kandydat na nowy pokoj.
  let nastepnyPokoj = pokoj;
  switch(kierunek) {
    case "prawo":
      nastepnyPokoj = pokoj + 1;
      break;
    case "lewo":
      nastepnyPokoj = pokoj - 1;
      break;
    default:
      console.log("Nieznany kierunek: " + kierunek);
      return;
  }

  // TODO B3: odrzuc pokoj poza 1..4 i nieznany kierunek bez kosztu.
  if (kierunek < 1 || kierunek > 4) {
    console.log("Ściana lub niepoprawny kierunek. Nie możesz tam iść.");
    return;
  }
  
  // TODO B4: zapisz poprawny pokoj, rozejrzyj(), zakonczTure().
  //console.log("Ruch do uzupelnienia");
  else {
    pokoj = nastepnyPokoj;
    rozejrzyj();
    zakonczTure();
  }

}

// SEKCJA C — PRZEDMIOTY I WYGRANA
function akcja(co) {
  // TODO C1: zablokuj akcje po koncu gry.
  if(koniec == true ) {
    console.log("Gra została zakończona. wpisz start() aby zagrać ponownie")
    return;
  }
  // TODO C2: switch: karta / bezpiecznik / napraw / wyjdz.
  // TODO C2: przed zmiana sprawdz pokoj i wymagany stan.
  switch(co) {
    case "karta":
      if(karta == false && pokoj == 1) {
        karta = true;
        console.log("Podniosles karte. Mozesz teraz otworzyc drzwi w pokoju 4.");
      }
      else if(karta) {
        console.log("Masz juz karte. Nie mozesz podniesc kolejnej.");
        return;
      }
      else {
        console.log("Nie ma karty w tym pokoju.");
        return;
      }
      break;
    case "bezpiecznik":
      if (bezpiecznik == false && pokoj == 2) {
        bezpiecznik = true;
        console.log("Podniosles bezpiecznik. Mozesz teraz naprawic zasilanie w pokoju 3.");
      }
      else if(bezpiecznik) {
        console.log("Masz juz bezpiecznik. Nie mozesz podniesc kolejnego.");
        return;
      }
      else {
        console.log("Nie ma bezpiecznika w tym pokoju.");
        return;
      }
      break;
    case "napraw":
      if (bezpiecznik == true && zasilanie == false && pokoj == 3) {
        zasilanie = true;
        console.log("Naprawiles zasilanie. Mozesz teraz otworzyc drzwi w pokoju 4.");
      }
      else if (zasilanie == true) {
        console.log("Zasilanie jest juz naprawione. Nie mozesz naprawic go ponownie.");
        return;
      }
      else {
        console.log("Nie mozesz naprawic zasilania w tym pokoju.");
        return;
      }
      break;
    case "wyjdz":
      if (karta = true && zasilanie == true && pokoj == 4) {
        wygrana = true;
        koniec = true;
        console.log("Otworzyles drzwi i uciekles z serwerowni. Gratulacje!");
      }
      else if (pokoj != 4) {
        console.log("Nie mozesz wyjsc z gry w tym pokoju. Musisz byc w pokoju 4.");
        return;
      }
      else if (karta == false) {
        console.log("Nie masz karty. Nie mozesz otworzyc drzwi.");
        return;
      }
      else if (zasilanie == false) {
        console.log("Zasilanie nie jest naprawione. Nie mozesz otworzyc drzwi.");
        return;
      }
      break;
    default:
      console.log("Nieznana akcja: " + co);
      return;
  }
  // TODO C3: przy odrzuceniu return; przy sukcesie break.
  // TODO C3: po switch jedno zakonczTure().
  zakonczTure();
  // TODO C4: wygrana i koniec ustawione przed rozliczeniem tury!
  //console.log("Akcje do uzupelnienia");
}

start();
