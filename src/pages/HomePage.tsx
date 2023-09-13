// custom components
import { HeaderFooterLayout } from "@common/components";
import { IssueSection } from "@features/Home/components";

export function HomePage() {
  return (
    <HeaderFooterLayout>
      <IssueSection />
    </HeaderFooterLayout>
  );
}
