import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-8 bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-950/30 dark:to-amber-950/30">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} Divine Mantras. All rights reserved.
        </p>
        <p className="text-center text-sm font-medium">
          Powered by <span className="font-bold text-primary">Intend Career</span>
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="/privacy"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Terms
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}
