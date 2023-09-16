// Generated by https://quicktype.io

export interface OneMeeting {
    message: Message;
}

export interface Message {
    id:          string;
    temperature: number;
    fu_date:     string;
    meeting_id:  MeetingID;
}

export interface MeetingID {
    id:     string;
    date:   string;
    topics: string;
    title:  string;
}
