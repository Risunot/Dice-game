# DICE GAME

Odchytávam si elementy súvisiace so score, ktoré majú id a pridávam im hodnotu 0. Odchytávam si aj emelent image s classou a pridávam mu hodnotu cez style display none. Ďalej si odchytím oboch hráčov cez element s id. Odchytené tlačítko s classou roll-dice, na ktorom je addEventListener, ktorý "načúva" na kliknutie. 

V podmienke je premenná dice, ktorá ma hodnotu Math.ceil(Math.random() * 6). Táto metóda mi vráti náhodné číslo do 6. V premennej diceElement mám uložený element image, ktorému dávam cez style display block a pridávam obrázky kocky. V ďalšej podmienke je: ak sa kocka nerovná 1 tak sa score pripočíta s hodnotou čísla na kocke. Ak je hodnota 1 tak je na rade ďalší hráč. 

Vo funkcii nextPlayer sa určí, ktorý hráč je na rade.

Odchytené tlačítko s classou keep-score, na ktorom je addEventListener, ktorý "načúva" na kliknutie. V podmienke je totalScore aktívneho hráča naplnené s aktuálnym score, ktoré je vypísané do totalScore. Ak je score aktívneho kráča viac ako 50 tak hráč vyhráva.
