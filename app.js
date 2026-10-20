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
  switch (numer){
    case 1:
      return "Recepcja"
    case 2:
      return "Magazyn"
    case 3:
      return "Serwerownia"
    case 4:
      return "Wyjscie"
    default:
      return "Nieznane pomieszczenie"
  }
}
function pomoc() {
  console.log('Dostepne: start(), pomoc(), status(), mapa(), rozejrzyj(), idz("prawo"), akcja("karta")');
  console.log('#idz("prawo") zwiększa numer pokoju o 1, idz("lewo") zmniejsza numer pokoju o 1.');
  console.log("#Każdy udany ruch i wykonana akcja zużywają 1 energii.")
  console.log("#Literówka, ruch w ścianę, ponowne zabranie przedmiotu i akcja bez spełnionych warunków są bezpłatne.")
  console.log("#Oglądanie mapy, opisów, pomocy i stanu jest bezpłatne.");
  console.log("#Bezpiecznik znika z kieszeni po naprawie. Nie odradza się w magazynie.");
  console.log("#Przy energii 0 przegrywamy, chyba że właśnie skutecznie otworzyliśmy wyjście. Wygrana ostatnim ruchem jest dozwolona.");
  console.log("#Po końcu gry można oglądać informacje, ale ruch i akcje są zablokowane. start() zaczyna od nowa.");
  // TODO A5: dopisz pozostale kierunki i akcje oraz zasade kosztu.
}
function status() {
  // TODO A3: wypisz pokoj, energie, przedmioty, zasilanie i stan gry.
  console.log("Pokój: " + pokoj);
  console.log("Energia: " + energia);
  console.log("Karta: " + (karta ? "tak" : "nie"));
  console.log("Bezpiecznik: " + (bezpiecznik ? "tak" : "nie"));
  console.log("Energia: " + energia);
  console.log("Wygrana: " + wygrana)
}
function mapa() {
  // TODO A2: petla for od 1 do 4; nazwa i znacznik aktualnego pokoju.
  for (let numer=1; numer<=4; numer=numer+1){
    console.log(numer+" "+nazwaPokoju(numer));
    if(numer==pokoj){
      console.log(" <-- jestes tutaj");
    }
  }
  console.log("Mapa do uzupelnienia");
}
function rozejrzyj(pokoj) {
  // TODO A4: switch(pokoj); opis zgodny ze stanem przedmiotow.
  switch (pokoj){
    case 1:
      if(karta==false){
        console.log("Rozglądasz sie po recepcji. Na ladzie ciemny monitor, kawa i kilka papierów. Obok dogodnie leży karta dostępu.");
      }
      else{
        console.log("Rozglądasz sie po recepcji. Na ladzie ciemny monitor, kawa i kilka papierów.");
      }
    case 2:
      if(bezpiecznik==false && zasilanie==false){
        console.log("Magazyn jak magazyn, przechowuje graty, pajęczyny i... bezpiecznik!");
      }
      else if(bezpiecznik==true && zasilanie==false){
        console.log("Magazyn jak magazyn, przechowuje graty i pajęczyny, bezpiecznik juz zebrałeś.");
      }
      else if(bezpiecznik==false && zasilanie==true){
        console.log("Magazyn jak magazyn, przechowuje graty i pajęczyny, bezpiecznik juz zebrałeś i zamontowałeś.");
      }
      else{
        console.log("Mieć ciastko i zjeść ciastko?? Coś tu nie gra.");
      }
    case 3:
      if(zasilanie==true){
        console.log("Serwerownia. Kable, kable i więcej kabli. Przynajmniej włączyłeś zasilanie.");
      }
      else{
        console.log("Serwerownia. Kable, kable i więcej kabli. Na ścianie wisi skrzynka, wygląda jakby coś tam brakowało.");
      }
    case 4:
      if(zasilanie==true && karta==true){
        console.log("Nareszcie, zasilanie włączone, karta w kieszeni. Przed wolnością stoją tylko te drzwi.");
      }
      else if(zasilanie==false && karta==true){
        console.log("Karte masz, ale bez zasilania te drzwi nie ruszą.");
      }
      else if(zasilanie==true && karta==false){
        console.log("Prąd jest, tylko karty brak. Rozejrzyj sie po innych pokojach.");
      }
      else if(zasilanie==false && karta==false){
        console.log("Nadzieją tych drzwi nie otworzysz. Wpierw włącz prąd i znajdź kartę.");
      }
      else{
        console.log("Coś tu nie gra");
      }
    default:
      return "Nieznane pomieszczenie"
  }
}

// SEKCJA B — RUCH
function idz(kierunek) {
  // TODO B1: zablokuj ruch po koncu gry.
  // TODO B2: switch kierunku; oblicz kandydat na nowy pokoj.
  // TODO B3: odrzuc pokoj poza 1..4 i nieznany kierunek bez kosztu.
  // TODO B4: zapisz poprawny pokoj, rozejrzyj(), zakonczTure().
  console.log("Ruch do uzupelnienia");
}

// SEKCJA C — PRZEDMIOTY I WYGRANA
function akcja(co) {
  // TODO C1: zablokuj akcje po koncu gry.
  // TODO C2: switch: karta / bezpiecznik / napraw / wyjdz.
  // TODO C2: przed zmiana sprawdz pokoj i wymagany stan.
  // TODO C3: przy odrzuceniu return; przy sukcesie break.
  // TODO C3: po switch jedno zakonczTure().
  // TODO C4: wygrana i koniec ustawione przed rozliczeniem tury!
  console.log("Akcje do uzupelnienia");
}

start();
