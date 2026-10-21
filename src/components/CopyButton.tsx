"use client";

import { useState } from "react";

type Props = { value: string; label: string; tone?: "light" | "dark" };

export default function CopyButton({ value, label, tone = "light" }: Props) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");

  async function copy() {
    let ok = false;
    try {
      await navigator.clipboard.writeText(value);
      ok = true;
    } catch {
      try {
        const ta = document.createElement("textarea");
        ta.value = value;
        ta.setAttribute("readonly", "");
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        ok = document.execCommand("copy");
        document.body.removeChild(ta);
      } catch {
        ok = false;
      }
    }
    setState(ok ? "copied" : "failed");
    window.setTimeout(() => setState("idle"), 1800);
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy ${label}`}
      className={`pointer-coarse:min-h-11 pointer-coarse:px-[1.1rem] pointer-coarse:py-[0.4rem] pointer-coarse:text-[0.85rem] min-h-8 cursor-pointer rounded-full border-[1.5px] bg-transparent px-[0.8rem] py-[0.15rem] text-[0.78rem] font-semibold ${
        tone === "dark"
          ? "border-white/30 text-amber hover:border-amber"
          : "border-border text-brand-deep hover:border-brand-deep"
      }`}
    >
      <span aria-live="polite">{state === "copied" ? "Copied" : state === "failed" ? "Copy manually" : "Copy"}</span>
    </button>
  );
}
