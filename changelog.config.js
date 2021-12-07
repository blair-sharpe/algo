module.exports = {
  disableEmoji: false,
  format: "{type}{scope}: {emoji}{subject}",
  list: ["arrays", "lists", "other"],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ["type", "subject"],
  scopes: [],
  types: {
    arrays: {
      description: "Chapter 1: Arrays",
      emoji: "🤖",
      value: "arrays",
    },
    lists: {
      description: "Chapter 2: Linked Lists",
      emoji: "🎡",
      value: "lists",
    },
    other: {
      description: "other",
      emoji: "✏️",
      value: "other",
    },
  },
};
