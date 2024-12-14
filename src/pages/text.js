import { Button, Textarea } from "@mui/joy";
import "../css/text.css";
import { FaImage, FaRegFilePdf } from "react-icons/fa";


function Text(){
    return   (

        <div class="container" >
            <div class="box1">
            <Textarea class="txtbox"
        name="Primary"
        placeholder="Type in here…"
        variant="outlined"
        color="primary"
      />

            </div>

            <div class="box2">

                <div class="conbox1">
                    <Button sx={{backgroundColor:"#C9FEC0",border:"2px solid #A1F8A0",width:"150px",height:"150px",color:"#78E07A" ,fontSize:"40px",  '&:hover': {
    backgroundColor: '#A1F8A0',
    boxShadow: 'none',
  }}}> < FaImage/> </Button>

                </div>

                <div class="conbox2">

                    <Button sx={{backgroundColor:"#FBE6BF",border:"2px solid #FEB130",width:"150px",height:"150px",color:"#FF9F01" ,fontSize:"40px",  '&:hover': {
    backgroundColor: '#FEB130',
    boxShadow: 'none',
  }}}> <FaRegFilePdf  class="icon2"/></Button>

                </div>

            </div>

            <div class="box3">


            </div>



            
        </div>

    






    );         











}
export default Text;