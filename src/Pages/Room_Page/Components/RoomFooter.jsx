import { Divider, Grid } from "@mui/material";
import { footerData } from "../Content";

export default function Footer() {
  return (
    <>
      <div className="footer-content">
        <h2
          style={{
            textAlign: "left",
            fontStyle: "revert",
            marginBottom: "1rem",
          }}
        >
          Ascenda Loyalty
        </h2>
        <Divider sx={{ bgcolor: "black", marginBottom: "1rem" }} />
        <Grid container spacing={2}>
          {footerData.map((item) => {
            return (
              <div className="grid-test" role="gridcell">
                <Grid item xs={12} sm={6} md={4}>
                <p className="footer-text">{item}</p>
              </Grid>
              </div>
            );
          })}
        </Grid>
      </div>
    </>
  );
}
