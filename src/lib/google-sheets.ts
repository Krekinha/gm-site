import { google } from "googleapis";

// Interface for quote/contact form data
export interface SheetData {
	id?: string;
	name: string;
	email: string;
	message: string;
}

// Interface for feedback/testimonial data
export interface FeedbackData {
	id?: string;
	name: string;
	roleCompany: string;
	rating: number;
	testimonial: string;
	email: string;
	photoUrl?: string;
	authorization: boolean;
}

// Initialize Google Sheets API client
async function getGoogleSheetsClient() {
	const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
	const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

	if (!email || !privateKey) {
		throw new Error("Google Sheets credentials not configured");
	}

	const auth = new google.auth.JWT({
		email,
		key: privateKey,
		scopes: ["https://www.googleapis.com/auth/spreadsheets"],
	});

	return google.sheets({ version: "v4", auth });
}

// Append feedback to Google Sheets using the official API
export async function appendFeedbackToSheet(data: FeedbackData) {
	const spreadsheetId = process.env.GOOGLE_SHEET_DEPOIMENTOS;

	if (!spreadsheetId) {
		console.error("GOOGLE_SHEET_DEPOIMENTOS not configured");
		return {
			success: false,
			error: "Configuração da planilha não encontrada",
		};
	}

	try {
		const sheets = await getGoogleSheetsClient();

		const id = data.id || crypto.randomUUID();
		const criadoEm = new Date().toLocaleString("pt-BR", {
			timeZone: "America/Sao_Paulo",
		});

		// Values in the order of spreadsheet columns:
		// id, nome, cargoEmpresa, nota, depoimento, email, foto, autorizacao, criadoEm
		const values = [
			[
				id,
				data.name,
				data.roleCompany,
				data.rating,
				data.testimonial,
				data.email,
				data.photoUrl || "",
				data.authorization ? "Sim" : "Não",
				criadoEm,
			],
		];

		await sheets.spreadsheets.values.append({
			spreadsheetId,
			range: "A:I", // Columns A through I
			valueInputOption: "USER_ENTERED",
			requestBody: {
				values,
			},
		});

		return { success: true };
	} catch (error) {
		console.error("Google Sheets API error:", error);
		return {
			success: false,
			error: "Erro ao salvar na planilha",
		};
	}
}

// Append quote/contact to Google Sheets using the official API
export async function appendToSheet(data: SheetData) {
	const spreadsheetId = process.env.GOOGLE_SHEET_ORCAMENTOS;

	if (!spreadsheetId) {
		console.error("GOOGLE_SHEET_ORCAMENTOS not configured");
		return {
			success: false,
			error: "Configuração da planilha não encontrada",
		};
	}

	try {
		const sheets = await getGoogleSheetsClient();

		const id = data.id || crypto.randomUUID();
		const criadoEm = new Date().toLocaleString("pt-BR", {
			timeZone: "America/Sao_Paulo",
		});

		// Values in the order of spreadsheet columns:
		// id, nome, email, mensagem, criadoEm
		const values = [[id, data.name, data.email, data.message, criadoEm]];

		await sheets.spreadsheets.values.append({
			spreadsheetId,
			range: "A:E", // Columns A through E
			valueInputOption: "USER_ENTERED",
			requestBody: {
				values,
			},
		});

		return { success: true };
	} catch (error) {
		console.error("Google Sheets API error:", error);
		return {
			success: false,
			error: "Erro ao salvar na planilha",
		};
	}
}
