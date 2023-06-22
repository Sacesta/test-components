// Customizable Area Start
import React from 'react';
import { 
    Box,
    Button, 
    Typography,
    InputAdornment, 
    Grid,
    FormControl,
    TextField,
    Link,
    Checkbox,
    FormControlLabel
} from "@material-ui/core";
// import NewLoginController, { Props } from './NewLoginController.web';

import "./LoginNew.web.css"
// Customizable Area End

/*istanbul ignore next */
class Login extends React.Component {
    // constructor(props: ) {
    //     super(props);
    //     // Customizable Area Start
    //     // Customizable Area End
    // }
    // Customizable Area Start
    render() {
        // const { email, password, emailError, passwordError } = this.state;
        return (
            <Box width={"100%"} height={"100%"} display="flex" flexDirection={"column"} >
            <Box height={"100%"} className='LoginMainBox'>
                <Grid style={webStyle.mainContainerGrid} container>
                    <Grid item xs={12} sm={5} className="LoginLeftSection">
                        <img src={"https://facesvoicesmin0623-244474-react.b244474.dev.eastus.az.svc.builder.cafe/static/media/SignUpSideImg.c5990d26.png"} alt="side-img-signUp" style={webStyle.LoginSideImg} />
                    </Grid>

                    <Grid item xs={12} sm={7} className="LoginRightSection">
                        <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            style={{marginTop:"50px"}}
                        >
                            <Grid item xs={12}>
                                <Box style={webStyle.logoCard}>
                                    <img src={"./logo192.png"} alt="logo-img" className='LoginLogoImg' />
                                </Box>
                            </Grid>
                            <Grid item xs={12} className="LoginDetailsBlock" >
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Box>
                                            <Typography variant='h4' style={{marginTop:"40px"}}>Login</Typography>
                                        </Box>
                                        <Box className='LoginInputFields' style={{marginTop:"40px"}}>
                                            <form 
                                            // onSubmit={this.handleSubmit}
                                            >
                                                <FormControl style={webStyle.InputField}>
                                                    <TextField
                                                      
                                                        data-test-id="txtInputEmail"
                                                        variant="outlined"
                                                        size="small"
                                                        placeholder="Email id"
                                                        name="email"
                                                        type="text"
                                                        // value={email}
                                                        // onChange={this.handleChange}
                                                        // error={emailError !== ''}
                                                        // helperText={emailError}
                                                        fullWidth
                                                        // InputProps={{
                                                        //     startAdornment: (
                                                        //         <InputAdornment position="start"   style={{marginLeft:"-78px"}}>
                                                        //             <img src={"./logo192.png"} alt="mail-icon"/>
                                                        //         </InputAdornment>
                                                        //     ),
                                                        // }}
                                                    />
                                                </FormControl>
                                                <FormControl style={webStyle.InputField}>
                                                    <TextField
                                              
                                                        variant="outlined"
                                                        size="small"
                                                        data-test-id="txtInputPassword"
                                                        placeholder="Password"
                                                        type="password"
                                                        name="password"
                                                        // value={password}
                                                        // // onChange={this.handleChange}
                                                        // error={passwordError !== ''}
                                                        // helperText={passwordError}
                                                        // InputProps={{
                                                        //     startAdornment: (
                                                        //         <InputAdornment position="start"  style={{marginLeft:"-78px"}}>
                                                        //           <img src={"./logo192.png"} alt="lock-icon"/>
                                                        //         </InputAdornment>
                                                        //     ),
                                                        // }}
                                                         fullWidth

                                                    />
                                                </FormControl>
                                                <Box className='LoginRememberMe'>
                                                    <FormControlLabel
                                                        control={<Checkbox
                                                            data-test-id="btnCheck"
                                                            style={{fontSize:"15px"}}
                                                            color="primary"
                                                            // checked={this.state.checkedRememberMe}
                                                            // onChange={(event) => this.setState({ checkedRememberMe: event.target.checked })}
                                                            name="agree" />}
                                                            label="Remember Me"
                                                    />
                                                    <Typography className='LoginForgotPwd' variant='body2' style={{fontWeight:"bold"}}><Link href="/ForgotPasswordPhoneVerification" style={{fontWeight:"bold",fontSize:"15px" ,color:"grey"}}>Forget Password?</Link></Typography>
                                                </Box>
                                                {/* <Typography component="span" className='LoginInputError'>{this.state.FieldError}</Typography> */}
                                                <Button type="submit"
                                                    variant="contained" className='LoginBtn'
                                                    data-test-id="btnLogIn"
                                                >
                                                    Login
                                                </Button>
                                                <Typography variant='body2'>
                                                    Don't have an account?
                                                    &nbsp; <Link href="/SignUp" style={{fontWeight:"bold",color:"#005487",textDecoration:"underline"}}>SignUp</Link>
                                                </Typography>
                                            </form>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            </Box>
        )
    }
    // Customizable Area End
}

// Customizable Area Start
const webStyle = {
    mainContainerGrid:{
        height:"inherit"
    },
    logoCard: {
        width: "200px",
        height: "200px",
        boxShadow: "-1px 3px 13px -1px rgba(0,0,0,0.75)",
        borderRadius: "50%"
    },
    Login: {
        color: "#01548A",
        fontSize: "25px",
        fontWeight: "bold"
    } as const,
    InputField: {
        marginTop: "10px"
    },
    LoginBtn: {
        paddingLeft: "42%",
        paddingRight: "42%",
        textTransform: "none",
        backgroundColor: "#01548A",
        color: "#fff",
        fontWeight: "bold",
        borderRadius: "10px",
        marginTop: "5%",
        marginBottom: "5%",
    } as const,
    LoginSideImg:{
        width: "100%", 
        height: "100%",
    },
    
}
export {
    Login
} 
// Customizable Area End