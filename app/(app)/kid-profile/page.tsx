import type { CSSProperties } from "react";
import Link from "next/link";

const factLabel: CSSProperties = { fontSize: 14.5, color: "#94887B" };
const factValue: CSSProperties = { fontWeight: 800, fontSize: 14.5, color: "#3F362E" };

const FACTS: readonly (readonly [string, string])[] = [
  ["Fecha de nacimiento", "12 mar 2022"],
  ["Sala", "Soles"],
  ["Ingreso", "feb 2025"],
];

type Parent = {
  name: string;
  letter: string;
  bg: string;
  sub: string;
  pill: { label: string; bg: string; color: string };
};

const PARENTS: readonly Parent[] = [
  { name: "Lucía Fernández", letter: "L", bg: "#C9B6E8", sub: "Mamá · activa", pill: { label: "ACTIVA", bg: "#CFEBD8", color: "#3E9B6C" } },
  { name: "Diego Fernández", letter: "D", bg: "#A9C7E8", sub: "Papá · invitación enviada", pill: { label: "PENDIENTE", bg: "#F7E7A6", color: "#9A7B1E" } },
];

function ParentRow({ parent }: Readonly<{ parent: Parent }>) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: parent.bg,
          color: "#fff",
          fontFamily: "'Fredoka'",
          fontWeight: 600,
          fontSize: 16,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: "none",
        }}
      >
        {parent.letter}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 800, fontSize: 14.5, color: "#3F362E" }}>{parent.name}</div>
        <div style={{ fontSize: 12.5, color: "#A89A8B" }}>{parent.sub}</div>
      </div>
      <span
        style={{
          flex: "none",
          fontSize: 10.5,
          fontWeight: 800,
          padding: "4px 9px",
          borderRadius: 999,
          background: parent.pill.bg,
          color: parent.pill.color,
        }}
      >
        {parent.pill.label}
      </span>
    </div>
  );
}

export default function KidProfilePage() {
  return (
    <div style={{ maxWidth: 820, width: "100%", margin: "0 auto", padding: "34px 40px 80px" }}>
      <Link href="/kids" style={{ display: "flex", alignItems: "center", gap: 7, color: "#94887B", fontWeight: 700, fontSize: 14, marginBottom: 20 }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6" />
        </svg>
        Volver a Niños
      </Link>

      <div style={{ display: "flex", gap: 26, alignItems: "flex-start", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 300, display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 84,
                height: 84,
                borderRadius: "50%",
                background: "#A9D9E8",
                color: "#1F7A93",
                fontFamily: "'Fredoka'",
                fontWeight: 600,
                fontSize: 34,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flex: "none",
              }}
            >
              M
            </div>
            <div style={{ flex: 1 }}>
              <h1 style={{ fontFamily: "'Fredoka'", fontWeight: 600, fontSize: 28, margin: 0, color: "#3F362E" }}>
                Mateo Fernández
              </h1>
              <p style={{ margin: "3px 0 0", color: "#94887B", fontSize: 15 }}>3 años · Sala Soles</p>
            </div>
            <Link
              href="/kids/new"
              style={{
                border: "1.5px solid #ECE0D0",
                background: "#FFFDF9",
                color: "#6E6359",
                fontWeight: 700,
                fontSize: 14,
                padding: "9px 16px",
                borderRadius: 12,
              }}
            >
              Editar
            </Link>
          </div>

          <div style={{ display: "flex", gap: 14, background: "#FBDAD6", borderRadius: 16, padding: "16px 18px" }}>
            <div style={{ width: 40, height: 40, borderRadius: 11, background: "#F4A8A0", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
                <path d="M12 9v4M12 17h.01" />
              </svg>
            </div>
            <div>
              <div style={{ fontWeight: 800, color: "#C5413A", fontSize: 15, marginBottom: 2 }}>Alergias y notas</div>
              <div style={{ color: "#B25249", fontSize: 14.5, lineHeight: 1.5 }}>
                Alergia al maní. Evitar frutos secos. Lleva inhalador en la mochila.
              </div>
            </div>
          </div>

          <div style={{ background: "#FFFDF9", border: "1px solid #ECE0D0", borderRadius: 16, overflow: "hidden" }}>
            {FACTS.map(([label, value], i) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "15px 18px",
                  borderBottom: i < FACTS.length - 1 ? "1px solid #F0E6D8" : undefined,
                }}
              >
                <span style={factLabel}>{label}</span>
                <span style={factValue}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ width: 300, flex: "none", display: "flex", flexDirection: "column", gap: 14 }}>
          <Link
            href="/day-summary"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 9,
              width: "100%",
              padding: 13,
              borderRadius: 14,
              background: "#3F362E",
              color: "#fff",
              fontWeight: 800,
              fontSize: 15,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
            Resumen del día
          </Link>

          <div style={{ background: "#FFFDF9", border: "1px solid #ECE0D0", borderRadius: 16, padding: "16px 18px" }}>
            <div style={{ fontSize: 12.5, fontWeight: 800, letterSpacing: ".8px", color: "#8A7C6D", marginBottom: 14 }}>
              PADRES VINCULADOS
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {PARENTS.map((parent) => (
                <ParentRow key={parent.name} parent={parent} />
              ))}
              <Link href="/link-parent" style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 0 0" }}>
                <span
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    border: "1.5px dashed #D8CBBA",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#B0A290",
                    flex: "none",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
                <span style={{ fontWeight: 800, fontSize: 14.5, color: "#C5503A" }}>Vincular otro padre</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
