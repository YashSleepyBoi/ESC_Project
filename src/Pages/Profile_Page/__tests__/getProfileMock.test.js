jest.mock('firebase/firestore', () => {
    const original = jest.requireActual('firebase/firestore');
    
    return {
      ...original,
      getDoc: jest.fn(),
    };
  });

import getProfile from '../components/getProfile';
import { getDoc } from 'firebase/firestore';

describe('getProfile', () => {
  it('fetches a user profile from Firestore', async () => {
    const mockUserUID = 'testUID';

    // Mock data
    const mockData = {
      name: 'Test Name',
      email: 'test@example.com',
      bookings: ['booking1', 'booking2'],
    };

    const mockDocSnapshot = {
      exists: true,
      data: () => mockData,
    };

    getDoc.mockResolvedValueOnce(mockDocSnapshot);

    const [name, email, bookings] = await getProfile(mockUserUID);

    expect(name).toBe(mockData.name);
    expect(email).toBe(mockData.email);
    expect(bookings).toEqual(mockData.bookings);
  });

  it('throws an error if fetching profile fails', async () => {
    const mockUserUID = 'testUID';
    
    getDoc.mockRejectedValueOnce(new Error('Firebase error'));

    await expect(getProfile(mockUserUID)).rejects.toThrow('Error fetching user profile.');
  });
});
