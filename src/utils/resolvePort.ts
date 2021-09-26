export function getUri(): string {
  let uri: string;
  if (process.env.NODE_ENV === "development") uri = "http://localhost:5000";
  else uri = "https://mohits.dev";

  return uri;
}
