import { MainLayout } from '@/layouts';

// // ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return <MainLayout navigationBottom={false}>{children}</MainLayout>;
}
