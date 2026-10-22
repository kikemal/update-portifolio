const fields = {
  name: "Ada Lovelace",
  email: "ada@example.com",
  message: "I'd like to build a campus finder.",
};

const message = [
  "Hello Kidist, I would like to get in touch.",
  "",
  `Name: ${fields.name}`,
  `Email: ${fields.email}`,
  "",
  "Message:",
  fields.message,
].join("\n");

const url = `https://wa.me/251924327899?text=${encodeURIComponent(message)}`;
const parsed = new URL(url);
const decoded = parsed.searchParams.get("text");

console.log(url);
console.log("---decoded---");
console.log(decoded);
console.log("---checks---");
console.log(
  JSON.stringify(
    {
      host: parsed.host,
      number: parsed.pathname.replace("/", ""),
      hasPlusForSpace: url.includes("text=Hello+"),
      hasPercent20: url.includes("Hello%20"),
      roundtripOk: decoded === message,
    },
    null,
    2,
  ),
);
