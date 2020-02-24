/*global systemDictionary:true */
'use strict';

systemDictionary = {
    "plenticore adapter settings": {
		"en": "Adapter settings for Plenticore",
		"de": "Adaptereinstellungen für Plenticore",
		"ru": "Настройки адаптера для Plenticore",
		"pt": "Configurações do adaptador para Plenticore",
		"nl": "Adapterinstellingen voor Plenticore",
		"fr": "Paramètres de l'adaptateur pour Plenticore",
		"it": "Impostazioni dell'adattatore per Plenticore",
		"es": "Configuración del adaptador para Plenticore",
		"pl": "Ustawienia adaptera dla Plenticore",
		"zh-cn": "Plenticore的适配器设置"
    },
    "ipaddress": {
		"en": "IP address",
		"de": "IP-Adresse",
		"ru": "айпи адрес",
		"pt": "endereço de IP",
		"nl": "IP adres",
		"fr": "adresse IP",
		"it": "indirizzo IP",
		"es": "dirección IP",
		"pl": "adres IP",
		"zh-cn": "IP地址"
	},
    "password": {
        "en": "Password for plant owner",
		"de": "Passwort für Anlagenbesitzer",
		"ru": "Пароль для владельца завода",
		"pt": "Senha para o proprietário da planta",
		"nl": "Wachtwoord voor planteneigenaar",
		"fr": "Mot de passe pour le propriétaire de l'usine",
		"it": "Password per il proprietario dell'impianto",
		"es": "Contraseña para el dueño de la planta",
		"pl": "Hasło dla właściciela zakładu",
		"zh-cn": "工厂所有者的密码"
    },
    "pollinterval": {
        "en": "Polling interval (in ms)",
		"de": "Abrufintervall (in ms)",
		"ru": "Интервал опроса",
		"pt": "Intervalo de pesquisa",
		"nl": "Polling-interval",
		"fr": "Intervalle d'interrogation",
		"it": "Intervallo di polling",
		"es": "Intervalo de votación",
		"pl": "Interwał odpytywania",
		"zh-cn": "轮询间隔"
    },
	"on save adapter restarts with new config immediately": {
		"en": "on save adapter restarts with new config immediately",
		"de": "Beim Speichern wird der Adapter sofort mit der neuen Konfiguration neu gestartet",
		"ru": "при сохранении адаптер перезапускается с новой конфигурацией немедленно",
		"pt": "ao salvar o adaptador reinicia imediatamente com a nova configuração",
		"nl": "on save adapter wordt onmiddellijk opnieuw gestart met de nieuwe configuratie",
		"fr": "lors de l'enregistrement, l'adaptateur redémarre avec la nouvelle configuration immédiatement",
		"it": "on save adapter si riavvia immediatamente con la nuova configurazione",
		"es": "al guardar el adaptador se reinicia con la nueva configuración inmediatamente",
		"pl": "po zapisaniu adapter natychmiast uruchamia się ponownie z nową konfiguracją",
		"zh-cn": "保存适配器上的适配器立即以新配置重新启动"
	},
	"debug api requests": {
		'en': 'Debug API requests',
		'de': 'API-Anfragen debuggen',
		"ru": "Отладка запросов API",
		"pt": "Solicitações de API de depuração",
		"nl": "Debug API-aanvragen",
		"fr": "Déboguer les demandes d'API",
		"it": "Richieste API di debug",
		"es": "Depurar solicitudes de API",
		"pl": "Debuguj żądania interfejsu API",
		"zh-cn": "调试API请求"
	},
	"enable power forecast": {
		"en": "Enable power forecast",
		"de": "Leistungsprognose aktivieren",
		"ru": "Включить прогноз мощности",
		"pt": "Ativar previsão de energia",
		"nl": "Schakel stroomvoorspelling in",
		"fr": "Activer la prévision de puissance",
		"it": "Abilita previsione di potenza",
		"es": "Habilitar pronóstico de energía",
		"pl": "Włącz prognozę mocy",
		"zh-cn": "启用功率预测"
	},
	"none": {
		"en": "none",
		"de": "keine",
		"ru": "никто",
		"pt": "Nenhum",
		"nl": "geen",
		"fr": "aucun",
		"it": "nessuna",
		"es": "ninguna",
		"pl": "Żaden",
		"zh-cn": "没有"
	},
	"Please select weather adapter instance or install one first.": {
		"en": "Please select weather adapter instance or install one first.",
		"de": "Bitte wählen Sie die weather-Adapterinstanz aus oder installieren Sie zuerst eine.",
		"ru": "Пожалуйста, выберите экземпляр адаптера weather или сначала установите его.",
		"pt": "Selecione a instância do adaptador weather ou instale uma primeira.",
		"nl": "Selecteer de instantie van de weather-adapter of installeer er eerst een.",
		"fr": "Veuillez sélectionner une instance d'adaptateur weather ou en installer une en premier.",
		"it": "Seleziona l'istanza dell'adattatore weather o installane una prima.",
		"es": "Seleccione la instancia del adaptador weather o instale uno primero.",
		"pl": "Wybierz instancję adaptera weather lub zainstaluj ją najpierw.",
		"zh-cn": "请选择weather适配器实例或先安装一个。"
	},
	"enable dynamic minsoc": {
		"en": "Enable dynamic minimum SoC",
		"de": "Aktivieren Sie den dynamischen Mindest-SoC",
		"ru": "Включить динамический минимум SoC",
		"pt": "Ativar SoC mínimo dinâmico",
		"nl": "Schakel dynamische minimum SoC in",
		"fr": "Activer le SoC minimum dynamique",
		"it": "Abilita SoC minimo dinamico",
		"es": "Habilitar SoC mínimo dinámico",
		"pl": "Włącz dynamiczne minimalne SoC",
		"zh-cn": "启用动态最小SoC"
	},
	"dynamic minsoc description": {
		"en": "The KOSTAL Plenticore offers a dynamic MinSoC (minimum state of charge) setting. This dynamic is not taking into account weather forecast and is not best suited for setting the MinSoC. When enabling this option the adapter tries to dynamically adjust the MinSoC for the battery depending on weather forecast(s) and consumption history. It might take 2 or 3 days to get a better precision and of course it will only work when a battery like BYD B-Box is linked with the Plenticore.",
		"de": "Der KOSTAL Plenticore bietet eine dynamische MinSoC-Einstellung (Minimum State of Charge). Diese Dynamik berücksichtigt nicht die Wettervorhersage und ist für die Einstellung der MinSoC nicht optimal geeignet. Wenn Sie die Option im Adapter aktivieren, versucht der Adapter, den MinSoC-Wert für die Batterie je nach Wettervorhersage(n) und Verbrauchsverlauf dynamisch anzupassen. Es kann 2 oder 3 Tage dauern, bis eine bessere Genauigkeit erreicht ist, und natürlich funktioniert die Einstellung nur, wenn eine Batterie wie die BYD B-Box oder ähnliche mit dem Plenticore verbunden ist.",
		"ru": "KOSTAL Plenticore предлагает динамическую настройку MinSoC (минимальное состояние заряда). Эта динамика не учитывает прогноз погоды и не наилучшим образом подходит для настройки MinSoC. При включении этой опции адаптер пытается динамически настроить MinSoC для батареи в зависимости от прогноза погоды и истории потребления. Чтобы получить более высокую точность, может потребоваться 2 или 3 дня, и, конечно, он будет работать только тогда, когда батарея типа BYD B-Box связана с Plenticore.",
		"pt": "O KOSTAL Plenticore oferece uma configuração dinâmica de MinSoC (estado mínimo de carga). Essa dinâmica não leva em consideração a previsão do tempo e não é mais adequada para definir o MinSoC. Ao ativar esta opção, o adaptador tenta ajustar dinamicamente o MinSoC para a bateria, dependendo da previsão do tempo e do histórico de consumo. Pode levar 2 ou 3 dias para obter uma precisão melhor e, é claro, só funcionará quando uma bateria como a BYD B-Box estiver vinculada ao Plenticore.",
		"nl": "De KOSTAL Plenticore biedt een dynamische MinSoC-instelling (minimale laadstatus). Deze dynamiek houdt geen rekening met de weersvoorspelling en is niet geschikt voor het instellen van de MinSoC. Bij het inschakelen van deze optie probeert de adapter de MinSoC voor de batterij dynamisch aan te passen, afhankelijk van weersvoorspelling (en) en verbruiksgeschiedenis. Het kan 2 of 3 dagen duren om een betere precisie te krijgen en het werkt natuurlijk alleen als een batterij zoals BYD B-Box is verbonden met de Plenticore.",
		"fr": "Le KOSTAL Plenticore offre un réglage dynamique MinSoC (état de charge minimum). Cette dynamique ne tient pas compte des prévisions météorologiques et n'est pas la mieux adaptée pour régler le MinSoC. En activant cette option, l'adaptateur essaie d'ajuster dynamiquement le MinSoC pour la batterie en fonction des prévisions météorologiques et de l'historique de consommation. Cela peut prendre 2 ou 3 jours pour obtenir une meilleure précision et bien sûr, cela ne fonctionnera que lorsqu'une batterie comme BYD B-Box est liée au Plenticore.",
		"it": "KOSTAL Plenticore offre un'impostazione dinamica MinSoC (stato di carica minimo). Questa dinamica non tiene conto delle previsioni meteorologiche e non è più adatta all'impostazione di MinSoC. Quando si abilita questa opzione, l'adattatore tenta di regolare dinamicamente il MinSoC per la batteria in base alle previsioni meteorologiche e alla cronologia dei consumi. Potrebbero essere necessari 2 o 3 giorni per ottenere una migliore precisione e, naturalmente, funzionerà solo quando una batteria come BYD B-Box è collegata al Plenticore.",
		"es": "KOSTAL Plenticore ofrece una configuración dinámica MinSoC (estado mínimo de carga). Esta dinámica no tiene en cuenta el pronóstico del tiempo y no es la más adecuada para configurar MinSoC. Al habilitar esta opción, el adaptador intenta ajustar dinámicamente el MinSoC para la batería en función del pronóstico del tiempo y el historial de consumo. Puede tomar 2 o 3 días obtener una mejor precisión y, por supuesto, solo funcionará cuando una batería como BYD B-Box esté vinculada con el Plenticore.",
		"pl": "KOSTAL Plenticore oferuje dynamiczne ustawienie MinSoC (minimalny stan naładowania). Ta dynamika nie uwzględnia prognozy pogody i nie nadaje się najlepiej do ustawiania MinSoC. Po włączeniu tej opcji adapter próbuje dynamicznie dostosować MinSoC dla akumulatora w zależności od prognozy pogody i historii zużycia. Lepsza precyzja może zająć 2 lub 3 dni i oczywiście zadziała tylko wtedy, gdy bateria taka jak BYD B-Box jest połączona z Plenticore.",
		"zh-cn": "KOSTAL Plenticore提供了动态的MinSoC（最小充电状态）设置。这种动态没有考虑天气预报，也不适合设置MinSoC。启用此选项后，适配器将尝试根据天气预报和消耗历史动态调整电池的MinSoC。可能需要2或3天才能获得更高的精度，当然，只有在将BYD B-Box之类的电池与Plenticore连接后才能使用。"
	},
	"Please set the location of your ioBroker instance (longitude and latitude)": {
		"en": "Please set the location of your ioBroker instance (longitude and latitude)",
		"de": "Bitte legen Sie den Standort Ihrer ioBroker-Instanz fest (Längen- und Breitengrad)",
		"ru": "Пожалуйста, установите местоположение вашего экземпляра ioBroker (долгота и широта)",
		"pt": "Defina o local da sua instância do ioBroker (longitude e latitude)",
		"nl": "Stel de locatie van uw ioBroker-instantie in (lengte- en breedtegraad)",
		"fr": "Veuillez définir l'emplacement de votre instance ioBroker (longitude et latitude)",
		"it": "Si prega di impostare la posizione dell'istanza ioBroker (longitudine e latitudine)",
		"es": "Establezca la ubicación de su instancia de ioBroker (longitud y latitud)",
		"pl": "Ustaw lokalizację swojego wystąpienia ioBroker (długość i szerokość geograficzna)",
		"zh-cn": "请设置您的ioBroker实例的位置（经度和纬度）"
	},
	"Please enter your panel's tilt and orientation (azimuth)": {
		"en": "Please enter your panel's tilt and orientation (azimuth)",
		"de": "Bitte geben Sie die Neigung und Ausrichtung Ihres Panels ein (Azimut)",
		"ru": "Пожалуйста, введите наклон и ориентацию вашей панели (азимут)",
		"pt": "Digite a inclinação e a orientação do seu painel (azimute)",
		"nl": "Voer de kanteling en oriëntatie van uw paneel in (azimut)",
		"fr": "Veuillez saisir l'inclinaison et l'orientation de votre panneau (azimut)",
		"it": "Inserisci l'inclinazione e l'orientamento del pannello (azimut)",
		"es": "Ingrese la inclinación y orientación de su panel (acimut)",
		"pl": "Wprowadź pochylenie i orientację panelu (azymut)",
		"zh-cn": "请输入面板的倾斜度和方向（方位角）"
	},
	"Please set the panel efficiency and surface. You should get this from the official datasheet of your panels.": {
		"en": "Please set the panel efficiency and surface. You should get this from the official datasheet of your panels.",
		"de": "Bitte stellen Sie den Wirkungsgrad und die Oberfläche ein. Sie sollten dies dem offiziellen Datenblatt Ihrer Panels entnehmen.",
		"ru": "Пожалуйста, установите эффективность панели и поверхность. Вы должны получить это из официального паспорта ваших панелей.",
		"pt": "Defina a eficiência e a superfície do painel. Você deve obter isso na folha de dados oficial de seus painéis.",
		"nl": "Stel de paneelefficiëntie en het oppervlak in. U zou dit van het officiële gegevensblad van uw panelen moeten krijgen.",
		"fr": "Veuillez définir l'efficacité et la surface du panneau. Vous devriez l'obtenir à partir de la fiche technique officielle de vos panneaux.",
		"it": "Si prega di impostare l'efficienza del pannello e la superficie. Dovresti ottenerlo dal foglio dati ufficiale dei tuoi pannelli.",
		"es": "Configure la eficiencia y la superficie del panel. Debe obtener esto de la hoja de datos oficial de sus paneles.",
		"pl": "Proszę ustawić wydajność panelu i powierzchnię. Powinieneś to uzyskać z oficjalnego arkusza danych swoich paneli.",
		"zh-cn": "请设置面板效率和表面。您应该从面板的官方数据表中获得此信息。"
	},
	"panel tilt": {
		"en": "Panel or roof tilt degrees (°)",
		"de": "Panel oder Dachneigung in Grad (°)",
		"ru": "Панель или наклон крыши",
		"pt": "Inclinação do painel ou do telhado",
		"nl": "Paneel of dakhelling",
		"fr": "Inclinaison du panneau ou du toit",
		"it": "Inclinazione del pannello o del tetto",
		"es": "Panel o inclinación del techo",
		"pl": "Pochylenie panelu lub dachu",
		"zh-cn": "面板或屋顶倾斜"
	},
	"panel dir": {
		"en": "Panel orienation (° azimuth, S = 180°)",
		"de": "Panelausrichtung (° Azimut, S = 180°)",
		"ru": "Ориентация панели (азимут, S = 180°)",
		"pt": "Orientação do painel (azimute, S = 180°)",
		"nl": "Paneel orienation (azimuth, S = 180°)",
		"fr": "Orientation du panneau (azimut, S = 180°)",
		"it": "Orientamento del pannello (azimut, S = 180°)",
		"es": "Orientación del panel (acimut, S = 180°)",
		"pl": "Panel orienacji (azymut, S = 180°)",
		"zh-cn": "面板方向（方位角, S = 180°）"
	},
	"panel surface": {
		"en": "Panel surface (m²)",
		"de": "Plattenoberfläche (m²)",
		"ru": "Поверхность панели (м²)",
		"pt": "Superfície do painel (m²)",
		"nl": "Paneeloppervlak (m²)",
		"fr": "Surface du panneau (m²)",
		"it": "Superficie del pannello (m²)",
		"es": "Superficie del panel (m²)",
		"pl": "Powierzchnia panelu (m²)",
		"zh-cn": "面板面积（m²）"
	},
	"panel efficiency": {
		"en": "Panel efficiency (%)",
		"de": "Panel-Effizienz (%)",
		"ru": "Эффективность панели (%)",
		"pt": "Eficiência do painel (%)",
		"nl": "Paneel efficiëntie (%)",
		"fr": "Efficacité du panneau (%)",
		"it": "Efficienza del pannello (%)",
		"es": "Eficiencia del panel (%)",
		"pl": "Wydajność panelu (%)",
		"zh-cn": "面板效率"
	},
	"battery capacity": {
		"en": "Battery capacity (%)",
		"de": "Batteriekapazität (%)",
		"ru": "Емкость батареи (%)",
		"pt": "Capacidade de carga (%)",
		"nl": "Batterij capaciteit (%)",
		"fr": "Capacité de la batterie (%)",
		"it": "Capacità della batteria (%)",
		"es": "Capacidad de la batería (%)",
		"pl": "Pojemność baterii (%)",
		"zh-cn": "电池容量"
	},
	"The power forecast makes partly use of the script from the <a href=\"https://forum.iobroker.net/topic/4953/script-sonnenstand-und-einstrahlung\" target=\"_blank\">ioBroker forum</a> and uses the suncalc npm module.": {
		"en": "The power forecast makes partly use of the script from the <a href=\"https://forum.iobroker.net/topic/4953/script-sonnenstand-und-einstrahlung\" target=\"_blank\">ioBroker forum</a> and uses the suncalc npm module.",
		"de": "Die <a href=\"https://forum.iobroker.net/topic/4953/script-sonnenstand-und-einstrahlung\" target=\"_blank\">Energieprognose</a> verwendet teilweise das Skript aus dem <a href=\"https://forum.iobroker.net/topic/4953/script-sonnenstand-und-einstrahlung\" target=\"_blank\">ioBroker-Forum</a> und das suncalc npm-Modul.",
		"ru": "Прогноз мощности частично использует сценарий с <a href=\"https://forum.iobroker.net/topic/4953/script-sonnenstand-und-einstrahlung\" target=\"_blank\">форума ioBroker</a> и использует модуль suncalc npm.",
		"pt": "A previsão de energia utiliza parcialmente o script do <a href=\"https://forum.iobroker.net/topic/4953/script-sonnenstand-und-einstrahlung\" target=\"_blank\">fórum ioBroker</a> e usa o módulo suncalc npm.",
		"nl": "De stroomvoorspelling maakt gedeeltelijk gebruik van het script van het <a href=\"https://forum.iobroker.net/topic/4953/script-sonnenstand-und-einstrahlung\" target=\"_blank\">ioBroker-forum</a> en maakt gebruik van de suncalc npm-module.",
		"fr": "La prévision de puissance utilise en partie le script du <a href=\"https://forum.iobroker.net/topic/4953/script-sonnenstand-und-einstrahlung\" target=\"_blank\">forum ioBroker</a> et utilise le module suncalc npm.",
		"it": "La previsione di potenza utilizza in parte lo script dal <a href=\"https://forum.iobroker.net/topic/4953/script-sonnenstand-und-einstrahlung\" target=\"_blank\">forum ioBroker</a> e utilizza il modulo suncalc npm.",
		"es": "El pronóstico de potencia utiliza en parte el script del <a href=\"https://forum.iobroker.net/topic/4953/script-sonnenstand-und-einstrahlung\" target=\"_blank\">foro ioBroker</a> y utiliza el módulo suncalc npm.",
		"pl": "Prognoza mocy częściowo wykorzystuje skrypt ze <a href=\"https://forum.iobroker.net/topic/4953/script-sonnenstand-und-einstrahlung\" target=\"_blank\">forum ioBroker</a> i wykorzystuje moduł Suncalc npm.",
		"zh-cn": "功耗预测将部分使用<a href=\"https://forum.iobroker.net/topic/4953/script-sonnenstand-und-einstrahlung\" target=\"_blank\">ioBroker论坛</a>中的脚本，并使用suncalc npm模块。"
	},
	"Please enter a maximum MinSoC between 5 and 100. Default is 40.": {
		"en": "Please enter a maximum MinSoC between 5 and 100. Default is 40.",
		"de": "Bitte geben Sie einen maximalen MinSoC zwischen 5 und 100 ein. Der Standardwert ist 40.",
		"ru": "Пожалуйста, введите максимальный MinSoC от 5 до 100. По умолчанию 40.",
		"pt": "Digite um MinSoC máximo entre 5 e 100. O padrão é 40.",
		"nl": "Voer een maximale MinSoC in tussen 5 en 100. Standaard is 40.",
		"fr": "Veuillez entrer un MinSoC maximum entre 5 et 100. La valeur par défaut est 40.",
		"it": "Inserisci un MinSoC massimo compreso tra 5 e 100. L'impostazione predefinita è 40.",
		"es": "Ingrese un MinSoC máximo entre 5 y 100. El valor predeterminado es 40.",
		"pl": "Wprowadź maksymalną wartość MinSoC między 5 a 100. Domyślna wartość to 40.",
		"zh-cn": "请输入一个介于5到100之间的最大MinSoC。默认值为40。"
	},
	"maximum minsoc": {
		"en": "Maximum MinSoC (%)",
		"de": "Maximaler MinSoC (%)",
		"ru": "Максимальный MinSoC (%)",
		"pt": "MinSoC máximo (%)",
		"nl": "Maximale MinSoC (%)",
		"fr": "MinSoC maximum (%)",
		"it": "MinSoC massimo (%)",
		"es": "Máximo MinSoC (%)",
		"pl": "Maksymalna MinSoC (%)",
		"zh-cn": "最大MinSoC"
	},
	"max minsoc description": {
		"en": "Defines the maximum MinSoC value that is set by the forecast feature. Default value is 40, possible values are 5 to 100, where 100 means the battery will not be discharged at all.",
		"de": "Definiert den maximalen MinSoC-Wert, der von der Prognosefunktion festgelegt wird. Der Standardwert ist 40, mögliche Werte sind 5 bis 100, wobei 100 bedeutet, dass der Akku überhaupt nicht entladen wird.",
		"ru": "Определяет максимальное значение MinSoC, которое устанавливается функцией прогноза. Значение по умолчанию - 40, возможные значения - от 5 до 100, где 100 означает, что батарея вообще не будет разряжаться.",
		"pt": "Define o valor máximo de MinSoC definido pelo recurso de previsão. O valor padrão é 40, os valores possíveis são de 5 a 100, onde 100 significa que a bateria não será descarregada.",
		"nl": "Definieert de maximale MinSoC-waarde die wordt ingesteld door de voorspellingsfunctie. Standaardwaarde is 40, mogelijke waarden zijn 5 tot 100, waarbij 100 betekent dat de batterij helemaal niet wordt ontladen.",
		"fr": "Définit la valeur MinSoC maximale définie par la fonction de prévision. La valeur par défaut est 40, les valeurs possibles vont de 5 à 100, où 100 signifie que la batterie ne sera pas déchargée du tout.",
		"it": "Definisce il valore MinSoC massimo impostato dalla funzione di previsione. Il valore predefinito è 40, i valori possibili sono da 5 a 100, dove 100 indica che la batteria non si scaricherà affatto.",
		"es": "Define el valor máximo de MinSoC que establece la función de pronóstico. El valor predeterminado es 40, los valores posibles son de 5 a 100, donde 100 significa que la batería no se descargará en absoluto.",
		"pl": "Definiuje maksymalną wartość MinSoC ustawioną przez funkcję prognozy. Wartość domyślna to 40, możliwe wartości to od 5 do 100, gdzie 100 oznacza, że akumulator w ogóle nie zostanie rozładowany.",
		"zh-cn": "定义由预测功能设置的最大MinSoC值。默认值为40，可能的值为5到100，其中100表示电池将完全不放电。"
	},
	"The forecast uses weather data from kachelmannwetter and (if adapters installed) from weatherunderground and darksky.": {
		"en": "The forecast uses weather data from kachelmannwetter and (if adapters installed) from weatherunderground, daswetter.com and darksky.",
		"de": "Die Vorhersage verwendet Wetterdaten von kachelmannwetter und (falls Adapter installiert) von weatherunderground, daswetter.com und darksky.",
		"ru": "Прогноз использует данные о погоде от kachelmannwetter и (если установлены адаптеры) от weatherunderground, daswetter.com и darksky.",
		"pt": "A previsão usa dados climáticos de kachelmannwetter e (se adaptadores instalados) de weatherunderground, daswetter.com e darksky.",
		"nl": "De voorspelling maakt gebruik van weergegevens van kachelmannwetter en (indien adapters geïnstalleerd) van weatherunderground, daswetter.com en darksky.",
		"fr": "Les prévisions utilisent les données météorologiques de kachelmannwetter et (si des adaptateurs sont installés) de weatherunderground, daswetter.com et darksky.",
		"it": "La previsione utilizza i dati meteorologici di Kachelmannwetter e (se gli adattatori sono installati) di Weatherunderground, daswetter.com e Darksky.",
		"es": "El pronóstico utiliza datos meteorológicos de kachelmannwetter y (si hay adaptadores instalados) de weatherunderground, daswetter.com y dark dark.",
		"pl": "Prognoza wykorzystuje dane pogodowe z kachelmannwetter i (jeśli zainstalowane są adaptery) z Weatherunderground, daswetter.com i Darksky.",
		"zh-cn": "天气预报使用来自kachelmannwetter的天气数据以及（如果安装了适配器）来自weatherunderground和darksky的天气数据。"
	},
	"second panel info": {
		"en": "You can specify a second panel surface if you need to, e. g. when you have two separate panels for eastern and western orientation (optional)",
		"de": "Sie können bei Bedarf eine zweite Fläche angeben, z. B. bei Ost- und Westausrichtung (optional).",
		"ru": "Вы можете указать вторую поверхность панели, если вам нужно (необязательно)",
		"pt": "Você pode especificar uma segunda superfície do painel se precisar (opcional)",
		"nl": "U kunt desgewenst een tweede paneeloppervlak opgeven (optioneel)",
		"fr": "Vous pouvez spécifier une deuxième surface de panneau si vous en avez besoin (facultatif)",
		"it": "Se necessario, è possibile specificare una seconda superficie del pannello (opzionale)",
		"es": "Puede especificar una segunda superficie de panel si lo necesita (opcional)",
		"pl": "W razie potrzeby możesz określić drugą powierzchnię panelu (opcjonalnie)",
		"zh-cn": "如果需要，您可以指定第二个面板表面（可选）"
	}
};