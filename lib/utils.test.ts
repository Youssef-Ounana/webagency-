import { describe, expect, it } from "vitest";
import { cn } from "./utils";

describe("cn()", () => {
  it("fusionne plusieurs classes en une seule chaîne", () => {
    expect(cn("text-sm", "font-bold")).toBe("text-sm font-bold");
  });

  it("résout les conflits Tailwind (la dernière classe gagne)", () => {
    expect(cn("p-2", "p-4")).toBe("p-4");
  });

  it("ignore les valeurs falsy (false, undefined, null)", () => {
    expect(cn("text-sm", false && "hidden", undefined, "font-bold")).toBe(
      "text-sm font-bold"
    );
  });
});