"use server";

import { google } from "googleapis";

const oauth2Client = new google.auth.OAuth2(
	process.env.GMAIL_CLIENT_ID,
	process.env.GMAIL_CLIENT_SECRET,
);

oauth2Client.setCredentials({
	refresh_token: process.env.GMAIL_REFRESH_TOKEN,
});

const gmail = google.gmail({ version: "v1", auth: oauth2Client });

interface EmailOptions {
	to: string;
	subject: string;
	html: string;
	replyTo?: string;
}

function createEmail({ to, subject, html, replyTo }: EmailOptions): string {
	const from = process.env.GMAIL_USER;

	const messageParts = [
		`From: ${from}`,
		`To: ${to}`,
		`Subject: ${subject}`,
		"MIME-Version: 1.0",
		"Content-Type: text/html; charset=utf-8",
	];

	if (replyTo) {
		messageParts.splice(2, 0, `Reply-To: ${replyTo}`);
	}

	messageParts.push("", html);

	const message = messageParts.join("\r\n");

	// Encode to base64url format
	const encodedMessage = Buffer.from(message)
		.toString("base64")
		.replace(/\+/g, "-")
		.replace(/\//g, "_")
		.replace(/=+$/, "");

	return encodedMessage;
}

export async function sendGmail({
	to,
	subject,
	html,
	replyTo,
}: EmailOptions): Promise<{ success: boolean; error?: string }> {
	try {
		const raw = createEmail({ to, subject, html, replyTo });

		await gmail.users.messages.send({
			userId: "me",
			requestBody: {
				raw,
			},
		});

		return { success: true };
	} catch (error) {
		console.error("Gmail API error:", error);
		return {
			success: false,
			error: error instanceof Error ? error.message : "Erro ao enviar email",
		};
	}
}
