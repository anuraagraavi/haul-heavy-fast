import { Helmet } from "react-helmet-async";
import { LockKeyhole, ShieldAlert } from "lucide-react";

export default function SuspensionScreen() {
  return (
    <>
      <Helmet>
        <title>Account Suspended | Service Temporarily Unavailable</title>
        <meta
          name="description"
          content="This service is temporarily unavailable. Account owners should contact their administrator or billing department."
        />
        <meta name="robots" content="noindex, nofollow, noarchive" />
      </Helmet>

      <main className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-background px-6 py-12 text-foreground">
        <div className="absolute inset-0 bg-gradient-subtle" aria-hidden="true" />
        <div
          className="absolute inset-x-0 top-0 h-1 bg-gradient-primary"
          aria-hidden="true"
        />
        <div
          className="absolute left-0 top-1/4 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-1/4 left-0 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent"
          aria-hidden="true"
        />

        <section className="relative z-10 mx-auto w-full max-w-2xl animate-fade-in-up text-center">
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-primary/30 bg-primary/10 shadow-orange">
            <ShieldAlert className="h-9 w-9 text-primary" strokeWidth={1.6} aria-hidden="true" />
          </div>

          <p className="mb-4 text-sm font-semibold uppercase text-primary">
            Service notice
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Account Suspended
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            This service is temporarily unavailable.
          </p>

          <div className="mx-auto my-9 h-px w-24 bg-primary/60" aria-hidden="true" />

          <p className="mx-auto max-w-xl text-base leading-7 text-foreground/80 sm:text-lg">
            If you are the account owner, please contact your administrator or billing department to resolve this matter and restore service.
          </p>

          <div className="mt-12 flex items-center justify-center gap-3 text-sm text-muted-foreground">
            <LockKeyhole className="h-4 w-4 text-primary" aria-hidden="true" />
            <span>Access restricted by the account administrator</span>
          </div>
        </section>
      </main>
    </>
  );
}