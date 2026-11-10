"use client";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties, MouseEvent as ReactMouseEvent, ReactNode } from "react";
import Link from "next/link";
import { CATEGORIES, PROJECT_COUNT } from "@/data/cluster";
import type { ClusterCategory, ClusterProject } from "@/data/cluster";

const MONO = "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";
const PAD = 12;

type Geom = {
  key: string;
  VW: number;
  VH: number;
  CX: number;
  CY: number;
  RX: number;
  RY: number;
  HULL: number;
  CORE: number;
  dotR: number;
  label: number;
  micro: number;
  ambient: number;
};

const DESK: Geom = { key: "d", VW: 1200, VH: 700, CX: 600, CY: 350, RX: 255, RY: 250, HULL: 54, CORE: 168, dotR: 5.5, label: 17, micro: 10, ambient: 56 };
const MOB: Geom = { key: "m", VW: 400, VH: 440, CX: 200, CY: 218, RX: 128, RY: 150, HULL: 42, CORE: 58, dotR: 4.8, label: 12.5, micro: 8, ambient: 30 };

function rng(seed: number) {
  let t = seed;
  return () => {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}
const f = (n: number) => Math.round(n * 10) / 10;
const cssVars = (v: Record<string, string>) => v as unknown as CSSProperties;

type Dot = { x: number; y: number; r: number; dx: number; dy: number; dur: number; delay: number };
type Edge = { x1: number; y1: number; x2: number; y2: number };
type Item = {
  cat: ClusterCategory;
  cx: number;
  cy: number;
  labelY: number;
  dots: Dot[];
  micro: Dot[];
  edges: Edge[];
  catFloat: { dx: number; dy: number; dur: number; delay: number };
};
type Built = { items: Item[]; ambient: Dot[] };

function build(G: Geom, seed: number): Built {
  const rand = rng(seed);
  const items: Item[] = CATEGORIES.map((cat, i) => {
    const a = ((240 + i * 60) * Math.PI) / 180;
    const cx = f(G.CX + G.RX * Math.cos(a));
    const cy = f(G.CY + G.RY * Math.sin(a));
    const upper = Math.sin(a) < 0.1;
    const base = G.HULL * 0.22;
    const step = G.HULL * 0.19;

    const dots: Dot[] = cat.projects.map((_, k) => {
      const ang = k * 2.399963 + i;
      const r = k === 0 ? 0 : base + step * Math.sqrt(k);
      return { x: f(cx + r * Math.cos(ang)), y: f(cy + r * Math.sin(ang)), r: G.dotR, dx: 0, dy: 0, dur: 0, delay: 0 };
    });

    const edges: Edge[] = [];
    for (let k = 1; k < dots.length; k++) {
      let best = 0;
      let bestD = Infinity;
      for (let j = 0; j < k; j++) {
        const d = Math.hypot(dots[k].x - dots[j].x, dots[k].y - dots[j].y);
        if (d < bestD) {
          bestD = d;
          best = j;
        }
      }
      edges.push({ x1: dots[k].x, y1: dots[k].y, x2: dots[best].x, y2: dots[best].y });
    }

    const micro: Dot[] = Array.from({ length: G.micro }, () => {
      const ang = rand() * Math.PI * 2;
      const r = Math.sqrt(rand()) * (G.HULL - 9);
      return {
        x: f(cx + r * Math.cos(ang)),
        y: f(cy + r * Math.sin(ang)),
        r: f(G.dotR * (0.22 + rand() * 0.24)),
        dx: f((rand() - 0.5) * 9),
        dy: f((rand() - 0.5) * 9),
        dur: f(5 + rand() * 5),
        delay: f(-rand() * 8),
      };
    });

    return {
      cat,
      cx,
      cy,
      labelY: upper ? cy - G.HULL - 10 : cy + G.HULL + G.label + 6,
      dots,
      micro,
      edges,
      catFloat: { dx: f((rand() - 0.5) * 9), dy: f((rand() - 0.5) * 9), dur: f(7 + rand() * 5), delay: f(-rand() * 8) },
    };
  });

  const ambient: Dot[] = Array.from({ length: G.ambient }, () => ({
    x: f(10 + rand() * (G.VW - 20)),
    y: f(10 + rand() * (G.VH - 20)),
    r: f(0.8 + rand() * 1.1),
    dx: f((rand() - 0.5) * 14),
    dy: f((rand() - 0.5) * 14),
    dur: f(7 + rand() * 8),
    delay: f(-rand() * 10),
  }));

  return { items, ambient };
}

const L_D = build(DESK, 7);
const L_M = build(MOB, 11);

type Hot = { cat: string; title: string } | null;

function popStyle(it: Item): CSSProperties {
  const G = DESK;
  const leftSide = it.cx < G.CX;
  const middle = Math.abs(it.cy - G.CY) < 10;
  const offset = (middle ? 16 : 32) - PAD;
  const s: CSSProperties = { position: "absolute", boxSizing: "border-box", zIndex: 6 };
  if (leftSide) {
    s.right = `${((G.VW - (it.cx - G.HULL - offset)) / G.VW) * 100}%`;
    s.paddingRight = PAD;
  } else {
    s.left = `${((it.cx + G.HULL + offset) / G.VW) * 100}%`;
    s.paddingLeft = PAD;
  }
  if (middle) {
    s.top = `${(it.cy / G.VH) * 100}%`;
    s.transform = "translateY(-50%)";
  } else if (it.cy < G.CY) {
    s.top = 0;
  } else {
    s.bottom = 0;
  }
  return s;
}

function HeroText() {
  return (
    <>
      <p className="hh-name">
        Heykel{" "}
        <br className="hh-br" />
        <span>Hachiche</span>
      </p>
      <p className="hh-role">Data Engineer & Data Consultant</p>
      <p className="hh-tag">
        Gouvernance, ingénierie, analyse et IA : chaque point de la carte est un projet en ligne que vous pouvez ouvrir.
      </p>
      <p className="hh-cmd">
        <span style={{ color: "var(--accent)" }}>$</span> cluster --projets={PROJECT_COUNT} --domaines={CATEGORIES.length}
        <span className="hh-cursor">_</span>
      </p>
    </>
  );
}

function Row({
  p,
  hex,
  hot,
  lines,
  onEnter,
  onLeave,
}: {
  p: ClusterProject;
  hex: string;
  hot: boolean;
  lines: number;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const inner = (
    <>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 7, flexWrap: "wrap", marginBottom: 2 }}>
          <span style={{ fontSize: 13.5, fontWeight: 600, color: "var(--text-primary)" }}>{p.title}</span>
          <span
            style={{
              fontSize: 9.5,
              fontWeight: 600,
              padding: "1px 6px",
              borderRadius: 99,
              background: `color-mix(in srgb, ${hex} 14%, transparent)`,
              color: hex,
            }}
          >
            {p.tag}
          </span>
        </div>
        <p
          style={{
            fontSize: 11.5,
            color: "var(--text-secondary)",
            lineHeight: 1.4,
            margin: 0,
            display: "-webkit-box",
            WebkitLineClamp: lines,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {p.desc}
        </p>
      </div>
      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" style={{ color: "var(--text-tertiary)", flexShrink: 0, marginTop: 3 }}>
        <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
  const style: CSSProperties = {
    borderLeftWidth: 2,
    borderLeftStyle: "solid",
    borderLeftColor: hex,
    boxShadow: hot ? `0 0 0 1px ${hex}` : "none",
    background: hot ? "var(--bg-card-hover)" : undefined,
  };
  return p.internal ? (
    <Link href={p.href} className="hh-row" style={style} onMouseEnter={onEnter} onMouseLeave={onLeave}>
      {inner}
    </Link>
  ) : (
    <a href={p.href} target="_blank" rel="noreferrer" className="hh-row" style={style} onMouseEnter={onEnter} onMouseLeave={onLeave}>
      {inner}
    </a>
  );
}

export function ProjectCluster() {
  const [active, setActive] = useState<string | null>(null);
  const [hot, setHot] = useState<Hot>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const popRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  // Sur mobile et tablette, la carte s'affiche sous le cluster : on la fait defiler dans l'ecran
  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(max-width: 999px)").matches) {
      popRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [active]);

  const enter = (id: string) => {
    if (timer.current) clearTimeout(timer.current);
    setActive(id);
  };
  const leave = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setActive(null);
      setHot(null);
    }, 280);
  };

  const onStageMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const el = stageRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
    el.style.setProperty("--my", ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
  };
  const onStageLeave = () => {
    const el = stageRef.current;
    if (!el) return;
    el.style.setProperty("--mx", "0");
    el.style.setProperty("--my", "0");
  };

  const activeD = L_D.items.find((it) => it.cat.id === active) ?? null;

  const renderSvg = (G: Geom, data: Built, cls: string) => {
    const k = G.key;
    const isDesk = k === "d";
    const orbitR = Math.round((G.RX + G.RY) / 2);
    const coreArc = 2 * Math.PI * (G.CORE + 12);

    let hotLabel: ReactNode = null;
    if (hot) {
      const it = data.items.find((x) => x.cat.id === hot.cat);
      const idx = it ? it.cat.projects.findIndex((p) => p.title === hot.title) : -1;
      const d = it && idx >= 0 ? it.dots[idx] : null;
      if (d) {
        const anchor = d.x > G.CX + G.VW * 0.1 ? "end" : d.x < G.CX - G.VW * 0.1 ? "start" : "middle";
        hotLabel = (
          <text
            x={d.x}
            y={d.y - (isDesk ? 15 : 11)}
            textAnchor={anchor}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: isDesk ? 13 : 11,
              fontWeight: 600,
              fill: "#f2f2f0",
              stroke: "#191919",
              strokeWidth: 4,
              paintOrder: "stroke",
              pointerEvents: "none",
            }}
          >
            {hot.title}
          </text>
        );
      }
    }

    return (
      <svg className={`hh-svg ${cls}`} viewBox={`0 0 ${G.VW} ${G.VH}`} role="img" aria-label="Carte interactive des projets par domaine">
        <defs>
          {data.items.map((it) => (
            <radialGradient key={it.cat.id} id={`grad-${k}-${it.cat.id}`}>
              <stop offset="0%" stopColor={it.cat.hex} stopOpacity="0.26" />
              <stop offset="100%" stopColor={it.cat.hex} stopOpacity="0.04" />
            </radialGradient>
          ))}
          {data.items.map((it) => (
            <radialGradient key={`g-${it.cat.id}`} id={`glow-${k}-${it.cat.id}`}>
              <stop offset="40%" stopColor={it.cat.hex} stopOpacity="0.22" />
              <stop offset="100%" stopColor={it.cat.hex} stopOpacity="0" />
            </radialGradient>
          ))}
          <radialGradient id={`core-${k}`}>
            <stop offset="0%" stopColor="#4ade80" stopOpacity="0.09" />
            <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
          </radialGradient>
          <filter id={`hh-glow-${k}`} x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="3.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Particules ambiantes (parallaxe) */}
        <g className="hh-par">
          {data.ambient.map((d, i) => (
            <g
              key={i}
              className="hh-float"
              style={cssVars({ "--dx": `${d.dx}px`, "--dy": `${d.dy}px`, "--dur": `${d.dur}s`, "--delay": `${d.delay}s` })}
            >
              <circle cx={d.x} cy={d.y} r={d.r} fill="#ffffff" fillOpacity={0.15} />
            </g>
          ))}
        </g>

        {/* Orbite et satellites */}
        <g className="hh-par2">
          <circle cx={G.CX} cy={G.CY} r={orbitR} fill="none" stroke="rgba(255,255,255,0.07)" strokeDasharray="2 8" className="hh-spin" />
          <g className="hh-orbit" style={{ transformOrigin: `${G.CX}px ${G.CY}px`, transformBox: "view-box" }}>
            {[0, 120, 240].map((deg) => {
              const rad = (deg * Math.PI) / 180;
              return (
                <circle
                  key={deg}
                  cx={f(G.CX + orbitR * Math.cos(rad))}
                  cy={f(G.CY + orbitR * Math.sin(rad))}
                  r={isDesk ? 2.8 : 2}
                  fill="#e8e8e6"
                  fillOpacity={0.45}
                />
              );
            })}
          </g>
        </g>

        {/* Liens entre domaines voisins */}
        {data.items.map((it, i) => {
          const N = data.items[(i + 1) % data.items.length];
          return <line key={`r-${i}`} x1={it.cx} y1={it.cy} x2={N.cx} y2={N.cy} stroke="rgba(255,255,255,0.05)" strokeWidth={1} />;
        })}

        {/* Liens vers le noyau et paquets de donnees */}
        {data.items.map((it, i) => {
          const isA = it.cat.id === active;
          const fwd = i % 2 === 0;
          const path = fwd ? `M${G.CX},${G.CY} L${it.cx},${it.cy}` : `M${it.cx},${it.cy} L${G.CX},${G.CY}`;
          return (
            <g key={`s-${it.cat.id}`}>
              <line
                x1={G.CX}
                y1={G.CY}
                x2={it.cx}
                y2={it.cy}
                stroke={it.cat.hex}
                strokeDasharray="5 7"
                className={isA ? "hh-flow" : undefined}
                style={{ strokeOpacity: isA ? 0.65 : 0.18, strokeWidth: isA ? 1.6 : 1, transition: "stroke-opacity .25s" }}
              />
              <g className="hh-packet">
                <circle r={isDesk ? 2.8 : 2.1} fill={it.cat.hex} fillOpacity={isA ? 1 : 0.55}>
                  <animateMotion dur={`${isA ? 1.5 : 3.4 + i * 0.35}s`} begin={`${i * 0.4}s`} repeatCount="indefinite" path={path} />
                </circle>
              </g>
            </g>
          );
        })}

        {/* Noyau */}
        <g className="hh-in" style={cssVars({ "--d": "0s", transformOrigin: `${G.CX}px ${G.CY}px`, transformBox: "view-box" })}>
          <circle cx={G.CX} cy={G.CY} r={G.CORE} fill="none" stroke="#4ade80" strokeWidth={1.2} className="hh-pulse" />
          <circle cx={G.CX} cy={G.CY} r={G.CORE} fill="none" stroke="#4ade80" strokeWidth={1.2} className="hh-pulse hh-pulse-2" />
          <circle cx={G.CX} cy={G.CY} r={G.CORE} fill="#1c1c1c" stroke="rgba(255,255,255,0.1)" strokeWidth={1} />
          <circle cx={G.CX} cy={G.CY} r={G.CORE} fill={`url(#core-${k})`} />
          <circle
            cx={G.CX}
            cy={G.CY}
            r={G.CORE + 12}
            fill="none"
            stroke="#4ade80"
            strokeWidth={isDesk ? 2 : 1.5}
            strokeLinecap="round"
            strokeOpacity={0.6}
            strokeDasharray={`${coreArc * 0.16} ${coreArc}`}
            className="hh-spin-fast"
          />
          <circle
            cx={G.CX}
            cy={G.CY}
            r={G.CORE + 20}
            fill="none"
            stroke="#a78bfa"
            strokeWidth={isDesk ? 1.5 : 1}
            strokeLinecap="round"
            strokeOpacity={0.5}
            strokeDasharray={`${coreArc * 0.09} ${coreArc}`}
            className="hh-spin-rev"
          />
          {!isDesk && (
            <>
              <text x={G.CX} y={G.CY + 6} textAnchor="middle" style={{ fontFamily: "var(--font-display)", fontSize: 30, fontWeight: 800, fill: "#e8e8e6" }}>
                HH
              </text>
              <text x={G.CX} y={G.CY + 24} textAnchor="middle" style={{ fontFamily: MONO, fontSize: 10, fill: "#7a7a78" }}>
                data · ia
              </text>
            </>
          )}
        </g>

        {/* Domaines */}
        {data.items.map((it, i) => {
          const isActive = it.cat.id === active;
          const dim = active !== null && !isActive;
          return (
            <g
              key={it.cat.id}
              className="hh-in"
              style={cssVars({ "--d": `${0.25 + i * 0.09}s`, transformOrigin: `${it.cx}px ${it.cy}px`, transformBox: "view-box" })}
            >
              <g
                className="hh-catfloat"
                style={cssVars({ "--dx": `${it.catFloat.dx}px`, "--dy": `${it.catFloat.dy}px`, "--dur": `${it.catFloat.dur}s`, "--delay": `${it.catFloat.delay}s` })}
              >
                <g
                  role="button"
                  tabIndex={0}
                  aria-label={`${it.cat.label}, ${it.cat.projects.length} projets`}
                  onMouseEnter={() => enter(it.cat.id)}
                  onMouseLeave={leave}
                  onFocus={() => enter(it.cat.id)}
                  onBlur={leave}
                  onClick={() => enter(it.cat.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") enter(it.cat.id);
                  }}
                  style={{ cursor: "pointer", outline: "none" }}
                >
                  {/* Halo */}
                  <circle
                    cx={it.cx}
                    cy={it.cy}
                    r={G.HULL * 2.2}
                    fill={`url(#glow-${k}-${it.cat.id})`}
                    style={{ opacity: isActive ? 1 : 0, transition: "opacity .4s", pointerEvents: "none" }}
                  />
                  {/* Anneau tournant */}
                  <circle
                    cx={it.cx}
                    cy={it.cy}
                    r={G.HULL + 9}
                    fill="none"
                    stroke={it.cat.hex}
                    strokeDasharray="2 7"
                    className="hh-spin-mid"
                    style={{ opacity: isActive ? 0.75 : 0, transition: "opacity .3s", pointerEvents: "none" }}
                  />
                  {/* Rond du domaine */}
                  <circle
                    cx={it.cx}
                    cy={it.cy}
                    r={G.HULL}
                    fill={`url(#grad-${k}-${it.cat.id})`}
                    stroke={it.cat.hex}
                    strokeWidth={1}
                    strokeDasharray={isActive ? "none" : "3 5"}
                    style={{
                      transformBox: "fill-box",
                      transformOrigin: "center",
                      transform: isActive ? "scale(1.1)" : "scale(1)",
                      opacity: isActive ? 1 : dim ? 0.45 : 0.85,
                      strokeOpacity: isActive ? 0.85 : dim ? 0.2 : 0.4,
                      transition: "transform .35s cubic-bezier(.2,.8,.2,1), opacity .25s, stroke-opacity .25s",
                    }}
                  />

                  {/* Liens entre les projets du domaine */}
                  {it.edges.map((e, j) => (
                    <line
                      key={j}
                      x1={e.x1}
                      y1={e.y1}
                      x2={e.x2}
                      y2={e.y2}
                      stroke={it.cat.hex}
                      strokeWidth={1}
                      style={{ strokeOpacity: isActive ? 0.55 : 0.25, transition: "stroke-opacity .25s", pointerEvents: "none" }}
                    />
                  ))}

                  {/* Micro points */}
                  {it.micro.map((d, j) => (
                    <g
                      key={j}
                      className="hh-float"
                      style={cssVars({ "--dx": `${d.dx}px`, "--dy": `${d.dy}px`, "--dur": `${d.dur}s`, "--delay": `${d.delay}s` })}
                    >
                      <circle cx={d.x} cy={d.y} r={d.r} fill={it.cat.hex} fillOpacity={isActive ? 0.65 : 0.3} />
                    </g>
                  ))}

                  {/* Points projets */}
                  {it.dots.map((d, j) => {
                    const p = it.cat.projects[j];
                    const isHot = !!hot && hot.cat === it.cat.id && hot.title === p.title;
                    return (
                      <circle
                        key={p.title}
                        cx={d.x}
                        cy={d.y}
                        r={d.r}
                        fill={it.cat.hex}
                        fillOpacity={dim ? 0.55 : 1}
                        stroke={isHot ? "#ffffff" : "none"}
                        strokeWidth={2}
                        filter={isActive ? `url(#hh-glow-${k})` : undefined}
                        onMouseEnter={() => setHot({ cat: it.cat.id, title: p.title })}
                        onMouseLeave={() => setHot(null)}
                        style={{
                          transformBox: "fill-box",
                          transformOrigin: "center",
                          transform: isHot ? "scale(1.5)" : "scale(1)",
                          transition: "transform .2s",
                        }}
                      />
                    );
                  })}

                  <text
                    x={it.cx}
                    y={it.labelY}
                    textAnchor="middle"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: G.label,
                      fontWeight: 700,
                      fill: isActive ? it.cat.hex : "#9a9a98",
                      transition: "fill .25s",
                      letterSpacing: "-0.01em",
                      pointerEvents: "none",
                    }}
                  >
                    {it.cat.short}
                    <tspan dx="6" style={{ fontFamily: MONO, fontSize: G.label * 0.7, fontWeight: 500, fill: "#6a6a68" }}>
                      {it.cat.projects.length}
                    </tspan>
                  </text>
                </g>
              </g>
            </g>
          );
        })}

        {hotLabel}
      </svg>
    );
  };

  const ratio = (DESK.VW / DESK.VH).toFixed(4);

  return (
    <div id="cluster" style={{ maxWidth: 1200, margin: "0 auto" }}>
      <div ref={stageRef} className="hh-stage" onMouseMove={onStageMove} onMouseLeave={onStageLeave}>
        <h1 className="hh-sr">Heykel Hachiche, Data Engineer et Data Consultant</h1>

        {/* Texte au dessus du cluster (mobile et tablette) */}
        <div className="hh-hero-top">
          <HeroText />
        </div>

        {renderSvg(DESK, L_D, "hh-svg-d")}
        {renderSvg(MOB, L_M, "hh-svg-m")}

        {/* Texte au centre du cluster (bureau) */}
        <div className="hh-center">
          <HeroText />
        </div>

        {!active && <p className="hh-hint">Touchez un domaine pour voir ses projets</p>}

        {/* Carte des projets, du cote du rond survole */}
        {activeD && (
          <div ref={popRef} className="hh-pop" style={popStyle(activeD)} onMouseEnter={() => enter(activeD.cat.id)} onMouseLeave={leave}>
            <div className="hh-pop-card" style={{ borderTop: `2px solid ${activeD.cat.hex}` }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 8, marginBottom: 8 }}>
                <h2 style={{ fontSize: 15, fontWeight: 800, color: activeD.cat.hex, margin: 0 }}>{activeD.cat.label}</h2>
                <span style={{ fontFamily: MONO, fontSize: 11, color: "var(--text-tertiary)", flexShrink: 0 }}>
                  {activeD.cat.projects.length} projet{activeD.cat.projects.length > 1 ? "s" : ""}
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                {activeD.cat.projects.map((p) => (
                  <Row
                    key={p.title}
                    p={p}
                    hex={activeD.cat.hex}
                    hot={!!hot && hot.cat === activeD.cat.id && hot.title === p.title}
                    lines={activeD.cat.projects.length > 3 ? 1 : 2}
                    onEnter={() => setHot({ cat: activeD.cat.id, title: p.title })}
                    onLeave={() => setHot(null)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .hh-sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }

        /* Bureau : la hauteur du cluster s'adapte a la hauteur de l'ecran */
        .hh-stage {
          position: relative;
          width: min(100%, calc((100vh - 200px) * ${ratio}));
          width: min(100%, calc((100svh - 200px) * ${ratio}));
          aspect-ratio: ${DESK.VW} / ${DESK.VH};
          margin: 0 auto;
          container-type: inline-size;
          --mx: 0;
          --my: 0;
        }
        .hh-svg { width: 100%; height: 100%; display: block; overflow: visible; }
        .hh-svg-m, .hh-hero-top, .hh-hint { display: none; }

        .hh-center {
          position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);
          width: 24%; text-align: center; z-index: 2; pointer-events: none;
          animation: hh-fade .9s .2s both;
        }
        .hh-name { font-family: var(--font-display); font-weight: 800; line-height: 1.02; letter-spacing: -0.02em; margin: 0 0 0.3em; color: var(--text-primary); font-size: clamp(26px, 4.2cqw, 54px); }
        .hh-name span { color: var(--accent); }
        .hh-role { color: var(--accent-purple); font-weight: 500; margin: 0 0 0.7em; font-size: clamp(11px, 1.35cqw, 18px); }
        .hh-tag { color: var(--text-secondary); line-height: 1.55; margin: 0 0 0.9em; font-size: clamp(11px, 1.05cqw, 14px); }
        .hh-cmd { font-family: ${MONO}; color: var(--text-tertiary); margin: 0; font-size: clamp(9px, 0.9cqw, 12px); }
        .hh-cursor { margin-left: 2px; color: var(--accent); animation: hh-blink 1.1s steps(1) infinite; }

        .hh-pop { width: clamp(230px, 25cqw, 312px); }
        .hh-pop-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 14px; padding: 10px; box-shadow: 0 18px 40px rgba(0,0,0,0.45); animation: hh-pop-in .2s cubic-bezier(.2,.8,.2,1) both; }
        .hh-row { display: flex; gap: 10px; padding: 8px 11px; border-radius: 9px; border: 1px solid var(--border); background: var(--bg-surface); text-decoration: none; transition: background .15s; }
        .hh-row:hover { background: var(--bg-card-hover); }

        /* Animations */
        @keyframes hh-fade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes hh-blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
        @keyframes hh-pop-in { from { opacity: 0; transform: translateY(8px) scale(.97); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes hh-in { from { opacity: 0; transform: scale(0.55); } to { opacity: 1; transform: scale(1); } }
        .hh-in { opacity: 0; animation: hh-in .9s cubic-bezier(.2,.8,.2,1) forwards; animation-delay: var(--d, 0s); }

        @keyframes hh-drift { from { transform: translate(0, 0); } to { transform: translate(var(--dx), var(--dy)); } }
        .hh-float, .hh-catfloat { animation: hh-drift var(--dur) ease-in-out infinite alternate; animation-delay: var(--delay); }

        @keyframes hh-spin { to { transform: rotate(360deg); } }
        .hh-spin { transform-box: fill-box; transform-origin: center; animation: hh-spin 140s linear infinite; }
        .hh-spin-mid { transform-box: fill-box; transform-origin: center; animation: hh-spin 16s linear infinite; }
        .hh-spin-fast { transform-box: fill-box; transform-origin: center; animation: hh-spin 9s linear infinite; }
        .hh-spin-rev { transform-box: fill-box; transform-origin: center; animation: hh-spin 14s linear infinite reverse; }
        .hh-orbit { animation: hh-spin 70s linear infinite; }

        @keyframes hh-pulse { 0% { transform: scale(1); opacity: 0.4; } 100% { transform: scale(1.12); opacity: 0; } }
        .hh-pulse { transform-box: fill-box; transform-origin: center; animation: hh-pulse 3.8s ease-out infinite; }
        .hh-pulse-2 { animation-delay: 1.9s; }

        @keyframes hh-flow { to { stroke-dashoffset: -24; } }
        .hh-flow { animation: hh-flow 1.2s linear infinite; }

        /* Parallaxe douce avec la souris */
        .hh-par { transform: translate(calc(var(--mx, 0) * -16px), calc(var(--my, 0) * -12px)); transition: transform .4s ease-out; }
        .hh-par2 { transform: translate(calc(var(--mx, 0) * -7px), calc(var(--my, 0) * -5px)); transition: transform .4s ease-out; }

        /* Mobile et tablette : texte au dessus, cluster en portrait, carte dessous */
        @media (max-width: 999px) {
          .hh-stage { width: 100%; aspect-ratio: auto; container-type: normal; }
          .hh-svg-d, .hh-center { display: none; }
          .hh-svg-m { display: block; height: auto; max-width: 520px; margin: 0 auto; }
          .hh-hero-top { display: block; text-align: center; margin-bottom: 8px; }
          .hh-hero-top .hh-name { font-size: clamp(30px, 9.5vw, 46px); }
          .hh-hero-top .hh-br { display: none; }
          .hh-hero-top .hh-role { font-size: 17px; margin-bottom: 8px; }
          .hh-hero-top .hh-tag { font-size: 14px; max-width: 440px; margin: 0 auto 8px; }
          .hh-hero-top .hh-cmd { font-size: 12px; }
          .hh-hint { display: block; text-align: center; font-family: ${MONO}; font-size: 11px; color: var(--text-tertiary); margin: 4px 0 0; }
          .hh-pop { position: static !important; width: auto !important; transform: none !important; padding: 0 !important; margin: 12px auto 0; max-width: 520px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .hh-float, .hh-catfloat, .hh-spin, .hh-spin-mid, .hh-spin-fast, .hh-spin-rev, .hh-orbit,
          .hh-pulse, .hh-flow, .hh-cursor, .hh-pop-card, .hh-center { animation: none !important; }
          .hh-in { opacity: 1 !important; animation: none !important; }
          .hh-packet { display: none; }
          .hh-par, .hh-par2 { transform: none !important; }
        }
      `}</style>
    </div>
  );
}
