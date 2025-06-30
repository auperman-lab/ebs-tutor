export type UserInfoEndpointResponse = {
  id: number
  name: string
  first_name: string
  last_name: string
  email: string
  phone: string
  is_active: boolean
  created_at: string
  onboarding_completed: number
  email_verified: boolean
  interests: any[]
  avatar: string
  roles: string[]
  permissions: any[]
  path_avatar: string
  bio: string
  address: string
}


export type UserChangeSettingsRequest = {
  first_name?: string;
  last_name?: string;
  phone?: string;
  bio?: string;

}
