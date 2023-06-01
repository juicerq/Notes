import { OrganizationProfile } from '@clerk/nextjs'

export default function OrganizationProfilePage() {
  return (
    <OrganizationProfile
      routing="path"
      path="/organization-profile"
      appearance={{
        variables: {
          colorInputText: '#4D7C14',
        },
      }}
    />
  )
}
