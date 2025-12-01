export interface SheetData {
	id?: string;
	name: string;
	email: string;
	message: string;
	criadoEm: string;
}

export async function appendToSheet(data: SheetData) {
	const SHEETDB_API_URL = process.env.SHEETDB_API_URL;

	if (!SHEETDB_API_URL) {
		console.error("SHEETDB_API_URL not configured");
		return {
			success: false,
			error: "Configuração de planilha não encontrada",
		};
	}

	try {
		const payload = {
			data: {
				id: data.id || crypto.randomUUID(),
				nome: data.name,
				email: data.email,
				mensagem: data.message,
				criadoEm:
					new Date().toLocaleString("pt-BR", {
						timeZone: "America/Sao_Paulo",
					}),
			},
		};

		const response = await fetch(SHEETDB_API_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
		});

		if (!response.ok) {
			const errorText = await response.text();
			console.error("SheetDB error:", errorText);
			return {
				success: false,
				error: "Erro ao salvar na planilha",
			};
		}

		return { success: true };
	} catch (error) {
		console.error("SheetDB error:", error);
		return {
			success: false,
			error: "Erro ao salvar na planilha",
		};
	}
}
