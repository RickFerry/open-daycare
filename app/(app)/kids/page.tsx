import type { ReactNode } from "react";
import Link from "next/link";

type Slot =
  | { kind: "badge"; label: string; bg: string; color: string }
  | { kind: "chevron" };

type Kid = {
  name: string;
  letter: string;
  bg: string;
  color: string;
  meta: string;
  slot: Slot;
};

const KIDS: readonly Kid[] = [
  { name: "Mateo Fernández", letter: "M", bg: "#A9D9E8", color: "#1F7A93", meta: "3 años · 2 padres vinculados", slot: { kind: "badge", label: "MANÍ", bg: "#FBD8CC", color: "#D9684A" } },
  { name: "Sofía Méndez", letter: "S", bg: "#F4B8CC", color: "#C44A7A", meta: "2 años · 1 padre vinculado", slot: { kind: "chevron" } },
  { name: "Benjamín Ruiz", letter: "B", bg: "#B9DEC4", color: "#3E8B62", meta: "3 años · 2 padres vinculados", slot: { kind: "chevron" } },
  { name: "Valentina Soto", letter: "V", bg: "#F4DC8E", color: "#9A7B1E", meta: "2 años · sin padres vinculados", slot: { kind: "badge", label: "VINCULAR", bg: "#F9D2DE", color: "#C56486" } },
  { name: "Tomás Díaz", letter: "T", bg: "#C9B6E8", color: "#7B5FC0", meta: "3 años · 1 padre vinculado", slot: { kind: "badge", label: "LACTOSA", bg: "#FBD8CC", color: "#D9684A" } },
  { name: "Emma Castro", letter: "E", bg: "#F4B8CC", color: "#C44A7A", meta: "2 años · 1 padre vinculado", slot: { kind: "chevron" } },
  { name: "Lucas Romero", letter: "L", bg: "#A9D9E8", color: "#1F7A93", meta: "3 años · 1 padre vinculado", slot: { kind: "chevron" } },
  { name: "Olivia Vega", letter: "O", bg: "#B9DEC4", color: "#3E8B62", meta: "2 años · 1 padre vinculado", slot: { kind: "chevron" } },
];

function KidSlot({ slot }: Readonly<{ slot: Slot }>): ReactNode {
  if (slot.kind === "chevron") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#CBB89F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "none" }}>
        <path d="m9 18 6-6-6-6" />
      </svg>
    );
  }
  return (
    <span
      style={{
        flex: "none",
        fontSize: 11,
        fontWeight: 800,
        padding: "5px 9px",
        borderRadius: 999,
        background: slot.bg,
        color: slot.color,
      }}
    >
      {slot.label}
    </span>
  );
}

function KidCard({ kid }: Readonly<{ kid: Kid }>) {
  return (
    // Estado .kid/.kid:hover do mock (transition .15s, borda #F2A78E e translateY(-2px)) — no Tailwind para não colidir com o borderColor inline
    <Link
      href="/kid-profile"
      className="flex min-w-0 items-center gap-[14px] rounded-[18px] border border-[#ECE0D0] bg-[#FFFDF9] p-4 shadow-[0_4px_14px_-12px_rgba(120,90,60,.5)] transition-all duration-150 hover:border-[#F2A78E] hover:-translate-y-0.5"
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          background: kid.bg,
          color: kid.color,
          fontFamily: "'Fredoka'",
          fontWeight: 600,
          fontSize: 19,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: "none",
        }}
      >
        {kid.letter}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: "'Fredoka'", fontWeight: 600, fontSize: 16, color: "#3F362E" }}>{kid.name}</div>
        <div style={{ fontSize: 13, color: "#A89A8B" }}>{kid.meta}</div>
      </div>
      <KidSlot slot={kid.slot} />
    </Link>
  );
}

export default function KidsPage() {
  return (
    <div style={{ maxWidth: 880, width: "100%", margin: "0 auto", padding: "34px 40px 80px" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16, marginBottom: 22 }}>
        <div>
          <div style={{ fontSize: 12.5, fontWeight: 800, letterSpacing: ".8px", color: "#D9583C", marginBottom: 4 }}>
            GESTIÓN
          </div>
          <h1 style={{ fontFamily: "'Fredoka'", fontWeight: 600, fontSize: 30, margin: 0, color: "#3F362E" }}>Niños</h1>
        </div>
        <Link
          href="/kids/new"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "11px 18px",
            borderRadius: 14,
            background: "linear-gradient(180deg,#F4977E,#EE8164)",
            color: "#fff",
            fontWeight: 800,
            fontSize: 14.5,
            boxShadow: "0 8px 18px -8px rgba(238,129,100,.7)",
          }}
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
          Agregar niño
        </Link>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 11,
          background: "#FFFDF9",
          border: "1px solid #ECE0D0",
          borderRadius: 14,
          padding: "12px 16px",
          marginBottom: 22,
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B0A290" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          placeholder="Buscar niño…"
          aria-label="Buscar niño"
          style={{ flex: 1, border: "none", background: "none", fontSize: 15, color: "#3F362E" }}
        />
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
        <span style={{ fontSize: 12.5, fontWeight: 800, letterSpacing: ".8px", color: "#3F362E" }}>SALA SOLES</span>
        <span style={{ fontSize: 13, color: "#A89A8B" }}>8 niños</span>
        <span style={{ flex: 1, height: 1, background: "#E7DAC8" }} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 14 }}>
        {KIDS.map((kid) => (
          <KidCard key={kid.name} kid={kid} />
        ))}
      </div>
    </div>
  );
}
