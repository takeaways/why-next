module.exports = {
  printWidth: 100,
  tabWidth: 2,
  trailingComma: "all",
  semi: true,
  importOrder: [
    "^@core/(.*)$",
    "^next/(.*)$",
    "^pages/(.*)$",
    "^components/(.*)$",
    "^types/(.*)$",
    "^@ui/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
