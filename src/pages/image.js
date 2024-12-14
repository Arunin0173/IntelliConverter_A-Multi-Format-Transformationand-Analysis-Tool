import { Button, Textarea } from "@mui/joy";
import "../css/image.css";
import { FaImage, FaRegFilePdf } from "react-icons/fa";
import { IoText } from "react-icons/io5";
import { AiFillFileAdd } from "react-icons/ai";
import { BiImageAdd } from "react-icons/bi";


function Image(){
    return   (

        <div class="container" >
            <div class="box1">

            <form class="pdfupload">
                <label for="pdffile" class="imagefile"> <BiImageAdd style={{ fontSize: "100px" ,color:"#78E07A" }}/> </label>
                <input type="file" id="pdffile" name="pdffile" style={{display:"none"}}/>

            </form> 
            </div>

            <div class="box2">

                <div class="conbox1">
                   
                <Button sx={{backgroundColor:"#FBE6BF",border:"2px solid #FEB130",width:"150px",height:"150px",color:"#FF9F01" ,fontSize:"40px",  '&:hover': {
    backgroundColor: '#FEB130',
    boxShadow: 'none',
  }}}> <FaRegFilePdf  class="icon2"/></Button>

                </div>

                <div class="conbox2">

                    <Button sx={{backgroundColor:"#D1E5F4",border:"2px solid #AECCE4",width:"150px",height:"150px",color:"#9ABDDC" ,fontSize:"40px",  '&:hover': {
    backgroundColor: '#AECCE4',
    boxShadow: 'none',
  }}}> <IoText  class="icon2"/></Button>

                </div>

            </div>

            <div class="box3">


            </div>



            
        </div>

    






    );         











}
export default Image;