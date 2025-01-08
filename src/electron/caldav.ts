import * as dav from "dav";

async function fetchCalendarEventsForMonth(calendar: dav.Calendar, year: number, month: number) {
    try {
        // Calcola l'inizio e la fine del mese
        const start = new Date(year, month - 1, 1).toISOString(); // Primo giorno del mese
        const end = new Date(year, month, 0, 23, 59, 59).toISOString(); // Ultimo giorno del mese

        // Sincronizza gli eventi solo per il range specificato
        const events = await dav.syncCalendar(calendar, {
            filters: [
                {
                    type: 'comp-filter',
                    attrs: { name: 'VCALENDAR' },
                    children: [
                        {
                            type: 'comp-filter',
                            attrs: { name: 'VEVENT' },
                            children: [
                                {
                                    type: 'time-range',
                                    attrs: { start, end },
                                },
                            ],
                        },
                    ],
                },
            ],
        });

        console.log(`Eventi sincronizzati per ${year}-${month}:`, events);
        return events;
    } catch (error) {
        console.error('Errore durante la sincronizzazione con filtro:', error);
        throw error;
    }
}


class CalDavManager {
    
}