export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-sky-100 to-zinc-50 font-sans dark:from-sky-950/40 dark:to-background">
      <main className="flex min-h-screen w-full max-w-3xl flex-col gap-12 py-16 sm:py-32 px-4 sm:px-16 bg-transparent items-center sm:items-start">
        {children}
      </main>
    </div>
  );
}
