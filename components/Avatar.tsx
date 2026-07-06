"use client";

interface AvatarProps {
  name: string;
  size?: number;
}

const gradients = [
  "from-indigo-500 to-cyan-500",
  "from-purple-500 to-pink-500",
  "from-emerald-500 to-teal-500",
  "from-orange-500 to-red-500",
  "from-yellow-500 to-orange-500",
  "from-sky-500 to-blue-600",
  "from-fuchsia-500 to-violet-600",
  "from-rose-500 to-pink-600",
];

function hash(str: string) {
  let h = 0;

  for (let i = 0; i < str.length; i++) {
    h = str.charCodeAt(i) + ((h << 5) - h);
  }

  return Math.abs(h);
}

export default function Avatar({
  name,
  size = 72,
}: AvatarProps) {
  const initials = name
    .split("_")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const gradient =
    gradients[hash(name) % gradients.length];

  return (
    <div
      style={{
        width: size,
        height: size,
      }}
      className={`
        rounded-full
        bg-gradient-to-br
        ${gradient}
        flex
        items-center
        justify-center
        font-black
        text-white
        shadow-xl
        border
        border-white/20
        select-none
      `}
    >
      <span
        style={{
          fontSize: size * 0.34,
        }}
      >
        {initials}
      </span>
    </div>
  );
}