const endpoint = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL;
const webAppPattern = /^https:\/\/script\.google\.com\/macros\/s\/[^/]+\/exec\/?$/;

export async function sendToGoogleSheet(payload) {
	if (!endpoint) return { ok: true, demo: true };
	if (!webAppPattern.test(endpoint)) return { ok: false, error: 'Configure a Google Apps Script Web App URL ending in /exec, not a Google Sheets edit URL.' };

	try {
		const response = await fetch(endpoint, {
			method: 'POST',
			mode: 'no-cors',
			headers: { 'Content-Type': 'text/plain;charset=utf-8' },
			body: JSON.stringify({ ...payload, submittedAt: new Date().toISOString() })
		});

		if (response.type === 'opaque' || response.ok) {
			return { ok: true };
		}

		return { ok: false, error: 'The Google Sheets service rejected the request.' };
	} catch (error) {
		console.error('Google Sheets submission failed', error);
		return { ok: false, error: 'The Google Sheets service could not be reached.' };
	}
}