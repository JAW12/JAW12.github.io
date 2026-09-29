import React from "react";
import { notFound } from "next/navigation";
import { CategoryShowcaseClient } from "./CategoryShowcaseClient";
import { categoryEcosystems } from "@/data/projects";

// Next.js static export params for static multi-page routing
export async function generateStaticParams() {
  const slugs: { category: string }[] = [];
  
  categoryEcosystems.forEach((c) => {
    slugs.push({ category: c.id });
    if (c.id === "ai") slugs.push({ category: "ai-automation" });
    if (c.id === "software") slugs.push({ category: "software-development" });
    if (c.id === "business") slugs.push({ category: "business-development" });
    if (c.id === "data") slugs.push({ category: "market-research" }, { category: "quant" });
    if (c.id === "design") slugs.push({ category: "multimedia-brand-design" });
  });

  return slugs;
}

export default async function CategoryShowcasePage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: rawCategory } = await params;

  // Normalize aliases
  let categoryId = rawCategory;
  if (rawCategory === "ai-automation") categoryId = "ai";
  if (rawCategory === "software-development") categoryId = "software";
  if (rawCategory === "business-development") categoryId = "business";
  if (rawCategory === "market-research" || rawCategory === "quant") categoryId = "data";
  if (rawCategory === "multimedia-brand-design") categoryId = "design";

  const ecosystem = categoryEcosystems.find((c) => c.id === categoryId);

  if (!ecosystem) {
    notFound();
  }

  return <CategoryShowcaseClient ecosystemId={ecosystem.id} />;
}
