#Popis
Zakladni verze pro spravu kontaktu dle zadani. Pro produkcni pouziti by se spousta veci resila jinak, namatkou napr.:
- u dodavatele nas bezne zajimaji udaje jako ico, dic, fakturacni vs, dodaci adresa, … pak i db schema by bylo obsahlejsi a normalizovanejsi nez soucasna podoba;
- na ui by pak mohli byt moznosti vyhledavani kontaktu na zaklade ic (z registru ares), chybi strankovani, bohatsi moznosti filtrovani, sortovani …
- aplikace je pokryta pouze zakladnimi intergracnimi testy pro repozitar a rozhodne by si jich zaslouzila vice (viz testovani nize)
- na ui by bylo treba lepsi reseni pro zobrazeni chybovych hlasek ze serveru … pro lepsi user expresience
- zajisteni lepsiho logovani nejlepe do databaze, prip. 3rd party servisy (soucasne verze obsahuje pouze provider pro logovani do console)

#Implementace
Aplikace je resena jako SPA aplikace, konkretne asp.net core na strane serveru a angular 4 na strane klienta, jako uloziste mssql (localdb) s ef core jakozto orm mapperem.

Solution je slozena z nekolika projektu:
ContactManager.Api 
– web server api projekt s controllery poskytujicimi api pro klienstkou aplikaci; obsahuje globalni exception handler a validacni action filter (ve spojeni s fluentvalidation) pro poskytovani jednotneho rozhrani pro error/validation handling
ContactManager.Client
 – SPA aplikace v angular frameworku; postaveno na zakladech angular-cli s materializecss library pro ui.
ContactManager.Common 
– spolecne tridy pro server projekty (Exceptions, Configuration)
ContactManager.Data.EfCore 
– scaffoldovane db entity z db projektu, custom dbcontext
ContactManager.Data.Repository 
– repozitar pro praci s db 
ContactManager.Db 
– db projekt pro praci s db schematem, generovanim rozdilovych skriptu, publish do db
ContactManager.Entities 
– business objekty
ContactManager.Services 
– business vrstva; v tomhle projektu nema moc vyuziti, ale u neceho slozitejsiho by agregovala pozadavky z web api a predavala je repozitari, prip. 3rd party servisam ...

#Testovani
V aplikaci jsou pouzity pouze integracni testy na funkcnost db repozitare. Co uz v aplikaci chybi ale bylo by vhodne implementovat jsou integracni testy na web api, kde by se mohla otestovat funkcnost web api jako celku vcetne ruznych responsu, chybovych hlasek. Pro produkcni pouziti bych jeste videl prinos v end-to-end testech na strane klienta, ktere by mohly testovat zakladni scenare aplikace jako celku z pohledu uzivatele. Unit testy jsem nepouzil, svou povahou tato crud aplikace neobsahuje moc logiky, co by se dala testovat, maximalne tak validace vstupnich objektu.

#Instalace a spusteni
1. vytvorit databazi z prilozeneho sql skriptu (ContactManager.Db\ContactManager.Db_Create.sql) a nasledna uprava connection stringu (ContactManager.Api\appsettings.json)
2. Pro instalaci klienstke casti aplikace je treba mit nainstalovan node js a npm.
3. Spustit projekt ContactManager.Api – soucasti buildu je msbuild task, ktery nainstaluje klientskou cast aplikace, zbuildi a zkopiruje do serverova casti projektu, odkud ji dokaze zpracovat web server.
Pri pouziti CLI  (command line interface)staci pouzit: dotnet restore & dotnet run

Alternativne lze aplikaci spustit z klienstke casti – klientska cast bezi na webpack dev serveru, serverovou cast je potreba spustit/hostovat zvlast.
Pri pouziti CLI staci pouzit: 
- npm start
- cd ..\ContactManager.Api; dotnet run

#Zdrojove kody
- https://github.com/rprochazka/ContactManager.Demo
