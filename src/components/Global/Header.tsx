import { Typography, Box, useTheme } from "@mui/material";

interface HeaderProps {
    title: string;
    subtitle: string;
  }
  

const Header:React.FC<HeaderProps> = ({ title, subtitle }) => {
  const theme = useTheme();
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h5">
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;