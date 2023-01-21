import { Stack } from "@mui/material" 
import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"
import logo from "../utils/logo.png"

const Navbar = () => {
  return (
    <Stack 
      direction='row' 
      alignItems='center' 
      p={2} 
      sx={{ position: 'sticky', background: '#1F1F38', top: 0, justifyContent: 'space-between'}}>

      <Link to='/' style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
         <img src={logo} alt='logo' height={60} />
      </Link>

      <SearchBar />
    </Stack>
  )
}

export default Navbar