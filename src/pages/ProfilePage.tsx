// custom components
import { HeaderFooterLayout } from "@common/components";
import { ProfileInfo } from "@features/Profile/components";

export function ProfilePage() {
  return (
    <HeaderFooterLayout>
      <ProfileInfo />
    </HeaderFooterLayout>
  );
}

