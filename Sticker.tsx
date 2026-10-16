export const STICKERS = {
  rocket: "1f680",
  zap: "26a1",
  lock: "1f512",
  globe: "1f30d",
  party: "1f389",
  fire: "1f525",
  robot: "1f916",
  sparkles: "2728",
  gem: "1f48e",
  megaphone: "1f4e3",
  monkey: "1f648",
  check: "2705",
  camera: "1f4f8",
  speech: "1f4ac",
  bulb: "1f4a1",
  wave: "1f44b",
  letter: "1f48c",
  shush: "1f92b",
} as const;

export type StickerName = keyof typeof STICKERS;

export const stickerUrl = (name: StickerName) =>
  `https://fonts.gstatic.com/s/e/notoemoji/latest/${STICKERS[name]}/512.webp`;

type Props = {
  name: StickerName;
  size?: number;
  className?: string;
};

const Sticker = ({ name, size = 32, className = "" }: Props) => (
  <img
    src={stickerUrl(name)}
    alt=""
    aria-hidden
    loading="lazy"
    width={size}
    height={size}
    style={{ width: size, height: size }}
    className={`inline-block shrink-0 object-contain ${className}`}
  />
);

export default Sticker;
