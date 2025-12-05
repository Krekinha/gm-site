"use server";

import { appendFeedbackToSheet, type FeedbackData } from "@/lib/google-sheets";

export async function submitFeedback(data: Omit<FeedbackData, "id">) {
	try {
		const result = await appendFeedbackToSheet(data);

		if (!result.success) {
			return {
				success: false,
				error: result.error || "Erro ao enviar avaliação",
			};
		}

		return { success: true };
	} catch (error) {
		console.error("Error submitting feedback:", error);
		return {
			success: false,
			error: "Erro ao enviar avaliação. Tente novamente.",
		};
	}
}
