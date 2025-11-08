const fs = require("fs");
const path = require("path");

const outDir = path.join(process.cwd(), "public", "images", "characters");

const ensureDir = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

const characters = [
  {
    slug: "barbarian",
    labelEn: "Barbarian",
    labelAr: "البرابري",
    palette: {
      background: ["#ffb347", "#ff6f61"],
      primary: "#f6c177",
      secondary: "#f4a261",
      accent: "#f72585",
      detail: "#3c1f0f",
      weapon: "#ffd166"
    },
    mark: "horns",
    weapon: "sword"
  },
  {
    slug: "shelly",
    labelEn: "Shelly",
    labelAr: "شيلي",
    palette: {
      background: ["#8ec5fc", "#e0c3fc"],
      primary: "#ffe3ff",
      secondary: "#f3a9ff",
      accent: "#7b2cbf",
      detail: "#2b1d52",
      weapon: "#b5179e"
    },
    mark: "ponytail",
    weapon: "blaster"
  },
  {
    slug: "colt",
    labelEn: "Colt",
    labelAr: "كولت",
    palette: {
      background: ["#ff9a9e", "#fad0c4"],
      primary: "#ffd6d9",
      secondary: "#ff8fa3",
      accent: "#ff4d6d",
      detail: "#521414",
      weapon: "#e71d36"
    },
    mark: "visor",
    weapon: "dual"
  },
  {
    slug: "archer-queen",
    labelEn: "Archer Queen",
    labelAr: "ملكة الرماة",
    palette: {
      background: ["#9face6", "#74ebd5"],
      primary: "#f1f2ff",
      secondary: "#c2c7ff",
      accent: "#5f2eea",
      detail: "#2e1760",
      weapon: "#00bbf9"
    },
    mark: "crown",
    weapon: "bow"
  },
  {
    slug: "pekka",
    labelEn: "P.E.K.K.A",
    labelAr: "بيكا",
    palette: {
      background: ["#8e2de2", "#4a00e0"],
      primary: "#c77dff",
      secondary: "#9d4edd",
      accent: "#00f5d4",
      detail: "#1a0a2e",
      weapon: "#48bfe3"
    },
    mark: "visor-slit",
    weapon: "blade"
  },
  {
    slug: "nita",
    labelEn: "Nita",
    labelAr: "نيتا",
    palette: {
      background: ["#fbd3e9", "#bb377d"],
      primary: "#fed7aa",
      secondary: "#fb7185",
      accent: "#c9184a",
      detail: "#5f0f40",
      weapon: "#ff9e00"
    },
    mark: "bear-ears",
    weapon: "totem"
  },
  {
    slug: "wizard",
    labelEn: "Wizard",
    labelAr: "الساحر",
    palette: {
      background: ["#22d3ee", "#6366f1"],
      primary: "#bae6fd",
      secondary: "#60a5fa",
      accent: "#0ea5e9",
      detail: "#0b3d91",
      weapon: "#facc15"
    },
    mark: "hood",
    weapon: "orb"
  },
  {
    slug: "bowler",
    labelEn: "Bowler",
    labelAr: "بولر",
    palette: {
      background: ["#a1c4fd", "#c2e9fb"],
      primary: "#d8f3dc",
      secondary: "#95d5b2",
      accent: "#40916c",
      detail: "#1b4332",
      weapon: "#2d6a4f"
    },
    mark: "helmet",
    weapon: "boulder"
  }
];

const variantSettings = {
  portrait: {
    suffix: "portrait",
    tilt: 0,
    weaponRotation: 14,
    glowOffset: 0,
    lightSweep: 18
  },
  action: {
    suffix: "action",
    tilt: -10,
    weaponRotation: -28,
    glowOffset: 40,
    lightSweep: -24
  }
};

const svgHeader = `<?xml version="1.0" encoding="UTF-8"?>`;

const createGradient = (colors, id, angle = 45) => {
  const [start, end] = colors;
  const transform = `rotate(${angle})`;
  return `
    <linearGradient id="${id}" gradientTransform="${transform}">
      <stop offset="0%" stop-color="${start}"/>
      <stop offset="100%" stop-color="${end}"/>
    </linearGradient>
  `;
};

