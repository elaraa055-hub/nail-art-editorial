import img01 from "@/assets/nails/01-pastel-jeweled.jpg";
import img02 from "@/assets/nails/02-blue-floral.jpg";
import img03 from "@/assets/nails/03-lilac-3d.jpg";
import img04 from "@/assets/nails/04-red-baroque.jpg";
import img05 from "@/assets/nails/05-jade-marble.jpg";
import img06 from "@/assets/nails/06-denim-gold.jpg";
import img07 from "@/assets/nails/07-citrus-glass.jpg";
import img08 from "@/assets/nails/08-autumn-chrome.jpg";
import img09 from "@/assets/nails/09-tweed-dots.jpg";

export type NailWork = {
  id: string;
  src: string;
  title: string;
  collection: string;
  technique: string;
  artist: string;
  notes: string;
  palette: string[];
};

export const works: NailWork[] = [
  {
    id: "01",
    src: img01,
    title: "Confetti Sonata",
    collection: "Atelier Pastels",
    technique: "Hand-set Swarovski · 3D charms · gold wire",
    artist: "Destiny",
    notes: "Almond stiletto, pastel jelly base, hand-placed pearls and rainbow crystals.",
    palette: ["#F4E7C9", "#F8C8D8", "#E94E7C", "#D4A24C"],
  },
  {
    id: "02",
    src: img02,
    title: "Iris in Resin",
    collection: "Pressed Botanicals",
    technique: "Pressed florals · gold cuffs · negative space",
    artist: "Michael",
    notes: "Square length with deep cobalt florals suspended in clear gel, dimensional gold hardware.",
    palette: ["#EDE6D9", "#1F3E8C", "#C9A24C", "#7A5A2A"],
  },
  {
    id: "03",
    src: img03,
    title: "Lilas en Trois",
    collection: "Sculpted Garden",
    technique: "3D acrylic florals · 24k gold wire · crystal pavé",
    artist: "Destiny",
    notes: "Hand-sculpted lilac blossoms with painted gold filigree and amethyst accents.",
    palette: ["#E7D7D5", "#C8B0DC", "#8A6DAE", "#C9A24C"],
  },
  {
    id: "04",
    src: img04,
    title: "Maison Rouge",
    collection: "Baroque Lace",
    technique: "Hand-stamped lace · cat-eye magnetic · chrome",
    artist: "Michael",
    notes: "Almond, crimson lace damask over magnetic gel with silver leaf tips.",
    palette: ["#E8DFD2", "#7A1226", "#C0344A", "#B7B6B0"],
  },
  {
    id: "05",
    src: img05,
    title: "Jade Tropique",
    collection: "Marbled Stone",
    technique: "Marble work · 3D florals · 24k flake",
    artist: "Destiny",
    notes: "Soft almond, sculpted hibiscus, gilded jade marbling, pearl accents.",
    palette: ["#EBE2C8", "#A4C49A", "#3E6B3A", "#D4A24C"],
  },
  {
    id: "06",
    src: img06,
    title: "Denim Heirloom",
    collection: "Couture Coffin",
    technique: "Hand-painted denim · gold caviar · pearl beadwork",
    artist: "Michael",
    notes: "Long coffin set with frayed denim illusion, hand-laid gold caviar, fresh-water pearls.",
    palette: ["#EDE5D1", "#7DA2C2", "#314F70", "#D4A24C"],
  },
  {
    id: "07",
    src: img07,
    title: "Agrumes & Onyx",
    collection: "Glass Couture",
    technique: "Jelly glass · 3D ridges · cat-eye · charms",
    artist: "Destiny",
    notes: "Stiletto fusion of citrus jelly glass, deep onyx cat-eye, gold sunburst charms.",
    palette: ["#ECE2CE", "#E8732A", "#0F4B5A", "#D4A24C"],
  },
  {
    id: "08",
    src: img08,
    title: "Aurora Tannin",
    collection: "Chromatic Glaze",
    technique: "Aura airbrush · oxblood chrome · high gloss",
    artist: "Michael",
    notes: "Almond auras blending oxblood, ochre and amethyst — a single seamless gradient.",
    palette: ["#EBE0CC", "#6B1822", "#C77A2C", "#3E2A4A"],
  },
  {
    id: "09",
    src: img09,
    title: "Tweed Vermillion",
    collection: "Couture Texture",
    technique: "Micro-dot tweed · houndstooth · gold rope",
    artist: "Destiny",
    notes: "Stiletto length, hand-stippled vermillion tweed, houndstooth accent nail, gold rope band.",
    palette: ["#ECE3CF", "#B62A2A", "#1B1612", "#C9A24C"],
  },
];
