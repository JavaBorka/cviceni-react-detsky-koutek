# Cvičení 1

V tomto cvičení vytvoříte jednoduchou stránku pro dětský koutek. Pomocí knihovny React Router vytvoříte navigaci, která umožní zobrazit různé komponenty na základě cesty v URL.

Vygenerujte si novou aplikaci pomocí příkazu

`npm init kodim-app@latest detsky-koutek react`

Nainstalujte si knihovnu React Router pomocí npm:

`npm install react-router-dom`

Spusťte aplikaci příkazem `npm start` a zkontrolujte, že vám v prohlížeči správně běží.

Nebojte se v následujících krocích inspirovat dokumentací React Routeru!

https://reactrouter.com/en/main/start/overview

V hlavním souboru `index.jsx` založte objekt s routami. Vytvořte si v tomto souboru komponentu `App`, která zatím bude obsahovat pouze nadpis stránky. Zobrazujte ji pod cestou `/`. Nezapomeňte použít `RouterProvider `ve funkci `render`. Vyzkoušejte, že takto vaše aplikace funguje.

V adresáři pages už máte vygenerovanou komponentu HomePage. Ta by měla obshovat nadpis a text:

Dětský koutek

Vítejte v našem dětském koutku! Jsme místo plné zábavy a dobrodružství pro všechny děti do 6 let. Najdete u nás hry, aktivity, kvízy a mnoho dalšího, co zabaví vaše ratolesti a pomůže jim učit se nové věci. Vyberte si některou z našich poboček a začněte objevovat svět plný překvapení!

Ve složce `pages` vytvořte i komponenty pro stránky About a Contact. Stránka About bude obsahovat nadpis a odstavec s textem:

O nás

Jsme tým mladých nadšenců do vzdělávání a zábavy pro děti. Naše poslání je vytvářet podnětné a zábavné aktivity pro děti, které podporují jejich rozvoj a učení nových dovedností. Vytvořili jsme dětský koutek jako místo, kde se děti cítí v bezpečí, mohou objevovat a zároveň se něco nového naučit. Doufáme, že se k nám vydáte a budete s námi sdílet své zážitky a nápady na další aktivity!

Stránka Contact bude obsahovat:

Kontakt 

Pokud máte jakékoliv otázky, nápady nebo nám chcete prostě jen napsat, zanechte nám zprávu přes náš kontaktní formulář a my se vám co nejdříve ozveme. Pokud preferujete jiný způsob komunikace, můžete nám také napsat e-mail na adresu info@detskykoutek.cz nebo nás kontaktovat přes naše sociální sítě. Děkujeme vám za vaši zpětnou vazbu a těšíme se na vaše zprávy!

V souboru `index.jsx` si naimportujte všechny vytvořené stránky a přidejte je jako `children` vašeho routeru pod cesty `/`, `about` a `contact`.

V komponentě `App` vytvořte navigaci pomocí `Link` komponent a dejte do ní odkazy na všechny výše uvedené stránky. Použijte komponentu `Outlet` na vyznačení místa, kam se máji vkládat jednotlivé stránky.

Vyzkoušejte, že aplikace správně naviguje - mění adresu a obsah podle klikání na odkazy.

Pokud máte čas a chuť, přidejte na web zajímavější obsah dle libosti a nastylujte jednotlivé stránky i navigaci.