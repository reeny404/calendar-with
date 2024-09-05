export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      calendar: {
        Row: {
          active: boolean
          created_at: string
          id: number
          name: string
          updated_at: string
        }
        Insert: {
          active?: boolean
          created_at?: string
          id?: number
          name?: string
          updated_at?: string
        }
        Update: {
          active?: boolean
          created_at?: string
          id?: number
          name?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "schdule_groups_id_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "schedule"
            referencedColumns: ["group_id"]
          },
          {
            foreignKeyName: "schdule_groups_name_fkey"
            columns: ["name"]
            isOneToOne: false
            referencedRelation: "schedule"
            referencedColumns: ["group_name"]
          },
        ]
      }
      calendar_attendee: {
        Row: {
          calendar_id: number
          calendar_name: string
          created_at: string
          id: number
          nickname: string
          user_id: string | null
        }
        Insert: {
          calendar_id: number
          calendar_name?: string
          created_at?: string
          id?: number
          nickname?: string
          user_id?: string | null
        }
        Update: {
          calendar_id?: number
          calendar_name?: string
          created_at?: string
          id?: number
          nickname?: string
          user_id?: string | null
        }
        Relationships: []
      }
      schedule: {
        Row: {
          active: boolean
          content: string
          created_at: string
          end_date: string
          group_id: number
          group_name: string
          id: number
          is_all_day: boolean
          start_date: string
          title: string
          updated_at: string
        }
        Insert: {
          active?: boolean
          content?: string
          created_at?: string
          end_date?: string
          group_id: number
          group_name?: string
          id?: number
          is_all_day?: boolean
          start_date?: string
          title: string
          updated_at?: string
        }
        Update: {
          active?: boolean
          content?: string
          created_at?: string
          end_date?: string
          group_id?: number
          group_name?: string
          id?: number
          is_all_day?: boolean
          start_date?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      schedule_attendee: {
        Row: {
          created_at: string
          id: number
          nickname: string
          schedule_id: number
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          nickname?: string
          schedule_id: number
          user_id: string
        }
        Update: {
          created_at?: string
          id?: number
          nickname?: string
          schedule_id?: number
          user_id?: string
        }
        Relationships: []
      }
      token: {
        Row: {
          access_token: string
          created_at: string
          expire: number
          id: number
          refresh_token: string
          social_type: string
          token_type: string
        }
        Insert: {
          access_token?: string
          created_at?: string
          expire?: number
          id?: number
          refresh_token?: string
          social_type?: string
          token_type?: string
        }
        Update: {
          access_token?: string
          created_at?: string
          expire?: number
          id?: number
          refresh_token?: string
          social_type?: string
          token_type?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          active: boolean
          created_at: string
          email: string
          id: number
          nick: string
          type: string
          uid: string
          updated_at: string
        }
        Insert: {
          active?: boolean
          created_at?: string
          email?: string
          id?: number
          nick?: string
          type?: string
          uid?: string
          updated_at?: string
        }
        Update: {
          active?: boolean
          created_at?: string
          email?: string
          id?: number
          nick?: string
          type?: string
          uid?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "users_nick_fkey"
            columns: ["nick"]
            isOneToOne: false
            referencedRelation: "calendar_attendee"
            referencedColumns: ["nickname"]
          },
          {
            foreignKeyName: "users_nick_fkey1"
            columns: ["nick"]
            isOneToOne: false
            referencedRelation: "schedule_attendee"
            referencedColumns: ["nickname"]
          },
          {
            foreignKeyName: "users_uid_fkey"
            columns: ["uid"]
            isOneToOne: true
            referencedRelation: "calendar_attendee"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "users_uid_fkey1"
            columns: ["uid"]
            isOneToOne: true
            referencedRelation: "schedule_attendee"
            referencedColumns: ["user_id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
