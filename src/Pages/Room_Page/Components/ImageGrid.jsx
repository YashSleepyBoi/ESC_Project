import { useState, useEffect } from "react";
import {
  Button,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import Modal from "./Modal";
import { actionButtonStyle, loadMoreButtonStyle } from "../Content";

export default function ImageGrid({ isSmall }) {
  const [params, setParams] = useState({}); //params for modal
  const [active, isActive] = useState(false); //active for modal
  const [gridImages, setGridImages] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4); // Initial visible images count

  const extractRoomInfo = (room) => {
    const { roomDescription, images, long_description, amenities } = room;
    return {
      img: images[0]?.high_resolution_url,
      title: roomDescription,
      content: long_description,
      amenities: amenities,
      images: images,
    };
  };

  const fetchRoomData = () =>
    fetch("http://localhost:8000/rooms/diH7")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setGridImages(data.rooms.map((item) => extractRoomInfo(item)))
      })
      .catch((error) => {
        console.error(error);
      });

  useEffect(() => fetchRoomData, []);

  const loadMore = () => {
    if(visibleCount >= gridImages.length) return; // No more images to load
    setVisibleCount(prevCount => prevCount + 4); // Load 4 more images
  };

  return (
    <>
      <ImageList cols={isSmall ? 1 : 2} gap={35} rowHeight={310}>
        {gridImages.slice(0, visibleCount).map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}`}
              srcSet={`${item.img}`}
              alt={item.title}
              style={{
                borderRadius: "14px",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  height: '310px'
              }}
              loading="lazy"
            />
            <div className="transparent-overlay" />
            <ImageListItemBar
              position="bottom"
              sx={{ background: "none" }}
              title={item.title}
              actionIcon={
                <div className="action-button">
                  <Button
                    role="Button"
                    variant="contained"
                    disableElevation={false}
                    sx={actionButtonStyle}
                    onClick={() => {
                      isActive(true);
                      setParams(item);
                    }}
                  >
                    View More
                  </Button>
                </div>
              }
              actionPosition="left"
            />
            <div className="Modal" data-testid="Modal Test">
              {active && (
                <Modal
                  closeModal={isActive}
                  title={params.title}
                  content={params.content}
                  amenities={params.amenities}
                  images={params.images}
                />
              )}
            </div>
          </ImageListItem>
        ))}
      </ImageList>
      {visibleCount < gridImages.length && 
        <Button onClick={loadMore} sx={loadMoreButtonStyle}>Load More</Button>
      }
    </>
  );
}
