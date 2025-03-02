export type Ticket = {
  _id: string;
  createdAt: Date;
  description: string;
  status: Status;
  title: string;
  user: string;
};

export type Status = "open" | "inprogress" | "closed";
