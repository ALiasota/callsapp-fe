import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <AdbIcon
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, mt: 0.5 }}
            />
            LOGO
          </Typography>
          <Typography
            textAlign="center"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Links
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
