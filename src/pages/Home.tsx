import Grid from "@mui/material/Grid/Grid"
import TextField from "@mui/material/TextField/TextField"
import SearchIcon from '@mui/icons-material/Search';
type Props = {}

const Home = (props: Props) => {
  return (
    <Grid container spacing={2} sx={{
      backgroundColor: '#f4f3f8'
    }}>
  <Grid item xs={3}>
  <div>
    <h1>Chats</h1>
    <TextField variant="outlined" placeholder="   Search Here" size={"small"}/>
    
    
  </div>
  </Grid>
  <Grid item xs={6}>
    <div style={{
      backgroundColor:'red'
    }}>sfdsdf</div>
  </Grid>
  <Grid item xs={3}>
  <div style={{
      backgroundColor:'red'
    }}>sdfdsf</div>
  </Grid>
</Grid>
  )
}

export default Home