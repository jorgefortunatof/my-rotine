import { format } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';

function validateHour(hourItem: string): string {
	if (hourItem.length < 5) {
		return 'valor inválido, deve conter 4 dígitos';
	}

	const [hour, minute] = hourItem.split(':');

	if (!(Number(hour) >= 0 && Number(hour) < 24)) {
		return 'horário inválido';
	}
	if (!(Number(minute) >= 0 && Number(minute) < 60)) {
		return 'horário inválido';
	}

	return '';
}

export function validateHourInterval(initialHour: string, finalHour: string) {
	const initialHourError = validateHour(initialHour);
	const finalHourError = validateHour(finalHour);

	if (initialHourError || finalHourError) {
		return { initialHour: initialHourError, finalHour: finalHourError };
	}

	const [iHour, iMinute] = initialHour.split(':');
	const [fHour, fMinute] = finalHour.split(':');

	if (Number(iHour) > Number(fHour)) {
		return {
			initialHour: 'deve ser menor que o horário final',
			finalHour: 'deve ser maior que o horário inicial',
		};
	}

	if (iHour === fHour) {
		if (Number(iMinute) >= Number(fMinute)) {
			return {
				initialHour: 'deve ser menor que o horário final',
				finalHour: 'deve ser maior que o horário inicial',
			};
		}
	}

	return null;
}

export function getCurrentHour(): string {
	const now = new Date();
	return format(now, 'p', { locale: ptBr });
}
