export type UserRole = 'admin' | 'organizer' | 'student';

export interface User {
  uid: string;
  name: string;
  email: string;
  role: UserRole;
  department?: string;
  year?: string;
  rollNumber?: string;
}

export interface Club {
  clubId: string;
  clubName: string;
  description: string;
  organizerId: string;
}

export type EventStatus = 'pending' | 'approved' | 'rejected';

export interface Event {
  eventId: string;
  title: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  clubId: string;
  clubName: string;
  createdBy: string;
  status: EventStatus;
  rejectionReason?: string;
  createdAt: number;
}

export interface Registration {
  registrationId: string;
  eventId: string;
  studentId: string;
  studentName: string;
  studentEmail: string;
  timestamp: number;
}

export type ResourceType = 'room' | 'hall' | 'equipment';

export interface Resource {
  resourceId: string;
  name: string;
  type: ResourceType;
  capacity?: number;
}

export type BookingStatus = 'pending' | 'approved' | 'rejected';

export interface Booking {
  bookingId: string;
  eventId: string;
  eventName: string;
  resourceId: string;
  resourceName: string;
  organizerId: string;
  date: string;
  startTime: string;
  endTime: string;
  status: BookingStatus;
  createdAt: number;
}
