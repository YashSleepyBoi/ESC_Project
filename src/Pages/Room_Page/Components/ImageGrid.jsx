import { useState } from "react";
import { Button, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import Modal from "./Modal";
import { gridImages, actionButtonStyle } from "../Content";

export default function ImageGrid({isSmall}) {
    const [params, setParams] = useState({}); //params for modal
    const [active, isActive] = useState(false); //active for modal

  return (
    <>
      <ImageList cols={isSmall ? 1 : 2} gap={35} rowHeight={310}>
        {gridImages.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=552&h=310&fit=crop&auto=format`}
              srcSet={`${item.img}?w=552&h=310&fit=crop&auto=format&dpr=2 0.5x`}
              alt={item.title}
              style={{
                borderRadius: "14px",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
              loading="lazy"
              width={552} // Set the width attribute to 552
              height={310} // Set the height attribute to 310
            />
            <div className="transparent-overlay" />
            <ImageListItemBar
              position="bottom"
              sx={{ background: "none" }}
              title={item.title}
              actionIcon={
                <div className="action-button">
                  <Button
                    variant="contained"
                    disableElevation="true"
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
            {active && (
              <Modal
                closeModal={isActive}
                title={params.title}
                content={params.content}
              />
            )}
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}
