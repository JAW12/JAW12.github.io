"use client";

import { useState, useEffect, useCallback } from "react";

const PDF_URL = "/assets/Portfolio_Jem_Angkasa_Wijaya_2026.pdf";
const PDF_FILENAME = "Portfolio_Jem_Angkasa_Wijaya_2026.pdf";

/**
 * Hook to intelligently handle portfolio PDF actions:
 * 1. Checks if the pre-built PDF file exists on the server.
 * 2. If available: triggers direct download.
 * 3. If missing: falls back to window.print() (or fallbackPrint callback).
 */
export function usePortfolioPdfAvailability(fallbackPrint?: () => void) {
  const [isPdfAvailable, setIsPdfAvailable] = useState<boolean>(true);
  const [isChecking, setIsChecking] = useState<boolean>(false);

  // Check once on mount whether the PDF exists
  useEffect(() => {
    let isMounted = true;
    const checkAvailability = async () => {
      try {
        const res = await fetch(PDF_URL, { method: "HEAD" });
        if (isMounted) {
          setIsPdfAvailable(res.ok);
        }
      } catch {
        if (isMounted) {
          setIsPdfAvailable(false);
        }
      }
    };
    checkAvailability();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleDownloadOrPrint = useCallback(async () => {
    setIsChecking(true);
    try {
      // Verify via HEAD request before triggering download
      const res = await fetch(PDF_URL, { method: "HEAD" });
      if (res.ok) {
        // Direct download
        const link = document.createElement("a");
        link.href = PDF_URL;
        link.download = PDF_FILENAME;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setIsPdfAvailable(true);
      } else {
        // Fallback to browser print/export
        setIsPdfAvailable(false);
        if (fallbackPrint) {
          fallbackPrint();
        } else {
          window.print();
        }
      }
    } catch {
      // Network error or offline -> fallback print
      setIsPdfAvailable(false);
      if (fallbackPrint) {
        fallbackPrint();
      } else {
        window.print();
      }
    } finally {
      setIsChecking(false);
    }
  }, [fallbackPrint]);

  return {
    isPdfAvailable,
    isChecking,
    handleDownloadOrPrint,
    pdfUrl: PDF_URL,
    pdfFilename: PDF_FILENAME,
  };
}