const renderMark = (type, accent, detail) => {
  switch (type) {
    case "horns":
      return `
        <path d="M310 150 C320 110 360 110 370 150 L350 180 C340 170 320 170 310 180 Z" fill="${accent}" stroke="${detail}" stroke-width="6" stroke-linejoin="round"/>
        <path d="M410 150 C420 110 460 110 470 150 L450 180 C440 170 420 170 410 180 Z" fill="${accent}" stroke="${detail}" stroke-width="6" stroke-linejoin="round"/>
      `;
    case "crown":
      return `
        <path d="M320 170 L350 120 L380 170 L410 120 L440 170 L440 190 L320 190 Z" fill="${accent}" stroke="${detail}" stroke-width="6" stroke-linejoin="round"/>
      `;
    case "visor":
      return `
        <rect x="325" y="150" width="110" height="40" rx="18" fill="${accent}" stroke="${detail}" stroke-width="6"/>
        <rect x="340" y="160" width="80" height="22" rx="10" fill="${detail}" opacity="0.35"/>
      `;
    case "visor-slit":
      return `
        <path d="M310 160 L470 160 L450 210 L330 210 Z" fill="${accent}"/>
        <rect x="330" y="175" width="120" height="22" rx="4" fill="${detail}"/>
      `;
    case "ponytail":
      return `
        <path d="M360 110 C390 80 440 90 460 120 C450 160 420 185 390 170 Z" fill="${accent}" stroke="${detail}" stroke-width="6" stroke-linejoin="round"/>
      `;
    case "bear-ears":
      return `
        <circle cx="330" cy="150" r="35" fill="${accent}" stroke="${detail}" stroke-width="6"/>
        <circle cx="450" cy="150" r="35" fill="${accent}" stroke="${detail}" stroke-width="6"/>
      `;
    case "hood":
      return `
        <path d="M320 130 Q390 40 460 130 L460 210 Q390 180 320 210 Z" fill="${accent}" stroke="${detail}" stroke-width="6" stroke-linejoin="round"/>
      `;
    case "helmet":
      return `
        <path d="M310 150 Q390 80 470 150 L470 190 Q390 160 310 190 Z" fill="${accent}" stroke="${detail}" stroke-width="6"/>
        <rect x="330" y="160" width="120" height="26" rx="12" fill="${detail}" opacity="0.45"/>
      `;
    default:
      return "";
  }
};

const renderWeapon = (type, colors, variant) => {
  const { weaponRotation } = variant;
  const { weapon, accent, detail } = colors;
  const centerX = 500;
  const centerY = 370;
  const rotation = `rotate(${weaponRotation} ${centerX} ${centerY})`;
  switch (type) {
    case "sword":
      return `
        <g transform="${rotation}">
          <rect x="${centerX - 14}" y="${centerY - 140}" width="28" height="160" rx="12" fill="${weapon}" stroke="${detail}" stroke-width="6"/>
          <polygon points="${centerX - 14},${centerY - 140} ${centerX},${centerY - 200} ${centerX + 14},${centerY - 140}" fill="${accent}"/>
          <rect x="${centerX - 36}" y="${centerY - 20}" width="72" height="20" rx="10" fill="${accent}" stroke="${detail}" stroke-width="5"/>
        </g>
      `;
    case "blaster":
      return `
        <g transform="${rotation}">
          <rect x="${centerX - 44}" y="${centerY - 100}" width="160" height="70" rx="22" fill="${weapon}" stroke="${detail}" stroke-width="6"/>
          <rect x="${centerX + 90}" y="${centerY - 88}" width="50" height="46" rx="12" fill="${accent}" />
          <rect x="${centerX - 20}" y="${centerY - 28}" width="48" height="80" rx="16" fill="${accent}" stroke="${detail}" stroke-width="5"/>
        </g>
      `;
    case "dual":
      return `
        <g transform="rotate(${weaponRotation} ${centerX} ${centerY})">
          <rect x="${centerX - 130}" y="${centerY - 36}" width="90" height="28" rx="12" fill="${weapon}" stroke="${detail}" stroke-width="5"/>
          <rect x="${centerX + 40}" y="${centerY - 36}" width="90" height="28" rx="12" fill="${weapon}" stroke="${detail}" stroke-width="5"/>
          <circle cx="${centerX - 80}" cy="${centerY - 22}" r="12" fill="${accent}"/>
          <circle cx="${centerX + 90}" cy="${centerY - 22}" r="12" fill="${accent}"/>
        </g>
      `;
    case "bow":
      return `
        <g transform="${rotation}">
          <path d="M${centerX - 70} ${centerY - 160} Q ${centerX + 80} ${centerY - 40} ${centerX - 70} ${centerY + 80}" fill="none" stroke="${weapon}" stroke-width="16" stroke-linecap="round"/>
          <line x1="${centerX - 70}" y1="${centerY - 160}" x2="${centerX - 70}" y2="${centerY + 80}" stroke="${accent}" stroke-width="6"/>
          <polygon points="${centerX - 70},${centerY - 140} ${centerX - 110},${centerY - 20} ${centerX - 70},${centerY - 40}" fill="${accent}"/>
        </g>
      `;
    case "blade":
      return `
        <g transform="${rotation}">
          <path d="M${centerX - 24} ${centerY - 140} L${centerX + 90} ${centerY - 40} L${centerX - 24} ${centerY + 60} Z" fill="${weapon}" stroke="${detail}" stroke-width="6"/>
          <rect x="${centerX - 35}" y="${centerY - 30}" width="30" height="100" rx="12" fill="${accent}"/>
        </g>
      `;
    case "totem":
      return `
        <g transform="${rotation}">
          <rect x="${centerX - 24}" y="${centerY - 120}" width="48" height="140" rx="18" fill="${weapon}" stroke="${detail}" stroke-width="6"/>
          <circle cx="${centerX}" cy="${centerY - 90}" r="22" fill="${accent}"/>
          <circle cx="${centerX}" cy="${centerY - 90}" r="10" fill="${detail}"/>
        </g>
      `;
    case "orb":
      return `
        <g transform="${rotation}">
          <circle cx="${centerX}" cy="${centerY - 80}" r="48" fill="${weapon}" stroke="${detail}" stroke-width="6"/>
          <circle cx="${centerX}" cy="${centerY - 80}" r="24" fill="${accent}"/>
          <rect x="${centerX - 12}" y="${centerY - 32}" width="24" height="100" rx="12" fill="${accent}"/>
        </g>
      `;
    case "boulder":
      return `
        <g transform="${rotation}">
          <path d="M${centerX - 70} ${centerY - 80} L${centerX + 40} ${centerY - 120} L${centerX + 100} ${centerY - 20} L${centerX + 10} ${centerY + 70} L${centerX - 90} ${centerY + 20} Z" fill="${weapon}" stroke="${detail}" stroke-width="6"/>
          <circle cx="${centerX}" cy="${centerY - 40}" r="26" fill="${accent}"/>
        </g>
      `;
    default:
      return "";
  }
};

