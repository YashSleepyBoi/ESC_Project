import { Grid } from "@mui/material";
import { suitDesc1 } from "../Content";
export default function Suite({ isSmall }) {
  return (
    <>
      <div className="suites">
        <Grid container spacing={isSmall ? 8 : 3}>
          <Grid item sm={12} md={12} lg={6.5}>
            <div className="suite-card" style={{ float: "right" }}>
              <img src="https://images.unsplash.com/photo-1537823286324-7d070255022e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
            </div>
          </Grid>
          <Grid item sm={12} md={12} lg={5.5}>
            <div className="suite-description">
              <h2>Luxury Suites</h2>
              <p>{suitDesc1}</p>
            </div>
          </Grid>
          <Grid item sm={12} md={12} lg={5.5} order={{ xs: 2, lg: 1 }}>
            <div className="suite-description" style={{ float: "right" }}>
              <h2>Executive Lounge</h2>
              <p>{suitDesc1}</p>
            </div>
          </Grid>
          <Grid item sm={12} md={12} lg={6.5} order={{ xs: 1, lg: 2 }}>
            <div className="suite-card">
              <img src="https://images.unsplash.com/photo-1497366672149-e5e4b4d34eb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
