export interface IOuterInvites {
    invitedUsers: IInvitedUsers[],
    eventId: string
}

export interface IInvitedUsers {
    userId: string,
    status: boolean,
    dateOfSending: string,
    avatar: string,
    name: string
}

export interface IInnerInvites {
    fromUserId: string,
    eventId: string,
    dateOfSending: string,
    status: boolean,
    avatar: string,
    name: string
}