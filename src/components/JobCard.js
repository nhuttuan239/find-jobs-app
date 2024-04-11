import * as React from "react";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";

export default function JobCard({ job }) {
  const navigate = useNavigate();
  const skillsArr = job.skills;
  return (
    <Box sx={{ p: 2, border: "1px solid #3867d6", borderRadius: 2 }}>
      <Typography gutterBottom variant="h5" color="#0652DD">
        {job.title}
      </Typography>
      <Typography>
        {skillsArr.map((skill) => (
          <Chip
            label={skill}
            color="primary"
            size="small"
            sx={{ p: 0, m: 0.2 }}
          />
        ))}
      </Typography>

      <Typography variant="body2" color="text.secondary">
        {job.city} - {job.description}
      </Typography>
      <Button
        variant="contained"
        size="small"
        onClick={() => navigate(`/book/${job.id}`)}
      >
        LEARN MORE
      </Button>
    </Box>
  );
}
