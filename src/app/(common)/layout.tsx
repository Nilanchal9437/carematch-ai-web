import Layouts from "@/layout";

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Layouts>{children}</Layouts>;
}