const generateSvg = (character, variantKey) => {
  const variant = variantSettings[variantKey];
  const { palette, labelEn, labelAr, mark, weapon } = character;
  const gradientId = `${character.slug}-${variantKey}-bg`;
  const glowId = `${character.slug}-${variantKey}-glow`;
  const { primary, secondary, accent, detail, background } = palette;

  return `${svgHeader}
<svg width="720" height="720" viewBox="0 0 720 720" xmlns="http://www.w3.org/2000/svg">
  <defs>
    ${createGradient(background, gradientId, 45 + variant.lightSweep)}
    ${createGradient([accent, secondary], glowId, 90 - variant.lightSweep)}
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="24" stdDeviation="24" flood-color="${detail}" flood-opacity="0.25"/>
    </filter>
  </defs>
  <rect x="40" y="40" width="640" height="640" rx="48" fill="url(#${gradientId})"/>
  <circle cx="${360 + variant.glowOffset}" cy="240" r="140" fill="url(#${glowId})" opacity="0.32"/>
  <g transform="translate(0, 20)" filter="url(#shadow)">
    <g transform="translate(360, 360) rotate(${variant.tilt}) translate(-360, -360)">
      ${renderMark(mark, accent, detail)}
      <rect x="300" y="200" width="160" height="160" rx="60" fill="${primary}" stroke="${detail}" stroke-width="10"/>
      <circle cx="360" cy="260" r="74" fill="${secondary}" stroke="${detail}" stroke-width="8"/>
      <ellipse cx="330" cy="250" rx="16" ry="20" fill="${detail}" opacity="0.85"/>
      <ellipse cx="390" cy="250" rx="16" ry="20" fill="${detail}" opacity="0.85"/>
      <path d="M330 310 Q360 336 390 310" stroke="${detail}" stroke-width="10" stroke-linecap="round" fill="none"/>
      <rect x="290" y="320" width="180" height="200" rx="70" fill="${primary}" stroke="${detail}" stroke-width="10"/>
      <rect x="310" y="420" width="140" height="120" rx="60" fill="${secondary}" stroke="${detail}" stroke-width="10"/>
      <rect x="270" y="340" width="52" height="160" rx="26" fill="${secondary}" stroke="${detail}" stroke-width="8"/>
      <rect x="398" y="340" width="52" height="160" rx="26" fill="${secondary}" stroke="${detail}" stroke-width="8"/>
      <rect x="320" y="512" width="60" height="110" rx="28" fill="${accent}" stroke="${detail}" stroke-width="8"/>
      <rect x="380" y="512" width="60" height="110" rx="28" fill="${accent}" stroke="${detail}" stroke-width="8"/>
      <rect x="310" y="360" width="160" height="60" rx="30" fill="${accent}" opacity="0.3"/>
    </g>
    ${renderWeapon(weapon, palette, variant)}
  </g>
  <text x="60" y="640" font-family="Poppins, 'Segoe UI', sans-serif" font-weight="600" font-size="40" fill="${detail}" letter-spacing="1">${labelEn}</text>
  <text x="60" y="680" font-family="'Noto Sans Arabic', 'Segoe UI', sans-serif" font-weight="700" font-size="34" fill="${detail}">${labelAr}</text>
</svg>`;
};

const main = () => {
  ensureDir(outDir);
  characters.forEach((character) => {
    Object.keys(variantSettings).forEach((variantKey) => {
      const svg = generateSvg(character, variantKey);
      const filename = `${character.slug}-${variantSettings[variantKey].suffix}.svg`;
      fs.writeFileSync(path.join(outDir, filename), svg, "utf8");
    });
  });
  console.log(`Generated ${characters.length * Object.keys(variantSettings).length} illustrations in ${outDir}`);
};

main();
