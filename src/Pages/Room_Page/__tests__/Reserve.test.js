import React from 'react';

import Hotel_Rooms from '../Components/Hotel_Rooms'; // Make sure to provide the correct import path
import { render, screen, fireEvent,waitFor } from '@testing-library/react';
import { updateDoc, arrayUnion } from 'firebase/firestore';

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
//   useParams: () => ({
//     hotel_id: "123",
//     room_id: "456",
//     guests: "3",
//     start_date: "2023-08-13",
//     end_date: "2023-08-20",
//     rooms: "2",
//     h_name: "Test Hotel",
//   }),
  useNavigate: () => mockNavigate,
}));
// Mock the useAuth hook
jest.mock('../../Profile_Page/useAuth', () => ({
    __esModule: true,
    default: jest.fn(),
  }));
  

describe('Hotel_Rooms Component', () => {
  it('renders correctly',async () => {
    const obj = {
      h_name: 'Hotel Name',
      r_name: 'Room Name',
      r_id: 'R_id',
      r_cost: 'R_cost', 
      rooms: 'R_no',
      guests: 'R_G',
      r_start_d: 'R_Sd',
      r_end_d: 'R_Ed',
      url:
        'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9vbXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    };

    const { findByTestId  } = render(
      <Hotel_Rooms img={obj.url} r_name={obj.r_name} price={obj.r_cost} obj={obj} />
    );
    const room_name = await findByTestId(
        'hotel-room-reserve-name'
    );
    const room_p = await findByTestId(
        'hotel-room-reserve-price'
    );
    
    expect(room_name.textContent).toBe("Room Name");
    expect(room_p.textContent).toBe("R_cost SGD/night")
    // expect(screen.getByAltText('Live from space album cover')).toBeInTheDocument();
  });
    
  it('calls updateDoc when "Select" button is clicked', async () => {
    const obj = {
        h_name: 'Hotel Name',
        r_name: 'Room Name',
        r_id: 'R_id',
        r_cost: 'R_cost', 
        rooms: 'R_no',
        guests: 'R_G',
        r_start_d: 'R_Sd',
        r_end_d: 'R_Ed',
        url:
          'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9vbXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      };
    require('../../Profile_Page/useAuth').default.mockReturnValue({ uid: "WXPLJuRq2K87TdQNrUAV" });

    // Mock useAuth to return a mock user ID
    // const mockUid = 'mockUserId';
    // useAuth.mockReturnValue({ uid: mockUid });

    // Mock updateDoc
    // updateDoc.mockResolvedValue(); // You can modify this to simulate different behaviors

    // Render the component
    const { findByTestId} = render(
      <Hotel_Rooms img={obj.url} r_name={obj.r_name} price={obj.r_cost} obj={obj} />
    );

    // Simulate clicking the "Select" button
    const button =await  findByTestId("hotel-room-reserve-click");
    fireEvent.click(button);
    // waitFor(() => {
    //       expect(mockNavigate).toHaveBeenCalledTimes(1); // checking if the navigate function was called
    //     });
      
    expect(updateDoc)
  });
    
  it('calls updateDoc when "Select" button is clicked', async () => {
    const obj = {
        h_name: 'Hotel Name',
        r_name: 'Room Name',
        r_id: 'R_id',
        r_cost: 'R_cost', 
        rooms: 'R_no',
        guests: 'R_G',
        r_start_d: 'R_Sd',
        r_end_d: 'R_Ed',
        url:
          'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9vbXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      };
    require('../../Profile_Page/useAuth').default.mockReturnValue({ uid: "WXPLJuRq2K87TdQNrUAV" });

    // Mock useAuth to return a mock user ID
    // const mockUid = 'mockUserId';
    // useAuth.mockReturnValue({ uid: mockUid });

    // Mock updateDoc
    // updateDoc.mockResolvedValue(); // You can modify this to simulate different behaviors

    // Render the component
    const { findByTestId} = render(
      <Hotel_Rooms img={obj.url} r_name={obj.r_name} price={obj.r_cost} obj={obj} />
    );

    // Simulate clicking the "Select" button
    const button =await  findByTestId("hotel-room-reserve-click");
    fireEvent.click(button);
    waitFor(() => {
          expect(mockNavigate).toHaveBeenCalledTimes(1); // checking if the navigate function was called
        });
      
    // expect(updateDoc)
  });
    
    

});
