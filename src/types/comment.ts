export interface IComment {
  content: string
  created_at: number
  profile: {
    name: string
    profile_picture_file_url: string
  }
}
