import NavAuth from "./NavAuth";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <NavAuth />
      {children}
    </section>
  );
}
