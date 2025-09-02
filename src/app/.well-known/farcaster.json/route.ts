import { PROJECT_TITLE } from "~/lib/constants";

export async function GET() {
  const appUrl =
    process.env.NEXT_PUBLIC_URL ||
    `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

  const config = {
    accountAssociation: {
      header:
        "eyJmaWQiOjg2OTk5OSwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDc2ZDUwQjBFMTQ3OWE5QmEyYkQ5MzVGMUU5YTI3QzBjNjQ5QzhDMTIifQ",
      payload:
        "eyJkb21haW4iOiJzb3BoaWEtZmFyY2FzdGVyLW5mdC12MS52ZXJjZWwuYXBwIn0",
      signature:
        "MHg4MjRkMjMwNDdiYmU3OGQ0YzgxYjI5NDhhOThhZTVjNGM4MzE2MGJhMDlkZDllYWMzNTA4YzgyODU2MzcxOTgyMDY3ZWJkMjdmMDBiOGZmOWE4YjNiNzM5ZTlkOGQxNDg3MWNhM2I0ZDgzNGRmNWFlMDkzOTgwZWY4M2FkYTYzYjFi",
    },
    frame: {
      version: "1",
      name: PROJECT_TITLE,
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/og.png`,
      buttonTitle: "Open",
      webhookUrl: `${appUrl}/api/webhook`,
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#555555",
      primaryCategory: "social",
    },
  };

  return Response.json(config);
}
