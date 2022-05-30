import { useSession } from "next-auth/react"
import { Typography } from "@mui/material";
import React from 'react';
import { Container } from "@mui/material";
import Lottie from 'react-lottie'
import exampleAnimationData from '/public/lotties/animacija';
import specialist from '/public/lotties/specialist';
import bronze from '/public/lotties/bronze';
import information from '/public/lotties/information';
import newranking from '/public/lotties/newranking';
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { Avatar } from "@mui/material";
import silver from '/public/lotties/silver';
import gold from '/public/lotties/gold';
import { Link, animateScroll as scroll } from "react-scroll";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Welcome from "../components/Welcome";

export default function Home() {
  const { data: session } = useSession()
  
    return <>
    
    
    
  {/*
  {session &&
    <Container maxWidth="sm" sx={{mt: 1, px:2, py:3, bgcolor: "background.paper", borderRadius: 2}} >
      <Stack
      justifyContent="center"
      alignItems="center"
      spacing={5}
      sx={{my:5}}>

        <Avatar src={session.user.image} sx={{width: 150, height: 150}}></Avatar>
        <Typography sx={{color:"background.contrastColor"}} variant="h3">Hello {session.user.name}</Typography>
        <Button variant="contained" color="secondary" size="large" href="/profile">Profile</Button> 

      </Stack>
    </Container>

            
  } 
  
  
  {(session && session.first) ? <Welcome></Welcome>:null}  */}
   
   
  <Container maxWidth="xl" disableGutters={true} sx={{p:0}}>
      <Stack
      direction={{md:'row', xs:'column'}}
      justifyContent="space-evenly"
      alignItems="center"
      sx={{mt:{xs: 5, md: 15}}}
      mx={{xs:2}}
      >
        <Box sx={{mb:{md:60}}}>
          <Typography variant="h2" sx={{color: "background.contrastColor"}}>Platform made for <br/>  community <br/>  <Typography variant="h2" sx={{color:'background.contrastColor', textDecoration:'underline', textDecorationColor:"#52d17b", display:'inline', textUnderlineOffset:{xs: "6px", md: "10px"}}}>information validation</Typography>.</Typography>
          <Button sx={{mt:5}} variant="contained" color="secondary" size="large">
            <Link
            activeClass="active"
            to="explore"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
            >Explore
            </Link>
        </Button>     
        </Box>
        
        <Box maxWidth={{md:'60%', xs:'100%'}} sx={{mt:{xs: 5, md: -20}, ml:{xs:-5}}}>
          <Lottie isClickToPauseDisabled={true} options={{loop: true, autoplay: true, rendererSettings: {preserveAspectRatio: 'xMidYMid meet'}, animationData: exampleAnimationData,}}/>
        </Box>
        
      </Stack>
      
      

      <Container sx={{mt:{md:40, xs:15}, px:2, py:3, bgcolor: "#52D17B", borderRadius: 2,}} maxWidth="xl" width="100%">
      <Stack
      direction="center"
      justifyContent="center"
      alignItems="center">

       <Typography align="center" variant="h4">We provide <Typography variant="h4" sx={{color:"#003B00"}} display="inline">educational</Typography> and <Typography display="inline" variant="h4" sx={{color:"#003B00"}}>consulting-based </Typography>reliable, 
       <br/>reputable and researched information.</Typography>      
      </Stack>
    </Container>


      <Stack
      direction={{md:'row', xs:'column'}}
      justifyContent="space-evenly"
      alignItems="center"
      sx={{mt: {xs: 15, md: 25}}}
      mx={{xs:2}}
      >
        <Stack
      direction={{md:'column', xs:'column'}}
      justifyContent="flex-start"
      alignItems="flex-start"
       sx={{mb:{md:50}, mr:{md:10}, mt:{xs:10}}} spacing={2}>
          <Typography variant="h2" sx={{mb:{xs: 2, md:8}, color:"background.contrastColor", textDecoration:'underline', textDecorationColor:'#52D17B', textUnderlineOffset:{xs: "6px", md: "10px"}}}>How to</Typography>
          <Typography variant="h3" color="#52D17B" sx={{maxWidth:720}}>1. <Typography variant="h4" color="#F8FFF8" sx={{maxWidth:720, display:"inline"}}>Choose a topic of </Typography><Typography variant="h4" color="#009BFF" sx={{maxWidth:720, display:"inline"}}>interest </Typography><Typography variant="h4" color="#F8FFF8" sx={{maxWidth:720, display:"inline"}}>or </Typography><Typography variant="h4" color="#009BFF" sx={{maxWidth:720, display:"inline"}}>expertise.</Typography></Typography>
          <Typography variant="h3" color="#52D17B" sx={{maxWidth:720}}>2. <Typography variant="h4" color="#F8FFF8" sx={{maxWidth:720, display:"inline"}}>Submit a </Typography><Typography variant="h4" color="#F43F48" sx={{maxWidth:720, display:"inline"}}>source-backed </Typography><Typography variant="h4" color="#F8FFF8" sx={{maxWidth:720, display:"inline"}}>answer. </Typography></Typography>
          <Typography variant="h3" color="#52D17B" sx={{maxWidth:720}}>3. <Typography variant="h4" color="#F8FFF8" sx={{maxWidth:720, display:"inline"}}>Ask </Typography><Typography variant="h4" color="#009BFF" sx={{maxWidth:720, display:"inline"}}>Users </Typography><Typography variant="h4" color="#F8FFF8" sx={{maxWidth:720, display:"inline"}}>or </Typography><Typography variant="h4" color="#009BFF" sx={{maxWidth:720, display:"inline"}}>Specialists.</Typography></Typography>
          <Typography variant="h3" color="#52D17B" sx={{maxWidth:720}}>4. <Typography variant="h4" color="#FFDF82" sx={{maxWidth:720, display:"inline"}}>Get rewarded </Typography><Typography variant="h4" color="#F8FFF8" sx={{maxWidth:720, display:"inline"}}>for Your effort. </Typography></Typography>
        </Stack>
        <Box minWidth={{md:'40%', xs:'100%'}} sx={{mb:{md:40}}}>
        <Lottie isClickToPauseDisabled={true} options={{loop: true, autoplay: true, rendererSettings: {preserveAspectRatio: 'xMidYMid meet'}, animationData: newranking}}/>
        </Box>

        
      </Stack>

      <Container sx={{mt:{md:-20, xs:10}, px:2, py:3, bgcolor: "#52D17B", borderRadius: 2}}>
      <Stack
      direction="column"
      justifyContent="center"
      alignItems="flex-start"
      spacing={2}>

         <Typography variant="h4" sx={{color:"Background.contrastColor"}}><Typography variant="h4" sx={{color:"#003B00"}} display="inline">- Community generated</Typography><Typography variant="h4" sx={{color:"Background.contrastColor"}} display="inline"> questions and answers on requested topics</Typography></Typography>  
         <Typography variant="h4" sx={{color:"Background.contrastColor"}}><Typography variant="h4" sx={{color:"#003B00"}} display="inline">- Personally evaluated</Typography><Typography variant="h4" sx={{color:"Background.contrastColor"}} display="inline"> questions and information</Typography></Typography>  
         <Typography variant="h4" sx={{color:"Background.contrastColor"}}><Typography variant="h4" sx={{color:"Background.contrastColor"}} display="inline"><Typography variant="h4" sx={{color:"#003B00"}} display="inline">-</Typography> Detailed </Typography><Typography variant="h4" sx={{color:"#003B00"}} display="inline">reviews of internet domains</Typography></Typography>
         <Typography variant="h4" sx={{color:"Background.contrastColor"}}><Typography variant="h4" sx={{color:"#003B00"}} display="inline">- Digital literacy </Typography><Typography variant="h4" sx={{color:"Background.contrastColor"}} display="inline"> education</Typography></Typography>   
         <Typography variant="h4" sx={{color:"Background.contrastColor"}}><Typography variant="h4" sx={{color:"Background.contrastColor"}} display="inline"><Typography variant="h4" sx={{color:"#003B00"}} display="inline">-</Typography> Chrome Extension for </Typography><Typography variant="h4" sx={{color:"#003B00"}} display="inline">browsing approved information</Typography></Typography>
         
      </Stack>
    </Container>

       <Stack
  direction="row"
  justifyContent={{xs:'center', md:'flex-start'}}
  alignItems="flex-start"s
  sx={{mt: {md:20, xs:25}, ml:{xs:0, md:2.5}}}
  id="explore"
  >
        <Typography  variant="h2" sx={{color:"background.contrastColor", textDecoration:'underline', textDecorationColor:'#52D17B', textUnderlineOffset:"7px", mb:{xs: 5, md: 0}}}>Ask, Answer, Achieve!</Typography>
      </Stack>

      <Stack
      direction={{xs:'column', md:'row'}}
      justifyContent="space-evenly"
      alignItems="center"
      sx={{my:{xs: 0, md: 10}}}
      mx={{xs:2}}
      >
        <Box >
          <Typography variant="h3" color="text.secondary" sx={{ maxWidth:'400px'}} display="inline">Earn </Typography>
          <Typography variant="h3" color="text.secondary" sx={{ maxWidth:'400px'}} display="inline"><Typography  variant="h3" color="#FFDF82" borderRadius={2} sx={{maxWidth:'210px', display:'inline'}}>Achievements</Typography> and display them on Your profile.</Typography><br/>
          <Button sx={{mt: 5}} variant="contained" color="secondary" size="large" href="/q&a/public">
            Learn more
          </Button>
        </Box>

        <Container maxWidth="md" sx={{mt: 1, px:2, py:3, bgcolor: "background.paper", borderRadius: 2, ml:{md:30}, mt:{xs:3}}} >
        <Stack
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      spacing={1}
      sx={{mt:{xs:1}}}
      >

          <Box minWidth={{xs:'30%', md:'25%'}} maxWidth={{md:'40%'}}>
          <Lottie isClickToPauseDisabled={true} options={{loop: true, autoplay: true, rendererSettings: {preserveAspectRatio: 'xMidYMid meet'}, animationData: bronze}}/>
          </Box>
          <Box minWidth={{xs:'30%', md:'25%'}}>
          <Lottie isClickToPauseDisabled={true} options={{loop: true, autoplay: true, rendererSettings: {preserveAspectRatio: 'xMidYMid meet'}, animationData: silver}}/>
          </Box>
          <Box minWidth={{xs:'30%', md:'25%'}}>
          <Lottie isClickToPauseDisabled={true} options={{loop: true, autoplay: true, rendererSettings: {preserveAspectRatio: 'xMidYMid meet'}, animationData: gold}}/>
          </Box>
          </Stack>
          </Container>
      </Stack>
      
      



      <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{mt: {md:55, xs:20}}}
      mx={{xs:2}}
      >

        <Typography variant="h2" sx={{color:"background.contrastColor", textDecoration:'underline', textDecorationColor:'#52D17B', textUnderlineOffset:{xs: "6px", md: "10px"}}}>Get feedback from Specialists.</Typography>
        
      </Stack>
        
      <Stack
      direction={{md:'row', xs:'column'}}
      justifyContent="space-evenly"
      alignItems="center"
      sx={{mt:10}}
      mx={{xs:2}}
      >
        <Box>
          <Typography variant="h4" color="text.secondary" sx={{maxWidth:720}}>Connect with our <Typography variant="h4" bgcolor="#FFDF82" borderRadius={2} sx={{color:'black', display:'inline'}}>most reputable Specialists</Typography> dedicated to providing concrete results.</Typography>
        </Box>
        <Box maxWidth={{md:'35%', xs:'100%'}}>
          <Lottie isClickToPauseDisabled={true} options={{loop: true, autoplay: true, rendererSettings: {preserveAspectRatio: 'xMidYMid meet'}, animationData: specialist}}/>
        </Box>

        
      </Stack>
      <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      mt={{xs:10}}>

          <Button variant="contained" color="secondary" size="large" href="/q&a/private">
            Connect
          </Button>
      
      </Stack>
      <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      >

        <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{mt: {md:55, xs:25}}}
        mx={{xs:2}}
        >
          <Typography variant="h2" sx={{color:"background.contrastColor", textDecoration:'underline', textDecorationColor:'#52D17B', textUnderlineOffset:{xs: "6px", md: "12px"}}}>Improve Your digital literacy.</Typography>
        </Stack>

        <Stack
        direction={{md:'row', xs:'column'}}
        justifyContent="space-evenly"
        alignItems="center"
        sx={{mt:10}}
        mx={{xs:2}}
        >
          <Box>
            <Typography variant="h4" color="text.secondary" sx={{maxWidth:'800px'}}>Learn how to <Typography variant="h4" bgcolor="#FFDF82" borderRadius={2} sx={{width:'210px', color:'black', display:'inline'}}>find trustworthy information</Typography> in the evermore growing pile of questionable data.</Typography>  
          </Box>
          <Box maxWidth={{md:'35%', xs:'100%'}} mr={{xs: 2}}>
            <Lottie isClickToPauseDisabled={true} options={{loop: true, autoplay: true, rendererSettings: {preserveAspectRatio: 'xMidYMid meet'}, animationData:information}}/>
          </Box>
        </Stack>

  </Stack>
  <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      mt={{xs:0, md:0}}>

          <Button variant="contained" color="secondary" size="large" href="/learn">
            Guide
          </Button>
      
      </Stack>
      
  <Stack
  direction="row"
  justifyContent={{xs:'center', md:'flex-start'}}
  alignItems="flex-start"s
  sx={{mt: {md:20, xs:25}, ml:{xs:0, md:2.5}}}
  >
    <Typography variant="h2" sx={{color:"background.contrastColor", textDecoration:'underline', textDecorationColor:'#52D17B', textUnderlineOffset: "8px"}}>FAQ</Typography>
  </Stack>

  


  <Stack
  direction="column"
  justifyContent="flex-start"
  alignItems="flex-start"
  spacing={3}
  sx={{mt:5, ml:{xs:0, md:2}}}
  >

    <Accordion sx={{maxWidth:"xl", width: "100%"}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h5" >1. Why are we here?</Typography>
      </AccordionSummary>
      <AccordionDetails>
      <Typography variant="h6" color="text.secondary">Learn to find trustworthy information in the evermore growing pile of questionable data.</Typography>
      </AccordionDetails>
    </Accordion>


    <Accordion sx={{maxWidth:"xl", width: "100%"}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h5" >2. Where should I start?</Typography>
      </AccordionSummary>
      <AccordionDetails>
      <Typography variant="h6" color="text.secondary">Start by Logging in and checking your <Link href="/profile"><a style={{color: "#52d17b", textDecoration: "none"}} >Profile page</a></Link>. After that feel free to browse <Link href="/q&a/public"><a style={{color: "#52d17b", textDecoration: "none"}} >Public Q&A</a></Link>, <Link href="/q&a/private"><a style={{color: "#52d17b", textDecoration: "none"}} >Private Q&A</a></Link> and <Link href="/learn"><a style={{color: "#52d17b", textDecoration: "none"}}>Learn</a></Link> sections.</Typography>
      </AccordionDetails>
    </Accordion>


    <Accordion sx={{maxWidth:"xl", width: "100%"}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h5" >3. What Google data are you using?</Typography>
      </AccordionSummary>
      <AccordionDetails>
      <Typography variant="h6" color="text.secondary">We only use your name, email and profile image. Feel free to change your username on the <Link href="/profile"><a style={{color: "#52d17b", textDecoration: "none"}}>Profile page</a></Link> ( it will not effect your Google name )</Typography>
      </AccordionDetails>
    </Accordion>


    <Accordion sx={{maxWidth:"xl", width: "100%"}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h5">4. How do I rank up?</Typography>
      </AccordionSummary>
      <AccordionDetails>
      <Typography variant="h6" color="text.secondary">You Rank up by providing quality answers in the <Link href="/q&a/public"><a style={{color: "#52d17b", textDecoration: "none"}} >Public Q&A</a></Link> section.</Typography>
      </AccordionDetails>
    </Accordion>
    
    
    
    <Accordion sx={{maxWidth:"xl", width: "100%"}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h5">5. Want to become a specialist?</Typography>
      </AccordionSummary>
      <AccordionDetails>
      <Typography variant="h6" color="text.secondary">Contact us at <em style={{color: "#52d17b"}}>sourceverse@gmail.com</em></Typography>
      </AccordionDetails>
    </Accordion>
  </Stack>
  </Container>
  

  </>
  }

 


