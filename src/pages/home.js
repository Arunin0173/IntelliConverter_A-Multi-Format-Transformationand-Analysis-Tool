import { Box } from '@mui/material';
import '../css/home.css';
import Logo from "../images/logoblack.png"
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextPage from './text';
import PdfPage from './pdf';
import ImagePage from './image';
import DefaultPage from './default';
import Menu from '../component/menu';
function Home(){

  const [selectedComponent, setSelectedComponent] = React.useState('default');

  // Function to render the selected component
  const renderComponent = () => {
      switch (selectedComponent) {
          case 'text':
              return <TextPage />;
          case 'pdf':
              return <PdfPage />;
          case 'image':
              return <ImagePage />;
          default:
              return <DefaultPage/>;
      }
  };



    return(

        <div class="page" >
            <Box style={{width:'100%',height:'100vh',backgroundColor:'white',padding:'20px'}}>
            <div class="container1">

            <img class="imglogo" src={Logo} alt='img'/>
            <div class="menuicon">
              <Menu/>

            </div>
            </div>

            <div class="container2">
            <FormControl sx={{width:'100%'}}>
      <FormLabel id="demo-radio-buttons-group-label"  sx={{color:'black',textAlign:'center',fontSize:'20px',color:'gray',margin:'30px'}}>Choose Your Converter ?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        value={selectedComponent}
        onChange={(e) => setSelectedComponent(e.target.value)}
      >

        <div class="container3"> 
        <FormControlLabel class="input1" value="text" control={<Radio  
  sx={{
    '&, &.Mui-checked': {
      color: '#9ABDDC',
    },
  }}/>} label="Text" />
        <FormControlLabel class="input2" value="pdf" control={<Radio   sx={{
    '&, &.Mui-checked': {
      color: '#FF9F01',
    },
  }}   />} label="PDF"  />
        <FormControlLabel class="input3" value="image" control={<Radio  sx={{
    '&, &.Mui-checked': {
      color: '#78E07A',
    },
  }} />} label="Image"  />
        </div>
      </RadioGroup>
    </FormControl>
                
   </div>

   <div class="box4">

   {renderComponent()}

   </div>

   

          

            

      



            </Box>
        </div>




    );
  

 
    



}
export default Home;