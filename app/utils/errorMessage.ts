export function getErrorMessage(data: any): string {
  if (!data || typeof data !== "object") {
    return "Something went wrong. Please try again.";
  }

  // Duplicate Patient ID — check both nested and flat shapes
  const uniqueError =
    (data.message && typeof data.message === "object" && data.message.unique) ||
    data.unique;

  if (uniqueError) {
    return "This Patient ID is already registered. Please choose a different, unique ID.";
  }

  // Nested shape: { message: { field: ["..."] } }
  if (data.message && typeof data.message === "object") {
    const firstKey = Object.keys(data.message)[0];
    const firstVal = data.message[firstKey];
    if (Array.isArray(firstVal)) return firstVal[0];
  }

  // Plain string message
  if (typeof data.message === "string") return data.message;

  // Flat shape: { field: ["..."] } — skip known meta keys
  const skip = new Set(["success", "code", "message"]);
  const firstArrayEntry = Object.entries(data).find(
    ([key, val]) => !skip.has(key) && Array.isArray(val)
  );
  if (firstArrayEntry) return (firstArrayEntry[1] as string[])[0];

  return "Something went wrong. Please try again.";
}