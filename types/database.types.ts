export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      calendar: {
        Row: {
          active: boolean;
          created_at: string;
          id: number;
          name: string;
          updated_at: string;
        };
        Insert: {
          active?: boolean;
          created_at?: string;
          id?: number;
          name?: string;
          updated_at?: string;
        };
        Update: {
          active?: boolean;
          created_at?: string;
          id?: number;
          name?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'calendar_id_fkey';
            columns: ['id'];
            isOneToOne: false;
            referencedRelation: 'calendar_attendee';
            referencedColumns: ['calendar_id'];
          },
          {
            foreignKeyName: 'schdule_groups_id_fkey';
            columns: ['id'];
            isOneToOne: false;
            referencedRelation: 'schedule';
            referencedColumns: ['calendar_id'];
          },
          {
            foreignKeyName: 'schdule_groups_name_fkey';
            columns: ['name'];
            isOneToOne: false;
            referencedRelation: 'schedule';
            referencedColumns: ['calendar_name'];
          },
        ];
      };
      calendar_attendee: {
        Row: {
          calendar_id: number;
          created_at: string;
          id: number;
          role: string;
          user_id: string;
        };
        Insert: {
          calendar_id: number;
          created_at?: string;
          id?: number;
          role?: string;
          user_id: string;
        };
        Update: {
          calendar_id?: number;
          created_at?: string;
          id?: number;
          role?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'calendar_attendee_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: true;
            referencedRelation: 'user';
            referencedColumns: ['uid'];
          },
        ];
      };
      schedule: {
        Row: {
          active: boolean;
          calendar_id: number;
          calendar_name: string;
          content: string;
          created_at: string;
          end_date: string;
          id: number;
          is_all_day: boolean;
          start_date: string;
          title: string;
          updated_at: string;
        };
        Insert: {
          active?: boolean;
          calendar_id: number;
          calendar_name?: string;
          content?: string;
          created_at?: string;
          end_date?: string;
          id?: number;
          is_all_day?: boolean;
          start_date?: string;
          title: string;
          updated_at?: string;
        };
        Update: {
          active?: boolean;
          calendar_id?: number;
          calendar_name?: string;
          content?: string;
          created_at?: string;
          end_date?: string;
          id?: number;
          is_all_day?: boolean;
          start_date?: string;
          title?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'schedule_id_fkey';
            columns: ['id'];
            isOneToOne: true;
            referencedRelation: 'schedule_attendee';
            referencedColumns: ['schedule_id'];
          },
        ];
      };
      schedule_attendee: {
        Row: {
          created_at: string;
          id: number;
          nickname: string;
          schedule_id: number;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          nickname?: string;
          schedule_id: number;
          user_id: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          nickname?: string;
          schedule_id?: number;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'schedule_attendee_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: true;
            referencedRelation: 'user';
            referencedColumns: ['uid'];
          },
        ];
      };
      token: {
        Row: {
          access_token: string;
          created_at: string;
          expire: number;
          id: number;
          refresh_token: string;
          social_type: string;
          token_type: string;
          user_id: string;
        };
        Insert: {
          access_token?: string;
          created_at?: string;
          expire?: number;
          id?: number;
          refresh_token?: string;
          social_type?: string;
          token_type?: string;
          user_id: string;
        };
        Update: {
          access_token?: string;
          created_at?: string;
          expire?: number;
          id?: number;
          refresh_token?: string;
          social_type?: string;
          token_type?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'token_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: true;
            referencedRelation: 'user';
            referencedColumns: ['uid'];
          },
        ];
      };
      user: {
        Row: {
          active: boolean;
          created_at: string;
          email: string;
          nick: string;
          profile: string;
          social_id: string;
          type: string;
          uid: string;
          updated_at: string;
        };
        Insert: {
          active?: boolean;
          created_at?: string;
          email?: string;
          nick?: string;
          profile?: string;
          social_id?: string;
          type?: string;
          uid?: string;
          updated_at?: string;
        };
        Update: {
          active?: boolean;
          created_at?: string;
          email?: string;
          nick?: string;
          profile?: string;
          social_id?: string;
          type?: string;
          uid?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DefaultSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
        Database[DefaultSchemaTableNameOrOptions['schema']]['Views'])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
      Database[DefaultSchemaTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    ? (DefaultSchema['Tables'] & DefaultSchema['Views'])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema['Enums'] | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions['schema']]['Enums'][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema['Enums']
    ? DefaultSchema['Enums'][DefaultSchemaEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema['CompositeTypes']
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema['CompositeTypes']
    ? DefaultSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never;

export const Constants = {
  public: {
    Enums: {},
  },
} as const;
