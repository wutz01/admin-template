import PageHeader from '@/components/common/page-header'
import Profile from '@/components/profile/detail'
import { PaperClipIcon } from '@heroicons/react/20/solid'

export default function UserProfile() {
  return (
    <div>
      <PageHeader title="Profile" buttonVisible={true} />
      <Profile />
    </div>
  )
}
