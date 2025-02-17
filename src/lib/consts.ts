import { State, type Party, type Thesis } from '$lib';

export const parties: Party[] = [
	{
		name: 'Sozialdemokratische Partei Deutschlands',
		abbreviation: 'SPD',
		description:
			'Die SPD entstand 1875 aus der Arbeiterbewegung. Das Schlagwort soziale Gerechtigkeit ist Ausgangspunkt vieler ihrer Positionen, z. B. in der Arbeits-, Sozial- oder Gesellschaftspolitik der Partei. Derzeit stellt sie zum vierten Mal in ihrer Geschichte den Bundeskanzler.',
		logo: 'parties/spd.png',
		positions: [
			{
				state: State.Approve,
				reason:
					'Die SPD bekennt sich klar zur diplomatischen, militärischen, finanziellen und humanitären Unterstützung der Ukraine im Kampf gegen den völkerrechtswidrigen russischen Angriffskrieg – so lange wie nötig. Die Ukraine muss mögliche Verhandlungen auf Augenhöhe mit Russland führen können. Zur Verteidigung der Ukraine und zur Sicherung des Friedens in Europa unterstützt die SPD mit Besonnenheit und Augenmaß. Für uns gilt, dass Deutschland und die NATO nicht selbst zur Kriegspartei werden dürfen.'
			},
			{
				state: State.Approve,
				reason:
					'Der konsequente Ausbau von und Umstieg auf erneuerbare Energien sowie die Einbindung von Speichern macht Energieversorgung sicher und dauerhaft bezahlbar. Wir wollen mit Augenmaß fördern: Gerade bisher weniger beachtete Erneuerbare wie etwa die Geothermie brauchen weiterhin gezielte Förderung. Perspektivisch sollen erneuerbare Energien wie Windkraft oder Sonnenenergie aber auch ohne staatliche Förderung auskommen.'
			},
			{
				state: State.Approve,
				reason:
					'Die allermeisten Menschen im Bürgergeldbezug, die arbeiten können, wollen auch arbeiten. Wir beteiligen uns nicht an Versuchen, Geringverdiener gegen die auszuspielen, die noch weniger haben. Das Bürgergeld ist eine steuerfinanzierte Grundsicherung. Deswegen wird von arbeitsfähigen Personen zu Recht Mitwirkung eingefordert, natürlich in den Grenzen, die das Bundesverfassungsgericht gesetzt hat.'
			},
			{
				state: State.Approve,
				reason:
					'Wir wollen ein Tempolimit von 130 Stundenkilometern auf Bundesautobahnen einführen. Dadurch wird es deutlich sicherer und entspannter auf der Autobahn: Stress, Unfälle, Staus und Lärm werden weniger. Es gibt weniger Verkehrstote und Schwerverletzte. Und das Tempolimit leistet auch einen schnellen und wirksamen Beitrag zum Klimaschutz. In allen unseren Nachbarländern fährt es sich gut mit einem Tempolimit.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir halten uns an europäisches Recht! Nur so werden wir der großen Herausforderung der Bewältigung unserer humanitären Verantwortung gerecht. Dafür war es ein großer Erfolg, dass nach vielen Jahren der Blockade endlich alle Mitgliedstaaten wieder an einem Strang ziehen. Die SPD wird keine europarechtswidrigen Alleingänge unternehmen, wie es unsere politische Konkurrenz fordert. Auch, weil ansonsten ungewollten Kettenreaktionen durch andere Mitgliedstaaten die Lage wieder verschlechtern würden.'
			},
			{
				state: State.Approve,
				reason:
					'Wir wollen langfristig für stabile und bezahlbare Mieten in angespannten Wohnungsmärkten sorgen. Die Mietpreisbremse läuft ohne gesetzliche Änderung zum 31.12.25 aus. Wir wollen das Gesetz ändern und sie unbefristet einführen. Wir werden dafür sorgen, dass die Mietpreisbremse nicht durch z.B. (teil-)möblierte und befristete Wohnungsangebote umgangen werden kann. Den Mietspiegel-Betrachtungszeitraum wollen wir auf zehn Jahre ausweiten und preisgebundenen Wohnraum in die Betrachtung einbeziehen.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir sprechen uns gegen eine anlasslose Überwachung der Bürgerinnen und Bürger im öffentlichen Raum aus.'
			},
			{
				state: State.Approve,
				reason:
					'Wir wollen schnell handeln, um Arbeitsplätze zu sichern und die Wirtschaft zu stärken. Dafür braucht es wettbewerbsfähige Strompreise für die Industrie und bezahlbare Preise für Privathaushalte. Die Stromkosten haben verschiedene Bestandteile, die wir mit unserem Vorschlag gezielt angehen: Die Kosten für den Ausbau der Stromnetze, die die Verbraucher*innen zu tragen haben, wollen wir deckeln. Die Stromsteuersenkung für das produzierende Gewerbe und die Landwirtschaft soll dauerhaft gelten.'
			},
			{
				state: State.Disprove,
				reason:
					'Die SPD hat dafür gesorgt, dass alle Menschen nach 45 Beitragsjahren zwei Jahre früher abschlagsfrei in Rente gehen können. Wir verteidigen dieses Recht gegen die Bestrebungen von Union und FDP, es abzuschaffen. Unser Schwerpunkt liegt darauf, auch künftig das Rentenniveau bei mindestens 48 % zu stabilisieren.'
			},
			{
				state: State.Approve,
				reason:
					'Diese Formulierung spiegelt die historischen Wurzeln des Grundgesetzes (GG) in Deutschland wider und betont die ethischen Grundlagen unserer Gesellschaft. Sie ergänzt Artikel 1, der die Unantastbarkeit der Menschenwürde betont, indem sie eine Verpflichtung zur Achtung dieser Würde impliziert. Ebendiese Traditionen im GG zu bewahren, stärkt die Einheit und Stabilität unserer pluralistischen Gesellschaft.'
			},
			{
				state: State.Approve,
				reason:
					'Deutschland profitiert seit langem davon, dass wir ein Einwanderungsland sind. Die Bundesagentur für Arbeit hat berechnet, dass wir jedes Jahr eine Nettozuwanderung von 400.000 Arbeitskräften aus dem Ausland brauchen, um dem Fachkräftemangel zu begegnen. Deshalb haben wir das Fachkräfteeinwanderungsgesetz geschaffen, um auch im internationalen Wettstreit um Fachkräfte bestehen zu können. Das ist wichtig für unsere Wirtschaft und unseren Wohlstand. Diesen Weg setzen wir fort.'
			},
			{
				state: State.Disprove,
				reason:
					'Alle deutschen Atomkraftwerke wurden stillgelegt. Sie werden inzwischen abgebaut. Dieser Prozess ist nicht mehr umkehrbar. Neue Atomkraftwerke wären extrem teuer und passen nicht zu einer Energieversorgung, die auf Erneuerbare setzt. Für den Müll der bisherigen Nutzung der Atomkraft braucht es die sichere Endlagerung der radioaktiven Stoffe. Wir werden das Endlager-Suchverfahren konstruktiv begleiten und beschleunigen, ohne die Sicherheit zu gefährden.'
			},
			{
				state: State.Approve,
				reason:
					'Wir wollen die große Mehrheit der Einkommensteuerpflichtigen entlasten (95 %). Das bedeutet mehr Netto vom Brutto. Gerade mittlere Einkommen werden durch den Steuertarif relativ stark in Anspruch genommen. Der Spitzensteuersatz greift aktuell zu früh und soll daher künftig erst bei höheren Einkommen einsetzen. Gleichzeitig soll der Spitzensteuersatz moderat steigen, um Spitzeneinkommen an der Finanzierung der Entlastung für die große Mehrheit gerecht zu beteiligen.'
			},
			{
				state: State.Approve,
				reason:
					'Wir brauchen einen echten Bildungsaufbruch, um den Herausforderungen beim Ausgleich von Bildungsnachteilen gerecht zu werden. Damit dieser Aufbruch gelingt, müssen sich alle staatlichen Ebenen ihrer Verantwortung bewusst sein und den Weg fortsetzen, in enger Abstimmung gemeinsame Impulse für ein besseres Bildungssystem und mehr Bildungsgerechtigkeit zu setzen – auch mit einer gemeinsamen finanziellen Kraftanstrengung. Das Startchancenprogramm für Schulen ist hierbei ein wesentlicher Meilenstein.'
			},
			{
				state: State.Approve,
				reason:
					'Aus der deutschen Verantwortung für die Shoa bekennen wir uns als SPD uneingeschränkt zum Existenzrecht Israels. Das bedeutet auch, dass wir Verantwortung für die Verteidigungsfähigkeit Israels tragen und Israel entsprechend mit Rüstungsgütern unterstützen. Dem liegen sorgfältige Einzelfallentscheidungen auf Basis des humanitären Völkerrechts und der Wahrung der Menschenrechte zugrunde.'
			},
			{
				state: State.Approve,
				reason:
					'Die SPD setzt auf ein solidarisches, beitragsfinanziertes Krankenversicherungssystem und auf einen gerechten Finanzausgleich zwischen den Krankenkassen. Auch die privaten Versicherungen sollen zum Risikostrukturausgleich beitragen. Krankenkassen und private Krankenversicherungen bilden so ein System einer solidarischen Bürgerversicherung aus, an dem alle beteiligt sind.'
			},
			{
				state: State.Disprove,
				reason:
					'Nein, im Gegenteil. Die Quote wirkt. Unser Ziel ist und bleibt die gleichberechtigte Teilhabe von Frauen und Männern in Führungspositionen. Dazu werden wir das Führungspositionen-Gesetz weiterentwickeln mit dem Ziel, bis 2030 Parität in Aufsichtsräten und Vorständen zu erreichen. Als nächsten Schritt streben wir ein Gleichstellungsgesetz für die Privatwirtschaft an.'
			},
			{
				state: State.Approve,
				reason:
					'Der Ökologische Landbau ist ressourcenschonend und umweltverträglich und bringt qualitativ hochwertige Lebensmittel hervor. Wir unterstützen Deutschlands Ziel, bis 2030 30 % der landwirtschaftlichen Fläche ökologisch zu bewirtschaften. Dafür braucht es gute Rahmenbedingungen entlang der gesamten Wertschöpfungskette. Auch im konventionellen Bereich kann bodenschonend, tierwohlgerecht und klimaangepasst gearbeitet werden. Das wollen wir ebenfalls unterstützen.'
			},
			{
				state: State.Approve,
				reason:
					'Eine lebendige Zivilgesellschaft ist das Rückgrat unserer Demokratie. Rechtsextremismus bedroht die demokratische Grundordnung, schürt Hass und spaltet unsere Gemeinschaft. 2024 erreichte die rechtsextreme Kriminalität mit 33.963 Straftaten, darunter 1.136 Gewaltdelikte, einen traurigen Höchststand. Mit dem Demokratiefördergesetz und Programmen wie Demokratie leben! unterstützen wir Initiativen gegen Extremismus, fördern Engagement und sichern den gesellschaftlichen Zusammenhalt.'
			},
			{
				state: State.Approve,
				reason:
					'Die Sorgfaltspflicht der Unternehmen endet nicht am Werkstor. In der gesamten Lieferkette darf es nicht zu Menschenrechtsverletzungen kommen. Es geht auch um fairen Wettbewerb. Wir wollen konkrete Vereinbarungen zu internationalen Standards, die gute Arbeit mit existenzsichernden Löhnen sicherstellen. Wir werden außerdem dafür sorgen, dass die Handhabung einfacher wird und dass die verschiedenen Regelungen besser aufeinander abgestimmt und Bürokratielasten reduziert werden.'
			},
			{
				state: State.Approve,
				reason:
					'Allen jungen Menschen müssen alle Ausbildungswege offenstehen. Wir haben daher die BAföG-Bedarfssätze ebenso erhöht wie die Freibeträge beim Elterneinkommen, innerhalb derer ein Anspruch auf Ausbildungsförderung besteht. Im nächsten Schritt wollen wir dafür sorgen, dass die Höhe der Ausbildungsförderung regelmäßig an die steigenden Lebenshaltungskosten angepasst wird. Langfristig wollen wir das Bafög elternunabhängiger machen und streben die schrittweise Rückkehr zum Vollzuschuss an.'
			},
			{
				state: State.Disprove,
				reason:
					'Die aktuelle Regelung zur Schuldenbremse ist nicht auf die Herausforderungen unserer Zeit und Zukunft ausgelegt. Darum kann sie in dieser Form nicht beibehalten werden. Wir möchten die Schuldenbremse reformieren, um mehr Zukunftsinvestitionen zu ermöglichen (z.B. in Verkehrsinfrastruktur, Bildung und Klimaneutralität), staatliche Handlungsfähigkeit in Notlagen zu stärken und flexibler auf wirtschaftliche Entwicklungen reagieren zu können.'
			},
			{
				state: State.Approve,
				reason:
					'Die SPD hat dafür gesorgt, dass Asylsuchende sehr früh für ihren Lebensunterhalt selbst arbeiten sollen. Zu beachten ist allerdings, dass es für die Durchführung eines schnellen Asylverfahrens besonders in den ersten 3 Monaten nach Antragstellung auf die Verfügbarkeit der Antragsteller*innen für die Behörden ankommt.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir bekennen uns klar zu den Klimazielen für Deutschland und die EU. Wir müssen den Anstieg der globalen Durchschnittstemperatur auf deutlich unter zwei Grad Celsius begrenzen und nach Möglichkeit auf den 1,5-Grad-Pfad führen. Diese Ziele sind europäisch und international festgelegt und das Bundesverfassungsgericht hat sie 2021 noch einmal bekräftigt.'
			},
			{
				state: State.Neutral,
				reason:
					'Die SPD unterstützt branchenspezifische Lösungen für die Regelarbeitszeit. Die SPD unterstützt daher die Gewerkschaften überall dort, wo sie sich für Arbeitszeitverkürzungen einsetzen. Technischer Fortschritt muss auch für kürzere Arbeitszeit und damit die Entlastung der Beschäftigten genutzt werden. Arbeitszeitpolitik ist in Deutschland aber Kernaufgabe der grundgesetzlich geschützten Tarifautonomie. Das betrifft insbesondere die Festlegung der Wochenarbeitszeit in den verschiedenen Branchen.'
			},
			{
				state: State.Disprove,
				reason:
					'Für die SPD gehören Schwangerschaftskonflikte nicht ins Strafrecht. Deshalb wollen wir Schwangerschaftsabbrüche entkriminalisieren und außerhalb des Strafrechts regeln. Davon ausgenommen sind Fälle, in denen sie gegen oder ohne den Willen der Schwangeren erfolgen (sollen). Ein Abbruch der Schwangerschaft nach Ende der 12. Woche soll rechtswidrig bleiben. Wir stehen für einen Rechtsanspruch auf eine rechtebasierte und psychosoziale Beratung rund um Schwangerschaft und Schwangerschaftskonflikt.'
			},
			{
				state: State.Disprove,
				reason:
					'Ein Austritt Deutschlands aus der Währungsunion würde der Exportnation Deutschland und der deutschen Wirtschaft massiven Schaden zufügen und zu großen Verlusten bei Wohlstand und Arbeitsplätzen führen.'
			},
			{
				state: State.Approve,
				reason:
					'Die SPD hat die jahrelange Vernachlässigung der Schiene beendet. Eine verlässliche Bahn ist das Rückgrat der Verkehrswende. Wir haben Milliardeninvestitionen in unser Schienennetz auf den Weg gebracht, das jetzt einer Generalsanierung unterzogen wird, damit die Bahn wieder pünktlicher wird. Gleichzeitig müssen unsere Straßen dringend saniert werden, insbesondere die Autobahnbrücken.'
			},
			{
				state: State.Disprove,
				reason:
					'Die SPD sieht im Ehrenamt eine große Leistung für den gesellschaftlichen Zusammenhalt. Deshalb haben wir zum Beispiel die Übungsleiterpauschalen deutlich erhöht. Außerdem haben wir die Hinzuverdienstgrenzen im Rentenrecht weitgehend aufgehoben, so dass es keine Probleme bei der Einkommensanrechnung bei Rentenbezug mehr gibt. Vorschläge für die rentenrechtliche Anerkennung von bestimmten Ehrenamtszeiten werfen aber neue Gerechtigkeitsfragen auf hinsichtlich der Gleichstellung aller Ehrenämter.'
			},
			{
				state: State.Disprove,
				reason:
					'Die Grundsteuer ist eine Steuer auf Eigentum an Grund und Boden. Mieterinnen und Mieter wollen wir bei der Grundsteuer entlasten. Die Umlagefähigkeit der Grundsteuer darf deshalb nicht so weit gehen, dass der Eigentümer sämtliche Lasten auf die Mietparteien umlegen darf.'
			},
			{
				state: State.Disprove,
				reason:
					'Das Streikrecht gewährleistet Tarifverhandlungen auf Augenhöhe. Die Sozialdemokratie erteilt allen Versuchen, das Streikrecht einzuschränken, eine klare Absage.'
			},
			{
				state: State.Neutral,
				reason:
					'Wir wollen mehr Bürgerbeteiligung auch auf Bundesebene und setzen uns dafür ein, dass geloste Bürgerräte als fester Bestandteil unserer Demokratie etabliert werden. Sie beraten zu schwierigen Themen und stärken das Vertrauen in die Demokratie. Sie machen Demokratie erlebbar, indem sie Menschen mit unterschiedlichen Positionen in den Austausch bringen, zur Kompromissfindung ermutigen und erreichen, dass der Interessenausgleich als Kern der Demokratie verstanden wird.'
			},
			{
				state: State.Disprove,
				reason:
					'Kinder unter 14 Jahren besitzen grundsätzlich noch nicht die nötige Reife, die Folgen ihres Handelns voll zu erkennen und zu steuern. Statt härterer Strafen setzen wir auf Prävention, Jugendhilfe und Sozialarbeit. Auch nicht strafmündige Täter bleiben nicht ohne Konsequenzen: Erziehungshilfen, intensive Betreuung und sozialpädagogische Maßnahmen greifen, um Fehlverhalten zu korrigieren und die Kinder auf den richtigen Weg zu bringen.'
			},
			{
				state: State.Neutral,
				reason:
					'Die übermäßige Subventionierung in verschiedenen Branchen durch China gefährdet faire Wettbewerbsbedingungen. Deshalb ist es grundsätzlich richtig, dass die EU-Kommission dagegen vorgeht. Gleichzeitig schaden die aktuellen Zölle der deutschen Automobilwirtschaft und gefährden Arbeitsplätze hierzulande. Auf Druck der Bundesregierung verhandelt die EU-Kommission daher mit der chinesischen Regierung, um eine Alternative zu den zunächst eingeführten Zöllen zu finden.'
			},
			{
				state: State.Approve,
				reason:
					'Wir haben mit dem modernen Staatsangehörigkeitsgesetz wichtige Fortschritte erzielt. Wir stehen dafür, dass Menschen, die sich klar zur demokratischen Grundordnung bekennen und die strengen Einbürgerungsvoraussetzungen erfüllen, auch formal Bürgerinnen und Bürger unseres Landes werden sollen. Wir sind überzeugt, dass in einem modernen Einwanderungsland die Möglichkeit der Mehrstaatigkeit ein die Lebensrealität widerspiegelnder Aspekt ist, der Identifikation, Akzeptanz und Zusammenhalt stärkt.'
			},
			{
				state: State.Disprove,
				reason:
					'Freiwilliges Engagement für die Gesellschaft ist für junge Menschen ein wertvoller Teil von Bildung. Die bestehenden Freiwilligendienste sind beliebt - vielerorts gibt es mehr Interessentinnen und Interessenten als Plätze. Wir wollen daher, dass Bund und Länder gemeinsam für eine bessere Finanzierung der Freiwilligendienste sorgen. Das „Taschengeld“ wollen wir so ausgestalten, dass auch junge Frauen und Männer aus einkommensärmeren Haushalten sich für einen Freiwilligendienst entscheiden können.'
			},
			{
				state: State.Disprove,
				reason:
					'Bis zum Jahr 2045 muss Deutschland klimaneutral sein. Dazu müssen alle Bereiche wie Gebäude, Verkehr oder Industrie beitragen. Heute wird die Wärme zum Heizen und für Warmwasser noch zu 80 Prozent mit Gas, Öl oder Kohle erzeugt. Da eine Heizung meist länger als 20 Jahre in Betrieb ist, müssen die Weichen in Richtung Nachhaltigkeit rechtzeitig gestellt werden. Das wurde mit dem Gebäudeenergiegesetz (GEG) getan. Eine umfangreiche Förderung sorgt dafür, dass niemand allein gelassen wird.'
			},
			{
				state: State.Approve,
				reason:
					'Die SPD hat den gesetzlichen Mindestlohn eingeführt. Die Höhe des gesetzlichen Mindestlohns muss sich an den Empfehlungen der europäischen Richtlinie orientieren, also an mindestens 60 Prozent des mittleren Einkommens in Deutschland. Wir werden dafür sorgen, dass dieses europäische Recht von der Mindestlohnkommission künftig berücksichtigt wird. Dementsprechend muss der Mindestlohn spätestens ab 2026 bei 15 Euro liegen.'
			}
		]
	},
	{
		name: 'Christlich Demokratische Union Deutschlands / Christlich-Soziale Union in Bayern e.V.',
		abbreviation: 'CDU / CSU',
		description:
			'CDU und CSU wurden 1945 bzw. 1946 als überkonfessionelle Parteien gegründet und vereinen konservative, wirtschaftsliberale und christlich-soziale Positionen. Die CSU tritt nur in Bayern zu Wahlen an. Im Bundestag bilden die Parteien seit 2021 gemeinsam die größte Oppositionsfraktion.',
		logo: 'parties/cdu:csu.png',
		positions: [
			{
				state: State.Approve,
				reason:
					'Unser Ziel ist Frieden in Europa. Die Ukraine verteidigt auch uns, denn fällt die Ukraine, droht ein russischer Angriff auf weitere Länder. Daher unterstützen wir die Ukraine mit diplomatischen, finanziellen und humanitären Mitteln sowie mit Waffenlieferungen. Sie muss ihr Selbstverteidigungsrecht ausüben können. Unser Ziel ist ein Friedensprozess, der von der Ukraine aus einer Position der Stärke geführt werden kann.'
			},
			{
				state: State.Approve,
				reason:
					'Wir bringen alle Kapazitäten ans Netz, die klimafreundlich und systemdienlich sind, angefangen bei einem zielgerichteten weiteren Ausbau der Erneuerbaren Energien. Ein besonderes Augenmerk legen wir auf den integrierten und grenzüberschreitenden Netzausbau sowie auf eine effiziente Verknüpfung des Ausbaus von Erneuerbaren Energien, Netzen und Speichern. Dafür wollen wir auch mehr privates Kapital gewinnen.'
			},
			{
				state: State.Approve,
				reason:
					'Wer arbeiten kann, soll auch arbeiten. Wenn jemand grundsätzlich nicht bereit ist, Arbeit anzunehmen, muss der Staat davon ausgehen, dass er nicht bedürftig ist. Dann muss die Grundsicherung komplett gestrichen werden.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir sehen in der individuellen Mobilität den Inbegriff von Freiheit und spielen deshalb unterschiedliche Verkehrsmittel nicht gegeneinander aus. Anti-Auto-Haltung, Fahrverbote für Innenstädte, das Umwidmen von Parkplätzen und ein generelles Tempolimit auf deutschen Autobahnen lehnen wir ab und setzen stattdessen auf innovative, moderne Verkehrssteuerung. An Gefahrenstellen bestehen schon heute Tempolimits, um die Verkehrssicherheit zu erhöhen.'
			},
			{
				state: State.Approve,
				reason:
					'Die Grenzkontrollen an den deutschen Grenzen werden wir mit Zurückweisungen verbinden. Wir setzen einen faktischen Aufnahmestopp sofort durch. Dazu weisen wir diejenigen an den deutschen Grenzen zurück, die aus einem anderen Mitgliedstaat der EU oder dem Schengen-Raum nach Deutschland einreisen und bei uns einen Asylantrag stellen wollen. Wer aus einem anderen EU-Staat kommt, hat dort bereits die Gelegenheit Asyl zu beantragen.'
			},
			{
				state: State.Approve,
				reason:
					'Wir stehen für einen wirksamen und angemessenen Mieterschutz – dazu gehören auch Regeln zur Miethöhe. Gegen die hohen Mieten, die v. a. in Ballungsräumen ein Problem sind, hilft aber letztlich nur: bauen, bauen, bauen. Dafür setzen wir gute Rahmenbedingungen.'
			},
			{
				state: State.Approve,
				reason:
					'Wir fordern den Ausbau des Videoschutzes an öffentlichen Gefahrenorten und Systeme zur automatisierten Gesichtserkennung an Bahnhöfen, Flughäfen und anderen Kriminalitätsschwerpunkten zur Identifizierung schwerer Straftäter.'
			},
			{
				state: State.Approve,
				reason:
					'CDU und CSU wollen die Rahmenbedingungen am Standort Deutschland verbessern. Dafür werden wir nicht nur die Industrieunternehmen beim Strompreis entlasten, sondern auch Handwerks- und Dienstleistungsunternehmen sowie Haushalte. Kurzum: Wenn wir die Energiepreise für alle in Deutschland durch eine Reduktion der Netzentgelte und der Stromsteuer senken, profitieren alle.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir stehen für Verlässlichkeit beim Renteneintrittsalter. An der bestehenden gesetzlichen Regelung zum Renteneintrittsalter halten wir fest. Die Regelung für besonders langjährige Versicherte mit 45 Versicherungsjahren behalten wir mit Blick auf die Planungssicherheit für Unternehmen und rentennahe Jahrgänge bei. Eine Absenkung der Beitragsjahre würde zu stark steigenden Rentenbeiträgen führen und ist im Hinblick auf den Arbeitskräftemangel nicht zu vertreten.'
			},
			{
				state: State.Approve,
				reason:
					'Bei der Einführung der Präambel haben sich die Mütter und Väter des Grundgesetzes von folgendem Gedanken leiten lassen: Wir nehmen nicht für uns in Anspruch, dass wir die letzte Wahrheit präsentieren, sondern wir sind uns bewusst, dass alles, was wir tun, menschengemacht ist. Und der Mensch kann immer auch fehlbar sein. Das gilt auch heute noch. Als christlich geprägte Parteien wollen wir als CDU und CSU an der Formulierung festhalten.'
			},
			{
				state: State.Approve,
				reason:
					'Wir wollen ausländische Fachkräfte gewinnen und für ausländische Fachkräfte ein attraktiver Standort sein. Für schnellere und digitale Prozesse für Erwerbszuwanderer richten wir eine digitale Bundesagentur für Fachkräfteeinwanderung („Work-and-Stay-Agentur“) ein. Fachkräfte erhalten so Service aus einer Hand: von der Anwerbung und Arbeitsplatzvermittlung über die Prüfung der Einreisevoraussetzungen und Visavergabe bis hin zum Aufenthaltstitel.'
			},
			{
				state: State.Approve,
				reason:
					'Mit Blick auf die Klimaziele und die Versorgungssicherheit hat die Kernkraft eine bedeutende Rolle. Dabei setzen wir auf Energiepartnerschaften mit Nachbarländern, die Forschung zu Kernenergie der vierten und fünften Generation, Kleinkernkraft- und Fusionskraftwerke. Gleichzeitig streben wir schnellstmöglich eine fachliche Bestandsaufnahme an, ob angesichts des jeweiligen Rückbaustadiums eine Wiederaufnahme des Betriebs der zuletzt abgeschalteten Kernkraftwerke noch möglich ist.'
			},
			{
				state: State.Disprove,
				reason:
					'Bürger und Unternehmen zahlen in Deutschland zu hohe Steuern. Daher ist jetzt keine Zeit für Steuererhöhungen, sondern für Steuersenkungen. Denn Leistung muss sich wieder lohnen. Daher werden wir die Einkommensteuer reduzieren. Dazu flachen wir den Einkommensteuertarif schrittweise spürbar ab und erhöhen den Grundfreibetrag. Das kommt allen kleinen und mittleren Einkommen zugute. Zudem erhöhen wir die Einkommensgrenze für den Spitzensteuersatz deutlich.'
			},
			{
				state: State.Disprove,
				reason:
					'CDU und CSU stehen zum föderalen Bildungswesen und dem Wettbewerb um die besten Bildungskonzepte. Gleichwohl darf der Wohnort nicht über die Qualität der Bildung entscheiden. Daher setzen wir auf aussagekräftige und verbindliche Vergleichsarbeiten und Lernstandserhebungen. Außerdem streben wir ein bundesweit qualitativ vergleichbares Abitur auf hohem Niveau an.'
			},
			{
				state: State.Approve,
				reason:
					'Deutschland trägt mit seiner Geschichte eine besondere Verantwortung für die Existenz und die Sicherheit Israels. Aus dieser Überzeugung unterstützen wir das Recht Israels auf Selbstverteidigung gegen den Terror, der Israel bedroht. Es liegt in unserem Interesse, dass wir fest an der Seite der einzigen Demokratie im Nahen und Mittleren Osten stehen. Dazu wollen wir Israel auch militärisch unterstützen und noch bestehende Exportblockaden beenden.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir stehen zu den Grundpfeilern des deutschen Gesundheitssystems mit seiner bewährten Selbstverwaltung und zum Nebeneinander von gesetzlicher und privater Krankenversicherung. Das duale System wollen wir erhalten und stärken. Es sorgt für Wettbewerb und trägt zu einer auskömmlichen Finanzierung unseres Gesundheitssystems bei.'
			},
			{
				state: State.Disprove,
				reason:
					'Solange Frauen in Aufsichtsräten und Vorständen von Unternehmen nach wie vor unterrepräsentiert sind, kann die Frauenquote für Aufsichtsräte und Vorstände von Unternehmen dazu beitragen, gleichberechtigte Teilhabe von Frauen in Führungspositionen zu ermöglichen.'
			},
			{
				state: State.Disprove,
				reason:
					'Konventionelle und ökologische Landwirtschaft sind uns gleich wichtig. Nachhaltige Wirtschaftsweisen lassen sich sowohl in ökologischen wie in konventionellen Betrieben erreichen, wenn diese z. B. Natur- und Umweltschutzmaßnahmen durchführen. Deshalb ist unser Ziel, dass die Betriebe bei der Vergabe von Fördermitteln für Nachhaltigkeitsmaßahmen mit vergleichbarer Wirkung auch gleichbehandelt werden.'
			},
			{
				state: State.Approve,
				reason:
					'Wir brauchen Wachsamkeit gegenüber jeder Form von Extremismus, von Gewalt und Terror – ob es sich um Rechts- oder Linksextremismus handelt oder den Islamismus. Rechtsextremisten delegitimieren unseren Staat und seine Institutionen. Offene Gewaltbereitschaft und Ausländerfeindlichkeit machen sie besonders gefährlich. Wir bekämpfen sie mit voller Härte auf der Basis unseres 2020 gestarteten Maßnahmenpakets gegen Rechtsextremismus.'
			},
			{
				state: State.Disprove,
				reason:
					'Der Schutz von Menschenrechten und Umwelt ist ein zentrales Anliegen. Selbstverständlich sind Unternehmen gefordert, ethisch zu handeln und Menschenrechte und Umweltschutz zu beachten. Viele kleine und mittlere Unternehmen sind aber überfordert, die komplette Lieferkette bei allen Zulieferern zu kontrollieren. Deshalb schaffen wir das deutsche Lieferkettengesetz ab.'
			},
			{
				state: State.Approve,
				reason:
					'CDU und CSU wollen das elternabhängige BAföG als Sozialleistung erhalten, damit jede und jeder unabhängig von der Herkunft studieren kann. Das ist ein Gebot der Chancengerechtigkeit. Außerdem werden wir das BAföG und den KfW-Studienkredit besser aufeinander abstimmen. BAföG-Empfängerinnen und -Empfängern wollen wir zudem die Möglichkeit bieten, mehr hinzuzuverdienen.'
			},
			{
				state: State.Approve,
				reason:
					'Wir halten an der grundgesetzlichen Schuldenbremse fest. Sie stellt sicher, dass Lasten nicht unseren Kindern und Enkeln aufgebürdet werden. Denn die Schulden von heute sind die Steuern von morgen.'
			},
			{
				state: State.Disprove,
				reason:
					'Asylsuchende dürfen in Deutschland in der Regel nach 3 Monaten nach Antragstellung arbeiten. Für Personen aus sicheren Herkunftsstaaten sowie für Identitätstäuscher und Mitwirkungsverweigerer müssen aber weiterhin Arbeitsverbote gelten. Auf diese Weise werden Anreize für illegale Migration reduziert.'
			},
			{
				state: State.Disprove,
				reason:
					'CDU und CSU ist die Einhaltung der Pariser Klimaziele ein wichtiges Anliegen. Die Klimaneutralität bis 2045 haben wir daher fest im Blick. Die Erderwärmung ist ein globales Problem, das die Weltgemeinschaft nur gemeinsam lösen kann. Wir verbinden dieses Ziel unbedingt mit dem Erhalt der Wettbewerbsfähigkeit unserer Wirtschaft und der Notwendigkeit der sozialen Tragfähigkeit. Nur so sichern wir die Akzeptanz bei den Menschen und die Chancen auf wirtschaftliches Wachstum.'
			},
			{
				state: State.Disprove,
				reason:
					'Die Sozialpartnerschaft, die Tarifautonomie und die Mitbestimmung haben Deutschland stark gemacht. Wir werden den Tarifpartnern auch weiterhin möglichst großen Spielraum in der Gestaltung von Arbeitsregelungen wie der Wochenarbeitszeit lassen. Denn die Arbeitgeber- und Arbeitnehmervertreter wissen am besten, was in den einzelnen Branchen vor Ort möglich ist und was nicht. Für mehr Flexibilität wollen wir eine tägliche anstatt eine wöchentliche Höchstarbeitszeit einführen.'
			},
			{
				state: State.Approve,
				reason:
					'Wir bekennen uns zum Paragrafen 218 StGB und zur aktuell geltenden Rechtslage zum Schwanger&shy;schafts&shy;abbruch als bewährten gesellschaftlichen Kompromiss – er verbindet das Selbstbestimmungsrecht der Frau und den Schutz des ungeborenen Kindes.'
			},
			{
				state: State.Disprove,
				reason:
					'Eine einheitliche Währung macht Geschäfte und Investitionen in der Eurozone einfacher, günstiger, stabiler und sicherer. Eine Rückkehr zur nationalen Währung würde – gerade für Deutschland als Exportnation – massiven volkswirtschaftlichen Schaden anrichten. Unser Wohlstand und deutsche Arbeitsplätze würden gefährdet.'
			},
			{
				state: State.Disprove,
				reason:
					'Alle Verkehrsträger brauchen einen bedarfsgerechten Ausbau. Individualverkehr und ÖPNV gehören zusammen und müssen barrierefrei gedacht werden. Bus, Bahn, Schiff, Flugzeug und Auto, Rad- und Fußverkehr ergänzen sich sinnvoll.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir messen dem Ehrenamt eine hohe Bedeutung bei und wollen freiwilliges Engagement stärken. Wir halten steuerliche Entlastungen und die Erhöhung der Ehrenamts- und Übungsleiterpauschale für den richtigen Weg. Auch setzen wir ein Vereinspaket für unser Ehrenamt um, mit dem wir Bürokratie, Datenschutz und Haftungsfragen angehen. Zudem setzen wir mehr Anreize für private Gelder und Spenden und erleichtern den Zugang zu öffentlicher Förderung.'
			},
			{
				state: State.Approve,
				reason:
					'Betriebskosten können generell auf die Mieterinnen und Mieter umgelegt werden, so auch die Grundsteuer. Bei einer Änderung würde die wirtschaftliche Belastung aus der Grundsteuer in der Kalkulation der Vermieter berücksichtigt und die Kaltmieten würden steigen.'
			},
			{
				state: State.Neutral,
				reason:
					'Das Streikrecht ist ein hohes Gut in unserer Sozialen Marktwirtschaft. Wir wollen es erhalten. Aber wenn Kita, Bahn und Energieversorgung streiken, werden sehr viel Menschen negativ getroffen und nicht nur ein Betrieb oder eine Branche. Deshalb sollte Streik hier immer nur das letzte Mittel sein und die betroffenen Menschen müssen sich darauf einstellen können.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir stehen zur repräsentativen Demokratie. Die Bürgerinnen und Bürger wählen ihre Abgeordneten, die ihre Interessen in den Parlamenten auf Zeit vertreten. Damit wird ein fester Rahmen für die gesellschaftliche Willensbildung und für die Wahrung von Minderheitsrechten gesichert. Niedrige Beteiligungszahlen bei Volks&shy;entscheiden sollten keine Basis sein, auf der grundlegende Entscheidungen in Deutschland gefällt werden.'
			},
			{
				state: State.Approve,
				reason:
					'Wir halten es für fragwürdig, ob die Strafmündigkeitsgrenze dem heutigen Reifegrad von Kindern noch entspricht. Deshalb wollen wir durch eine wissenschaftliche Untersuchung prüfen lassen, ob die Altersgrenze noch angemessen ist und sie gegebenenfalls anpassen. Aus Respekt vor den Opfern gilt es aber, Gerichtsverfahren zu etablieren, die die Straftaten unter Anwesenheit der erziehungsberechtigten Eltern und der Kinder von Staatsanwaltschaft und Jugendgericht aufarbeiten.'
			},
			{
				state: State.Neutral,
				reason:
					'Wir sind für einen fairen internationalen Freihandel nach gemeinsamen Spielregeln, an die sich alle halten. Grundsätzlich sind Zölle nicht der richtige Weg, weil sie den Freihandel behindern und Waren für alle teurer machen. Wir wollen aber verhindern, dass Staaten außerhalb der EU den marktwirtschaftlichen Wettbewerb durch staatliche Subventionen aushebeln und sich so einen unfairen Wettbewerbsvorteil verschaffen.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir lehnen die generelle Möglichkeit der doppelten Staats&shy;bürgerschaft sowie ihre Vererbung über Generationen hinweg ab. Eine doppelte Staatsangehörigkeit sollte immer eine begründungspflichtige Ausnahme bleiben.'
			},
			{
				state: State.Approve,
				reason:
					'Wir setzen perspektivisch auf ein verpflichtendes Gesellschaftsjahr, das wir mit der aufwachsenden Wehrpflicht zusammendenken. Der Dienst für das Gemeinwohl bringt Menschen unterschiedlicher Milieus, Religionen und Generationen zusammen. Er bietet die Möglichkeit, über den eigenen Tellerrand hinauszuschauen, eröffnet jungen Menschen Chancen und schafft ein neues Wir-Gefühl.'
			},
			{
				state: State.Approve,
				reason:
					'Das Heizungsgesetz der Ampel schaffen wir ab. Die Menschen brauchen Entscheidungsfreiheit. Zudem wissen sie am besten, welche Heizungsart zu ihrem Wohneigentum und zu ihrem Geldbeutel passt. Für die Dekarbonisierung im Gebäudebereich setzen wir auf CO2-Bepreisung mit sozialem Ausgleich, verlässliche Förderung und technologieoffene Lösungen. So berücksichtigen wir auch den Bestand.'
			},
			{
				state: State.Neutral,
				reason:
					'CDU und CSU haben 2014 den gesetzlichen Mindestlohn eingeführt. Er ist ein wichtiger Teil der Arbeitsmarktordnung. Wir stehen zum gesetzlichen Mindestlohn und der unabhängigen Mindestlohnkommission. Lohnfindung muss weiterhin Sache der Sozialpartner sein und nicht der Politik. Wir erwarten eine einvernehmliche Entscheidungsfindung in der Mindestlohnkommission. Wir wollen keine Mindestlohnentscheidung im Deutschen Bundestag. Wir unterstützen eine gute Lohnentwicklung.'
			}
		]
	},
	{
		name: 'BÜNDNIS 90/DIE GRÜNEN',
		abbreviation: 'GRÜNE',
		description:
			'Die GRÜNEN gründeten sich 1980 und schlossen sich später mit Bürgerrechtsbewegungen aus der ehemaligen DDR zusammen. Sie setzen sich u. a. für Umweltschutz, Abrüstung, erneuerbare Energien und die Gleichstellung der Geschlechter ein. Seit 2021 sind die GRÜNEN Teil der Bundesregierung.',
		logo: 'parties/die_grünen.png',
		positions: [
			{
				state: State.Approve,
				reason:
					'Millionen Ukrainer*innen verteidigen Tag für Tag ihr Leben, ihre Freiheit und den Frieden in Europa gegen die brutale Aggression von Putins Russland. Dabei stehen wir fest an ihrer Seite - mit diplomatischer, finanzieller, humanitärer und militärischer Unterstützung. Die Ukraine muss in der Lage sein, sich zu verteidigen und eine starke Position für einen möglichen Friedensprozess sicherzustellen. Das ist auch unser bester Eigenschutz hier im Herzen Europas.'
			},
			{
				state: State.Approve,
				reason:
					'Günstiger Strom aus erneuerbaren Energien wie Wind, Sonne, Wasserkraft, Geothermie sowie naturverträgliche Bioenergie sichern unseren Wohlstand. Wir halten Kurs mit dem erreichten Rekord-Ausbautempo. Dazu werden wir auch in Zukunft dezentrale Erzeuger von Solar- und Windenergie sowie Speicher, Elektrolyseure durch Bürokratieabbau und Planungssicherheit unterstützen. So sichern wir rentable Geschäftsmodelle, beispielsweise für Stadtwerke, Energiegenossenschaften und landwirtschaftliche Betriebe.'
			},
			{
				state: State.Disprove,
				reason:
					'Mit dem Bürgergeld haben wir Instrumente geschaffen, mit denen für viele Menschen Chancen auf dem Arbeitsmarkt entstehen. Dazu gehören Qualifizierung und Coaching oder geförderte Beschäftigung durch den sozialen Arbeitsmarkt. Die Allermeisten nehmen diese Angebote an. Nur ein Bruchteil verweigert sich. Wir fordern aktive Mitwirkung ein. Unser Ziel ist, so viele Menschen wie möglich in zumutbare Arbeit zu führen. Grundsätzlich gilt: Ein menschenwürdiges Existenzminimum muss gewährleistet sein.'
			},
			{
				state: State.Approve,
				reason:
					'Als einziges Land weltweit erlaubt Deutschland das unbegrenzte Rasen auf Autobahnen, zum Schaden von Menschenleben und Umwelt. Ein Tempolimit ist gut für die Verkehrssicherheit und den Klimaschutz. Es sorgt zudem dafür, dass der Verkehr flüssiger läuft.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir setzen auf europäische Kooperation und eine faire Verteilung von Schutzsuchenden in Europa. Dafür ist eine zuverlässige Registrierung von Asylsuchenden bei der Einreise notwendig. Pauschale Zurückweisungen an den Binnengrenzen sind falsch, europarechtlich nicht zulässig und würden den europäischen Zusammenhalt gefährden.'
			},
			{
				state: State.Approve,
				reason:
					'Ja, denn etwa die Hälfte der Menschen in unserem Land lebt zur Miete und muss dafür immer mehr Geld ausgeben. Die Mietpreisbremse nur zu verlängern reicht nicht mehr aus. Wir wollen die Anstiege der Mieten über die ortsübliche Vergleichsmiete hinaus stärker begrenzen und gesetzliche Schlupflöcher schließen, etwa bei möblierten Wohnungen oder Ferienwohnungen. Wir wollen gute Rahmenbedingungen für schnelles, preiswertes und klimaverträgliches Bauen schaffen.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir wollen, dass sich Menschen im Alltag bewegen können, ohne Sorge vor Überwachung zu haben. Eine automatisierte Gesichtserkennung von Fahrgästen wäre ein folgenreicher und unverhältnismäßiger Einschnitt in diese Freiheit. Kameraüberwachungen an Bahnhöfen und anderen gefährdeten öffentlichen Orten sowie eine regelmäßige Bestreifung durch die Polizei können hingegen mehr Sicherheit gewährleisten.'
			},
			{
				state: State.Approve,
				reason:
					'Unser Anspruch ist es, dass Deutschland ein starker Industriestandort bleibt, um Arbeitsplätze und Wertschöpfung zu sichern. Eine sichere, saubere und bezahlbare Energieversorgung ist ein entscheidender Standortfaktor. Durch den Ausbau der Erneuerbaren werden die Strompreise sinken. Bis es so weit ist, setzen wir uns für eine Strompreiskompensation für energieintensive Unternehmen ein, die im globalen Wettbewerb sind.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir wollen grundsätzlich an den bisherigen Regeln zum Renteneintritt festhalten. Wer darüber hinaus noch arbeiten möchte und noch arbeiten kann, der oder dem erleichtern wir dies. Gleichzeitig unterstützen wir diejenigen, die schon vor dem Rentenalter ihre Belastungsgrenze erreicht haben.'
			},
			{
				state: State.Neutral,
				reason:
					'Der Gottesbezug im Grundgesetz ist seit seiner Formulierung umstritten. Er hat aber kaum Direktionskraft für unsere Rechtslage und ist damit für das Leben der Menschen in Deutschland nahezu unbedeutend. Die religiöse Neutralität des Staates ist an anderer Stelle im Grundgesetz verankert. Daher sehen wir keine dringende Notwendigkeit, den Gottesbezug zu debattieren.'
			},
			{
				state: State.Approve,
				reason:
					'Der Mangel an Arbeits- und Fachkräften ist eine der größten Herausforderungen für die deutsche Wirtschaft. Neben besserer Ausbildung, Anreizen für längeres Arbeiten und mehr gleichberechtigter Erwerbstätigkeit von Frauen sind wir auch auf die Zuwanderung von ausländischen Fachkräften angewiesen. Wir wollen den Einwanderungsprozess durch eine digitale Einwanderungsagentur modernisieren und beschleunigen. Auch die Anerkennung von ausländischen Berufsabschlüssen werden wir vereinfachen.'
			},
			{
				state: State.Disprove,
				reason:
					'Eine Rückkehr zur Atomkraft ist weder für das Erreichen der Klimaziele noch für die Versorgungssicherheit notwendig. Neue Atomkraftwerke scheiden wegen der extrem langen Planungs- und Bauzeiten, der hohen Kosten und Risiken und der ungeklärten Entsorgungsfrage von Atommüll als realistische Option für die Energieversorgung aus.'
			},
			{
				state: State.Approve,
				reason:
					'Wir wollen das Steuersystem gerechter gestalten. Bei einer Reform der Einkommensteuer sollten kleine und mittlere Einkommen bis weit in die obere Mittelschicht entlastet werden. Um dies zu finanzieren und damit die Reform für den Staatshaushalt tragbar ist, müssten Spitzen- und Reichensteuersatz entsprechend angehoben werden. Weitere Tarifstufen zwischen Spitzen- und Reichensteuersatz sind denkbar.'
			},
			{
				state: State.Approve,
				reason:
					'Wir brauchen eine engere Kooperation zwischen Bund und Ländern in der Bildungspolitik. Wo verfassungsrechtliche Beschränkungen zuverlässige und notwendige Investitionen in Bildung aktuell verhindern, werden wir mit den Ländern gemeinsame Ziele und tragfähige Lösungen vereinbaren, um die großen Herausforderungen im Bildungssystem erfolgreich gemeinsam zu bewältigen.'
			},
			{
				state: State.Approve,
				reason:
					'Das ist eine der derzeit schwersten Fragen. Wir stehen ein für die Sicherheit Israels und aller Israelis - ebenso für das humanitäre Völkerrecht. Israel muss sich gegen Raketen der Hamas oder aus Iran verteidigen können. Doch das ist kein Blankoscheck, weder für Israel noch für Rüstungsexporte. Bei jeder Entscheidung dazu ist humanitäres Völkerrecht zu beachten. Wenn dem Schutz der Zivilbevölkerung in Gaza im Einzelfall nicht genug Rechnung getragen ist, dürfen Waffen nicht exportiert werden.'
			},
			{
				state: State.Approve,
				reason:
					'Wir wollen Gesundheit und Pflege in unserer Gesellschaft verlässlicher und gerechter als bisher finanzieren. Dazu sollen alle Versicherten beitragen, gleich ob sie in einer gesetzlichen Krankenkasse oder privat versichert sind. In unserem Konzept einer Bürgerversicherung kann so auch die private Krankenversicherung als Teil eines integrierten Versicherungssystems mit solidarischem Finanzausgleich fortbestehen.'
			},
			{
				state: State.Disprove,
				reason:
					'Frauen machen über die Hälfte der Bevölkerung aus, sind aber noch weit von der Hälfte der wirtschaftlichen und politischen Macht entfernt. Wir sind daher weiterhin für Frauenquoten in Aufsichtsräten und Vorständen großer Unternehmen. Die bereits bestehenden Regelungen werden wir weiterentwickeln, damit sie noch besser wirken.'
			},
			{
				state: State.Approve,
				reason:
					'Eine wichtige Rolle beim Schutz der natürlichen Lebensgrundlagen spielt die ökologische Landwirtschaft. Naturschonende Erzeugungsformen müssen einen Vorteil gegenüber konventioneller Landwirtschaft haben. Auch regionale Produkte sind immer mehr gefragt. Deshalb wollen wir landwirtschaftliche Betriebe mit dem regionalen Lebensmittelhandwerk zusammenbringen, beispielsweise mit der Förderung regionaler Wertschöpfungsketten.'
			},
			{
				state: State.Approve,
				reason:
					'Der Rechtsextremismus stellt nach Einschätzungen der Sicherheitsbehörden die größte Gefahr für unsere Demokratie dar. Die Förderung von Projekten, die über Rechtsextremismus aufklären, ist daher sehr wichtig. Sie ermöglicht eine umfassende und flächendeckende Bildungs- und Demokratiearbeit. Darüber hinaus ist es wichtig, dass auch Projekte gegen jede andere Form von Extremismus, wie den Islamismus, gefördert werden.'
			},
			{
				state: State.Approve,
				reason:
					'Der gesetzliche Schutz von Menschenrechten und der Umwelt ist eine große Errungenschaft der letzten Jahre. Das Lieferkettengesetz regelt die unternehmerische Verantwortung für die Produktionsweise ihrer ausländischen Zulieferer. Dadurch können sich Verbraucherinnen und Verbraucher sicher sein, dass ihre Einkäufe nicht durch Ausbeutung oder Kinderarbeit hergestellt wurden. Wir werden dafür sorgen, dass Unternehmen die Vorschriften möglichst unbürokratisch und digitalisiert umsetzen können.'
			},
			{
				state: State.Approve,
				reason:
					'Wir wollen die BAföG-Sätze erhöhen. Das BAföG soll existenzsichernd sein, auch bei steigenden Lebenshaltungskosten. Auch die Freibeträge bei den elterlichen Einkommen wollen wir anheben und das BAföG für mehr Menschen öffnen. Das Aufstiegs-BAföG soll auch in Teilzeit bezogen werden können und grundsätzlich soll das Antragsverfahren vollständig digital möglich werden.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir wollen die Schuldenbremse reformieren, um notwendige Investitionen in unsere Infrastruktur zu finanzieren. Investitionen in Verkehrs-, Energie-, Bildungs- und Forschungsinfrastruktur sowie in die nationale Sicherheit haben für uns Priorität. Zugleich werden wir sicherstellen, dass die Gesamtverschuldung dauerhaft tragfähig bleibt.'
			},
			{
				state: State.Approve,
				reason:
					'Der stärkste Motor für Integration sind Arbeit und Beschäftigung. Für uns gilt: Wer arbeiten kann, soll arbeiten dürfen. Deswegen wollen wir bestehende Arbeitsverbote weiter abbauen sowie die Verfahren vereinfachen und beschleunigen. Wenn sich Arbeitgeber und Geflüchtete einig sind, sollte der Staat nicht mit unnötiger Bürokratie im Weg stehen. So ermöglichen wir auch, dass Menschen selbst für ihren Lebensunterhalt aufkommen können.'
			},
			{
				state: State.Disprove,
				reason:
					'Die Staatengemeinschaft hat sich mit dem Pariser Klimaabkommen darauf verständigt, die Klimakrise – die heute schon immer mehr Opfer fordert- einzudämmen. Europa muss nach wissenschaftlichem Rat bis 2040 seine Treibhausgasemissionen um 90 Prozent gegenüber 1990 verringern. Dazu braucht es entschiedene Anstrengungen und einen bedeutenden Beitrag von Deutschland. Wir halten deshalb an den rechtlich festgeschriebenen Zielen der Klimaneutralität 2045 und den verbindlichen Zwischenzielen fest.'
			},
			{
				state: State.Disprove,
				reason:
					'Die Sicherheit und der Gesundheitsschutz der Arbeitnehmer*innen haben für uns oberste Priorität, deshalb werden Beschäftigte gesetzlich durch Höchstarbeitszeiten geschützt. Wie viel oder wenig innerhalb dieser Grenzen gearbeitet wird, möchten wir politisch nicht bestimmen. Um aber insbesondere die Vereinbarkeit von Beruf und Familie zu fördern, wollen wir die Sozialpartner dabei unterstützen, flexible Arbeitszeitmodelle zum Vorteil der Arbeitnehmer*innen zu ermöglichen.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir wollen, dass selbstbestimmte Schwangerschaftsabbrüche grundsätzlich außerhalb des Strafrechts geregelt werden. Wir treten dafür ein, dass die notwendige Beratung durch ein abgesichertes Angebot von Beratungsstellen in vielfältiger Trägerschaft garantiert ist.'
			},
			{
				state: State.Disprove,
				reason:
					'Der Euro macht uns stärker und vieles leichter: das Reisen, das Einkaufen im Netz, Überweisungen quer durch Europa. Insbesondere Deutschland als Handelsnation profitiert besonders vom Euro: Unternehmen müssen sich keine Sorgen über schwankende Wechselkurse machen und sparen Kosten, die bei Geschäften mit anderen Währungen entstehen würden.'
			},
			{
				state: State.Approve,
				reason:
					'Deutschland soll ein Bahnland werden, in dem man seine Wege preiswert und verlässlich zurücklegen kann. Unser Ziel im Schienenverkehr ist der Deutschlandtakt, mit dem Städte und ländliche Regionen miteinander verbunden werden. Das Bahnnetz, das wir marode vorgefunden haben, werden wir weiter mit Hochdruck sanieren und im erforderlichen Maß ausbauen. Straßen und Brücken wurden auf Verschleiß gefahren. Mit schnelleren Planungsverfahren werden wir die Sanierung von Straßen und Brücken vorantreiben.'
			},
			{
				state: State.Approve,
				reason:
					'Viele Millionen Menschen engagieren sich in Deutschland ehrenamtlich, etwa in der Freiwilligen Feuerwehr, beim Technischen Hilfswerk, im Sportverein oder in der Kirche. Sie tragen erheblich zum Zusammenhalt und Funktionieren der Gesellschaft bei. Menschen, die jemanden häuslich pflegen oder Freiwilligenarbeit leisten, erwerben dadurch bereits Rentenanwartschaften. Diese Wertschätzung wollen wir weiteren Ehrenamtlern zukommen lassen. Wir sehen das als eine gesamtgesellschaftliche Aufgabe.'
			},
			{
				state: State.Disprove,
				reason:
					'Die Grundsteuer kann momentan auf die Betriebskosten der Mieter umgelegt werden. Das ist ungerecht, denn die Grundsteuer wird erhoben, um damit der Kommune zu ermöglichen, die Infrastruktur vor Ort zu erhalten und zu verbessern. Damit einhergehende Wertsteigerungen kommen den Eigentümern zugute. Vermieter profitieren bei Umlage der Steuer auf Mieter somit doppelt. Wir wollen deshalb die Umlagefähigkeit beenden.'
			},
			{
				state: State.Disprove,
				reason:
					'Das Streikrecht ist ein hohes Gut in unserem Land und gehört zur liberalen Demokratie. Wo viel und hart zum Wohle unserer Gesellschaft gearbeitet wird und wo die Arbeitsbedingungen oft auch wegen Personalmangel schwierig sind - beispielsweise in Krankenhäusern -, wollen wir mehr investieren und für bessere Bedingungen sorgen, anstatt die Rechte von Arbeitnehmer*innen zu schleifen.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir setzen auf das Instrument der Bürgerräte. Es ermöglicht, dass zufällig ausgewählte Bürger*innen als Expert*innen des Alltags ihren Rat in politische Entscheidungsprozessen einfließen lassen kann. Die Bürgerräte wollen wir stärken und gesetzlich absichern. Bürgerräte haben den Vorteil, dass sie eine sachliche Debatte ermöglichen und weniger polarisieren als Volks&shy;entscheide.'
			},
			{
				state: State.Disprove,
				reason:
					'Junges Alter ist schon jetzt kein Freifahrtschein für Kriminalität. Bei Kindern entscheiden Jugendamt und Familiengericht über die Konsequenzen der Tat. Sie können die Entziehung des Sorgerechts oder eine Unterbringung in einem Heim oder einem psychiatrischen Krankenhaus anordnen. Das ist besser geeignet als das Strafrecht, denn Kinder können die Bedeutung und die Folgen ihrer Taten nicht so sicher einschätzen wie Jugendliche oder Erwachsene.'
			},
			{
				state: State.Approve,
				reason:
					'Chinas Subventions- und Wirtschaftspolitik führt zu unfairem Wettbewerb für unsere europäischen Unternehmen. Deshalb stärken wir der EU Kommission den Rücken in ihren Verhandlungen mit China, auch bei E-Autos. So wahren wir die Interessen der europäischen Wirtschaft. Zölle können dabei aber nur die letztmögliche Lösung sein. Außerdem arbeiten wir weiter daran, unsere Abhängigkeiten von China abzubauen.'
			},
			{
				state: State.Approve,
				reason:
					'In einer zusammenwachsenden Welt ist es schon lange Realität, dass Menschen eine zweite Staats&shy;bürgerschaft besitzen. Der Zugang zur Staats&shy;bürgerschaft wirkt sich positiv auf die wirtschaftliche, soziale und politische Integration von Eingewanderten aus. Sie führt zu einem besseren Zugang zum Arbeitsmarkt. Diese Lebensrealität erkennen wir an.'
			},
			{
				state: State.Disprove,
				reason:
					'Viele Menschen – ob jung oder alt – möchten sich im Freiwilligendienst engagieren. Das wollen wir fördern und deshalb die Bedingungen für Freiwillige verbessern, indem wir ein Recht auf einen Freiwilligendienst schaffen und Plätze im Bundesfreiwilligendienst ausreichend und verlässlich finanzieren.'
			},
			{
				state: State.Disprove,
				reason:
					'Der Einstieg in eine klimafreundliche Wärmeversorgung ist jahrelang verschlafen worden. Mit dem Gebäudeenergiegesetz und einer Förderung von bis zu 70 Prozent für den Kauf und Einbau von klimafreundlichen Heizungen haben wir die notwendige Planungssicherheit geschaffen. Die Unterstützung auf diesem Weg werden wir ausbauen. Mit Öl und Gas zu heizen wird immer teurer, das kann man künftig niemanden mehr zumuten.'
			},
			{
				state: State.Approve,
				reason:
					'Faire Löhne verlangen nach einem fairen Mindestlohn, damit Leistung auch anerkannt wird. Um die Inflation der vergangenen Jahre auszugleichen, braucht es bereits 2025 einen Mindestlohn von 15 Euro. Das entspricht auch den Vorgaben, die bei der Umsetzung der Mindestlohnrichtlinie der Europäischen Union einzuhalten sind.'
			}
		]
	},
	{
		name: 'Freie Demokratische Partei',
		abbreviation: 'FDP',
		description:
			'Die 1948 gegründete FDP betont die Freiheit und Selbstbestimmung des Einzelnen. Sie fordert u. a. eine Senkung der Steuern und Abgaben sowie den Abbau bürokratischer Regelungen und setzt auf Innovationen zur Bewältigung des Klimawandels. Bis November 2024 war die FDP Teil der Bundesregierung.',
		logo: 'parties/fdp.png',
		positions: [
			{
				state: State.Approve,
				reason:
					'Unsere Unterstützung für die Ukraine darf nicht an Geld oder Waffenlieferungen scheitern. Denn die Ukraine verteidigt auch unsere Freiheit. Daher fordern wir u.a. die Lieferung von Taurus und weiterer Waffensysteme an die Ukraine. Wir setzen uns zudem für eine dauerhafte und gerecht verteilte Finanzierung der Unterstützung der Ukraine ein. Ziel ist die Wiederherstellung der territorialen Integrität der Ukraine sowie ihr Beitritt zur EU und NATO.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir wollen die erneuerbaren Energien marktwirtschaftlich stärken. Da auf diese bereits mehr als 60 Prozent der Stromproduktion entfallen, sind die EEG-Subventionen für neue Anlagen nicht mehr gerechtfertigt. Eine Vergütung am Markt gewährleistet, dass Photovoltaik- und Windkraftanlagen nur bei genügend Netz- und Speicherkapazitäten gebaut werden. Wir lehnen gesetzlich vorgegebene Ausbaupfade für einzelne Technologien und staatlich garantierte Abnahmepreise ab.'
			},
			{
				state: State.Approve,
				reason:
					'Unser oberstes Ziel lautet: Arbeit statt Bürgergeld. Denn Arbeit ist das Fundament für Glück und Erfolg. Gesellschaftlich ist das auch eine Frage der Fairness gegenüber dem arbeitenden Steuerzahler. Erwerbsfähige Arbeitslose müssen sich darum bemühen, die eigene Hilfsbedürftigkeit durch Arbeit und Qualifizierung zu überwinden. Bei fehlender Initiative sollen die Sozialleistungen Stück für Stück reduziert werden. Dazu wollen wir die Sanktionen wirksamer gestalten.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir Freie Demokraten lehnen ein generelles Tempolimit auf Autobahnen ab. Auch ohne Tempolimit sind die deutschen Autobahnen mit die sichersten in Europa. Wir vertrauen auf die Eigenverantwortung mündiger Bürger. Ein faires Miteinander aller Verkehrsteilnehmer erreichen wir nicht durch Verbote, sondern durch ausgewogene Regeln und gegenseitigen Respekt. Ein Tempolimit würde keine entscheidende Reduzierung des CO2-Ausstoßes bewirken, es ist Symbolpolitik gegen die freie Entscheidung und das Auto.'
			},
			{
				state: State.Approve,
				reason:
					'Menschen, die von vornherein keine Möglichkeit haben, ein Bleiberecht in Deutschland zu erlangen, sollten besser gar nicht erst einreisen. Aus diesem Grund unterstützen wir Freie Demokraten die modellhafte Erprobung von Zurückweisungen an den deutschen Außengrenzen, um alle rechtlichen Möglichkeiten zur Begrenzung der irregulären Migration auszuschöpfen.'
			},
			{
				state: State.Disprove,
				reason:
					'Mehr bezahlbaren Wohnraum gibt es nur durch mehr Neubau. Um gutes Wohnen für alle zu ermöglichen, sind ausgewogene Regeln zwischen Mietern und Vermietern wichtig. Viele private Vermieter ziehen sich aus dem Markt zurück, weil Vermieten durch komplizierte Regelungen unattraktiv geworden ist. Das verschärft den Wohnungsmangel. Die Mietpreisbremse ist eher eine Investitionsbremse. Einen bundesweiten Mietendeckel lehnen wir ab. Menschen mit niedrigem Einkommen unterstützen wir durch das Wohngeld.'
			},
			{
				state: State.Disprove,
				reason:
					'Die Bürgerinnen und Bürger haben das Recht, sich ohne ständige Kontrolle im öffentlichen Raum zu bewegen. Videoüberwachung kann an einzelnen Kriminalitätsschwerpunkten wie Bahnhöfen Sinn ergeben, ersetzt jedoch niemals die Präsenz von Polizistinnen und Polizisten sowie funktionierende Präventionskonzepte. Eine flächendeckende Überwachung im öffentlichen Raum darf es daher nicht geben. Den Einsatz von automatisierter Gesichtserkennung im öffentlichen Raum lehnen wir ab.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir Freie Demokraten wollen die Stromsteuer in einem ersten Schritt auf das EU-Mindestmaß absenken und werden uns auf europäischer Ebene für ihre Abschaffung einsetzen. Anders als bei einem Industriestrompreis gibt es dabei keine Wettbewerbsverzerrung zwischen Mittelstand und Industrie. Zudem wollen wir die Netzentgelte als großen Treiber der Stromkosten umfassend reformieren. Denn die hohen Energiekosten in Deutschland stellen einen großen Wettbewerbsnachteil für den Wirtschaftsstandort dar.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir Freie Demokraten stehen für einen wirklich flexiblen Renteneintritt. Die Menschen sollen nach schwedischem Vorbild künftig selbst entscheiden, wann der Ruhestand beginnt, sofern dann keine Sozialleistungen beantragt werden müssen. Je später jemand in Rente geht, desto höher die Rente - wer früher geht, bekommt eine niedrigere Rente. Teilrenten sind unkompliziert möglich.'
			},
			{
				state: State.Neutral,
				reason:
					'Die FDP verteidigt die Verfassung. Das Grundgesetz sollte nur geändert werden, wenn damit ein Mehrwert einhergeht. Die Religionsfreiheit schützt schon heute unterschiedliche Bekenntnisse – ebenso wie die Freiheit, nicht religiös zu sein. Das Staatskirchenrecht wollen wir zu einem Religionsverfassungsrecht weiterentwickeln. Den Verfassungsauftrag, die Staatsleistungen abzulösen, wollen wir umsetzen.'
			},
			{
				state: State.Approve,
				reason:
					'Deutschland hat einen Arbeitskräftemangel. Daher ist es wichtig, die Qualifizierung zu verbessern und auch die Erwerbstätigkeit von Frauen zu erleichtern. Darüber hinaus brauchen wir Einwanderung in den Arbeitsmarkt. Hochqualifizierten Fachkräften wollen wir diese weiter erleichtern. Zudem wollen wir die Europäische Blue Card für weitere nicht-akademische Fachkräfte öffnen und die unpraktikablen Verdienstuntergrenzen abschaffen. Mit einem One-Stop-Shop bündeln und beschleunigen wir Verfahren.'
			},
			{
				state: State.Approve,
				reason:
					'Wir setzen uns für eine technologieoffene Energiepolitik ein. Dies umfasst auch die Kernenergie. Die Wiederinbetriebnahme bestehender Kernkraftwerke wollen wir rechtlich ermöglichen und den Betreibern überlassen. Das deutsche Atomrecht wollen wir reformieren. Kernkraftwerke der neuen Generation, z. B. Small Modular Reactors, sollen in Deutschland rechtssicher gebaut werden können. Für die Kernfusion wollen wir einen innovationsfreundlichen Rechtsrahmen außerhalb des Atomrechts.'
			},
			{
				state: State.Disprove,
				reason:
					'Der Spitzensteuersatz darf künftig nur noch von Menschen gezahlt werden, die auch wirklich spitzenmäßig verdienen und nicht schon von der Mitte der Gesellschaft. Konkret fordern wir, dass sich der Spitzensteuersatz künftig an der aktuellen Beitragsbemessungsgrenze der Rentenversicherung orientiert. Damit greift der Spitzensteuersatz nicht mehr schon ab einem Jahreseinkommen von gut 68.000 Euro, sondern erst ab 96.600 Euro.'
			},
			{
				state: State.Approve,
				reason:
					'Wir fordern eine grundlegende Reform des Bildungsföderalismus mit mehr Kompetenzen für den Bund. Wir wollen einheitliche bundesweite Qualitätsstandards für Bildung von Kindern ab der Kita bis zum Schulabschluss schaffen. Durch einheitliche Abschlussprüfungen (wie z. B. ein Deutschland-Abitur) stellen wir die bundesweite Vergleichbarkeit sicher. Die Kultusministerkonferenz wollen wir als Entscheidungsgremium abschaffen und durch einen Bundesbildungsrat ersetzen.'
			},
			{
				state: State.Approve,
				reason:
					'Die Existenz und Sicherheit Israels ist Teil deutscher Staatsräson und unverzichtbarer Pfeiler deutscher Außen- und Sicherheitspolitik. Wir müssen Israel alles zur Verfügung stellen, was es für sein völkerrechtlich garantiertes Selbstverteidigungsrecht benötigt. Rüstungsexporte sind dafür ein legitimes Mittel und dienen dazu, strategische Partnerschaften und die Stabilität in geopolitisch wichtigen Regionen zu sichern. Israel wollen wir bei Rüstungsexporten NATO-Staaten gleichstellen.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir bekennen uns zum dualen System aus gesetzlicher (GKV) und privater (PKV) Krankenversicherung. Wir lehnen eine Einheitskasse (sogenannte Bürgerversicherung) ab, weil diese eine schlechtere Versorgung für alle Versicherten bedeuten würde. Wir setzen uns dafür ein, dass man leichter zwischen GKV und PKV hin- und herwechseln kann.'
			},
			{
				state: State.Neutral,
				reason:
					'Wir Freie Demokraten setzen uns für mehr Vielfalt in Unternehmen sowie im öffentlichen Dienst und damit auch für mehr Frauen in Führungspositionen ein. Eine Quote verbessert aber nicht die bisherigen Rahmenbedingungen und greift tief in die unternehmerische Freiheit ein. Wir setzen daher auf bessere Vereinbarkeit von Familie und Beruf, mehr Wahlfreiheit bei der Aufteilung von Sorge- und Erwerbsarbeit und auf Anreize für eine Unternehmenskultur, die mehr Vielfalt in Führungspositionen ermöglicht.'
			},
			{
				state: State.Disprove,
				reason:
					'Die FDP setzt sich für eine nachhaltige Intensivierung der Landwirtschaft ein, die sowohl ökologische als auch konventionelle Betriebe berücksichtigt. Innovative Konzepte, die nachhaltige Praktiken mit hoher Ertragskraft verbinden, sollten stärker gefördert werden. Im Rahmen der Gemeinsamen Agrarpolitik (GAP) sollten daher Anreize geschaffen werden, um Betriebe bei der Einführung nachhaltiger Intensivierungsmaßnahmen zu unterstützen.'
			},
			{
				state: State.Approve,
				reason:
					'Wir lehnen jede Form des politischen und religiösen Extremismus strikt ab. Vorhandene Projekte gegen Rechtsextremismus müssen auf ihre Wirksamkeit hin überprüft werden. Sinnvolle Projekte sollten durch den Staat gefördert werden. Eine Verstetigung im Wege eines so genannten Demokratiefördergesetzes lehnen wir ab. Neben einer Bekämpfung des Rechtsextremismus müssen auch Projekte gegen Islamismus evaluiert und, bei Bedarf, stärker gefördert werden.'
			},
			{
				state: State.Disprove,
				reason:
					'Regelungen wie die EU-Lieferkettenrichtlinie sowie die EU-Richtlinie zur Nachhaltigkeitsberichterstattung sorgen nicht für mehr Klimaschutz und Nachhaltigkeit, sondern in erster Linie für bürokratischen Aufwand in Betrieben. Vor allem der Mittelstand kann diese Bürokratie häufig kaum noch bewältigen. Die staatliche Aufgabe, die Einhaltung von Recht und Gesetz zu kontrollieren, darf nicht auf Unternehmen abgewälzt werden. Daher setzen wir uns für die Abschaffung solcher Regelungen ein.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir Freie Demokraten wollen, dass ein Studium nicht von den Voraussetzungen des Elternhaues abhängt. Deshalb wollen wir das BAföG elternunabhängig machen. Es setzt sich zusammen aus dem bisherigen Kindergeld (bzw. Kinderfreibetrag), das direkt an die Studierenden sowie Schülerinnen und Schüler ausgezahlt wird, weiteren Zuschüssen des BAföG und einem monatlich anpassbaren, zinsfreien Darlehen. Das Darlehen muss erst bei gutem Einkommen und in begrenzter Höhe und Dauer zurückgezahlt werden.'
			},
			{
				state: State.Approve,
				reason:
					'Freiheit für künftige Generationen bedeutet auch, ihnen keine Schuldenberge zu hinterlassen. Daher ist für uns Freie Demokraten die Einhaltung der im Grundgesetz verankerten Schuldenbremse zentrales Gebot der Generationengerechtigkeit. Zudem schützt die Schuldenbremse vor übermäßiger Verschuldung und Inflation.'
			},
			{
				state: State.Neutral,
				reason:
					'Schutzsuchende mit Bleiberecht müssen so schnell wie möglich arbeiten dürfen, damit sie schnell auf eigenen Füßen stehen. Ein Job ist der beste Integrationskurs. Auch für Menschen im Asylverfahren sollte der Arbeitsmarktzugang vereinfacht werden, wenn absehbar ist, dass die Antragsteller in Deutschland ein Bleiberecht erhalten können. Für gut integrierte Schutzsuchende muss es bessere Möglichkeiten eines sogenannten Spurwechsels aus dem Asylverfahren in erwerbsbezogene Aufenthaltstitel geben.'
			},
			{
				state: State.Disprove,
				reason:
					'Nationale Sonderziele haben keinen zusätzlichen Nutzen für den Klimaschutz, belasten aber die privaten Haushalte und schaden Deutschlands Wettbewerbsfähigkeit. Daher wollen wir das deutsche Ziel der Klimaneutralität bis 2045 durch das europäische Ziel der Klimaneutralität bis 2050 ersetzen. So verschaffen wir Betrieben, gerade der energieintensiven Industrie, mehr Zeit für den Umstieg auf klimafreundliche Technologien, stärken die Wirtschaft, sichern Jobs und vermeiden teure Subventionen.'
			},
			{
				state: State.Disprove,
				reason:
					'In Deutschland existieren kollektivrechtliche Wochenarbeitszeitregelungen, z. B. auf Basis von Tarifverträgen. Daher gibt es etwa in der westdeutschen Metallindustrie sowie der Stahl-, Elektro- und Druckindustrie die 35-Stunden-Woche. Wir wollen das Arbeitszeitgesetz reformieren und mit einer wöchentlichen statt einer täglichen Höchstarbeitszeit flexible Arbeitszeitmodelle ermöglichen. So werden wir Veränderungen in der Arbeitswelt und Wünschen von Arbeitnehmern und Unternehmen besser gerecht.'
			},
			{
				state: State.Neutral,
				reason:
					'Eine Reform der Regelungen zum Schwanger&shy;schafts&shy;abbruch (§§ 218, 218a StGB) soll im Wege sogenannter fraktionsübergreifender Gruppenanträge mit Gewissensfreiheit für jede Abgeordnete und jeden Abgeordneten im nächsten Bundestag beraten werden. Bei komplexen ethischen Abwägungsfragen hat der Bundestag mit diesem Verfahren gute Erfahrungen gemacht. Unabhängig davon müssen die Angebote zur Beratung und zur medizinischen Versorgung von ungewollt schwangeren Frauen verbessert werden.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir Freie Demokraten bekennen uns zur europäischen Wirtschafts- und Währungsunion. Gerade Deutschland als Exportnation profitiert von einer gemeinsamen Währung. Damit dauerhaft ein stabiler Euro erhalten werden kann, braucht es strenge Schuldenregeln auf nationaler und europäischer Ebene und solide Staatsfinanzen in ganz Europa.'
			},
			{
				state: State.Disprove,
				reason:
					'Eine moderne und leistungsfähige Infrastruktur ist der Schlüssel für Wachstum und Wohlstand. Verkehrsprognosen zeigen, dass das Verkehrsvolumen auch in Zukunft weiterwachsen wird. Daher werden wir weiterhin auf alle Verkehrsträger mit ihren spezifischen Leistungsprofilen angewiesen sein. Alle Verkehrsträger benötigen eine auskömmliche Finanzierung und es muss prioritär dort investiert werden, wo der Bedarf am dringlichsten ist. Einen grundsätzlichen Vorrang eines Verkehrsträgers lehnen wir ab.'
			},
			{
				state: State.Disprove,
				reason:
					'Das Ehrenamt ist eine gesamtgesellschaftliche Aufgabe und bedeutet aufopferungsvollen und engagierten Einsatz vor Ort durch viele Freiwillige. Gleichwohl kann das Ehrenamt nicht allein den Beitragszahlern der Rentenversicherung aufgebürdet werden. Es wäre auch unfair gegenüber Selbstständigen, die selten rentenversichert sind. Vielmehr ist es wichtig, dass Anreize geschaffen werden, sich neben Ausbildung, Beruf, Familie und Herausforderungen des Alltags für das Vereinsleben zu engagieren.'
			},
			{
				state: State.Approve,
				reason:
					'Die Erhebung der Grundsteuer durch die Städte und Gemeinden dient der Finanzierung der kommunalen Infrastruktur, wie z. B. des Abwassersystems, der Straßen, Schulen, Kindergärten und Parks. Damit zählt die Grundsteuer wie Heizkosten, Müllabfuhr oder Gebäudereinigung zu den Betriebskosten und sollte von den Nutzern eines Gebäudes getragen werden. Wir setzen uns hier für ein einfaches Flächenmodell ein, das die Belastung für Mieter wie Eigentümer in einem angemessenen Rahmen hält.'
			},
			{
				state: State.Approve,
				reason:
					'Das Streikrecht ist ein wichtiges Grundrecht. Um die kritische Infrastruktur und die Grundversorgung zu gewährleisten, braucht es eine Modernisierung. In kritischen Bereichen braucht es eine verpflichtende Schlichtungsvereinbarung zu Beginn von Tarifverhandlungen, Mindestankündigungsfristen sowie die Sicherstellung eines Notbetriebs. Denn hier droht sonst ein überproportional großer gesellschaftlicher Schaden, der mit einer Verzerrung der Verhandlungsmacht der Tarifparteien verbunden ist.'
			},
			{
				state: State.Disprove,
				reason:
					'Unser Land ist eine parlamentarische Demokratie. Wir wollen den Deutschen Bundestag als Ort der demokratischen und differenzierten Debatte stärken.'
			},
			{
				state: State.Disprove,
				reason:
					'Das Strafrecht ist das schärfste Schwert des Rechtsstaats. Gerade Kindern und Jugendlichen ist mit diesem Instrument nicht geholfen, wenn sie zu Tätern werden. Die Betreuungs- und Therapiekapazitäten müssen ausgebaut werden, um junge Menschen davon abzuhalten, weitere Straftaten zu begehen.'
			},
			{
				state: State.Approve,
				reason:
					'Die neuen EU-Zölle treffen am stärksten die deutschen Autohersteller. Denn diese Unternehmen produzieren auch in China. Handelskonflikte führen zu Inflation und Knappheit, sie kennen keine Gewinner. Als Exportnation ist Deutschland auf offene Märkte angewiesen. Wir stehen deshalb für den Abbau von Handelsbarrieren, statt neue zu schaffen.'
			},
			{
				state: State.Approve,
				reason:
					'Die FDP hat erreicht, dass Menschen nur dann eingebürgert werden können, wenn sie ihren eigenen Lebensunterhalt verdienen. Damit senden wir das Signal, dass sich Fleiß und Arbeitsleistung auszahlen. Antisemitische, rassistische, fremdenfeindliche Handlungen oder Motive sowie Straftaten oder eine Ablehnung des Grundgesetzes stellen strenge Ausschlussgründe dar. Die Mehrstaatigkeit wollen wir grundsätzlich zulassen.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir Freie Demokraten sehen eine allgemeine Dienstpflicht, ein sogenanntes Gesellschaftsjahr und verwandte Konzepte als einen schweren Eingriff in die Lebensplanung junger Menschen. Einen solchen Pflichtdienst lehnen wir deshalb entschieden ab. Wir setzen stattdessen auf attraktive und berufsvorbereitende Freiwilligendienste, in denen sich Interessierte passend zu ihrer individuellen Lebensplanung engagieren können.'
			},
			{
				state: State.Approve,
				reason:
					'Wir stehen zum Ziel der Klimaneutralität. Mit dem EU-Emissionshandel setzen wir auf ein marktwirtschaftliches Instrument. Fossile Brennstoffe in Heizungen haben dadurch keine langfristige Perspektive. Eine warme Wohnung mit klimafreundlicher Heizung muss aber für jeden bezahlbar werden. Deshalb setzen wir auf Technologieoffenheit statt Verbote: Jeder soll selbst entscheiden, wie er CO2 einspart. Um die Belastung abzufedern, führen wir eine Klimadividende ein und senken die Energiebesteuerung.'
			},
			{
				state: State.Disprove,
				reason:
					'Löhne und Gehälter werden in der sozialen Marktwirtschaft zwischen Arbeitnehmern und Arbeitgebern ausgehandelt. Wir respektieren die Tarifautonomie und lehnen politische Eingriffe in die Arbeit der unabhängigen Mindestlohnkommission ab.'
			}
		]
	},
	{
		name: 'Alternative für Deutschland',
		abbreviation: 'AfD',
		description:
			'Die AfD wurde 2013 gegründet und fokussiert sich u. a. auf restriktive Positionen in der Asyl- und Migrationspolitik. Seit 2017 ist sie im Bundestag vertreten. Sie wird vom Bundesamt für Verfassungsschutz als Verdachtsfall für rechtsextremistische Bestrebungen geführt.',
		logo: 'parties/afd.png',
		positions: [
			{
				state: State.Disprove,
				reason:
					'Wir fordern von allen Kriegsparteien eine Einstellung der Kampfhandlungen und die Aufnahme von Friedensgesprächen ohne Vorbedingungen. Die Alternative für Deutschland versteht sich als Partei, in der Diplomatie und friedliche Konfliktbewältigung vorrangig sind.'
			},
			{
				state: State.Disprove,
				reason:
					'Volatilen Energien destabilisieren das Stromnetz, gefährden die Versorgungssicherheit, erzeugen hohe Netzkosten und beschränken unsere Wettbewerbsfähigkeit massiv. Sie zerstören die Natur, u. A. durch Flächenbedarf. Die AfD wird den Dreiklang der Energieversorgung aus Versorgungssicherheit, Wirtschaftlichkeit und Umweltschutz wieder herstellen. Zukünftig müssen Anlagen zur Erzeugung „Erneuerbarer Energien“ Umweltverträglichkeit und ökonomischen Nutzen nachweisen. Das EEG wird gestrichen.'
			},
			{
				state: State.Approve,
				reason:
					'Bürgergeld ist eine Sozialleistung für Arbeitssuchende. Wenn ein Arbeitssuchender wiederholt Stellenangebote ablehnt, obwohl sie zumutbar sind, kann der Solidargemeinschaft seine finanzielle Unterstützung nicht länger zugemutet werden.'
			},
			{
				state: State.Disprove,
				reason:
					'Es gibt bereits viel zu viele politisch motivierte Einflüsse auf das Verkehrsgeschehen. Bürger sind mündig und in der Lage nach Maßgabe der StVo zu handeln und ihre Geschwindigkeit anzupassen wo dies erforderlich ist.'
			},
			{
				state: State.Approve,
				reason:
					'Deutsches Recht schließt die Einreise aus einem sicheren Drittstaat zum Zweck der Asylgewährung aus. Entgegen dieser Rechtslage werden solche Einreisen seit Jahren geduldet. In der Realität bleibt fast jeder auch illegal eingereiste Asylbewerber dauerhaft hier. Dieser Zustand ist untragbar. Der Verweis auf eine angeblich notwendige Zuständigkeitsüberprüfung für das Asylverfahren greift hierbei ausdrücklich nicht, da diese auch im bereits sicheren, zuvor durchquerten EU-Nachbarstaat möglich wäre.'
			},
			{
				state: State.Disprove,
				reason:
					'Mieten steigen, weil staatlich Institutionen mit Bauvorschriften und Baubehinderung das Angebot verknappen. Wir brauchen einen massiven Rückbau der Bürokratie und Abschiebungen unberechtigter Personen, dies wird zur Regulierung der Mieten durch Angebot und Nachfrage führen.'
			},
			{
				state: State.Approve,
				reason:
					'Bahnhöfe gehören heutzutage leider zu den Hochrisikozonen. Dem wachsenden Anstieg der Kriminalität dort kann die Polizei nur begrenzt mit einem personellen Aufwuchs begegnen. Der Einsatz moderner Technik wie die automatisierte Gesichtserkennung kann die personelle Problematik zum Teil kompensieren. Datenschutzrechtliche Bedenken können durch entsprechende gesetzliche Regelungen ausgeräumt werden.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir wollen unseren zukünftigen Energiemix ideologiefrei und technologieoffen gestalten und uns dafür günstige Energiequellen erschließen. Das schließt die Wiederinbetriebnahme von Atomkraftwerken und günstiges Pipeline-Gas mit ein. Wir wollen auf diese Weise wieder zu international wettbewerbsfähigen Energie- und Stromkosten gelangen. Zudem werden wir die Energiesteuern stark senken und die CO2-Abgabe komplett abschaffen. Eine Bezuschussung der Stromkosten von Unternehmen erübrigt sich damit.'
			},
			{
				state: State.Disprove,
				reason:
					'Die Rente ist eine Versicherungsleistung. Ihre Höhe hängt von der Höhe der Einzahlungen ab. Eine Ausnahme gibt es nur in Form des Grundrentenaufschlags für langjährig Versicherte mit sehr niedriger Rente. Die AfD möchte im Grundsatz jedem Beschäftigtem die Entscheidung über den Renteneintritt selbst überlassen. Bei einem Renteneintritt vor dem Rentenregelalter bedeutet dies Abschläge, bei einem längerem Arbeitsleben Aufschläge. Das heißt aber auch, dass wer kürzer arbeitet, weniger Rente erhält'
			},
			{
				state: State.Approve,
				reason:
					'Es handelt sich bei der Formulierung nicht um einen „einleitenden Satz“, sondern um einen Teil der Präambel, die Teil des gesamten Verfassungswerks ist. Der Gottesbezug war zum Zeitpunkt der Schaffung des GG ein Bezugspunkt für die Geschichte des christlichen Abendlandes, der die Verfassungsgeber sich verpflichtet fühlten im Kontrast zur Barbarei der NS-Diktatur. Diese zeithistorische Rahmenbedingung ist so bedeutungsvoll, dass sie es verdient, dauerhaft dokumentiert zu werden.'
			},
			{
				state: State.Neutral,
				reason:
					'Wir begrüßen die Zuwanderung qualifizierter Fachkräfte, sofern diese zum Erfolg unseres Landes sowie zur Stärkung des Wirtschaftsstandorts Deutschland beitragen können. Das gilt für alle Berufsfelder, in denen bei uns Mangel herrscht., beispielsweise im Handwerk, im Gesundheitswesen, in naturwissenschaftlichen und IT-Berufen. Beenden werden wir dagegen den Irrweg der Vermischung von qualifizierter Zuwanderung und humanitärem Schutz.'
			},
			{
				state: State.Approve,
				reason:
					'Kernenergie ist eine günstige, sichere, saubere und bedarfsgerecht steuerbare Energieform mit geringem Flächenbedarf. Kohle- wie auch Kernkraft müssen ausgebaut werden. Dabei sollen bewährte Techniken und neue Entwicklungen berücksichtigt werden. Bestehende Kraftwerke werden schnellstens wieder in Betrieb genommen. Dafür notwendigen Techniken und Voraussetzungen sollen wieder in deutschen Firmen, Behörden, Instituten und Universitäten angesiedelt werden.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir setzen auf das Prinzip „Mehr Netto vom Brutto“ für alle Steuerzahler und werden deshalb die Einkommensteuer durchgehend senken: Der einkommensteuerliche Grundfreibetrag wird auf 15.000 Euro erhöht. Daraus ergibt sich eine korrespondierende Verschiebung von weiteren Tarifeckwerten bis hin zum Spitzensteuersatz. Die Finanzierung erfolgt durch massive Reduzierung von Ausgaben, insbesondere durch den Verzicht auf ideologiebasierte Projekte.'
			},
			{
				state: State.Disprove,
				reason:
					'Die Bundesländer sollten aufgrund ihrer Unterschiede in Kultur, Struktur und Region in den wichtigen Bildungsbereichen ihre Eigenständigkeit bewahren. Insofern bekennt die AfD sich zum Bildungsföderalismus und hält die bisherigen Kompetenzen des Bundes in der Schulpolitik für ausreichend.'
			},
			{
				state: State.Neutral,
				reason:
					'Wir erkennen uneingeschränkt das Existenzrecht Israels an und das Recht des Staates Israel dieses auch militärisch zu verteidigen. Dies gilt ins besonders auch vor dem Hintergrund des terroristischen Angriffs der Hamas in Israel am 7. Oktober 2023. Die grundsätzliche Position der AfD keine Waffen in Spannungs- oder Kriegsgebiete zu liefern, bleibt davon aber unberührt.'
			},
			{
				state: State.Disprove,
				reason:
					'Der medizinische Fortschritt wird in erster Linie von den Privatversicherten finanziert, da Ärzte und Krankenhäuser deutlich mehr an ihnen verdienen als an gesetzlich Versicherten. Die hohen Versicherungsbeiträge für die gesetzlichen Krankenkasse entstehen, weil die Länder ihre gesetzlichen Aufgaben in der Krankenhaus-Infrastruktur nicht ausreichend wahrnehmen, und der Bund die gesetzlich Versicherten z.B. auch für die Krankenversicherung der Bürgergeldempfänger mitbezahlen lässt.'
			},
			{
				state: State.Approve,
				reason:
					'Unternehmen sollten ihre Arbeitnehmer nach dem Prinzip der Bestenauslese wählen und nicht aufgrund von festgelegten Quoten. Durch Frauenquoten wird die Leistung von Frau entwertet, gleichzeitig stellt sie eine erhebliche Form der Geschlechterdiskriminierung dar.'
			},
			{
				state: State.Disprove,
				reason:
					'Es kommt hier nicht auf die Gesamtmenge der Förderungen an, sondern auf die konkrete einzelbetriebliche Maßnahme. Die jeweiligen Förderungen sind hier so auszubalancieren, dass nicht zu viel in einen ökologischen Nischenmarkt investiert wird, der in Zeiten inflationärer Lebensmittelpreise keine Abnehmer findet, und zugleich die flächendeckende Versorgung mit heimischen Lebensmitteln aus konventioneller Produktion sichergestellt werden kann.'
			},
			{
				state: State.Disprove,
				reason:
					'Die bisherige Förderung gegen Rechtsextremismus dient vor allem der Finanzierung linker Vorfeldorganisationen bis hin zu extremistischen und gewaltbereiten Vereinigungen. Dementsprechend weigern sich diese Organisationen auch ein Bekenntnis zur freiheitlich-demokratischen Grundordnung als Voraussetzung zur Finanzierung abzugeben. Die ihnen nahestehenden Parteien haben ein solche Bekenntnis als Voraussetzung auch verhindert.'
			},
			{
				state: State.Disprove,
				reason:
					'Das entsprechende Lieferkettengesetz macht deutsche Unternehmen für Missstände in ihren Liefer- und Unterlieferketten in Entwicklungsländern verantwortlich. Es will bessere Lebensbedingungen für die dortigen Beschäftigten erreichen, stellt aber so hohe Anforderungen hinsichtlich Bürokratie, Kostenaufwand und Haftung, dass viele Unternehmen sich zurückziehen und die dortigen Arbeitsplätze verloren gehen. In jedem Fall entsteht ein Wettbewerbsnachteil gegenüber ausländischen Unternehmen.'
			},
			{
				state: State.Approve,
				reason:
					'BAföG ist ein wichtiges Instrument, das Auszubildenden aus einkommensschwachen Familien die Finanzierung eines schulischen Abschlusses oder eines Studiums ermöglichen soll. Es sollte ausschließlich einem Personenkreis vorbehalten bleiben, der auf diese finanzielle Unterstützung angewiesen ist. Allerdings sollte das BAföG zu einer gerechten Sozialleistung für Schüler und Studenten aus einkommensschwachen Familien weiterentwickelt werden. Das betrifft auch eine Erhöhung der Bedarfssätze.'
			},
			{
				state: State.Approve,
				reason:
					'Dass Einnahmen und Ausgaben ohne Schulden ausgeglichen sein müssen, ist trivial. Und schon die bestehende Schuldenbremse des Art 109 (3) GG erlaubt einen Schuldenhaushalt von immerhin bis zu 0,35 % des BIP pro Jahr. Artikel 115 (2) GG erlaubt sogar das Aussetzen der Schuldenbremse in gewissen „Notsituationen“, wovon der deutsche Staat ja auch seit 2020 ausgiebig Gebrauch gemacht hat. All das ist schon die heutige Rechtslage. Eine Änderung des GG ist darum in keiner Weise erforderlich.'
			},
			{
				state: State.Disprove,
				reason:
					'Eine Arbeitserlaubnis im laufenden Asylverfahren verfestigt den Aufenthalt in Deutschland, was im Falle eines negativen Asylbescheids aber unerwünscht ist. Daher ist die Arbeitserlaubnis nur bei einem positiven Asylbescheid zu gewähren. Für Asylantragsteller und abgelehnte Asylbewerber werden wir dagegen keine Arbeitserlaubnis außerhalb verpflichtender gemeinnütziger Arbeitsgelegenheiten mehr vorsehen.'
			},
			{
				state: State.Approve,
				reason:
					'Die festgelegten Klimaziele sind überambitioniert und bremsen das wirtschaftliche Wachstum. Zudem wird industrielle Produktion, die in Deutschland an hohe Umweltstandards gebunden ist, ins Ausland verlagert wo sie aufgrund dort fehlender Regulierungen teils erhebliche Umweltschäden verursacht.'
			},
			{
				state: State.Disprove,
				reason:
					'Deutschland gehört zu den Ländern mit der geringsten Wochenarbeitszeit pro Beschäftigten. Eine weitere Kürzung würde zum einen die ohnehin fragile internationale Wettbewerbsfähigkeit deutscher Unternehmen weiter reduzieren, zum anderen zu Preiserhöhungen auch im Inland führen. Beides würde den Wohlstand im Land weiter herabsetzen.'
			},
			{
				state: State.Approve,
				reason:
					'Das Recht auf Leben ist ein fundamentales Menschenrecht. Das Lebensrecht des ungeborenen Kindes steht einem Wunsch der Mutter auf Abtreibung diametral entgegen. Eine einfühlsame Beratung muss die Bedürfnisse von Mutter und Kind gleichermaßen thematisieren.'
			},
			{
				state: State.Approve,
				reason:
					'Grundlagen des Euros waren Stabilitätsregeln und keine Gemeinschaftshaftung der Staaten. Beide Regeln werden ständig gebrochen. Der Euro wird heute jeden Tag „gerettet“: über EU-Gemeinschaftsfonds, Garantien, Geldgeschenke und Aufkäufe von Staatsanleihen durch die EZB. Jede weitere Teilnahme an der Dauerrettung kommt einer Insolvenzverschleppung auf Kosten deutscher Steuerzahler gleich. Anfallende Umstellungsbelastungen wären inzwischen niedriger als die Kosten eines Verbleibs im Eurosystem.'
			},
			{
				state: State.Disprove,
				reason:
					'Verkehrsinfrastruktur wurde in allen Bereich über Jahrzehnte vernachlässigt und muss in gleicher Form massiv betrieben werden.'
			},
			{
				state: State.Disprove,
				reason:
					'Eine ehrenamtliche Tätigkeit wird selbstbestimmt und ohne Gewinnabsicht durchgeführt. In der Regel erhält die Person dafür eine zumeist steuer- und abgabenfreie Aufwandsentschädigung. Wir legen Wert darauf, dass das bürgerschaftliche Engagement weiterhin aus Überzeugung für das Gemeinwohl ausgeübt wird. Der Lohn fürs Ehrenamt sind öffentliche Anerkennung und Ehre, wie auch kleinere Vergünstigungen für Freifahrtscheine. Hier kann in vielen Bundesländern noch deutlich nachgebessert werden.'
			},
			{
				state: State.Neutral,
				reason:
					'Die Grundsteuer soll abgeschafft und den Gemeinden aus Bundesmitteln ein Ausgleich gezahlt werden.'
			},
			{
				state: State.Approve,
				reason:
					'Der Arbeitskampf wurde bei uns bisher im Wesentlichen durch die Rechtsprechung entwickelt. Das BVerfG hat in Bezug auf Bereiche der öffentlichen Daseinsvorsorge Einschränkungen im Streikrecht vorgegeben z. B. für die Aufrechterhaltung eines Notbetriebs. Andere EU-Länder haben zusätzlich gesetzliche Fristen für die Ankündigungen von Streiks in kritischen Infrastrukturen. Da die Versorgung der Bürger oberste Priorität hat, müssen auch bei uns klare gesetzliche Regelungen dazu geschaffen werden.'
			},
			{
				state: State.Approve,
				reason:
					'Dies ist ein Gebot eines reifen Demokratieverständnisses. Die parlamentarische Demokratie trägt dem Umstand moderner entwickelter Staaten Rechnung, die einen hohen Steuerungsbedarf haben. Diese Form des mittelbaren Einflusses des Staatsvolkes auf die Staatsgeschäfte muss seine Grenze finden bei Grundsatzentscheidungen über fundamentale Fragen des Gemeinschaftslebens. Die Stabilität der Schweizer Demokratie ist ein leuchtendes Beispiel für den Mehrwert von Volksabstimmungen.'
			},
			{
				state: State.Approve,
				reason:
					'Die AfD setzt sich für eine Herabsetzung der Strafbarkeitsgrenze ein, und zwar auf die Vollendung des 12. Lebensjahres. Gerade im Bereich der Gewalt-, Vermögens- und auch Sexualdelikte ist zu beobachten, dass „kriminelle Karrieren“ immer früher beginnen, die Täter ihre erste kriminelle Tat in einem immer jüngeren Alter begehen. Dies sind keine Vermutungen, sondern Ergebnisse empirischer Untersuchungen. Dem stehen Polizei und Staatsanwaltschaft bislang machtlos gegenüber.'
			},
			{
				state: State.Approve,
				reason:
					'Zölle zum Schutz der heimischen Wirtschaft führen mittelfristig zu einer Schwächung der geschützten Unternehmen, weil sich für sie der Anpassungsdruck an veränderte Marktbedingungen und damit ihre Wettbewerbsfähigkeit reduziert. Dies gilt auch für chinesische Importe, solange kein eindeutiger Verstoß gegen die internationale Wettbewerbsordnung vorliegt. Die Politik sollte stattdessen für gute Standortbedingungen sorgen, wie preiswerte Energie, geringe Bürokratie und intakte Infrastruktur.'
			},
			{
				state: State.Disprove,
				reason:
					'Wenn man die Staatsangehörigkeit, wie eh und je, begreift als ein spezielles Gewaltverhältnis zwischen Bürger und „seinem“ Staat, das mit besonderen Schutzpflichten für diesen und speziellen Loyalitätspflichten bis zur Aufopferung des Lebens für jenen verbunden ist, dann kann es regelhaft eine solche Beziehung nur zwischen Bürger und einem Staat geben. Besonders gelagerte Ausnahmefälle sind vorstellbar. Denen sollte man auch Rechnung tragen.'
			},
			{
				state: State.Neutral,
				reason:
					'Wir möchten die Wehrpflicht wieder einsetzen. Diese beinhaltet gemäß aktueller Gesetzeslage auch den Ersatzdienst. Ein rein soziales Pflichtjahr lehnen wir aber ab.'
			},
			{
				state: State.Approve,
				reason:
					'Den Bedarf an Technologien und deren Weiterentwicklung regelt am Besten der freie Markt der Bauherren und Anbieter, je nach Anwendung und Ressourcenverfügbarkeit. Der freie Markt reagiert auch weit schneller, als es ein Gesetzgeber je könnte. Wir brauchen im Wohnungsbau weniger Vorschriften, nicht mehr – nur so sinken Baukosten und steigt damit die Anzahl neuer Wohnungen. Darum wollen wir auch das GEG ersatzlos abschaffen.'
			},
			{
				state: State.Neutral,
				reason:
					'Die Entscheidung über den Mindestlohn obliegt ausschließlich der Mindestlohnkommission. Dort sitzen kompetente Vertreter der Arbeitgeber und der Beschäftigten. Eine zu starke Erhöhung des Mindestlohns überfordert viele Unternehmen. Dann fallen weitere Arbeitsplätze weg und den Beschäftigten geht es am Ende schlechter als zuvor, zumal auch die Inflation steigen wird. Die AfD strebt ebenfalls höhere Löhne an, weiß aber, dass dies nur mit einem wirtschaftlichen Aufschwung nachhaltig funktioniert.'
			}
		]
	},
	{
		name: 'Die Linke',
		abbreviation: 'Die Linke',
		description:
			'Die Linke entstand 2007 durch die Fusion der sozialistischen PDS und der gewerkschaftlich geprägten WASG. Sie ist im Bundestag vertreten. Die Linke tritt für Abrüstung und den Ausbau des Sozialstaats ein, fordert eine Milliardärs- und Vermögenssteuer und will kleine und mittlere Einkommen entlasten.',
		logo: 'parties/die_linke.png',
		positions: [
			{
				state: State.Disprove,
				reason:
					'Militärische Unterstützung hat den Krieg und das Leid nicht beendet. Wir unterstützen diplomatische Initiativen, die Russland und die Ukraine an den Verhandlungstisch bringen. Ziel muss ein Waffenstillstand und ein gerechter Frieden sein.'
			},
			{
				state: State.Approve,
				reason:
					'Der größte Teil unserer zukünftigen Energieversorgung muss erst noch gebaut werden. Die öffentliche Hand soll sich stark am Aufbau der erneuerbaren Energien beteiligen, auch um so große Teile der Energieproduktion in öffentliche Hand zurückzuholen. Das wollen wir nutzen, um Windrad- und Solarfabriken (wieder) in Deutschland anzusiedeln.'
			},
			{
				state: State.Disprove,
				reason:
					'Das Verfassungsgericht hat bereits entschieden, dass das Bürgergeld nicht auf Null gekürzt werden darf. Wer das fordert, stellt sich außerhalb der Verfassung. Die Linke will, dass Erwerbslose in gute Arbeit vermittelt werden.'
			},
			{
				state: State.Approve,
				reason:
					'Die Linke unterstützt die Einführung eines generellen Tempolimits auf Autobahnen. Wer schon mal im Ausland Auto gefahren ist, weiß: Das ist für alle entspannter. Mit dem Tempolimit können erhebliche Mengen an CO2 eingespart. Und es gibt viel weniger Tote und Verletzte bei Autounfällen.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir halten es nicht für rechtens, Geflüchtete an den Grenzen abzuweisen. Die Verteilung innerhalb der EU muss in geordneten Verfahren erfolgen. Aufnahmebereite Länder, Städte und Regionen sollen mit EU-Mitteln finanziell und strukturell besonders unterstützt werden.'
			},
			{
				state: State.Approve,
				reason:
					'Die bisherige Begrenzung der Miete durch die Mietpreisbremse ist wirkungslos, das sehen wir an den explodierenden Mieten. Die Linke fordert einen bundesweiten Mietendeckel. Unser Ziel: Die Explosion der Mieten nicht nur bremsen, sondern beenden und rückgängig machen. In angespannten Wohnungsmärkten müssen besonders hohe Mieten abgesenkt werden. Als Sofortmaßnahme müssen Mieterhöhungen für die nächsten sechs Jahre ausgeschlossen werden.'
			},
			{
				state: State.Disprove,
				reason:
					'Flächendeckende Überwachung gehört in autoritäre Staaten, nicht in eine Demokratie. Wir verteidigen das Recht auf informationelle Selbstbestimmung. Automatisierte Gesichtserkennung und Verhaltensklassifikation führen oft zu Diskriminierung.'
			},
			{
				state: State.Approve,
				reason:
					'Wir fordern, dass energieintensive Industrie im Umbau u.a. mit einem günstigen Strompreis unterstützt wird. Das wollen wir aus dem Klima- und Transformationsfonds finanzieren, mit dem wir den klimagerechten Umbau der Wirtschaft fördern wollen.'
			},
			{
				state: State.Approve,
				reason:
					'Die Rente erst ab 67 bedeutet Rentenkürzungen für alle. Das gilt besonders für Berufe, in denen Beschäftigte nicht so lange durchhalten können, wie auf dem Bau oder in der Pflege. Die Linke will die Regelaltersgrenze auf 65 Jahre senken und das Rentenniveau wieder auf 53 Prozent anheben. Wer 40 Jahre lang gearbeitet und Beiträge gezahlt hat, soll ab 60 ohne Abschläge und Kürzungen in Rente gehen können.'
			},
			{
				state: State.Disprove,
				reason:
					'Die Linke tritt für die Trennung von Staat und Religion sowie die Gleichbehandlung aller Religionen und Weltanschauungen mit den christlichen Kirchen ein.'
			},
			{
				state: State.Neutral,
				reason:
					'Wir halten es für problematisch, wenn in anderen Ländern Fachkräfte abgeworben werden, die dort oft fehlen. Für Menschen, die bereits in Deutschland sind, wollen wir aber schnelle und umfassende Arbeitserlaubnisse. Qualifikationen und Abschlüsse auch von Nicht-EU-Bürger*innen müssen schneller anerkannt werden. Gegen den Fachkräftemangel hilft, wen die Betriebe wieder mehr ausbilden – und gute Löhne und Arbeitsbedingungen.'
			},
			{
				state: State.Disprove,
				reason:
					'Erneuerbare Energien sind mittlerweile viel billiger als Atomkraft. Atomkraft ist eine unbeherrschbare Risikotechnologie, die im Störfall todbringend ist und über Generationen hinweg Mensch und Umwelt massiv gefährdet. Die Endlagerfrage für Atommüll ist bis heute nicht geklärt. Die Linke will eine Energiewende auf der Basis von erneuerbaren Energien ohne Atomkraft.'
			},
			{
				state: State.Approve,
				reason:
					'Der Spitzensteuersatz in Deutschland ist im europäischen Vergleich sehr niedrig. Über Jahrzehnte ist die Steuerbelastung für hohe Einkommen abgesenkt worden. Wir wollen den Spitzensteuersatz und den Reichensteuersatz erhöhen. Den Steuerfreibetrag wollen wir auf 16.800 Euro erhöhen. So zahlen alle, die weniger als 7.000 Euro brutto im Monat verdienen, weniger Steuern.'
			},
			{
				state: State.Approve,
				reason:
					'Überall im Bildungsbereich investieren die Bundesländer zu wenig. An vielen Schulen regnet es durchs Dach, ist die Sporthalle gesperrt oder sind die Toiletten unbenutzbar. Es fehlt an Personal, andauernd fällt Unterricht aus – und die Abschlüsse sind zwischen den Bundesländern immer noch nicht vergleichbar. Der Bund soll es sich zur Aufgabe machen, dass die Schule soziale Ungleichheiten ausgleicht, statt sie zu verstärken.'
			},
			{
				state: State.Disprove,
				reason:
					'Auch beim Krieg im Nahen Osten gibt es keine militärische Lösung. Es braucht diplomatischen Druck für einen Waffenstillstand und einen nachhaltigen Frieden. Dazu gehört ein Prozess der Aussöhnung. Der Internationale Strafgerichtshof muss bei der Aufklärung und Verfolgung der Verbrechen auf beiden Seiten unterstützt werden.'
			},
			{
				state: State.Approve,
				reason:
					'Die Linke will keine Zwei-Klassen-Versorgung für privat und gesetzlich Versicherte. Wenn alle in die gesetzlichen Krankenkassen einzahlen, wird die Versorgung für alle besser, Zuzahlungen entfallen. Die Beiträge für alle, die weniger als 7.100 Euro im Monat verdienen, sinken.'
			},
			{
				state: State.Disprove,
				reason:
					'Die Linke setzt sich dafür ein, dass Frauen überall gleiches Geld für gleichwertige Arbeit bekommen und gleiche Chancen im Beruf haben. Die Quote wirkt: In den Vorständen der größten deutschen Börsenkonzerne sitzen so viele Frauen wie nie zuvor.'
			},
			{
				state: State.Approve,
				reason:
					'Die Linke kämpft für eine sozial gerechte und auf das Gemeinwohl orientierte Landwirtschaft, die das Klima und die Natur schont und mit dem Tierschutz vereinbar ist. Wir stehen an der Seite der Landwirt*innen. Sie leisten für die Gesellschaft überlebensnotwendige Arbeit. Menschen, die in der Landwirtschaft arbeiten, müssen davon gut leben können. Wer sich zu höheren Standards verpflichtet, soll auch stärker gefördert werden.'
			},
			{
				state: State.Approve,
				reason:
					'Projekte gegen Rechtsextremismus und zur Stärkung der Demokratie sind auf öffentliche Förderung angewiesen. Die vielen Ehrenamtlichen, die sich hier engagieren, brauchen die Unterstützung durch hauptamtliche, professionelle Kräfte. Deshalb muss diese Förderung auf gesetzliche Füße gestellt werden.'
			},
			{
				state: State.Approve,
				reason:
					'Es sollte selbstverständlich sein, dass Unternehmen keine Kinderarbeit nutzen und nicht die Umwelt vergiften. Oft nehmen sie aber die Verletzung von Menschen- und Arbeitsrechten bei ihren Zulieferern in Kauf, um Kosten zu senken und ihre Profite zu erhöhen. Das muss beendet werden, auch im Interesse der anderen Hersteller, die sich an faire Bedingungen halten.'
			},
			{
				state: State.Disprove,
				reason:
					'Jede*r dritte Studierende in Deutschland ist arm. Nur 12,5 Prozent der Studierenden bekommen BAföG. Das Bafög selbst liegt unterhalb der Armutsgrenze. Die Linke will, dass BAföG unabhängig vom Einkommen der Eltern gezahlt wird, dann gibt es weniger Hemmnisse bei der Beantragung. Das BAföG soll existenzsichernd sein und als Vollzuschuss gezahlt werden. In vielen Ländern sind damit gute Erfahrungen gemacht worden.'
			},
			{
				state: State.Disprove,
				reason:
					'Die Schuldenbremse verhindert notwendige Investitionen in Bildung, Gesundheit, Klimaschutz und soziale Sicherheit. Die Schuldenbremse belastet die Lebensqualität von uns und der kommenden Generation: Die Bahn ist marode, Brücken brechen ein und in den Schulen regnet es durch die Decke. Es ist Zeit für ein Umdenken: Mehr Investitionen für Bildung, Soziales und öffentlichen Wohnungsbau schaffen langfristige Werte.'
			},
			{
				state: State.Approve,
				reason:
					'Niemand soll darauf warten müssen, sein Leben selbst in die Hand zu nehmen. Das ist gut für die Geflüchteten und es hilft in den vielen Bereichen, in denen Arbeitskräfte dringend gesucht werden. Die meisten Geflüchteten wollen arbeiten, dürfen aber nicht.'
			},
			{
				state: State.Disprove,
				reason:
					'Die Auswirkungen der globalen Erwärmung sind längst auch in Deutschland zu spüren: Flutkatastrophen, mehr Dürren und Wassermangel. Die Ampel hat den Klimaschutz in Deutschland massiv geschwächt, weil es zu wenig sozialen Ausgleich und Unterstützung für Maßnahmen wie CO2-Preis oder das Heizungsgesetz gab. Die Linke will das Klima schützen, aber sozial gerecht: Dann gibt es ein mehr an Wohlstand, nicht weniger. Das sind wir unseren Kindern schuldig.'
			},
			{
				state: State.Approve,
				reason:
					'Die Linke unterstützt die Gewerkschaften im Kampf um kürzere Arbeitszeiten. Arbeitszeitverkürzung darf nicht zur Verdichtung der Arbeit oder zu niedrigeren Löhnen führen, deshalb unterstützen wir einen vollen Personalausgleich. Eine geringere Wochenarbeitszeit (z.B. in einer 4-Tage-Woche) ermöglicht mehr Erholung und eine bessere Vereinbarkeit von Familie und Beruf. Damit sich das tatsächlich alle leisten können, dürfen die Löhne nicht sinken.'
			},
			{
				state: State.Disprove,
				reason:
					'Schwangerschaftsabbrüche sollten außerhalb des Strafgesetzbuches geregelt werden. Wie für andere medizinische Eingriffe sollten stattdessen fachliche Leitlinien gelten. Die Entscheidung für oder gegen eine Schwangerschaft muss frei von Zwängen, Hindernissen und Stigmatisierung möglich sein. Die Versorgung ungewollt Schwangerer muss deutschlandweit verbessert werden und Beratungsangebote freiwillig statt verpflichtend sein.'
			},
			{
				state: State.Disprove,
				reason:
					'Der Euro als gemeinsame europäische Währung ist nicht das Problem, sondern die Wirtschaftspolitik, die dahintersteht.'
			},
			{
				state: State.Approve,
				reason:
					'Die Linke will mehr Personen und Güter von der Straße auf die Schiene bringen. Dafür müssen mehr Züge auf funktionierenden Strecken fahren. Daher sprechen wir uns für die dringend nötige Sanierung von Brücken, Bahninfrastruktur und den Ausbau der Bahn aus.'
			},
			{
				state: State.Neutral,
				reason:
					'Viele Menschen leisten in großen Umfang und regelmäßig ehrenamtliche Arbeit – bei der freiwilligen Feuerwehr, bei Hilfs- und Rettungsorganisationen oder beim Technischen Hilfswerk. Die Organisationen, Kommunen und Länder können dafür Rentenbeiträge zahlen. Bei unregelmäßigen Tätigkeiten oder in geringerem Umfang können wir uns das nicht gut vorstellen. Wir wollen die hauptamtlichen Strukturen für gute Versorgung ausbauen, damit Ehrenamt wirklich ein zusätzliches Engagement bleiben kann.'
			},
			{
				state: State.Disprove,
				reason:
					'Die Grundsteuer ist eine Steuer der Eigentümer*innen. Es muss ausgeschlossen werden, dass die Kosten dafür weiterhin auf die Mieter*innen umgelegt werden. Die Grundsteuer darf nicht als Teil der Betriebskosten gelten, dann könnte sie nicht umgelegt werden.'
			},
			{
				state: State.Disprove,
				reason:
					'Das Streikrecht stellt sicher, dass die Beschäftigten Arbeitsbedingungen und Löhne mitgestalten können. Die Gewerkschaften sind immer ihrer gesellschaftlichen Verantwortung gerecht geworden und haben über Notdienstvereinbarungen und ähnliches den absolut notwendigen Betrieb sichergestellt. Um den Betrieb kritischer Infrastrukturen zu sichern, müssen sie ausreichend finanziert werden, statt Löcher auf Kosten der Belegschaften zu stopfen. Die Linke verteidigt das Streikrecht gegen alle Angriffe.'
			},
			{
				state: State.Approve,
				reason:
					'Demokratie ist mehr, als alle vier Jahre die Stimme abgeben. Wir wollen deshalb Formen der direkten Demokratie stärken – und sicherstellen, dass auch was daraus folgt.'
			},
			{
				state: State.Disprove,
				reason:
					'Im Umgang mit Kindern hat Strafrecht nichts verloren. Hier muss es um Hilfen zur Erziehung gehen und um Gespräche mit den Eltern. Das Jugendamt kann Konsequenzen bei der Unterbringung anordnen oder beantragen, das Sorgerecht zu verändern. Die Kinder brauchen vor allem Hilfe und Unterstützung.'
			},
			{
				state: State.Approve,
				reason:
					'Die Autoindustrie wird in China derzeit stark gefördert, was die Ausgestaltung von fairen Handelsbeziehungen schwieriger macht. Die Automobilindustrie in Deutschland hat den Umbau ihrer Flotten verschlafen. Die Zölle auf chinesische Elektroautos zu erhöhen schützt weder Arbeitsplätze noch helfen sie beim dringend benötigten Umbau der Automobilindustrie, dafür braucht es eine aktive Industriepolitik, bei der die Beschäftigten Mitsprache haben. <b>Diese Position wurde auf Wunsch von Die Linke am 06.02.2025 - nach der Veröffentlichung des Wahl-O-Mat - von „stimme nicht zu“ auf „stimme zu“ geändert.</b>'
			},
			{
				state: State.Approve,
				reason:
					'Wer hier lebt, soll unproblematisch die Staats&shy;bürgerschaft bekommen und seine oder ihre demokratischen Rechte ausüben können. Doppelte Staats&shy;bürgerschaft ist auch für Deutsche von Vorteil, die im Laufe des Lebens mehrere Lebensmittelpunkte haben. Die Möglichkeit zur doppelten Staats&shy;bürgerschaft nimmt niemandem etwas weg. Sie macht vielen den Weg in die deutsche Gesellschaft einfacher.'
			},
			{
				state: State.Disprove,
				reason:
					'Die Linke ist gegen Zwangsdienste. Aber wir wollen, dass der Bund allen Jugendlichen ermöglicht, ein freiwilliges soziales Jahr zu leisten. Bislang gibt es dafür nicht ausreichend Mittel.'
			},
			{
				state: State.Disprove,
				reason:
					'Für alle mit geringen und mittleren Einkommen in Eigenheimen dürfen im Umbauprozess keine Zusatzkosten anfallen. Es braucht angemessene Übergangsfristen. Dafür wollen wir das Heizungsgesetz entsprechend reformieren.'
			},
			{
				state: State.Approve,
				reason:
					'Der Lohn muss für ein Leben in Würde reichen. Laut EU soll der gesetzliche Mindestlohn mindestens 60% des mittleren Einkommens betragen. Im Januar 2025 sind das 15,12 Euro, der gesetzliche Mindestlohn muss also mindestens 15 Euro betragen, spätestens 2026 soll er auf 16 Euro steigen. Die Linke setzt sich für die umgehende und vollständige Umsetzung der Mindestlohn-Richtlinie in nationales Recht ein.'
			}
		]
	},
	{
		name: 'Südschleswigscher Wählerverband',
		abbreviation: 'SSW',
		description:
			'Der SSW wurde 1948 gegründet. Er ist die politische Interessenvertretung der dänischen Minderheit und der friesischen Volksgruppe und deshalb von der Fünf-Prozent-Hürde befreit. Inhaltlich setzt er einen Schwerpunkt auf Norddeutschland. Der SSW ist mit einem Abgeordneten im Bundestag vertreten.',
		logo: 'parties/ssw.png',
		positions: [
			{ state: State.Approve, reason: '' },
			{ state: State.Approve, reason: '' },
			{ state: State.Disprove, reason: '' },
			{ state: State.Approve, reason: '' },
			{ state: State.Disprove, reason: '' },
			{ state: State.Approve, reason: '' },
			{ state: State.Disprove, reason: '' },
			{ state: State.Approve, reason: '' },
			{ state: State.Approve, reason: '' },
			{ state: State.Disprove, reason: '' },
			{ state: State.Approve, reason: '' },
			{ state: State.Disprove, reason: '' },
			{ state: State.Approve, reason: '' },
			{ state: State.Disprove, reason: '' },
			{ state: State.Neutral, reason: '' },
			{ state: State.Approve, reason: '' },
			{ state: State.Disprove, reason: '' },
			{ state: State.Approve, reason: '' },
			{ state: State.Approve, reason: '' },
			{ state: State.Approve, reason: '' },
			{ state: State.Disprove, reason: '' },
			{
				state: State.Disprove,
				reason:
					'Wir wollen eine Reform der Schuldenbremse, die mehr Investitionen erlaubt z.B. in Ausbau der Infrastruktur, Bekämpfung des Klimawandels und Bildung.'
			},
			{ state: State.Approve, reason: '' },
			{ state: State.Disprove, reason: '' },
			{ state: State.Neutral, reason: '' },
			{ state: State.Disprove, reason: '' },
			{ state: State.Disprove, reason: '' },
			{ state: State.Approve, reason: '' },
			{ state: State.Approve, reason: '' },
			{ state: State.Disprove, reason: '' },
			{ state: State.Disprove, reason: '' },
			{ state: State.Disprove, reason: '' },
			{ state: State.Disprove, reason: '' },
			{ state: State.Disprove, reason: '' },
			{ state: State.Approve, reason: '' },
			{ state: State.Disprove, reason: '' },
			{ state: State.Disprove, reason: '' },
			{ state: State.Approve, reason: '' }
		]
	},
	{
		name: 'FREIE WÄHLER',
		abbreviation: 'FREIE WÄHLER',
		description:
			'Die FREIEN WÄHLER entstanden 2009 als bundesweite Vereinigung kommunaler Wählergruppen. Sie sind seit 2018 Teil der bayerischen Staatsregierung. Die FREIEN WÄHLER fordern u. a. eine Stärkung der kommunalen Selbstverwaltung, eine Vereinfachung des Steuerrechts und eine Kürzung der Bürgergeldbezüge.',
		logo: 'parties/freie_wähler.png',
		positions: [
			{
				state: State.Approve,
				reason:
					'Die Ukraine ist in jüngerer Zeit Opfer einer beispiellosen Aggression durch Russland geworden, für die es keine Rechtfertigung gibt. Gegen aggressive Diktatoren ist Appeasement heute so falsch, wie es das 1938 war. Unsere Unterstützung der Ukraine mit allem, was nötig ist, um den Krieg nicht zu verlieren, ist daher richtig. Modernste Waffentechnik gehört selbstverständlich dazu.'
			},
			{
				state: State.Approve,
				reason:
					'Die Wirtschaft und die Digitalisierung verschiedener Lebensbereiche brauchen eine stabile, kostengünstige und nachhaltige Energieversorgung. Wir stehen für ein verlässliches, flexibles Energieversorgungssystem. Wir wollen die dezentrale Energiegewinnung aus regenerativen Quellen klimagerecht ausbauen.'
			},
			{
				state: State.Approve,
				reason:
					'Wir fordern eine grundlegende Überprüfung und Reform des sogenannten Bürgergelds. Um die sozial Bedürftigen auch künftig unterstützen zu können, müssen in Zeiten der Personalknappheit in der Wirtschaft die Arbeitsfähigen gezielter zur Arbeit aufgefordert werden. Arbeitsfähige, die zumutbare Arbeit ablehnen, dürfen nicht genauso versorgt werden wie kranke Arbeitsunfähige. Es ist Zeit für eine gerechte und effiziente Sozialpolitik, die Anreize zur Arbeitsaufnahme schafft und Missbrauch verhindert.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir sind gegen die Forderungen, ein generelles Tempolimit auf Autobahnen einzuführen. Geschwindigkeitsbegrenzungen sollten ausschließlich der Sicherheit oder dem Anwohnerschutz dienen. Für den Klimaschutz halten wir andere Lenkungsmaßnahmen wie die CO2-Bepreisung für angemessener.'
			},
			{
				state: State.Approve,
				reason:
					'Die Bekämpfung von Schlepperei ist eines unserer zentralen Anliegen. Die Kommunikation in den Herkunftsländern, dass illegaler Grenzübertritt und Schlepperei ein Ausschlussgrund für dauerhaften Aufenthalt in Deutschland sein werden, ist massiv zu forcieren. Auch Flüchtlingszentren in Drittstaaten bieten hierzu eine pragmatische Lösung. Asylanträge sollen immer nur im ersten sicheren Drittland gestellt werden dürfen, daher in aller Regel nicht in Deutschland.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir wollen, dass es in den immer teurer werdenden Ballungsräumen den älteren Menschen, Geringverdienern und Familien möglich ist, in ihrer vertrauten Umgebung wohnen zu bleiben. Statt für einen investitionsfeindlichen Mietendeckel stehen wir für zweckgebundene Bürgeranleihen nach Münchener Vorbild. Sie schaffen den finanziellen Freiraum, das Vorkaufsrecht für Immobilien nutzen zu können, und ermöglichen der öffentlichen Hand so, neuen sozialen Wohnraum zu erschließen.'
			},
			{
				state: State.Disprove,
				reason:
					'Eine offen erkennbare und transparente Videoüberwachung erhöht nicht nur das Sicherheitsgefühl in der Bevölkerung, sondern ist auch geeignet, potenzielle Straftäter von der Tatausführung abzuschrecken und die Beweisführung vor Gericht zu erleichtern. Eine automatisierte Gesichtserkennung auf Basis von KI-Programmen lehnen wir jedoch ab.'
			},
			{
				state: State.Approve,
				reason:
					'Um auch weiterhin eine zukunftssichere Wirtschaftsentwicklung mit einem stabilen Arbeitsmarkt in unserem Land zu garantieren, kommt es darauf an, die Standortfaktoren zu stärken und endlich die hohe Steuerbelastung anzupacken. Wir brauchen eine Steuerentlastung, eine angebotsorientierte Energiepolitik und einen wettbewerbsfähigen Industriestrompreis.'
			},
			{
				state: State.Approve,
				reason:
					'Wir sprechen uns klar gegen eine Erhöhung des Rentenalters aus. Menschen, die ihr Leben lang gearbeitet haben, sollen die Möglichkeit haben, ihren Ruhestand in Würde und Sicherheit zu genießen. Statt das Rentenalter anzuheben, setzen wir uns für alternative Maßnahmen zur Stabilisierung der Rentensysteme ein, die den Bedürfnissen der älteren Generation gerecht werden.'
			},
			{
				state: State.Approve,
				reason:
					'Deutschland muss ein weltlich-säkularer Staat bleiben, mit einer Geschichte und Basis in Christentum und Aufklärung. Die Formulierung im Grundgesetz wollen wir deshalb im Hinblick auf den Erhalt christlicher Traditionen beibehalten.'
			},
			{
				state: State.Approve,
				reason:
					'Die nötige Immigration muss in Europa neu strukturiert werden und sich nach dem Bedarf der europäischen Länder richten. Dafür sind aus verschiedensten Regionen der Welt Menschen klar und transparent für konkrete Berufsgruppen und Regionen oder Städte anzuwerben. Dabei ist auf Integrationsfähigkeit und -willen Rücksicht zu nehmen. Auf die Herkunftsländer sollte, so weit möglich, Rücksicht genommen werden, um in diesen keine Probleme durch vermehrten Wegzug gerade Gebildeter zu schaffen.'
			},
			{
				state: State.Disprove,
				reason:
					'Priorität muss sein, dass die Grundlast baldmöglichst klimaneutral, ohne CO2-Emissionen und Atommüll gesichert werden kann. Grundlastfähige Kraftwerke sowie Forschung, Entwicklung und Anwendung im Bereich Wasserstoff und die wissenschaftliche Weiterentwicklung von Kernkraft- und Kernfusionsoptionen stellen unverzichtbare Potenziale für eine klimaneutrale Energieversorgung dar. Dies sichert nicht nur nahezu unerschöpfliche Energiequellen, sondern auch wegweisende Industrien.'
			},
			{
				state: State.Disprove,
				reason:
					'Die Steuern und Sozialabgaben für Arbeitnehmer sind in Deutschland neben Belgien die höchsten der Welt. Diese Belastungen der Bürger müssen reduziert werden. Deutschland muss für produktive Arbeitnehmer interessant sein. Leistung und Arbeit müssen sich lohnen.'
			},
			{
				state: State.Approve,
				reason:
					'Bildungspolitik ist überwiegend Ländersache und soll es auch bleiben. Es ist jedoch unverzichtbar, dass der Bund mithilft, Weichen richtig zu stellen, ein optimales Bildungsumfeld zu gewährleisten und die Bundesländer bei ihren zunehmenden Bildungsaufgaben auch finanziell zu unterstützen.'
			},
			{
				state: State.Approve,
				reason:
					'Israel ist das einzige demokratische Land und der einzige Rechtsstaat im Nahen Osten. Seine Einwohner sind in großer Zahl Nachkommen von Vertriebenen aus unseren Ländern. Wir sehen die Existenz und die Sicherheit Israels als unumstößlichen Pfeiler der deutschen Außenpolitik an. Wir wollen auch in schweren Stunden unverrückbar an der Seite Israels stehen. Die Existenz und Sicherheit Israels muss dauerhaft garantiert sein. Israel verdient dabei unsere Unterstützung auf allen Ebenen.'
			},
			{
				state: State.Approve,
				reason:
					'Eine „soziale Gesundheitsversicherung“ bleibt dabei unser Ziel. Diese wird von einer Versicherungspflicht für alle Bewohner Deutschlands geprägt. Dies garantiert allen eine notwendige medizinische Versorgung, stellt die Finanzierung perspektivisch auf eine breitere Basis und entlastet den Gesundheitsfonds.'
			},
			{
				state: State.Approve,
				reason:
					'Nach wie vor sind Frauen in bestimmten Berufsbereichen der Wissenschaft, Technik, Wirtschaft und Politik unterrepräsentiert. Wir setzen uns für Programme und Qualifizierungsmaßnahmen ein, die diesen Mangel an Frauen in den genannten Bereichen beheben, um Unternehmensführung multiperspektivisch zu gestalten und damit wirtschaftlich erfolgreicher zu agieren.'
			},
			{
				state: State.Neutral,
				reason:
					'Wir wollen, dass die bäuerliche und familiengeführte Landwirtschaft eine echte Zukunftsperspektive erhält. Eine Weiterentwicklung der Tierhaltungsbedingungen wird von uns nachdrücklich unterstützt. Allerdings darf dies nicht zu einer weiteren Benachteiligung bäuerlich geführter Betriebe gegenüber großen, gewerblich strukturierten Anlagen führen. Eine Verbesserung der Haltungsbedingungen und der wirtschaftliche Erfolg bäuerlicher Strukturen dürfen sich nicht gegenseitig ausschließen.'
			},
			{
				state: State.Approve,
				reason:
					'Wir stehen klar gegen jede Form des Extremismus. Wir treten jeglicher Form von Antisemitismus, Intoleranz, Fremdenfeindlichkeit und Rassismus entschlossen entgegen. Dies alles stellt eine Gefahr für die Demokratie und den gesellschaftlichen Zusammenhalt dar. Wir werden uns mit aller Entschiedenheit dafür einsetzen, extremistische Tendenzen zu bekämpfen und den Schutz der freiheitlich-demokratischen Grundordnung zu gewährleisten.'
			},
			{
				state: State.Disprove,
				reason:
					'Die von der EU auf den Weg gebrachte Nachhaltigkeitsberichterstattung muss gestoppt werden, weil sie für die Unternehmen eine hohe Kosten- und Bürokratiebelastung darstellt, ohne einen sinnvollen Nutzen abzubilden. Diese Bürokratie schadet massiv der Wettbewerbsfähigkeit unserer belastet besonders unsere kleinen und mittelständischen Unternehmen.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir setzen uns für ein unbürokratisches und elternunabhängiges BAföG ein, damit alle Studierenden die finanzielle Unterstützung erhalten, die sie für ihre Ausbildung benötigen, unabhängig von der Einkommenssituation ihrer Eltern.'
			},
			{
				state: State.Approve,
				reason:
					'Wir setzen uns konsequent für einen verfassungskonformen Bundeshaushalt ein. Die Einhaltung der Vorgaben des Grundgesetzes ist für uns nicht verhandelbar. Trickreiche Gestaltung oder Schattenhaushalte lehnen wir entschieden ab. Die Schuldenbremse hat sich als wirksames Instrument zur Begrenzung der Staatsverschuldung bewährt. Wir stehen zu diesem Verfassungsgebot und lehnen Versuche, die Schuldenbremse aufzuweichen oder zu umgehen, entschieden ab.'
			},
			{
				state: State.Approve,
				reason:
					'Damit Integration gelingt, ist duales staatliches Handeln erforderlich: fördern und fordern. Eine schnellere Erteilung einer Arbeitserlaubnis ist deshalb ebenso dringlich wie eine verpflichtende Teilnahme an Deutschkursen.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir unterstützen die Grundidee der Klimaneutralität. Priorität muss sein, dass die Energieversorgung baldmöglichst klimaneutral, ohne CO2-Emissionen und Atommüll gesichert werden kann. Im Mittelpunkt steht der naturverträgliche Ausbau der regenerativen Energieerzeugung und die biomassebasierten Energieversorgungssysteme. Grundlastfähige Kraftwerke sowie die Weiterentwicklung von Kernkraft- und Kernfusionsoptionen stellen unverzichtbare Potenziale für eine klimaneutrale Energieversorgung dar.'
			},
			{
				state: State.Disprove,
				reason:
					'Damit sowohl Beschäftigte als auch Arbeitgeber die Chancen der Digitalisierung umfassend nutzen können, bedarf es einer grundlegenden Flexibilisierung der Arbeitszeitregeln. Dazu müssen Arbeitsprozesse künftig flexibilisiert und Regelungen familienfreundlich ausgestaltet werden, ohne den Arbeitnehmer- und Gesundheitsschutz aufzuweichen. Wir fordern eine Flexibilisierung der Arbeitszeit nach EU-Arbeitszeitrichtlinie mit wöchentlicher statt täglicher Höchstarbeitszeit.'
			},
			{
				state: State.Approve,
				reason:
					'Die verpflichtende Schwangerschaftskonfliktberatung ist von herausragender Bedeutung und muss zwingend erhalten bleiben. Wir stehen bei dem Wunsch nach einem Schwanger&shy;schafts&shy;abbruch für einen flächendeckenden und diskriminierungsfreien Zugang zu einer sicheren medizinischen Versorgung und setzen uns für die Rechtssicherheit von Ärzten ein, die über ihr Leistungsangebot in diesem Bereich informieren. Eine kommerzielle Bewerbung von Schwangerschaftsabbrüchen sollte aber weiterhin illegal bleiben.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir stehen zu unserer Gemeinschaftswährung. Wir wollen jedoch zurück zu dem Grundsatz, dass jedes Land für seine Schulden selbst haftet. Unsere Währungsunion muss wieder eine Stabilitätsunion werden.'
			},
			{
				state: State.Neutral,
				reason:
					'Wir stehen für eine Weiterentwicklung der Mobilität und sehen die Chance in der Vielfalt der Mobilitätsmöglichkeiten. Handlungsbedarf sehen wir im Ausbau des öffentlichen Personennahverkehrs und des Fahrradverkehrs. Wir wollen Anreize schaffen, um den Güterverkehr auf klimafreundlichere Verkehrswege wie Schienen- und Wasserstraßen zu verlegen. Außerdem wollen wir mit der Neubelebung stillgelegter Eisenbahnstrecken mehr als drei Mio. Menschen in Deutschland wieder ans Schienennetz anbinden.'
			},
			{
				state: State.Approve,
				reason:
					'Wir erkennen die Leistungen ehrenamtlicher Mitarbeiter an und sehen die Notwendigkeit einer regelmäßigen Anpassung der steuerlichen Entlastungsbeträge, insbesondere der Ehrenamtspauschale. Wir fordern darüber hinaus, dass ein langjähriges freiwilliges Engagement durch zusätzliche Rentenpunkte honoriert wird.'
			},
			{
				state: State.Approve,
				reason:
					'Wohnen darf in Deutschland für die Menschen nicht unerschwinglich werden. Wir setzen uns deshalb dafür eine möglichst schnelle Klarheit für Eigentümer und Mieter zu schaffen. Die Neubewertung der Grundsteuer muss sowohl für den Bürger als auch für die Kommunen aufkommensneutral gestaltet werden.'
			},
			{
				state: State.Approve,
				reason:
					'Unternehmen der sog. kritische Infrastrukturen haben eine wichtige Bedeutung für das staatliche Gemeinwesen, bei deren Ausfall oder Beeinträchtigung nachhaltig wirkende Versorgungsengpässe, erhebliche Störungen der öffentlichen Sicherheit oder andere dramatische Folgen eintreten würden. Wir halten deshalb eine Beschränkung des Streikrechts zur Aufrechterhaltung einer grundlegenden Versorgung für sinnvoll.'
			},
			{
				state: State.Approve,
				reason:
					'Wir wollen die Bürger stärker in politische Entscheidungen einbeziehen. Direkte Demokratie und Bürgerbeteiligung sollen ausgeweitet werden, damit die Menschen nicht nur alle vier Jahre wählen, sondern auch zwischen den Wahlen an wichtigen Entscheidungen teilhaben können.'
			},
			{
				state: State.Approve,
				reason:
					'Die Strafmündigkeit ist, um die Strafverfolgung zu ermöglichen, auf unter 14 Jahre abzusenken. Dies soll nach Individualprüfung durch einen gerichtlich bestellten Sachverständigen richterlich geschehen und nur für den Fall, dass das Kind in diesem Alter ein schweres Vergehen oder Verbrechen begangen hat. Das Jugendstrafvollzugsrecht ist um jene Maßnahmen zu ergänzen, die für diese Altersgruppe sinnvoll sind.'
			},
			{
				state: State.Disprove,
				reason:
					'Für Europa ist China ein wichtiger Handelspartner, zunehmend aber auch ein politischer und ökonomischer Rivale. Wir müssen uns davor schützen, sowohl beim Außenhandel wie auch bei den Lieferketten in zu große wirtschaftliche Abhängigkeiten zu geraten. Wir wollen unsere nationale Sicherheit und Schlüsseltechnologien besser vor chinesischer Einflussnahme schützen und verhindern, dass unsere hohen heimischen Standards durch Billigimporte unterlaufen werden.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir wollen Doppelpässe mit Ländern außerhalb der EU auf wenige, individuell begründete Ausnahmefälle beschränken.'
			},
			{
				state: State.Approve,
				reason:
					'Mit der Aussetzung der Wehrpflicht wurde eines der letzten gesellschaftlichen Bindeglieder ohne Not aufgegeben. Die veränderte Sicherheitslage erfordert eine Anpassung der militärischen Strukturen, womit sich der Bedarf an qualifiziertem Nachwuchs erhöht. Wir fordern deshalb ein Gesellschaftsjahr für Frauen und Männer. Dabei soll es eine Wahlfreiheit zwischen dem Dienst in der Bundeswehr, im Katastrophenschutz, bei Blaulichtorganisationen (z.B. der Feuerwehr) sowie im sozialen Bereich geben.'
			},
			{
				state: State.Approve,
				reason:
					'Die Heiztechnik muss auch zukünftig zum Gebäude passen. Während im Neubau vielfach gut eine Wärmepumpe verbaut werden kann, steht im Altbau der Sanierungsaufwand in keinem Verhältnis. Momentan heizt jeder zweite der 41 Millionen Haushalte in Deutschland mit Erdgas. Wir müssen deshalb vorhandene Netze und Heizungen – wo sinnvoll möglich - wasserstofffähig machen.'
			},
			{
				state: State.Disprove,
				reason:
					'Für die Höhe des Mindestlohns soll allein die Empfehlung der Mindestlohnkommission ausschlaggebend sein. Der Mindestlohn soll so bemessen sein, dass Vollzeitbeschäftigte nach 45 Jahren Tätigkeit einen auskömmlichen Rentenanspruch erwerben können und keine Grundsicherung erhalten müssen. Eine Überprüfung und die Anpassung des Mindestlohns an die Lebenshaltungskosten der Bevölkerung muss durch die Mindestlohnkommission jährlich erfolgen.'
			}
		]
	},
	{
		name: 'PARTEI MENSCH UMWELT TIERSCHUTZ',
		abbreviation: 'Tierschutzpartei',
		description:
			'Die Tierschutzpartei wurde 1993 gegründet. Sie engagiert sich insbesondere für den Schutz von Umwelt und Tieren. Ihr Ziel ist u. a. die Aufnahme von Grundrechten für Tiere mit einem eigenen Artikel ins Grundgesetz. Seit 2014 gewann sie bei den Wahlen zum Europäischen Parlament jeweils ein Mandat.',
		logo: 'parties/tierschutzpartei.png',
		positions: [
			{
				state: State.Approve,
				reason:
					'Die Ukraine muss weiterhin gegen die völkerrechtswidrige Aggression Russlands unterstützt werden. Die Souveränität und territoriale Integrität der Ukraine als demokratischer Bündnispartner gehört bewahrt. Zudem soll Deutschland hier ein klares Signal gegen imperialistische Bestrebungen setzen, um einen Schritt weiter in Richtung Stabilität und Frieden zu gehen.'
			},
			{
				state: State.Approve,
				reason:
					'Der Ausbau erneuerbarer Energien ist eine zentrale Maßnahme zur Bekämpfung des Klimawandels. Wir setzen uns für eine konsequente Förderung durch den Staat ein, um eine klimafreundliche Energieversorgung sicherzustellen. Dabei müssen sozial schwächere Menschen bei der Umstellung auf erneuerbare Energien besonders unterstützt werden.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir lehnen die Kürzung oder Streichung des Bürgergelds ab, da es bereits jetzt kaum für soziale Teilhabe und Überleben reicht. Solange das Bürgergeld kein Existenzminimum darstellt, wäre eine Kürzung menschenunwürdig. Stattdessen fordern wir ein Grundeinkommen als nachhaltige Alternative und mehr Hilfe, um wieder in den Arbeitsmarkt einzusteigen.'
			},
			{
				state: State.Approve,
				reason:
					'Wir befürworten ein generelles Tempolimit auf Autobahnen, da es einen wesentlichen Beitrag zur Verkehrssicherheit, zum Klimaschutz und zur Reduzierung von Schadstoffemissionen leistet. Ein Tempolimit mindert die Unfallgefahr, senkt den Energieverbrauch und fördert eine umweltfreundlichere Mobilität. Dies ist ein einfacher, effektiver Schritt hin zu mehr Nachhaltigkeit im Verkehr.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir lehnen die Abweisung von Asylsuchenden an den deutschen Grenzen ab. Diese Praxis verstößt gegen die universellen Menschenrechte und das Recht auf Asyl. Wir kritisieren die Dublin-Verordnung, die Länder ungleich belastet, und fordern eine gerechte, solidarische Verteilung von Geflüchteten innerhalb der EU. Menschen, die Schutz suchen, müssen willkommen geheißen und ihre Rechte respektiert werden, unabhängig davon, durch welches Land sie eingereist sind.'
			},
			{
				state: State.Approve,
				reason:
					'Wir fordern einen bundesweiten Mietendeckel, um Mieter:innen zu entlasten und den eskalierenden Wohnungsmarkt zu regulieren. Vermieter:innen, die Mietwucher betreiben, müssen konsequent nach § 291 StGB strafrechtlich verfolgt werden. Langfristig soll Wohnen bezahlbar bleiben, indem maximal ein Drittel des Nettogehalts für die Miete ausgegeben werden muss. So bekämpfen wir Leerstand und schaffen sozialen Wohnraum.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir lehnen den Einsatz von Gesichtserkennungssoftware in Verbindung mit Videoüberwachung ab. Diese Technologie greift massiv in Grundrechte wie Datenschutz und Privatsphäre ein, birgt Risiken wie Fehlidentifikationen und Diskriminierung und steht im Konflikt mit der informationellen Selbstbestimmung. Statt teurer Symbolpolitik setzen wir auf Präventionsarbeit und gezielte Maßnahmen zur Förderung von Sicherheit ohne Überwachung.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir lehnen finanzielle Ausgleiche für stromkostenintensive Unternehmen ab, da dies Anreize für umweltschädliches Verhalten schafft und die Allgemeinheit belastet. Stattdessen sollten Unternehmen dazu verpflichtet werden, in energieeffiziente und klimafreundliche Technologien zu investieren. Nachhaltigkeit muss Vorrang vor kurzsichtigen ökonomischen Vorteilen haben.'
			},
			{
				state: State.Approve,
				reason:
					'Wir befürworten eine Rente nach 40 Beitragsjahren ohne Abschläge. Allerdings muss das Rentensystem dafür solidarischer gestaltet werden: Auch Abgeordnete, Beamt:innen und Selbstständige sollen, gestaffelt nach Einkommen, in die Rentenkasse einzahlen. So schaffen wir ein gerechtes und nachhaltiges System, das allen Berufstätigen einen sorgenfreien Ruhestand nach ihren Beitragsjahren ermöglicht.'
			},
			{
				state: State.Disprove,
				reason:
					'Die Formulierung widerspricht der klaren Trennung von Staat und Religion. In einem säkularen Staat sollte das Grundgesetz neutral und ohne religiösen Bezug sein, um der religiösen Vielfalt gerecht zu werden. Verantwortung sollte stattdessen auf universellen ethischen Grundsätzen wie Menschenwürde, Gerechtigkeit und Solidarität beruhen, die allen Bürger:innen gleichermaßen zustehen.'
			},
			{
				state: State.Approve,
				reason:
					'Deutschland muss für Fachkräfte attraktiver werden, aber auch die Herkunftsländer sollen profitieren. Neben fairen Arbeitsbedingungen wie einer 4-Tage-Woche und Homeoffice fordern wir Partnerschaften, die Wissenstransfer und Unterstützung der Herkunftsländer fördern. Diskriminierung muss abgebaut werden, um ein respektvolles Umfeld zu schaffen. So kann Deutschland Fachkräfte gewinnen, ohne andere Länder auszubeuten.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir stehen hinter dem beschlossenen Ausstieg aus der Kernenergie, da sie ein unkalkulierbares Risiko für Mensch, Tier und Natur darstellt. Die Nutzung dieser Technologie ist weder nachhaltig noch sicher. Stattdessen setzen wir auf den Ausbau erneuerbarer Energien wie Sonne, Wind und Wasser, um eine zukunftsfähige Energieversorgung sicherzustellen.'
			},
			{
				state: State.Approve,
				reason:
					'Der Spitzensteuersatz sollte angehoben werden, um hohe Einkommen stärker zur Finanzierung des Gemeinwesens heranzuziehen. Dies würde dazu beitragen, soziale Ungleichheit zu reduzieren und die öffentliche Daseinsvorsorge, wie Bildung, Gesundheit und Klimaschutz, nachhaltig zu stärken. Spitzenverdiener:innen können und sollten mehr leisten, um die Gesellschaft solidarisch zu unterstützen.'
			},
			{
				state: State.Approve,
				reason:
					'Wir setzen uns für die Übertragung von Kompetenzen in der Schulpolitik auf die Bundesebene ein, um deutschlandweit vergleichbare Bildungsabschlüsse und Lehrpläne sicherzustellen. Bildungsgerechtigkeit darf nicht von regionalen Unterschieden abhängen. Zudem fordern wir, dass Schüler:innen, Lehrkräfte und Eltern aktiv in die Erstellung von Lehrplänen eingebunden werden, um eine zeitgemäße und bedarfsgerechte Bildung zu fördern.'
			},
			{
				state: State.Neutral,
				reason:
					'Wir fordern ein Ende der Lieferung von Angriffswaffen nach Israel, da sie die Spannungen im israelisch-palästinensischen Konflikt weiter verschärfen könnten. Israel muss sich aber auch verteidigen und Angriffen vorbeugen können - und zugleich die Zweistaatenlösung voranbringen und das Völkerrecht anerkennen. Die Beendigung des Konflikts ist zentral, um die Sicherheit Israels zu gewährleisten und einen friedlichen Aufbau der palästinensischen Gebiete im Sinne der Zweistaatenlösung zu ermöglichen.'
			},
			{
				state: State.Approve,
				reason:
					'Wir setzen uns für eine solidarische Krankenversicherung ein, in die alle Bürger:innen nach Einkommen gestaffelt einzahlen. Dies schafft ein gerechtes und nachhaltiges Gesundheitssystem, reduziert bürokratische Hürden und gewährleistet eine gleichwertige medizinische Versorgung für alle.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir setzen uns für die gesetzliche Frauenquote in Vorständen und Aufsichtsräten ein, um die Gleichstellung aller Geschlechter zu fördern. Eine Abschaffung würde den Fortschritt bei der Gleichberechtigung im Berufsleben gefährden. Wir fordern weiterhin gleiche Aufstiegschancen und Entlohnung für Frauen und Männer.'
			},
			{
				state: State.Approve,
				reason:
					'Wir setzen uns für die Förderung ökologischer Landwirtschaft ein, da sie Biodiversität schützt, CO₂ bindet, Pestizide reduziert und gesündere Lebensmittel liefert. Durch gezielte Unterstützung und eine Umverteilung der Agrarsubventionen wollen wir Landwirt:innen beim Umstieg auf nachhaltige Methoden helfen.'
			},
			{
				state: State.Approve,
				reason:
					'Wir unterstützen eine verstärkte Förderung von Projekten gegen Rechtsextremismus, da dieser eine Gefahr für die Demokratie und den gesellschaftlichen Zusammenhalt darstellt. Es ist entscheidend, Aufklärung, Prävention und Unterstützung für Betroffene zu stärken. Eine klare Haltung gegen Diskriminierung, Gewalt und Hass ist unverzichtbar, um eine solidarische und vielfältige Gesellschaft zu fördern.'
			},
			{
				state: State.Approve,
				reason:
					'Umwelt-, Menschen- und Tierschutz müssen eingehalten werden, damit sie zu einer gerechteren, nachhaltigeren Welt beitragen. Das Lieferkettengesetz muss für alle gelten und auch konsequent kontrolliert werden.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir fordern eine Reform des BAföG-Systems, um die finanzielle Unterstützung für Studierende unabhängiger vom Einkommen der Eltern zu gestalten. Ziel ist es, sicherzustellen, dass Studierende nicht auf Nebenjobs angewiesen sind, um ihre Studienleistungen zu sichern und eine Chancengleichheit für alle zu schaffen'
			},
			{
				state: State.Disprove,
				reason:
					'Die Schuldenbremse in ihrer aktuellen Form behindert notwendige Investitionen in Zukunftstechnologien, Klimaschutz und Infrastruktur. Klimakrise, technischer Rückstand und gesellschaftliche Herausforderungen erfordern mehr staatliche Investitionen. Schulden für Daseinsvorsorge sind keine Last, sondern eine Investition in die Zukunft. Wir setzen uns für eine Reform oder Abschaffung der Schuldenbremse ein, um eine gerechte, nachhaltige und zukunftsfähige Gesellschaft zu schaffen.'
			},
			{
				state: State.Approve,
				reason:
					'Wir fordern, dass Geflüchtete und Asylsuchende schnellstmöglich Zugang zum Arbeitsmarkt erhalten, um ihren Unterhalt zu sichern und zur Gesellschaft beizutragen. Dies umfasst den sofortigen Zugang zu Bildung und Qualifizierungsmöglichkeiten sowie die Anerkennung von Bildungs- und Ausbildungsnachweisen.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir lehnen es entschieden ab, das Ziel der Klimaneutralität zu verwerfen. Der Schutz des Klimas ist zentral, um unsere Lebensgrundlagen zu bewahren und die globalen Temperaturziele einzuhalten. Klimaneutralität ist notwendig, um zukünftige Generationen zu schützen und die Natur zu bewahren. Wir setzen uns für eine konsequente Energiewende, den Ausbau erneuerbarer Energien, die Transformation unserer Landwirtschaft und eine nachhaltige Wirtschaft ein.'
			},
			{
				state: State.Approve,
				reason:
					'Wir setzen uns für die Einführung zukunftsfähiger Arbeitszeitmodelle wie die 35-Stunden-Woche ein, um die Work-Life-Balance zu fördern, Stress und gesundheitliche Belastungen zu reduzieren und die Produktivität zu steigern. Eine Verkürzung der Arbeitszeit ist ein wichtiger Schritt für eine nachhaltige Arbeitswelt.'
			},
			{
				state: State.Disprove,
				reason:
					'Schwangerschaftsabbrüche müssen außerhalb des Strafgesetzbuchs geregelt werden, damit Frauen selbstbestimmt über ihren Körper entscheiden können. Im ersten Schwangerschaftsdrittel soll ein Abbruch straffrei und entkriminalisiert sein. Gleichzeitig fordern wir eine dringend notwendige Reform der Beratung, deren Ziel nicht sein darf, Abbrüche zu verhindern, sondern individuell zu unterstützen. Kosten für Abbrüche sollen Krankenkassen übernehmen, ergänzt durch kostenlose Verhütung und Aufklärung.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir lehnen die Wiedereinführung einer nationalen Währung ab, da der Euro wirtschaftliche Stabilität und Integration in Europa fördert. Ein Wechsel würde zu wirtschaftlicher Unsicherheit, Handelsbarrieren und einem Verlust an internationalem Einfluss führen. Die Stärkung der Eurozone ist entscheidend für eine gemeinsame, solidarische und nachhaltige Zukunft in Europa.'
			},
			{
				state: State.Approve,
				reason:
					'Wir fordern, dass die Schiene Vorrang vor der Straße hat, da der Ausbau des öffentlichen Schienenverkehrs essentiell für den Klimaschutz und die Reduzierung des Individualverkehrs ist. Schienenverkehr ist effizienter, umweltfreundlicher, sicherer und entlastet Straßen sowie Innenstädte. Der Schwerpunkt muss auf dem Ausbau und der Modernisierung von Schienennetzen sowie einer besseren Anbindung ländlicher Regionen liegen.'
			},
			{
				state: State.Approve,
				reason:
					'Ehrenamtlich Arbeitende investieren viel Zeit und Energie in unsere Gesellschaft und bekommen dafür zu wenig Anerkennung. Wir fordern, dass ehrenamtliche Tätigkeiten bei der Rentenberechnung stärker berücksichtigt werden. Solche Tätigkeiten tragen wesentlich zur Gesellschaft bei und verdienen eine faire Anerkennung im Rentensystem. Die Anrechnung unentgeltlicher Arbeit wie ehrenamtlichem Engagement stärkt die soziale Gerechtigkeit und beugt Altersarmut vor.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir setzen uns gegen die Umlage der Grundsteuer auf die Mieter:innen ein. Wohnkosten dürfen nicht durch versteckte Nebenkosten weiter erhöht werden. Stattdessen muss die Belastung durch gerechte und transparente Mietregelungen gesenkt werden, um die finanzielle Sicherheit der Mieter:innen zu stärken.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir stehen solidarisch hinter den Gewerkschaften und den Beschäftigten, die unsere Infrastruktur aufrechterhalten. Einschränkungen des Streikrechts gefährden grundlegende Arbeitnehmer:innenrechte und schwächen die Position der Beschäftigten. Stattdessen setzen wir uns für höhere Löhne, bessere Pausenzeiten und eine klare Verbesserungen der Arbeitsbedingungen in der kritischen Infrastruktur ein.'
			},
			{
				state: State.Approve,
				reason:
					'Wir fordern die Einführung von Volks&shy;entscheiden auf Bundesebene, um direkte demokratische Mitbestimmung zu stärken und das Vertrauen in politische Entscheidungen zu fördern. Mehr direkte Einbindung der Bürger:innen erhöht Verantwortungsbewusstsein und Informiertheit, die für fundierte Entscheidungen essenziell sind. Direkte Demokratie stärkt die Beteiligung der Gesellschaft und sorgt für eine Politik, die sich an den Bedürfnissen der Bevölkerung orientiert.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir lehnen dies ab, da Kinder unter 14 Jahren noch in ihrer Entwicklung stehen und für ihr Handeln nicht die gleiche Verantwortung tragen können wie Erwachsene. Statt Strafen fordern wir verstärkte Präventionsarbeit, Erziehungshilfen und sozialpädagogische Maßnahmen, um Fehlverhalten frühzeitig zu begegnen. Strafrechtliche Maßnahmen bei Kindern setzen falsche Signale und lösen keine gesellschaftlichen Probleme.'
			},
			{
				state: State.Neutral,
				reason:
					'EU-Zölle auf klimafreundliche Produkte sollten nicht willkürlich aufrechterhalten werden oder dem Ziel der Verkehrswende im Weg stehen. Während kostengünstige Elektroautos den Zugang zur Elektromobilität erleichtern können, liegt unser Fokus auf dem Ausbau des öffentlichen Nahverkehrs und nachhaltiger Mobilitätskonzepte. Der Übergang zu weniger Individualverkehr ist entscheidend, um eine wirklich klimafreundliche und soziale Verkehrspolitik zu gestalten.'
			},
			{
				state: State.Approve,
				reason:
					'Wir unterstützen die doppelte Staats&shy;bürgerschaft, da sie Integration fördert und die Verbindung zu Herkunftsländern stärkt. Dies trägt zu einer offenen, vielfältigen Gesellschaft bei. Wir lehnen jedoch ab, sie als Instrument zur Erleichterung von Abschiebungen zu nutzen, wie es von Parteien wie der AfD gefordert wird. Unsere Haltung basiert auf Respekt für Identität und Rechte, nicht auf Abschiebepolitik.'
			},
			{
				state: State.Disprove,
				reason:
					'Es ist uns wichtig, jungen Menschen die freiwillige Möglichkeit zu geben, sich mit sozialen und ökologischen Aspekten auseinanderzusetzen und Verantwortung zu übernehmen. Diese wertvolle Erfahrung sollte jedoch nicht durch Zwang entstehen, sondern durch die freiwillige Entscheidung der Jugendlichen. Wir setzen uns für attraktive, gut entlohnte freiwillige soziale und ökologische Projekte ein, die junge Erwachsene dazu motivieren, sich aus eigenem Antrieb für das Gemeinwohl zu engagieren.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir setzen uns für den schnellstmöglichen Ausstieg aus fossilen Brennstoffen wie Öl und Gas ein, um den Klimawandel zu bekämpfen. Neue Heizungen sollen auf erneuerbare Energien umgestellt werden, wobei der Bund soziale Unterstützung für den Umstieg leisten muss. Geothermie, Wärmepumpen und Fernwärme sollen weiterhin erforscht, gefördert und ausgebaut werden.'
			},
			{
				state: State.Approve,
				reason:
					'Wir unterstützen die schrittweise Erhöhung des Mindestlohns auf mindestens 15€ bis 2026, um die Lebensrealität vieler Menschen zu verbessern. Langfristig setzen wir uns jedoch für einen Mindestlohn von mindestens 18€ ein, um eine echte Entlastung der Bevölkerung zu ermöglichen. Ein fairer Lohn ist der Grundstein für soziale Gerechtigkeit und ermöglicht es den Menschen, in Würde zu leben und an der Gesellschaft teilzuhaben.'
			}
		]
	},
	{
		name: 'Basisdemokratische Partei Deutschland',
		abbreviation: 'dieBasis',
		description:
			'DieBasis wurde 2020 im Umfeld der Proteste gegen die staatlichen Maßnahmen zur Bekämpfung der Covid-19-Pandemie gegründet. Sie spricht sich u. a. gegen eine Digitalisierung des Gesundheitssystems aus. DieBasis fordert zudem die Inbetriebnahme von „Nord Stream 2“ und Volks&shy;entscheide auf allen Ebenen.',
		logo: 'parties/dieBasis.png',
		positions: [
			{
				state: State.Disprove,
				reason:
					'Deutsche Waffenlieferungen in die Ukraine lehnen wir nachdrücklich ab! Krieg bringt schreckliches Leid für alle und muss als Mittel zur Durchsetzung politischer Ziele überall und ein für alle Mal geächtet werden! Die Bundesregierung sollte sich als neutraler Vermittler dafür einsetzen, alle Beteiligten an den Verhandlungstisch zurückzubringen. In den Verhandlungen sind alle Seiten zu hören und ernst zu nehmen, um auf dieser Grundlage eine für alle tragfähige friedliche Lösung zu finden.'
			},
			{
				state: State.Disprove,
				reason:
					'Die Erneuerbaren haben bereits einen hohen Anteil im deutschen Energiemix, der unter Berücksichtigung aller Aspekte des Zieldreiecks kaum noch gesteigert werden kann. dieBasis ist daher auch für unkonventionelle Lösungen offen und setzt sich für mehr Forschung und Investition in andere zukunftsorientierte Energiequellen und Verfahren ein, z. B. in synthetische Kraftstoffe, Dual-Fluid-Reaktoren oder in die Nutzung von Abfällen, Geothermie und Flusswasser.'
			},
			{
				state: State.Approve,
				reason:
					'Wer in der Lage ist, für seinen eigenen Lebensunterhalt zu sorgen, sollte dies auch tun. Solidarität und Unterstützung sollten alle bekommen, die in Not geraten sind. Wenn angemessene Stellenangebote mehrfach ohne schlüssige Begründung ablehnt werden, sollte dies Einfluss auf die Höhe des Bürgergeldes haben. Gleichzeitig ist hier auch die Debatte um ein bedingungsloses Grundeinkommen von Relevanz. Im Fall einer Einführung eines BGE würde die gesamte Debatte hierzu entfallen.'
			},
			{
				state: State.Neutral,
				reason:
					'Prinzipiell kann ein Tempolimit die Verkehrssicherheit erhöhen. Tempolimits sind jedoch nur dort sinnvoll, wo sie sowohl im Sinne der Verkehrssicherheit Straßen- und Wetterverhältnisse sowie die Fähigkeiten der Fahrzeuge und ihrer Fahrer berücksichtigen als auch im Interesse von Anwohnern und Umwelt vernünftig erscheinen. Ein einheitliches Limit ist nicht geeignet, Probleme zu lösen, Risiken zu minimieren und den Bedürfnissen der Fahrer gerecht zu werden.'
			},
			{
				state: State.Approve,
				reason:
					'Unsere Mitglieder sind mehrheitlich für eine Abweisung von Asylsuchenden, die über einen anderen EU-Staat einreisen. Das System der Entwicklungshilfe ist dringend überarbeitungsbedürftig und zwar auf internationaler Ebene. Vor allem sind hier die Profiteure der bisherigen Ausbeutung der sogenannten „dritten Welt“ in der Pflicht.'
			},
			{
				state: State.Approve,
				reason:
					'Wohnraum ist nicht nur ein Dach über dem Kopf, sondern ein fundamentales Menschenrecht – und das sollte für jeden erschwinglich und erreichbar sein. Um eine Erhöhung der Mietpreise zu vermeiden, sollte Leerstand wegen Spekulation verhindert und sanktioniert werden.'
			},
			{
				state: State.Disprove,
				reason:
					'Automatisierte Gesichtserkennungssysteme ermöglichen die einfache und schnelle Überprüfung einer Identität, ohne dass die Betroffenen dies bemerken. Der Vorgang des Erkennens kann massenhaft auch aus der Ferne und nachträglich erfolgen. Beim Einsatz von biometrischen Überwachungssystemen werden unsere Grundrechte oft ohne Rechtsgrundlage und unverhältnismäßig eingeschränkt, da diese Systeme unsere Freiheit gefährden, ohne wesentlich zu einer größeren Sicherheit beizutragen.'
			},
			{
				state: State.Neutral,
				reason:
					'dieBasis will keine Energie für Unternehmen aus Steuergeldern finanzieren. Dies widerspricht den Grundsätzen dieser Partei. Jedoch ist die ideologisch begründete „Energiewende“ gescheitert. Solange uns nicht wieder günstige Energie zur Verfügung steht, sollten wir zur Schadensbegrenzung dafür sorgen, dass nicht noch mehr energieintensive Unternehmen auswandern oder aufgeben müssen. Wir brauchen sofort eine bessere Politik.'
			},
			{
				state: State.Approve,
				reason:
					'Eine abschlagsfreie Rente nach 40 Beitragsjahren würde die soziale Gerechtigkeit fördern, da unterschiedliche Start- und Arbeitsbedingungen besser berücksichtigt werden könnten. Langjährige Arbeitsleistungen würden unabhängig vom Alter mehr gewürdigt werden. Die Lebensqualität vieler Menschen, insbesondere in körperlich fordernden Berufen, würde sich verbessern. Dies betrifft auch die Altersarmut mancher Gruppen.'
			},
			{
				state: State.Approve,
				reason:
					'Die europäische und somit auch die deutsche Identität ist tief im Christentum verwurzelt. Es prägt seit vielen Jahrhunderten ethische Überzeugungen, kulturelle Entwicklung und das soziale Miteinander. Auch dieBasis betrachtet den Menschen als ein spirituelles Wesen und Teil eines größeren Ganzen, sodass eine Mehrheit ihrer Mitglieder die Formulierung beibehalten möchte.'
			},
			{
				state: State.Disprove,
				reason:
					'Ausländische Fachkräfte werden gerade dort abgezogen, wo sie dringend gebraucht werden, was besonders die ärmeren Länder schwer trifft. Diese Ausbeutung von Ressourcen ist aus ethischen Gründen abzulehnen. Deutschland sollte besser auf die Aktivierung inländischen Potenzials, die Verbesserung von Arbeitsbedingungen und die Förderung nachhaltiger Lösungen setzen, statt soziale Spannungen durch u. a. verfehlte Arbeitsmarktpolitik und unzureichende Infrastruktur (Wohnraum etc.) zu verschärfen.'
			},
			{
				state: State.Approve,
				reason:
					'dieBasis lehnt die friedliche Nutzung von Kernenergie im Sinne des Zieldreiecks der Energiewirtschaft nicht grundsätzlich ab. Auf lange Sicht setzt dieBasis aber auf Zukunftstechnologien, welche die Kernspaltung überflüssig machen. So ist dieBasis offen für innovative Reaktortypen, wie beispielsweise Dual-Fluid-Reaktoren oder andere Flüssigsalz- oder Brutreaktoren.'
			},
			{
				state: State.Neutral,
				reason:
					'dieBasis nimmt hierzu eine neutrale Position ein. Es ist zweifelhaft, ob eine weitere Erhöhung des Spitzensteuersatzes von derzeit nahezu 48% (einschließlich Solidaritätszuschlag) zu einer größeren Steuergerechtigkeit führen würde. Eine Vereinfachung des Einkommensteuerrechts und der Abbau ungerechtfertigter Steuervorteile dürfte dem Ziel eher dienen. Eine massive Verschlankung des Steuersystems ist anzustreben.'
			},
			{
				state: State.Disprove,
				reason:
					'Um einer Zentralisierung im Bereich der Schulpolitik entgegenzuwirken, ist eine weitere Abgabe der Kompetenzen der Länder an den Bund abzulehnen. Es ist fraglich, ob der Bund einen höheren Sachverstand in der Schulpolitik hat als die Länder.'
			},
			{
				state: State.Disprove,
				reason:
					'Die Partei dieBasis lehnt deutsche Waffenlieferungen in Kriegsgebiete strikt ab! Außerdem fordern wir einen sofortigen Stopp der Kampfhandlungen, die Ausweitung der Hilfslieferungen für die Zivilbevölkerung, die Einhaltung des Völkerrechts, die Umsetzung der Sofortmaßnahmen zum Schutz der palästinensischen Bevölkerung im Gazastreifen und einen sofortigen bedingungslosen, dauerhaften Waffenstillstand!'
			},
			{
				state: State.Approve,
				reason:
					'Die Partei dieBasis steht für eine Reform und Entbürokratisierung der Finanzierung des Gesundheitssystems und für eine öffentliche Diskussion. Alle Erwerbstätigen – ohne Ausnahme – sollten in die gesetzliche Krankenkasse einzahlen. Unter dem Solidargedanken drängen sich Überlegungen hinsichtlich einer Abschaffung der Beitragsbemessungsgrenzen auf.'
			},
			{
				state: State.Approve,
				reason:
					'dieBasis ist die Partei mit dem höchsten Frauenanteil (ca. 52 %). Frauenquoten werden innerhalb der Partei aus verschiedenen Gründen egal in welcher Branche überwiegend kritisch gesehen. So wird eine Stigmatisierung als „Quotenfrau" befürchtet und es wird bezweifelt, ob wirklich überall ein strukturelles Problem vorliegt. Falls ja, wäre das Problem besser zu lösen, indem Maßnahmen zur Förderung der Chancengleichheit und zur Beseitigung der Hindernisse für Frauen im Beruf ergriffen werden.'
			},
			{
				state: State.Approve,
				reason:
					'Ziel der Basis ist die Ernährungssouveränität Deutschlands bei gleichzeitigem Erhalt der Ressourcen Boden und Wasser sowie Schutz der Natur und Kulturlandschaften. dieBasis will die Landwirtschaft im Einvernehmen mit allen bestehenden Betrieben schrittweise in regenerativen und ökologischen Anbau umwandeln. Der Einfluss von Konzernen muss eingedämmt werden. Weitere Maßnahmen sind die Reform der öffentlichen Ausbildung, der Einsatz innovativer Methoden und die Zurückdrängung der EU-Bürokratie.'
			},
			{
				state: State.Disprove,
				reason:
					'Jede Form von Extremismus und totalitären Strömungen lehnt dieBasis entschieden ab. Unabhängig davon, ob sie aus dem linken oder rechten Spektrum kommen. Dennoch sind wir dagegen, Steuergelder für die Förderung oder Bekämpfung einzelner politischer Ansichten auszugeben. Abgesehen davon, dass der Begriff des Rechtsextremismus durch die Medien inzwischen sehr verwässert ist, sind Projekte gegen politische Strömungen einer Gesellschaft als antidemokratisch und spaltend einzustufen.'
			},
			{
				state: State.Neutral,
				reason:
					'dieBasis unterstützt in erster Linie Maßnahmen zur Regionalisierung der Produktion und damit die Verkürzung von Lieferketten. Darüber hinaus steht die Partei für Maßnahmen zum Schutz der Menschenrechte und der Umwelt. Allerdings ist das Lieferkettengesetz ein Bürokratiemonster, das eine lückenlose Kontrolle anstrebt, die Unternehmen zusätzlich belastet und die Verbraucherpreise in die Höhe treibt.'
			},
			{
				state: State.Approve,
				reason:
					'dieBasis setzt sich dafür ein, dass die Ausbildungsförderung BAföG weiterhin abhängig vom Einkommen der Eltern gezahlt wird. Allerdings sollte dabei immer die individuelle, persönliche Situation der Studierenden betrachtet werden.'
			},
			{
				state: State.Approve,
				reason:
					'Eine Aufhebung der Schuldenbremse heizt die Inflation an, verleitet die Regierung zu einer unsoliden Finanzpolitik, führt zu einer noch höheren Zinsbelastung und belastet künftige Generationen. Deshalb ist dieBasis gegen eine Aufhebung der Schuldenbremse.'
			},
			{
				state: State.Approve,
				reason:
					'Mehr als acht Monate warteten 2024 Asylsuchende im Schnitt, bis ihr Asylverfahren abgeschlossen war. Die Möglichkeit, gleich zu arbeiten, erleichtert nicht nur die Integration und das Erlernen der deutschen Sprache, sondern auch Entscheidungen über Asylanträge. dieBasis fordert daher Beschäftigungsangebote für Asylbewerber, bis die Asylanträge abgeschlossen sind. Integrierte Asylbewerber mit gesicherter Berufstätigkeit und guten deutschen Sprachkenntnissen sollten ein Bleiberecht erhalten.'
			},
			{
				state: State.Approve,
				reason:
					'Der Schutz unserer Umwelt ist eine wichtige Aufgabe. Dabei wird „klimaneutral“ häufig als ideologisch geprägter Begriff verwendet. Dieser Begriff müsste erst mal sachlich und fachlich definiert werden, bevor er als Maßstab dient. Einen einzelnen Faktor wie die CO2- Belastung herauszuheben, wird den komplexen Aspekten dieses Themas nicht gerecht. Unabhängig davon will dieBasis eine stärkere Beteiligung der Bevölkerung insbesondere bei so wichtigen und generationsübergreifenden Entscheidungen.'
			},
			{
				state: State.Neutral,
				reason:
					'Obwohl eine 35-Stunden-Woche positive soziale Effekte haben könnte, gibt es vielfältige wirtschaftliche und organisatorische Herausforderungen, die berücksichtigt werden müssen. dieBasis fordert ein flexibles Gesamtkonzept, das dem Beamten genauso gerecht wird wie der Saisonarbeiterin, dem Sekretär und der Pilotin.'
			},
			{
				state: State.Approve,
				reason:
					'Vor dem Eingriff sollte es eine Beratung geben, damit schwangere Frauen informierte und fundierte Entscheidungen treffen können und nicht aus einer Not heraus eine Entscheidung treffen, die sie später vielleicht bereuen. Hilfreich, insbesondere für Alleinerziehende wäre es, wenn es wieder mehr Gemeinschaft in unserer Gesellschaft gäbe. Auch eine ungewollt schwanger gewordene Frau muss angstfrei und finanziell abgesichert leben können.'
			},
			{
				state: State.Neutral,
				reason:
					'Diese Frage wird in der Basis noch kontrovers diskutiert, wobei auch über ein Zwei-Währungssystem nachgedacht wird. So könnten lokale Währungen z. B. in Form von Regionalgeld als Tauschmittel eingesetzt werden, um regionale Wirtschaftskreisläufe zu stärken, während die Vorteile einer gemeinsamen europäischen Währung erhalten blieben.'
			},
			{
				state: State.Approve,
				reason:
					'Investitionen in neue oder modernisierte Verkehrsinfrastruktur wünschen wir uns vorwiegend im Schienenfernverkehr und im öffentlichen Nahverkehr. Oberste Priorität hat für uns, die bereits vorhandene Verkehrsinfrastruktur sowohl auf der Schiene als auch auf der Straße funktionstüchtig zu erhalten. dieBasis befürwortet außerdem eine stärkere Regionalisierung und die Stärkung mittelständiger Unternehmen. Konsequent umgesetzt kann durch kürzere Wege und Logistikketten Verkehr vermieden werden.'
			},
			{
				state: State.Approve,
				reason:
					'Die Anrechnung ehrenamtlicher Tätigkeiten auf die Rente würdigt ihren gesellschaftlichen Wert, fördert Engagement und soziale Gerechtigkeit. Sie könnte mehr Menschen motivieren, sich stärker einzubringen, und kompensiert Einkommensverluste durch weniger Erwerbsarbeit. Dies stärkt das Ehrenamt als Pfeiler des Gemeinwohls, hilft, Altersarmut zu mindern, und zeigt, dass freiwillige Leistungen für die Gesellschaft geschätzt und honoriert werden.'
			},
			{
				state: State.Neutral,
				reason:
					'Die Umlegung minimiert Risiken und erleichtert die Kostendeckung auf Vermieterseite, reduziert aber auch Anreize für Vermieter, effizient mit Wohnraum umzugehen. Gleichzeitig sorgt sie für soziale Ungerechtigkeit, auch deshalb, weil besonders in Gebieten mit Wohnraummangel und für einkommensschwache Mieter selbst bei angemessenen Wohnflächen hohe Belastungen entstehen. dieBasis steht für differenzierte Lösungen (z.B. Staffelung, Grundsteuerreform), die zu mehr Gerechtigkeit führen können.'
			},
			{
				state: State.Disprove,
				reason:
					'Das Streikrecht ist ein zentrales Element des Grundrechts aus Artikel 9. Eine Einschränkung höhlt demokratische Werte aus und führt durch die Schwächung der Verhandlungsmacht der Arbeitnehmer zu einer einseitigen Bevorzugung der Arbeitgeber. Die derzeitige Gesetzeslage führt nicht zu einer unzumutbaren Gefährdung der Bevölkerung oder einer Unterbrechung ihrer Versorgung mit lebenswichtigen Dingen.'
			},
			{
				state: State.Approve,
				reason:
					'Direkte Demokratie, Bürgerentscheide und Volksabstimmungen gehören zur DNA der Basis. Deshalb befürworten die Mitglieder jede Möglichkeit, die Menschen selbst mitbestimmen und entscheiden zu lassen. Die Partei dieBasis fordert zudem, die Bürgerinitiative durch ein Initiativrecht aufzuwerten und die unverhältnismäßig hohen Quoren zu senken.'
			},
			{
				state: State.Approve,
				reason:
					'Schwere Gewaltstraftaten sind bei Kindern unter 14 Jahren überproportional gestiegen. Knappe 51 % der befragten Mitglieder haben trotz rechtlicher, ethischer, pädagogischer und entwicklungspsychologischer Bedenken für strafrechtliche Konsequenzen gestimmt. Der Schutz von Opfern und der Gesellschaft vor schweren Straftaten, das Schließen von Lücken im Strafrecht sowie das Gerechtigkeitsempfinden waren hier ausschlaggebend.'
			},
			{
				state: State.Neutral,
				reason:
					'Innerhalb der Partei dieBasis ist die Frage noch nicht abschließend geklärt. Zwar würden Zölle heimische Hersteller schützen, Arbeitsplätze sichern und Wettbewerbsbedingungen ausgleichen. Gleichzeitig könnten sie jedoch auch höhere Preise für Verbraucher, Handelskonflikte und mögliche Gegenmaßnahmen Chinas verursachen.'
			},
			{
				state: State.Neutral,
				reason:
					'Es gibt in unserer Partei eine rege Diskussion über das Für und Wider, zB bezüglich einer wirtschaftlichen Benachteiligung Deutschlands durch Bürger mit doppelter Staatsangehörigkeit. Der Erwerb der deutschen Staats&shy;bürgerschaft sollte von Faktoren wie Integrationsfähigkeit, guten deutschen Sprachkenntnissen und Identifikation mit der Kultur abhängig gemacht werden. Niemand sollte gezwungen werden, die bisherige Staats&shy;bürgerschaft dafür abzulegen, um Menschen nicht in innere Konflikte zu bringen.'
			},
			{
				state: State.Neutral,
				reason:
					'Für dieBasis ist ein soziales Jahr nicht nur eine wichtige Möglichkeit zur individuellen Reifung der Persönlichkeit, sondern auch gesamtgesellschaftlich sinnvoll und notwendig. Pflicht und Zwang halten viele Basismitglieder jedoch nicht für die geeigneten Mittel, Eigenverantwortung, Solidarität, Empathie und Sozialverhalten zu stärken. Eher kann die Pflicht in Form von (finanziellen) Anreizen, z. B. bei Studium (elternunabhängiges BAföG) und Ausbildung (Meisterschule), umgesetzt werden.'
			},
			{
				state: State.Approve,
				reason:
					'dieBasis steht zur Technologieoffenheit beim Thema Heizen und Gebäudeisolation. Aber auf Haus- und Wohnungseigentümer darf kein politischer Zwang zur Innovation und hohen Investitionen ausgeübt werden. Die Möglichkeit, verschiedene Heizarten zu wählen, hilft außerdem, eine ausgewogene Nutzung der Energieressourcen herzustellen und eine Überlastung der Stromnetze durch Gebäudeheizung zu vermeiden.'
			},
			{
				state: State.Neutral,
				reason:
					'Angesichts der aktuellen wirtschaftlichen Lage und der viel zu hohen Lohnnebenkosten stehen wir einer Erhöhung des Mindestlohns kritisch gegenüber. Einerseits ist angesichts der stark gestiegenen Lebenshaltungskosten eine Erhöhung des Mindestlohnes mehr als gerechtfertigt. Andererseits wollen wir nicht die Existenz von noch mehr Unternehmen gefährden. Hier muss dringend ein schlüssiges, funktionierendes Gesamtkonzept entworfen werden.'
			}
		]
	},
	{
		name: 'Partei für Arbeit, Rechtsstaat, Tierschutz, Elitenförderung und basisdemokratische Initiative',
		abbreviation: 'Die PARTEI',
		description:
			'Die PARTEI wurde 2004 gegründet. In ihrer politischen Arbeit bedient sie sich satirischer Mittel, die sie mit ernsthaften Kernanliegen wie z. B. dem Abbau sozialer Ungleichheit verbindet. Seit 2014 gewann sie bei den Wahlen zum Europäischen Parlament jeweils ein Mandat bzw. zwei Mandate.',
		logo: 'parties/die_partei.png',
		positions: [
			{ state: State.Neutral, reason: 'Kein Weltkrieg ohne Deutschland!' },
			{
				state: State.Approve,
				reason:
					'Nicht nur das: Die Energieinfrastruktur ist, genau wie Telekommunikation und Versorgungswege, von höchster Sensibilität und Wichtigkeit für das Bestehen einer Gesellschaftsform und gehört damit komplett in staatliche Hand. Mit Die PARTEI wird alles so billig, wie noch nie!'
			},
			{
				state: State.Disprove,
				reason:
					'Bürgergeld wird abgeschafft und Armut unter Strafe gestellt: Wer es wagt unter die Armutsgrenze zu fallen kriegt SOFORT ein bedingungsloses Grundeinkommen. Die PARTEI testet dies gerade Deutschlandweit über kommunale Mandate.'
			},
			{
				state: State.Approve,
				reason:
					'Die PARTEI steht wie keine andere Partei für Freiheit und Individualität. Es sollte niemandem verboten sein, seinen Boliden voll auszureizen und damit sich selbst und die Umwelt in Lebensgefahr zu bringen. Allerdings sind wir auch eine populistische Schmierenpartei und erkennen ein gesteigertes Interesse an Tempolimits. Als Kompromiss wird Kanzler Harapat sich für ein Tempolimit von 330km/h (auch auf Landstraßen) einsetzen, das dürfte allen Interessengruppen zugute kommen.'
			},
			{
				state: State.Disprove,
				reason:
					'Asylsuchende sollen an der Grenze aufgeklärt werden über die Demokratiekrise, Demografiekrise, Wirtschaftskrise, Nahverkehrskrise, Wohnungskrise, Klimakrise und Bildungskrise in Deutschland. Wenn sie dann immer noch rein wollen, tragen wir sie auf Händen zu einem Arbeitsplatz ihrer Wahl.'
			},
			{
				state: State.Approve,
				reason:
					'Das bringt nichts, die Mieten sind sowieso viel zu hoch. Künftig muss eine Wohnung bei Neuvermietung 5% günstiger vermietet werden. Dies schafft Anreize den Wohnungsmarkt straffer und effizienter zu führen und nach Lean Management umzuorganisieren. Nur so kann auch in diesem Bereich Innovation einziehen.'
			},
			{
				state: State.Disprove,
				reason:
					'Eine lückenlose Überwachung des öffentlichen und privaten Raums ist in Zukunft dringend angebracht. Künstliche Intelligenz ist dabei sicherlich sehr hilfreich und in der Regel auch nicht dümmer als natürliche Intelligenz (vgl. Markus Söder). Abgesehen davon sind auch wir als PARTEI dringend an Bewegungs- und Interessensprofilen aller Wähler interessiert, um daraus algorithmusgesteuerte Maßnahmen zur Verbesserung unserer Wahlergebnisse abzuleiten, notfalls auch mit angemessener Gewalt.'
			},
			{
				state: State.Disprove,
				reason:
					'Das ist nicht nötig. Kanzler Harapat wird für eine schnelle und grundlegende Neuaufstellung des Energiemarktes sorgen und die Preise schmelzen lassen wie Polkappen. Strom wird so billig, dass man künftig dafür bezahlt werden müsste, ihn überhaupt abzunehmen.'
			},
			{
				state: State.Approve,
				reason:
					'Nach 40 JAHREN?! Da zählen dann aber 20 Jahre Philosophiestudium bereits dazu, oder? ODER?!'
			},
			{ state: State.Disprove, reason: 'Vallah, nein.' },
			{
				state: State.Approve,
				reason: 'Noch vier Jahre Wirtschaftsminister Habeck und wir brauchen keine Fachkräfte mehr.'
			},
			{
				state: State.Disprove,
				reason:
					'Als Partei des Fortschritts fordern wir schon lange eine Erhöhung der Ziele für erneuerbare Energien. Gleichzeitig liegen uns aber auch die vielen Kumpel im Ruhrgebiet und im ostdeutschen Ödland am Herzen, die wir als Wählerklientel hinzugewinnen möchten. Daher steht die PARTEI auch für einen Weiterbetrieb bestehender Kohleförderung, sowie den Wiederaufbau bereits stillgelegter Kohlekraftwerke. Wir haben nunmal alle lieb!'
			},
			{
				state: State.Approve,
				reason:
					'Das ist eine Neiddebatte, die unter Kanzler Harapat keine Relevanz mehr haben wird. Wenn es allen gut geht und alle genug haben, braucht es keinen missgünstigen Blick auf die Einkommen und Besteuerungen anderer. Außerdem geht das Thema am Kern des Problems vorbei, denn der Spitzensteuersatz greift nur bis zu einem zu versteuernden Jahreseinkommen von 277.825 Euro. Danach ist der Höchststeuersatz fällig. Warum sich also am lächerlichen Mittelstand abarbeiten?'
			},
			{
				state: State.Approve,
				reason:
					'"1er Abi für Ale!", verspricht Kanzler Harapat von Die PARTEI verschmitzt, während er mit den Fingernägeln über die Tafel fährt.'
			},
			{
				state: State.Neutral,
				reason:
					'Deutschland sollte Waffen an beide Seiten liefern, um einen maximalen Gewinn zu erwirtschaften, der den Verlust durch die an die Ukraine verschenkten Waffen wieder ausgleicht. Irgendwer muss ja an die deutsche Wirtschaft denken.'
			},
			{
				state: State.Approve,
				reason:
					'Klares Ja! Solange Bessersituierte nicht die gleichen Schikanen erleiden, wie der niedere Pöbel, wird das Gesundheitssystem sich weiter zu Lasten einer Gruppe entwickeln. Nur der Pöbel hat die Chance, sich durch lange Wartezeiten in überfüllten Wartezimmern voller Scheintoter ordentlich abzuhärten und ein starkes Immunsystem zu entwickeln. Diese armen Kreaturen lernen mit sowas umzugehen und sind somit vitaler und widerstandsfähiger als Reiche. Das ist unfair!'
			},
			{
				state: State.Disprove,
				reason:
					'Nein. Stattdessen sollen börsennotierte Unternehmen abgeschafft werden: Kasinokapitalismus sollte ausschließlich Aufgabe der Glücksspielbranche sein. Außerdem arbeitet die momentane Regierung bereits hart an der Gesundschrumpfung unserer Wirtschaft, das werden wir kompetent fortführen.'
			},
			{
				state: State.Approve,
				reason:
					'Ökologische Landwirtschaft ist eine nette Träumerei, geht aber an der Realität vorbei. Ökologische Landwirtschaft ist den Launen der Natur unterworfen und damit mangelhaft, das Überleben der Menschheit lässt sich nur durch die Erschaffung sehr große Früchte sicherstellen (Pestizide, Genmanipulation). Sicher, dadurch können Mensch und Tier zu Schaden kommen, aber wollen Sie lieber alt an Krebs oder jung an Hunger sterben?'
			},
			{ state: State.Approve, reason: 'Nazis töten.' },
			{
				state: State.Approve,
				reason:
					'Ja. Es ist wichtig, um teuer ausgebildete, aber im Grunde nutzlose Studienabsolventen so zu beschäftigen, dass dennoch genug Einkommenssteuer beim Gesetzgeber landet. Kontrolle ist also gut, Konsequenzen wären jedoch noch zu weit gegriffen. Hierfür soll es eine Karenzzeit von 45 Jahren geben. Man kann die Welt nicht an einem Tag retten.'
			},
			{
				state: State.Disprove,
				reason:
					'Eltern sind Teil der Familie und Familien sind bekanntlich die Keimzelle des Faschismus. Niemand sollte sich auf das Einkommen von Faschisten verlassen müssen! BAföG unabhängig von den Eltern und solange man will! Sollten Sie kritische Eltern haben, melden Sie sie.'
			},
			{
				state: State.Disprove,
				reason:
					'Nein, sie ist völlig unnötig. Schulden werden traditionell vererbt und mit diesem Brauch wollen wir nicht brechen.'
			},
			{
				state: State.Approve,
				reason:
					'Um sich bestmöglich zu integrieren ist die Lohnarbeit, als Deutschlands liebstes Hobby, wertvollstes Kulturgut und dramatischste Gesundheitsgefährdung. Ein gutes Mittel, sich wieder besser auf die eigenen Werte zu konzentrieren.'
			},
			{
				state: State.Disprove,
				reason:
					'Deutschland sollte vor allem offener für die Möglichkeiten durch den Klimawandel werden. Was haben wir denn schon zu verlieren, außer dass Frankreich im Atlantik versinkt? Und wäre das wirklich so ein großer Verlust? Chancen sind Chancen und Gefahren nur dornige Chancen!'
			},
			{
				state: State.Approve,
				reason:
					'Die arbeitsfähigen Generationen unserer Zeit haben kein Rentenglück und keinen vergoldeten Lebensabend mehr zu erwarten. Fünf Stunden sind da das Mindeste, um in der Woche schon mal ein bisschen zu rentnern.'
			},
			{ state: State.Disprove, reason: 'Alles raus was keine Miete zahlt.' },
			{
				state: State.Disprove,
				reason:
					'Nein. Statt kleiner zu denken, arbeitet Die PARTEI schon seit Jahren aus dem Verborgenen heraus daran, den Euro durch eine Weltwährung zu ersetzen. Schon heute bekommt man an Raststätten, Bahnhöfen und in Kaufhäusern Sanifair-Wertbons, welche nach unserer Vorstellung über alle Landesgrenzen und Frontlinien hinaus als stabile Währung funktionieren sollen.'
			},
			{
				state: State.Approve,
				reason:
					'Seien wir an der Stelle doch mal ehrlich: der ÖPNV in Deutschland ist vollkommen ruiniert, ineffizient und unwirtschaftlich. Es bringt doch auch nichts mehr, immer mehr Geld auf ein Problem zu werfen, das sich absehbar nicht mehr in den Griff kriegen lässt. Kanzler Harapat geht hier mit mutigem Enthusiasmus voran und wird dem ÖPNV in Deutschland ein Ende setzen. Es kann nur über Probleme gemeckert werden, die es gibt und ein Zug, den es nicht gibt, kann nicht ausfallen oder zu spät kommen.'
			},
			{
				state: State.Approve,
				reason: 'äh jaaaaa...wie viel kriegen wir nach bis jetzt schon 20 Jahren Die PARTEI?'
			},
			{
				state: State.Disprove,
				reason:
					'Wir plädieren für eine Kollektivierung von Parkstraße und Schlossallee. Vermieter begeben sich direkt ins Gefängnis und ziehen keine weiteren 1473 € kalt für 47 qm Paterre ein.'
			},
			{
				state: State.Disprove,
				reason:
					'Nein. Wir haben Angst vor der Kritik von Kritikern, die in Unternehmen der kritischen Infrastruktur arbeiten und Kritik an der Entscheidung äußern könnten. Kritisch!'
			},
			{
				state: State.Approve,
				reason:
					'Ja. Diese sollen dann die wirklich wichtigen Fragen, wie "Was gibt#apos#s heute zu Essen?" und "Wer bringt den Müll raus?" behandeln.'
			},
			{ state: State.Disprove, reason: 'Holt die Kinder von der Straße, lasst sie arbeiten.' },
			{
				state: State.Approve,
				reason:
					'Nein, ganz im Gegenteil. Während deutsche Autobauer E-Autos zum Jahreseinkommen ihrer Vorarbeiter anbieten, hat sich der chinesische Automarkt genau die Zielgruppe des deutschen kleinen Mannes und seiner Frau ausgeguckt, um unsere Straßen mit ihren Produkten zu überfluten! Das kann doch niemand wollen, daher sollten die Einfuhrzölle deutlich erhöht werden.'
			},
			{
				state: State.Approve,
				reason: 'Wir haben Verständnis, dass man in den heutigen Zeiten einen Plan B braucht.'
			},
			{ state: State.Approve, reason: 'Ja ok.' },
			{
				state: State.Disprove,
				reason:
					'Zu fossilen Brennstoffen zählen außerdem Naturwälder, Schnitzel und die Zukunft eurer Kinder.'
			},
			{
				state: State.Approve,
				reason:
					'Der Mindestlohn muss an wichtige Dinge des Alltags gekoppelt sein und entsprechend automatisch steigen. Von einer Stunde Arbeit muss man sich ein gutes Abendessen, bestehend aus einem Döner, einem Durstlöscher und einer Schachtel Kippen, kaufen können.'
			}
		]
	},
	{
		name: 'Die Gerechtigkeitspartei - Team Todenhöfer',
		abbreviation: 'Die Gerechtigkeitspartei - Team Todenhöfer',
		description:
			'Die Gerechtigkeitspartei – Team Todenhöfer wurde 2020 vom ehemaligen CDU-Abgeordneten Jürgen Todenhöfer gegründet. Sie setzt sich für die Beendigung der Auslandseinsätze der Bundeswehr ein, ist gegen nationale klimapolitische Alleingänge und fordert u. a. den Bau von einer Million Wohnungen jährlich.',
		logo: 'parties/die_gerechtigkeitspartei.png',
		positions: [
			{
				state: State.Disprove,
				reason:
					'Wir als Gerechtigkeitspartei setzen auf kluge Diplomatie und konstruktive Verhandlungen, um Konflikte zu lösen. Waffenlieferungen in Kriegs- und Krisengebiete lehnen wir strikt ab. Wir glauben an den Dialog und an friedliche Lösungen, um langfristigen Frieden zu sichern. Unsere Politik setzt auf Zusammenarbeit und den Schutz von Menschenleben, statt auf militärische Eskalation.'
			},
			{
				state: State.Approve,
				reason:
					'Der Übergang zu erneuerbaren Energien ist ein zentraler Bestandteil der Klimapolitik unserer Partei – jedoch muss er klug und vorausschauend gestaltet werden. Wir setzen auf innovative Lösungen, die sowohl ökologische Nachhaltigkeit als auch wirtschaftliche Effizienz fördern. Nur durch eine gut durchdachte Strategie können wir die Energiewende erfolgreich und zukunftsfähig gestalten.'
			},
			{
				state: State.Approve,
				reason:
					'Wir von der Gerechtigkeitspartei betonen die Bedeutung von Eigenverantwortung, doch soziale Härten dürfen dabei nicht ignoriert werden. Das Bundesverfassungsgericht hat klare, verfassungskonforme Kriterien festgelegt, die den Umfang der Unterstützung regeln. Diese Vorgaben bieten eine ausgewogene Grundlage, um Solidarität und Eigenverantwortung miteinander in Einklang zu bringen.'
			},
			{
				state: State.Neutral,
				reason:
					'Wir von der Gerechtigkeitspartei unterstützen ein sinnvolles Tempolimit als Maßnahme zur Verbesserung der Verkehrssicherheit und des Umweltschutzes. Rasen ist kein Menschrecht! Ein Tempolimit trägt zur Reduzierung von Unfällen und Emissionen bei und fördert eine verantwortungsbewusste und nachhaltige Mobilität.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir von der Gerechtigkeitspartei fordern eine humanitäre Asylpolitik und unterstreichen die Verantwortung Deutschlands innerhalb Europas. Die Herausforderungen der Asylpolitik können nur in einem vereinten Europa gemeinschaftlich und solidarisch gelöst werden. Zusammenhalt und Kooperation sind der Schlüssel zu einer nachhaltigen Lösung.'
			},
			{
				state: State.Approve,
				reason:
					'Wir von der Gerechtigkeitspartei setzen uns für den sozialen Wohnungsbau und faire Mietpreise ein, um soziale Ungleichheit zu reduzieren. Jeder Mensch verdient ein sicheres und bezahlbares Zuhause. Durch eine gerechte Wohnungsmarktpolitik schaffen wir bessere Lebensbedingungen und fördern den sozialen Zusammenhalt.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir von der Gerechtigkeitspartei sehen diese Technologie kritisch, da sie erhebliche Datenschutzbedenken und Risiken für den Missbrauch in einem überbordenden Überwachungsstaat mit sich bringt. Wir setzen uns für den Schutz individueller Rechte und eine ausgewogene Technologiepolitik ein, die die Privatsphäre wahrt und unzulässige Überwachung verhindert.'
			},
			{
				state: State.Disprove,
				reason:
					'Der Staat muss für eine wirtschaftlich wettbewerbsfähige deutsche Stromversorgung sorgen, anstatt eine Dauersubventionierung in einem unwirtschaftlichen Umfeld zu finanzieren. Wir als Gerechtigkeitspartei setzen uns für eine nachhaltige Energiepolitik ein, die Innovationen fördert, Kosten senkt und gleichzeitig die Versorgungssicherheit gewährleistet. Ziel ist es, den Energiemarkt zukunftsfähig und für alle Bürger bezahlbar zu gestalten.'
			},
			{
				state: State.Approve,
				reason:
					'Wir von der Gerechtigkeitspartei fordern eine gerechte Rentenpolitik, die langjährige Arbeit anerkennt und Altersarmut effektiv reduziert. Dafür ist eine umfassende Rentenreform notwendig – ein Thema, das bislang von keiner Partei ernsthaft angegangen wurde. Wir nehmen es in Angriff und setzen uns für eine zukunftsfähige Rentenlösung ein, die allen gerecht wird.'
			},
			{
				state: State.Approve,
				reason:
					'Wir von der Gerechtigkeitspartei betonen die Bedeutung ethischer Werte und Traditionen als Grundlage für politische Entscheidungen. Während wir die Bedeutung des Grundgesetzes anerkennen, liegt unser Fokus auf den vorrangigen Herausforderungen, die unser Land aktuell betreffen. Es ist entscheidend, konkrete Probleme zu lösen, statt unnötig an der Präambel des GG zu arbeiten.'
			},
			{
				state: State.Approve,
				reason:
					'Wir von der Gerechtigkeitspartei betrachten qualifizierte Zuwanderung als einen entscheidenden Faktor für die wirtschaftliche und gesellschaftliche Entwicklung. Durch die gezielte Integration von Fachkräften stärken wir unsere Wettbewerbsfähigkeit und fördern Vielfalt und Innovation in unserer Gesellschaft. Eine weltoffene, zukunftsfähige Politik ist der Schlüssel zu nachhaltigem Wachstum.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir von der Gerechtigkeitspartei sehen erneuerbare Energien als nachhaltigere und sicherere Alternative zur Kernkraft. Gleichzeitig erkennen wir die Notwendigkeit, die Forschung an weiteren sicheren und innovativen Energiequellen stark zu fördern, um langfristig eine vielfältige und zukunftsfähige Energieversorgung sicherzustellen.'
			},
			{
				state: State.Approve,
				reason:
					'Wir als Gerechtigkeitspartei setzen uns für eine spürbare Entlastung der Mittelschicht und eine ausgewogene Steuerpolitik ein. Ziel ist es, die steuerliche Belastung fair zu verteilen, sodass alle Bürger gerecht behandelt werden. Durch eine intelligente Steuerpolitik schaffen wir die Grundlage für mehr finanzielle Entlastung und stärken die wirtschaftliche Stabilität unserer Gesellschaft.'
			},
			{
				state: State.Approve,
				reason:
					'Wir von der Gerechtigkeitspartei setzen uns für einheitliche Standards und dringend notwendige Reformen im Bildungssystem ein. Bildungsgerechtigkeit und Qualität dürfen nicht vom Wohnort abhängen. Unser Ziel ist ein modernes, zukunftsfähiges Bildungssystem, das allen Kindern und Jugendlichen gleiche Chancen bietet.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir als Gerechtigkeitspartei lehnen jedes Apartheidssystem sowie den Genozid und Menschenrechtsverletzungen gegenüber dem palästinensischen Volk strikt ab. Wir setzen uns für die Achtung der Menschenrechte, Gerechtigkeit und Frieden für alle Völker ein. Es ist unser Ziel, Diskriminierung und Gewalt zu beenden und einen fairen, nachhaltigen Frieden in der Region zu fördern, der die Rechte und die Würde jedes Einzelnen respektiert.'
			},
			{
				state: State.Approve,
				reason:
					'Wir von der Gerechtigkeitspartei streben ein solidarisches Gesundheitssystem auf hohem Niveau für alle Bürgerinnen und Bürger an. Erweiternde Leistungen sollten individuell privat abgesichert werden können. Ob ein Mehrkassensystem bei der Umsetzung sinnvoll oder eher hinderlich ist, muss im Rahmen der Umsetzungsplanung gründlich geprüft werden. Unser Ziel bleibt ein gerechtes, effizientes und zukunftsfähiges Gesundheitssystem für alle.'
			},
			{
				state: State.Approve,
				reason:
					'Wir von der Gerechtigkeitspartei betrachten freiwillige Maßnahmen und faire Chancen als zielführender für die Gleichstellung. Arbeitgeber benötigen hierbei Unterstützung durch staatlich geschaffene Rahmenbedingungen, um gleiche Chancen für alle zu fördern. Gemeinsam schaffen wir eine gerechte und partnerschaftliche Arbeitswelt.'
			},
			{
				state: State.Approve,
				reason:
					'Natürlich fördern wir als Gerechtigkeitspartei die ökologische Landwirtschaft als wichtigen Beitrag zum Umwelt-, Klima- und Gesundheitsschutz. Durch nachhaltige Anbaumethoden unterstützen wir nicht nur den Erhalt der natürlichen Ressourcen, sondern tragen auch dazu bei, gesunde Lebensmittel für alle zu sichern und die Klimaziele zu erreichen. Eine ökologische Landwirtschaft ist der Schlüssel zu einer zukunftsfähigen und gerechten Ernährungspolitik.'
			},
			{
				state: State.Approve,
				reason:
					'Wir von der Gerechtigkeitspartei lehnen jede Form von Extremismus ab und setzen uns für verstärkte präventive sowie aufklärende Maßnahmen ein. Nur durch frühzeitige Aufklärung und gezielte Prävention können wir den gefährlichen Entwicklungen entgegenwirken und eine offene, tolerante Gesellschaft bewahren.'
			},
			{
				state: State.Approve,
				reason:
					'Wir als Gerechtigkeitspartei setzen uns für verbindliche Standards in globalen Lieferketten ein, ohne jedoch überbordende Bürokratie zu schaffen, bei der die Verantwortung nur symbolisch weiterdelegiert wird. Wir fordern klare, praktikable Regelungen, die Unternehmen zur Einhaltung von Menschenrechten und Umweltschutz verpflichten, ohne den bürokratischen Aufwand unnötig zu steigern. So schaffen wir einen fairen und transparenten globalen Handel.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir von der Gerechtigkeitspartei fordern Chancengleichheit für alle und sprechen uns für eine unabhängige Förderung aus. Nur durch eine faire und unvoreingenommene Unterstützung können individuelle Potenziale voll entfaltet und eine gerechte Gesellschaft gestaltet werden.'
			},
			{
				state: State.Approve,
				reason:
					'Steuerverschwendung muss vermieden, Rüstungsausgaben begrenzt und Bürokratie real abgebaut werden. Nur so kann Deutschland auch mit Rekordsteuereinnahmen effektiv und nachhaltig umgehen. Als Gerechtigkeitspartei setzen wir uns dafür ein, dass öffentliche Mittel gezielt und verantwortungsvoll eingesetzt werden, um die Lebensqualität der Bürger zu verbessern und gleichzeitig die Effizienz des Staates zu steigern.'
			},
			{
				state: State.Approve,
				reason:
					'Wir von der Gerechtigkeitspartei sehen Arbeit als Schlüssel zur Integration und Förderung der Eigenverantwortung. Durch den Zugang zu fairer Beschäftigung schaffen wir nicht nur wirtschaftliche Teilhabe, sondern auch soziale Integration und eine nachhaltige Perspektive für alle.'
			},
			{
				state: State.Disprove,
				reason:
					'Klimaneutralität ist ein zentrales Ziel der Gerechtigkeitspartei, das wir als Verpflichtung zur globalen Verantwortung und nachhaltigen Entwicklung verstehen. Wir setzen uns für eine ambitionierte Klimapolitik ein, die den Weg zu einer grünen, zukunftsfähigen Gesellschaft ebnet – für den Planeten und kommende Generationen.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir von der Gerechtigkeitspartei setzen auf Produktivität und fairen Wettbewerb. Flexible Arbeitszeiten bieten dabei eine effektive Lösung, um den individuellen Bedürfnissen von Arbeitnehmern gerecht zu werden und gleichzeitig die Leistungsfähigkeit der Wirtschaft zu stärken. Anpassungsfähigkeit und Effizienz sind Schlüssel für eine erfolgreiche Zukunft.'
			},
			{
				state: State.Approve,
				reason:
					'Wir von der Gerechtigkeitspartei setzen uns für eine humanitäre und rechtlich geregelte Lösung ein, die individuelle Entscheidungen respektiert. Um den Zugang zu erleichtern, fordern wir die Einführung eines digitalen Angebots, das anonym und insbesondere in kleinen Gemeinden nutzbar ist. So gewährleisten wir Vertraulichkeit und praktische Unterstützung für alle.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir als Gerechtigkeitspartei betrachten den Euro als wichtigen Stabilitätsfaktor und unverzichtbaren Teil der europäischen Integration, besonders in einer zunehmend multipolaren Welt. Der Euro stärkt nicht nur die wirtschaftliche Zusammenarbeit innerhalb Europas, sondern trägt auch dazu bei, die geopolitische Position Europas zu festigen und die Herausforderungen globaler Märkte gemeinsam zu meistern.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir von der Gerechtigkeitspartei fordern eine nachhaltige Verkehrspolitik mit einem besonderen Fokus auf den Ausbau des Schienenverkehrs. Gleichzeitig muss die deutsche Infrastruktur in allen Bereichen grundlegend modernisiert werden, um eine effiziente, umweltfreundliche und zukunftsfähige Mobilität zu gewährleisten. Nur so schaffen wir die Grundlage für eine nachhaltige Entwicklung des gesamten Verkehrssektors.'
			},
			{
				state: State.Approve,
				reason:
					'Wir von der Gerechtigkeitspartei erkennen das Ehrenamt als wichtigen Faktor für den gesellschaftlichen Zusammenhalt an. Ehrenamtliche Tätigkeiten verdienen nicht nur Anerkennung, sondern auch konkrete Wertschätzung, etwa durch die Gewährung von Rentenpunkten. So schaffen wir Anreize für bürgerschaftliches Engagement und stärken das soziale Miteinander in unserer Gesellschaft.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir von der Gerechtigkeitspartei möchten Mieter entlasten und sehen dringenden Handlungsbedarf, um mehr soziale Gerechtigkeit auf dem Wohnungsmarkt zu schaffen. Faire Mietpreise und Schutz vor unzumutbaren Erhöhungen sind zentrale Maßnahmen, um den Zugang zu Wohnraum für alle zu sichern.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir von der Gerechtigkeitspartei stehen fest hinter den grundlegenden Arbeitnehmerrechten, einschließlich des Streikrechts. Sollte das Streikrecht aus Allgemeinwohlgründen eingeschränkt werden müssen, setzen wir uns für eine Verbeamtung der Betroffenen ein, um deren soziale und berufliche Sicherheit angemessen zu gewährleisten. Gerechtigkeit und Ausgleich bleiben unser oberstes Ziel.'
			},
			{
				state: State.Approve,
				reason:
					'Wir von der Gerechtigkeitspartei befürworten direkte Demokratie, um die Bürger stärker an politischen Entscheidungen zu beteiligen. Diese Forderung ist ein Kernpunkt unseres Wahlprogramms, da wir davon überzeugt sind, dass eine stärkere Einbeziehung der Menschen in Entscheidungsprozesse zu mehr Transparenz, Verantwortung und Vertrauen in die Politik führt.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir als Gerechtigkeitspartei setzen auf Prävention und Bildung, anstatt auf strafrechtliche Maßnahmen für Kinder. Für uns steht der Schutz von Kindern an erster Stelle. Wir glauben an die Kraft der frühen Förderung und an eine Gesellschaft, die Kinder schützt und unterstützt, anstatt sie zu strafen. Unser Ziel ist es, jedem Kind die besten Chancen zu bieten und somit eine sichere Zukunft für alle zu schaffen.'
			},
			{
				state: State.Approve,
				reason:
					'Wir als Gerechtigkeitspartei erkennen die Notwendigkeit, den europäischen Markt und eigene Hersteller zu schützen. Doch gleichzeitig sehen wir die Gefahr eines Handelskriegs zwischen China und Europa, der unsere Wirtschaft erheblich treffen könnte. Kluge Wirtschaftsdiplomatie ist daher gefragt, um einen fairen Handel zu fördern, Spannungen zu vermeiden und langfristige, stabile Wirtschaftsbeziehungen aufzubauen, die beiden Seiten zugutekommen.'
			},
			{
				state: State.Approve,
				reason:
					'Wir von der Gerechtigkeitspartei unterstützen eine flexible und offene Staats&shy;bürgerschaftspolitik, die die Integration fördert. Ein einfacher Zugang zur Staats&shy;bürgerschaft ermöglicht es Menschen, sich langfristig zu engagieren und Verantwortung für ihre neue Heimat zu übernehmen. Integration gelingt am besten, wenn alle die gleichen Rechte und Chancen haben.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir von der Gerechtigkeitspartei betonen den gesellschaftlichen Zusammenhalt und möchten soziales Engagement fördern, jedoch nicht verpflichten. Freiwilliges Engagement stärkt das soziale Miteinander und trägt zu einer solidarischen Gesellschaft bei. Wir schaffen Rahmenbedingungen, die Menschen ermutigen, sich einzubringen, ohne ihnen diese Verantwortung aufzuzwingen.'
			},
			{
				state: State.Approve,
				reason:
					'Wir von der Gerechtigkeitspartei fordern den verstärkten Ausbau erneuerbarer Energien, während wir gleichzeitig die individuelle Wahl der Umsetzungsweise respektieren. Umweltschutz muss global gedacht und gehandelt werden, denn nur durch internationale Zusammenarbeit können wir nachhaltige Lösungen für den Planeten erreichen.'
			},
			{
				state: State.Approve,
				reason:
					'Wir von der Gerechtigkeitspartei fordern, dass durch die Mindestlohnkommission der Betrag an reale Inflationsentwicklungen angepasst wird. Der Mindestlohn darf nicht als politisches Instrument zur Stimmenmaximierung missbraucht werden. Zugleich warnen wir vor extremen Arbeitskostensteigerungen, die das Wachstum und die Stabilität unserer Wirtschaft gefährden könnten. Verantwortung und Fairness müssen Hand in Hand gehen, um die Zukunft unseres Landes zu sichern.'
			}
		]
	},
	{
		name: 'Piratenpartei Deutschland',
		abbreviation: 'PIRATEN',
		description:
			'Die PIRATEN wurden 2006 mit dem Schwerpunkt auf netzpolitischen Themen wie Datenschutz, digitale Urheberrechte und Netzneutralität gegründet. Sie fordern u. a. eine freie und demokratisch kontrollierte technische Infrastruktur und mehr Kompetenzen für den Bund in der Bildungspolitik.',
		logo: 'parties/piraten.png',
		positions: [
			{
				state: State.Approve,
				reason:
					'Wir PIRATEN verurteilen den russischen Überfall und den russischen Angriffskrieg auf die Ukraine. Der Ukraine muss mit allen zur Verfügung stehenden Mitteln Unterstützung (z.B. Waffenlieferungen schwerer Waffen) gewährt werden.'
			},
			{
				state: State.Approve,
				reason:
					'Die Energieversorgung soll so schnell wie möglich auf nachhaltige Quellen umgestellt werden. Die Energieversorgung mit erneuerbaren Energien ist auch billiger und erlaubt die Teilhabe der Bürger, angefangen vom Balkonkraftwerk, bis hin zur Beteiligung an regionalen Anlagen.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir PIRATEN sind für die sofortige Abschaffung von Sanktionen. Wir fordern, dass alle Erwerbslosen, unabhängig ihres Alters, entsprechend ihrer Fähigkeiten und nach Beratung in freier Wahl und Entscheidungsfreiheit Jobs annehmen können sollen.'
			},
			{ state: State.Neutral, reason: 'Hierzu haben wir keine Beschlusslage.' },
			{
				state: State.Disprove,
				reason:
					'Die Drittstaatenregelung in der „Dublin II“-Verordnung und die bevormundende und entwürdigende Verschiebungspraxis der EU lehnen wir ab. Alle Staaten der EU sollten Geflüchtete aufnehmen und andere Mitgliedstaaten dabei unterstützen. Das Asylsystem muss auf einen menschenwürdigen Umgang mit Geflüchteten ausgerichtet sein.'
			},
			{
				state: State.Approve,
				reason:
					'Ausnahmen von der Mietpreisbremse (Neuvermietungen, möblierte Vermietung), aber auch die ausschließliche Anwendbarkeit in Kommunen mit einem überlasteten Wohnungsmarkt, müssen abgeschafft werden. Wir fordern den Erhalt von barrierefreiem bezahlbarem Wohnraum.'
			},
			{
				state: State.Disprove,
				reason:
					'Automatisierte Verfahren haben eine höhere Fehlerquote als Menschen. Biometrische Daten zu diesem Zweck zu speichern verletzt den Grundsatz nur nötige persönliche Daten zu speichern und zu erheben.'
			},
			{
				state: State.Approve,
				reason:
					'Der allgemeine Industriestrompreis ist wieder auf dem Vorkrisenniveau angekommen. Für besonders energieintensive Unternehmen, die von der EEG-Umlage befreit waren, sind die Kosten im Gegensatz dazu deutlich gestiegen. Es bedarf daher fraglos einer Neustrukturierung des Strommarktes. Um energieintensive Unternehmen und somit Arbeitsplätze kurzfristig zu sichern, halten wir jährlich zu evaluierende Subventionen in diesem Falle für angebracht.'
			},
			{
				state: State.Approve,
				reason:
					'In vielen Berufsfeldern (Pflege, Bauhandwerk, Straßenbau und anderen körperlich fordernden Tätigkeiten) sind 40 Beitragsjahre schon die Ausnahme. Dort wird die Grenze der Belastbarkeit wesentlich früher erreicht. Eine Rente darf nicht unterhalb des Existenzminimums liegen.'
			},
			{
				state: State.Disprove,
				reason:
					'Eine Trennung von Staat und Religion und die Neutralität des Staates gegenüber den verschiedenen Weltanschauungen sind Grundlage der Freiheit und Vielfalt von Religionen und Kulturen und Voraussetzung für ein friedliches und gleichberechtigtes Zusammenleben. Das soll sich auch im Grundgesetz widerspiegeln.'
			},
			{
				state: State.Approve,
				reason:
					'Durch die Überalterung unserer Gesellschaft benötigten wir Arbeitskräfte aus anderen Ländern, um dem Fachkräftemangel entgegenzuwirken. Im allgemeinen wird von einer Zuwanderung von mindestens 400.000 Menschen pro Jahr ausgegangen, um den Standard halten zu können.'
			},
			{
				state: State.Disprove,
				reason:
					'Atomkraft ist viel zu teuer und mit einem Netz, das zum großen Teil auf Erneuerbaren Energien beruht, nicht kompatibel. Dazu kommen die Risiken, die problematische Versorgungslage (Uran kommt zu großen Teilen z.B. aus Russland) und das ungelöste Endlagerproblem. Auch die angeblich neuen Reaktortypen bieten in keinem der Aspekte eine Verbesserung und stehen darüber hinaus auch nicht als einsatzbereite Baumuster zur Verfügung.'
			},
			{
				state: State.Approve,
				reason:
					'Der Spitzensteuersatz der Einkommensteuer soll ab einem Einkommen von 1 Mio. Euro auf 65 % erhöht werden.'
			},
			{
				state: State.Approve,
				reason:
					'Bildungsentscheidungen sollen vom Bund getroffen und Abschlüsse bundesweit vergleichbar sein. Es soll dem Bund daher erlaubt sein, sich an Ausgaben für Bildung in den Ländern zu beteiligen. Die Lehr- und Lerninhalte sind soweit möglich zu vereinheitlichen und so zu gestalten, dass sie den heutigen und für die Zukunft zu erwartenden Anforderungen an ein selbstbestimmtes Leben in der sich verändernden Gesellschaft gerecht werden.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir erkennen das Existenzrecht Israels an und wollen Verhandlungen fördern statt Eskalation. Zwischenstaatliche wie auch asymmetrische Konflikte wollen wir möglichst mit friedlichen Mitteln lösen und den Einsatz von militärischer Gewalt vermeiden, da die Probleme damit nicht langfristig gelöst werden können.'
			},
			{
				state: State.Approve,
				reason:
					'Alle Bürger sollen an der Finanzierung des Gesundheitswesens beteiligt sein. Hierbei soll die individuelle finanzielle Leistungsfähigkeit berücksichtigt werden. Privilegien der Privaten Krankenversicherungsunternehmen sind im Interesse einer einkommens- und vermögensunabhängigen Gesundheitsversorgung abzuschaffen.'
			},
			{
				state: State.Approve,
				reason:
					'Gegen Diskriminierungen jeglicher Art sind gezielt Maßnahmen zu ergreifen. Statt einseitig bei Verhalten und Befähigungen der Benachteiligten anzusetzen, müssen diskriminierende Strukturen aufgedeckt, reflektiert und wirksam bekämpft werden. Das Ziel muss sein, das eine Frauenquote nicht notwendig ist!'
			},
			{
				state: State.Approve,
				reason:
					'Für Land- und Forstwirtschaft, Fischerei und Ernährung heißt unser Ziel: Ein Wirtschaften im Gleichgewicht mit dem Naturhaushalt und in möglichst regionalen Kreisläufen.'
			},
			{
				state: State.Approve,
				reason:
					'Totalitäre, diktatorische und faschistische Bestrebungen jeder Art lehnt die Piratenpartei Deutschland entschieden ab. Wir unterstützen somit Projekte, die dieses Ziel verfolgen.'
			},
			{
				state: State.Approve,
				reason:
					'Die Einhaltung und Förderung der Menschenrechte sind eine unserer Antriebsfedern. Was dazu notwendig ist, findet unsere Unterstützung. Dabei ist die Praktikabilität zu berücksichtigen.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir PIRATEN setzen uns dafür ein, die BAföG-Leistungen durch ein Bildungsgrundeinkommen zu ersetzen. Dieses Bildungsgrundeinkommen sichert das Einkommen derer, die eine Ausbildung, ein Studium oder eine Fortbildung absolvieren, aber keinen Anspruch auf Grundsicherungsleistungen haben.'
			},
			{
				state: State.Disprove,
				reason:
					'Die Schuldenbremse im Grundgesetz sollte für öffentliche Investitionen geöffnet werden. Dabei halten wir uns an die europäischen Regeln zur Schuldenaufnahme und betonen: Schulden nur für Investitionen, nicht für konsumtive Ausgaben. Unser Ziel ist es, zukünftigen Generationen Handlungsspielräume zu sichern – durch eine intakte Umwelt, ein tragfähiges Rentensystem ohne übermäßige Sozialabgaben und eine Staatsverschuldung, die nicht durch hohe Zinszahlungen politischen Spielraum einschränkt.'
			},
			{
				state: State.Approve,
				reason:
					'Der sofortige Erhalt einer Arbeitserlaubnis für Asylsuchende löst viele bestehende Probleme in Deutschlands Asylpolitik und schafft gleichzeitig die Möglichkeit, dem Fachkräftemangel entgegenzuwirken. Wir wollen das Asylsystem auf einen menschenwürdigen Umgang mit Geflüchteten ausrichten.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir fordern eine konsequente und schnelle Energiewende. 2050 als Zieltermin ist viel zu spät, um dem Klimawandel und anderen Herausforderungen der Zukunft sinnvoll zu begegnen. Die Umstellung auf nachhaltige Prozesse ist auch ein wirtschaftlicher Faktor. Die Energieversorgung aus erneuerbaren Quellen ist billiger und macht uns von Rohstoff-Importen unabhängig.'
			},
			{
				state: State.Disprove,
				reason:
					'Eine freiheitliche, liberale und mündige Gesellschaft ist wichtig. Es liegt in der Aufgabe der Tarifparteien. Der Staat hat sich nicht in die Tarifautonomie einzumischen.'
			},
			{
				state: State.Disprove,
				reason:
					'Schwangerschaftsabbrüche müssen vollständig aus dem Strafgesetzbuch gestrichen werden.'
			},
			{
				state: State.Disprove,
				reason:
					'Die Währungsunion ist ein wesentlicher Baustein für ein geeinigtes Europa. Probleme müssen und können in Zusammenarbeit mit den anderen Mitgliedsstaaten gelöst werden. Deutschland als Exportnation profitiert tagtäglich von einer gemeinsamen Währung mit anderen Nationen.'
			},
			{
				state: State.Approve,
				reason:
					'Die für die Allgemeinheit günstigeren Verkehrsmittel sollen beim Ausbau Vorrang haben: Private PKW sind insgesamt am teuersten. Für den Personenverkehr und vor allem für die Pendlerinnen und Pendler sehen wir in der Konsequenz einen starken und gut ausgebauten öffentlichen Nahverkehr – Bus und Bahn – als Mittelpunkt aller zukünftigen Verkehrskonzepte.'
			},
			{
				state: State.Approve,
				reason:
					'Ehrenamtsarbeit ist eine Arbeit für unsere Gesellschaft. Wo dieses gefördert werden kann, muss es getan werden. Dies wäre eine von vielen Möglichkeiten.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir haben diesbezüglich keine Beschlusslage, jedoch sind die Nebenkosten fast schon zu einer zweiten Miete geworden. Wir fordern den Erhalt von barrierefreiem bezahlbarem Wohnraum. Das System der umlagefähigen Kosten von Eigentum muss neu überdacht werden.'
			},
			{
				state: State.Disprove,
				reason:
					'Das Streikrecht gehört zu den wichtigsten Errungenschaften der Sozialgesetzgebung für Arbeitnehmende. Es ist an den Arbeitgebenden in Zeiten von Fachkräftemangel und höchster Beschäftigungsquote dafür zu sorgen, dass keine Streikgründe entstehen.'
			},
			{
				state: State.Approve,
				reason:
					'Wir PIRATEN wollen die direkten und indirekten Mitbestimmungsmöglichkeiten eines jeden Einzelnen steigern. Die Bürgerinnen und Bürger sollen in Volksabstimmungen direkt über Gesetze entscheiden können und so Verantwortung übernehmen.'
			},
			{
				state: State.Disprove,
				reason:
					'Das Gehirn von Kindern und Jugendlichen ist wissenschaftlich gesehen eine Baustelle. Sie sind in dem Alter noch nicht strafmündig.'
			},
			{
				state: State.Disprove,
				reason:
					'Deutschland und Europa müssen auf national subventionierte Produkte reagieren können.'
			},
			{
				state: State.Approve,
				reason:
					'Doppelte Staats&shy;bürgerschaften entstehen, wenn Menschen sich erfolgreich um die deutsche Staats&shy;bürgerschaft beworben haben, also einen wesentlichen Anteil an unserer Gesellschaft haben und ihre alte Staats&shy;bürgerschaft nicht abgelegt haben oder meist nicht ablegen können, da der dortige Gesetzgeber dies nicht zulässt oder der Prozess dazu unüberwindliche Hürden hat.'
			},
			{
				state: State.Disprove,
				reason:
					'Es muss deutlich mehr für das freiwillige Soziale Jahr und den Bundesfreiwilligendienst geworben werden.'
			},
			{
				state: State.Disprove,
				reason:
					'Der Klimawandel ist die aktuell größte Bedrohung für unsere Existenz. Die Erfahrungen der jüngeren Vergangenheit zeigen, dass Extremwetterereignisse in allen Teilen der Welt jederzeit möglich sind. Durch eine Verteilung der Versicherungskosten auf alle Schultern lassen sich die Prämien verträglich gestalten.'
			},
			{
				state: State.Approve,
				reason:
					'Der Mindestlohn muss ausreichend sein, um in der gesetzlichen Rentenkasse als Beschäftigter in Vollzeit bei 40 Beitragsjahren und Renteneintrittsalter von 67 Jahren einen Anspruch auf eine Rente oberhalb der Armutsgefährdungsgrenze zu erreichen. Um das zu erreichen, muss der Mindestlohn massiv erhöht werden. Wir fordern 18,51€ Mindestlohn.'
			}
		]
	},
	{
		name: 'Volt Deutschland',
		abbreviation: 'Volt',
		description:
			'Die seit 2018 bestehende Volt ist Teil einer paneuropäischen Bewegung. Wichtige Ziele sind u. a. eine grundlegende Reform der EU, eine umfangreiche Digitalisierung der Verwaltung sowie der Umstieg auf erneuerbare Energien. Seit 2019 sitzt sie im Europäischen Parlament – aktuell mit drei Mandaten.',
		logo: 'parties/volt.png',
		positions: [
			{
				state: State.Approve,
				reason:
					'Volts Lösungen setzen auf ein starkes Europa und die militärische Unterstützung der Ukraine.'
			},
			{
				state: State.Approve,
				reason:
					'Volts Lösungen für echten Klimaschutz beinhalten die finanzielle Förderung erneuerbarer Energie.'
			},
			{
				state: State.Disprove,
				reason:
					'Volts Lösung ist die Einführung der negativen Einkommenssteuer und des existenzsichernden Grundeinkommens. So muss niemand unter der Armutsgrenze leben und der bürokratische Aufwand für die strikte Einhaltung der Bürgergeldregeln fällt weg. Deutschland spart so ca. 6 Mrd. € Verwaltungskosten.'
			},
			{
				state: State.Approve,
				reason:
					'Volts Lösungen für echten Klimaschutz sind auch Sofortmaßnahmen, wie das Tempolimit, welches CO2 reduziert, Lärm verringert und gleichzeitig auch die Verkehrssicherheit sowie den Verkehrsfluss erhöht. Alle anderen Europäischen Länder machen es vor.'
			},
			{
				state: State.Disprove,
				reason:
					'Volts Lösung für ein europäisches humanes Asylsystem ist die komplette Rücknahme der GEAS-Entscheidung aus 2024 und das Verbot von Asylverfahren in Lagern an den europäischen Außengrenzen.'
			},
			{
				state: State.Approve,
				reason:
					'Volts Lösung für ein Recht auf bezahlbaren Wohnraum ist dessen Verankerung im Grundgesetz und die damit einhergehende Verpflichtung zu reglementierten Mieten, unteranderem durch Sozialbindung und mehr genossenschaftliche und kommunale Trägerschaften.'
			},
			{
				state: State.Disprove,
				reason:
					'Volts Lösungen sind evidenzbasiert, jedoch ist der Effekt und Nutzen von Gesichtserkennung in der Kriminalitätsprävention unklar.'
			},
			{
				state: State.Disprove,
				reason:
					'Volts Lösungen für einen klimagerechten Wirtschaftsstandort setzen auf die Förderung von Energieeffizienz, den beschleunigten Ausbau erneuerbarer Energien und gezielte Investitionshilfen für die Transformation zu klimaneutralen Produktionsprozessen. Dabei verzichten wir auf direkte Subventionen für Strom aus fossilen Energieträgern.'
			},
			{
				state: State.Approve,
				reason:
					'Volts Lösung ist ein dynamisches Renteneintrittsalter, um ein faires Verhältnis zwischen Anspar- und Rentenberechnung zu schaffen.'
			},
			{
				state: State.Disprove,
				reason:
					'Volts Lösung für eine vielfältige und offenen Gesellschaft ist ein säkularer Staat, der die freiheitliche Ausübung jeder Religion sichert, indem Staat und Religion getrennt sind.'
			},
			{
				state: State.Approve,
				reason:
					'Volts Lösungen sind digitale Plattformen zur Vernetzung von Betrieben und Arbeiter*innen, eine Arbeitserlaubnis ab Tag 1 und die beschleunigte Anerkennung von Abschlüssen. Das alles soll unkompliziert und unbürokratisch in One-Stop-Shops, ein Kontakt und Beratung für alles, abgewickelt werden können.'
			},
			{
				state: State.Disprove,
				reason:
					'Volts Lösung ist eine nachhaltige und langfristige Energiewende, unabhängig und bezahlbar.'
			},
			{
				state: State.Approve,
				reason:
					'Volts Lösungen für eine faire Steuerpolitik setzen auf eine Anhebung des Spitzensteuersatzes für sehr hohe Einkommen. Niedrige und mittlere Einkommen sollen gleichzeitig entlastet werden. Volt will so in die Zukunft investieren und das Gemeinwohl stärken.'
			},
			{
				state: State.Approve,
				reason:
					'Volts Lösung für individuelle, kostenlose Bildung für alle ist eine nationale Bildungsstrategie statt Bildungsföderalismus. Zudem soll es einen Bildungsrat aus Fachleuten und Lehrkräften geben, die Lösungen für praktische Herausforderungen finden sollen.'
			},
			{
				state: State.Neutral,
				reason:
					'Volts Lösungen für den Nahost-Friedensprozess setzen auf die Unterstützung des israelischen Existenzrechts sowie die Sicherheit der Zivilbevölkerung im gesamten Gebiet. Wir unterstützen gemeinsame europäische diplomatische Wege, die auf eine Zwei-Staaten-Lösung im Dialog hinarbeitet.'
			},
			{
				state: State.Approve,
				reason:
					'Volts Lösung sind gemeinsame europäische Krankenversicherungen, die als gemeinnützige Genossenschaften verfasst werden und alle Europäer*innen versichern soll.'
			},
			{
				state: State.Disprove,
				reason: 'Volt sieht die Quote als ein Mittel, die Gleichstellung zu verbessern.'
			},
			{
				state: State.Approve,
				reason:
					'Volts Lösungen für eine nachhaltige Landwirtschaft setzen unter anderem auf eine stärkere Förderung ökologischer Betriebe, da diese durch den Verzicht auf chemisch-synthetische Pestizide und Mineraldünger aktiv zum Klima- und Artenschutz beitragen. Volt investiert in ein zukunftsfähiges Agrarsystem und nachhaltige Landwirtschaft.'
			},
			{
				state: State.Approve,
				reason:
					'Volts Lösung für mehr Vielfalt und gegen nationale Parolen ist die Förderung der Zivilgesellschaft, Demokratiebildung, eine gelebte Erinnerungskultur und interkulturelle Programme sowie mehr Begegnungsorte.'
			},
			{
				state: State.Approve,
				reason:
					'Volts Lösungen für verantwortungsvolle Lieferketten setzen auf die Einhaltung von Menschenrechten und Umweltstandards.'
			},
			{
				state: State.Disprove,
				reason:
					'Volts Lösungen für eine gerechte Bildungsfinanzierung setzen auf ein elternunabhängiges BAföG, das durch eine reformierte Bemessungsgrundlage weiterhin gezielt diejenigen unterstützt, die finanzielle Förderung am dringendsten benötigen. Die Anspruchsvoraussetzungen werden vereinfacht und die Berechtigung erst nach der Auszahlung geprüft, um Finanzierungslücken zu vermeiden.'
			},
			{
				state: State.Disprove,
				reason:
					'Volts Lösungen für eine Generation, die ihr Leben noch vor sich hat, setzen auf eine Reform der starren Schuldenbremse für mehr Investitionen in Klimaschutz, Digitalisierung, Infrastruktur und Bildung. Die Höchstgrenze der Ausgaben wird angehoben, an die wirtschaftliche Lage angepasst und bleibt an die europäischen Stabilitätskriterien gebunden.'
			},
			{
				state: State.Approve,
				reason:
					'Volts Lösung ist die bedingungslose Arbeitserlaubnis ab dem ersten Tag, unabhängig vom Aufenthaltsstatus.'
			},
			{
				state: State.Disprove,
				reason:
					'Volts Ziel ist die Klimaneutralität bis 2040 mit Lösungen für eine klimaneutrale Industrie, nachhaltige Mobilität, Biodiversitäts- und Klimaschutz sowie eine smarte und nachhaltige Wirtschaft.'
			},
			{
				state: State.Approve,
				reason:
					'Volts Lösung ist die Flexibilisierung der Arbeitszeit, um individuelle Modelle zu ermöglichen und ausschließlich eine Wochenobergrenze beizubehalten. So kann jeder und jede Wochenende machen, wann er oder sie will.'
			},
			{
				state: State.Disprove,
				reason:
					'Volts Lösungen sind die Streichung des §218 und die Entkriminalisierung von Schwangerschaftsabbrüchen sowie die Kostenübernahme durch die Krankenkassen und ein flächendeckender Zugang zu Ärzt*innen und freiwilligen Beratungsangeboten.'
			},
			{
				state: State.Disprove,
				reason:
					'Volts Lösungen für einen starken europäischen Wirtschaftsraum setzen auf den Euro als gemeinsame Währung. Die Rückkehr zu einer nationalen Währung würde den integrierten EU-Binnenmarkt schwächen, grenzüberschreitende Geschäfte erschweren und die Wettbewerbsfähigkeit deutscher Unternehmen gefährden. Stattdessen stärken wir den europäischen Finanz- und Kapitalmarkt durch einheitliche Regelungen in einer Fiskal Union.'
			},
			{
				state: State.Approve,
				reason:
					'Volts Lösung ist mehr Schienenverkehr und die damit verbundenen Investitionen in die Infrastruktur: ein europäisches Highspeednetz, mehr Schienenanbindungen im ländlichen Raum und die Modernisierung des Gesamtnetzes.'
			},
			{
				state: State.Approve,
				reason:
					'Volts Lösung ist eine allgemeine Berücksichtigung von Care-Arbeit, Freiwilligendiensten und gesellschaftlichem Engagement in der Rentenberechnung.'
			},
			{
				state: State.Disprove,
				reason:
					'Volts Lösung ist ein Bodenpreis, der nach ökologischen und sozialen Gesichtspunkten bewertet wird.'
			},
			{
				state: State.Disprove,
				reason:
					'Volts Lösung ist den Beschäftigten der Unternehmen der kritischen Infrastruktur von vornherein ein angemessenes Gehalt und moderne Arbeitnehmer*innenrechte zu garantieren. Volt will die Demokratie und die Gewerkschaften stärken. Daher darf es keine weiteren Einschränkungen im Streikrecht geben.'
			},
			{
				state: State.Disprove,
				reason:
					'Volts Lösung sind Bürger*innenschaftsräte, die die politische Teilhabe und Mitbestimmung sichern.'
			},
			{
				state: State.Disprove,
				reason: 'Volts Lösungen setzen auf Prävention und mehr Hilfe für Minderjährige.'
			},
			{
				state: State.Disprove,
				reason:
					'Volts Lösungen für nachhaltige Mobilität und einen fairen Wettbewerb im E-Auto-Markt setzen auf gezielte Förderung von Innovation und Wettbewerbsfähigkeit der europäischen Automobilindustrie bei gleichzeitig fairem Marktzugang für ausländische Hersteller. Wir vermeiden dabei Zölle und unterstützen die deutsche Automobilindustrie dabei die Produktion von E-Mobilität und anderen nachhaltigen Alternativen auszuweiten.'
			},
			{
				state: State.Approve,
				reason:
					'Volts Lösung ist ein Wahlrecht, bei dem jeder und jede dort wählen darf, wo er oder sie lebt sowie die grundsätzliche Möglichkeit von zwei Staats&shy;bürgerschaften.'
			},
			{
				state: State.Disprove,
				reason:
					'Volts Lösung ist die Schaffung eines größeren Angebots an Stellen mit besseren Konditionen. Die Nachfrage von Jugendlichen ist nicht das Problem.'
			},
			{
				state: State.Disprove,
				reason:
					'Volts Lösung ist eine attraktive und erneuerbare Wärmewende, die über einen niedrigen Strompreis und die Förderung von Wärmepumpen, erneuerbare Wärme günstiger als andere klimaschädliche Optionen macht.'
			},
			{
				state: State.Approve,
				reason:
					'Volts Lösung für einen gesetzlichen Mindestlohn, der jederzeit ein bezahlbares Leben ermöglicht, passt sich immer automatisch und dynamisch an die wirtschaftliche Lage an, ohne weitere lange Bundestagsdebatten.'
			}
		]
	},
	{
		name: 'Ökologisch-Demokratische Partei - Die Naturschutzpartei',
		abbreviation: 'ÖDP',
		description:
			'Die ÖDP entstand 1981 aus der Ökologiebewegung und verfolgt wertkonservative Politikansätze. Herausgehobene Themen sind die Umwelt- und Familienpolitik sowie Demokratie und die Transparenz politischer Prozesse. Seit 2014 gewann sie bei den Wahlen zum Europäischen Parlament jeweils ein Mandat.',
		logo: 'parties/ödp.png',
		positions: [
			{
				state: State.Approve,
				reason:
					'Im Falle des völkerrechtswidrigen Angriffskrieges sieht die ÖDP eine moralische Pflicht, der Ukraine mit Waffenlieferungen zur Seite zu stehen. Die Sanktionen gegen Russland müssen jedoch vollumfänglich umgesetzt und die Lieferung fossiler Energien wirksam unterbunden werden, beides ist derzeit nicht der Fall. Gleichzeitig brauchen wir diplomatische Gespräche und schließlich Verhandlungen, um diesen Krieg möglichst schnell zu beenden.'
			},
			{
				state: State.Approve,
				reason:
					'Da erneuerbare Energien sehr günstig sind, muss ihr Ausbau vorrangig durch geeignete Marktregeln gefördert werden. Die finanzielle Förderung des Staates muss vorrangig Kommunen und Energiegemeinschaften in Form von Zuschüssen, günstigen Krediten und Bürgschaften zugutekommen. Diese sollen vor allem für Planungen, Bürgerbeteiligung und Infrastrukturaufbau wie Wärmenetze und Quartierenergiespeicher eingesetzt werden. Einkommensschwache Haushalte müssen bevorzugt bedacht werden.'
			},
			{
				state: State.Disprove,
				reason:
					'Die Reform des Bürgergeldgesetzes zum 01.01.2023 hat die Sanktionsmöglichkeiten stark abgemildert. In dieser reduzierten Form sind Leistungskürzungen zu verteidigen. Eine völlige Kürzung widerspricht analog der Kürzungen von Hartz IV unserem Grundgesetz. Das BVerfG damals: „Die den Anspruch fundierende Menschenwürde steht allen zu und geht selbst durch vermeintlich ‚unwürdiges‘ Verhalten nicht verloren.“'
			},
			{
				state: State.Approve,
				reason:
					'Die ÖDP steht für 120 km/h auf Autobahnen, 80 km/h außerorts und 30 km/h innerorts mit Ausnahme geeigneter Hauptstraßen. Wir wollen damit einen besseren Verkehrsfluss, Energieeinsparungen, einen geringeren CO2-Ausstoss, weniger Lärm, niedrigere Unfallzahlen und ein entspannteres Fahren ermöglichen.'
			},
			{
				state: State.Neutral,
				reason:
					'Wir sind gegen die Zurückweisung an der Grenze, aber nicht gegen die Zurückweisung in andere EU-Staaten. Auch mit der GEAS-Reform gilt weiterhin die Regel, dass Asylsuchende ihren Antrag im Mitgliedstaat der ersten Einreise oder des legalen Aufenthalts stellen müssen. So wird unterbunden, dass Asylsuchende den Antrag im für sie vorteilhaftesten Staat stellen. Jedoch fordert die ÖDP in allen EU-Mitgliedstaaten einheitliche rechtsstaatliche Verfahren und eine Angleichung der Sozialleistungen.'
			},
			{
				state: State.Approve,
				reason:
					'Die ÖDP fordert auch in den Ballungsräumen bezahlbare Mieten. Auch für die Mittelschicht wird es zunehmend schwieriger, bezahlbaren Wohnraum zu finden. Um den Anstieg der Mietpreise zu begrenzen, sind die vorhandenen Mietpreisbremsen beizubehalten. Durch staatliche Maßnahmen ist sicherzustellen, dass zusätzlicher Wohnraum geschaffen wird und vorhandener besser genutzt wird. Schlupflöcher sind zu schließen.'
			},
			{
				state: State.Disprove,
				reason:
					'Die Videoüberwachung schreckt keine Täter ab und die Gesichtserkennung dient nur der Strafverfolgung, nicht aber der Prävention, auf die es ankommt. Gleichzeitig wird in die Grund- und Persönlichkeitsrechte tausender Personen eingegriffen.'
			},
			{
				state: State.Disprove,
				reason:
					'Die ÖDP möchte durch eine Kreislaufwirtschaft die Güterproduktion deutlich verringern. Weniger, aber langlebige Produkte sollen hergestellt werden, mehr Arbeitsplätze für Reparatur und Wartung entstehen. Energieintensive Unternehmen sollen nicht für ihre Stromkosten einen finanziellen Ausgleich erhalten, sondern Unterstützung bei der Umstellung auf langlebige Produkte sowie energiesparende und flexible Verfahren, welche an die Verfügbarkeit von Solar- und Windstrom angepasst sind.'
			},
			{
				state: State.Neutral,
				reason:
					'Es gibt Berufsgruppen, für die das sinnvoll ist, für andere Berufsgruppen erscheint das nicht für sinnvoll. Es sind zudem die Erziehungs- und familiäre Pflegezeiten stärker zu berücksichtigen.'
			},
			{
				state: State.Approve,
				reason:
					'Die ÖDP bekennt sich zu den christlich-humanistischen Wurzeln unserer Gesellschaft. Frieden, Gerechtigkeit, Menschenwürde und die Bewahrung der Schöpfung sind christliche Werte, die das Leitbild der Politik prägen müssen. Andere Werte, z.B. aus anderen Religionen, können in ein solches wertorientiertes Leitbild einfließen. Daher muss aus Sicht der ÖDP der Gottesbezug im Grundgesetz erhalten bleiben.'
			},
			{
				state: State.Neutral,
				reason:
					'Die ÖDP fordert die Schaffung eines Zuwanderungsgesetzes, das faire Chancen auf legale Zuwanderung in die EU bietet, aber nicht zu einer übermäßigen Abwanderung gut qualifizierter Fachkräfte aus den Herkunftsländern führt. Grundsätzlich sollte versucht werden, den Bedarf an Fachkräften zunächst mit geeigneten einheimischen Arbeitskräften und besseren Bildungsangeboten zu decken.'
			},
			{
				state: State.Disprove,
				reason:
					'Die Nutzung der Atomkernspaltung für die Energieversorgung war eine der schwerwiegendsten Fehlentscheidungen der Menschheit. Wir alle haben unter den Folgen zu leiden – vor allem aber wurde den nachfolgenden Generationen in Form des Strahlungsmülls eine nicht zu beherrschende Last aufgebürdet, die bei einer erneuten Nutzung der Kernkraft noch schwerer würde.'
			},
			{
				state: State.Approve,
				reason:
					'Wir fordern eine angemessene und sozial gerechte Erhöhung des Spitzensteuersatzes in der Einkommenssteuer, um die steigende soziale Ungleichheit anzugehen. Kapitalerträge müssen mit dem persönlichen Steuersatz besteuert werden, nicht mit der minimalen Abschlagssteuer.'
			},
			{
				state: State.Disprove,
				reason:
					'Schulpolitik sollte grundsätzlich Ländersache bleiben, aber der Bund könnte dringend einen Modernisierungspakt für Schulen auflegen oder die Finanzierung der Länder derart verbessern, dass marode Schulen und Sanitäreinrichtungen endlich der Vergangenheit angehören. Die ÖDP fordert außerdem ausreichend Lehrkräfte sowie kleinere Schulklassen. Auch brauchen wir ein vielfältiges Angebot an Schultypen und den Erhalt der kleinen Grundschulen im ländlichen Raum.'
			},
			{
				state: State.Disprove,
				reason:
					'Das Existenzrecht und das Selbstverteidigungsrecht Israels steht für die ÖDP außer Frage. Seit März 2024 hat Deutschland ohnehin keine Kriegswaffen mehr geliefert. Grundsätzlich fordert die ÖDP, dass die Mitgliedsstaaten der EU sich auf konsequente Abrüstung und auf die Beschränkung von Rüstungsexporten auf EU- und NATO-Staaten verpflichten sollten. Rüstungsexporte insbesondere in Krisengebiete sind zudem ursächlich für viele Flüchtlinge rund um den Globus.'
			},
			{
				state: State.Approve,
				reason:
					'Die gesetzliche Kranken- und Pflegeversicherung ist nach Meinung der ÖDP auf alle Einkommensbezieher auszudehnen (Beamte, Freiberufler, Unternehmer u. a.). Die Krankenkassenbeiträge sind als einheitlicher Prozentsatz des Einkommens zu erheben. Es sind alle Einkommensarten einzubeziehen, z.B. auch Miet- und Kapitaleinkünfte. Die gesetzlichen Krankenkassen werden in der Anzahl stark reduziert. Das erspart erhebliche Verwaltungskosten.'
			},
			{
				state: State.Approve,
				reason:
					'Die ÖDP steht für eine Gleichberechtigung und lebt diese in der Partei auch ohne Quoten. Quoten sind oft nicht praktikabel zu handhaben, sondern es kommt viel mehr auf die gesellschaftliche Einstellung an, die man weiterentwickeln muss. Sowohl Frauen als auch Männer dürfen weder im Hinblick auf gewöhnliche Erwerbsarbeit noch auf Erziehungsleistungen benachteiligt werden. Sie müssen die gleichen Aufstiegschancen haben. Es muss gleicher Lohn für gleiche Arbeit gezahlt werden.'
			},
			{
				state: State.Approve,
				reason:
					'Das Ausbauziel 30 Prozent Ökolandbau bis 2030 hat durch das ÖDP-Volksbegehren ,,Artenvielfalt und Naturschönheit in Bayern - Rettet die Bienen" gesetzlichen Rang erhalten, ein Vorbild für alle Bundesländer. Vor allem eine verbindliche Bioquote von mindestens 30 Prozent Biolebensmittel, möglichst aus der Region, in allen öffentlichen Einrichtungen mit Gemeinschaftsverpflegung (Behörden, Kitas, Schulen, Krankenhäuser) muss kommen. Das wäre eine wirksame Förderung der heimischen Öko-Landwirtschaft.'
			},
			{
				state: State.Approve,
				reason:
					'Der Rechtsextremismus stellt eine zunehmende Bedrohung für den demokratischen und sozialen Rechtsstaat dar. Projekte gegen Rechtsextremismus sollten vorrangig angebunden sein an Träger öffentlich-rechtlicher Struktur wie z. B. Volkshochschulen und freie Träger der Jugendarbeit (Jugendringe). Gleichermaßen sind auch Projekte gegen andere Formen des politischen und religiösen Extremismus sowie gegen Antisemitismus zu fördern.'
			},
			{
				state: State.Approve,
				reason:
					'Das EU-Lieferkettengesetz muss sowohl ökologische als auch sozial hohe Standards vorschreiben. Der Import von Gütern in die EU, die diese Standards verletzen, muss grundsätzlich verboten und auf alle Unternehmen ausgedehnt werden, die der Pflicht zur Finanzberichterstattung unterworfen sind. Die Beweislast muss beim Unternehmen liegen, um nachzuweisen, ob es verantwortlich gehandelt hat oder nicht.'
			},
			{
				state: State.Disprove,
				reason:
					'Die ÖDP fordert gleiche Bildungschancen für alle und daher ein einfaches, unbürokratisches BAföG, unabhängig von Herkunft und Familie. Die derzeitige Regelung zur BAföG-Förderung sehen wir als zu kompliziert und bei der Anrechenbarkeit des Elterneinkommens für hinterfragbar an. Daher halten wir ein vom Einkommen der Eltern unabhängiges BAföG bei Studierenden für sinnvoll.'
			},
			{
				state: State.Disprove,
				reason:
					'Die Schuldenbremse ist eine unsinnige Maßnahme und sollte abgeschafft werden! In der Corona-Pandemie wurde sie völlig zu Recht ausgesetzt. Gerade in kritischen Situationen, wenn ein Gegensteuern des Staates geboten erscheint, verhindert die Schuldenbremse notwendige Maßnahmen. Viel besser wäre eine Rückkehr zur antizyklischen Finanzpolitik, die dann Schulden macht, wenn die Wirtschaft auf Talfahrt ist und dann Steuern einhebt, wenn die Wirtschaft boomt, also eine Ausgleichspolitik betreibt.'
			},
			{
				state: State.Approve,
				reason:
					'Asylsuchende, die erwerbstätig sind, tragen zum eigenen Lebensunterhalt bei, was Sozialleistungen verringert. Arbeit trägt auch zur Integration bei, indem zwischenmenschliche Kontakte und der Erwerb der deutschen Sprache gefördert werden. Insbesondere bei ungelernten Arbeitskräften sind durchaus kurze Arbeitsverhältnisse möglich. Anerkannte Asylsuchende sollten aber nach Möglichkeit in den regulären Arbeitsmarkt integriert werden.'
			},
			{
				state: State.Disprove,
				reason:
					'Klimaschutz schützt Mensch und Natur: Ziel der Klimaneutralität bis 2030 durch Beendigung der Nutzung fossiler Energieträger und anschließende Senkung des CO2-Gehalts der Atmosphäre von derzeit 420 auf den sicheren Wert von 350 ppm. Die Wetterextreme weltweit sollten uns mahnen. Wir brauchen daher die Priorisierung des Schutzes der Umwelt, der Bewahrung der Artenvielfalt und die Durchsetzung der Klimawende sowie die wirksame Überwachung der dazu nötigen Umsetzungsschritte dorthin.'
			},
			{
				state: State.Approve,
				reason:
					'Familiäre Sorgearbeit, ehrenamtliches Engagement, aber auch eine entschleunigte Lebensweise entsprechen häufig dem Wunsch nach einem sinnerfüllten Leben und sind für die Existenzfähigkeit der Gesellschaft unersetzlich. Deshalb muss eine Reduzierung der (Regel-)Arbeitszeit ermöglicht werden, ohne dass dadurch der Sozialversicherungsschutz zusammenbricht. Das Recht auf Teilzeit hilft nicht weiter, wenn daraus Altersarmut folgt.'
			},
			{
				state: State.Approve,
				reason:
					'Ein wichtiges Ziel der ÖDP ist es, Leben von Anfang an zu schützen. Wir sehen die Aufgabe des Staates darin, durch geeignete Beratungen, Hilfen und Förderangebote Frauen bzw. Eltern – v.a. in Konfliktsituationen – darin zu bestärken, das Ja zum Kind zu ermöglichen und Abtreibungen möglichst zu verhindern. Deshalb halten wir die jetzige Gesetzeslage in Deutschland für richtig. Wir treten für die Entscheidungsfreiheit für Frauen bei grundsätzlicher Straffreiheit nach einer Beratung ein.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir sprechen uns für den Erhalt des Euro aus. Jedoch: Wo der Verbleib in der Euro-Zone für ein Mitglied nur unter unzumutbaren Härten möglich ist, sollte diesem Mitglied die Rückkehr zu einer eigenen Währung ermöglicht werden, so es dies wünscht. Dabei muss ihm finanzielle Unterstützung gewährt werden. Das Bargeld muss neben dem geplanten digitalen Euro erhalten bleiben.'
			},
			{
				state: State.Approve,
				reason:
					'Förderung des öffentlichen Nahverkehrs mit mindestens dem doppelten Budget (24 Mrd. Euro/Jahr). Erhöhung der Investitionen in ein flächendeckendes Schienennetz auf mindestens das Doppelte (12 Mrd. Euro/Jahr). Elektrifizierung aller Bahnstrecken nach Schweizer Vorbild. Einführung eines einheitlichen, europaweiten Ticket-Systems für Nah- und Fernverkehr. Ausbau des internationalen Bahnverkehrs durch Förderung von Nachtzügen und eine schnelle Umsetzung international vereinbarter Bahnprojekte.'
			},
			{
				state: State.Approve,
				reason:
					'Ehrenamtliche Tätigkeiten sind eine wichtige Leistung und Unterstützung unserer Gesellschaft und unseres Gemeinwesens. Daher sollte dies bei der Rente berücksichtigt werden.'
			},
			{
				state: State.Approve,
				reason:
					'Die ÖDP ist der Auffassung, dass sich jeder, also Eigentümer oder Mieter, an den Kosten der Grundsteuern beteiligen sollte. Dies ist gerecht. Allerdings fordern wir, dass die Kommunen die derzeitige Grundsteuerreform aufkommensneutral umsetzen, um die Bürgerschaft nicht weiter zu belasten.'
			},
			{
				state: State.Disprove,
				reason:
					'Es gibt in Deutschland kein explizites „Streik- oder Arbeitskampfgesetz“. Es handelt sich hingegen um ein wichtiges Grundrecht, weil es Beschäftigten ermöglicht, für ihre Interessen machtvoll einzustehen. Und dies ist immer wieder nötig, weil gerade in der „kritischen Infrastruktur“ für die Beschäftigten aufgrund von Personal- und Geldmangel vieles auf Kante genäht ist, z.B. in Krankenhäusern, bei Kommunen oder bei der Bahn. Die ÖDP lehnt die Einschränkung des Streikrechts daher ab.'
			},
			{
				state: State.Approve,
				reason:
					'Die ÖDP ist die erfolgreichste Volksbegehrenspartei in Deutschland. So haben wir z.B. in Bayern das Volksbegehren Artenschutz "Rettet die Bienen" initiiert und gewonnen. Die ÖDP fordert die Einführung verbindlicher Volksbegehren und Volks&shy;entscheide auf Bundesebene. Wir brauchen mehr Mitbestimmung der Bürgerinnen und Bürger für eine lebendige und motivierende Demokratie in Deutschland auf allen politischen Ebenen. Mehr Mitbestimmung ist ein Instrument gegen Politikverdrossenheit und Extremismus.'
			},
			{
				state: State.Neutral,
				reason:
					'Die derzeitigen gesetzlichen Regelungen reichen nicht mehr aus (z.B. Problem der Clankriminalität). Wir brauchen eine differenziertere Einzelfallbetrachtung. Handelt es sich um schwere Verbrechen, z.B. Mord, muss der Jugendschutz aufgehoben werden können. Beispielsweise beim Ladendiebstahl ist eine Verschärfung der Gesetze wiederum nicht nötig. Der Erziehungs- und Rehabilitationsgedanke muss im Vordergrund stehen.'
			},
			{
				state: State.Disprove,
				reason:
					'China hat sich über eine aggressive Subventionierung einiger Klimatechnologien in eine weltmarktbeherrschende Stellung gebracht. Um Produktionsstätten für Klimatechnologien in EU-Staaten aufzubauen, bedarf es einer Antidumping-Politik und einer entsprechenden Besteuerung importierter Elektroautos und anderer Waren (z.B. Windkraftanlagen und Photovoltaikanlagen) aus China.'
			},
			{
				state: State.Approve,
				reason:
					'Die vor Jahren eingeführten Veränderungen beim Staatsangehörigkeitsrecht und der Erleichterung der Einbürgerung für jene, die schon lange in Deutschland leben oder hier geboren sind (z.B. rascherer Erwerb des deutschen Passes, Möglichkeit der doppelten Staatsangehörigkeit für Kinder bis zur Volljährigkeit), sind zu begrüßen. Dass eine doppelte Staats&shy;bürgerschaft generell möglich sein soll, bedeutet nicht, dass sie grundsätzlich anzustreben oder zu gewähren ist.'
			},
			{
				state: State.Approve,
				reason:
					'Die ÖDP fordert die Einführung eines verpflichtenden Gemeinwohljahrs für Menschen ab 18 Jahren (nach Schulabschluss bzw. abgeschlossener Ausbildung/Lehre), das sämtliche gesellschaftlichen Bereiche umfassen soll, die dem Gemeinwohl dienen, und ausreichend vergütet wird, sozialversicherungspflichtig ist und zeitlich bei der Rentenbemessung angerechnet wird. Falls rechtlich erforderlich, ist im Grundgesetz Art. 12 (2) entsprechend zu ändern.'
			},
			{
				state: State.Disprove,
				reason:
					'Heizungen, die mit fossilen Brennstoffen betrieben werden, sind nicht nur klimaschädlich, sondern stellen auch ein hohes finanzielles Risiko dar. Die ÖDP fordert ein Programm zum Tausch von Öl- und Gasheizungen gegen Wärmepumpen, feinstaubarme Holzheizungen und Solarthermieanlagen, insbesondere im Rahmen von Quartierversorgungskonzepten mit Wärmenetzen. Von der Förderung müssen vor allem einkommensschwache Haushalte mit alten und ineffizienten Heizanlagen profitieren.'
			},
			{
				state: State.Approve,
				reason:
					'Der Mindestlohn ist bis 2026 auf 15 Euro zu erhöhen und dann jährlich an die Entwicklung der Lebenshaltungskosten anzupassen. Die Höhe des Mindestlohnes wurde von der ÖDP von Anfang an für zu niedrig gehalten, weil damit auch bei 45 Jahren Vollzeiterwerbstätigkeit keine Altersrente auf dem Niveau der Grundsicherung zu erreichen ist.'
			}
		]
	},
	{
		name: 'Partei für Verjüngungsforschung',
		abbreviation: 'Verjüngungsforschung',
		description:
			'Die Verjüngungsforschung wurde 2015 gegründet. Ihr einziges politisches Thema ist die Bekämpfung von Alterskrankheiten durch Förderung der schulmedizinischen Forschung. Hierfür fordert sie mehr Mittel aus den öffentlichen Haushalten und den Ausbau der universitären Forschung.',
		logo: 'parties/verjüngungsforschung.png',
		positions: [
			{
				state: State.Neutral,
				reason:
					'Unsere Partei hat hierzu keine Position. Das einzige Ziel der Partei für Verjüngungsforschung ist, die Entwicklung von Medizin zu beschleunigen, mit der Menschen durch Verjüngung tausende Jahre gesund leben können. Pro Tag sterben weltweit über 100.000 Menschen am Altern und damit verbundenen Alterskrankheiten. Zukünftige Medizin wird diese Menschenleben wahrscheinlich retten können. Dafür sollen 10% des Bundeshaushaltes pro Jahr zusätzlich in diesen Bereich investiert werden.'
			},
			{
				state: State.Neutral,
				reason:
					'Unsere Partei hat hierzu keine Position. Das einzige Ziel der Partei für Verjüngungsforschung ist, die Entwicklung von Medizin zu beschleunigen, mit der Menschen durch Verjüngung tausende Jahre gesund leben können. Pro Tag sterben weltweit über 100.000 Menschen am Altern und damit verbundenen Alterskrankheiten. Zukünftige Medizin wird diese Menschenleben wahrscheinlich retten können. Dafür sollen 10% des Bundeshaushaltes pro Jahr zusätzlich in diesen Bereich investiert werden.'
			},
			{
				state: State.Neutral,
				reason:
					'Unsere Partei hat hierzu keine Position. Das einzige Ziel der Partei für Verjüngungsforschung ist, die Entwicklung von Medizin zu beschleunigen, mit der Menschen durch Verjüngung tausende Jahre gesund leben können. Pro Tag sterben weltweit über 100.000 Menschen am Altern und damit verbundenen Alterskrankheiten. Zukünftige Medizin wird diese Menschenleben wahrscheinlich retten können. Dafür sollen 10% des Bundeshaushaltes pro Jahr zusätzlich in diesen Bereich investiert werden.'
			},
			{
				state: State.Neutral,
				reason:
					'Unsere Partei hat hierzu keine Position. Das einzige Ziel der Partei für Verjüngungsforschung ist, die Entwicklung von Medizin zu beschleunigen, mit der Menschen durch Verjüngung tausende Jahre gesund leben können. Pro Tag sterben weltweit über 100.000 Menschen am Altern und damit verbundenen Alterskrankheiten. Zukünftige Medizin wird diese Menschenleben wahrscheinlich retten können. Dafür sollen 10% des Bundeshaushaltes pro Jahr zusätzlich in diesen Bereich investiert werden.'
			},
			{
				state: State.Neutral,
				reason:
					'Unsere Partei hat hierzu keine Position. Das einzige Ziel der Partei für Verjüngungsforschung ist, die Entwicklung von Medizin zu beschleunigen, mit der Menschen durch Verjüngung tausende Jahre gesund leben können. Pro Tag sterben weltweit über 100.000 Menschen am Altern und damit verbundenen Alterskrankheiten. Zukünftige Medizin wird diese Menschenleben wahrscheinlich retten können. Dafür sollen 10% des Bundeshaushaltes pro Jahr zusätzlich in diesen Bereich investiert werden.'
			},
			{
				state: State.Neutral,
				reason:
					'Unsere Partei hat hierzu keine Position. Das einzige Ziel der Partei für Verjüngungsforschung ist, die Entwicklung von Medizin zu beschleunigen, mit der Menschen durch Verjüngung tausende Jahre gesund leben können. Pro Tag sterben weltweit über 100.000 Menschen am Altern und damit verbundenen Alterskrankheiten. Zukünftige Medizin wird diese Menschenleben wahrscheinlich retten können. Dafür sollen 10% des Bundeshaushaltes pro Jahr zusätzlich in diesen Bereich investiert werden.'
			},
			{
				state: State.Neutral,
				reason:
					'Unsere Partei hat hierzu keine Position. Das einzige Ziel der Partei für Verjüngungsforschung ist, die Entwicklung von Medizin zu beschleunigen, mit der Menschen durch Verjüngung tausende Jahre gesund leben können. Pro Tag sterben weltweit über 100.000 Menschen am Altern und damit verbundenen Alterskrankheiten. Zukünftige Medizin wird diese Menschenleben wahrscheinlich retten können. Dafür sollen 10% des Bundeshaushaltes pro Jahr zusätzlich in diesen Bereich investiert werden.'
			},
			{
				state: State.Neutral,
				reason:
					'Unsere Partei hat hierzu keine Position. Das einzige Ziel der Partei für Verjüngungsforschung ist, die Entwicklung von Medizin zu beschleunigen, mit der Menschen durch Verjüngung tausende Jahre gesund leben können. Pro Tag sterben weltweit über 100.000 Menschen am Altern und damit verbundenen Alterskrankheiten. Zukünftige Medizin wird diese Menschenleben wahrscheinlich retten können. Dafür sollen 10% des Bundeshaushaltes pro Jahr zusätzlich in diesen Bereich investiert werden.'
			},
			{
				state: State.Neutral,
				reason:
					'Unsere Partei hat hierzu keine Position. Das einzige Ziel der Partei für Verjüngungsforschung ist, die Entwicklung von Medizin zu beschleunigen, mit der Menschen durch Verjüngung tausende Jahre gesund leben können. Pro Tag sterben weltweit über 100.000 Menschen am Altern und damit verbundenen Alterskrankheiten. Zukünftige Medizin wird diese Menschenleben wahrscheinlich retten können. Dafür sollen 10% des Bundeshaushaltes pro Jahr zusätzlich in diesen Bereich investiert werden.'
			},
			{
				state: State.Neutral,
				reason:
					'Unsere Partei hat hierzu keine Position. Das einzige Ziel der Partei für Verjüngungsforschung ist, die Entwicklung von Medizin zu beschleunigen, mit der Menschen durch Verjüngung tausende Jahre gesund leben können. Pro Tag sterben weltweit über 100.000 Menschen am Altern und damit verbundenen Alterskrankheiten. Zukünftige Medizin wird diese Menschenleben wahrscheinlich retten können. Dafür sollen 10% des Bundeshaushaltes pro Jahr zusätzlich in diesen Bereich investiert werden.'
			},
			{
				state: State.Neutral,
				reason:
					'Unsere Partei hat hierzu keine Position. Das einzige Ziel der Partei für Verjüngungsforschung ist, die Entwicklung von Medizin zu beschleunigen, mit der Menschen durch Verjüngung tausende Jahre gesund leben können. Pro Tag sterben weltweit über 100.000 Menschen am Altern und damit verbundenen Alterskrankheiten. Zukünftige Medizin wird diese Menschenleben wahrscheinlich retten können. Dafür sollen 10% des Bundeshaushaltes pro Jahr zusätzlich in diesen Bereich investiert werden.'
			},
			{
				state: State.Neutral,
				reason:
					'Unsere Partei hat hierzu keine Position. Das einzige Ziel der Partei für Verjüngungsforschung ist, die Entwicklung von Medizin zu beschleunigen, mit der Menschen durch Verjüngung tausende Jahre gesund leben können. Pro Tag sterben weltweit über 100.000 Menschen am Altern und damit verbundenen Alterskrankheiten. Zukünftige Medizin wird diese Menschenleben wahrscheinlich retten können. Dafür sollen 10% des Bundeshaushaltes pro Jahr zusätzlich in diesen Bereich investiert werden.'
			},
			{
				state: State.Neutral,
				reason:
					'Unsere Partei hat hierzu keine Position. Das einzige Ziel der Partei für Verjüngungsforschung ist, die Entwicklung von Medizin zu beschleunigen, mit der Menschen durch Verjüngung tausende Jahre gesund leben können. Pro Tag sterben weltweit über 100.000 Menschen am Altern und damit verbundenen Alterskrankheiten. Zukünftige Medizin wird diese Menschenleben wahrscheinlich retten können. Dafür sollen 10% des Bundeshaushaltes pro Jahr zusätzlich in diesen Bereich investiert werden.'
			},
			{
				state: State.Neutral,
				reason:
					'Unsere Partei hat hierzu keine Position. Das einzige Ziel der Partei für Verjüngungsforschung ist, die Entwicklung von Medizin zu beschleunigen, mit der Menschen durch Verjüngung tausende Jahre gesund leben können. Pro Tag sterben weltweit über 100.000 Menschen am Altern und damit verbundenen Alterskrankheiten. Zukünftige Medizin wird diese Menschenleben wahrscheinlich retten können. Dafür sollen 10% des Bundeshaushaltes pro Jahr zusätzlich in diesen Bereich investiert werden.'
			},
			{
				state: State.Neutral,
				reason:
					'Unsere Partei hat hierzu keine Position. Das einzige Ziel der Partei für Verjüngungsforschung ist, die Entwicklung von Medizin zu beschleunigen, mit der Menschen durch Verjüngung tausende Jahre gesund leben können. Pro Tag sterben weltweit über 100.000 Menschen am Altern und damit verbundenen Alterskrankheiten. Zukünftige Medizin wird diese Menschenleben wahrscheinlich retten können. Dafür sollen 10% des Bundeshaushaltes pro Jahr zusätzlich in diesen Bereich investiert werden.'
			},
			{
				state: State.Neutral,
				reason:
					'Unsere Partei hat hierzu keine Position. Das einzige Ziel der Partei für Verjüngungsforschung ist, die Entwicklung von Medizin zu beschleunigen, mit der Menschen durch Verjüngung tausende Jahre gesund leben können. Pro Tag sterben weltweit über 100.000 Menschen am Altern und damit verbundenen Alterskrankheiten. Zukünftige Medizin wird diese Menschenleben wahrscheinlich retten können. Dafür sollen 10% des Bundeshaushaltes pro Jahr zusätzlich in diesen Bereich investiert werden.'
			},
			{
				state: State.Neutral,
				reason:
					'Unsere Partei hat hierzu keine Position. Das einzige Ziel der Partei für Verjüngungsforschung ist, die Entwicklung von Medizin zu beschleunigen, mit der Menschen durch Verjüngung tausende Jahre gesund leben können. Pro Tag sterben weltweit über 100.000 Menschen am Altern und damit verbundenen Alterskrankheiten. Zukünftige Medizin wird diese Menschenleben wahrscheinlich retten können. Dafür sollen 10% des Bundeshaushaltes pro Jahr zusätzlich in diesen Bereich investiert werden.'
			},
			{
				state: State.Neutral,
				reason:
					'Unsere Partei hat hierzu keine Position. Das einzige Ziel der Partei für Verjüngungsforschung ist, die Entwicklung von Medizin zu beschleunigen, mit der Menschen durch Verjüngung tausende Jahre gesund leben können. Pro Tag sterben weltweit über 100.000 Menschen am Altern und damit verbundenen Alterskrankheiten. Zukünftige Medizin wird diese Menschenleben wahrscheinlich retten können. Dafür sollen 10% des Bundeshaushaltes pro Jahr zusätzlich in diesen Bereich investiert werden.'
			},
			{
				state: State.Neutral,
				reason:
					'Unsere Partei hat hierzu keine Position. Das einzige Ziel der Partei für Verjüngungsforschung ist, die Entwicklung von Medizin zu beschleunigen, mit der Menschen durch Verjüngung tausende Jahre gesund leben können. Pro Tag sterben weltweit über 100.000 Menschen am Altern und damit verbundenen Alterskrankheiten. Zukünftige Medizin wird diese Menschenleben wahrscheinlich retten können. Dafür sollen 10% des Bundeshaushaltes pro Jahr zusätzlich in diesen Bereich investiert werden.'
			},
			{
				state: State.Neutral,
				reason:
					'Unsere Partei hat hierzu keine Position. Das einzige Ziel der Partei für Verjüngungsforschung ist, die Entwicklung von Medizin zu beschleunigen, mit der Menschen durch Verjüngung tausende Jahre gesund leben können. Pro Tag sterben weltweit über 100.000 Menschen am Altern und damit verbundenen Alterskrankheiten. Zukünftige Medizin wird diese Menschenleben wahrscheinlich retten können. Dafür sollen 10% des Bundeshaushaltes pro Jahr zusätzlich in diesen Bereich investiert werden.'
			},
			{
				state: State.Neutral,
				reason:
					'Unsere Partei hat hierzu keine Position. Das einzige Ziel der Partei für Verjüngungsforschung ist, die Entwicklung von Medizin zu beschleunigen, mit der Menschen durch Verjüngung tausende Jahre gesund leben können. Pro Tag sterben weltweit über 100.000 Menschen am Altern und damit verbundenen Alterskrankheiten. Zukünftige Medizin wird diese Menschenleben wahrscheinlich retten können. Dafür sollen 10% des Bundeshaushaltes pro Jahr zusätzlich in diesen Bereich investiert werden.'
			},
			{
				state: State.Neutral,
				reason:
					'Unsere Partei hat hierzu keine Position. Das einzige Ziel der Partei für Verjüngungsforschung ist, die Entwicklung von Medizin zu beschleunigen, mit der Menschen durch Verjüngung tausende Jahre gesund leben können. Pro Tag sterben weltweit über 100.000 Menschen am Altern und damit verbundenen Alterskrankheiten. Zukünftige Medizin wird diese Menschenleben wahrscheinlich retten können. Dafür sollen 10% des Bundeshaushaltes pro Jahr zusätzlich in diesen Bereich investiert werden.'
			},
			{
				state: State.Neutral,
				reason:
					'Unsere Partei hat hierzu keine Position. Das einzige Ziel der Partei für Verjüngungsforschung ist, die Entwicklung von Medizin zu beschleunigen, mit der Menschen durch Verjüngung tausende Jahre gesund leben können. Pro Tag sterben weltweit über 100.000 Menschen am Altern und damit verbundenen Alterskrankheiten. Zukünftige Medizin wird diese Menschenleben wahrscheinlich retten können. Dafür sollen 10% des Bundeshaushaltes pro Jahr zusätzlich in diesen Bereich investiert werden.'
			},
			{
				state: State.Neutral,
				reason:
					'Unsere Partei hat hierzu keine Position. Das einzige Ziel der Partei für Verjüngungsforschung ist, die Entwicklung von Medizin zu beschleunigen, mit der Menschen durch Verjüngung tausende Jahre gesund leben können. Pro Tag sterben weltweit über 100.000 Menschen am Altern und damit verbundenen Alterskrankheiten. Zukünftige Medizin wird diese Menschenleben wahrscheinlich retten können. Dafür sollen 10% des Bundeshaushaltes pro Jahr zusätzlich in diesen Bereich investiert werden.'
			},
			{
				state: State.Neutral,
				reason:
					'Unsere Partei hat hierzu keine Position. Das einzige Ziel der Partei für Verjüngungsforschung ist, die Entwicklung von Medizin zu beschleunigen, mit der Menschen durch Verjüngung tausende Jahre gesund leben können. Pro Tag sterben weltweit über 100.000 Menschen am Altern und damit verbundenen Alterskrankheiten. Zukünftige Medizin wird diese Menschenleben wahrscheinlich retten können. Dafür sollen 10% des Bundeshaushaltes pro Jahr zusätzlich in diesen Bereich investiert werden.'
			},
			{
				state: State.Neutral,
				reason:
					'Unsere Partei hat hierzu keine Position. Das einzige Ziel der Partei für Verjüngungsforschung ist, die Entwicklung von Medizin zu beschleunigen, mit der Menschen durch Verjüngung tausende Jahre gesund leben können. Pro Tag sterben weltweit über 100.000 Menschen am Altern und damit verbundenen Alterskrankheiten. Zukünftige Medizin wird diese Menschenleben wahrscheinlich retten können. Dafür sollen 10% des Bundeshaushaltes pro Jahr zusätzlich in diesen Bereich investiert werden.'
			},
			{
				state: State.Neutral,
				reason:
					'Unsere Partei hat hierzu keine Position. Das einzige Ziel der Partei für Verjüngungsforschung ist, die Entwicklung von Medizin zu beschleunigen, mit der Menschen durch Verjüngung tausende Jahre gesund leben können. Pro Tag sterben weltweit über 100.000 Menschen am Altern und damit verbundenen Alterskrankheiten. Zukünftige Medizin wird diese Menschenleben wahrscheinlich retten können. Dafür sollen 10% des Bundeshaushaltes pro Jahr zusätzlich in diesen Bereich investiert werden.'
			},
			{
				state: State.Neutral,
				reason:
					'Unsere Partei hat hierzu keine Position. Das einzige Ziel der Partei für Verjüngungsforschung ist, die Entwicklung von Medizin zu beschleunigen, mit der Menschen durch Verjüngung tausende Jahre gesund leben können. Pro Tag sterben weltweit über 100.000 Menschen am Altern und damit verbundenen Alterskrankheiten. Zukünftige Medizin wird diese Menschenleben wahrscheinlich retten können. Dafür sollen 10% des Bundeshaushaltes pro Jahr zusätzlich in diesen Bereich investiert werden.'
			},
			{
				state: State.Neutral,
				reason:
					'Unsere Partei hat hierzu keine Position. Das einzige Ziel der Partei für Verjüngungsforschung ist, die Entwicklung von Medizin zu beschleunigen, mit der Menschen durch Verjüngung tausende Jahre gesund leben können. Pro Tag sterben weltweit über 100.000 Menschen am Altern und damit verbundenen Alterskrankheiten. Zukünftige Medizin wird diese Menschenleben wahrscheinlich retten können. Dafür sollen 10% des Bundeshaushaltes pro Jahr zusätzlich in diesen Bereich investiert werden.'
			},
			{
				state: State.Neutral,
				reason:
					'Unsere Partei hat hierzu keine Position. Das einzige Ziel der Partei für Verjüngungsforschung ist, die Entwicklung von Medizin zu beschleunigen, mit der Menschen durch Verjüngung tausende Jahre gesund leben können. Pro Tag sterben weltweit über 100.000 Menschen am Altern und damit verbundenen Alterskrankheiten. Zukünftige Medizin wird diese Menschenleben wahrscheinlich retten können. Dafür sollen 10% des Bundeshaushaltes pro Jahr zusätzlich in diesen Bereich investiert werden.'
			},
			{
				state: State.Neutral,
				reason:
					'Unsere Partei hat hierzu keine Position. Das einzige Ziel der Partei für Verjüngungsforschung ist, die Entwicklung von Medizin zu beschleunigen, mit der Menschen durch Verjüngung tausende Jahre gesund leben können. Pro Tag sterben weltweit über 100.000 Menschen am Altern und damit verbundenen Alterskrankheiten. Zukünftige Medizin wird diese Menschenleben wahrscheinlich retten können. Dafür sollen 10% des Bundeshaushaltes pro Jahr zusätzlich in diesen Bereich investiert werden.'
			},
			{
				state: State.Neutral,
				reason:
					'Unsere Partei hat hierzu keine Position. Das einzige Ziel der Partei für Verjüngungsforschung ist, die Entwicklung von Medizin zu beschleunigen, mit der Menschen durch Verjüngung tausende Jahre gesund leben können. Pro Tag sterben weltweit über 100.000 Menschen am Altern und damit verbundenen Alterskrankheiten. Zukünftige Medizin wird diese Menschenleben wahrscheinlich retten können. Dafür sollen 10% des Bundeshaushaltes pro Jahr zusätzlich in diesen Bereich investiert werden.'
			},
			{
				state: State.Neutral,
				reason:
					'Unsere Partei hat hierzu keine Position. Das einzige Ziel der Partei für Verjüngungsforschung ist, die Entwicklung von Medizin zu beschleunigen, mit der Menschen durch Verjüngung tausende Jahre gesund leben können. Pro Tag sterben weltweit über 100.000 Menschen am Altern und damit verbundenen Alterskrankheiten. Zukünftige Medizin wird diese Menschenleben wahrscheinlich retten können. Dafür sollen 10% des Bundeshaushaltes pro Jahr zusätzlich in diesen Bereich investiert werden.'
			},
			{
				state: State.Neutral,
				reason:
					'Unsere Partei hat hierzu keine Position. Das einzige Ziel der Partei für Verjüngungsforschung ist, die Entwicklung von Medizin zu beschleunigen, mit der Menschen durch Verjüngung tausende Jahre gesund leben können. Pro Tag sterben weltweit über 100.000 Menschen am Altern und damit verbundenen Alterskrankheiten. Zukünftige Medizin wird diese Menschenleben wahrscheinlich retten können. Dafür sollen 10% des Bundeshaushaltes pro Jahr zusätzlich in diesen Bereich investiert werden.'
			},
			{
				state: State.Neutral,
				reason:
					'Unsere Partei hat hierzu keine Position. Das einzige Ziel der Partei für Verjüngungsforschung ist, die Entwicklung von Medizin zu beschleunigen, mit der Menschen durch Verjüngung tausende Jahre gesund leben können. Pro Tag sterben weltweit über 100.000 Menschen am Altern und damit verbundenen Alterskrankheiten. Zukünftige Medizin wird diese Menschenleben wahrscheinlich retten können. Dafür sollen 10% des Bundeshaushaltes pro Jahr zusätzlich in diesen Bereich investiert werden.'
			},
			{
				state: State.Neutral,
				reason:
					'Unsere Partei hat hierzu keine Position. Das einzige Ziel der Partei für Verjüngungsforschung ist, die Entwicklung von Medizin zu beschleunigen, mit der Menschen durch Verjüngung tausende Jahre gesund leben können. Pro Tag sterben weltweit über 100.000 Menschen am Altern und damit verbundenen Alterskrankheiten. Zukünftige Medizin wird diese Menschenleben wahrscheinlich retten können. Dafür sollen 10% des Bundeshaushaltes pro Jahr zusätzlich in diesen Bereich investiert werden.'
			},
			{
				state: State.Neutral,
				reason:
					'Unsere Partei hat hierzu keine Position. Das einzige Ziel der Partei für Verjüngungsforschung ist, die Entwicklung von Medizin zu beschleunigen, mit der Menschen durch Verjüngung tausende Jahre gesund leben können. Pro Tag sterben weltweit über 100.000 Menschen am Altern und damit verbundenen Alterskrankheiten. Zukünftige Medizin wird diese Menschenleben wahrscheinlich retten können. Dafür sollen 10% des Bundeshaushaltes pro Jahr zusätzlich in diesen Bereich investiert werden.'
			},
			{
				state: State.Neutral,
				reason:
					'Unsere Partei hat hierzu keine Position. Das einzige Ziel der Partei für Verjüngungsforschung ist, die Entwicklung von Medizin zu beschleunigen, mit der Menschen durch Verjüngung tausende Jahre gesund leben können. Pro Tag sterben weltweit über 100.000 Menschen am Altern und damit verbundenen Alterskrankheiten. Zukünftige Medizin wird diese Menschenleben wahrscheinlich retten können. Dafür sollen 10% des Bundeshaushaltes pro Jahr zusätzlich in diesen Bereich investiert werden.'
			}
		]
	},
	{
		name: 'Partei der Humanisten - Fakten, Freiheit, Fortschritt',
		abbreviation: 'PdH',
		description:
			'Die 2014 gegründete PdH stellt den Menschen als selbstbestimmtes, soziales und vernünftiges Individuum in den Mittelpunkt ihrer Politik. Sie wendet sich gegen die Verbindung von Staat und Religion und will ihre Positionen kontinuierlich an neue wissenschaftliche Erkenntnisse anpassen.',
		logo: 'parties/pdh.png',
		positions: [
			{
				state: State.Approve,
				reason:
					'Dem Völkerrecht nach hat jede Nation das Recht, sich selbst zu verteidigen und ihre Souveränität zu schützen. Die Ukraine gebietet der imperialistischen Aggression Russlands Einhalt und verteidigt damit auch die Freiheit ganz Europas. Dafür steht Deutschland als starke, freiheitliche Demokratie in der moralischen Verantwortung, der Ukraine finanzielle und militärische Unterstützung zu gewährleisten. Dies beinhaltet auch und vor allem die Lieferung schwerer Waffen.'
			},
			{
				state: State.Approve,
				reason:
					'Wir sind für den Ausbau erneuerbarer Energien, allerdings muss dafür der Ausbau Energiespeichern und Netzen höchste Priorität bekommen, da diese Teile des Energiesystems im Moment unterentwickelt sind. Wir plädieren für eine Überarbeitung der Marktmechanismen und Anreizsysteme, um Fehlentwicklungen beim Ausbau erneuerbarer Erzeugung, wie ungenutzte Überangebote, zu reduzieren.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir sprechen uns nicht nur für die Abschaffung von Auflagen, Sanktionen und Vermögensprüfungen aus, sondern wollen auch die Nutzung von Hinzuverdienstmöglichkeiten erleichtern. Langfristig setzen wir uns für ein Grundeinkommen ein, um für mehr Selbstbestimmung und weniger Bevormundung zu sorgen.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir befürworten ein flexibles Tempolimit, um Schadstoffausstoß und Verkehrsunfälle zu reduzieren und den Fahrfluss zu optimieren. Die Geschwindigkeitsgrenze sollte durch digitale, automatisierte Verkehrsleitsysteme an die Bedingungen angepasst werden.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir schlagen ein dreistufiges Vorgehen für die Verteilung aufgenommener Flüchtlinge innerhalb Europas vor. Es besteht aus einer verbindlichen Aufnahmequote, einem Handelssystem der Zertifikate auf Unterbringungsverpflichtung und einem Matchingsystem, das die Präferenzen der Länder mit denen der Asylsuchenden zusammenbringt. Dadurch werden eine kosteneffiziente Unterbringung und bestmögliche Versorgung sowie größtmögliche Selbstbestimmung der Länder gewährleistet.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir fordern, Mietpreisbremsen abzuschaffen und stattdessen einen Investitionsfokus auf direkte Maßnahmen der Wohnraumgewinnung zu legen, um die Ursachen der Wohnraumverknappung zu bekämpfen. Außerdem fordern wir die Abschaffung von Bürokratie, mehr Hochhäuser, die Förderung von alternativen Wohnmodellen und das Leben auf dem Land attraktiver zu machen.'
			},
			{
				state: State.Disprove,
				reason:
					'Den Einsatz flächendeckender biometrischer Überwachung lehnen wir ab, da er alle Bürger unter Generalverdacht stellt und ein solcher Eingriff in die Freiheitsrechte unserer Auffassung nach nicht gerechtfertigt ist. Biometrische Technologien bergen erhebliche Risiken, wie bspw. hohe Fehlerquoten, Bias oder den unerlaubten Zugriff auf personenbezogene Daten. Deshalb sind wir der Überzeugung, dass solche biometrische Technologien streng reguliert werden müssen.'
			},
			{
				state: State.Neutral,
				reason:
					'In erster Linie wollen wir niedrige Stromkosten durch ausreichende Investitionen in die Energieversorgung sicherstellen. Um die Wettbewerbsfähigkeit deutscher Unternehmen auf dem Weltmarkt nicht zu gefährden, kann eine vorübergehende Subventionierung einzelner Industrien notwendig sein.'
			},
			{
				state: State.Neutral,
				reason:
					'Ein Rentenbeginn mit vollem Grundsicherungsanspruch sollte ab einer akzeptierten Lebensleistung unabhängig von den Beitragsjahren möglich sein. Die Beitragsjahre allein sind hier nicht relevant. Die Rentenhöhe sollte wie bei kapitalbasierten Alterssicherungen mithilfe anerkannter mathematischer Methoden des Versicherungswesens berechnet werden. Dabei könnten Risiken bestimmter Berufsgruppen mitberücksichtigt werden.'
			},
			{
				state: State.Disprove,
				reason:
					'Religion und Staat gehören getrennt! Wir fordern nicht nur die Streichung des Gottesbezugs aus dem Grundgesetz, sondern auch die Abschaffung der Kirchenstaatsleistungen, der stillen Feiertage, des kirchlichen Arbeitsrechts und der Kirchensteuer. Auch religiös motivierte Gesetzgebung bei Sterbehilfe, Schwanger&shy;schafts&shy;abbruch, Beschneidung, Sonntagsverkaufsverbot u. v. m. gehört beendet. Religionsunterricht muss durch Ethikunterricht ersetzt werden. Es ist Zeit für gottlose Politik!'
			},
			{
				state: State.Approve,
				reason:
					'Einwanderung kann dazu beitragen, dem Fachkräftemangel entgegenzuwirken. Daher gilt: Wer als Fachkraft in Europa angestellt werden kann, soll die Möglichkeit haben, seine Qualifikation im europäischen Arbeitsmarkt anzuwenden. Daher erkennen wir mehr internationale Abschlüsse an und vereinfachen gezielt die Einwanderung in unseren Arbeitsmarkt.'
			},
			{
				state: State.Approve,
				reason:
					'Aus Sicht des Klimaschutzes hätte der Ausstieg aus der Kohle- und Gasverstromung vor dem Ausstieg aus der Kernenergie erfolgen müssen. Wir plädieren für eine ergebnisoffene Prüfung der Wiederinbetriebnahme der letzten abgeschalteten Kernkraftwerke und einen Wiedereinstieg in die Kernenergie. Langfristig favorisieren wir ein hybrides System aus erneuerbaren Energiequellen, Kernkraftwerken, den sowieso nötigen Speichertechnologien und der Wasserstoffwirtschaft.'
			},
			{
				state: State.Approve,
				reason:
					'Wir fordern die Einführung einer weiteren Tarifzone der Einkommenssteuer ab einem Jahresbruttoeinkommen von einer Million Euro mit einem Spitzensteuersatz von 50 %. Wirtschaftlich starke Schultern sollen auch einen fairen Anteil für die Gesellschaft tragen. Dies trägt zu mehr sozialer Gerechtigkeit bei und finanziert dringend notwendige Investitionen in unsere Zukunft.'
			},
			{
				state: State.Approve,
				reason:
					'Wir setzen uns für ein bundesweit einheitliches Bildungssystem, eine tatsächlich inklusive Bildungslandschaft und Möglichkeiten für lebenslanges Lernen ein. Unser Ziel ist es, einheitliche Bildungsstandards zunächst auf nationaler und langfristig auf europäischer Ebene zu etablieren. Damit wird die Vergleichbarkeit von Kompetenzen und Abschlüssen erhöht und die Qualität der Ausbildung ortsunabhängig gewährleistet.'
			},
			{
				state: State.Neutral,
				reason:
					'Der Export von Rüstungsgütern kann erst nach sorgfältigem Abwägen der politischen und Menschenrechtslage erfolgen. Der Nahost-Konflikt ist äußerst komplex und die Versorgung mit verlässlichen und nachprüfbaren Informationen aus der Region dürftig. Israel ist ein langjähriger Verbündeter Deutschlands und ist zweifelsohne zahlreichen terroristischen Angriffen ausgesetzt. Jedoch müssen auch die militärischen Gegenmaßnahmen geprüft werden. Wir haben noch keine Position zu diesem schwierigen Thema.'
			},
			{
				state: State.Approve,
				reason:
					'Wir möchten die Zwei-Klassen-Medizin abschaffen und eine solidarische Bürgerversicherung einführen, in die jeder Bürger einkommensabhängig einzahlt. Ein einheitlicher, evidenzbasierter Leistungskatalog sowie ein reduzierter Verwaltungsaufwand können Kosten sparen und allen Menschen eine optimale und faire Versorgung bieten. Private Krankenversicherungen sollen in freiwillige Zusatzversicherungen überführt werden.'
			},
			{
				state: State.Approve,
				reason:
					'Wir setzen uns dafür ein, dass Führungspositionen primär nach Qualifikationen und nicht nach anderen Kriterien besetzt werden. Daher sollen Frauen, die gleiche Qualifikationen wie ihre männlichen Kollegen besitzen, auch gleiche Bezahlung und Aufstiegschancen erhalten. Zudem ist Care-Arbeit von unserer gesamten Gesellschaft zu tragen und darf nicht länger zu einer Benachteiligung von Frauen führen. Gleichberechtigung ist für Humanisten eine Selbstverständlichkeit.'
			},
			{
				state: State.Disprove,
				reason:
					'Ökologische Landwirtschaft, wie sie heute definiert ist, kann unter Umständen weniger umweltfreundlich als die konventionelle Landwirtschaft sein. Ein Grund dafür sind z.B. geringere Erträge, welche zu einem größeren Flächenverbrauch führen. Darum setzen wir uns für das Konzept der „nachhaltigen Intensivierung“ ein, mit dem wir unter Verwendung moderner Technologien (z. B. grüne Gentechnik) gleichzeitig hohe Erträge, hochwertige Nahrungsmittel und geringe Umweltbelastungen verwirklichen wollen.'
			},
			{
				state: State.Approve,
				reason:
					'Extremismus stellt eine Gefahr für unsere freiheitliche, demokratische Gesellschaft dar. Projekte insbesondere zur Demokratieförderung, Sensibilisierung und Extremismusprävention sollten deshalb verstärkt finanziell gefördert werden. Hierzu zählen wir auch niederschwellige Angebote für Aussteiger, um diese wieder erfolgreich in unsere Gesellschaft zu integrieren.'
			},
			{
				state: State.Approve,
				reason:
					'Für uns als PdH ist es inakzeptabel, dass Produkte durch Zwangs- oder Kinderarbeit oder unter anderen inhumanen Umständen hergestellt werden. Wir stehen für ein möglichst unbürokratisches Lieferkettengesetz ein, das Unternehmen verpflichtet, soziale, menschenrechtliche, ökologische und klimafreundliche Standards in ihrer gesamten Wertschöpfung einzuhalten. Unternehmen, die diese Standards nicht erfüllen, wollen wir sanktionieren.'
			},
			{
				state: State.Disprove,
				reason:
					'Bildung ist für uns ein Grundrecht jedes Menschen. Das aktuelle BAföG ist zu bürokratisch und lässt zu viele Studenten durch das Raster fallen. Alle Studenten sollten unabhängig von familiären Rahmenbedingungen die benötigte Unterstützung erhalten, um sich ganz dem Studium widmen zu können. Bildung befähigt Menschen dazu, ihr volles Potenzial zu entfalten und das Leben nach eigenen Wünschen zu gestalten. Langfristig möchten wir das BAföG in ein universelles Grundeinkommen überführen.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir fordern eine Reform der Schuldenbremse. Der aktuelle Investitionsstau bedroht die wirtschaftliche Entwicklung in Deutschland und damit unseren Wohlstand. Notwendige Investitionen dürfen nicht an der Finanzierung scheitern.'
			},
			{
				state: State.Approve,
				reason:
					'Mit einer Arbeitserlaubnis können Asylsuchende für ihren Lebensunterhalt selbst sorgen. Erwerbstätigkeit und aktive gesellschaftliche Teilnahme fördern und erleichtern außerdem das Erlernen von Sprache und begünstigen die Integration. So kann Ausgrenzungen vorgebeugt werden.'
			},
			{
				state: State.Disprove,
				reason:
					'Der menschengemachte Klimawandel ist eine der größten gesellschaftlichen Herausforderungen unserer Zeit. Wir glauben, dass es unsere Verantwortung ist, wir aber auch die Möglichkeit haben, diese vom Menschen verursachte Entwicklung aufzuhalten und bestenfalls umzukehren. Wir streben eine gesamtgesellschaftliche Anstrengung für Klimaschutz und -gerechtigkeit an.'
			},
			{
				state: State.Neutral,
				reason:
					'Solche Modelle können sich für Arbeitgeber und Arbeitnehmer als vorteilhaft erweisen. Kürzere Wochenarbeitszeiten oder 4-Tage-Wochen könnten zufriedenere, gesündere und produktivere Mitarbeiter zur Folge haben. Aktuell sprechen wir uns weder für noch gegen eine 35-Stunden-Woche aus. Wir wollen eine faire Zusammenarbeit zwischen Arbeitnehmern und Arbeitgebern und setzen uns für bessere Bedingungen und die Erprobung flexibler und progressiver Arbeitsmodelle ein.'
			},
			{
				state: State.Disprove,
				reason:
					'Strenge Abtreibungsgesetze führen nicht zu weniger Schwangerschaftsabbrüchen, sondern nur zu größeren Risiken für Schwangere und Ärzte. Wir fordern die vollständige Legalisierung von Schwangerschaftsabbrüchen ohne Fristen. Hierfür muss auch § 218 StGB ersatzlos gestrichen und eine flächendeckende Versorgung durch Kliniken, telemedizinische Angebote und Beratungsstellen sichergestellt werden. Die Beratungspflicht wollen wir beibehalten, sie jedoch ergebnisoffen und neutral gestalten.'
			},
			{
				state: State.Disprove,
				reason:
					'Eine gemeinsame Währung fördert Wachstum und Handel und senkt Kosten. Die Europäische Union ist dringend auf den Euro als gemeinsame Währung angewiesen. Die Rückkehr zu nationalen Währungen würde der Gemeinschaft und den einzelnen Ländern massiv schaden. Klar ist aber auch, dass Mitgliedsländer mit schwacher Wirtschaft und aufgeblähtem Staatswesen dringend nötige Reformen und Strukturprogramme anstoßen müssen, um die finanziellen Fliehkräfte innerhalb der EU zu begrenzen.'
			},
			{
				state: State.Approve,
				reason:
					'Die Bahn stellt in vielen Bereichen des Personen- und Gütertransports eine klimafreundlichere und günstigere Alternative als das Auto dar. Die Unzuverlässigkeit der Bahn frustriert nicht nur, sondern verursacht aktuell auch wirtschaftlichen Schaden sowie unnötige Emissionen. Die bisherige Priorisierung der Autobahn führte nur zu einer erhöhten Nachfrage und nicht zu besserem Verkehrsfluss (sogenannte induzierte Nachfrage), was die Belastung der Straßen weiter erhöhte.'
			},
			{
				state: State.Neutral,
				reason:
					'Wir haben Hochachtung vor ehrenamtlichen Tätigkeiten. Ein möglicher bürokratischer Mehraufwand für die rententechnische Bewertung der Tätigkeiten sowie entstehende Kosten müssen geprüft werden. Ein Ehrenamt muss weiterhin niedrigschwellig auszuüben sein und darf nicht dauerhaft zum unvergüteten und unqualifizierten Ausgleich personeller Engpässe ausgenutzt werden.'
			},
			{
				state: State.Neutral,
				reason:
					'Wir setzen uns für niedrige Mieten ein und wollen dafür insbesondere mehr Wohnraum schaffen. Dafür wollen wir bürokratische Hürden abbauen, mehr in die Höhe bauen und moderne Wohnmodelle fördern. Dabei ist auch sozialverträgliches Bauen wie zum Beispiel in Wien wichtig.'
			},
			{
				state: State.Disprove,
				reason:
					'Das Streikrecht gehört zu den fundamentalen Rechten der Beschäftigten. Ohne Streiks entfällt ein Druckmittel der Arbeitnehmerseite in Tarifverhandlungen, wodurch es keine Verhandlungen mehr auf Augenhöhe gäbe. Gleichzeitig ist die Grundversorgung in kritischen Bereichen wie der Gesundheitsversorgung durch Notdienstvereinbarungen stets gesichert. Das Streikrecht sollte dagegen auf die Betriebe ausgeweitet werden, die sich in kirchlicher Trägerschaft befinden.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir fordern deutlich mehr Beteiligungsmöglichkeiten, damit Bürger auch abseits von Wahlen aktiv die Politik mitgestalten zu können. Bei Sachfragen bergen Volksabstimmungen jedoch die Gefahr, dass Entscheidungen emotionalisiert getroffen werden. Bürgerinitiativen und Petitionen können allerdings bei Werteentscheidungen richtungsweisend sein – wir wollen diese daher stärken und modernisieren.'
			},
			{
				state: State.Disprove,
				reason:
					'Das Strafrecht ist das schärfste Schwert des Rechtsstaats. Es soll mündige und einsichtsfähige Bürger durch Sanktionierung von kriminellem Verhalten in die Gesellschaft zurückführen oder weitere Straftaten verhindern. Grundlage für eine Verurteilung ist die Schuldfähigkeit. Da diese bei Kindern nicht angenommen werden kann, ist eine Bestrafung von Kindern nicht angemessen. Kinder brauchen stattdessen Zuwendung und Unterstützung durch kompetente und arbeitsfähige Jugendämter.'
			},
			{
				state: State.Neutral,
				reason:
					'Wir bekennen uns zum freien Welthandel und sehen die Vorteile, die er uns bringt. Deutschland und Europa sollen zunehmend unabhängiger von China werden, ohne durch hohe Zölle und Subventionen auf Exportgüter eine für alle schädliche Abschottungsspirale in Gang zu setzen. Wir müssen aber sowohl unsere deutsche Industrie als auch den gesamte europäischen Wirtschaftsstandort schützen.'
			},
			{
				state: State.Approve,
				reason:
					'Die doppelte Staats&shy;bürgerschaft ermöglicht eine stärkere gesellschaftliche und politische Teilhabe und trägt somit zur Integration bei. Eine Person kann sich zu mehr als einem Land zugehörig fühlen. Diese Identifikation sollte sich auch in mehreren Staats&shy;bürgerschaften widerspiegeln können.'
			},
			{
				state: State.Disprove,
				reason:
					'Einen Pflichtdienst lehnen wir ab, da er einen ungerechtfertigten Eingriff in das Grundrecht der freien Entfaltung des Individuums darstellt, sowie zum unvergüteten und unqualifizierten Ausgleich personeller Engpässe animiert. Das Konzept der Freiwilligendienste sollte aber altersunabhängig weiterhin gefördert und durch Anreize gestärkt werden.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir wollen, dass keine fossilen Brennstoffe mehr zur Wärmeerzeugung verwendet werden, da sie nachweislich Luftschadstoffe erzeugen und klimaschädlich sind Durch den steigenden Preis für CO2-Emissionen lohnt es sich automatisch, auf andere Wärmequellen wie Wärmepumpen oder lokale Wärmenetze umzusteigen. Wir fordern eine faktenbasierte Diskussion über die Zusammenhänge von Wärmeerzeugung und Klima- und Umweltschutz.'
			},
			{
				state: State.Neutral,
				reason:
					'Die angemessene Höhe des Mindestlohns sollte durch die Mindestlohnkommission sachlich und unabhängig festgelegt werden - nicht durch in Wahlkämpfen populäre Versprechen. Niedrige Nettoeinkommen trotz Vollzeitjob schränken Arbeitnehmer in ihren Möglichkeiten zur Selbstverwirklichung ein. Als Mittel zur sozialen Grundsicherung fordern wir die schrittweise Einführung eines Grundeinkommens.'
			}
		]
	},
	{
		name: 'Bündnis C - Christen für Deutschland',
		abbreviation: 'Bündnis C',
		description:
			'Bündnis C entstand 2015 aus der Fusion zweier christlicher Parteien. Positionen wie die Förderung der traditionellen Familie, die Ablehnung von Schwangerschaftsabbrüchen oder der Schutz der Umwelt leitet die Partei aus christlichen Werten und einem biblischen Menschenbild ab.',
		logo: 'parties/bündnis_c.png',
		positions: [
			{ state: State.Neutral, reason: '' },
			{ state: State.Disprove, reason: '' },
			{ state: State.Approve, reason: '' },
			{ state: State.Neutral, reason: '' },
			{ state: State.Approve, reason: '' },
			{ state: State.Disprove, reason: '' },
			{ state: State.Disprove, reason: '' },
			{ state: State.Neutral, reason: '' },
			{ state: State.Disprove, reason: '' },
			{ state: State.Approve, reason: '' },
			{ state: State.Disprove, reason: '' },
			{ state: State.Approve, reason: '' },
			{ state: State.Disprove, reason: '' },
			{ state: State.Disprove, reason: '' },
			{ state: State.Approve, reason: '' },
			{ state: State.Disprove, reason: '' },
			{ state: State.Approve, reason: '' },
			{ state: State.Approve, reason: '' },
			{ state: State.Disprove, reason: '' },
			{ state: State.Disprove, reason: '' },
			{ state: State.Approve, reason: '' },
			{ state: State.Approve, reason: '' },
			{ state: State.Approve, reason: '' },
			{ state: State.Approve, reason: '' },
			{ state: State.Disprove, reason: '' },
			{ state: State.Approve, reason: '' },
			{ state: State.Approve, reason: '' },
			{ state: State.Neutral, reason: '' },
			{ state: State.Approve, reason: '' },
			{ state: State.Approve, reason: '' },
			{ state: State.Disprove, reason: '' },
			{ state: State.Approve, reason: '' },
			{ state: State.Approve, reason: '' },
			{ state: State.Disprove, reason: '' },
			{ state: State.Disprove, reason: '' },
			{ state: State.Approve, reason: '' },
			{ state: State.Approve, reason: '' },
			{ state: State.Disprove, reason: '' }
		]
	},
	{
		name: 'Bayernpartei',
		abbreviation: 'BP',
		description:
			'Zentrale Ziele der 1946 gegründeten BP sind die bayerische Eigenstaatlichkeit und der Ausbau der direkten Demokratie. Außerdem fordert sie u. a. die Förderung kleiner und mittelständischer Unternehmen, die Einführung eines Erziehungsgehalts und lehnt die doppelte Staats&shy;bürgerschaft ab.',
		logo: 'parties/bp.png',
		positions: [
			{ state: State.Neutral, reason: '' },
			{ state: State.Disprove, reason: '' },
			{ state: State.Approve, reason: '' },
			{ state: State.Disprove, reason: '' },
			{ state: State.Approve, reason: '' },
			{ state: State.Disprove, reason: '' },
			{ state: State.Disprove, reason: '' },
			{ state: State.Approve, reason: '' },
			{ state: State.Approve, reason: '' },
			{ state: State.Approve, reason: '' },
			{ state: State.Disprove, reason: '' },
			{ state: State.Approve, reason: '' },
			{ state: State.Disprove, reason: '' },
			{
				state: State.Disprove,
				reason: 'Die Bildung unserer Kinder ist zu wichtig, um sie dem Bund zu überlassen.'
			},
			{ state: State.Approve, reason: '' },
			{
				state: State.Disprove,
				reason:
					'Die Thematik der Krankenversicherung sollte, wie praktisch alle wichtigen politischen Fragen, nicht auf Bundesebene, sondern durch die Länder entschieden werden.'
			},
			{ state: State.Approve, reason: '' },
			{ state: State.Disprove, reason: '' },
			{
				state: State.Disprove,
				reason:
					'Die Thematik der Förderung von Projekten gegen Extremismus sollte, wie praktisch alle wichtigen politischen Fragen, nicht auf Bundesebene, sondern durch die Länder entschieden werden.'
			},
			{ state: State.Disprove, reason: '' },
			{
				state: State.Disprove,
				reason:
					'Die Thematik der Ausbildungsförderung sollte, wie praktisch alle wichtigen politischen Fragen, nicht auf Bundesebene, sondern durch die Länder entschieden werden. Auf bayerischer Ebene tritt die Bayernpartei für eine elternunabhängige Ausbildungsförderung ein.'
			},
			{
				state: State.Approve,
				reason:
					'Da Bayern im Falle der von uns angestrebten Unabhängigkeit auch seinen fairen Anteil an den Staatsschulden des Bundes übernehmen wird, wenden wir uns gegen jedes weitere Hasardieren durch die Bundesregierung und die verantwortlichen bundesdeutschen Parteien.'
			},
			{ state: State.Approve, reason: '' },
			{ state: State.Approve, reason: '' },
			{
				state: State.Disprove,
				reason:
					'Die Thematik der Arbeitszeit sollte, wie praktisch alle wichtigen politischen Fragen, nicht auf Bundesebene, sondern durch die Länder entschieden werden.'
			},
			{ state: State.Approve, reason: '' },
			{ state: State.Neutral, reason: '' },
			{ state: State.Disprove, reason: '' },
			{ state: State.Approve, reason: '' },
			{
				state: State.Neutral,
				reason:
					'Die Thematik des Mietrechts sollte, wie praktisch alle wichtigen politischen Fragen, nicht auf Bundesebene, sondern durch die Länder entschieden werden. In Bayern wollen wir diese Steuer abschaffen, sodass sich die Frage der Umlage nicht mehr stellt.'
			},
			{
				state: State.Neutral,
				reason:
					'Die Thematik des Streikrechts sollte, wie praktisch alle wichtigen politischen Fragen, nicht auf Bundesebene, sondern durch die Länder entschieden werden.'
			},
			{ state: State.Disprove, reason: '' },
			{ state: State.Approve, reason: '' },
			{ state: State.Disprove, reason: '' },
			{
				state: State.Disprove,
				reason:
					'Die deutsche Staats&shy;bürgerschaft ist für uns als Bayernpartei nicht besonders relevant. Wir setzen uns vielmehr dafür ein, die in der Verfassung vorgesehene bayerische Staats&shy;bürgerschaft endlich umzusetzen. Neben dieser sollte eine weitere Staats&shy;bürgerschaft die absolute Ausnahme sein.'
			},
			{ state: State.Disprove, reason: '' },
			{ state: State.Approve, reason: '' },
			{
				state: State.Disprove,
				reason:
					'Die Thematik des gesetzlichen Mindestlohns sollte, wie praktisch alle wichtigen politischen Fragen, nicht auf Bundesebene, sondern durch die Länder entschieden werden.'
			}
		]
	},
	{
		name: 'Marxistisch-Leninistische Partei Deutschlands',
		abbreviation: 'MLPD',
		description:
			'Die 1982 gegründete MLPD ist eine kommunistische Partei. Sie bezieht sich auf Marx, Engels, Lenin, Stalin und Mao Zedong und sieht sich als radikal linke Alternative zu anderen politischen Kräften. Sie wird vom Bundesamt für Verfassungsschutz als linksextremistisch eingestuft.',
		logo: 'parties/mlpd.png',
		positions: [
			{
				state: State.Disprove,
				reason:
					'Ein klares Nein zu Waffenlieferungen für alle ungerechten Kriege von NATO/EU/Ukraine und Russland! Aktiver Widerstand gegen die Weltkriegsgefahr! Für Frieden und Völkerfreundschaft!'
			},
			{
				state: State.Approve,
				reason:
					'Die globale Umweltkatastrophe hat bereits begonnen. Die Beschlüsse der Pariser Klimakonferenz sind völlig unzureichend. In Europa hat sich das Klima schon um 2,2 Grad gegenüber dem vorindustriellen Zeitalter erwärmt. Eine sofortige Umstellung auf Auf- und Ausbau der Energieerzeugung auf Sonnen-, Wind-, Wellen- und Wasserkraft sowie Erdwärme ist dringend notwendig und möglich.'
			},
			{
				state: State.Disprove,
				reason:
					'Selbstverständlich sind wir dafür, dass jeder, dem es gesundheitlich möglich ist, arbeitet und zum gesellschaftlichen Leben beiträgt. Doch die mit Hartz IV und jetzt dem Bürgergeld eingeführten Sanktionsmaßnahmen haben nur den Zweck, schlechte Arbeitsbedingungen und Löhne zu legitimieren.'
			},
			{
				state: State.Approve,
				reason:
					'Die Parole „Freie Fahrt für freie Bürger“ ist Ausdruck eines rücksichtslos-egoistischen Freiheitsbegriffs. Das Tempolimit würde das Fahrverhalten auf den Autobahnen beruhigen, den Verkehrsfluss sogar fördern, Energie sparen und die Unfallzahlen weiter nach unten drücken.'
			},
			{
				state: State.Disprove,
				reason:
					'Diese Maßnahme ist Bestandteil einer reaktionären und faschistoiden Flüchtlingspolitik mit dem Ziel, Flüchtlinge zu bekämpfen und nicht die Fluchtursachen. Immer mehr imperialistische Länder in Europa gehen dazu über, neben Internierungslagern in den eigenen Ländern - auch für Kinder - Asylgefängnisse in „Drittstaaten“ einzurichten, so Italien in Albanien. Das ist eine Verhöhnung des Rechts auf Asyl. Für ein uneingeschränktes Asylrecht für alle Unterdrückten auf antifaschistischer Grundlage!'
			},
			{
				state: State.Approve,
				reason:
					'Aber diese Maßnahme reicht nicht. Der soziale Wohnungsbau wurde in den letzten Jahrzehnten zugunsten der Erzielung von Maximalprofiten für Immobilienkonzerne und die Bauindustrie massiv abgebaut. Wir fordern die Schaffung von ausreichendem, umweltgerechten und preisgünstigem Wohnraum! Allerdings kann der Charakter des Wohnraums als Ware zur Erzielung von Maximalprofit erst in einer sozialistischen Gesellschaftsordnung aufgehoben werden.'
			},
			{
				state: State.Disprove,
				reason:
					'Der Ausbau der staatlichen Überwachung der Bevölkerung muss abgelehnt werden. Unter dem Vorwand der Kriminalitätsbekämpfung hat die zunehmende staatliche Bespitzelung in Wirklichkeit den Zweck, zukünftige Massenproteste der Bevölkerung politisch zu unterdrücken.'
			},
			{
				state: State.Disprove,
				reason:
					'Schon jetzt liegt der Strompreis je KW/h für die Großindustrie gerade mal bei 13,8 Cent, während er für private Verbraucher bei über 40 Cent liegt. Gegen immer mehr Subventionen für die Großindustrie zu Lasten der arbeitenden Bevölkerung!'
			},
			{
				state: State.Approve,
				reason:
					'Herabsetzung des Rentenalters bei Männern auf 60 und bei Frauen sowie bei Schicht- und Schwerarbeitern auf 55 Jahre – bei vollem Rentenausgleich! Erhöhung des Rentenniveaus.'
			},
			{
				state: State.Disprove,
				reason:
					'Religion ist eine Privatangelegenheit. Wir treten für die vollständige Trennung von Staat und Kirche ein.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir sind gegen nationalistische Abschottung. Aber: Die Anwerbung von ausländischen Fachkräften entspricht den Profitinteressen der Monopole, um ihre Ausgaben für die Ausbildung weiter zu senken und Druck auf das Lohnniveau insgesamt zu erhöhen. Es ist eine Methode neokolonialer Ausbeutung, wirtschaftlich schwächeren Ländern die Fachkräfte abzuwerben. Mehr Ausbildungsplätze in der Großindustrie'
			},
			{
				state: State.Disprove,
				reason:
					'Die Umwelt wird durch Atomkraftwerke nachhaltig schwer geschädigt und das über viele Jahrtausende. Rechnet man die massiven staatlichen Subventionen ein, ist Atomstrom die teuerste Form der Energieerzeugung. Hinter der Renaissance der Atomkraft stecken zudem Pläne von imperialistischen Staaten, sich den Weg zu eigenen Atomwaffen offen zu halten.'
			},
			{
				state: State.Approve,
				reason:
					'Senkung der Massensteuern und Abschaffung der indirekten Steuern. Wir fordern eine drastische progressive Besteuerung der Großunternehmen, Großverdiener und großen Vermögen.'
			},
			{
				state: State.Neutral,
				reason:
					'Der Zuständigkeitsstreit in der Schulpolitik verdeckt, wer hier wirklich bestimmt: Bildung und Forschung werden strikt den Profitinteressen der internationalen Monopole untergeordnet. Über zahlreiche Kanäle nehmen sie Einfluss auf die Forschungs- und Lehrinhalte. Kampf der Knebelung von Wissenschaft, Forschung und Kultur durch die Profitinteressen der Monopole und den Antikommunismus!'
			},
			{
				state: State.Disprove,
				reason:
					'Stoppt den Völkermord in Gaza! Wir verurteilen mit aller Entschiedenheit die menschenverachtende militärische Aggression im Nahen Osten durch die israelische Regierung. Ebenso verurteilen wir die Unterstützung dessen durch die Bundesregierung. Ein klares Nein zu Waffenlieferungen für alle ungerechten Kriege!'
			},
			{
				state: State.Approve,
				reason:
					'Das wäre eine kleine Verbesserung. Sozialversicherungsbeiträge sind Lohnersatzleistungen. Wir fordern die volle Übernahme der Sozialversicherungsbeiträge durch die Unternehmen, finanziert durch eine Sozialsteuer für Unternehmen in Höhe von 8 % ihres Umsatzes.'
			},
			{
				state: State.Neutral,
				reason:
					'Wir sind für die Teilhabe von Frauen in allen gesellschaftlichen Bereichen. Allerdings heben Frauenquoten, auch in kapitalistischen Spitzenpositionen, trotz einer formalen Gleichstellung, nicht die vorherrschende reale Ungleichheit auf. Eine Ausbeutung der unterdrückten Klassen durch paritätisch besetzte Konzernvorstände bedeutet auch keinen Fortschritt.'
			},
			{
				state: State.Approve,
				reason:
					'Die monopolistische Agrarindustrie und die Handelskonzerne betreiben im Sinne des Maximalprofits eine sehr umweltschädliche Landwirtschaft mit Monokulturen, großflächigem Einsatz von Pestiziden und einer Massentierhaltung ohne jede Rücksicht auf eine artgerechte Tierhaltung. Abbau von Monokulturen!'
			},
			{
				state: State.Approve,
				reason:
					'Wir fordern in diesem Zusammenhang das Verbot aller faschistischen Organisationen und Parteien und ihrer Propaganda auf Grundlage des Potsdamer Abkommens! Allerdings lehnen wir den „Extremismus“ begriff ab, weil damit linke und rechte Politik auf eine Stufe gestellt und der Faschismus verharmlost wird. Wir verankern: Wer AfD wählt, wählt Faschismus.'
			},
			{
				state: State.Approve,
				reason:
					'Unter dem Vorwand einer angeblich überbordenden Bürokratie bekämpfen Vertreter der Monopole diese Pläne. Sie wollen weiterhin Extraprofite ohne jede Kontrolle hinsichtlich Umweltverträglichkeit, Entlohnung, Arbeitsrecht und Arbeitsbedingungen. Der Slogan von "Bürokratieabbau" ist reaktionär und zielt auf das faschistische Durchregieren der Monopole.'
			},
			{
				state: State.Disprove,
				reason:
					'Das BAföG muss dringend in ausreichender Höhe gezahlt werden, und nicht als Kredit sondern als Förderung! Der Empfängerkreis muss stark ausgeweitet werden. Aber: Kein BAföG für Reiche und Superreiche!'
			},
			{
				state: State.Neutral,
				reason:
					'Letztlich wird die erhöhte Staatsverschuldung auf die Massen abgewälzt. Gleichzeitig verfolgt die Politik der sogenannten „Schuldenbremse“ eine weitere Umverteilung von unten nach oben mit Ausbluten der Kommunen und dem verschärften Abbau der Sozialleistungen für die Massen. Wir kämpfen gegen jede Art der Abwälzung der Krisenlasten auf die Massen und die Natur.'
			},
			{
				state: State.Approve,
				reason:
					'Die Arbeitsverbote für Geflüchtete sind eine massive Diskriminierung. Gerade für junge Menschen, die nach Deutschland gekommen sind, ist körperliche Arbeit mit Kolleginnen und Kollegen essenziell für ihre Entwicklung und ihr Zusammenwachsen mit den Werktätigen in Deutschland. Wir fordern die volle rechtliche Gleichstellung aller dauerhaft in Deutschland lebenden Menschen unabhängig von der Nationalität!'
			},
			{
				state: State.Disprove,
				reason:
					'Die Klimakatastrophe gefährdet die Existenz der Menschheit. Um sie abzumildern sind größtmögliche Anstrengungen nötig. Allerdings ist der Begriff Klimaneutralität betrügerisch. Diese sogenannte Klimaneutralität lässt das Freikaufen von Umweltzerstörung mit dem Kauf von CO2-Zertifikaten ausdrücklich zu.'
			},
			{
				state: State.Approve,
				reason:
					'Es ist ein Skandal, dass in vielen Betrieben, vor allem in Ostdeutschland, immer noch länger als 35 Stunden die Woche gearbeitet werden muss. Aktuell drängen die Monopole, wie z.B. bei VW, trotz steigender Arbeitslosenzahlen auf die Ausdehnung der Arbeitszeit. Wir setzen uns dagegen für die 30-Stunden-Woche bei vollem Lohnausgleich ein. Damit könnten allein in der Autoindustrie 110.000 Arbeitsplätze gerettet werden.'
			},
			{
				state: State.Disprove,
				reason:
					'Schluss mit der Kriminalisierung von Schwangerschaftsabbrüchen - ersatzlose Streichung der §§ 218/219 StGB!'
			},
			{
				state: State.Neutral,
				reason:
					'Mit dem Euro stiegen die Preise massiv an. Natürlich ist der Euro ein Produkt der imperialistischen EU. Aber: die Propaganda für eine nationale Währung dient der Verbreitung von Nationalismus. Der Euro bietet zudem Vorteile bei Auslandsreisen. Es kommt jedenfalls nicht auf die Währung an, mit der die Leute abgezockt werden.'
			},
			{
				state: State.Approve,
				reason:
					'Das Schiene-Bahn-System hat nur ein Sechstel des Reibungsverlustes des Systems Straße-PKW/LKW. Deutschland hatte traditionell ein dichtes Schienennetz, das aber in den letzten Jahrzehnten massiv abgebaut wurde. Stillgelegte Bahn-Trassen gehören reaktiviert und renoviert, neue gebaut. Große Produktionswerke und Logistiker müssen verpflichtet werden, soviel wie möglich per Bahn zu transportieren.'
			},
			{ state: State.Approve, reason: '-' },
			{
				state: State.Disprove,
				reason:
					'Es ist ein Skandal, dass eine Steuer auf Eigentum als Nebenkosten auf die Mieter abgewälzt werden darf.'
			},
			{
				state: State.Disprove,
				reason:
					'Im Gegenteil. Das in Deutschland geltende Streikrecht enthält im europäischen Vergleich mit die wenigsten Rechte und Freiheiten, um sich gegen Arbeitsplatzvernichtung und Verschlechterung von Arbeitsbedingungen, wie aktuell in der Stahl- und Autoindustrie, zur Wehr zu setzen. Die MLPD fordert eine deutliche Ausweitung des Rechts auf Streik. Für ein vollständiges und allseitiges gesetzliches Streikrecht!'
			},
			{
				state: State.Approve,
				reason:
					'Wir unterstützen Bürgerentscheide als ein demokratisches Entscheidungsinstrument. Doch Bürgerentscheide ändern prinzipiell nichts an dem Klassencharakter dieser Gesellschaft in der Form einer Diktatur der Monopole.'
			},
			{
				state: State.Disprove,
				reason:
					'Wenn Menschen unter 14 Jahren kriminell werden, brauchen sie vor allem Hilfe, Erziehung und Zukunftsperspektive. Die MLPD verwirklicht mit ihrer Kinder- und Jugendarbeit eine Erziehung von Heranwachsenden zu selbstständig denkenden und handelnden Menschen, die Solidarität, Mut und Respekt lernen.'
			},
			{
				state: State.Approve,
				reason:
					'Die Zölle sind sozialchauvinistisch. Es ist eine Illusion, dass es den Arbeitern in Europa nützen würde, wenn die europäischen Monopole vor Konkurrenz aus China geschützt werden. Kapitalistische Wirtschaftskriege sind auch Bestandteil der Weltkriegsvorbereitung. Die MLPD wendet sich gegen das kapitalistische Konkurrenzdenken auf dem Rücken der Völker und unterstützt die länderübergreifende Einheit des weltweiten Industrieproletariats im Kampf für eine Welt ohne Ausbeutung und Unterdrückung.'
			},
			{
				state: State.Approve,
				reason:
					'Forderungen nach Abschaffung der doppelten Staats&shy;bürgerschaft sind Ausdruck einer Rechtsentwicklung zur Schaffung einer migrantenfeindlichen Stimmung.'
			},
			{
				state: State.Disprove,
				reason:
					'Viele Kräfte in der Internationalistischen Liste/MLPD fördern den uneigennützigen Dienst an der Allgemeinheit im Sinne der sozialistischen „Subbotniks“. In der heutigen kapitalistischen Gesellschaft wird das soziale Engagement aber als Lückenbüßer für mangelhafte staatliche Sozialeinrichtungen und zur Lohndrückerei missbraucht. Das Pflichtjahr dient zudem der Militarisierung der Gesellschaft.'
			},
			{
				state: State.Disprove,
				reason:
					'Wegen der menschheitsgefährdenden Klimakatastrophe muss die Verbrennung fossiler Rohstoffe so schnell wie möglich eingestellt werden. Für den Austausch von Heizungsanlagen und Ausbau kommunaler Kraftwerke für Nah- und Fernwärme auf Basis erneuerbarer Energie. Gegen eine Abwälzung der Kosten von notwendigen Umweltschutzmaßnahmen auf die breiten Massen! Übernahme aller Kosten für Schutzmaßnahmen durch Monopole und Staat, volle Gültigkeit des Verursacherprinzips von Umweltschäden.'
			},
			{
				state: State.Approve,
				reason:
					'Das ist das Mindeste - gerade angesichts der anziehenden Inflation! 18 Euro pro Stunde sind nötig! Zugleich bekämpfen wir es, dass Mindestlöhne für die Senkung des allgemeinen Lohnniveaus ausgenutzt werden. Die Internationalistische Liste/MLPD steht für den Einsatz der vollen gewerkschaftlichen Kampfkraft für höhere Löhne und Gehälter.'
			}
		]
	},
	{
		name: 'Menschliche Welt - für das Wohl und Glücklichsein aller',
		abbreviation: 'MENSCHLICHE WELT',
		description:
			'Die MENSCHLICHE WELT wurde 2013 gegründet. Ihre Politik möchte sie auf einer spirituellen Lebensführung und dezentralen Gemeinwohlwirtschaft aufbauen. Themen wie Friedenspolitik, eine ökologische Landwirtschaft und wirtschaftliche Gerechtigkeit spielen eine wichtige Rolle in ihrem Programm.',
		logo: 'parties/menschliche_welt.png',
		positions: [
			{
				state: State.Disprove,
				reason:
					'Wir setzten uns für massive diplomatische Unterstützung der Ukraine ein. Um nachhaltigen Frieden, Freiheit und Selbstbestimmung aller beteiligten Menschen dort zu schaffen, sind Verhandlungen absolut notwendig. Waffenlieferungen tragen zu weiteren Qualen und Sterben zehntausender von Menschen bei. Sie haben nicht zum Wohl der Ukrainer geführt.'
			},
			{
				state: State.Approve,
				reason:
					'Die Förderung sollte sich auf die Netzstabilität, Speicherung und Grundlastkapazitäten konzentrieren. Die Versorgung mit bezahlbaren Energiepreisen sollte für private Haushalte wie auch die Wirtschaft möglich sein. Darüber hinaus sollte die Erforschung von neuen Technologien staatlich unterstützt werden. Zum Beispiel durch Erforschung und Bau der neuesten Kernreaktoren, die ohne das Risiko einer Kernschmelze betrieben werden können.'
			},
			{
				state: State.Neutral,
				reason:
					'Leistungslose Einkommen schaden der Gesellschaft und bieten häufig Anreize, die auch dem Wohlbefinden von Empfängern langfristig nicht dienen. Wer beitragen kann und mehrere annehmbare Möglichkeiten angeboten bekommt, sollte eine davon wahrnehmen. Sonst sollte die existenzielle Grundversorgung wesentlich durch Sachleistungen in den Bereichen Wohnung, medizinische Versorgung, Kleidung, Nahrung und Bildung erfolgen.'
			},
			{
				state: State.Approve,
				reason:
					'Viele Studien und Statistiken zeigen, dass die Unfallgefahr mit steigender Geschwindigkeit deutlich ansteigt. Unfälle auf der Autobahn bedrohen nicht nur die Insassen des verunfallenden Fahrzeugs. Sie stellen ein Sicherheitsrisiko für Unbeteiligte dar.'
			},
			{
				state: State.Approve,
				reason:
					'Das Asylsystem soll Menschen dazu dienen, in Sicherheit zu leben. Wer über die angrenzenden Staaten nach Deutschland einreist, ist dort schon in Sicherheit. Die in langen Verhandlungen ausgehandelten politischen Gesetze sollten angewendet werden. Eine Abweisung an der deutschen Außengrenze würde die Anreize zu einer Einwanderung aufgrund unserer Sozialsysteme minimieren.'
			},
			{
				state: State.Approve,
				reason:
					'Wohnen ist ein Grundbedürfnis. Das Interesse an bezahlbarem Wohnraum der Mieter überwiegt das Interesse der Vermieter an einer Rendite. Gleichzeitig muss es für Vermieter weiter finanziell interessant genug sein, Mietraum anzubieten. Mit dem Eigentum von Mietwohnungen sind teils erhebliche Risiken und Aufwendungen verbunden, die der Vermieter dem Mieter abnimmt. Daraus ergibt sich die Rechtfertigung für den Ertrag des Vermieters. Dies sollte in einem fairen Verhältnis stehen.'
			},
			{
				state: State.Disprove,
				reason:
					'Gesichtserkennung aus Videoaufnahmen ist aus mehreren Gründen problematisch: Erstens produziert diese Technologie viele Fehler, die enorme Folgen für die Betroffenen haben können. Zweitens stellt sie einen enormen Eingriff in die Privatsphäre unschuldiger Menschen dar. Zudem ist ihr Nutzen bei der Strafverfolgung bisher sehr zweifelhaft. MENSCHLICHE WELT setzt sich für die intensive Ausweitung von Kriminalitätsprävention an Stelle solch einer Ausweitung der Videoüberwachung ein.'
			},
			{
				state: State.Disprove,
				reason:
					'Statt ungleicher, staatlicher Bevorzugung bestimmter Unternehmen sollte lieber die Abgabenlast auf Energie verringert werden und gleichzeitig eine verlässliche, nachhaltige und günstige Energieversorgung aufgebaut werden.'
			},
			{
				state: State.Disprove,
				reason:
					'Jemand, der mit 20 anfängt, in die Rentenkasse einzuzahlen, wäre dann ab 60 rentenberechtigt und bei einer durchschnittlichen Lebenserwartung von 80 Jahren etwa 20 Jahre lang Rentenempfänger. Gegenüber jemandem, der mit 27 Jahren angefangen hat einzuzahlen und mit 67 in Rente geht, erhält Ersterer bei gleicher Einzahlungshöhe eine über 33% höhere Gesamtauszahlung. Das Rentensystem sollte so gestaltet werden, dass statistisch eine gleiche Gesamteinzahlung zu einer gleichen Gesamtauszahlung führt.'
			},
			{
				state: State.Approve,
				reason:
					'Die Formulierung "Verantwortung vor Gott" im Grundgesetz erkennt die Existenz einer höheren Kraft als uns Menschen an. Die Formulierung besagt, dass wir unsere Handlungen nicht nur vor uns selbst und anderen, sondern vor allem auch vor dieser höheren, universellen Kraft verantworten müssen. Der Bezug auf Gott ist ein kulturell und geschichtlich passender Verweis auf diese universelle Kraft. Für die MENSCHLICHE WELT ist Gott das universelle Sein, dass alles durchdringt.'
			},
			{
				state: State.Approve,
				reason:
					'MENSCHLICHE WELT befürwortet vorrangig die Ausbildung von Fachkräften im Inland. Die gegenwärtige Altersverteilung in Deutschland erfordert jedoch auf absehbare Zeit, dass altersbedingt wegfallende Stellen nur durch Zuzug aus dem Ausland vollständig besetzt werden können. Eine dauerhafte Bleibeaussicht sollte mit der Bereitschaft einer Eingliederung untrennbar verknüpft sein. Die Anwerbung sollte nicht zu einem Fachkräftemangel im Ausland führen.'
			},
			{
				state: State.Approve,
				reason:
					'Moderne, müllarme Reaktoren ohne das Risiko einer Kernschmelze existieren. Diese können zuverlässig und kostengünstig Strom für Jahrzehnte produzieren. Das bisherige Modell, in dem Wirtschaftsunternehmen in der profitablen Phase die Gewinne einstreichen und dann die Lagerung vom Sondermüll und den Rückbau der Reaktoren auf die Gesellschaft umwälzen, unterstützen wir allerdings nicht.'
			},
			{
				state: State.Disprove,
				reason:
					'Fleiß und Arbeit müssen sich lohnen. Dies ist nur bedingt der Fall. Es gibt z. B. zwischen 2500€ und 6000€ monatlichem Bruttoeinkommen ein breites Plateau, in dem das Nettoeinkommen für Familien nur um wenige hundert Euro ansteigt - aufgrund der steigenden Abgabenlast sowie abnehmender staatlicher Unterstützung. Die oberen 10% der Einkommenssteuerzahler zahlen bereits über 50% der Steuern. Wir befürworten eine Ersetzung der Einkommenssteuer durch andere Einnahmen z. B. der Vermögenssteuer.'
			},
			{
				state: State.Neutral,
				reason:
					'Die Bundesländer sollten in der Schulpolitik weiter die entscheidende Rolle spielen. Das führt zu einer größeren Vielfalt an Angeboten, mehr Raum für fortschrittliche Veränderungen und erhöhte Risikostreuung. Weitere Kompetenzen des Bundes sollten nur zur Verbesserung der Chancengleichheit und Vergleichbarkeit der Schulabschlüsse möglich sein.'
			},
			{
				state: State.Disprove,
				reason:
					'MENSCHLICHE WELT ist gegen den Export von Rüstungsgütern. Kriege enden nie durch Waffen, sondern immer durch Verhandlungen. Der Export von Waffen verlängert das Leid und verzögert den Frieden.'
			},
			{
				state: State.Neutral,
				reason:
					'Sozialsysteme funktionieren, indem möglichst alle Leistungsberechtigten, mit Ausnahme von Kindern, Jugendlichen und gesundheitlich Eingeschränkten, zu den Systemen beitragen. Das Gesundheitssystem sollte dennoch allen Menschen eine grundlegende medizinische Grundversorgung zur Verfügung stellen.'
			},
			{
				state: State.Approve,
				reason:
					'Insbesondere Führungspositionen sollten von den fähigsten Kandidaten besetzt werden. Gleichzeitig setzen sich fähige Frauen auch ohne Quote durch. MENSCHLICHE WELT unterstützt die Gleichberechtigung von Frauen und Männern vollumfänglich. Wirkungsvoll ist hier jedoch vor allem ideelle Arbeit. Eine zwanghafte Quote für börsennotierte Unternehmen halten wir für fehlgeleitet.'
			},
			{
				state: State.Approve,
				reason:
					'Landwirtschaftliche Ansätze mit echten ökologischen Vorzügen sollten selbstverständlich stärker gefördert werden als konventionelle Methoden. Wichtig ist jedoch, dass die Förderungen auch tatsächlich ihren angestrebten Zweck erfüllen.'
			},
			{
				state: State.Disprove,
				reason:
					'Alle strafbaren Handlungen, egal ob politisch motiviert oder nicht oder von welchen Seiten sie politisch motiviert sind, sollten geahndet werden. Es ist nicht die Aufgabe des Staates, dessen Macht Funktionären politischer Parteien anvertraut wird, bestimmte politische Strömungen mit Staatsmitteln zu fördern oder zu bekämpfen. Hier kommt es schnell zu Machtmissbrauch, bei dem amtierende Politiker ihre Macht ausnutzen, um politische Konkurrenten mit Vorwürfen des Extremismus zu bekämpfen.'
			},
			{
				state: State.Disprove,
				reason:
					'MENSCHLICHE WELT setzt für das Wohl aller Menschen, Tiere und der Natur ein. Dennoch ist diese verpflichtende Kontrolle mit enormen bürokratischem Aufwand verbunden und die Wirkung ist sehr zweifelhaft, da Zertifikate und Bescheinigungen besonders bei ausländischen Lieferanten leicht gefälscht werden können. Besser wäre es, Anreize zur Offenlegung von Verstößen durch Mitwisser zu schaffen und Verstöße hart zu ahnden.'
			},
			{
				state: State.Approve,
				reason:
					'Kinder aus wirtschaftlich starken Haushalten mit BAföG zu unterstützen würde eigentlich bedeuten, den Lebensstandard der Eltern zu subventionieren. Das sollte nicht das Ziel einer Ausbildungsförderung sein. Staat und Gesellschaft haben ein Interesse daran, dass möglichst viele gut ausgebildete Erwachsene zum Gemeinwohl beitragen. Heranwachsende wollen ihren beruflichen Wünschen folgen können. Solange die Eltern sich die Ausbildung leisten können, ist dies nicht gefährdet.'
			},
			{
				state: State.Approve,
				reason:
					'Das Steueraufkommen war im vergangenen Jahr so hoch wie nie zuvor. An Einnahmen mangelt es dem Deutschen Staat nicht. Die Ausgaben sind das Problem. Zu viel Geld wird für ideologische und irrationale Projekte ohne echten Mehrwert vergeudet. Hinzu kommt, dass der Wert einer Währung stark von der fiskalischen Situation des jeweiligen Staates beeinflusst wird. Die Haushaltspolitik hat einen großen Einfluss auf den Wert des Euros.'
			},
			{
				state: State.Approve,
				reason:
					'Wer bereit ist beizutragen, sollte das dürfen. Berufe die Qualifikationen erfordern, sollten jedoch erst ausgeübt werden dürfen, sobald die entsprechenden Qualifikationen anerkannt wurden. Eine gesellschaftliche Teilhabe unterstützt auch die Integration und die Aneignung von Sprachkenntnissen.'
			},
			{
				state: State.Approve,
				reason:
					'Von menschlichen Aktivitäten ausgestoßenes CO2 trägt, wenn überhaupt, zu einem sehr geringen Anteil zur Erderwärmung bei. Deutschland hat daran einen noch viel geringeren Anteil. Die MENSCHLICHE WELT setzt sich für einen konsequenten Umweltschutz einschließlich unserer natürlichen Lebensgrundlagen wie Gewässer, Luft und Böden ein.'
			},
			{
				state: State.Disprove,
				reason:
					'Deutschland hat im internationalen und europäischen Vergleich mit die wenigsten Wochenarbeitsstunden. Ein Gleichgewicht zwischen Arbeits- und Freizeit ist wichtig. Doch hängt der volkswirtschaftliche Wohlstand auch von der Wettbewerbsfähigkeit ab. Besonders in Anbetracht hoher Energie- und Rohstoffkosten ist Deutschlands gut ausgebildete und tüchtige Arbeiterschaft einer der verbleibenden Wettbewerbsvorteile. Die 35-Stunden-Woche sollte als Teil einer wirtschaftlichen Reform angestrebt werden.'
			},
			{
				state: State.Approve,
				reason:
					'Schwangerschaftsabbrüche sollten nur bei Bedrohung von Leib, Leben und Psyche der Mutter oder Vergewaltigung erlaubt sein. Darunter fallen in Deutschland derzeit unter 1% aller Schwangerschaftsabbrüche. Wer sexuell aktiv ist, weiß, dass Kinder dabei entstehen können. Dieses Recht ist kein Recht auf Tötung eines Ungeborenen. Allerdings sollten Frauen in der gegenwärtigen gesellschaftlichen Ungleichheit entscheiden können, die Schwangerschaft aus obigen Gründen in den ersten 3 Monaten zu beenden.'
			},
			{
				state: State.Neutral,
				reason:
					'Die MENSCHLICHE WELT setzt sich für eine grundlegende Reform der EU in Richtung Gemeinwohlwirtschaft, Demokratisierung und Dezentralisierung ein. Eine Währungsreform ist ein wichtiger Bestandteil solch einer Reform. Sollte sich solch eine Reform als unmöglich erweisen, sollte eine Wiedereinführung einer nationalen Währung erwogen werden.'
			},
			{
				state: State.Disprove,
				reason:
					'In den letzten 5 Jahren wurden etwa 50.000 km neue Straßen und nur etwa 170 km neue Schienen gebaut. Der Grund hierfür liegt in den sehr unterschiedlichen Stärken und Schwächen von Zügen und Autos. Züge können nicht alle Fähigkeiten von Autos ersetzen. Der Bedarf an neuen Straßen ist scheinbar deutlich höher, als der an Schienen. Darüber hinaus ist die Instandhaltung der Verkehrsinfrastruktur derzeit ein wichtigeres Thema, als deren Ausbau.'
			},
			{
				state: State.Disprove,
				reason:
					'Dem Wortsinn gemäß handelt es sich bei ehrenamtlichen Tätigkeiten um selbstlosen und/oder ideellen Dienst, der nicht aus wirtschaftlichen Interessen ausgeführt wird. Besteht ein Bedarf an einer Tätigkeit, für die nicht genug ehrenamtlich Tätige zur Verfügung stehen, sollten Wege gefunden werden, um bezahlte Arbeitsplätze für diese Tätigkeiten anzubieten. Diese zahlen dann auch direkt in das Sozialsystem ein.'
			},
			{
				state: State.Approve,
				reason:
					'Die Existenz der Grundsteuer kann nur damit gerechtfertigt werden, dass der Boden begrenzt ist und wer ihn tatsächlich nutzt, enthält ihn der restlichen Gesellschaft vor. Vermieter nutzen den Boden nicht selbst. Sie erzielen eine Rendite dadurch, dass sie für Menschen, die sich nicht selbst Wohnraum bereitstellen können oder wollen, Wohnraum bereitstellen. Tatsächlich genutzt wird der Boden von den Mietern. Daher sollte die Grundsteuerlast auf die Mieter umgelegt werden dürfen.'
			},
			{
				state: State.Disprove,
				reason:
					'Mit Beamten gibt es bereits einen Berufsstand, dessen Streikrecht stark eingeschränkt ist. Wird Infrastruktur als so kritisch bewertet, dass deren Betreiber nicht oder nur eingeschränkt streiken dürfen, sollte diese vom Staat betrieben werden. MENSCLICHE WELT meint, dass hierzu unter anderem die Schienennetze, Flughäfen, Telekommunikationsinfrastruktur, Straßen und auch die Energieversorgung gehören. Voraussetzung ist eine gut ausgebildete Beamtenschaft, die leistungsfähig arbeitet.'
			},
			{
				state: State.Neutral,
				reason:
					'Volks&shy;entscheide erfordern eine gut aufgeklärte und kritische Bevölkerung. Die Massenmedien haben einen großen Anteil an der politischen Willensbildung. Der zwangsfinanzierte öffentlich-rechtliche Rundfunk kommt dieser Aufgabe zunehmend nicht nach. MENSCHLICHE WELT unterstützt bundesweite Volks&shy;entscheide unter der Bedingung einer grundlegenden Reform des öffentlichen Rundfunks.'
			},
			{
				state: State.Disprove,
				reason:
					'Die geistigen Kapazitäten von unter 14-Jährigen sind oft noch nicht voll entwickelt. Dennoch gibt es große Unterschiede zwischen 8-Jährigen und 13-Jährigen. Besonders die absichtliche Ausnutzung der Straffreiheit, sollte strenge Folgen haben. Diese Folgen sollten hauptsächlich dazu dienen, das Verhalten des Bestraften zu verbessern.'
			},
			{
				state: State.Disprove,
				reason:
					'Zwischen 4 und 5% aller Arbeitsplätze hängen direkt oder Indirekt von der Automobilindustrie ab. Die Industrie hat aufgrund politischer Vorgaben hohe Summen in die Elektromobilität investiert. Deutsche Autokonzerne können in diesem Sektor kaum mit chinesischen Herstellern konkurrieren, da diese wesentlich günstigeren Zugang zu Batterien haben. Allgemein sollten Volkswirtschaften zu einem höchstmöglichen Grad autark sein. So viel wie möglich der Wertschöpfung sollte vor Ort geschehen.'
			},
			{
				state: State.Neutral,
				reason:
					'Mehrere Staats&shy;bürgerschaften bieten ihren Inhabern häufig große Vorteile, die sich auch positiv auf Deutschland auswirken können. Gleichzeitig haben Staatsbürger praktisch ein lebenslanges Anrecht auf Sozialleistungen. Auch dürfen sie hier wählen und so über den Kurs der Gesellschaft mitbestimmen. Das sollte nur denjenigen erlaubt sein, die ihr eigenes Wohl als untrennbar mit dem Wohlergehen der deutschen Gesellschaft verbunden sehen, obwohl sie eine zweite Staats&shy;bürgerschaft haben.'
			},
			{
				state: State.Approve,
				reason:
					'Die MENSCHLICHE WELT unterstützt die Förderung des sozialen Dienstes von Jugendlichen. Ein soziales Pflichtjahr würde positiv zur Entwicklung der jungen Erwachsenen beitragen. Gleichzeitig trägt es zum Wohl der Gesellschaft bei. Die jungen Erwachsenen sollten nicht zu Gewinnzwecken als günstige Arbeitskräfte ausgenutzt werden dürfen. Auch sollten kleinere Organisationen eine realistische Möglichkeit haben, ein anerkanntes soziales Pflichtjahr anbieten zu dürfen.'
			},
			{
				state: State.Approve,
				reason:
					'Öl und Gas verfügen über eine sehr hohe Energiedichte und eine extrem gut ausgebaute Infrastruktur, die selbst sehr teuer war und von der man weiter profitieren kann. Darüber hinaus ist es am effektivsten und effizientesten, Energieumwandlungen zu vermeiden. Denn sie verbrennen den Brennstoff dort, wo man die Wärme braucht.'
			},
			{
				state: State.Approve,
				reason:
					'Jeder sollte sich zumindest die Grundversorgung leisten können. Gleichzeitig sollte das Verhältnis von Mindestlohn und Höchstlohn und dem Profit ausgewogen sein. Betriebe, die den Mindestlohn nicht bezahlen können, sollten entsprechend staatlich unterstützt werden. Diese Grundsätze sind für die MENSCHLICHE WELT Teil wirtschaftlicher Gerechtigkeit.'
			}
		]
	},
	{
		name: 'Partei des Fortschritts',
		abbreviation: 'PdF',
		description:
			'Die 2020 gegründete PdF fordert mehr direktdemokratische Elemente. Ihre eigenen Positionen findet sie in einem basisdemokratischen Prozess. Sie fordert u. a. eine konsequente Energiewende sowie den Ausbau öffentlicher Verkehrsmittel. 2024 gewann sie ein Mandat im Europäischen Parlament.',
		logo: 'parties/pdf.png',
		positions: [
			{
				state: State.Approve,
				reason:
					'Die Ukraine muss mit den erforderlichen Mitteln ausgestattet werden, um sowohl die Sicherheit ihrer Bevölkerung als auch die territoriale Integrität zu gewährleisten. Die Waffenlieferungen an die Ukraine müssen ohne jede Restriktion erfolgen. Nur so kann sich die Ukraine effektiv gegen die russische Aggression verteidigen.'
			},
			{
				state: State.Approve,
				reason:
					'Der Ausbau erneuerbarer Energien ist essenziell, um Klimaziele zu erreichen und die Abhängigkeit von fossilen Energieträgern zu reduzieren. Staatliche Förderung beschleunigt Genehmigungsverfahren, unterstützt den Netzausbau und macht Investitionen in Speichertechnologien und private Solarprojekte attraktiver.'
			},
			{
				state: State.Approve,
				reason:
					'Unser Ziel ist ein gerechtes System, das Bedürftige unterstützt und Missbrauch verhindert. Wir befürworten Maßnahmen gegen den Missbrauch des Sozialsystems, einschließlich des Bürgergeldes. Wichtig ist dabei eine differenzierte Umsetzung, die individuelle Lebensumstände berücksichtigt. So darf etwa eine alleinerziehende Mutter ohne Kinderbetreuung nicht mit Personen gleichgesetzt werden, die keine Arbeitsmotivation zeigen.'
			},
			{
				state: State.Approve,
				reason:
					'Auf etwa 50 % der Autobahnen in Deutschland besteht bereits ein Tempolimit. Wir setzen uns für eine angemessene Beschränkung der Geschwindigkeit ein, die auf Basis von Gefahrenlagen, Umweltschutz und Lärmschutz festgelegt wird. Solche differenzierten Regelungen sollten sowohl Sicherheitsaspekte als auch individuelle Mobilitätsbedürfnisse berücksichtigen.'
			},
			{
				state: State.Approve,
				reason:
					'Asylsuchende, die bereits in einem anderen EU-Staat registriert sind, sollen gemäß dem Dublin-Abkommen an den deutschen Grenzen abgewiesen werden, um eine gerechte Verteilung innerhalb der EU zu gewährleisten. Ein solidarisches Asylsystem und die Sicherung der EU-Außengrenzen sind entscheidend, um das Vertrauen in die europäische Migrationspolitik zu stärken.'
			},
			{
				state: State.Approve,
				reason:
					'Oft steigen die Mieten unrealistisch, obwohl die Vermieter keine zusätzlichen Kosten haben. Die Mietpreisbremse greift oft nicht, daher muss sie reformiert werden, um Mieterinnen und Mieter zu schützen und illegale Mieterhöhungen zu verhindern. Wichtig ist Transparenz: Vermieter sollten Mietpreise anonymisiert und digital zur Verfügung stellen. Das würde die Verhandlungsposition der Mieter verbessern und zu mehr Fairness auf dem Wohnungsmarkt führen.'
			},
			{
				state: State.Disprove,
				reason:
					'Die automatisierte, flächendeckende und anlasslose Gesichtserkennung birgt erhebliche Risiken für Datenschutz und Grundrechte. Statt flächendeckender Überwachung sollten eine personelle Stärkung der Ermittlungsbehörden eingesetzt werden, um Sicherheit und Datenschutz zu gewährleisten.'
			},
			{
				state: State.Approve,
				reason:
					'Energieintensive Unternehmen leiden unter Deutschlands weltweit höchsten Industriestrompreisen, was ihre Wettbewerbsfähigkeit stark beeinträchtigt. Ein staatlicher finanzieller Ausgleich, wie ein subventionierter Industriestrompreis, würde Produktionskosten senken und Investitionen fördern. Um Missbrauch zu vermeiden, müssen Transparenzpflichten und Preisaufsicht sicherstellen, dass Entlastungen an die Produktion und Verbraucher weitergegeben werden.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir befürworten ein flexibles Renteneintrittsalter, das berufliche, gesundheitliche und persönliche Umstände berücksichtigt. Ein gleitender Eintritt würde unterschiedlichen Lebensverläufen gerecht und durch Anreize wie Rentenboni attraktiver werden. Pauschale Vorgaben wie 40 Beitragsjahre werden der Vielfalt an Lebensentwürfen nicht gerecht. Angesichts steigender Lebenserwartung und Herausforderungen für die Rentenkassen ist Flexibilität gerechter und nachhaltiger.'
			},
			{
				state: State.Disprove,
				reason:
					'Die Trennung von Kirche und Staat ist ein fundamentales Prinzip, das Neutralität und Gleichheit in einer pluralistischen Gesellschaft gewährleistet. Eine Formulierung wie „Verantwortung vor Gott“ ist nicht mehr zeitgemäß und spiegelt nicht die weltanschauliche Vielfalt wider. Der einleitende Satz sollte inklusiv und religionsneutral gestaltet sein, um alle Bürger gleichermaßen anzusprechen.'
			},
			{
				state: State.Approve,
				reason:
					'Der Staat sollte einfache Rahmenbedingungen schaffen, damit ausländische Arbeitskräfte eine Arbeits- und Aufenthaltserlaubnis erhalten, sowie Sprachkurse anbieten und die englische Sprache in Unternehmen fördern. Aus gesamtwirtschaftlicher Sicht ist es sinnvoll und notwendig, die Anwerbung von Fachkräften aus dem Ausland zu fördern, um den Problemen der Alterssicherung und des demographischen Wandels proaktiv zu begegnen.'
			},
			{
				state: State.Disprove,
				reason:
					'Deutschland sollte in die Forschung zu modernen und sicheren Reaktortechnologien wie Small Modular Reactors (SMRs) und Kernfusion intensivieren, ohne kurzfristig zur Kernenergie zurückzukehren, da dieses Vorhaben eine zusätzliche immense finanzielle Belastung wäre. Die Energiepolitik muss technologieoffen und wissenschaftsbasiert sein, um langfristig klimafreundliche Optionen sicherzustellen. Gleichzeitig sollten erneuerbare Energien und Speichertechnologien prioritär ausgebaut werden.'
			},
			{
				state: State.Approve,
				reason:
					'Wir möchten die derzeitige Steuerkurve zu einer fortschrittlichen progressiven Steuerkurve umgestalten. Das Ziel ist eine geringere Besteuerung für niedrige und mittlere Einkommen, einhergehend mit einer Erhöhung der Einkommensgrenze für den Spitzensteuersatz auf hohe Jahreseinkommen. Bedeutet konkret: Niedrigere und mittlere Einkommen werden entlastet und sehr hohe Einkommen stärker besteuert.'
			},
			{
				state: State.Approve,
				reason:
					'Wir fordern die Standardisierung des deutschen Schulsystems durch einen bundesweit einheitlichen Lehrplan. Dieser soll zentrale Anforderungen in Kernfächern und Abschlussprüfungen festlegen. Einheitliche Standards für Mittlere Reife und Abitur sichern eine hohe Bildungsqualität. Die länderspezifische Bildungsverwaltung wird durch eine zentrale Bundesbehörde mit einheitlicher Finanzierung ersetzt, um Chancengleichheit zu gewährleisten.'
			},
			{
				state: State.Neutral,
				reason:
					'Das Recht Israels zur Selbstverteidigung wird anerkannt, und im Notfall ist eine Unterstützung durch die Bereitstellung von Rüstungsgütern vorgesehen. Die Gewährleistung eines außerordentlichen Maßes an Schutz der Zivilbevölkerung und der Einhaltung des Menschenrechts durch Israel ist eine wesentliche Bedingung für die Aufrechterhaltung unserer Unterstützung.'
			},
			{
				state: State.Approve,
				reason:
					'Wir setzen uns für eine umfassende gesundheitliche Absicherung ein, die eine Krankenkasse für alle umfasst. Individuell wählbare Zusatzversicherungen bieten Flexibilität und ergänzen das System. Die Anpassung der Beitragsbemessungsgrenze und die Kostenübernahme aller medizinisch sinnvollen und notwendigen Maßnahmen sichern eine hochwertige und faire Gesundheitsversorgung für alle.'
			},
			{
				state: State.Neutral,
				reason:
					'Die gesetzliche Frauenquote hat zur Förderung von Frauen in Führungspositionen beigetragen. Kritiker bemängeln jedoch, dass dies unternehmerische Freiheit einschränkt und keine langfristige Lösung für strukturelle Ungleichheiten bietet. Stattdessen könnten alternative Maßnahmen wie gezielte Förderprogramme für Networking und Mentoring für Frauen nachhaltig wirken. Die Entscheidung sollte auf Basis von Gleichberechtigung und unternehmerischen Bedürfnissen evaluiert werden.'
			},
			{
				state: State.Approve,
				reason:
					'Die ökologische Landwirtschaft schützt Böden, Wasser und Biodiversität, reduziert den Einsatz von Pestiziden und Düngemitteln und trägt zur Förderung des Tierwohls bei. Eine stärkere Förderung schafft Anreize für nachhaltige Praktiken, unterstützt den Klimaschutz und kommt den wachsenden Erwartungen der Gesellschaft an umweltfreundliche Produktionsmethoden entgegen. So wird langfristig eine resiliente und nachhaltige Agrarwirtschaft etabliert.'
			},
			{
				state: State.Approve,
				reason:
					'Der Bund muss Projekte gegen Rechtsextremismus verstärkt fördern, um einer der größten Bedrohungen für die Demokratie und den gesellschaftlichen Zusammenhalt effektiv entgegenzuwirken. Gleichzeitig erkennen wir sämtliche Formen von Extremismus, ob politisch oder religiös, als Gefahr an und setzen uns für deren konsequente Bekämpfung durch präventive Bildungsmaßnahmen und politisch unabhängige Sicherheitsbehörden ein.'
			},
			{
				state: State.Approve,
				reason:
					'Die Einhaltung von Menschenrechten und Umweltschutzstandards entlang der Lieferkette ist entscheidend, um faire Handelsbedingungen und nachhaltige Entwicklung sicherzustellen. Unternehmen tragen Verantwortung für ihre Zulieferer und sollten durch gesetzliche Vorgaben sowie nachhaltige Freihandelsabkommen verpflichtet werden, europäische Standards durchzusetzen und Transparenz in Lieferketten zu gewährleisten.'
			},
			{
				state: State.Disprove,
				reason:
					'Die Abhängigkeit des BAföG vom Elterneinkommen benachteiligt Studierende, deren Eltern nicht in der Lage oder bereit sind, sie zu unterstützen. Eine einkommensunabhängige Förderung würde Chancengleichheit schaffen, bürokratischen Aufwand reduzieren und die Eigenständigkeit der Studierenden stärken. Wir setzen uns außerdem dafür ein, BAföG grundsätzlich für alle Menschen in Ausbildungen anzubieten.'
			},
			{
				state: State.Disprove,
				reason:
					'Die Schuldenbremse in ihrer aktuellen Form behindert notwendige Zukunftsinvestitionen in Infrastruktur, Digitalisierung und Klimaschutz. Eine flexiblere Regelung soll eingeführt werden, ohne die langfristige Stabilität zu gefährden. Finanzpolitische Disziplin kann mit gezielten Ausnahmen für strategische Investitionen kombiniert werden.'
			},
			{
				state: State.Approve,
				reason:
					'Eine sofortige Arbeitserlaubnis für Asylsuchende fördert ihre Integration, verringert Abhängigkeit von Sozialleistungen und entlastet das Asylsystem. Ein digitalisierter Prozess kann Genehmigungen innerhalb von 10 Tagen ermöglichen, wie in Finnland erprobt. Dies unterstützt sowohl die Wirtschaft durch zusätzliche Arbeitskräfte als auch die Asylsuchenden durch finanzielle Unabhängigkeit.'
			},
			{
				state: State.Disprove,
				reason:
					'Klimaneutralität ist entscheidend, um den Klimawandel zu begrenzen, Biodiversität zu schützen und Lebensqualität zu sichern. Deutschland muss den Ausbau erneuerbarer Energien, klimaresiliente Infrastruktur und nachhaltige Stadtentwicklung vorantreiben. Dabei gilt es, soziale Härten zu minimieren und internationale Partner stärker in die Pflicht zu nehmen, um globale Verpflichtungen zu erfüllen und Deutschlands Vorreiterrolle zu sichern.'
			},
			{
				state: State.Disprove,
				reason:
					'Eine Reduzierung der Arbeitszeit ist für viele attraktiv, erfordert jedoch Berücksichtigung des Fachkräftemangels. Eine Wochenarbeitszeit von 39 Stunden ist grundsätzlich tragfähig, sollte jedoch branchenspezifisch flexibel gestaltet werden. Wir befürworten die Erprobung innovativer Arbeitszeitmodelle, um Lösungen für Arbeitnehmer und Unternehmen zu finden. Eine starre gesetzliche Festlegung halten wir derzeit nicht für zielführend, da Flexibilität entscheidend ist.'
			},
			{
				state: State.Disprove,
				reason:
					'Die Pflicht zur Beratung vor einem Schwanger&shy;schafts&shy;abbruch wird von vielen als bevormundend empfunden und stellt eine Hürde dar. Insbesondere für Frauen in schwierigen Lebenslagen. Stattdessen sollte der Abbruch bis zur 12. Woche legal sein, begleitet von einem freiwilligen Beratungsangebot.'
			},
			{
				state: State.Disprove,
				reason:
					'Der Euro stärkt die europäische Integration, erleichtert den Handel und fördert wirtschaftliche Stabilität in der EU. Eine Rückkehr zu einer nationalen Währung würde wirtschaftliche Unsicherheiten schaffen und Deutschlands Exportstärke gefährden. Stattdessen sollten klare Schuldenregeln und temporäre Lösungen für wirtschaftlich schwächere Länder die Stabilität des Euro weiter sichern.'
			},
			{
				state: State.Approve,
				reason:
					'Der Ausbau der Schiene ist essenziell für eine nachhaltige Verkehrswende, da sie im Vergleich zur Straße deutlich klima- und ressourcenschonender ist. Eine priorisierte Schieneninfrastruktur ermöglicht höhere Kapazitäten für Personen- und Güterverkehr, entlastet Straßen, reduziert Emissionen und fördert langfristig eine effiziente Mobilität.'
			},
			{
				state: State.Disprove,
				reason:
					'Ehrenamtliches Engagement verdient Anerkennung, jedoch ist eine Anrechnung auf die Rente kein zielführender Ansatz, da es bürokratisch aufwendig und schwer abzugrenzen wäre. Stattdessen schlagen wir vor, die Übungsleiterpauschale zu erhöhen oder einen Ehrenamtszeitnachweis einzuführen, der steuerlich begünstigt werden kann. So wird das Engagement unbürokratisch honoriert und die Attraktivität des Ehrenamts gesteigert.'
			},
			{
				state: State.Approve,
				reason:
					'Die Gestaltung der Miete sollte weitgehend in der sozialen Verantwortung des Vermieters liegen. Es ist sinnvoll, dass der Staat grundsätzlich Instrumente zur Verfügung hat, die überhöhte Mieten verhindern. Es ist jedoch nicht das Ziel, jeden Aspekt des Mietpreises zu kontrollieren.'
			},
			{
				state: State.Disprove,
				reason:
					'Das Streikrecht ist ein wesentlicher Bestandteil einer demokratischen Gesellschaft und wird in Deutschland durch Artikel 9 Absatz 3 des Grundgesetzes geschützt.'
			},
			{
				state: State.Approve,
				reason:
					'Volks&shy;entscheide auf Bundesebene sollen gezielt ermöglicht werden, basierend auf fundierten Empfehlungen von Bürgerräten. Diese sichern, dass nur zu ausgewählten, gut vorbereiteten Themen Volks&shy;entscheide stattfinden, die auf repräsentativer Beratung und breiter Information beruhen. Dies stärkt die Demokratie ohne Entscheidungsprozesse zu überfrachten. Die öffentliche Kontrolle und Medienpräsenz der Umsetzung garantiert, dass der Bürgerwille während der Wahlperiode umgesetzt wird.'
			},
			{
				state: State.Approve,
				reason:
					'Die Herabsetzung des Strafmündigkeitsalters auf unter 14 Jahre ermöglicht eine gezielte und altersgerechte Reaktion auf Jugendkriminalität. Dabei greift das Jugendstrafrecht, das den Fokus auf Erziehung und Prävention legt, ohne junge Straftäter gleich zu kriminalisieren. Dies schafft Gerechtigkeit und stärkt die gesellschaftliche Verantwortung.'
			},
			{
				state: State.Disprove,
				reason:
					'Die Abschaffung der erhöhten EU-Zölle auf chinesische Elektroautos würde den Wettbewerb für europäische Hersteller gefährden, die unter strengeren Umwelt- und Sozialstandards produzieren. Stattdessen sollten nachhaltige Freihandelsabkommen mit europäischen Standards gefördert und Abhängigkeiten von China durch Diversifizierung der Handelsbeziehungen reduziert werden.'
			},
			{
				state: State.Approve,
				reason:
					'Die Möglichkeit, eine zweite Staats&shy;bürgerschaft zu besitzen, fördert Integration und stärkt internationale Beziehungen. Dies erleichtert die Arbeitsaufnahme und Mobilität, insbesondere für Geflüchtete und Zugewanderte. Wichtig ist jedoch eine klare Anerkennung der Grundwerte des Grundgesetzes, um soziale Kohäsion und demokratische Prinzipien zu sichern.'
			},
			{
				state: State.Approve,
				reason:
					'Ein soziales Pflichtjahr kann dazu beitragen, das Bewusstsein für Gemeinschaft und Gesellschaft zu stärken und fördert gleichzeitig langfristiges Engagement. Durch die Mitarbeit in Organisationen wie der Feuerwehr, dem THW oder in Pflegeeinrichtungen entwickeln junge Erwachsene ein ausgeprägtes Verantwortungsgefühl. Dies geht einher mit der Einführung eines freiwilligen Wehrdienstes als Alternative zum sozialen Pflichtjahr.'
			},
			{
				state: State.Disprove,
				reason:
					'Neue Heizungen sollten nicht ausschließlich mit fossilen Brennstoffen betrieben werden dürfen, da dies den Übergang zu klimafreundlichen Heiztechnologien wie Wärmepumpen oder Biogas verlangsamt. Stattdessen ist ein technologieoffener Ansatz mit einer CO₂-Bepreisung und Förderung erneuerbarer Heizsysteme sinnvoll. Eine klare Priorisierung nachhaltiger Energien unterstützt die Klimaziele und reduziert langfristig die Abhängigkeit von fossilen Brennstoffen.'
			},
			{
				state: State.Neutral,
				reason:
					'Wir engagieren uns für die Umsetzung der EU-Richtlinie zur Anhebung des Mindestlohns und streben eine sozial und wirtschaftlich ausgewogene Lösung an. Unser Ziel ist eine transparente Anpassung, unterstützt durch gezielte Entlastungen für kleine Unternehmen, etwa durch Steuervergünstigungen. Regionale Abstufungen prüfen wir sorgfältig. Langfristig planen wir eine schrittweise Erhöhung auf 15 Euro, abgestimmt auf Produktivitätszuwächse und die wirtschaftliche Entwicklung.'
			}
		]
	},
	{
		name: 'Sozialistische Gleichheitspartei, Vierte Internationale',
		abbreviation: 'SGP',
		description:
			'Die marxistische SGP wurde 1971 gegründet. Ihre Ziele sind die Eroberung der politischen Macht durch die Arbeiterklasse, der Sturz des Kapitalismus und die „Vereinigten Sozialistischen Staaten von Europa“. Sie wird vom Bundesamt für Verfassungsschutz als linksextremistisch eingestuft.',
		logo: 'parties/sgp.png',
		positions: [
			{
				state: State.Disprove,
				reason:
					'Mit den Waffenlieferungen will Deutschland die Ukraine kontrollieren und Russland militärisch unterwerfen. Sie haben Putins reaktionären Einmarsch zu diesem Zweck bewusst provoziert. 80 Jahre nach dem Vernichtungskrieg der Nazis gegen die Sowjetunion rollen deutsche Panzer wieder gegen Russland und riskieren einen Atomkrieg. Dieser Wahnsinn kann nur durch die Mobilisierung der Arbeiter auf der ganzen Welt gegen die Wurzel des Kriegs, den Kapitalismus, gestoppt werden.'
			},
			{
				state: State.Approve,
				reason:
					'Um den Klimawandel zu stoppen, müssen die großen Konzerne und die Superreichen zahlen, die ihn mit ihrer Profitgier hauptsächlich verursachen. Eine Produktion, die im Einklang mit einer gesunden Umwelt steht, ist nur in einer rational und demokratisch geplanten Wirtschaft möglich, in der die Bedürfnisse der Menschen höher stehen als die Profitinteressen der Reichen.'
			},
			{
				state: State.Disprove,
				reason:
					'Die Situation von Bürgergeld-Empfängern muss verbessert werden. Jede Verschlechterung ihrer Situation dient als Hebel, um die Lebens- und Arbeitsbedingungen aller Arbeiter zu verschlechtern und Arbeitslose zur Annahme der schlecht bezahltesten und miesesten Jobs zu zwingen. Wir setzten der ständigen Verschlechterung der Lebensbedingungen aller Arbeiter das sozialistische Prinzip entgegen, dass die Wirtschaft den Bedürfnissen der Menschen dienen muss.'
			},
			{ state: State.Approve, reason: '' },
			{
				state: State.Disprove,
				reason:
					'Es sind nicht die verzweifelten Menschen, die vor den Nato-Kriegen und der brutalen Armut fliehen, die für die soziale Katastrophe verantwortlich sind, sondern die Reichen. Flüchtlinge sind unsere Verbündeten im Kampf gegen Kapitalismus und Krieg. Wenn hunderttausende Menschen abgewiesen und ihrer grundlegenden Rechte beraubt werden, bedeutet das einen Angriff auf alle hier lebenden Arbeiter. Was jetzt gegen Flüchtlinge gerichtet wird, richtet sich morgen gegen streikende Arbeiter.'
			},
			{
				state: State.Approve,
				reason:
					'Wohnen ist ein Grundrecht und keine Ware. Die großen Immobilienkonzerne müssen entschädigungslos enteignet werden. Es müssen massive Investitionen im sozialen Wohnungsbau getätigt werden, die durch eine Besteuerung der Reichen finanziert wird.'
			},
			{
				state: State.Disprove,
				reason:
					'Der Ausbau des Überwachungs- und Polizeistaats richtet sich gegen die wachsende Opposition gegen Krieg, Militarismus und soziale Ungleichheit in der Bevölkerung. Die Rückkehr des deutschen Militarismus, die horrende Aufrüstung und die ständige Verschlechterung der Arbeits- und Lebensbedingungen sind mit Demokratie nicht vereinbar. Um demokratische Grundrechte zu verteidigen, ist eine unabhängige Bewegung der Arbeiterklasse gestützt auf ein sozialistisches Programm notwendig.'
			},
			{
				state: State.Disprove,
				reason:
					'Statt Steuergeschenke an die Unternehmen müssen Arbeiter entlastet und Massensteuern gesenkt werden.'
			},
			{
				state: State.Approve,
				reason:
					'Die enorme Produktivitätssteigerung durch Digitalisierung und jetzt KI wird im Kapitalismus dazu genutzt, die Ausbeutung zu erhöhen und Arbeitsplätze zu vernichten. Stattdessen muss sie genutzt werden, um die Lebensarbeitszeit zu verkürzen und eine auskömmliche Rente zu gewährleisten. Das erfordert ein Ende der Profitlogik. Die großen Banken und Konzerne müssen enteignet und unter die demokratische Kontrolle der Bevölkerung gestellt werden.'
			},
			{
				state: State.Disprove,
				reason:
					'Die SGP steht für Religionsfreiheit und die absolute Trennung von Kirche und Staat. Religion ist Privatsache und die Religionsfreiheit gerade von Minderheiten muss geschützt werden.'
			},
			{
				state: State.Disprove,
				reason:
					'Jeder Mensch hat das Recht, am Ort seiner Wahl zu arbeiten. Das Abwerben von Fachkräften dient jedoch dazu, sich auf Kosten ärmerer Länder zu bereichern. Wir setzen dem den gemeinsamen Kampf aller Arbeiter für gleiche, hohe Sozialstandards und Löhne entgegen. Der Produktionsprozess ist aufs Engste global verflochten und wird durch das kapitalistische Nationalstaatensystem künstlich getrennt. Das führt zu globaler Ungleichheit und auch zu Handelskrieg und Krieg zu Lasten aller Arbeiter.'
			},
			{
				state: State.Disprove,
				reason:
					'Atomkraft hat ein beträchtliches Potential als verlässliche Elektrizitätsquelle, die keine Treibhausgase ausstößt und billiger ist als viele erneuerbare Alternativen. Aber sie bringt schwierige und potenziell katastrophale Sicherheitsrisiken mit sich, die die Menschheit auf keinen Fall in den Händen von profitorientierten Wirtschaftseliten belassen darf. Nur innerhalb einer rational geplanten sozialistischen Weltwirtschaft wären die sichere Entwicklung und Begrenzung der Atomenergie denkbar.'
			},
			{
				state: State.Approve,
				reason:
					'Ab 20.000 Euro im Monat muss eine Einkommensteuer von 100 Prozent gelten. Nur wenn die Reichen enteignet werden, können die grundlegenden gesellschaftlichen Probleme gelöst werden. Wir fordern massive Investitionen in Bildung und Gesundheit, radikale Lohnerhöhungen und soziale Sicherheit für alle.'
			},
			{
				state: State.Approve,
				reason:
					'Milliarden für Bildung und Soziales statt für Aufrüstung und Krieg! Das Bildungssystem muss ausgebaut und umfassend finanziert werden. Die SGP tritt für eine kostenlose Bildung von der Kita bis zur Universität ein, die allen Menschen offenstehen muss – unabhängig vom Einkommen, Wohnort und familiären Verhältnissen.'
			},
			{
				state: State.Disprove,
				reason:
					'Der Völkermord in Gaza ist ein Verbrechen von historischen Ausmaßen. Die Bundesregierung unterstützt das Schlachten, weil es die Unterdrückung jedes Widerstands der Palästinenser als Voraussetzung dafür sieht, die ganze Region unter Kontrolle zu bringen. Deshalb arbeitet sie auch mit der islamistischen Regierung in Syrien zusammen und droht die ganze Region in ein Inferno zu verwandeln. Wir sagen: Nein zu Völkermord und Krieg! Für die Einheit der jüdischen und arabischen Arbeiter!'
			},
			{
				state: State.Approve,
				reason:
					'Vor allem müssen Kapitaleinkommen und große Vermögen zur Finanzierung der Krankenkassen herangezogen werden. Zudem müssen die Kürzungen des Bundeshaushalts für Gesundheit von über zwei Drittel in den letzten drei Jahren zurückgenommen und muss massiv in Gesundheit investiert werden. Gesundheitliche Versorgung ist ein Grundrecht. Aber um es durchzusetzen, muss die Macht der Banken und Konzerne gebrochen und die Gesellschaft nach sozialistischen Prinzipien organisiert werden.'
			},
			{
				state: State.Approve,
				reason:
					'Eine Quotenregelung ändert an der Benachteiligung und Unterdrückung der Mehrheit der Arbeiterinnen nichts. Auch eine Bundeskanzlerin hat nichts daran geändert, dass Frauen schlechter bezahlt werden und überdurchschnittlich von Arbeitslosigkeit betroffen sind. Nur ein gemeinsamer Kampf aller Arbeiter kann die Gleichstellung der Masse der Frauen erreichen. Wir fordern das Recht auf Abtreibung, eine gesellschaftliche Erziehung und gleichen Lohn für alle.'
			},
			{
				state: State.Approve,
				reason:
					'Um die ausreichende Ernährung der Weltbevölkerung sicherzustellen, ist auf allen Gebieten der Landwirtschaft ein ökologischer und nachhaltiger Anbau zu gewährleisten, der nicht auf kurzfristigen Profit ausgerichtet ist. Dies ist nur in einer planwirtschaftlich organisierten Wirtschaft in einer sozialistischen Gesellschaft möglich, in der die Produktion anhand der Bedürfnisse der Bevölkerung ausgerichtet wird und nicht nach den Profitinteressen von Unternehmen.'
			},
			{
				state: State.Approve,
				reason:
					'Allen Versuchen, die Verbrechen der Nazis zu verharmlosen sowie Rassismus und Antisemitismus salonfähig zu machen, muss entschieden entgegengetreten werden. Die Gleichsetzung von Kritik an der rechten israelischen Regierung mit Antisemitismus ist hingegen selbst antisemitisch und dient der extremen Rechten und der Rechtfertigung eines Völkermords in Gaza.'
			},
			{
				state: State.Approve,
				reason:
					'Unternehmen müssen verpflichtet werden, in Deutschland und überall wo sie produzieren oder produzieren lassen, Menschenrechte und Umweltschutz einzuhalten, denn die Bedürfnisse der Menschen stehen höher als die Profitinteressen der Reichen. Das durchzusetzen erfordert die unabhängige Mobilisierung der Arbeiter gegen den Kapitalismus, der zu immer übleren Arbeitsbedingungen auf der ganzen Welt und zu Krieg führt.'
			},
			{
				state: State.Disprove,
				reason:
					'Gute Bildung ist ein Grundrecht und kein Privileg. Ein elternunabhängiges BAföG ermöglicht jungen Menschen, ihren eigenen Bildungsweg zu gehen. BAföG muss als volle Leistung und nicht als Kredit ausgezahlt werden, der Studierende aus Arbeiterhaushalten überproportional belastet. Statt Milliarden für Aufrüstung und Krieg auszugeben, müssen umfassende Investitionen in die Bildung erfolgen, um jedem Menschen eine kostenlose und hochwertige Bildung von der Kita bis zur Uni zu ermöglichen.'
			},
			{
				state: State.Disprove,
				reason:
					'Notwendig sind massive öffentliche Investitionen in den Ausbau des Bildungs- und Gesundheitssystems, des Wohnungsbaus und der Verkehrsinfrastruktur. Um diese Ausgaben zu finanzieren, müssen Banken und Konzerne enteignet und unter die demokratische Kontrolle der Bevölkerung gestellt werden. Die millionenschweren Glücksritter und Spekulanten, die von Krieg und Krise profitieren, müssen mit ihrem gesamten Vermögen haften und für ihre kriminellen Machenschaften vor Gericht gestellt werden.'
			},
			{
				state: State.Approve,
				reason:
					'Natürlich müssen Asylsuchende die Möglichkeit haben, hier zu arbeiten. Doch müssen dabei alle sozialen Standards wie Mindestlohn und Arbeitsrecht eingehalten werden, damit die verzweifelte Situation der Schutzsuchenden nicht ausgenutzt wird, um die Rechte aller Arbeiter anzugreifen. Es sind nicht die verzweifelten Menschen, die vor den Nato-Kriegen und der brutalen Armut fliehen, die für die soziale Katastrophe verantwortlich sind, sondern die Reichen.'
			},
			{
				state: State.Disprove,
				reason:
					'Aber unter kapitalistischen Bedingungen ist ein rascher Umstieg auf erneuerbare Energien nicht möglich. Eine Produktion, die im Einklang mit einer gesunden Umwelt steht, ist nur in einer rational und demokratisch geplanten Wirtschaft möglich, in der die Bedürfnisse der Menschen höher stehen als die Profitinteressen der Reichen.'
			},
			{
				state: State.Approve,
				reason:
					'Die enorme Produktivitätssteigerung durch Digitalisierung und jetzt KI wird im Kapitalismus dazu genutzt, die Ausbeutung zu erhöhen und Arbeitsplätze zu vernichten. Stattdessen muss sie genutzt werden, um die Arbeitszeit zu verkürzen und die Arbeitsbedingungen aller zu verbessern. Das erfordert ein Ende der Profitlogik. Die großen Banken und Konzerne müssen enteignet und unter die demokratische Kontrolle der Bevölkerung gestellt werden.'
			},
			{
				state: State.Disprove,
				reason:
					'Das Recht, eine Schwangerschaft straffrei abzubrechen, ist ein Grundrecht der Frau. Familienplanung ist zudem ein soziales Recht der Arbeiter.'
			},
			{
				state: State.Disprove,
				reason:
					'Der Kampf gegen den Euro und die Europäische Union darf nicht auf eine Rückkehr zum Nationalstaat hinauslaufen, sondern bedarf einer internationalen Perspektive. Die SGP lehnt die EU der Banken und Konzerne ab und stellt ihr die Vereinigten Sozialistischen Staaten von Europa entgegen.'
			},
			{
				state: State.Approve,
				reason:
					'Mobilität ist ein Grundrecht und alle Menschen sollten die Verkehrsmittel kostenfrei nutzen können. Notwendig sind ein umfassender Ausbau und eine gute Finanzierung des ÖPNV, um dessen Sicherheit und das Grundrecht auf Mobilität zu gewährleisten. Die SGP tritt für die Vergesellschaftung der Infrastruktur ein, sodass sie nicht mehr den Profitinteressen einzelner millionenschwerer Unternehmen wie der Deutschen Bahn dient, sondern den Interessen der gesamten Bevölkerung.'
			},
			{
				state: State.Approve,
				reason:
					'Ehrenamtliche Tätigkeiten dürfen nicht als Hebel für Angriffe auf Löhne und Arbeitsbedingungen dienen. Grundvoraussetzung für ehrenamtliches Engagement ist die soziale Absicherung aller. Das erfordert ein Ende der Profitlogik. Die großen Banken und Konzerne müssen enteignet und unter die demokratische Kontrolle der Bevölkerung gestellt werden.'
			},
			{
				state: State.Disprove,
				reason:
					'Wohnen ist ein Grundrecht und keine Ware. Die großen Immobilienkonzerne müssen entschädigungslos enteignet werden. Es müssen massive Investitionen im sozialen Wohnungsbau getätigt werden, die durch eine Besteuerung der Reichen finanziert wird.'
			},
			{
				state: State.Disprove,
				reason:
					'Das Streikrecht ist ein elementares Grundrecht, das angegriffen wird, um immer weitere Kürzungen im Interesse der Reichen und der Kriegstüchtigkeit durchzusetzen. Wir rufen Arbeiter zur massiven Ausweitung von Streiks und zur Bildung von Aktionskomitees auf. Diese müssen international und unabhängig von den Gewerkschaften sein, die mit den Unternehmen zusammenarbeiten. Nur wenn die Massen ins politische Geschehen eingreifen, kann der Sozialkahlschlag gestoppt und ein Weltkrieg verhindert werden.'
			},
			{
				state: State.Approve,
				reason:
					'Solange die Gesellschaft von der Profitgier einer Schicht von Superreichen bestimmt wird, kann es keine Demokratie geben. Über die zentralen Fragen wird nicht im Parlament, sondern in den Konzernzentralen entschieden. Die großen Banken und Konzerne müssen enteignet und unter die demokratische Kontrolle der arbeitenden Bevölkerung gestellt werden. Nur das Eingreifen von Millionen ins politische Geschehen kann den Kriegstreibern und den sozialen Angriffen Einhalt gebieten.'
			},
			{
				state: State.Disprove,
				reason:
					'Die herrschende Klasse kennt auf die Probleme angesichts der wachsenden Verarmung und Ausgrenzung nur noch eine Antwort: Polizeistaats- und Repressionsmaßnahmen. Minderjährige brauchen soziale Sicherheit, eine gute Bildung und eine Zukunftsperspektive und keine Strafverfolgung.'
			},
			{
				state: State.Approve,
				reason:
					'Die SGP lehnt Wirtschaftsnationalismus und Protektionismus in jeglicher Form ab. Schon den beiden Weltkriegen gingen Handelskriege voraus, bei denen sich die imperialistischen Länder gegenseitig mit Strafzöllen überzogen. Auch heute müssen Arbeiter und Jugendliche dem „America First“ und „Europe First“ der herrschenden Klassen mit der internationalen Einheit der Arbeiterklasse entgegentreten und für eine sozialistische Perspektive kämpfen, um eine Katastrophe zu verhindern.'
			},
			{
				state: State.Approve,
				reason:
					'Wer hier lebt und arbeitet, muss die vollen Staats&shy;bürgerschaftsrechte erhalten. Sonst wird die prekäre Lage der Geduldeten ausgenutzt, um die Rechte aller Arbeiter anzugreifen und Sozialstandards zu untergraben. Es sind nicht die verzweifelten Menschen, die vor den Nato-Kriegen und der brutalen Armut fliehen, die für die soziale Katastrophe verantwortlich sind, sondern die Reichen. Flüchtlinge sind unsere Verbündeten im Kampf gegen Kapitalismus und Krieg.'
			},
			{
				state: State.Disprove,
				reason:
					'Die SGP lehnt einen Pflichtdienst ab. In solchen Diensten verrichten Jugendliche meist die gleiche Arbeit wie andere Arbeiter, werden aber kaum für ihre Arbeit bezahlt. Diese Ausbeutung muss beendet werden. Um wirklich freiwilliges Engagement bei Jugendlichen zu fördern, muss zuallererst für ihre Bildung und wirtschaftliche Sicherheit gesorgt werden.'
			},
			{
				state: State.Approve,
				reason:
					'Der notwendige Umstieg auf erneuerbare Energien darf nicht auf Kosten der Arbeiter organisiert werden. Um den Klimawandel zu stoppen, müssen die großen Konzerne und die Superreichen zahlen, die ihn mit ihrer Profitgier hauptsächlich verursachen. Eine Produktion, die im Einklang mit einer gesunden Umwelt steht, ist nur in einer rational und demokratisch geplanten Wirtschaft möglich, in der die Bedürfnisse der Menschen höher stehen als die Profitinteressen der Reichen.'
			},
			{
				state: State.Approve,
				reason:
					'Gut bezahlte Arbeit ist ein Grundrecht. Doch seit Jahrzehnten werden die Reallöhne gesenkt sowie Arbeits- und Ausbildungsbedingungen verschlechtert. Alle Parteien arbeiten daran, diese Kürzungen nach den Bundestagswahlen noch in den Schatten zu stellen. Deshalb ist eine revolutionäre Bewegung gegen den Kapitalismus nötig. Die großen Banken und Konzerne müssen enteignet und unter die demokratische Kontrolle der Bevölkerung gestellt werden.'
			}
		]
	},
	{
		name: 'Bürgerrechtsbewegung Solidarität',
		abbreviation: 'BüSo',
		description:
			'Die BüSo entstand 1992 und sieht sich als Teil einer Bewegung, die auf den verstorbenen US-Politaktivisten Lyndon LaRouche zurückgeht. Sie lehnt den menschengemachten Klimawandel als Schwindel ab und warnt vor dem Zusammenbruch des Weltfinanzsystems und der westlichen Zivilisation.',
		logo: 'parties/büso.png',
		positions: [
			{
				state: State.Disprove,
				reason:
					'Das Sterben muß ein Ende haben. Die Waffenlieferungen haben den Krieg nur verlängert. Wir brauchen dringend diplomatische Lösungen, und ein Ende der geopolitischen Konfrontation zwischen West und Ost, die uns in einem Dritten, atomaren Weltkrieg treiben kann.'
			},
			{
				state: State.Disprove,
				reason:
					'Unzuverlässigkeit und physikalische Ineffizienz (u.a. zu niedrige Energieflußdichten) können auch durch Subventionen nicht überwunden werden. Schluß mit der Abzocke, die vor allem gigantische Summen in private internationale Spekulationsfonds geschaufelt und unsere Volkswirtschaft ruiniert haben.'
			},
			{
				state: State.Disprove,
				reason:
					'Das ist unsozial. Vor allem müssen aktiv neue produktive und gutbezahlte Arbeitsplätze geschaffen werden, damit es Perspektiven für alle gibt. Das geht nicht mit grüner Politik, die Energie verteuert und damit die Kosten für Unternehmer hochtreibt. Außerdem muss Deutschland eine aktive Politik der Zusammenarbeit mit den BRICS-Staaten für große Aufbauprojekte betreiben.'
			},
			{
				state: State.Disprove,
				reason:
					'Schluß mit Ideologie. Dem „Klimaschutz“ bringt es gar nichts. Tempolimits nur dort, wo es die Sicherheit des Verkehrs erfordert.'
			},
			{
				state: State.Approve,
				reason:
					'Ausnahme: Wenn Ehepartner, Kinder und andere enge Verwandte bereits in Deutschland eine Heimat gefunden haben.'
			},
			{
				state: State.Approve,
				reason: 'Wichtiger wäre, den sozialen Wohnungsbau massiv auszuweiten.'
			},
			{ state: State.Disprove, reason: '' },
			{
				state: State.Approve,
				reason:
					'Bis die inkompetente Energiepolitik der letzten Bundesregierungen überwunden ist, kann man das machen. Wiedereinstieg in die Kernenergie, langfristige Verträge mit den öl- und gasproduzierenden Staaten. Weg mit den Energiebörsen!'
			},
			{
				state: State.Disprove,
				reason:
					'Das kann nur für bestimmte Berufszweige gelten. Unter Bedingungen einer zu schaffenden Vollbeschäftigung (im Rahmen der Zusammenarbeit mit den BRICS und mit einer Abkehr von grüner Industriesabotage) werden außerdem ältere, erfahrene Arbeitnehmer gebraucht!'
			},
			{
				state: State.Approve,
				reason:
					'Die Präambel und das Grundgesetz entstanden 1948/49 nach der Nazi-Herrschaft. Der Gottesbezug ist sehr wichtig, denn er verdeutlicht, daß staatliche Macht nicht, wie in totalitären Staatsformen, absolut gilt oder ein Selbstzweck ist. Die Würde des Menschen, als Ebenbild Gottes geschaffen, ist unantastbar. Der Gottesbezug stellt keine Entscheidung für einen christlichen Staat dar und steht nicht im Widerspruch zur religiös-weltanschaulichen Neutralität des Staates.'
			},
			{
				state: State.Approve,
				reason:
					'Aber gleichzeitig muss unsere eigene Ausbildungs- und Bildungssituation dringend verbessert werden! Wir können nicht armen Ländern die Fachkräfte wegkaufen!'
			},
			{
				state: State.Approve,
				reason:
					'Für die Grundlast ist eine kontinuierliche Energieerzeugung von Nöten. Kernspaltung und Kernfusion sind die Zukunft, da sie über eine viel höhere Energieflußdichte verfügen.'
			},
			{
				state: State.Approve,
				reason:
					'Wir brauchen eine gleichmäßigere Einkommensverteilung. Damit die unteren Einkommensschichten deutlich besser entlohnt werden, müssen wir die Ideologien der Dienstleistungs- bzw. nachindustriellen Gesellschaft aufgeben und den produktiven Sektor massiv ausbauen. D.h.: Die Infrastruktur erneuern und in Spitzentechnologien wie Kernfusion, Weltraumfahrt usw. investieren.'
			},
			{
				state: State.Disprove,
				reason:
					'Deutschland ist ein föderal organisierter Staat. Auch wenn das manche Nachteile hat, erweist es sich in Zeiten der allgemeinen Zerstörung von Bildungskompetenzen als Segen. So können wenigstens einige Bundesländer im Interesse der Schüler ihren noch vorhandenen Standard verteidigen.'
			},
			{
				state: State.Disprove,
				reason:
					'Mit einer weiteren Lieferung macht sich Deutschland mitschuldig am Tod vieler tausender unschuldiger Palästinenser.'
			},
			{
				state: State.Disprove,
				reason:
					'Der Staat trägt die Verantwortung durch günstige Rahmenbedingungen produktive, gut bezahlte Arbeitsplätze zu schaffen und den Niedriglohnsektor abzuschaffen. Dann haben die Krankenkrassen genug Geld für die Leistungserbringung.'
			},
			{
				state: State.Approve,
				reason: 'Es werden sich in der Regel genügend qualifizierte Frauen finden.'
			},
			{
				state: State.Disprove,
				reason:
					'Das Höfesterben muß beendet werden. Familienbetriebe müssen gefördert werden, bzw. es müssen Paritätspreise gezahlt werden. Denn nur wenn die Landwirtschaft kostendeckende Preise bekommt, kann Menge und Qualität der Lebensmittel erhalten oder verbessert werden.'
			},
			{
				state: State.Disprove,
				reason:
					'Diese Projekte haben sich im wesentlichen als unwirksam erwiesen. Das wirksamste Projekt gegen Rechtsextremismus ist die Förderung eines echten „Dialogs der Kulturen“ und eine grundsätzlich andere Politik der Regierung, die Arbeitsplätze schafft und nicht durch grüne Politik abbaut. Die Förderung der klassisch-humanistischen Bildung unserer Jugend muß ebenfalls eine hohe Priorität genießen. Denn nur wer seine eigene Kultur kennt, kann auch den Reichtum anderer Kulturen wertschätzen.'
			},
			{
				state: State.Disprove,
				reason:
					'Deutschland muß sich an den Projekten der Neuen Seidenstraße beteiligen und mit den BRICS+-Nationen zusammenarbeiten, um die Armut in der Welt zu überwinden. Dann müssen Kinder nicht mehr arbeiten. Die "westlichen" Industrieländer müssen aufhören, auf Kosten der restlichen Welt zu leben. Ob es einem gefällt oder nicht: Die Zukunft liegt im Osten und Süden. Wir müssen uns dem neuen Paradigma anschließen. Alles andere führt zu weiteren Kriegen, inkl. Gefahr eines alles vernichtenden Nuklearkriegs.'
			},
			{ state: State.Approve, reason: '' },
			{
				state: State.Disprove,
				reason:
					'Staatliche Kreditschöpfung für produktive Zwecke (im Sinne des ersten amerikanischen Finanzministers Alexander Hamilton) ist ein entscheidendes Instrument jeder souveränen Regierung, um die Zukunft ihrer Nation im Sinne des Gemeinwohls zu gestalten und zu sichern. Die Voraussetzung ist jedoch, daß es sich um produktive Kapitalinvestitionen handelt, und nicht um kurzfristiges „Löcherstopfen“. Produktiv bedeutet auch: keine ineffektiven Ausgaben für die sog. „Energiewende“ oder für Rüstung.'
			},
			{
				state: State.Approve,
				reason:
					'Dann hätten wir weniger Probleme und weniger Kosten, da die Menschen eher für ihren eigenen Lebensunterhalt aufkommen könnten. Und es fördert die Integration. Aber dafür muß der Staat wieder produktiv investieren, billige Energie bereitstellen und mit den BRICS-Nationen und anderen große gemeinsame Aufbauprojekte in Angriff nehmen. Dann werden wir genügend Arbeitsplätze für alle, und in der Folge wachsende Steuereinnahmen haben.'
			},
			{
				state: State.Approve,
				reason:
					'Ob wir in eine Warmzeit oder eine neue Eiszeit gehen, hängt von der Sonne und der kosmischen Strahlung ab, nicht vom Menschen - außer die Möchtegernkriegstüchtigen sind erfolgreich dabei, einen Nuklearkrieg zu provozieren. Der nachfolgende nukleare Winter wäre tatsächlich menschengemacht.'
			},
			{ state: State.Approve, reason: 'Ausnahmen müssen im Bedarfsfall möglich sein.' },
			{ state: State.Approve, reason: '' },
			{
				state: State.Approve,
				reason:
					'Den EU-Bürokraten ging es von Anfang an um Kontrolle und nicht um die Wohlfahrt der Mitgliedsländer. Deshalb wurde der Euro, insbesondere in der Finanzkrise, zum Spalter der EU (Erinnern Sie sich noch an die Schlagzeilen: "Die faulen Griechen; die Italiener, die über ihre Verhältnisse leben" usw.?) Aber es wird nicht ausreichen, einfach zur DM zurückzukehren. Das ganze Dollar-dominierte Weltfinanzsystem ist bankrott und muß ersetzt werden: Feste Wechselkurse; Produktion statt Spekulation!'
			},
			{
				state: State.Disprove,
				reason:
					'Beides muß in Ordnung gebracht werden. Das erfordert große staatliche Investitionen. Außerdem muß Deutschland endlich in die Magnetbahntechnologie einsteigen, wie dies auch in China (auf verschiedenen Ebenen) systematisch gemacht wird.'
			},
			{ state: State.Approve, reason: 'Darin drückt sich die gesellschaftliche Anerkennung aus.' },
			{
				state: State.Approve,
				reason:
					'Wenn die Vermieter das nicht können, schlagen sie es auf die Miete auf. Das Problem ist in Zeiten knapper Kassen die massiv steigende Grundsteuer. Deshalb: mehr produktive Arbeitsplätze schaffen, mit den BRICS zusammenarbeiten, grüne Politik beenden und billige Energie (z.B. Kernenergie) schaffen. Dann können die Steuereinnahmen auf andere Weise erhöht werden.'
			},
			{
				state: State.Disprove,
				reason:
					'Auch die Beschäftigten in diesen Bereichen müssen ihre Forderungen Nachdruck verleihen können. Der Staat muß durch ausreichende Investitionen dafür sorgen, daß die Gründe für Streiks möglichst wegfallen.'
			},
			{
				state: State.Approve,
				reason:
					'Aber nur bei wichtigen strategischen Richtungsentscheiden (wie bei der Euro-Einführung). Die Bevölkerung sollte über die geplante Stationierung von neuen amerikanischen Mittelstreckenraketen in Deutschland abstimmen können, da diese unsere Sicherheit direkt gefährden.'
			},
			{ state: State.Disprove, reason: '' },
			{
				state: State.Approve,
				reason:
					'Diese Zölle sind reine Geopolitik und haben nichts mit wirtschaftlicher Vernunft zu tun. Wir brauchen China als Handelspartner. Im übrigen dürfte sich der Import chinesischer Elektroautos nach Deutschland mit der gegenwärtigen inkompetenten Energiepolitik von selbst erledigen. Wieder einmal schießt sich Europa ins eigene Knie! Die angekündigten Entlassungen, wie bei VW, werden dadurch nicht rückgängig gemacht - im Gegenteil: das Sterben in der Autoindustrie wird nur noch beschleunigt.'
			},
			{ state: State.Approve, reason: '' },
			{ state: State.Approve, reason: '' },
			{
				state: State.Approve,
				reason:
					'Selbstverständlich. Die Abzocke mit Sonne, Wind etc muss ein Ende haben. Milliardensummen sind in diese Projekte geflossen, und haben die existierende zuverlässige und sichere Energieversorgung Deutschlands zerstört. Außerdem brauchen wir die Wieder-Inbetriebnahme von NordStream, sowie die Rückkehr und den vollen Einsatz der Kernenergie.'
			},
			{
				state: State.Approve,
				reason:
					'Jeder sollte von seiner Arbeit leben können. Für produktive Arbeitsplätze muss aber der Staat wieder die Rahmenbedingungen schaffen: durch günstige Energie, weniger Bürokratie, Investitionen in die Infrastruktur und überhaupt die Förderung des produktiven Mittelstands.'
			}
		]
	},
	{
		name: 'BÜNDNIS DEUTSCHLAND',
		abbreviation: 'BÜNDNIS DEUTSCHLAND',
		description:
			'Das seit 2022 bestehende BÜNDNIS DEUTSCHLAND gilt als rechtskonservativ und wirtschaftsliberal. Die Partei setzt u. a. auf individuelle Leistung, Eigenverantwortung und die Stärkung des ländlichen Raums. Durch einen Parteiübertritt ist sie mit einem Abgeordneten im Bundestag vertreten.',
		logo: 'parties/bündnis_deutschland.png',
		positions: [
			{
				state: State.Neutral,
				reason:
					'Der bisherige Umfang hat nicht erreicht, dass ukrainisches Territorium oder Menschenleben gerettet werden. BÜNDNIS DEUTSCHLAND fordert den Vorrang der Diplomatie vor dem Krieg. Die Verteidigung der Ukraine folgt dem Artikel 51 der UN-Charta, und auch die bisherige Unterstützung durch die Bundesrepublik Deutschland folgt dem Geist des Artikels. Diplomatie und Verhandlung auf Augenhöhe sind das Gebot der Stunde, um eine globale Katastrophe zu verhindern.'
			},
			{
				state: State.Disprove,
				reason:
					'Nach Jahrzehnten staatlicher Förderung ist es an der Zeit, dass sich die erneuerbaren Energien ohne Subventionen am Markt behaupten. Wir fordern die Abschaffung von Subventionen für Windenergie- und Solarstrom.'
			},
			{
				state: State.Approve,
				reason:
					'BÜNDNIS DEUTSCHLAND steht dafür ein, dass Menschen, die in Not geraten sind, geholfen wird. Soweit Menschen arbeiten können, dies jedoch verweigern, um auf Kosten der Allgemeinheit zu leben, muss das Konsequenzen haben.'
			},
			{
				state: State.Disprove,
				reason:
					'Als freiheitliche Partei sieht BÜNDNIS DEUTSCHLAND staatliche Eingriffe und Regulationen grundsätzlich kritisch. Der mögliche Mehrwert eines generellen Tempolimits auf Unfallzahlen und Emissionen ist überschaubar. Die Autobahnen sind bereits jetzt die mit Abstand sichersten Straßen in Deutschland. Weitere Eingriffe in die Freiheitsrechte wären deshalb unverhältnismäßig.'
			},
			{
				state: State.Approve,
				reason:
					'Gemäß den Dublin-Übereinkommen und der neuen EU-Verordnung zur Asyl- und Migrationspolitik fordern wir, das Asylverfahren grundsätzlich im ersten sicheren Einreiseland durchzuführen. Dies schließt die Möglichkeit einer unkontrollierten Weiterreise in andere EU-Staaten aus. Eine effektive Umsetzung dieser Regelung erfordert eine enge Zusammenarbeit zwischen den EU-Staaten und die Sicherstellung, dass keine unrechtmäßige Weiterreise erfolgt. Besser: Asylantrag im Heimatland, Bescheid geht dorthin.'
			},
			{
				state: State.Disprove,
				reason:
					'Als freiheitliche Partei wendet sich BÜNDNIS DEUTSCHLAND grundsätzlich gegen staatliche Eingriffe in den freien Markt. Gerade die Mietpreisbremse hat dazu geführt, dass das Wohnungsangebot deutlich zurückgegangen ist. Zudem führt sie zu Umgehungen wie bspw. über eine möblierte Vermietung.'
			},
			{
				state: State.Neutral,
				reason:
					'Aber nicht grundsätzlich. Die meisten sind rechtschaffene Bürger. Soweit Personen in den Fahndungscomputern der Bundespolizei insbesondere mit einem Foto erfasst sind, sollte auch die automatisierte Gesichtserkennung an Bahnhöfen genutzt werden dürfen, um diese baldmöglichst zu verhaften. Vielleicht erinnern sich Manche in diesem Kontext an die Zeit der Pandemie, die uns teils erhebliche Freiheitseinschränkungen brachte. Missbrauch ist deshalb zu verhindern.'
			},
			{
				state: State.Disprove,
				reason:
					'Als freiheitliche Partei lehnen wir staatliche Subventionen grundsätzlich ab. Stattdessen wird BÜNDNIS DEUTSCHLAND die Energiekosten durch generelle Abgabenentlastungen sowie die Abschaffung von Subventionen für Windenergie- und Solarstrom reduzieren. Die Wiedereinführung von günstiger, sauberer, grundlastfähiger Kernenergie soll auch den Unternehmen helfen.'
			},
			{
				state: State.Disprove,
				reason:
					'BÜNDNIS DEUTSCHLAND steht für eine grundsätzliche Reform der Rentenversicherung hin zu einer steuerfinanzierten Grundrente. Daher erübrigt sich die Frage nach notwendigen Versicherungsjahren.'
			},
			{
				state: State.Approve,
				reason:
					'Gerade in unsicheren Zeiten benötigen die Menschen Stabilität und Glauben. Die Väter des Grundgesetzes hatten bei dieser Klausel insbesondere auch den Bezug zum christlichen Menschenbild vor Augen. BÜNDNIS DEUTSCHLAND steht für die christliche Prägung Deutschlands.'
			},
			{
				state: State.Approve,
				reason:
					'Die Zuwanderung soll gezielt auf qualifizierte Arbeitskräfte und Mangelberufe ausgerichtet sein. Es geht um Arbeitskräfte, die durch ihre Fähigkeiten einen direkten Beitrag zur deutschen Wirtschaft und Gesellschaft leisten. Primäres Ziel des Staats muss es sein, die Abwanderung von qualifizierten Fachkräften ins Ausland zu stoppen. Soweit erforderlich, steht BÜNDNIS DEUTSCHLAND für eine qualifizierte Zuwanderung von Fachkräften auf Zeit.'
			},
			{
				state: State.Approve,
				reason:
					'Zahlreiche Industrienationen und internationale Umweltorganisationen setzen weiterhin auf die Nutzung der Kernenergie. Wir fordern einen Neuanfang und eine Perspektive zum Wiedereinstieg in die Kerntechnik im Verbund mit unseren europäischen Nachbarn und internationalen Wirtschaftspartnern.'
			},
			{
				state: State.Disprove,
				reason:
					'Bereits heute zahlt der Facharbeiter den Spitzensteuersatz. Eine weitere Belastung der Mittelschicht lehnen wir ab. Wir fordern die Einführung eines dauerhaften „Tarifs auf Rädern“, der die kalte Progression der Einkommenssteuer verhindert, sowie die deutliche Erhöhung des Grundfreibetrags auf mindestens 18.000 Euro. Darüber hinaus soll die Steuerprogression so angepasst werden, dass insbesondere die Mittelschicht entlastet wird.'
			},
			{
				state: State.Disprove,
				reason:
					'Die Länder befinden sich in einem Wettbewerb, der sich an den Besten orientieren sollte. BÜNDNIS DEUTSCHLAND steht für eine strenge Auslegung des Subsidiaritätsprinzips. Weitere Kompetenzen des Bundes im Bildungswesen und eine Vereinheitlichung der Bildungsstandards werden nicht zu einer Verbesserung bei den Ländern mit schlechten schulischen Leistungen führen, sondern zu einer Verschlechterung bei den Ländern mit guten schulischen Leistungen.'
			},
			{
				state: State.Approve,
				reason:
					'Ein zentraler Aspekt der deutschen Staatsräson ist die historische Verantwortung Deutschlands, insbesondere gegenüber Israel. Dies bedeutet, dass die Sicherheit und das Existenzrecht Israels als unverhandelbar angesehen werden und das umfasst auch den Export von Rüstungsgütern nach Israel.'
			},
			{
				state: State.Disprove,
				reason:
					'BÜNDNIS DEUTSCHLAND sieht als freiheitliche Partei den Markt und nicht den Staat als Lösung. Daher lehnen wir eine Ausweitung einer staatlichen Versicherungspflicht ab und setzen uns für mehr tatsächlichen Wettbewerb bei den Krankenkassen ein.'
			},
			{
				state: State.Approve,
				reason:
					'Als freiheitliche Partei lehnt BÜNDNIS DEUTSCHLAND Quotengrundsätzlich ab. Eine Aufgabe soll von der dafür geeignetsten Person wahrgenommen werden, unabhängig von Herkunft oder Geschlecht. Quoten stehen diesem Leistungsgedanken entgegen und führen so erst zu Diskriminierung.'
			},
			{
				state: State.Approve,
				reason:
					'Die ökologische Landwirtschaft liefert einen wesentlichen Beitrag zum Umweltschutz z.B. durch den Verzicht des Einsatzes chemisch-synthetischer Pflanzenschutz- und Düngemittel und zum Tierwohl durch artgerechte Tierhaltung. Die konventionelle Landwirtschaft soll aber auch weiter berücksichtigt werden und verdient Wertschätzung.'
			},
			{
				state: State.Disprove,
				reason:
					'Der Linksextremismus und anderer Extremismus wird bei solchen Forderungen immer wieder fatal ausgeblendet. Alle Formen des Extremismus sind gleichermaßen zu bekämpfen. Sogenannte Projekte gegen den Rechtsextremismus werden zudem häufig genutzt, um Lobbygruppen oder links-grüne NGOs zu finanzieren, die nicht selten extremistische Tendenzen an den Tag legen. Nicht wenige leben von solchen Förderprogrammen.'
			},
			{
				state: State.Disprove,
				reason:
					'BÜNDNIS DEUTSCHLAND lehnt die sogenannte Klimaneutralität des europäischen Kontinents bis 2050 im Rahmen des „Green Deal“ der Europäischen Union ab. Dazu gehört auch das Lieferkettengesetz, das der heimischen Wirtschaft weitere bürokratische Belastungen auferlegt und eine Abwanderung der Industrie in Länder mit weitaus niedrigeren Standards befördert.'
			},
			{
				state: State.Approve,
				reason:
					'BAföG ermöglicht auch den Kindern von einkommensschwachen Familien eine Ausbildung oder ein Studium. Dies sollte auch beibehalten werden. Gleichwohl bedarf es einer grundsätzlichen Reform, da mit dem BAföG ggf. auch volkswirtschaftlich nicht sinnvolle Ausbildungen staatlich unterstützt werden.'
			},
			{
				state: State.Approve,
				reason:
					'Deutschland hat kein Einnahmen-, sondern ein Ausgabenproblem. Berücksichtigt man zusätzlich noch die Renten- und Pensionsverpflichtungen bei der Staatsverschuldung beträgt die Verschuldung Deutschlands fast 400% des BIP. Wir lehnen daher eine weitere Ausweitung der Schuldenaufnahme ab. Bereits fehlen uns jedes Jahr dutzende Milliarden Euro, die für Zinszahlungen aufgewendet werden müssen.'
			},
			{
				state: State.Approve,
				reason:
					'Ziel muss sein, dass alle in Deutschland lebenden Menschen ihren Lebensunterhalt grundsätzlich selbst bestreiten. BÜNDNIS DEUTSCHLAND fordert daher die Abschaffung bürokratischer Hürden, die Zuwanderer daran hindern, schnell eine Arbeit aufzunehmen. Asylbewerber sollen ab dem ersten Tag ihrer Einreise Zugang zum Arbeitsmarkt erhalten.'
			},
			{
				state: State.Approve,
				reason:
					'BÜNDNIS DEUTSCHLAND lehnt die sogenannte Klimaneutralität des europäischen Kontinents bis 2050 im Rahmen des „Green Deal“ der Europäischen Union ab. Unabhängig von der Frage des Ausmaßes und der Ursachen des Klimawandels kann die EU auf Grund ihrer immer geringer werdenden Bedeutung nicht allein das Weltklima retten, zumal ausschließlich zu Lasten unserer Wirtschaft, wenn andere globale Wirtschaftsmächte sich diesen Zielen nicht anschließen.'
			},
			{
				state: State.Disprove,
				reason:
					'BÜNDNIS DEUTSCHLAND steht für eine deutliche Entschlackung des ohnehin bereits engmaschigen deutschen Arbeitsrechts. Der Staat sollte nicht den Menschen vorschreiben, wie viele Stunden pro Woche sie arbeiten dürfen.'
			},
			{
				state: State.Approve,
				reason:
					'BÜNDNIS DEUTSCHLAND steht für den Schutz des menschlichen Lebens von der Empfängnis bis zum Tod. Das Leben ungeborener Menschen bedarf unseres besonderen Schutzes. Die geltende Rechtslage zur Abtreibung stellt einen Kompromiss dar, der keinesfalls aufgeweicht werden darf.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir fordern eine Rückkehr zu einer Währungspolitik, die dem Vorbild der Deutschen Bundesbank folgt, mit dem Ziel der Geldwertstabilität. Sollte dies in der Eurowährungszone nicht umsetzbar sein, setzen wir uns für eine Volksabstimmung über den Verbleib Deutschlands in der Eurowährungszone ein.'
			},
			{
				state: State.Disprove,
				reason:
					'Erste Brücken fallen ein, so wie in Dresden. Die aktuelle Herausforderung in Deutschland ist weniger der Ausbau als der Erhalt der Verkehrsinfrastruktur. Deutschlands Infrastruktur bricht im wahrsten Sinne des Wortes zusammen. Dies gilt sowohl für die Schienen- als auch für die Straßeninfrastruktur. BÜNDNIS DEUTSCHLAND wendet sich gegen zusätzliche Schulden zur Lösung dieser Herausforderung und tritt stattdessen für eine Erneuerung unserer Infrastruktur gemeinsam mit privaten Kapitalgebern ein.'
			},
			{
				state: State.Disprove,
				reason:
					'Das Ehrenamt verdient zweifellos Anerkennung. BÜNDNIS DEUTSCHLAND steht für eine grundsätzliche Reform der Rentenversicherung hin zu einer steuerfinanzierten Grundrente. Daher erübrigt sich die Frage nach der Anrechenbarkeit ehrenamtlicher Tätigkeiten.'
			},
			{
				state: State.Approve,
				reason:
					'BÜNDNIS DEUTSCHLAND steht für einen freien Markt und weniger Regulation. Dies umfasst auch das Mietrecht. Insofern sollte es Vermietern und Mietern selbst überlassen bleiben, wie sie entstehende Kosten untereinander aufteilen.'
			},
			{
				state: State.Approve,
				reason:
					'BÜNDNIS DEUTSCHLAND steht für einen schlanken Staat. Dieser schlanke Staat muss jedoch insbesondere seine Kernaufgaben wie bspw. die Bereitstellung kritischer Infrastruktur endlich wieder ausreichend wahrnehmen und auch wahrnehmen können. Dass Bahn- und Flughafenangestellte das gesamte Land in Geiselhaft ihrer Interessen nehmen können, darf nicht mehr der Fall sein.'
			},
			{
				state: State.Approve,
				reason:
					'BÜNDNIS DEUTSCHLAND setzt sich für mehr Bürgerbeteiligung und direkte Demokratie in Deutschland ein. Art. 20 Abs. 2 des Grundgesetzes hält unmissverständlich fest: „Alle Staatsgewalt geht vom Volke aus...". Es ist an der Zeit, diesen Fortschritt auch auf politischer Ebene zu verankern. Eine Verfassungsreform, die den Bürgern mehr Mitbestimmungsmöglichkeiten eröffnet, ist notwendig.'
			},
			{
				state: State.Approve,
				reason:
					'Die Kriminalität bei unter 14-Jährigen nimmt seit Jahren zu, bedingt durch die Migration als auch das Wissen um die Straffreiheit. Wir fordern, dass auch diese zukünftig als eingeschränkt strafmündig betrachtet werden, um präventiv gegen zukünftige Straftaten vorgehen zu können und um ein Signal zu senden, dass kriminelles Verhalten unabhängig vom Alter Konsequenzen hat.'
			},
			{
				state: State.Disprove,
				reason:
					'BÜNDNIS DEUTSCHLAND setzt sich grundsätzlich für einen freien Welthandel ein. Soweit jedoch Staaten gegen die Kräfte des freien Marktes agieren wie China durch die Subvention der Produktion von heimischen Elektroautos, muss mit Zöllen reagiert werden.'
			},
			{
				state: State.Disprove,
				reason:
					'BÜNDNIS DEUTSCHLAND fordert eine Überarbeitung des Staatsangehörigkeitsrechts. Doppelte Staats&shy;bürgerschaft sollte nur in begründeten Ausnahmefällen möglich sein.'
			},
			{
				state: State.Disprove,
				reason:
					'Als freiheitliche Partei lehnt BÜNDNIS DEUTSCHLAND die Verpflichtung von jungen Menschen zu einem Dienst für den Staat grundsätzlich ab. Hinzu kommt, dass durch das soziale Pflichtjahr die jungen Menschen ein weiteres Jahr später in Ausbildung, Studium und Beruf einsteigen, was die Knappheit an qualifizierten Fachkräften zusätzlich verschärft.'
			},
			{
				state: State.Approve,
				reason:
					'BÜNDNIS DEUTSCHLAND lehnt die sogenannte Klimaneutralität des europäischen Kontinents bis 2050 im Rahmen des „Green Deal“ der Europäischen Union ab. Dies beinhaltet auch das Verbot von Gas- oder Ölheizungen.'
			},
			{
				state: State.Disprove,
				reason:
					'Die Mindestlohnregelungen stellen einen gravierenden Eingriff in die Vertragsfreiheit dar. Deren negative Auswirkungen wie Arbeitsplatzabbau, steigende Preise und höhere Steuerbelastungen treffen in ihrer Auswirkung vor allem die sozial Schwächsten. BÜNDNIS DEUTSCHLAND fordert die komplette Aufhebung der Mindestlohnregelungen als ersten notwendigen Schritt, um wieder Schaffenskraft, Erfindergeist und Fleiß der Bundesbürger zu entfesseln. Tarifautonomie!: Der Staat muss sich hier raushalten.'
			}
		]
	},
	{
		name: 'Bündnis Sahra Wagenknecht – Vernunft und Gerechtigkeit',
		abbreviation: 'BSW',
		description:
			'Das BSW wurde 2024 u. a. von mehreren Abgeordneten der Partei DIE LINKE gegründet und ist durch deren Übertritt im Bundestag vertreten. Es verbindet wirtschaftspolitisch linke Inhalte wie eine Vermögenssteuer mit gesellschaftspolitisch zum Teil konservativen Positionen, z. B. in der Migrationspolitik.',
		logo: 'parties/bsw.png',
		positions: [
			{ state: State.Disprove, reason: '' },
			{
				state: State.Disprove,
				reason:
					'Der Ausbau der erneuerbaren Energien ist sinnvoll, die EEG-Umlage lehnen wir allerdings ab, denn sie verteuert den Strom für die Endkunden.'
			},
			{
				state: State.Approve,
				reason:
					'Dies darf aber nur beim Angebot von zumutbaren Tätigkeiten gelten, die der beruflichen Qualifikation entsprechen.'
			},
			{ state: State.Disprove, reason: '' },
			{ state: State.Approve, reason: '' },
			{ state: State.Approve, reason: '' },
			{ state: State.Neutral, reason: '' },
			{
				state: State.Disprove,
				reason:
					'Wir wollen mit vernünftiger Energiepolitik die Strompreise für Verbraucher und Industrie senken. Eine pauschale Dauersubvention von energieintensiven Unternehmen auf Kosten der Steuerzahler lehnen wir ab.'
			},
			{
				state: State.Approve,
				reason:
					'Dies würdigt die Lebensleistung der Arbeitnehmer. Es erkennt langjährige Arbeit und auch, dass mehr als 40 Arbeitsjahre in belastenden Berufen oft nicht leistbar sind.'
			},
			{ state: State.Neutral, reason: '' },
			{
				state: State.Neutral,
				reason:
					'Fachkräfte aus dem Ausland anzuwerben, kann sinnvoll sein. Das Problem des Fachkräftemangels mit Fachkräften aus dem Ausland zu lösen, halten wir für falsch. Viele junge Menschen verlassen unsere Schulen ohne Abschluss. Die hausgemachten Probleme des Fachkräftemangels müssen angegangen werden, indem unser Bildungssystem so reformiert wird, dass möglichst alle jungen Menschen die Schule mit einem Abschluss verlassen und eine gute Berufsausbildung erhalten – unabhängig vom Einkommen ihrer Eltern.'
			},
			{
				state: State.Disprove,
				reason:
					'Die abgeschalteten Kraftwerke können nicht wieder aktiviert werden. Der Aufwand wäre zu groß, zu teuer und das notwendige Personal fehlt. Der Neubau von Atommeilern ist ebenfalls teuer, wirtschaftlich nicht rentabel und dauert viele Jahre. Zudem ist das Problem der Lagerung des Atommülls nach wie vor nicht gelöst. Eine Rückkehr zur Atomkraft ist daher nicht möglich und auch nicht sinnvoll. Die Forschung und Entwicklung von neuer Kernkraft-Technologie sollte hingegen gefördert werden.'
			},
			{
				state: State.Approve,
				reason:
					'Die verfehlte Steuerpolitik der vergangenen Bundesregierungen hat dazu geführt, dass immer mehr Bürger den Spitzensteuersatz zahlen müssen, obwohl sie eigentlich der Mittelschicht angehören. Das BSW akzeptiert diese Ungerechtigkeit nicht. Wir passen den Einkommensteuertarif so an, dass Menschen mit einem Einkommen unter 7500 Euro brutto pro Monat steuerlich entlastet und die Steuern auf sehr hohe Einkommen erhöht werden.'
			},
			{ state: State.Approve, reason: '' },
			{ state: State.Disprove, reason: '' },
			{
				state: State.Approve,
				reason:
					'Das BSW will die Zwei-Klassen-Medizin beenden. Zusatzbeiträge sollen abgeschafft und eine Bürgerversicherung eingeführt werden, in die alle Bürger nach ihrem Einkommen einzahlen und gleiche Leistungen auf dem Niveau der höchsten medizinischen Standards erhalten. Krankenhausprivatisierungen und das Vordringen von Finanzinvestoren in den medizinischen Sektor müssen gestoppt und die Krankenhausreform rückgängig gemacht werden. Krankenhausschließungen und das System der Fallpauschalen lehnen wir ab'
			},
			{ state: State.Disprove, reason: '' },
			{
				state: State.Neutral,
				reason:
					'Wir streben eine Landwirtschaftspolitik im Interesse der Verbraucher an, die unsere Landwirte vorgroßen Agrarkonzernen schützt, lokal ausgerichtet ist und zu Tier- und Umweltschutz beiträgt. Es muss darum gehen, die konventionelle Landwirtschaft ökologischer zu machen und nicht einseitig vor allem Biobetriebe zu fördern.'
			},
			{
				state: State.Approve,
				reason:
					'Die Zahl rechtsextremer Straftaten hat im letzten Jahr laut Innenministerium deutlich zugenommen. Auch deshalb müssen Projekte, die sich gegen Rechtsextremismus, Faschismus und Neonazis engagieren oder den Opfern rechtsextremer Gewalt helfen, weiterhin gefördert werden. Es muss aber gesichert sein, dass der wichtige Einsatz gegen Rechtsextremismus nicht missbraucht wird, um unbeliebte Positionen zu diskreditieren.'
			},
			{ state: State.Neutral, reason: '' },
			{
				state: State.Approve,
				reason:
					'Das BAföG muss insgesamt mehr Studenten zugutekommen. Hier ist es auch besonders wichtig, dass die bürokratischen Hürden abgebaut werden.'
			},
			{
				state: State.Neutral,
				reason:
					'Das BSW ist nicht dafür alles über Schulden zu finanzieren, aber die Schuldenbremse muss grundlegend reformiert werden. Ihre aktuelle Auslegung verhindert sinnvolle Investitionen in Straßen, Schienen und Schulen in der notwendigen Größenordnung. Eine hervorragende öffentliche Infrastruktur ist die Grundlage für eine florierende Wirtschaft und eine lebenswerte Gemeinschaft. Deshalb sollten Investitionen von der Schuldenbremse ausgeklammert werden.'
			},
			{ state: State.Disprove, reason: '' },
			{
				state: State.Disprove,
				reason:
					'Die Klimaneutralität zu erreichen, ist ein richtiges Ziel. Allerdings ist dieses Ziel nicht schnell zu erreichen. Wir fordern daher eine Abkehr vom Wunschdenken einer schnell erreichbaren völligen Klimaneutralität. Denn es führt zu der Vorgabe, dass nur Technologien zukunftsfähig sind, die auf 100 Prozent erneuerbaren Energien beruhen. Effiziente Mischtechnologien werden dadurch zugunsten von extrem teuren und vielfach unrealistischen Projekten ausgeschlossen. Das lehnen wir ab.'
			},
			{
				state: State.Neutral,
				reason:
					'Das BSW spricht sich für ein großangelegtes Investitionsprogramm aus, das die gesamte verfallene Infrastruktur Deutschlands wieder auf Vordermann bringt. Eine spürbare Arbeitszeitverkürzung für alle würde die Engpässe an Fachkräften in allen Bereichen verstärken, weshalb eine allgemeine Arbeitszeitverkürzung zurzeit nicht zielführend ist.'
			},
			{
				state: State.Disprove,
				reason:
					'Das BSW fordert die grundsätzliche Straffreiheit des Schwangerschaftsabbruchs bis zur 12. Woche. Eine vorherige Beratung ist aber sinnvoll und hilfreich, wenn hierbei sachlich und neutral über Risiken, mögliche Alternativen und Hilfsangebote aufgeklärt wird und die betroffene Frau dadurch in ihrem Entscheidungsprozess für oder gegen einen Schwanger&shy;schafts&shy;abbruch sinnvoll unterstützt wird.'
			},
			{ state: State.Disprove, reason: '' },
			{ state: State.Approve, reason: '' },
			{
				state: State.Neutral,
				reason:
					'Ehrenamtlich Aktiven gebührt große Anerkennung. Allerdings rechtfertigt der Unterschied zwischen ehrenamtlicher Tätigkeit in den Bereichen Sport, Jugend, etc. und sozialen Berufen wie Lehrer, Erzieher, etc., dass erstere durch ihre Tätigkeit keine Rentenansprüche sammeln. Anders ist das bei ehrenamtlichen Aktivitäten, die so wichtig sind, dass sie verstärkt in reguläre Institutionen und Berufe überführt werden sollten. Hierunter fallen bspw. das THW, die DLRG oder freiwillige Feuerwehren.'
			},
			{ state: State.Disprove, reason: '' },
			{ state: State.Disprove, reason: '' },
			{ state: State.Approve, reason: '' },
			{ state: State.Disprove, reason: '' },
			{
				state: State.Approve,
				reason:
					'Die erhöhten EU-Zölle auf chinesische Elektroautos schaden der deutschen Autoindustrie, da China im Gegenzug ebenfalls höhere Zölle auf europäische Fahrzeuge und Zulieferteile einführt. Für die Wettbewerbsfähigkeit deutscher Fahrzeuge auf dem chinesischen Markt ist eine Handelsbeziehung auf Augenhöhe ohne Zölle notwendig.'
			},
			{ state: State.Approve, reason: '' },
			{ state: State.Approve, reason: '' },
			{ state: State.Approve, reason: '' },
			{ state: State.Approve, reason: '' }
		]
	},
	{
		name: 'MERA25 - Gemeinsam für Europäische Unabhängigkeit',
		abbreviation: 'MERA25',
		description:
			'MERA25 wurde 2020 als Teil der paneuropäischen DiEM25 gegründet. Sie fordert einen radikalen Wandel zu einer direktdemokratischeren, solidarischeren und nachhaltigeren EU. Ihr Ziel ist u. a. die Einführung eines „universellen Lebenseinkommens“ und die Vergesellschaftung zentraler Grundgüter.',
		logo: 'parties/mera25.png',
		positions: [
			{
				state: State.Disprove,
				reason:
					'Die Forderung nach Frieden verkennt nicht die brutale militärische Intervention, die Verbrechen gegen die Zivilbevölkerung und die enorme materielle Zerstörung durch Putins Angriffskrieg. Unsere Ziele der Demokratisierung, der Entmilitarisierung und des Friedens müssen mit einer pragmatischen Herangehensweise an die aktuelle Situation einhergehen: Sofortiger Waffenstillstand, gegenseitiges Nichtangriffsprotokoll, Grundlage des nordirischen Karfreitagsabkommens, UN-vermittelte Verhandlungen.'
			},
			{
				state: State.Approve,
				reason:
					'Die Energiewende bedarf eines Neudenkens des Energiemarktes, in dem Bürger:innen und Gemeinden als Lieferant:innen und Abnehmer:innen eingebunden werden. Dies ist auf Grundlage der aktuellen Gesetze nicht möglich. Gesetze und Verordnungen dürfen den Ausbau von erneuerbaren Energien nicht verlangsamen oder verhindern und müssen entsprechend angepasst werden. Wir wollen diese Anpassungen mittels Bürger:innenversammlungen unter Einbindung der regional betroffenen Menschen durchführen.'
			},
			{
				state: State.Disprove,
				reason:
					'Ziel des Bürgergeldes ist es, das Grundrecht auf Existenz und angemessenen Lebensunterhalt zu sichern, auch für grundsätzlich Erwerbsfähige, die aus vielfältigsten Gründen - gesundheitlich, psychologisch, sozial und/oder familiär bedingt - ihren Lebensunterhalt selbst nicht bestreiten können. Diese Menschen benötigen ein Mehr an sozialer und/oder psychologischer Hilfe und kein Weniger an Leistungen bis zur Existenznot. Individuell und gesamtgesellschaftlich sind Sanktionen kein probates Mittel.'
			},
			{
				state: State.Approve,
				reason:
					'Um einen besseren Verkehrsfluss zu gewährleisten, Unfälle zu verhindern und schädliche Abgase zu reduzieren, setzen wir uns für die Vereinheitlichung der Verkehrsregeln in Europa ein. Wir unterstützen die Einführung einer generellen Höchstgeschwindigkeit auf Autobahnen nach dem Vorbild unserer Nachbarländer. Um den Menschen und nicht das Auto ins Zentrum der Verkehrsplanung zu stellen, möchten wir nach dem Vorbild von Paris in Städten grundsätzlich 30er Zonen einrichten.'
			},
			{
				state: State.Disprove,
				reason:
					'Menschenunwürdige Zustände an Europas Außengrenzen zeigen, dass das Dublin-Verfahren nicht funktioniert. Das Dublin-Verfahren wollen wir abschaffen und durch ein gemeinsames europäisches Asylverfahren (Common European Asylum System, CEAS) ersetzen, welches internationales und europäisches Recht respektiert und die Grundrechte der migrierten Menschen garantiert.'
			},
			{
				state: State.Approve,
				reason:
					'Um den rasanten Anstieg der Mieten in vielen Städten zu stoppen, wollen wir einen bundesweiten Mietendeckel erlassen. Kommunen sollen mittels des Mietendeckels ermächtigt werden, kommunale Höchstmieten festzulegen. Ferner wollen wir die Mietpreisbremse verschärfen. Mieterhöhungsmöglichkeiten sollen ohne Ausnahmen auf 2 % pro Jahr begrenzt werden. Behörden wollen wir anweisen, mit Bußgeldern und Strafverfolgung gegen Missachtung vorzugehen.'
			},
			{
				state: State.Disprove,
				reason:
					'Ein automatisierter Einsatz von Gesichtserkennungstechnologie stellt einen Eingriff in das Recht auf Privatsphäre dar. Der Einsatz in Echtzeit erfasst und analysiert alle vorbeikommenden Menschen ohne einen individualisierten und begründeten Verdacht. Auch andere Einsätze sind menschenrechtlich höchst problematisch: Die Trainingsmethoden verstärken diskriminierende Stereotypen, die Programme arbeiten fehlerhaft und bergen die Gefahr einer unkontrollierbaren Erweiterung ihres Einsatzgebietes.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir wollen die Zusammensetzung des Strompreises durch eine progressiv wirkende Stromsteuer ersetzen sowie den künstlichen Strommarkt insgesamt abschaffen, beginnend mit dem Merit-Order-Prinzip beim Stromhandel, welches den Energiekonzernen ungerechtfertigte Übergewinne ermöglicht, Verbraucher:innen und Unternehmen stark belastet und fossile Stromerzeugung profitabel hält. Jedem Haushalt und Unternehmen soll ein steuerfreies Strombudget zur Verfügung stehen.'
			},
			{
				state: State.Approve,
				reason:
					'Wir fordern eine Kommission, die ein flexibles und ressourcenbezogenes Renteneintrittsalter erarbeitet, welches die Produktivität unserer Gesellschaft in den Mittelpunkt stellt, statt sich auf Scheindebatten über die Geldkosten der Rente zu fokussieren. Dabei soll das Renteneintrittsalter möglichst niedrig (keinesfalls höher als das heutige) sein und gleichzeitig die Versorgung aller Menschen in unserer Gesellschaft mit ausreichend Gütern nicht einschränken.'
			},
			{
				state: State.Disprove,
				reason:
					'Die Formulierung „Verantwortung vor Gott“ steht im Widerspruch zu den Artikeln 3 und 4 GG der Religionsfreiheit („Die Freiheit des Glaubens, des Gewissens und die Freiheit des religiösen und weltanschaulichen Bekenntnisses sind unverletzlich“). Gewissensfragen (u.a. Artikel 2, 7 oder 38) sind nicht an eine christliche oder monotheistische Religion gebunden. Die historischen Ursprünge der Präambel entsprechen nicht mehr der Entwicklung der Bevölkerung zu einer pluralistischen Gesellschaft.'
			},
			{
				state: State.Disprove,
				reason:
					'Arbeitskräfte (z. B. Pflegekräfte) aus dem Ausland anzuwerben ist aber auf Dauer mit einem solidarischen Europa nicht vereinbar und führt zusätzlich zu Lohndumping. Ohne Fachkräfte aus dem Ausland wird es nicht gehen, aber hier braucht es einen verantwortungsvollen Diskurs, der Migration nicht nach ihrem wirtschaftlichen Nutzen definiert, Gruppen nicht gegeneinander ausspielt und konstruierte Hierarchien und Verteilungskämpfe nicht weiter befeuert.'
			},
			{
				state: State.Disprove,
				reason:
					'Atomkraft ist weder erneuerbar noch sozial gerecht. Der radioaktive Abfall muss mindestens 200.000 Jahre aufbewahrt werden. Kernkraftwerke und Endlager sind nicht sicher gegenüber den vielfältigen Auswirkungen des menschengemachten Klimawandels (erwartbarer Anstieg des Meeresspiegels, schwere Stürme und andere Katastrophen). Neue Kernenergie kostet etwa 4x mehr pro kWh als Wind- und Solarenergie. Der Profit der öffentlich finanzierten Infrastruktur fließt an ausgewählte globale Unternehmen.'
			},
			{
				state: State.Approve,
				reason:
					'Neben einer Erhöhung des Spitzensteuersatzes ist die Anhebung des Reichensteuersatzes viel wichtiger. Für den Inflationsausgleich sollen auch der Steuerfreibetrag und die Einkommensgrenze zum Spitzensteuersatz angehoben werden.'
			},
			{
				state: State.Approve,
				reason:
					'Im 21. Jahrhundert gilt es, Bildungsföderalismus sowie nationale Präferenzen und Grenzen zu überwinden. Wir wollen eine starke, unabhängige, europäische Bildungsforschung und treten für eine Abschaffung des Kooperationsverbots ein. Zudem wollen wir uns dafür einsetzen, dass Lehrmaterialien allen unter einer Creative Commons Lizenz zur Verfügung gestellt werden, um offene Bildung für alle unabhängig von Einkommensverhältnissen zu gewährleisten.'
			},
			{
				state: State.Disprove,
				reason:
					'Eine Neuausrichtung der Israel-Palästina-Politik ist lang überfällig. Als Mindestanspruch muss Deutschland seine Außenpolitik umgehend völkerrechtlichen Standards anpassen, wie unter anderem durch den Internationalen Gerichtshof bestätigt: keine Waffenlieferungen, und eine Diplomatie, die einen möglichen Völkermord, Kriegsverbrechen und die illegale Besatzung Palästinas nicht nur nicht unterstützt, sondern aktiv unterbindet.'
			},
			{
				state: State.Approve,
				reason:
					'Gesundheitliche Versorgung ist kein Luxusgut, sondern ein Grundrecht für jeden Menschen. Die Qualität der Versorgung darf nicht von Einkommen, Status, Nationalität, Geschlecht oder Ähnlichem abhängig sein. Wir wollen alle gesetzlichen und privaten Krankenversicherungen durch ein einheitliches, staatlich finanziertes Gesundheitssystem ersetzen. So verschwinden die regressiven Sozialbeiträge und -bemessungsgrenzen sowie die ungleiche Behandlung von privat und gesetzlich versicherten Menschen.'
			},
			{
				state: State.Disprove,
				reason:
					'Frauen sind nicht in jeder sozialen Beziehung unterlegen, aber die Benachteiligung von Frauen in diversen Bereichen der Gesellschaft wie Wirtschaft, Politik, Arbeit ist anzuerkennen. Ein Instrument zu mehr Gleichstellung in diesen Bereichen ist die Frauenquote. Visionen für ein gendergerechteres Europa implizieren unweigerlich auch neue Bilder der Maskulinität. Reduktionistische Rollenbilder schränken die freie Entfaltung des Menschen ein und stützen Hierarchien und hegemoniale Konstrukte.'
			},
			{
				state: State.Approve,
				reason:
					'Die Landwirtschafts- und Fischereipolitik der Bundesregierung muss grundlegend neu gestaltet werden. Förderung muss zu 100 % ökologische und soziale Zweckbindung enthalten sowie die Handlungskapazität lokal befähigen. Kleine Betriebe, Junglandwirt:innen und Quereinsteiger:innen müssen Zugang zu Böden und Produktionsmitteln erhalten. Regulation darf keine lokale Selbstbestimmung unterbinden. Naturschutz darf Menschen und Natur nicht trennen.'
			},
			{
				state: State.Approve,
				reason:
					'Wir möchten die rassismuskritische Jugendarbeit weiter ausbauen. Diese zielt darauf ab, junge Menschen in ihrem Bewusstsein für Rassismus zu sensibilisieren, sie zu befähigen, sich gegen Diskriminierung und Ausgrenzung zu wehren, und eine inklusive und gerechte Gesellschaft zu fördern. Solche Jugendarbeit würde auf mehreren Ebenen stattfinden und unterschiedliche Ansätze verfolgen, um Jugendlichen ein kritisches Verständnis von Rassismus, Vielfalt und sozialen Gerechtigkeitsfragen zu vermitteln.'
			},
			{
				state: State.Approve,
				reason:
					'Wir begrüßen grundsätzlich das nationale Lieferkettensorgfaltsgesetz (2023) in Deutschland sowie das EU-Lieferkettengesetz (2024). Sie bergen allerdings nach wie vor viele Schlupflöcher. Wir stehen für ein fundamentales Umdenken: Eine menschen- und arbeiterrechtskonforme Unternehmenspolitik muss im derzeitigen kapitalistischen Wirtschaftssystem zu einem Wettbewerbsvorteil führen, ohne dass insbesondere kleinere Unternehmen unter der Berichtslast und zusätzlichen Kosten zusammenbrechen.'
			},
			{
				state: State.Disprove,
				reason:
					'Die Zahl der BAföG-Empfänger:innen sinkt kontinuierlich; bei unteren bis mittleren Einkommen fällt die BAföG-Förderung zunehmend weg. Wir wollen die vorhandene öffentliche Bildungsfinanzierung und die staatlichen Unterstützungen auf Grundlage des Bundesausbildungsförderungsgesetzes (BAföG) kritisch evaluieren und ggf. reformieren und/oder ausbauen, um allen Menschen Bildungschancen und die freie Wahl des Bildungsweges zu ermöglichen.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir stehen für die ersatzlose Streichung der Schuldenbremse aus dem Grundgesetz, das Ende des europäischen Fiskalpakts, die Streichung der Europäischen Defizitgrenzen und aller weiteren geld- und fiskalpolitischen Regeln, die die Handlungsfähigkeit des Staates unnötig einschränken. Wir wollen ferner die direkte Finanzierung von Staatsausgaben über die Europäische Zentralbank ermöglichen. Private Banken als Intermediäre zwischen Staaten und Zentralbank halten wir dagegen für überflüssig.'
			},
			{
				state: State.Approve,
				reason:
					'Wir setzen uns dafür ein, dass keine Unterscheidung zwischen den sogenannten “politischen” und “wirtschaftlichen” Migrant:innen oder Geflüchteten vorgenommen wird. Es ist eine fiktive Unterscheidung, die zu einer diskriminierenden Politik und einer diskriminierenden Gesellschaft führt, die den angekommenen Menschen die Handlungsfähigkeit nimmt und sie letztlich in die Unterbeschäftigung, Ausbeutung und an den Rand der Gesellschaft drängt. Wir erkennen an, dass Migration ein extremer Umstand ist'
			},
			{
				state: State.Disprove,
				reason:
					'Unser Ziel ist ein echter Green New Deal durch massive Investitionen in die sozial-ökologische Transformation. Wir wollen Klimaneutralität bis spätestens 2030 unter Einhaltung des verfügbaren Restemmissionsbudgets. Das ist möglich durch eine schnell steigende CO2-Steuer, radikale Umstellung der staatlichen Gebäude und Infrastruktur auf Klimaneutralität, Anwendung modernster klimaneutraler Produktionsprozesse und Förderung klimaneutral wirtschaftender Unternehmen.'
			},
			{
				state: State.Approve,
				reason:
					'Wir wollen Unternehmen dabei unterstützen, die 30-Stunden-Woche einzuführen. Mit der Arbeitszeitverkürzung verbundene Mehrkosten, etwa durch gestiegene Personalkosten, wollen wir im ersten Jahr zu 100 %, im zweiten zu 75 % und im dritten Jahr zu 25 % subventionieren. Nach einer Übergangszeit, in der diese Subventionen allen Unternehmen offen stehen, soll die 30-Stunden-Woche Gesetz werden.'
			},
			{
				state: State.Disprove,
				reason:
					'Frauen* müssen das Recht auf eine selbstbestimmte Familienplanung haben. Deshalb wollen wir Schwangerschaftsabbrüche vollständig legalisieren und die Paragraphen 218 und 219 StGB streichen. Die Kosten einer Abtreibung sollen vollständig von Krankenkassen übernommen werden. Wir wollen die Ursachen von Schwangerschaftsabbrüchen verstehen und vermindern, indem wir gezielt mehr Unterstützung für betroffene Frauen und Familien anbieten. Verhütungsmittel sollen kostenlos erhältlich sein.'
			},
			{
				state: State.Disprove,
				reason:
					'Die Rückkehr zu einer nationalen Währung ist für Deutschland keine sinnvolle Option, da dies enorme wirtschaftliche und politische Verwerfungen und Wohlstandsverluste mit sich bringen würde. Wir möchten den Euro demokratisieren, indem wir Zahlungsverkehr über eine öffentliche dezentrale Bezahlplattform ermöglichen und den Bürger:innen direkten Zugriff auf digitales Zentralbankgeld über ein Konto bei der EZB geben, unter Umgehung der Geschäftsbanken.'
			},
			{
				state: State.Approve,
				reason:
					'Die Bahn muss das Rückgrat für eine verkehrsmittelübergreifende Mobilität werden. Dazu wollen wir das Streckennetz erweitern, auch mittels Reaktivierung von stillgelegten Bahnstrecken und Ausbau im Bereich Automatisierung und Elektrifizierung. Wir wollen das Angebot verbessern, indem wir die Profitausrichtung der Bahn beenden und sie alsdann vergesellschaften. Regionale Verkehrsverbünde und den ÖPNV wollen wir besser in das Verkehrsangebot der Bahn integrieren.'
			},
			{
				state: State.Neutral,
				reason:
					'Viele Sozialaufgaben in nicht rentablen Teilgebieten hat der Staat auf das Ehrenamt verlagert. Deshalb erscheint der Anreiz der Anrechnung auf die zukünftige Rente verlockend. Wir sehen jedwede Arbeit jedoch als gleichwertig und präferieren daher das bedingungslose und universelle Lebenseinkommen als Modell. Es sichert die soziokulturelle Teilhabe und erlaubt es Menschen, wichtigen Tätigkeiten außerhalb der Lohnarbeit nachzugehen (in Sport, Kunst und Kultur, Studium, sich um andere zu kümmern).'
			},
			{
				state: State.Disprove,
				reason:
					'Um Mieter:innen unmittelbar zu entlasten, wollen wir das Umlegen der Grundsteuer auf die Betriebskosten verbieten. Außerdem sollen gemeinnützige Wohnungsbaugenossenschaften und Projekte von der Grundsteuer ausgenommen werden.'
			},
			{
				state: State.Disprove,
				reason:
					'Langfristig sollen demokratische Unternehmen zum verbindlichen Standard werden. Bereiche, die Bereiche, die für die Gewährleistung eines würdigen und partizipativen Lebens essentiell sind - Gesundheit, Wohnen, Verkehr, Wasser, Entsorgung, Energie und Kommunikation -, sollten grundsätzlich in staatlicher, kommunaler oder im Einzelfall genossenschaftlicher Hand liegen, um gleichen und gerechten Zugang sowie demokratische Kontrolle zu garantieren.'
			},
			{
				state: State.Approve,
				reason:
					'Politikverdrossenheit und der Vertrauensverlust in demokratische Institutionen sind Symptome des Qualitätsverlusts des öffentlichen politischen Diskurses. Das Konzept der deliberativen Demokratie wirkt der Demokratiekrise entgegen. Bürgerentscheide sollen deshalb durch zufällig ausgeloste Bürger:innenversammlungen vorbereitet werden, die die Bevölkerung direkt in die politischen Prozesse einbinden und als Korrektiv der Entscheidungen der gewählten Vertreter:innen fungieren.'
			},
			{
				state: State.Disprove,
				reason:
					'Kinder müssen erst lernen, was richtig und falsch ist. Meist können sie die Folgen ihres Handelns nicht einschätzen. Sie benötigen bei begangenen Straftaten Hilfe statt Strafe. Strafrechtliche Konsequenzen wirken in jungen Jahren kontraproduktiv.'
			},
			{
				state: State.Approve,
				reason:
					'Die europäischen und deutschen Automobilhersteller verschlafen seit Jahren den Umstieg auf eine CO2-ärmere Flotte. Sie verfolgen bei den E-Autos weiter die Strategie zu SUVs und großen Luxuskarossen. Strafzölle auf E-Auto-Importe nehmen den Druck aus der längst fälligen Umstellung bei den heimischen Automobilherstellern. Sie lenken zudem ab von einem überfälligen umfassenden Konzept einer wahren Verkehrswende.'
			},
			{
				state: State.Approve,
				reason:
					'Der Begriff von Souveränität und Staats&shy;bürgerschaft, der auf dem Westfälischen System beruht (also: eine Nation, eine Souveränität, eine Staats&shy;bürgerschaft), lässt sich mit einer europäischen demokratischen Union nicht länger widerspruchsfrei vereinbaren und muss neu definiert werden – und zwar auf eine Weise, die mehrfache Souveränitäten und Mehrfach-Staats&shy;bürgerschaften zulässt.'
			},
			{
				state: State.Disprove,
				reason:
					'Weil in vielen Bereichen der Staat die Versorgung nicht mehr sicherstellen kann (z. B. fehlen im Gesundheits- und Pflegebereich über 100.000 Pflegekräfte), kann die Lösung nicht in der Verpflichtung junger Menschen zum Dienst liegen. Die Freiwilligkeit muss gewahrt bleiben. Mit dem bedingungslosen Grundeinkommen werden sich ohnehin mehr Menschen für sinnstiftende Tätigkeiten entscheiden.'
			},
			{
				state: State.Disprove,
				reason:
					'Um den Energiebedarf von neuen Gebäuden zu senken, brauchen wir bessere energetische Standards. Die weitere Zulassung von fossilen Brennstoffen für Heizungen wird nur dazu führen, den Status quo zu verankern, statt die radikalen Maßnahmen herbeizuführen, die notwendig sind, um unsere Volkswirtschaften und die Energiesysteme, von denen sie abhängen, wirklich umzugestalten und das entscheidende Ziel zu erreichen, die globale Erwärmung unter 1,5 Grad zu halten.'
			},
			{
				state: State.Approve,
				reason:
					'Wir setzen uns ein für einen bundesweiten effektiven Mindestlohn und Mindestkonditionen. Die notwendigen Mittel sollen durch die monetären Möglichkeiten des Bundes bereitgestellt werden. Des Weiteren setzen uns für dafür ein, dass Fürsorgetätigkeiten in Voll- und Teilzeit angemessen bezahlt, am Mindestlohn orientiert, werden Arbeit im Gefängnis muss freiwillig sein und mit mindestens dem Mindestlohn entlohnt werden. Häftlinge sollen nicht für die Kosten ihrer Unterkunft aufkommen müssen.'
			}
		]
	},
	{
		name: 'WerteUnion',
		abbreviation: 'WerteUnion',
		description:
			'Die WerteUnion ging 2024 aus dem gleichnamigen Verein hervor. Die Partei fordert u. a. eine restriktive Migrationspolitik und die Abschaffung des öffentlich-rechtlichen Rundfunks in seiner jetzigen Form. Sie will den Einfluss der Parteien zugunsten direktdemokratischer Elemente verringern.',
		logo: 'parties/werte_union.png',
		positions: [
			{
				state: State.Disprove,
				reason:
					'Der Krieg Russlands in der Ukraine ist völkerrechtswidrig. Deutsche Außenpolitik muss dennoch der Diplomatie Raum geben. Deutschland ist im Besonderen gefordert, diplomatische Wege zur Beendigung von Konflikten zu finden, um eine dauerhafte Befriedung in Europa im Allgemeinen und im Osten des Kontinents im Besonderen zu erreichen.'
			},
			{
				state: State.Disprove,
				reason:
					'Die WerteUnion fordert den Stopp des Baus weiterer Windkraft- und Photovoltaikanlagen in Wäldern und auf naturnahen Flächen und ein Ende der Subventionen. Denn Wind- und Sonnenkraftwerke verschlingen Unsummen an Subventionen mit erwiesenen negativen Auswirkungen auf die Umwelt und die Versorgungssicherheit. Im freien Markt werden sich die besten Lösungen durchsetzen.'
			},
			{
				state: State.Approve,
				reason:
					'Das „Bürgergeld“ muss reformiert werden. Wir fordern einen deutlichen Abstand zwischen Arbeitseinkommen und Transferleistungen.'
			},
			{
				state: State.Disprove,
				reason:
					'Dafür gibt es keinen hinreichenden Grund. Weder sind Autobahnen besonders unfallträchtig, noch sind Spriteinsparungen so relevant, dass eine solche Restriktion Sinn macht.'
			},
			{
				state: State.Approve,
				reason:
					'Asylgesuche an deutschen Staatsgrenzen sind wegen der Drittstaatenregelung nicht anzunehmen. Die Drittstaatenregelung dient unmittelbar der Aufrechterhaltung der öffentlichen Ordnung und dem Schutz der inneren Sicherheit Deutschlands. Sie hat Verfassungsrang (Art. 16a Abs. 2 Grundgesetz) und verweist den Asylsuchenden aus gutem Grund und im Einklang mit der Genfer Flüchtlingskonvention auf möglichen Schutz im Ersteinreisestaat.'
			},
			{
				state: State.Disprove,
				reason:
					'Nicht ordnungskonforme Eingriffe in die Mietpreisbildung, insbesondere einen „Mietpreisdeckel“, lehnen wir genauso ab wie ein Mietrecht und bürokratische Vorschriften, die Investitionen in den Wohnungsbau behindern.'
			},
			{
				state: State.Disprove,
				reason:
					'Die WerteUnion lehnt die automatisierte Gesichtserkennung ab, da sie die Überwachung aller Bürger nach sich zieht. Wir treten für die Wahrung von Anonymität im öffentlichen Raum ein.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir lehnen Subventionen ab. Die Energiekosten sind durch die Beendigung der grünen Energiewende und die Wiederherstellung von Bedingungen für einen günstigen Energiemix auch durch fossile Brennstoffe und Kernkraft zu senken.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir setzen uns für eine grundsätzliche Flexibilisierung des Renteneintrittsalters ein und plädieren für eine regelgebundene Anpassung der Zugangsrenten bei steigender Lebenserwartung. Unter Berücksichtigung von versicherungsmathematisch fairen Ab- und Zuschlägen ist sowohl ein individuell früherer wie auch späterer, möglicherweise auch gleitend abgestufter Übergang in den Ruhestand zuzulassen.'
			},
			{
				state: State.Approve,
				reason:
					'Diese Formulierung gibt dem Grundgesetz eine transzendente, menschlicher Willkür entzogene Verankerung, welche die Basis für zentrale Grundrechte wie die Freiheit des Gewissens, des Glaubens und der Meinung bildet.'
			},
			{
				state: State.Approve,
				reason:
					'Fachkräfte aus dem Ausland sind heute ein wichtiger Faktor des deutschen Arbeitsmarktes. Langfristig müssen der Fachkräftemangel und das demographische Problem Deutschlands jedoch vor allem durch arbeitsmarkt-, bildungs- und familienpolitische Maßnahmen gelöst werden.'
			},
			{
				state: State.Approve,
				reason:
					'Deutschlands Kernkraftwerke gehörten zu den sichersten und zuverlässigsten weltweit. Die WerteUnion fordert, dass so viele der stillgelegten Reaktoren wie möglich wieder instandgesetzt und in Betrieb genommen werden und Anlagen mit neuester Technologie gebaut werden. Die WerteUnion plädiert für den Wiedereinstieg Deutschlands in die Kernenergieforschung und die Beteiligung an Projekten zur Evaluierung neuer Reaktortechnologien.'
			},
			{
				state: State.Disprove,
				reason:
					'Die Einkommensteuer muss dem Prinzip der Besteuerung nach Leistungsfähigkeit Rechnung tragen. Der Spitzensteuersatz liegt in Deutschland weit über dem EU-Durchschnitt. Auch deshalb soll der Solidaritätszuschlag abgeschafft werden. Wir sind grundsätzlich für eine deutliche Senkung der Einkommensteuersätze, denn Deutschland hat kein Einnahmen-, sondern ein Ausgabenproblem. Ausnahmeregelungen und ungerechtfertigte Steuervergünstigungen sind zu streichen.'
			},
			{
				state: State.Disprove,
				reason:
					'Die WerteUnion setzt sich für eine gute öffentlich finanzierte Infrastruktur eines differenzierten Schulsystems ein. Sie will zugleich die pädagogische Freiheit auf Einrichtungs- bzw. Schulebene vollumfänglich wiederherstellen. Die pädagogische Freiheit ist allein an der Maßgabe des Bildungsauftrages der Landesverfassung und der mit den jeweiligen Bildungsverantwortlichen selbst zu erarbeitenden Richtlinien auszurichten.'
			},
			{
				state: State.Approve,
				reason:
					'Der Staat Israel nimmt einen besonderen Platz in den auswärtigen Beziehungen der Bundesrepublik Deutschland ein. Seine Souveränität und territoriale Integrität sind in deutschem Interesse. Deutsche Außenpolitik muss sich für die berechtigten Interessen des jüdischen Staates und Volkes einsetzen.'
			},
			{
				state: State.Disprove,
				reason:
					'Die gesetzlichen Krankenkassen sind durch eine desaströse Gesundheitspolitik in der Krise. Das Problem löst man nicht, indem weitere Gesellschaftsgruppen verpflichtet werden, Mitglied zu werden. Kassen müssen entlastet werden, indem sie von zusätzlichen Ausgaben befreit werden. Die Zahl gesetzlicher Krankenkassen soll reduziert, Synergieeffekte durch Verschmelzung von Berufsgenossenschaften und Krankenkassen genutzt werden, ohne dass eine Monopolisierung eintritt. Wettbewerb muss bleiben.'
			},
			{
				state: State.Approve,
				reason: 'Quotenregelungen lehnen wir ab; das Leistungsprinzip muss Vorrang haben.'
			},
			{
				state: State.Disprove,
				reason:
					'Nachhaltige und ökologische Landwirtschaft muss freiwillig und aus Überzeugung betrieben werden.'
			},
			{
				state: State.Disprove,
				reason:
					'Der Staat soll sich aus der Steuerung politischer Bildung heraushalten, weil die Gefahr eines Missbrauchs zur politischen Propaganda und zur Bekämpfung politischer Gegner zu groß ist.'
			},
			{
				state: State.Disprove,
				reason:
					'Wir wollen das Lieferkettensorgfaltspflichtengesetz abschaffen, denn es ist ein Bürokratiemonster und verzerrt den Wettbewerb gerade zum Nachteil kleinerer und mittlerer Betriebe.'
			},
			{
				state: State.Disprove,
				reason:
					'Das BAföG-System ist überholt und sollte durch ein neues System von Stipendien ersetzt werden, das an der Leistungsbereitschaft und dem tatsächlichen Bedarf orientiert ist.'
			},
			{
				state: State.Approve,
				reason:
					'Da die Staatsverschuldung zu Lasten kommender Generationen geht und den Handlungsspielraum künftiger Regierungen einschränkt, ist die Neuverschuldung streng zu beschränken. Sie darf nur unter bestimmten Voraussetzungen und in einem genau begrenzten Umfang zulässig sein. Die Anreize für konsumtive Ausgaben, welche beispielsweise die Einwanderung in unser Sozialsystem begünstigen, sind zu reduzieren.'
			},
			{
				state: State.Approve,
				reason:
					'Die WerteUnion will alle Asylbewerber und ausreisepflichtige Ausländer dazu verpflichten, spätestens drei Monate nach Aufnahme des Asylverfahrens durch Erwerbstätigkeit selbst für ihren Lebensunterhalt aufzukommen.'
			},
			{
				state: State.Approve,
				reason:
					'Das Ziel der „Klimaneutralität“ ist aus ökologischer Sicht unnötig und aus ökonomischer Sicht unsinnig. Wir lehnen den Emissionshandel ab. Die WerteUnion steht stattdessen für eine umfassende Umwelt- und Naturschutz pflegende Politik.'
			},
			{
				state: State.Disprove,
				reason:
					'Das würde erhebliche Wettbewerbsnachteile bedeuten. Bei der wirtschaftlich angespannten Lage ist das nicht zu leisten.'
			},
			{
				state: State.Approve,
				reason:
					'Wir fordern die Rückgängigmachung der Aufhebung des Werbeverbots für Abtreibung (§ 219a StGB) und die Beibehaltung des § 218 StGB mit Pflichtberatung. Auch die medizinisch indizierte Spätabtreibung etwa eines behinderten, aber lebensfähigen Kindes lehnen wir ab.'
			},
			{
				state: State.Disprove,
				reason:
					'Eine stabilitätsorientierte Geldpolitik ist sowohl aus wirtschaftlichen als auch aus sozialen Gründen unverzichtbar. Kernaufgabe der Geldpolitik der EZB ist die Wahrung der Geldwertstabilität.'
			},
			{
				state: State.Disprove,
				reason:
					'Ein Vorrang der Schiene würde die individuelle Mobilität benachteiligen. Das marode Schienennetzwerk muss intakt gesetzt werden und eine leistungs- und wettbewerbsfähige Mobilitätsinfrastruktur hergestellt werden. Die Trassenpreise müssen an den ökonomischen Notwendigkeiten zum Erhalt des Schienennetzes ausgerichtet werden.'
			},
			{
				state: State.Disprove,
				reason:
					'Das wäre zwar im Interesse der Ehrenamtler, aber es ist nicht bezahlbar. Das Rentensystem steht vor dem finanziellen Zusammenbruch, weil immer weitere Leistungen ohne Deckung zugesagt wurden. Ehrenamtliche Tätigkeiten können nicht auf die Rente angerechnet werden.'
			},
			{ state: State.Approve, reason: 'Die Grundsteuer muss außerdem deutlich gesenkt werden.' },
			{
				state: State.Approve,
				reason:
					'Ein Zusammenbruch der gesellschaftlichen Ordnung muss verhindert werden. Das Streikrecht als Freiheitsrecht muss vor diesem überwiegenden öffentlichen Interesse zurücktreten. Die Unternehmen der kritischen Infrastruktur müssen definiert werden.'
			},
			{
				state: State.Approve,
				reason:
					'Volksabstimmungen sind ein wichtiges Korrektiv gegenüber einem Parlamentarismus, der sich vom Willen der Wähler entfernt hat. Das GG sieht in Art.20 Abs 2 ausdrücklich Volksabstimmungen vor. Sie müssen auch auf Bundesebene eingeführt werden.'
			},
			{
				state: State.Disprove,
				reason:
					'Zur Stärkung des Rechtsbewusstseins und zur Normverdeutlichung spricht sich die WerteUnion für schnellere Verfahren, Ausschöpfung des Strafrahmens und restriktive Anwendung des Jugendstrafrechts aus; ansonsten soll die Anwendung des Erwachsenenstrafrechts erfolgen. Wie bisher soll bei Anwendung des Jugendgerichtsgesetzes (JGG) eine Prüfung der strafrechtlichen Verantwortlichkeit möglich sein (§ 3 JGG) und bei mangelnder Reife familiengerichtliche Maßnahmen.'
			},
			{
				state: State.Approve,
				reason:
					'Anstelle der Erhebung von Schutzzöllen sollte die Automobilindustrie von Restriktionen bei der Entwicklung und Produktion verschiedener Antriebstechnologien befreit werden.'
			},
			{
				state: State.Disprove,
				reason:
					'Einbürgerung unter Hinnahme einer doppelten oder mehrfachen Staatsangehörigkeit wird auf Staatsangehörige der EU-Staaten beschränkt. Die Einbürgerung unter Hinnahme der Mehrstaatigkeit sollte bei Nicht-EU-Bürgern die Ausnahme bleiben. Staatsangehörigkeitserwerb durch Geburt in Deutschland im Fall ausländischer Eltern (ius soli) wird abgeschafft. Nachträglicher Erwerb einer ausländischen Staatsangehörigkeit ohne Zustimmung deutscher Behörden führt zum Verlust der deutschen Staatsangehörigkeit.'
			},
			{
				state: State.Disprove,
				reason:
					'Die WerteUnion tritt für Freiheit und Selbstbestimmung ein. Ein freiwilliges soziales Jahr reicht aus. Es ist nach unserem freiheitlichen Selbstverständnis grundsätzlich nicht Aufgabe des Staates, seinen Bürgern vorzuschreiben, wie sie ein Jahr ihres Lebens verbringen sollen.'
			},
			{
				state: State.Approve,
				reason:
					'Es darf weder auf nationaler noch europäischer Ebene Regulierungen zur energetischen Sanierung und Renovierung sowie zur Wahl der Heizsysteme geben, die die Hausbesitzer faktisch enteignen. Die WerteUnion wendet sich gegen alle Auflagen, die Bauen und Wohnen unnötig verteuern, insbesondere das Gebäudeenergiegesetz.'
			},
			{
				state: State.Disprove,
				reason:
					'Lohnhöhen auszuhandeln ist Aufgabe der Tarifpartner (Gewerkschaften und Arbeitgeberverbände).'
			}
		]
	}
];

export const theses: Thesis[] = [
	{
		label: 'Unterstützung der Ukraine',
		description: 'Deutschland soll die Ukraine weiterhin militärisch unterstützen.'
	},
	{
		label: 'Erneuerbare Energien',
		description:
			'Der Ausbau erneuerbarer Energien soll weiterhin vom Staat finanziell gefördert werden.'
	},
	{
		label: 'Streichung des Bürgergelds',
		description:
			'Das Bürgergeld soll denjenigen gestrichen werden, die wiederholt Stellenangebote ablehnen.'
	},
	{
		label: 'Tempolimit auf Autobahnen',
		description: 'Auf allen Autobahnen soll ein generelles Tempolimit gelten.'
	},
	{
		label: 'Abweisung Asylsuchender',
		description:
			'Asylsuchende, die über einen anderen EU-Staat eingereist sind, sollen an den deutschen Grenzen abgewiesen werden.'
	},
	{
		label: 'Begrenzung der Mietpreise',
		description: 'Bei Neuvermietungen sollen die Mietpreise weiterhin gesetzlich begrenzt werden.'
	},
	{
		label: 'Automatisierte Gesichtserkennung',
		description:
			'An Bahnhöfen soll die Bundespolizei Software zur automatisierten Gesichtserkennung einsetzen dürfen.'
	},
	{
		label: 'Energieintensive Unternehmen',
		description:
			'Energieintensive Unternehmen sollen vom Staat einen finanziellen Ausgleich für ihre Stromkosten erhalten.'
	},
	{
		label: 'Rente nach 40 Beitragsjahren',
		description:
			'Alle Beschäftigten sollen bereits nach 40 Beitragsjahren ohne Abschläge in Rente gehen können.'
	},
	{
		label: 'Grundgesetz',
		description:
			'Im einleitenden Satz des Grundgesetzes soll weiterhin die Formulierung „Verantwortung vor Gott“ stehen.'
	},
	{
		label: 'Anwerbung von Fachkräften',
		description: 'Deutschland soll weiterhin die Anwerbung von Fachkräften aus dem Ausland fördern.'
	},
	{
		label: 'Nutzung der Kernenergie',
		description: 'Für die Stromerzeugung soll Deutschland wieder Kernenergie nutzen.'
	},
	{
		label: 'Anhebung des Spitzensteuersatzes',
		description: 'Bei der Besteuerung von Einkommen soll der Spitzensteuersatz angehoben werden.'
	},
	{
		label: 'Kompetenzen in der Schulpolitik',
		description: 'Der Bund soll mehr Kompetenzen in der Schulpolitik erhalten.'
	},
	{
		label: 'Rüstungsexporte nach Israel',
		description:
			'Aus Deutschland sollen weiterhin Rüstungsgüter nach Israel exportiert werden dürfen.'
	},
	{
		label: 'Krankenkassen',
		description:
			'Alle Bürgerinnen und Bürger sollen in gesetzlichen Krankenkassen versichert sein müssen.'
	},
	{
		label: 'Abschaffung der Frauenquote',
		description:
			'Die gesetzliche Frauenquote in Vorständen und Aufsichtsräten börsennotierter Unternehmen soll abgeschafft werden.'
	},
	{
		label: 'Ökologische Landwirtschaft',
		description:
			'Ökologische Landwirtschaft soll stärker gefördert werden als konventionelle Landwirtschaft.'
	},
	{
		label: 'Projekte gegen Rechtsextremismus',
		description: 'Der Bund soll Projekte gegen Rechtsextremismus verstärkt fördern.'
	},
	{
		label: 'Kontrolle von Zulieferern',
		description:
			'Unternehmen sollen weiterhin die Einhaltung der Menschenrechte und des Umweltschutzes bei allen Zulieferern kontrollieren müssen.'
	},
	{
		label: 'Elternabhängiges BAföG',
		description:
			'Die Ausbildungsförderung BAföG soll weiterhin abhängig vom Einkommen der Eltern gezahlt werden.'
	},
	{
		label: 'Schuldenbremse',
		description: 'Die Schuldenbremse im Grundgesetz soll beibehalten werden.'
	},
	{
		label: 'Arbeitserlaubnis für Asylsuchende',
		description:
			'Asylsuchende sollen in Deutschland sofort nach ihrer Antragstellung eine Arbeitserlaubnis erhalten.'
	},
	{
		label: 'Verwerfen der Klimaziele',
		description: 'Deutschland soll das Ziel verwerfen, klimaneutral zu werden.'
	},
	{
		label: '35-Stunden-Woche',
		description:
			'In Deutschland soll die 35-Stunden-Woche als gesetzliche Regelarbeitszeit für alle Beschäftigten festgelegt werden.'
	},
	{
		label: 'Schwanger&shy;schafts&shy;abbruch nach Beratung',
		description:
			'Schwangerschaftsabbrüche sollen in den ersten drei Monaten weiterhin nur nach Beratung straffrei sein.'
	},
	{
		label: 'Nationale Währung',
		description: 'Der Euro soll in Deutschland durch eine nationale Währung ersetzt werden.'
	},
	{
		label: 'Schiene vor Straße',
		description:
			'Beim Ausbau der Verkehrs&shy;infrastruktur soll die Schiene Vorrang vor der Straße haben.'
	},
	{
		label: 'Ehrenamt',
		description: 'Ehrenamtliche Tätigkeiten sollen auf die zukünftige Rente angerechnet werden.'
	},
	{
		label: 'Umlegung der Grundsteuer',
		description: 'Die Grundsteuer soll weiterhin auf Mieterinnen und Mieter umgelegt werden dürfen.'
	},
	{
		label: 'Einschränkung des Streikrechts',
		description:
			'Das Streikrecht für Beschäftigte in Unternehmen der kritischen Infrastruktur soll gesetzlich eingeschränkt werden.'
	},
	{
		label: 'Volks&shy;entscheide',
		description: 'In Deutschland soll es auf Bundesebene Volks&shy;entscheide geben können.'
	},
	{
		label: 'Strafrecht für unter 14-Jährige',
		description: 'Unter 14-Jährige sollen strafrechtlich belangt werden können.'
	},
	{
		label: 'Abschaffung von Zöllen',
		description:
			'Deutschland soll sich für die Abschaffung der erhöhten EU-Zölle auf chinesische Elektroautos einsetzen.'
	},
	{
		label: 'Zweite Staats&shy;bürgerschaft',
		description:
			'In Deutschland soll es weiterhin generell möglich sein, neben der deutschen eine zweite Staats&shy;bürgerschaft zu haben.'
	},
	{
		label: 'Soziales Pflichtjahr',
		description: 'Für junge Erwachsene soll ein soziales Pflichtjahr eingeführt werden.'
	},
	{
		label: 'Fossile Brennstoffe',
		description:
			'Neue Heizungen sollen auch zukünftig vollständig mit fossilen Brennstoffen (z. B. Gas oder Öl) betrieben werden dürfen.'
	},
	{
		label: 'Erhöhung des Mindestlohns',
		description: 'Der gesetzliche Mindestlohn soll spätestens 2026 auf 15 Euro erhöht werden.'
	}
];
