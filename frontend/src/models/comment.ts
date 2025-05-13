export interface Comment {
    id: string;
    content: string;
    user: string;
    parent_id?: string;
}
